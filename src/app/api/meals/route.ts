import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET handler - fetch meals
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Query to get all meals
    const result = await query(`
      SELECT * FROM meals
      ORDER BY name ASC
    `);

    return NextResponse.json({ meals: result.rows });
  } catch (error) {
    console.error('Error fetching meals:', error);
    return NextResponse.json({ error: 'Failed to fetch meals' }, { status: 500 });
  }
}

// POST handler - create a new meal
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { 
      name, 
      category, 
      calories, 
      protein, 
      carbs, 
      fats, 
      description, 
      image_url 
    } = body;

    if (!name || !calories) {
      return NextResponse.json({ error: 'Name and calories are required' }, { status: 400 });
    }

    // Insert meal into the database
    const result = await query(
      `
      INSERT INTO meals (
        name, 
        category, 
        calories, 
        protein, 
        carbs, 
        fats, 
        description, 
        image_url
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
      `,
      [
        name, 
        category || null, 
        calories, 
        protein || null, 
        carbs || null, 
        fats || null, 
        description || null, 
        image_url || null
      ]
    );

    return NextResponse.json({ meal: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating meal:', error);
    return NextResponse.json({ error: 'Failed to create meal' }, { status: 500 });
  }
} 