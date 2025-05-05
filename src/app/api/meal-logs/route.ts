import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { getServerSession } from 'next-auth';
import { initDatabase } from '@/lib/init-db';

// Initialize PostgreSQL connection pool
const pool = new Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : {
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT || '5432'),
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: process.env.POSTGRES_DATABASE || 'fitness_game',
      }
);

// Make sure the database is initialized
initDatabase().catch(console.error);

// GET endpoint to fetch user's meal logs
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'You must be signed in to view your meal logs' },
        { status: 401 }
      );
    }

    // Get date filters from query params if present
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    let query = `
      SELECT ml.*, m.name as meal_name, m.image_url
      FROM meal_logs ml
      LEFT JOIN meals m ON ml.meal_id = m.id
      WHERE ml.user_id = $1
    `;
    
    const params: any[] = [session.user.id];
    let paramIndex = 2;
    
    if (startDate) {
      query += ` AND ml.consumed_at >= $${paramIndex}`;
      params.push(startDate);
      paramIndex++;
    }
    
    if (endDate) {
      query += ` AND ml.consumed_at <= $${paramIndex}`;
      params.push(endDate);
    }
    
    query += ' ORDER BY ml.consumed_at DESC';
    
    const result = await pool.query(query, params);

    return NextResponse.json({ mealLogs: result.rows });
  } catch (error) {
    console.error('Error fetching meal logs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch meal logs' },
      { status: 500 }
    );
  }
}

// POST endpoint to create a new meal log
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'You must be signed in to log a meal' },
        { status: 401 }
      );
    }

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
    } = await request.json();

    // Basic validation
    if ((!meal_id && !meal_name) || !calories) {
      return NextResponse.json(
        { error: 'Meal and calories are required' },
        { status: 400 }
      );
    }

    // Insert meal log into database
    const result = await pool.query(
      `INSERT INTO meal_logs (
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
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *`,
      [
        session.user.id,
        meal_id || null,
        meal_name || null,
        portion || 1,
        calories,
        protein || 0,
        carbs || 0,
        fats || 0,
        meal_time || null,
        notes || null,
        consumed_at ? new Date(consumed_at) : new Date()
      ]
    );

    const newLog = result.rows[0];

    return NextResponse.json({ mealLog: newLog }, { status: 201 });
  } catch (error) {
    console.error('Error creating meal log:', error);
    return NextResponse.json(
      { error: 'Failed to create meal log' },
      { status: 500 }
    );
  }
} 