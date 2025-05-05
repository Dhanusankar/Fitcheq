'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MEAL_TYPES, MealType, getMealTypesForDay } from '@/lib/meal-types';
import { MealTemplateEditor } from '@/components/ui/meal-template-editor';
import toast from 'react-hot-toast';

// Types
interface WorkoutPlan {
  id: string;
  name: string;
  frequency: number;
  duration_weeks: number;
  goal: string;
}

interface MealTemplate {
  name: string;
  meal_type: MealType;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  food_items: Array<{
    name: string;
    amount: string;
    calories: number;
  }>;
}

interface DayPlanTemplate {
  day_number: number;
  meals: MealTemplate[];
}

export default function CreateMealPlanPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // State
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dayTemplates, setDayTemplates] = useState<DayPlanTemplate[]>([]);
  const [selectedDay, setSelectedDay] = useState(1);
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      fetchWorkoutPlans();
    }
  }, [status, router]);
  
  const fetchWorkoutPlans = async () => {
    try {
      const response = await fetch('/api/workout-plans');
      if (!response.ok) throw new Error('Failed to fetch workout plans');
      
      const data = await response.json();
      setWorkoutPlans(data.workout_plans || []);
      
      if (data.workout_plans?.length > 0) {
        setSelectedPlanId(data.workout_plans[0].id);
      }
    } catch (error) {
      console.error('Error fetching workout plans:', error);
      toast.error('Failed to fetch workout plans');
    } finally {
      setLoading(false);
    }
  };
  
  const handleWorkoutPlanChange = (planId: string) => {
    setSelectedPlanId(planId);
    const selectedPlan = workoutPlans.find(plan => plan.id === planId);
    
    if (selectedPlan) {
      // Initialize templates for each day
      const templates: DayPlanTemplate[] = [];
      const totalDays = selectedPlan.frequency * selectedPlan.duration_weeks;
      
      for (let day = 1; day <= totalDays; day++) {
        templates.push({
          day_number: day,
          meals: getMealTypesForDay(4).map(type => ({
            name: '',
            meal_type: type,
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            food_items: []
          }))
        });
      }
      
      setDayTemplates(templates);
      setSelectedDay(1);
    }
  };
  
  const handleUpdateDayMeals = (dayNumber: number, meals: MealTemplate[]) => {
    setDayTemplates(prev => 
      prev.map(template => 
        template.day_number === dayNumber
          ? { ...template, meals }
          : template
      )
    );
  };
  
  const handleSaveMealPlan = async () => {
    if (!selectedPlanId) {
      toast.error('Please select a workout plan');
      return;
    }
    
    try {
      setSaving(true);
      
      // Convert templates to the unified meal plan format
      const mealPlanData = {
        workout_plan_id: selectedPlanId,
        name: `${workoutPlans.find(p => p.id === selectedPlanId)?.name} - Meal Plan`,
        days: dayTemplates.map(template => ({
          day_number: template.day_number,
          meals: template.meals.map(meal => ({
            name: meal.name,
            meal_type: meal.meal_type,
            calories: meal.calories,
            protein: meal.protein,
            carbs: meal.carbs,
            fats: meal.fats,
            food_items: meal.food_items,
            completed: false
          }))
        }))
      };
      
      const response = await fetch('/api/meal-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mealPlanData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save meal plan');
      }
      
      toast.success('Meal plan saved successfully');
      router.push('/dashboard/progress');
    } catch (error) {
      console.error('Error saving meal plan:', error);
      toast.error('Failed to save meal plan');
    } finally {
      setSaving(false);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Create Meal Plan</h1>
            <Link 
              href="/dashboard" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
            >
              <span className="mr-1">←</span> Back to Dashboard
            </Link>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create Meal Plan</h1>
          <Link 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>
        
        {/* Workout Plan Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Workout Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <select
              value={selectedPlanId}
              onChange={(e) => handleWorkoutPlanChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a workout plan</option>
              {workoutPlans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} ({plan.frequency} days/week, {plan.duration_weeks} weeks)
                </option>
              ))}
            </select>
          </CardContent>
        </Card>
        
        {selectedPlanId && (
          <>
            {/* Day Selection */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Select Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {dayTemplates.map((template) => (
                    <button
                      key={template.day_number}
                      onClick={() => setSelectedDay(template.day_number)}
                      className={`p-2 rounded-md ${
                        selectedDay === template.day_number
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      Day {template.day_number}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Meal Plan Template */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Day {selectedDay} Meal Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <MealTemplateEditor
                  dayNumber={selectedDay}
                  meals={dayTemplates.find(t => t.day_number === selectedDay)?.meals || []}
                  onUpdate={(meals) => handleUpdateDayMeals(selectedDay, meals)}
                />
              </CardContent>
            </Card>
            
            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSaveMealPlan}
                disabled={saving}
                className={`px-6 py-3 bg-blue-600 text-white rounded-md ${
                  saving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {saving ? 'Saving...' : 'Save Meal Plan'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 