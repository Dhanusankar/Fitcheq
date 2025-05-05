import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { query } from '@/lib/db';
import { updateProgressTracking } from '@/lib/progress-tracking';

export async function POST(request: NextRequest) {
  try {
    // Get the session to verify authentication
    const session = await getServerSession();
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'You must be signed in to update progress' },
        { status: 401 }
      );
    }
    
    // Parse the request body
    const data = await request.json();
    const { workoutPlanId, exerciseId, mealItemId, completed } = data;
    
    if (!workoutPlanId) {
      return NextResponse.json(
        { error: 'Workout plan ID is required' },
        { status: 400 }
      );
    }
    
    // Get user ID from the session email
    const userResult = await query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );
    
    if (userResult.rows.length === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    const userId = userResult.rows[0].id;
    
    // Update the exercise or meal item completion status
    if (exerciseId) {
      // Verify exercise belongs to the workout plan
      const exerciseCheckResult = await query(
        'SELECT * FROM workout_plan_exercises WHERE id = $1 AND workout_plan_id = $2',
        [exerciseId, workoutPlanId]
      );
      
      if (exerciseCheckResult.rows.length === 0) {
        return NextResponse.json(
          { error: 'Exercise not found or does not belong to the specified workout plan' },
          { status: 404 }
        );
      }
      
      // Update exercise completion
      await query(
        'UPDATE workout_plan_exercises SET completed = $1, updated_at = NOW() WHERE id = $2',
        [completed, exerciseId]
      );
    } else if (mealItemId) {
      // Verify meal item belongs to the workout plan
      const mealItemCheckResult = await query(
        `SELECT mpi.* FROM meal_plan_items mpi
         JOIN meal_plans mp ON mpi.meal_plan_id = mp.id
         WHERE mpi.id = $1 AND mp.workout_plan_id = $2`,
        [mealItemId, workoutPlanId]
      );
      
      if (mealItemCheckResult.rows.length === 0) {
        return NextResponse.json(
          { error: 'Meal item not found or does not belong to the specified workout plan' },
          { status: 404 }
        );
      }
      
      // Update meal item completion
      await query(
        'UPDATE meal_plan_items SET completed = $1, updated_at = NOW() WHERE id = $2',
        [completed, mealItemId]
      );
    } else {
      return NextResponse.json(
        { error: 'Either exerciseId or mealItemId is required' },
        { status: 400 }
      );
    }
    
    // Update progress tracking and trigger email notifications if milestones are reached
    const progressTrackingResult = await updateProgressTracking(userId, workoutPlanId);
    
    if (progressTrackingResult.error) {
      return NextResponse.json(
        { error: progressTrackingResult.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Progress updated successfully',
      tracking: progressTrackingResult.tracking
    });
    
  } catch (error) {
    console.error('Error updating progress:', error);
    return NextResponse.json(
      { error: 'Failed to update progress' },
      { status: 500 }
    );
  }
} 