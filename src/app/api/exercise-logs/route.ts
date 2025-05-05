import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET handler - fetch user's exercise logs
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const exerciseId = searchParams.get('exercise_id');
    const startDate = searchParams.get('start_date');
    const endDate = searchParams.get('end_date');
    const limit = searchParams.get('limit');

    let queryStr = `
      SELECT el.*, e.name as base_exercise_name, e.category
      FROM exercise_logs el
      LEFT JOIN exercises e ON el.exercise_id = e.id
      WHERE el.user_id = $1
    `;
    const queryParams = [session.user.id];

    if (exerciseId) {
      queryStr += ` AND el.exercise_id = $${queryParams.length + 1}`;
      queryParams.push(exerciseId);
    }

    if (startDate && endDate) {
      queryStr += ` AND el.completed_at BETWEEN $${queryParams.length + 1} AND $${queryParams.length + 2}`;
      queryParams.push(startDate, endDate);
    }

    // Order by completed_at and created_at DESC to show latest first
    queryStr += ` ORDER BY el.completed_at DESC, el.created_at DESC`;

    // Add limit if specified
    if (limit) {
      queryStr += ` LIMIT $${queryParams.length + 1}`;
      queryParams.push(limit.toString());
    }

    const exerciseLogs = await query(queryStr, queryParams);
    return NextResponse.json(exerciseLogs.rows);
  } catch (error) {
    console.error('[EXERCISE_LOGS_GET]', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch exercise logs' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// POST handler - create a new exercise log
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const {
      exercise_id,
      exercise_name,
      sets,
      reps,
      weight,
      duration,
      notes,
      completed_at
    } = await req.json();

    // Basic validation
    if (!exercise_name) {
      return new NextResponse(
        JSON.stringify({ error: 'Exercise name is required' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create exercise log entry - only include exercise_id if it exists and is valid
    const result = await query(
      `
      INSERT INTO exercise_logs (
        id,
        user_id,
        ${exercise_id ? 'exercise_id,' : ''}
        exercise_name,
        sets,
        reps,
        weight,
        duration,
        notes,
        completed_at
      ) VALUES (
        gen_random_uuid(),
        $1,
        ${exercise_id ? '$2,' : ''}
        $${exercise_id ? '3' : '2'},
        $${exercise_id ? '4' : '3'},
        $${exercise_id ? '5' : '4'},
        $${exercise_id ? '6' : '5'},
        $${exercise_id ? '7' : '6'},
        $${exercise_id ? '8' : '7'},
        $${exercise_id ? '9' : '8'}
      )
      RETURNING *
      `,
      exercise_id 
        ? [
            session.user.id,
            exercise_id,
            exercise_name,
            sets || null,
            reps || null,
            weight || null,
            duration || null,
            notes || null,
            completed_at ? new Date(completed_at) : new Date()
          ]
        : [
            session.user.id,
            exercise_name,
            sets || null,
            reps || null,
            weight || null,
            duration || null,
            notes || null,
            completed_at ? new Date(completed_at) : new Date()
          ]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('[EXERCISE_LOGS_POST]', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to create exercise log' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 