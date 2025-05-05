import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

// Validation helper functions
const isValidAge = (age: number | null): boolean => {
  if (age === null) return true;
  return !isNaN(age) && age >= 1 && age <= 120;
};

const isValidWeight = (weight: number | null): boolean => {
  if (weight === null) return true;
  return !isNaN(weight) && weight >= 20 && weight <= 300;
};

const isValidHeight = (height: number | null): boolean => {
  if (height === null) return true;
  return !isNaN(height) && height >= 100 && height <= 250;
};

const calculateBMI = (weight: number | null, height: number | null): number | null => {
  if (!weight || !height) return null;
  return parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1));
};

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await query(
      'SELECT * FROM users WHERE id = $1',
      [session.user.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const {
      name,
      age,
      gender,
      weight,
      height,
      fitness_goal,
      dietary_preference,
      dietary_restrictions
    } = data;

    // Validation
    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!isValidAge(age)) {
      return NextResponse.json({ error: 'Invalid age value' }, { status: 400 });
    }

    if (!isValidWeight(weight)) {
      return NextResponse.json({ error: 'Invalid weight value' }, { status: 400 });
    }

    if (!isValidHeight(height)) {
      return NextResponse.json({ error: 'Invalid height value' }, { status: 400 });
    }

    // Calculate BMI if both weight and height are provided
    const bmi = calculateBMI(weight, height);

    try {
      const result = await query(
        `UPDATE users 
         SET name = $1,
             age = $2,
             gender = $3,
             weight = $4,
             height = $5,
             bmi = $6,
             fitness_goal = $7,
             dietary_preference = $8,
             dietary_restrictions = $9,
             updated_at = NOW()
         WHERE id = $10
         RETURNING *`,
        [
          name,
          age,
          gender,
          weight,
          height,
          bmi,
          fitness_goal,
          dietary_preference,
          Array.isArray(dietary_restrictions) ? dietary_restrictions : [],
          session.user.id
        ]
      );

      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 400 });
      }

      return NextResponse.json(result.rows[0]);
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 