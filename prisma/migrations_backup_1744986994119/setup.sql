-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop all tables if they exist
DROP TABLE IF EXISTS 
    workout_plan_exercises,
    meal_plan_items,
    meal_plans,
    progress_tracking,
    exercise_logs,
    meal_logs,
    water_logs,
    weight_logs,
    exercises,
    meals,
    workout_plans,
    users
CASCADE; 