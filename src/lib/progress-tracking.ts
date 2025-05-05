// Utility functions for progress tracking
import { query } from '@/lib/db';
import { sendProgressEmail } from '@/lib/email';

// Main function to update progress tracking in a centralized way
export async function updateProgressTracking(userId: string, workoutPlanId: string) {
  try {
    // Get the workout plan details
    const workoutPlanResult = await query(
      `SELECT wp.*, u.email, u.name FROM workout_plans wp 
       JOIN users u ON wp.user_id = u.id
       WHERE wp.id = $1 AND wp.user_id = $2`,
      [workoutPlanId, userId]
    );
    
    if (workoutPlanResult.rows.length === 0) {
      return { error: 'Workout plan not found' };
    }
    
    const workoutPlan = workoutPlanResult.rows[0];
    
    // Calculate current week number based on creation date
    const creationDate = new Date(workoutPlan.created_at);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - creationDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const currentWeek = Math.ceil(diffDays / 7);
    
    // Calculate week start and end dates
    const weekStart = new Date(creationDate);
    weekStart.setDate(weekStart.getDate() + (currentWeek - 1) * 7);
    
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    // Count exercises for this workout plan
    const exercisesResult = await query(
      `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN completed = true THEN 1 ELSE 0 END) as completed
      FROM workout_plan_exercises
      WHERE workout_plan_id = $1`,
      [workoutPlanId]
    );
    
    // Count meals for this workout plan
    const mealsResult = await query(
      `SELECT 
        COUNT(mpi.*) as total,
        SUM(CASE WHEN mpi.completed = true THEN 1 ELSE 0 END) as completed
      FROM meal_plan_items mpi
      JOIN meal_plans mp ON mpi.meal_plan_id = mp.id
      WHERE mp.workout_plan_id = $1`,
      [workoutPlanId]
    );
    
    const exercisesTotal = parseInt(exercisesResult.rows[0].total) || 0;
    const exercisesCompleted = parseInt(exercisesResult.rows[0].completed) || 0;
    const mealsTotal = parseInt(mealsResult.rows[0].total) || 0;
    const mealsCompleted = parseInt(mealsResult.rows[0].completed) || 0;
    
    // Check if there's an existing record for this week
    const existingTrackingResult = await query(
      `SELECT * FROM progress_tracking
      WHERE user_id = $1 AND workout_plan_id = $2 AND week_number = $3`,
      [userId, workoutPlanId, currentWeek]
    );
    
    let updatedTracking;
    
    if (existingTrackingResult.rows.length > 0) {
      // Update existing record
      const result = await query(
        `UPDATE progress_tracking
        SET 
          exercises_total = $1,
          exercises_completed = $2,
          meals_total = $3,
          meals_completed = $4,
          updated_at = NOW()
        WHERE user_id = $5 AND workout_plan_id = $6 AND week_number = $7
        RETURNING *`,
        [
          exercisesTotal,
          exercisesCompleted,
          mealsTotal,
          mealsCompleted,
          userId,
          workoutPlanId,
          currentWeek
        ]
      );
      
      updatedTracking = result.rows[0];
    } else {
      // Create new record
      const result = await query(
        `INSERT INTO progress_tracking (
          id,
          user_id, workout_plan_id, week_number,
          exercises_total, exercises_completed,
          meals_total, meals_completed,
          start_date, end_date,
          created_at
        )
        VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
        RETURNING *`,
        [
          userId,
          workoutPlanId,
          currentWeek,
          exercisesTotal,
          exercisesCompleted,
          mealsTotal,
          mealsCompleted,
          weekStart,
          weekEnd
        ]
      );
      
      updatedTracking = result.rows[0];
    }
    
    // Calculate percentages
    const exercisePercentage = exercisesTotal > 0 ? Math.round((exercisesCompleted / exercisesTotal) * 100) : 0;
    const mealPercentage = mealsTotal > 0 ? Math.round((mealsCompleted / mealsTotal) * 100) : 0;
    
    // Calculate overall completion percentage
    const overallCompletionPercentage = Math.round((exercisePercentage + mealPercentage) / 2);
    
    // Check if we've reached one of our email notification milestones (40%, 80%, 100%)
    const milestones = [40, 80, 100];
    const reachedMilestone = milestones.find(milestone => 
      overallCompletionPercentage >= milestone && 
      (existingTrackingResult.rows.length === 0 || 
       Math.round((parseInt(existingTrackingResult.rows[0].exercises_completed) / parseInt(existingTrackingResult.rows[0].exercises_total) * 100 + 
                  parseInt(existingTrackingResult.rows[0].meals_completed) / parseInt(existingTrackingResult.rows[0].meals_total) * 100) / 2) < milestone)
    );
    
    // Send email notification if a milestone has been reached
    if (reachedMilestone && workoutPlan.email) {
      try {
        await sendProgressEmail(
          workoutPlan.email,
          workoutPlan.name || 'Fitness Enthusiast',
          workoutPlan.name || 'Fitness Plan',
          reachedMilestone
        );
        console.log(`Milestone email sent for ${reachedMilestone}% completion`);
      } catch (emailError) {
        console.error('Error sending milestone email:', emailError);
        // Continue with the function even if email fails
      }
    }
    
    return {
      success: true,
      tracking: {
        week: currentWeek,
        exercises: {
          total: exercisesTotal,
          completed: exercisesCompleted,
          percentage: exercisePercentage
        },
        meals: {
          total: mealsTotal,
          completed: mealsCompleted,
          percentage: mealPercentage
        },
        start_date: weekStart.toISOString(),
        end_date: weekEnd.toISOString()
      },
      raw: updatedTracking
    };
  } catch (error) {
    console.error('Error updating progress tracking:', error);
    return { error: 'Failed to update progress tracking' };
  }
}

// Helper function to get the latest progress tracking for a user
export async function getUserProgressTracking(userId: string, workoutPlanId?: string) {
  try {
    let queryString = `
      SELECT * FROM progress_tracking
      WHERE user_id = $1
    `;
    
    const params = [userId];
    
    if (workoutPlanId) {
      queryString += ` AND workout_plan_id = $2`;
      params.push(workoutPlanId);
    }
    
    queryString += ` ORDER BY updated_at DESC LIMIT 1`;
    
    const result = await query(queryString, params);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const tracking = result.rows[0];
    
    // Calculate percentages
    const exercisePercentage = tracking.exercises_total > 0 
      ? Math.round((tracking.exercises_completed / tracking.exercises_total) * 100) 
      : 0;
    
    const mealPercentage = tracking.meals_total > 0 
      ? Math.round((tracking.meals_completed / tracking.meals_total) * 100) 
      : 0;
    
    return {
      week: tracking.week_number,
      exercises: {
        total: tracking.exercises_total,
        completed: tracking.exercises_completed,
        percentage: exercisePercentage
      },
      meals: {
        total: tracking.meals_total,
        completed: tracking.meals_completed,
        percentage: mealPercentage
      },
      start_date: tracking.start_date,
      end_date: tracking.end_date
    };
  } catch (error) {
    console.error('Error getting user progress tracking:', error);
    return null;
  }
} 