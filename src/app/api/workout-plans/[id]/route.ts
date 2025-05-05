import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

// GET handler - get a specific workout plan with its exercises
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const workoutPlanId = params.id;
    
    // First check if the workout plan exists and belongs to the user
    const planResult = await query(
      'SELECT * FROM workout_plans WHERE id = $1 AND user_id = $2',
      [workoutPlanId, userId]
    );
    
    if (planResult.rowCount === 0) {
      return NextResponse.json({ error: 'Workout plan not found' }, { status: 404 });
    }
    
    // Get the workout plan exercises
    const exercisesResult = await query(
      'SELECT * FROM workout_plan_exercises WHERE workout_plan_id = $1 ORDER BY day_of_week',
      [workoutPlanId]
    );
    
    // Combine plan and exercises
    const workoutPlan = {
      ...planResult.rows[0],
      exercises: exercisesResult.rows
    };
    
    return NextResponse.json({ workout_plan: workoutPlan });
  } catch (error) {
    console.error('Error fetching workout plan:', error);
    return NextResponse.json({ error: 'Failed to fetch workout plan' }, { status: 500 });
  }
}

// PUT handler - update a workout plan
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const workoutPlanId = params.id;
    const body = await req.json();
    const { 
      name, 
      description, 
      goal, 
      frequency, 
      duration_weeks,
      active,
      exercises = [] 
    } = body;
    
    // First check if the workout plan exists and belongs to the user
    const planResult = await query(
      'SELECT * FROM workout_plans WHERE id = $1 AND user_id = $2',
      [workoutPlanId, userId]
    );
    
    if (planResult.rowCount === 0) {
      return NextResponse.json({ error: 'Workout plan not found' }, { status: 404 });
    }
    
    // Start a transaction
    await query('BEGIN');
    
    try {
      // Update the workout plan
      const updateFields = [];
      const updateValues = [];
      let paramCounter = 1;
      
      if (name !== undefined) {
        updateFields.push(`name = $${paramCounter++}`);
        updateValues.push(name);
      }
      
      if (description !== undefined) {
        updateFields.push(`description = $${paramCounter++}`);
        updateValues.push(description);
      }
      
      if (goal !== undefined) {
        updateFields.push(`goal = $${paramCounter++}`);
        updateValues.push(goal);
      }
      
      if (frequency !== undefined) {
        updateFields.push(`frequency = $${paramCounter++}`);
        updateValues.push(frequency);
      }
      
      if (duration_weeks !== undefined) {
        updateFields.push(`duration_weeks = $${paramCounter++}`);
        updateValues.push(duration_weeks);
      }
      
      if (active !== undefined) {
        updateFields.push(`active = $${paramCounter++}`);
        updateValues.push(active);
      }
      
      // Always update the updated_at timestamp
      updateFields.push(`updated_at = CURRENT_TIMESTAMP`);
      
      if (updateFields.length > 0) {
        const updateQuery = `
          UPDATE workout_plans 
          SET ${updateFields.join(', ')} 
          WHERE id = $${paramCounter++} AND user_id = $${paramCounter++}
          RETURNING *
        `;
        
        updateValues.push(workoutPlanId);
        updateValues.push(userId);
        
        await query(updateQuery, updateValues);
      }
      
      // If exercises are provided, update them
      if (exercises.length > 0) {
        // Delete existing exercises
        await query(
          'DELETE FROM workout_plan_exercises WHERE workout_plan_id = $1',
          [workoutPlanId]
        );
        
        // Insert new exercises
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
      
      // Get the updated workout plan
      const updatedPlanResult = await query(
        'SELECT * FROM workout_plans WHERE id = $1',
        [workoutPlanId]
      );
      
      const updatedExercisesResult = await query(
        'SELECT * FROM workout_plan_exercises WHERE workout_plan_id = $1 ORDER BY day_of_week',
        [workoutPlanId]
      );
      
      const updatedWorkoutPlan = {
        ...updatedPlanResult.rows[0],
        exercises: updatedExercisesResult.rows
      };
      
      return NextResponse.json({ workout_plan: updatedWorkoutPlan });
    } catch (error) {
      // Rollback in case of error
      await query('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error updating workout plan:', error);
    return NextResponse.json({ error: 'Failed to update workout plan' }, { status: 500 });
  }
}

// DELETE handler - delete a workout plan
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const workoutPlanId = params.id;
    
    // First check if the workout plan exists and belongs to the user
    const planResult = await query(
      'SELECT * FROM workout_plans WHERE id = $1 AND user_id = $2',
      [workoutPlanId, userId]
    );
    
    if (planResult.rowCount === 0) {
      return NextResponse.json({ error: 'Workout plan not found' }, { status: 404 });
    }
    
    // Start a transaction
    await query('BEGIN');
    
    try {
      // Delete workout plan exercises (will cascade automatically due to foreign key)
      await query(
        'DELETE FROM workout_plan_exercises WHERE workout_plan_id = $1',
        [workoutPlanId]
      );
      
      // Delete associated meal plan items first (they have foreign key constraints)
      await query(`
        DELETE FROM meal_plan_items 
        WHERE meal_plan_id IN (
          SELECT id FROM meal_plans WHERE workout_plan_id = $1
        )`,
        [workoutPlanId]
      );
      
      // Delete associated meal plans
      await query(
        'DELETE FROM meal_plans WHERE workout_plan_id = $1',
        [workoutPlanId]
      );
      
      // Delete the workout plan
      await query(
        'DELETE FROM workout_plans WHERE id = $1 AND user_id = $2',
        [workoutPlanId, userId]
      );
      
      // Commit the transaction
      await query('COMMIT');
      
      return NextResponse.json({ success: true });
    } catch (error) {
      // Rollback in case of error
      await query('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error deleting workout plan:', error);
    return NextResponse.json({ error: 'Failed to delete workout plan' }, { status: 500 });
  }
} 