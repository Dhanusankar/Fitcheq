-- Add food_items column to meals table
ALTER TABLE meals
ADD COLUMN IF NOT EXISTS food_items JSONB;

-- Add comment for documentation
COMMENT ON COLUMN meals.food_items IS 'JSON array of food items with details'; 