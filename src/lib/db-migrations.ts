import { Pool } from 'pg';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'fitness_game',
});

export async function runMealPlanIntegrationMigrations() {
  try {
    console.log('Running meal plan integration migrations...');
    
    // 1. Create meal plans table with association to workout plans
    await pool.query(`
      CREATE TABLE IF NOT EXISTS meal_plans (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        date DATE,
        workout_plan_id UUID REFERENCES workout_plans(id) ON DELETE SET NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2. Create meal plan items table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS meal_plan_items (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        meal_plan_id UUID NOT NULL REFERENCES meal_plans(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        meal_time VARCHAR(50) NOT NULL,
        calories INTEGER NOT NULL,
        protein DECIMAL(6,2) NOT NULL,
        carbs DECIMAL(6,2) NOT NULL,
        fats DECIMAL(6,2) NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 3. Add progress tracking fields to workout_plan_exercises
    const workoutPlanExercisesColumns = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'workout_plan_exercises' AND column_name = 'completed'
    `);
    
    if (workoutPlanExercisesColumns.rowCount === 0) {
      await pool.query(`
        ALTER TABLE workout_plan_exercises
        ADD COLUMN completed BOOLEAN DEFAULT FALSE,
        ADD COLUMN actual_sets INTEGER,
        ADD COLUMN actual_reps INTEGER,
        ADD COLUMN actual_weight DECIMAL(6,2),
        ADD COLUMN actual_duration INTEGER,
        ADD COLUMN completion_date DATE,
        ADD COLUMN notes TEXT
      `);
    }

    // 4. Create progress tracking table for weekly summaries
    await pool.query(`
      CREATE TABLE IF NOT EXISTS progress_tracking (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        workout_plan_id UUID REFERENCES workout_plans(id) ON DELETE CASCADE,
        week_number INTEGER NOT NULL,
        exercises_completed INTEGER DEFAULT 0,
        exercises_total INTEGER DEFAULT 0,
        meals_completed INTEGER DEFAULT 0,
        meals_total INTEGER DEFAULT 0,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Meal plan integration migrations completed successfully');
    return { success: true };
  } catch (error) {
    console.error('Error running meal plan integration migrations:', error);
    return { success: false, error };
  }
}

// Function to update meal plans API to work with workout plans
export async function updateMealPlansAPI() {
  try {
    // Add necessary indexes to improve performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_meal_plans_workout_plan_id ON meal_plans(workout_plan_id);
      CREATE INDEX IF NOT EXISTS idx_meal_plan_items_meal_plan_id ON meal_plan_items(meal_plan_id);
      CREATE INDEX IF NOT EXISTS idx_workout_plan_exercises_workout_plan_id ON workout_plan_exercises(workout_plan_id);
      CREATE INDEX IF NOT EXISTS idx_progress_tracking_user_id ON progress_tracking(user_id);
      CREATE INDEX IF NOT EXISTS idx_progress_tracking_workout_plan_id ON progress_tracking(workout_plan_id);
    `);

    console.log('Meal plans API updates completed successfully');
    return { success: true };
  } catch (error) {
    console.error('Error updating meal plans API:', error);
    return { success: false, error };
  }
}

// Function to update workout plan exercises for progress tracking
export async function updateWorkoutPlanExerciseTable() {
  try {
    // Add columns to workout_plan_exercises if they don't exist
    await pool.query(`
      ALTER TABLE workout_plan_exercises 
      ADD COLUMN IF NOT EXISTS completed BOOLEAN DEFAULT false,
      ADD COLUMN IF NOT EXISTS completion_date TIMESTAMP WITH TIME ZONE,
      ADD COLUMN IF NOT EXISTS actual_sets INTEGER,
      ADD COLUMN IF NOT EXISTS actual_reps INTEGER,
      ADD COLUMN IF NOT EXISTS actual_weight DECIMAL(6,2),
      ADD COLUMN IF NOT EXISTS actual_duration INTEGER,
      ADD COLUMN IF NOT EXISTS notes TEXT,
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    `);

    console.log('Workout plan exercises table updated successfully');
    return { success: true };
  } catch (error) {
    console.error('Error updating workout plan exercises table:', error);
    return { success: false, error };
  }
} 