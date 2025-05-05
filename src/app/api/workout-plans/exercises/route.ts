import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';
import { updateProgressTracking } from '@/lib/progress-tracking';

// PATCH handler for updating exercise status and tracking
export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { 
      exercise_id, 
      completed, 
      actual_sets, 
      actual_reps, 
      actual_weight, 
      actual_duration,
      notes 
    } = body;
    
    if (!exercise_id) {
      return NextResponse.json({ 
        error: 'Missing required field: exercise_id is required'
      }, { status: 400 });
    }
    
    // Verify the exercise belongs to a workout plan owned by the user
    const exerciseResult = await query(
      `SELECT wpe.*, wp.id as workout_plan_id, wp.user_id
      FROM workout_plan_exercises wpe
      JOIN workout_plans wp ON wpe.workout_plan_id = wp.id
      WHERE wpe.id = $1 AND wp.user_id = $2`,
      [exercise_id, userId]
    );
    
    if (exerciseResult.rows.length === 0) {
      return NextResponse.json({ error: 'Exercise not found or not owned by user' }, { status: 404 });
    }
    
    // Build the update query dynamically based on provided fields
    let updateFields = [];
    let queryParams = [];
    let paramIndex = 1;
    
    if (completed !== undefined) {
      updateFields.push(`completed = $${paramIndex}`);
      queryParams.push(completed);
      paramIndex++;
    }
    
    if (actual_sets !== undefined) {
      updateFields.push(`actual_sets = $${paramIndex}`);
      queryParams.push(actual_sets);
      paramIndex++;
    }
    
    if (actual_reps !== undefined) {
      updateFields.push(`actual_reps = $${paramIndex}`);
      queryParams.push(actual_reps);
      paramIndex++;
    }
    
    if (actual_weight !== undefined) {
      updateFields.push(`actual_weight = $${paramIndex}`);
      queryParams.push(actual_weight);
      paramIndex++;
    }
    
    if (actual_duration !== undefined) {
      updateFields.push(`actual_duration = $${paramIndex}`);
      queryParams.push(actual_duration);
      paramIndex++;
    }
    
    if (notes !== undefined) {
      updateFields.push(`notes = $${paramIndex}`);
      queryParams.push(notes);
      paramIndex++;
    }
    
    // Add completion date if marking as completed
    if (completed === true) {
      updateFields.push(`completion_date = $${paramIndex}`);
      queryParams.push(new Date());
      paramIndex++;
    }
    
    // Add update timestamp
    updateFields.push(`updated_at = NOW()`);
    
    // Add exercise ID and build final query
    queryParams.push(exercise_id);
    
    const updateQuery = `
      UPDATE workout_plan_exercises
      SET ${updateFields.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `;
    
    // Update the exercise
    const updateResult = await query(updateQuery, queryParams);
    
    // Get the workout plan ID to update progress tracking
    const workoutPlanId = exerciseResult.rows[0].workout_plan_id;
    
    // Update progress tracking
    await updateProgressTracking(userId, workoutPlanId);
    
    return NextResponse.json({ 
      exercise: updateResult.rows[0],
      updated_tracking: true
    });
  } catch (error) {
    console.error('Error updating exercise:', error);
    return NextResponse.json({ error: 'Failed to update exercise' }, { status: 500 });
  }
} 