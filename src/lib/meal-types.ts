// Meal type constants and utilities

// Valid meal types
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

// Array of all valid meal types in chronological order
export const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

// Display names for meal types
export const MEAL_TYPE_DISPLAY_NAMES: Record<MealType, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snack'
};

// Helper function to validate if a string is a valid meal type
export function isValidMealType(type: string): type is MealType {
  return MEAL_TYPES.includes(type as MealType);
}

// Helper function to get display name for a meal type
export function getMealTypeDisplayName(type: MealType): string {
  return MEAL_TYPE_DISPLAY_NAMES[type];
}

// Helper function to ensure a meal type string is valid, defaulting to 'snack' if not
export function normalizeMealType(type: string): MealType {
  const normalizedType = type.toLowerCase();
  return isValidMealType(normalizedType) ? normalizedType : 'snack';
}

// Helper function to get meal types for a day based on number of meals
export function getMealTypesForDay(mealsPerDay: number): MealType[] {
  switch (mealsPerDay) {
    case 3:
      return ['breakfast', 'lunch', 'dinner'];
    case 4:
      return ['breakfast', 'lunch', 'dinner', 'snack'];
    case 5:
      return ['breakfast', 'snack', 'lunch', 'dinner', 'snack'];
    case 6:
      return ['breakfast', 'snack', 'lunch', 'snack', 'dinner', 'snack'];
    default:
      return ['breakfast', 'lunch', 'dinner'];
  }
}

// Helper function to get the next chronological meal type
export function getNextMealType(currentType: MealType): MealType {
  const currentIndex = MEAL_TYPES.indexOf(currentType);
  return MEAL_TYPES[(currentIndex + 1) % MEAL_TYPES.length];
}

// Helper function to get the previous chronological meal type
export function getPreviousMealType(currentType: MealType): MealType {
  const currentIndex = MEAL_TYPES.indexOf(currentType);
  return MEAL_TYPES[(currentIndex - 1 + MEAL_TYPES.length) % MEAL_TYPES.length];
}

// Helper function to group meals by type
export function groupMealsByType<T extends { meal_type: string }>(meals: T[]): Record<MealType, T[]> {
  const mealsByType: Record<MealType, T[]> = {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  };
  
  meals.forEach(meal => {
    const mealType = normalizeMealType(meal.meal_type);
    mealsByType[mealType].push(meal);
  });
  
  return mealsByType;
} 