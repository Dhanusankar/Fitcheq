'use client';

import { useState } from 'react';
import { MealPlan as TypedMealPlan, MealItem, DayData } from '@/types/meal-plans';

// For backward compatibility with the existing implementation
type LegacyMealPlan = {
  id: string;
  day_of_week: number;
  meals: MealItem[];
};

type MealPlanDisplayProps = {
  mealPlan: LegacyMealPlan[] | TypedMealPlan;
  workoutGoal: string;
  onMealStatusChange: (mealId: string, completed: boolean) => void;
};

export default function MealPlanDisplay({ mealPlan, workoutGoal, onMealStatusChange }: MealPlanDisplayProps) {
  const [selectedDay, setSelectedDay] = useState(1);
  
  // Format the day label
  const formatDayLabel = (day: number) => {
    const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // Adjust for 1-indexed days
    return dayLabels[(day - 1) % 7];
  };
  
  // Handle legacy format vs. new format
  const isLegacyFormat = Array.isArray(mealPlan);
  
  // Generate days of the week based on available meal plans
  const generateDays = () => {
    if (isLegacyFormat) {
      // Legacy format handling
      const legacyPlans = mealPlan as LegacyMealPlan[];
      if (!legacyPlans || legacyPlans.length === 0) return [];
      const days = new Set(legacyPlans.map(plan => plan.day_of_week));
      return Array.from(days).sort((a, b) => a - b);
    } else {
      // New format handling
      const typedPlan = mealPlan as TypedMealPlan;
      if (!typedPlan || !typedPlan.days || typedPlan.days.length === 0) return [];
      return typedPlan.days.map(day => day.day_number);
    }
  };
  
  // Get meals for the selected day
  const getMealsForDay = (day: number) => {
    if (isLegacyFormat) {
      // Legacy format handling
      const legacyPlans = mealPlan as LegacyMealPlan[];
      const dayPlan = legacyPlans.find(plan => plan.day_of_week === day);
      return dayPlan ? dayPlan.meals : [];
    } else {
      // New format handling
      const typedPlan = mealPlan as TypedMealPlan;
      const dayData = typedPlan.days.find(d => d.day_number === day);
      return dayData ? dayData.meals : [];
    }
  };
  
  // Calculate total completion across all days
  const calculateTotalCompletion = () => {
    if (isLegacyFormat) {
      const legacyPlans = mealPlan as LegacyMealPlan[];
      let totalMeals = 0;
      let completedMeals = 0;
      
      legacyPlans.forEach(plan => {
        totalMeals += plan.meals.length;
        completedMeals += plan.meals.filter(meal => meal.completed).length;
      });
      
      return totalMeals > 0 ? Math.round((completedMeals / totalMeals) * 100) : 0;
    } else {
      const typedPlan = mealPlan as TypedMealPlan;
      let totalMeals = 0;
      let completedMeals = 0;
      
      typedPlan.days.forEach(day => {
        totalMeals += day.meals.length;
        completedMeals += day.meals.filter(meal => meal.completed).length;
      });
      
      return totalMeals > 0 ? Math.round((completedMeals / totalMeals) * 100) : 0;
    }
  };
  
  // Group meals by meal type
  const getMealsByType = (meals: MealItem[]) => {
    const mealsByType: Record<string, MealItem[]> = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: []
    };
    
    meals.forEach(meal => {
      const mealType = meal.meal_type.toLowerCase();
      if (mealsByType[mealType]) {
        mealsByType[mealType].push(meal);
      } else {
        // Default to snack if meal_type is not one of the standard types
        mealsByType.snack.push(meal);
      }
    });
    
    return mealsByType;
  };
  
  // Calculate daily nutrition totals
  const calculateDailyTotals = (meals: MealItem[]) => {
    if (!meals || meals.length === 0) {
      return { calories: 0, protein: 0, carbs: 0, fats: 0 };
    }

    return meals.reduce((acc, meal) => {
      const protein = typeof meal.protein === 'string' ? parseFloat(meal.protein) : (meal.protein || 0);
      const carbs = typeof meal.carbs === 'string' ? parseFloat(meal.carbs) : (meal.carbs || 0);
      const fats = typeof meal.fats === 'string' ? parseFloat(meal.fats) : (meal.fats || 0);
      const calories = typeof meal.calories === 'string' ? parseFloat(meal.calories) : (meal.calories || 0);

      return {
        calories: acc.calories + calories,
        protein: acc.protein + protein,
        carbs: acc.carbs + carbs,
        fats: acc.fats + fats
      };
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 });
  };
  
  // Handle meal completion toggle
  const handleMealToggle = (mealId: string, currentStatus: boolean) => {
    try {
      if (!mealId) {
        console.error('Cannot update meal: Missing meal ID');
        return;
      }
      
      // Call the parent component's callback to handle the status change
      onMealStatusChange(mealId, !currentStatus);
    } catch (err) {
      console.error('Error toggling meal status:', err);
    }
  };
  
  // Get daily calories target if available in new format
  const getDailyCaloriesTarget = () => {
    if (!isLegacyFormat) {
      const typedPlan = mealPlan as TypedMealPlan;
      return typedPlan.daily_calories || 0;
    }
    return 0;
  };
  
  const days = generateDays();
  const mealsForSelectedDay = getMealsForDay(selectedDay);
  const mealsByType = getMealsByType(mealsForSelectedDay);
  const dailyTotals = calculateDailyTotals(mealsForSelectedDay);
  const totalCompletionPercentage = calculateTotalCompletion();
  const calorieTarget = getDailyCaloriesTarget();
  
  // Get day name for the selected day
  const getDayName = () => {
    if (isLegacyFormat) {
      return formatDayLabel(selectedDay);
    } else {
      const typedPlan = mealPlan as TypedMealPlan;
      const dayData = typedPlan.days.find(d => d.day_number === selectedDay);
      return dayData ? dayData.day_name : formatDayLabel(selectedDay);
    }
  };

  // Calculate total meals and completed meals
  const getTotalMealsStats = () => {
    if (isLegacyFormat) {
      const legacyPlans = mealPlan as LegacyMealPlan[];
      let totalMeals = 0;
      let completedMeals = 0;
      
      legacyPlans.forEach(plan => {
        totalMeals += plan.meals.length;
        completedMeals += plan.meals.filter(meal => meal.completed).length;
      });
      
      return { completed: completedMeals, total: totalMeals };
    } else {
      const typedPlan = mealPlan as TypedMealPlan;
      let totalMeals = 0;
      let completedMeals = 0;
      
      typedPlan.days.forEach(day => {
        totalMeals += day.meals.length;
        completedMeals += day.meals.filter(meal => meal.completed).length;
      });
      
      return { completed: completedMeals, total: totalMeals };
    }
  };

  const mealStats = getTotalMealsStats();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Your Meal Plan</h2>
      
      {/* Day selector */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              selectedDay === day
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {/* Day {day}: {isLegacyFormat ? formatDayLabel(day) :  */}
            {isLegacyFormat ? formatDayLabel(day) : 
              ((mealPlan as TypedMealPlan).days.find(d => d.day_number === day)?.day_name || formatDayLabel(day))}
          </button>
        ))}
      </div>
      
      {/* Overall Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-700">Overall Progress</h3>
          <span className="text-sm font-medium text-indigo-600">{mealStats.completed} of {mealStats.total} meals completed ({totalCompletionPercentage}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${totalCompletionPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Nutrition summary for the day */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">
          Daily Nutrition {calorieTarget > 0 ? `(Target: ${calorieTarget} calories)` : ''}
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <h4 className="text-lg font-semibold text-blue-800">{Math.round(dailyTotals.calories || 0)}</h4>
            <p className="text-xs text-gray-600">Calories</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center">
            <h4 className="text-lg font-semibold text-red-800">{Math.round(dailyTotals.protein || 0)}g</h4>
            <p className="text-xs text-gray-600">Protein</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 text-center">
            <h4 className="text-lg font-semibold text-yellow-800">{Math.round(dailyTotals.carbs || 0)}g</h4>
            <p className="text-xs text-gray-600">Carbs</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <h4 className="text-lg font-semibold text-green-800">{Math.round(dailyTotals.fats || 0)}g</h4>
            <p className="text-xs text-gray-600">Fats</p>
          </div>
        </div>
      </div>
      
      {/* Meal list for the day */}
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Meals for Day {selectedDay}</h3>
        
        {mealsForSelectedDay.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No meals planned for this day.</p>
        ) : (
          <div className="space-y-6">
            {/* Breakfast Section */}
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mr-2">Breakfast</span>
                <span className="text-sm text-gray-500">
                  {mealsByType.breakfast.filter(m => m.completed).length}/{mealsByType.breakfast.length} completed
                </span>
              </h4>
              {mealsByType.breakfast.length > 0 ? (
                <div className="space-y-3">
                  {mealsByType.breakfast.map((meal) => (
                    <div key={meal.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-indigo-600">{meal.name}</h4>
                          </div>
                          <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                            <div><span className="font-medium">Calories:</span> {meal.calories}</div>
                            <div><span className="font-medium">Protein:</span> {meal.protein}g</div>
                            <div><span className="font-medium">Carbs:</span> {meal.carbs}g</div>
                            <div><span className="font-medium">Fats:</span> {meal.fats}g</div>
                          </div>
                          
                          {meal.food_items && meal.food_items.length > 0 && (
                            <div className="mt-3 border-t pt-2">
                              <p className="text-xs font-medium text-gray-500 mb-1">Food Items:</p>
                              <ul className="text-xs text-gray-600">
                                {meal.food_items.map((item, index) => (
                                  <li key={item.id || index}>
                                    {item.name} ({item.amount}) - {item.calories} cal
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleMealToggle(meal.id, meal.completed)}
                            className={`p-2 rounded-md ${
                              meal.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                            }`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-2">No breakfast items planned for this day.</p>
              )}
            </div>
            
            {/* Lunch Section */}
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">Lunch</span>
                <span className="text-sm text-gray-500">
                  {mealsByType.lunch.filter(m => m.completed).length}/{mealsByType.lunch.length} completed
                </span>
              </h4>
              {mealsByType.lunch.length > 0 ? (
                <div className="space-y-3">
                  {mealsByType.lunch.map((meal) => (
                    <div key={meal.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-indigo-600">{meal.name}</h4>
                          </div>
                          <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                            <div><span className="font-medium">Calories:</span> {meal.calories}</div>
                            <div><span className="font-medium">Protein:</span> {meal.protein}g</div>
                            <div><span className="font-medium">Carbs:</span> {meal.carbs}g</div>
                            <div><span className="font-medium">Fats:</span> {meal.fats}g</div>
                          </div>
                          
                          {meal.food_items && meal.food_items.length > 0 && (
                            <div className="mt-3 border-t pt-2">
                              <p className="text-xs font-medium text-gray-500 mb-1">Food Items:</p>
                              <ul className="text-xs text-gray-600">
                                {meal.food_items.map((item, index) => (
                                  <li key={item.id || index}>
                                    {item.name} ({item.amount}) - {item.calories} cal
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleMealToggle(meal.id, meal.completed)}
                            className={`p-2 rounded-md ${
                              meal.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                            }`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-2">No lunch items planned for this day.</p>
              )}
            </div>
            
            {/* Dinner Section */}
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2">Dinner</span>
                <span className="text-sm text-gray-500">
                  {mealsByType.dinner.filter(m => m.completed).length}/{mealsByType.dinner.length} completed
                </span>
              </h4>
              {mealsByType.dinner.length > 0 ? (
                <div className="space-y-3">
                  {mealsByType.dinner.map((meal) => (
                    <div key={meal.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-indigo-600">{meal.name}</h4>
                          </div>
                          <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                            <div><span className="font-medium">Calories:</span> {meal.calories}</div>
                            <div><span className="font-medium">Protein:</span> {meal.protein}g</div>
                            <div><span className="font-medium">Carbs:</span> {meal.carbs}g</div>
                            <div><span className="font-medium">Fats:</span> {meal.fats}g</div>
                          </div>
                          
                          {meal.food_items && meal.food_items.length > 0 && (
                            <div className="mt-3 border-t pt-2">
                              <p className="text-xs font-medium text-gray-500 mb-1">Food Items:</p>
                              <ul className="text-xs text-gray-600">
                                {meal.food_items.map((item, index) => (
                                  <li key={item.id || index}>
                                    {item.name} ({item.amount}) - {item.calories} cal
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleMealToggle(meal.id, meal.completed)}
                            className={`p-2 rounded-md ${
                              meal.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                            }`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-2">No dinner items planned for this day.</p>
              )}
            </div>
            
            {/* Snack Section */}
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">Snacks</span>
                <span className="text-sm text-gray-500">
                  {mealsByType.snack.filter(m => m.completed).length}/{mealsByType.snack.length} completed
                </span>
              </h4>
              {mealsByType.snack.length > 0 ? (
                <div className="space-y-3">
                  {mealsByType.snack.map((meal) => (
                    <div key={meal.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-indigo-600">{meal.name}</h4>
                          </div>
                          <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                            <div><span className="font-medium">Calories:</span> {meal.calories}</div>
                            <div><span className="font-medium">Protein:</span> {meal.protein}g</div>
                            <div><span className="font-medium">Carbs:</span> {meal.carbs}g</div>
                            <div><span className="font-medium">Fats:</span> {meal.fats}g</div>
                          </div>
                          
                          {meal.food_items && meal.food_items.length > 0 && (
                            <div className="mt-3 border-t pt-2">
                              <p className="text-xs font-medium text-gray-500 mb-1">Food Items:</p>
                              <ul className="text-xs text-gray-600">
                                {meal.food_items.map((item, index) => (
                                  <li key={item.id || index}>
                                    {item.name} ({item.amount}) - {item.calories} cal
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleMealToggle(meal.id, meal.completed)}
                            className={`p-2 rounded-md ${
                              meal.completed 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                            }`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-2">No snacks planned for this day.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 