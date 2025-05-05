import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';
import { updateProgressTracking, getUserProgressTracking } from '@/lib/progress-tracking';

// GET handler for retrieving progress tracking data
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const workoutPlanId = searchParams.get('workout_plan_id');
    
    if (!workoutPlanId) {
      return NextResponse.json({ error: 'Workout plan ID is required' }, { status: 400 });
    }
    
    // Get the user's progress tracking for the specified workout plan
    const progressTracking = await getUserProgressTracking(session.user.id, workoutPlanId);
    
    if (!progressTracking) {
      // If no tracking exists yet, create an initial tracking record
      const newTracking = await updateProgressTracking(session.user.id, workoutPlanId);
      
      if ('error' in newTracking) {
        return NextResponse.json({ error: newTracking.error }, { status: 500 });
      }
      
      return NextResponse.json({ progressTracking: newTracking.tracking });
    }
    
    return NextResponse.json({ progressTracking });
  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { workout_plan_id } = body;
    
    if (!workout_plan_id) {
      return NextResponse.json({ error: 'Workout plan ID is required' }, { status: 400 });
    }
    
    // Update the progress tracking
    const result = await updateProgressTracking(session.user.id, workout_plan_id);
    
    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
    
    return NextResponse.json({ progressTracking: result.tracking });
  } catch (error) {
    console.error('Error updating progress:', error);
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
  }
} 