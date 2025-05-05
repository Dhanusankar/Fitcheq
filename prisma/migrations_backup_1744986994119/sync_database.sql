-- Add missing columns to meal_plan_items if they don't exist
DO $$ 
BEGIN 
    -- Add day_number column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'meal_plan_items' 
        AND column_name = 'day_number'
    ) THEN
        ALTER TABLE meal_plan_items ADD COLUMN day_number INTEGER;
    END IF;

    -- Add completion_date column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'meal_plan_items' 
        AND column_name = 'completion_date'
    ) THEN
        ALTER TABLE meal_plan_items ADD COLUMN completion_date TIMESTAMPTZ;
    END IF;

    -- Add portion column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'meal_plan_items' 
        AND column_name = 'portion'
    ) THEN
        ALTER TABLE meal_plan_items ADD COLUMN portion DECIMAL(4,2);
    END IF;

    -- Add notes column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'meal_plan_items' 
        AND column_name = 'notes'
    ) THEN
        ALTER TABLE meal_plan_items ADD COLUMN notes TEXT;
    END IF;

    -- Make meal_id nullable if it's not already
    ALTER TABLE meal_plan_items ALTER COLUMN meal_id DROP NOT NULL;
    
    -- Make calories nullable if it's not already
    ALTER TABLE meal_plan_items ALTER COLUMN calories DROP NOT NULL;
    
    -- Make protein nullable if it's not already
    ALTER TABLE meal_plan_items ALTER COLUMN protein DROP NOT NULL;
    
    -- Make carbs nullable if it's not already
    ALTER TABLE meal_plan_items ALTER COLUMN carbs DROP NOT NULL;
    
    -- Make fats nullable if it's not already
    ALTER TABLE meal_plan_items ALTER COLUMN fats DROP NOT NULL;

    -- Drop old columns if they exist
    ALTER TABLE meal_plan_items 
    DROP COLUMN IF EXISTS day_info,
    DROP COLUMN IF EXISTS food_items;

    -- Add food_items column to meals if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'meals' 
        AND column_name = 'food_items'
    ) THEN
        ALTER TABLE meals ADD COLUMN food_items JSONB;
    END IF;

END $$; 