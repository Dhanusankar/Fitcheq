import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { addExercises } from '@/lib/add-exercises';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    // Only allow admins to run this (you can modify this check as needed)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Add exercises to the database
    const result = await addExercises();
    
    if (result) {
      return NextResponse.json({ message: 'Exercises added successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to add exercises' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in seed-exercises route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 