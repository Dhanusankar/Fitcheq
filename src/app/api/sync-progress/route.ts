import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';
import { updateProgressTracking } from '@/lib/progress-tracking';

// Default tracking data to prevent UI errors
const defaultTrackingData = {
  week: 1,
  exercises: {
    total: 0,
    completed: 0,
    percentage: 0
  },
  meals: {
    total: 0,
    completed: 0,
    percentage: 0
  },
  start_date: new Date().toISOString(),
  end_date: new Date().toISOString()
};

/**
 * GET handler to retrieve a summary of all workout plans and their progress
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all active workout plans for the user
    const workoutPlansResult = await query(
      `SELECT id, name, goal, frequency, duration_weeks, active, created_at
       FROM workout_plans
       WHERE user_id = $1 AND active = true
       ORDER BY created_at DESC`,
      [session.user.id]
    );
    
    const workoutPlans = workoutPlansResult.rows;
    
    // Get progress tracking for each workout plan
    const progressData = await Promise.all(
      workoutPlans.map(async (plan) => {
        try {
          const result = await updateProgressTracking(session.user.id, plan.id);
          
          // If there was an error or no tracking data
          if (result.error || !result.tracking) {
            console.warn(`Could not get tracking for plan ${plan.id}: ${result.error || 'No tracking data'}`);
            return {
              workoutPlanId: plan.id,
              workoutPlanName: plan.name,
              goal: plan.goal,
              tracking: defaultTrackingData
            };
          }
          
          return {
            workoutPlanId: plan.id,
            workoutPlanName: plan.name,
            goal: plan.goal,
            tracking: result.tracking
          };
        } catch (error) {
          console.error(`Error processing plan ${plan.id}:`, error);
          return {
            workoutPlanId: plan.id,
            workoutPlanName: plan.name,
            goal: plan.goal,
            tracking: defaultTrackingData
          };
        }
      })
    );
    
    return NextResponse.json({ 
      progress: progressData,
      updated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error syncing progress:', error);
    return NextResponse.json({ error: 'Failed to sync progress' }, { status: 500 });
  }
}

/**
 * POST handler to force update progress tracking for all workout plans
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get the workout plan ID from the request body if provided
    const body = await req.json().catch(() => ({}));
    const { workout_plan_id } = body;
    
    if (workout_plan_id) {
      // Update a specific workout plan
      try {
        const result = await updateProgressTracking(session.user.id, workout_plan_id);
        
        if (result.error) {
          return NextResponse.json({ 
            error: result.error,
            progress: {
              workoutPlanId: workout_plan_id,
              tracking: defaultTrackingData
            },
            updated: new Date().toISOString()
          }, { status: 500 });
        }
        
        return NextResponse.json({ 
          progress: {
            workoutPlanId: workout_plan_id,
            tracking: result.tracking || defaultTrackingData
          },
          updated: new Date().toISOString()
        });
      } catch (error) {
        console.error(`Error updating plan ${workout_plan_id}:`, error);
        return NextResponse.json({ 
          error: 'Failed to update progress tracking',
          progress: {
            workoutPlanId: workout_plan_id,
            tracking: defaultTrackingData
          },
          updated: new Date().toISOString()
        }, { status: 500 });
      }
    } else {
      // Update all active workout plans
      const workoutPlansResult = await query(
        `SELECT id, name FROM workout_plans WHERE user_id = $1 AND active = true`,
        [session.user.id]
      );
      
      const workoutPlans = workoutPlansResult.rows;
      
      // Update progress tracking for each workout plan
      const progressData = await Promise.all(
        workoutPlans.map(async (plan) => {
          try {
            const result = await updateProgressTracking(session.user.id, plan.id);
            
            // If there was an error or no tracking data
            if (result.error || !result.tracking) {
              return {
                workoutPlanId: plan.id,
                workoutPlanName: plan.name,
                tracking: defaultTrackingData
              };
            }
            
            return {
              workoutPlanId: plan.id,
              workoutPlanName: plan.name,
              tracking: result.tracking
            };
          } catch (error) {
            console.error(`Error processing plan ${plan.id}:`, error);
            return {
              workoutPlanId: plan.id,
              workoutPlanName: plan.name,
              tracking: defaultTrackingData
            };
          }
        })
      );
      
      return NextResponse.json({ 
        progress: progressData,
        updated: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Error syncing progress:', error);
    return NextResponse.json({ error: 'Failed to sync progress' }, { status: 500 });
  }
} 