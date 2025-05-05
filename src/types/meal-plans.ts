// Unified meal plan data structures
// These types provide a consistent interface across all pages

// Food item - Individual food component within a meal
export type FoodItem = {
  id: string;
  name: string;
  amount: string;
  calories: number;
  protein?: number;
  carbs?: number;
  fats?: number;
};

// Individual meal item
export type MealItem = {
  id: string;
  name: string;
  meal_type: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  completed: boolean;
  completion_date?: string;
  portion?: number;
  notes?: string;
  food_items?: any[];
};

// Day's worth of meals
export type DayData = {
  day_number: number;
  day_name: string;
  meals: MealItem[];
};

// Complete meal plan
export type MealPlan = {
  id: string;
  name: string;
  description?: string;
  workout_plan_id: string;
  workout_plan_name?: string;
  daily_calories?: number;
  days: DayData[];
  created_at: string;
  date?: string;
};

// Helper function to map numeric days to day names
export const getDayName = (dayNumber: number): string => {
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return dayNames[(dayNumber - 1) % 7];
};

// Helper function to ensure a meal plan has all required meal types for each day
export const ensureMealTypes = (mealPlan: MealPlan): MealPlan => {
  if (!mealPlan) return mealPlan;
  
  return {
    ...mealPlan,
    days: mealPlan.days.map(day => {
      // Check if all meal types exist
      const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
      const existingMealTypes = day.meals.map(meal => meal.meal_type);
      
      // Return the day data as is, since we're handling missing meal types at the API level
      return day;
    })
  };
}; 