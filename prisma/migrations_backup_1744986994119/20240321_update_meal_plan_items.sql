-- Modify meal_plan_items table
ALTER TABLE meal_plan_items
  ALTER COLUMN meal_id DROP NOT NULL,
  ALTER COLUMN calories DROP NOT NULL,
  ALTER COLUMN protein DROP NOT NULL,
  ALTER COLUMN carbs DROP NOT NULL,
  ALTER COLUMN fats DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS completion_date TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS day_number INTEGER,
  ADD COLUMN IF NOT EXISTS portion DECIMAL(4,2),
  ADD COLUMN IF NOT EXISTS notes TEXT;

-- Move food_items from meal_plan_items to meals
ALTER TABLE meals
  ADD COLUMN IF NOT EXISTS food_items JSONB;

-- Copy existing food_items data from meal_plan_items to meals
UPDATE meals m
SET food_items = mpi.food_items
FROM meal_plan_items mpi
WHERE m.id = mpi.meal_id
AND mpi.food_items IS NOT NULL;

-- Drop old columns from meal_plan_items
ALTER TABLE meal_plan_items
  DROP COLUMN IF EXISTS day_info,
  DROP COLUMN IF EXISTS food_items;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_meal_plan_items_day_number ON meal_plan_items(day_number);

-- Add comments for documentation
COMMENT ON COLUMN meal_plan_items.day_number IS 'Day number in the meal plan sequence';
COMMENT ON COLUMN meal_plan_items.portion IS 'Portion size multiplier for the meal';
COMMENT ON COLUMN meal_plan_items.completion_date IS 'When the meal was completed';
COMMENT ON COLUMN meals.food_items IS 'JSON array of food items with details'; 