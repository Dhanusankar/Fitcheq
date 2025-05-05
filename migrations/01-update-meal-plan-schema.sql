-- Add new fields to meal_plan_items table
ALTER TABLE meal_plan_items 
ADD COLUMN IF NOT EXISTS day_info JSONB,
ADD COLUMN IF NOT EXISTS food_items JSONB;

-- Add daily_calories to meal_plans table if not exists
ALTER TABLE meal_plans
ADD COLUMN IF NOT EXISTS daily_calories INTEGER DEFAULT 2000;

-- Create index for better performance when querying by day
CREATE INDEX IF NOT EXISTS idx_meal_plan_items_day_info ON meal_plan_items ((day_info->>'day_number'));

-- Update existing records to have default day_info
UPDATE meal_plan_items 
SET day_info = json_build_object('day_number', 1, 'day_name', 'Day 1')
WHERE day_info IS NULL;

-- Comment explaining usage
COMMENT ON COLUMN meal_plan_items.day_info IS 'JSON object containing day_number and day_name';
COMMENT ON COLUMN meal_plan_items.food_items IS 'JSON array of food items with id, name, amount, and calories';
COMMENT ON COLUMN meal_plans.daily_calories IS 'Target daily calories for this meal plan'; 