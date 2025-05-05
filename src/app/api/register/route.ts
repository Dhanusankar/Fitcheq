import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Pool } from 'pg';
import { initDatabase } from '@/lib/init-db';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'fitness_game',
});

// Ensure database tables are initialized
let dbInitialized = false;
async function ensureDbInitialized() {
  if (!dbInitialized) {
    try {
      await initDatabase();
      dbInitialized = true;
    } catch (error) {
      console.error('Failed to initialize database:', error);
      throw new Error('Database initialization failed');
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Ensure database is initialized before proceeding
    await ensureDbInitialized();

    const { 
      name, 
      email, 
      password, 
      age, 
      gender, 
      weight, 
      height, 
      bmi, 
      fitness_goal, 
      dietary_preference, 
      dietary_restrictions, 
      avatar_url 
    } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and password are required' },
        { status: 400 }
      );
    }

    // Age validation
    if (age !== undefined && (age < 18 || age > 70)) {
      return NextResponse.json(
        { error: 'Age must be between 18 and 70' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUserResult = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    
    if (existingUserResult.rowCount && existingUserResult.rowCount > 0) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Determine age range based on PRD requirements
    // All users are adults (18-70) according to the PRD
    const age_range = 'adult';

    // Create user with the new fields
    const result = await pool.query(
      `INSERT INTO users (
        id,
        name, 
        email, 
        password, 
        age, 
        gender, 
        weight, 
        height, 
        bmi, 
        fitness_goal, 
        dietary_preference, 
        dietary_restrictions, 
        avatar_url,
        age_range
      ) VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
      RETURNING id, name, email, age, gender, weight, height, bmi, fitness_goal, dietary_preference, dietary_restrictions, avatar_url, age_range`,
      [
        name, 
        email, 
        hashedPassword, 
        age || null, 
        gender || null, 
        weight || null, 
        height || null, 
        bmi || null, 
        fitness_goal || null, 
        dietary_preference || null, 
        dietary_restrictions || [], 
        avatar_url || null,
        age_range
      ]
    );

    const newUser = result.rows[0];

    return NextResponse.json({
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        age: newUser.age,
        gender: newUser.gender,
        weight: newUser.weight,
        height: newUser.height,
        bmi: newUser.bmi,
        fitness_goal: newUser.fitness_goal,
        dietary_preference: newUser.dietary_preference,
        dietary_restrictions: newUser.dietary_restrictions,
        avatar_url: newUser.avatar_url,
        age_range: newUser.age_range
      }
    }, { status: 201 });
  } catch (error: any) {
    console.error('Registration error:', error);
    
    // Provide more specific error messages based on the error type
    if (error.code === '3D000') {
      return NextResponse.json(
        { error: 'Database connection failed. Please try again later.' },
        { status: 500 }
      );
    } else if (error.code === '42P01') {
      return NextResponse.json(
        { error: 'Database tables not properly initialized. Please try again.' },
        { status: 500 }
      );
    } else if (error.message === 'Database initialization failed') {
      return NextResponse.json(
        { error: 'Failed to initialize database. Please try again later.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Registration failed. Please try again later.' },
      { status: 500 }
    );
  }
} 