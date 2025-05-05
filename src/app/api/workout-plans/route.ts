import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

// GET handler - get all workout plans for the current user
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    
    // Get search params for filtering
    const url = new URL(req.url);
    const active = url.searchParams.get('active');
    const goal = url.searchParams.get('goal');
    
    // Build query with filters
    let queryStr = 'SELECT * FROM workout_plans WHERE user_id = $1';
    const queryParams: any[] = [userId];
    
    if (active) {
      queryStr += ' AND active = $2';
      queryParams.push(active === 'true');
    }
    
    if (goal) {
      queryStr += active ? ' AND goal = $3' : ' AND goal = $2';
      queryParams.push(goal);
    }
    
    queryStr += ' ORDER BY created_at DESC';
    
    const result = await query(queryStr, queryParams);
    
    return NextResponse.json({ workout_plans: result.rows });
  } catch (error) {
    console.error('Error fetching workout plans:', error);
    return NextResponse.json({ error: 'Failed to fetch workout plans' }, { status: 500 });
  }
}

// POST handler - create a new workout plan
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { 
      name, 
      description, 
      goal, 
      frequency, 
      duration_weeks,
      exercises = [] 
    } = body;

    if (!name || !goal) {
      return NextResponse.json({ 
        error: 'Name and goal are required' 
      }, { status: 400 });
    }

    // Start a transaction
    await query('BEGIN');

    try {
      // Insert workout plan
      const planResult = await query(
        `
        INSERT INTO workout_plans (
          user_id, 
          name, 
          description, 
          goal, 
          frequency, 
          duration_weeks
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
        [
          userId, 
          name, 
          description || null, 
          goal, 
          frequency || 3, 
          duration_weeks || 4
        ]
      );

      const workoutPlanId = planResult.rows[0].id;
      
      // Insert exercises if provided
      if (exercises.length > 0) {
        for (const exercise of exercises) {
          await query(
            `
            INSERT INTO workout_plan_exercises (
              workout_plan_id,
              exercise_id,
              exercise_name,
              day_of_week,
              sets,
              reps,
              weight,
              duration
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `,
            [
              workoutPlanId,
              exercise.exercise_id || null,
              exercise.exercise_name || null,
              exercise.day_of_week || 1,
              exercise.sets || null,
              exercise.reps || null,
              exercise.weight || null,
              exercise.duration || null
            ]
          );
        }
      }
      
      // Commit the transaction
      await query('COMMIT');
      
      // Get the complete workout plan with exercises
      const completeWorkoutPlan = await getWorkoutPlanWithExercises(workoutPlanId);
      
      return NextResponse.json({ workout_plan: completeWorkoutPlan }, { status: 201 });
    } catch (error) {
      // Rollback in case of error
      await query('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error creating workout plan:', error);
    return NextResponse.json({ error: 'Failed to create workout plan' }, { status: 500 });
  }
}

// Helper function to get a complete workout plan with exercises
async function getWorkoutPlanWithExercises(workoutPlanId: string) {
  const planResult = await query(
    'SELECT * FROM workout_plans WHERE id = $1', 
    [workoutPlanId]
  );
  
  const exercisesResult = await query(
    'SELECT * FROM workout_plan_exercises WHERE workout_plan_id = $1 ORDER BY day_of_week',
    [workoutPlanId]
  );
  
  return {
    ...planResult.rows[0],
    exercises: exercisesResult.rows
  };
}

// Helper function to map fitness goal to exercise category
function mapGoalToCategory(goal: string): string {
  switch (goal.toLowerCase()) {
    case 'muscle_gain':
    case 'muscle gain':
    case 'strength':
      return 'Strength';
    case 'fat_loss':
    case 'fat loss':
    case 'weight_loss':
    case 'weight loss':
      return 'Cardio';
    case 'cardiovascular':
    case 'cardiovascular_health':
    case 'heart_health':
      return 'Cardio';
    default:
      return 'Strength';
  }
}

// Helper function to map fitness goal to plan name
function mapGoalToName(goal: string): string {
  switch (goal.toLowerCase()) {
    case 'muscle_gain':
    case 'muscle gain':
    case 'strength':
      return 'Strength Training';
    case 'fat_loss':
    case 'fat loss':
    case 'weight_loss':
    case 'weight loss':
      return 'Weight Loss';
    case 'cardiovascular':
    case 'cardiovascular_health':
    case 'heart_health':
      return 'Cardiovascular Health';
    default:
      return 'Fitness';
  }
}

// Helper function to map fitness level to exercise difficulty
function mapFitnessLevelToDifficulty(level: string): string {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'Beginner';
    case 'intermediate':
      return 'Intermediate';
    case 'advanced':
      return 'Advanced';
    default:
      return 'Beginner';
  }
}

// Function to generate a workout plan based on user preferences
function generateWorkoutPlan(
  userId: string,
  goal: string,
  frequency: number,
  duration_weeks: number,
  availableExercises: any[]
) {
  // Filter exercises by goal-related categories
  const strengthExercises = availableExercises.filter(e => e.category === 'Strength');
  const cardioExercises = availableExercises.filter(e => e.category === 'Cardio');
  const coreExercises = availableExercises.filter(e => e.category === 'Core');
  
  // Create an array to store the workout plan exercises
  const planExercises: any[] = [];
  
  // Generate workout days based on frequency
  for (let week = 1; week <= duration_weeks; week++) {
    for (let day = 1; day <= frequency; day++) {
      // Day of week (1-7 for Monday-Sunday)
      const dayOfWeek = day;
      
      // For each day, select exercises based on the goal
      if (goal.toLowerCase().includes('muscle') || goal.toLowerCase().includes('strength')) {
        // Strength-focused workout
        addRandomExercises(planExercises, strengthExercises, 3, dayOfWeek, {
          sets: 3,
          reps: 10,
        });
        
        // Add 1 core exercise
        addRandomExercises(planExercises, coreExercises, 1, dayOfWeek, {
          sets: 3,
          reps: 15,
        });
        
        // Add short cardio finisher for 1 day per week
        if (day === frequency) {
          addRandomExercises(planExercises, cardioExercises, 1, dayOfWeek, {
            duration: 10, // 10 minutes
          });
        }
      } 
      else if (goal.toLowerCase().includes('fat') || goal.toLowerCase().includes('weight_loss')) {
        // Weight loss workout
        addRandomExercises(planExercises, cardioExercises, 1, dayOfWeek, {
          duration: 20, // 20 minutes
        });
        
        // Add some strength exercises to preserve muscle
        addRandomExercises(planExercises, strengthExercises, 2, dayOfWeek, {
          sets: 3,
          reps: 12,
        });
        
        // Add 1 core exercise
        addRandomExercises(planExercises, coreExercises, 1, dayOfWeek, {
          sets: 3,
          reps: 15,
        });
      }
      else if (goal.toLowerCase().includes('cardio') || goal.toLowerCase().includes('heart')) {
        // Cardiovascular health workout
        addRandomExercises(planExercises, cardioExercises, 2, dayOfWeek, {
          duration: 15, // 15 minutes per exercise
        });
        
        // Add some light strength training
        if (day % 2 === 0) { // Every other day
          addRandomExercises(planExercises, strengthExercises, 1, dayOfWeek, {
            sets: 2,
            reps: 15,
          });
        }
        
        // Add 1 core exercise
        if (day % 2 === 1) { // Alternate days
          addRandomExercises(planExercises, coreExercises, 1, dayOfWeek, {
            sets: 2,
            reps: 20,
          });
        }
      }
      else {
        // Balanced workout (default)
        addRandomExercises(planExercises, strengthExercises, 2, dayOfWeek, {
          sets: 3, 
          reps: 10,
        });
        
        addRandomExercises(planExercises, cardioExercises, 1, dayOfWeek, {
          duration: 15,
        });
        
        addRandomExercises(planExercises, coreExercises, 1, dayOfWeek, {
          sets: 3,
          reps: 15,
        });
      }
    }
  }
  
  return {
    user_id: userId,
    goal,
    frequency,
    duration_weeks,
    exercises: planExercises,
  };
}

// Helper function to add random exercises to the plan
function addRandomExercises(
  planExercises: any[],
  availableExercises: any[],
  count: number,
  dayOfWeek: number,
  defaults: { sets?: number, reps?: number, duration?: number }
) {
  // If not enough exercises available, use what we have
  const actualCount = Math.min(count, availableExercises.length);
  
  if (actualCount === 0) return;
  
  // Randomly select exercises
  const shuffled = [...availableExercises].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, actualCount);
  
  // Add selected exercises to the plan
  for (const exercise of selected) {
    planExercises.push({
      exercise_id: exercise.id,
      exercise_name: exercise.name,
      day_of_week: dayOfWeek,
      sets: defaults.sets || null,
      reps: defaults.reps || null,
      weight: null, // Weight is personalized during workouts
      duration: defaults.duration || null
    });
  }
} 