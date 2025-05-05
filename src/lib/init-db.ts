import { Pool } from 'pg';

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

export async function initDatabase() {
  try {
    // Enable pgcrypto extension for gen_random_uuid()
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
    
    // Create users table if it doesn't exist with updated fields
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        age INTEGER,
        gender VARCHAR(50),
        weight DECIMAL(5,2),
        height DECIMAL(5,2),
        bmi DECIMAL(4,2),
        fitness_goal VARCHAR(50),
        dietary_preference VARCHAR(255),
        dietary_restrictions TEXT[],
        avatar_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Check for existing age_range column and update it if it exists without a default
    try {
      // First check if the column exists
      const ageRangeExists = await pool.query(`
        SELECT column_name, column_default
        FROM information_schema.columns 
        WHERE table_name = 'users' AND column_name = 'age_range'
      `);
      
      // If it exists but has no default value, set a default value
      if (ageRangeExists.rowCount && ageRangeExists.rowCount > 0 && ageRangeExists.rows[0].column_default === null) {
        console.log("Setting default value for existing age_range column");
        await pool.query(`
          ALTER TABLE users 
          ALTER COLUMN age_range SET DEFAULT 'adult'
        `);
        
        // Update any existing null values
        await pool.query(`
          UPDATE users 
          SET age_range = 'adult' 
          WHERE age_range IS NULL
        `);
      }
    } catch (error) {
      console.error("Error updating age_range column:", error);
    }

    // Check if columns exist in users table and add them if they don't
    // This is necessary for existing databases that were created before these columns were added
    const columnsToCheck = [
      { name: 'age', type: 'INTEGER' },
      { name: 'age_range', type: 'VARCHAR(20) NOT NULL DEFAULT \'adult\'' },
      { name: 'gender', type: 'VARCHAR(50)' },
      { name: 'weight', type: 'DECIMAL(5,2)' },
      { name: 'height', type: 'DECIMAL(5,2)' },
      { name: 'bmi', type: 'DECIMAL(4,2)' },
      { name: 'fitness_goal', type: 'VARCHAR(50)' },
      { name: 'dietary_preference', type: 'VARCHAR(255)' },
      { name: 'dietary_restrictions', type: 'TEXT[]' },
      { name: 'avatar_url', type: 'TEXT' }
    ];
    
    for (const column of columnsToCheck) {
      try {
        // Check if column exists
        const result = await pool.query(`
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_name = 'users' AND column_name = '${column.name}'
        `);
        
        // Add column if it doesn't exist
        if (result.rowCount === 0) {
          console.log(`Adding missing column ${column.name} to users table`);
          await pool.query(`
            ALTER TABLE users
            ADD COLUMN ${column.name} ${column.type}
          `);
        }
      } catch (error) {
        console.error(`Error checking/adding column ${column.name}:`, error);
      }
    }

    // Create exercises table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exercises (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description TEXT,
        muscle_groups TEXT[],
        equipment TEXT[],
        difficulty VARCHAR(50),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create exercise logs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exercise_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        exercise_id UUID REFERENCES exercises(id),
        exercise_name VARCHAR(255),
        sets INTEGER,
        reps INTEGER,
        weight DECIMAL(6,2),
        duration INTEGER,
        intensity VARCHAR(50),
        notes TEXT,
        completed_at DATE NOT NULL DEFAULT CURRENT_DATE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create meals table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS meals (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50),
        calories INTEGER,
        protein DECIMAL(6,2),
        carbs DECIMAL(6,2),
        fats DECIMAL(6,2),
        image_url TEXT,
        description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create meal logs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS meal_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        meal_id UUID REFERENCES meals(id),
        meal_name VARCHAR(255),
        portion DECIMAL(4,2),
        calories INTEGER,
        protein DECIMAL(6,2),
        carbs DECIMAL(6,2),
        fats DECIMAL(6,2),
        meal_time VARCHAR(50),
        notes TEXT,
        consumed_at DATE NOT NULL DEFAULT CURRENT_DATE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create water intake logs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS water_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        amount_ml INTEGER NOT NULL,
        logged_at DATE NOT NULL DEFAULT CURRENT_DATE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create weight logs table for tracking weight changes
    await pool.query(`
      CREATE TABLE IF NOT EXISTS weight_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        weight DECIMAL(5,2) NOT NULL,
        logged_at DATE NOT NULL DEFAULT CURRENT_DATE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create workout plans table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS workout_plans (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        goal VARCHAR(50),
        frequency INTEGER,
        duration_weeks INTEGER,
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create workout plan exercises junction table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS workout_plan_exercises (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        workout_plan_id UUID NOT NULL REFERENCES workout_plans(id) ON DELETE CASCADE,
        exercise_id UUID REFERENCES exercises(id),
        exercise_name VARCHAR(255),
        day_of_week INTEGER,
        sets INTEGER,
        reps INTEGER,
        weight DECIMAL(6,2),
        duration INTEGER,
        completed BOOLEAN DEFAULT false,
        completion_date TIMESTAMP WITH TIME ZONE,
        actual_sets INTEGER,
        actual_reps INTEGER,
        actual_weight DECIMAL(6,2),
        actual_duration INTEGER,
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Database tables initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('Error initializing database:', error);
    return { success: false, error };
  }
} 