import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET handler - fetch user's nutrition logs
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get('limit') || '10';
    
    // Query to get user's recent nutrition logs
    // Use COALESCE to preserve the meal_name from meal_logs when the joined meal is null (custom meals)
    const result = await query(`
      SELECT 
        ml.id,
        ml.meal_id,
        COALESCE(m.name, ml.meal_name) as meal_name,
        ml.portion,
        ml.calories,
        ml.protein,
        ml.carbs,
        ml.fats,
        ml.meal_time,
        ml.notes,
        ml.consumed_at,
        ml.created_at,
        m.category
      FROM meal_logs ml
      LEFT JOIN meals m ON ml.meal_id = m.id
      WHERE ml.user_id = $1
      ORDER BY ml.consumed_at DESC, ml.created_at DESC
      LIMIT $2
    `, [userId, parseInt(limit)]);

    return NextResponse.json({ logs: result.rows });
  } catch (error) {
    console.error('Error fetching nutrition logs:', error);
    return NextResponse.json({ error: 'Failed to fetch nutrition logs' }, { status: 500 });
  }
}

// POST handler - create a new nutrition log
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { 
      meal_id, 
      meal_name, 
      portion, 
      calories, 
      protein, 
      carbs, 
      fats, 
      meal_time, 
      notes,
      consumed_at 
    } = body;

    if ((!meal_id && !meal_name) || !calories) {
      return NextResponse.json({ 
        error: 'Meal ID/name and calories are required' 
      }, { status: 400 });
    }

    // Insert nutrition log into the database
    const result = await query(
      `
      INSERT INTO meal_logs (
        user_id, 
        meal_id, 
        meal_name, 
        portion, 
        calories, 
        protein, 
        carbs, 
        fats, 
        meal_time, 
        notes,
        consumed_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
      `,
      [
        userId, 
        meal_id || null, 
        meal_name || null, 
        portion || 1.0, 
        calories, 
        protein || null, 
        carbs || null, 
        fats || null, 
        meal_time || null, 
        notes || null,
        consumed_at || new Date()
      ]
    );

    return NextResponse.json({ log: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating nutrition log:', error);
    return NextResponse.json({ error: 'Failed to create nutrition log' }, { status: 500 });
  }
} 