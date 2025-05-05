import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';
import { generateMealPlan } from '@/app/api/meal-plans/route';

// Helper functions imported from the parent route
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

// POST handler for workout program generation
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { 
      goal, 
      frequency = 3, 
      duration_weeks = 4,
      fitness_level = 'beginner',
      preferred_equipment = []
    } = body;

    if (!goal) {
      return NextResponse.json({ 
        error: 'Fitness goal is required for program generation' 
      }, { status: 400 });
    }

    // Get user profile for personalization
    const userResult = await query(
      'SELECT age, gender, fitness_goal, weight, height, bmi FROM users WHERE id = $1',
      [userId]
    );
    
    const user = userResult.rows[0];

    // Get exercises based on the goal and equipment
    let exerciseQuery = `
      SELECT * FROM exercises 
      WHERE category = $1 OR category = 'Core'
    `;
    
    const queryParams: any[] = [
      mapGoalToCategory(goal)
    ];
    
    // Add equipment filter if specified
    if (preferred_equipment && preferred_equipment.length > 0) {
      exerciseQuery += ` AND equipment && $2`;
      queryParams.push(preferred_equipment);
    }
    
    // Add difficulty filter based on fitness level
    if (fitness_level) {
      exerciseQuery += ` AND (difficulty = $${queryParams.length + 1} OR difficulty IS NULL)`;
      queryParams.push(mapFitnessLevelToDifficulty(fitness_level));
    }
    
    const exercisesResult = await query(exerciseQuery, queryParams);
    const availableExercises = exercisesResult.rows;
    
    if (availableExercises.length === 0) {
      return NextResponse.json({ 
        error: 'No suitable exercises found for the given criteria' 
      }, { status: 404 });
    }

    // Generate workout plan
    const workoutPlan = generateWorkoutPlan(
      userId,
      goal,
      frequency,
      duration_weeks,
      availableExercises
    );

    // Start a transaction
    await query('BEGIN');

    try {
      // Insert workout plan
      const planResult = await query(
        `
        INSERT INTO workout_plans (
          id,
          user_id, 
          name, 
          description, 
          goal, 
          frequency, 
          duration_weeks
        )
        VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
        [
          userId, 
          `${mapGoalToName(goal)} Plan`, 
          `${duration_weeks}-week ${mapGoalToName(goal)} program, ${frequency} times per week`, 
          goal, 
          frequency, 
          duration_weeks
        ]
      );

      const workoutPlanId = planResult.rows[0].id;
      
      // Insert exercises
      for (const exercise of workoutPlan.exercises) {
        await query(
          `
          INSERT INTO workout_plan_exercises (
            id,
            workout_plan_id,
            exercise_id,
            exercise_name,
            day_of_week,
            sets,
            reps,
            weight,
            duration
          )
          VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8)
          `,
          [
            workoutPlanId,
            exercise.exercise_id,
            exercise.exercise_name,
            exercise.day_of_week,
            exercise.sets,
            exercise.reps,
            exercise.weight,
            exercise.duration
          ]
        );
      }
      
      // Commit the transaction
      await query('COMMIT');
      
      // Get the complete workout plan with exercises
      const completeWorkoutPlan = await getWorkoutPlanWithExercises(workoutPlanId);
      
      // Generate meal plans for the workout
      try {
        const mealPlans = await generateMealPlan(userId, workoutPlanId, goal, frequency);
        console.log('Meal plans generated for workout plan:', workoutPlanId);
        
        // Return both workout plan and meal plans in the response
        return NextResponse.json({ 
          workout_plan: completeWorkoutPlan,
          meal_plans: mealPlans 
        }, { status: 201 });
      } catch (mealPlanError) {
        console.error('Error generating meal plans:', mealPlanError);
        // Return workout plan with error message about meal plan
        return NextResponse.json({ 
          workout_plan: completeWorkoutPlan,
          meal_plan_error: 'Failed to generate meal plans. Please ensure your profile has weight, height, age, and gender information.'
        }, { status: 201 });
      }
    } catch (error) {
      // Rollback in case of error
      await query('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error generating workout plan:', error);
    return NextResponse.json({ error: 'Failed to generate workout plan' }, { status: 500 });
  }
} 