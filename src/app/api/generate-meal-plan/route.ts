import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';
import { generateMealPlan } from '@/app/api/meal-plans/route';

// POST handler for manual meal plan generation
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { workout_plan_id } = body;
    
    if (!workout_plan_id) {
      return NextResponse.json({ error: 'Missing workout_plan_id' }, { status: 400 });
    }
    
    // Verify workout plan exists and belongs to user
    const workoutPlanResult = await query(
      `SELECT * FROM workout_plans WHERE id = $1 AND user_id = $2`,
      [workout_plan_id, userId]
    );
    
    if (workoutPlanResult.rows.length === 0) {
      return NextResponse.json({ error: 'Workout plan not found or access denied' }, { status: 404 });
    }
    
    const workoutPlan = workoutPlanResult.rows[0];
    const { frequency, goal } = workoutPlan;

    try {
      // Generate meal plans for the workout plan
      const mealPlans = await generateMealPlan(userId, workout_plan_id, goal, frequency);
      
      return NextResponse.json({ 
        message: 'Meal plans generated successfully',
        meal_plans: mealPlans
      });
    } catch (error: any) {
      console.error('Error generating meal plans:', error);
      return NextResponse.json({ 
        error: 'Failed to generate meal plans',
        details: error.message
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in meal plan generation endpoint:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 