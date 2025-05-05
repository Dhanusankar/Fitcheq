import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './card'

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack'

interface MealInput {
  name: string
  calories: number
  protein: number
  carbs: number
  fats: number
  meal_type: MealType
}

export function MealPlanCreator() {
  const [meals, setMeals] = useState<MealInput[]>([])
  const [currentMeal, setCurrentMeal] = useState<MealInput>({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    meal_type: 'breakfast'
  })

  const handleAddMeal = () => {
    if (currentMeal.name.trim() === '') return
    setMeals([...meals, currentMeal])
    setCurrentMeal({
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
      meal_type: 'breakfast'
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Meal Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Meal Name</label>
              <input
                type="text"
                value={currentMeal.name}
                onChange={(e) => setCurrentMeal({ ...currentMeal, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Meal Type</label>
              <select
                value={currentMeal.meal_type}
                onChange={(e) => setCurrentMeal({ ...currentMeal, meal_type: e.target.value as MealType })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Calories</label>
              <input
                type="number"
                value={currentMeal.calories}
                onChange={(e) => setCurrentMeal({ ...currentMeal, calories: parseInt(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Protein (g)</label>
              <input
                type="number"
                value={currentMeal.protein}
                onChange={(e) => setCurrentMeal({ ...currentMeal, protein: parseInt(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Carbs (g)</label>
              <input
                type="number"
                value={currentMeal.carbs}
                onChange={(e) => setCurrentMeal({ ...currentMeal, carbs: parseInt(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fats (g)</label>
              <input
                type="number"
                value={currentMeal.fats}
                onChange={(e) => setCurrentMeal({ ...currentMeal, fats: parseInt(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            onClick={handleAddMeal}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Meal
          </button>

          {meals.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Added Meals</h3>
              <div className="space-y-4">
                {meals.map((meal, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{meal.name}</h4>
                        <p className="text-sm text-gray-500">{meal.meal_type}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>{meal.calories} cal</p>
                        <p>{meal.protein}g protein</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 