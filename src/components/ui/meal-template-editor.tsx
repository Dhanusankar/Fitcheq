import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { MealType, MEAL_TYPES, getMealTypeDisplayName } from '@/lib/meal-types';

interface FoodItem {
  name: string;
  amount: string;
  calories: number;
}

interface MealTemplate {
  name: string;
  meal_type: MealType;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  food_items: FoodItem[];
}

interface LibraryMeal {
  id: string;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  description?: string;
}

interface MealTemplateEditorProps {
  dayNumber: number;
  meals: MealTemplate[];
  onUpdate: (meals: MealTemplate[]) => void;
}

export function MealTemplateEditor({ dayNumber, meals, onUpdate }: MealTemplateEditorProps) {
  const [libraryMeals, setLibraryMeals] = useState<LibraryMeal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMealType, setSelectedMealType] = useState<MealType>('breakfast');
  const [showAddForm, setShowAddForm] = useState(false);
  const [addingCustomMeal, setAddingCustomMeal] = useState(false);
  
  // Form state for custom meal
  const [customMeal, setCustomMeal] = useState<Omit<MealTemplate, 'meal_type'>>({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    food_items: []
  });
  
  useEffect(() => {
    fetchMealLibrary();
  }, []);
  
  const fetchMealLibrary = async () => {
    try {
      const response = await fetch('/api/meals');
      if (!response.ok) throw new Error('Failed to fetch meal library');
      
      const data = await response.json();
      setLibraryMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meal library:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleAddLibraryMeal = (libraryMeal: LibraryMeal) => {
    const newMeal: MealTemplate = {
      name: libraryMeal.name,
      meal_type: selectedMealType,
      calories: libraryMeal.calories,
      protein: libraryMeal.protein,
      carbs: libraryMeal.carbs,
      fats: libraryMeal.fats,
      food_items: []
    };
    
    const updatedMeals = [...meals];
    updatedMeals.push(newMeal);
    onUpdate(updatedMeals);
    setShowAddForm(false);
  };
  
  const handleAddCustomMeal = () => {
    const newMeal: MealTemplate = {
      ...customMeal,
      meal_type: selectedMealType
    };
    
    const updatedMeals = [...meals];
    updatedMeals.push(newMeal);
    onUpdate(updatedMeals);
    
    // Reset form
    setCustomMeal({
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
      food_items: []
    });
    setShowAddForm(false);
    setAddingCustomMeal(false);
  };
  
  const handleRemoveMeal = (index: number) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    onUpdate(updatedMeals);
  };
  
  return (
    <div className="space-y-6">
      {/* Existing meals */}
      {MEAL_TYPES.map(mealType => {
        const mealsOfType = meals.filter(meal => meal.meal_type === mealType);
        
        return (
          <div key={mealType} className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">{getMealTypeDisplayName(mealType)}</h3>
            
            {mealsOfType.length > 0 ? (
              <div className="space-y-3">
                {mealsOfType.map((meal, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <div>
                      <div className="font-medium">{meal.name}</div>
                      <div className="text-sm text-gray-500">
                        {meal.calories} cal | P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fats}g
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveMeal(meals.indexOf(meal))}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No meals added yet</p>
            )}
            
            <button
              onClick={() => {
                setSelectedMealType(mealType);
                setShowAddForm(true);
              }}
              className="mt-3 w-full bg-blue-50 text-blue-600 py-2 rounded-md hover:bg-blue-100"
            >
              Add {getMealTypeDisplayName(mealType)}
            </button>
          </div>
        );
      })}
      
      {/* Add meal modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                  Add {getMealTypeDisplayName(selectedMealType)}
                </h2>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setAddingCustomMeal(false);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              {!addingCustomMeal ? (
                <>
                  {/* Meal library */}
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Select from Meal Library</h3>
                    <div className="grid gap-3">
                      {libraryMeals.map(meal => (
                        <button
                          key={meal.id}
                          onClick={() => handleAddLibraryMeal(meal)}
                          className="text-left bg-gray-50 p-3 rounded-md hover:bg-gray-100"
                        >
                          <div className="font-medium">{meal.name}</div>
                          <div className="text-sm text-gray-500">
                            {meal.calories} cal | P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fats}g
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={() => setAddingCustomMeal(true)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Or create a custom meal
                    </button>
                  </div>
                </>
              ) : (
                /* Custom meal form */
                <div>
                  <h3 className="text-lg font-medium mb-4">Create Custom Meal</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Meal Name
                      </label>
                      <input
                        type="text"
                        value={customMeal.name}
                        onChange={(e) => setCustomMeal({ ...customMeal, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Grilled Chicken Salad"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Calories
                        </label>
                        <input
                          type="number"
                          value={customMeal.calories}
                          onChange={(e) => setCustomMeal({ ...customMeal, calories: Number(e.target.value) })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Protein (g)
                        </label>
                        <input
                          type="number"
                          value={customMeal.protein}
                          onChange={(e) => setCustomMeal({ ...customMeal, protein: Number(e.target.value) })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Carbs (g)
                        </label>
                        <input
                          type="number"
                          value={customMeal.carbs}
                          onChange={(e) => setCustomMeal({ ...customMeal, carbs: Number(e.target.value) })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Fats (g)
                        </label>
                        <input
                          type="number"
                          value={customMeal.fats}
                          onChange={(e) => setCustomMeal({ ...customMeal, fats: Number(e.target.value) })}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        onClick={() => setAddingCustomMeal(false)}
                        className="px-4 py-2 text-gray-700 hover:text-gray-900"
                      >
                        Back to Library
                      </button>
                      <button
                        onClick={handleAddCustomMeal}
                        disabled={!customMeal.name || customMeal.calories <= 0}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Add Custom Meal
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 