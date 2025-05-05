import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { 
  runMealPlanIntegrationMigrations, 
  updateMealPlansAPI, 
  updateWorkoutPlanExerciseTable 
} from '@/lib/db-migrations';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    // Only allow in development environment for safety
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json(
        { error: 'This endpoint is only available in development mode' },
        { status: 403 }
      );
    }
    
    const results = {
      mealPlanIntegration: await runMealPlanIntegrationMigrations(),
      mealPlansAPI: await updateMealPlansAPI(),
      workoutPlanExercises: await updateWorkoutPlanExerciseTable()
    };
    
    return NextResponse.json({ 
      message: 'Migrations completed',
      results 
    });
  } catch (error) {
    console.error('Error running migrations:', error);
    return NextResponse.json({ error: 'Failed to run migrations' }, { status: 500 });
  }
} 