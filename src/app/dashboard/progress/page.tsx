'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PlanProgressSummary from '@/components/ui/plan-progress-summary';
import WorkoutProgressTracker from '@/components/ui/workout-progress-tracker';
import MealPlanDisplay from '@/components/ui/meal-plan-display';
import { MealPlan, DayData, MealItem } from '@/types/meal-plans';
import toast from 'react-hot-toast';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Button } from '@/components/ui/button';
// import { Spinner } from '@/components/ui/spinner';
// import { BackLink } from '@/components/ui/back-link';
// import { User } from '@/types/user';
import axios from 'axios';
import moment from 'moment';

// For backward compatibility with existing code
type LegacyMealItem = {
  id: string;
  name: string;
  meal_time: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  completed: boolean;
};

type WorkoutPlan = {
  id: string;
  name: string;
  description: string;
  goal: string;
  frequency: number;
  duration_weeks: number;
  active: boolean;
  created_at: string;
};

type Exercise = {
  id: string;
  exercise_id?: string;
  exercise_name: string;
  day_of_week: number;
  sets?: number;
  reps?: number;
  weight?: number;
  duration?: number;
  completed: boolean;
  actual_sets?: number;
  actual_reps?: number;
  actual_weight?: number;
  actual_duration?: number;
  notes?: string;
};

type ProgressTracking = {
  week: number;
  exercises: {
    total: number;
    completed: number;
    percentage: number;
  };
  meals: {
    total: number;
    completed: number;
    percentage: number;
  };
  start_date: string;
  end_date: string;
};

export default function ProgressPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState(1);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [progressTracking, setProgressTracking] = useState<ProgressTracking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDayMealPlan, setSelectedDayMealPlan] = useState<MealPlan | null>(null);
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      fetchWorkoutPlans();
    }
  }, [status, router]);
  
  useEffect(() => {
    if (selectedPlanId) {
      fetchPlanDetails();
    }
  }, [selectedPlanId]);
  
  // Add a new useEffect to handle selected day changes
  useEffect(() => {
    // Only update if we have meal plans
    if (mealPlans.length > 0) {
      const newMealPlan = ensureMealTypes(getMealPlanForDay(selectedDay));
      // Only update if the meal plan has actually changed
      if (JSON.stringify(newMealPlan) !== JSON.stringify(selectedDayMealPlan)) {
        setSelectedDayMealPlan(newMealPlan);
      }
    }
  }, [selectedDay, mealPlans]);
  
  const fetchWorkoutPlans = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/workout-plans?active=true');
      
      if (!response.ok) {
        throw new Error('Failed to fetch workout plans');
      }
      
      const data = await response.json();
      setWorkoutPlans(data.workout_plans || []);
      
      // If there are workout plans, select the first one by default
      if (data.workout_plans && data.workout_plans.length > 0) {
        setSelectedPlanId(data.workout_plans[0].id);
      }
    } catch (err) {
      console.error('Error fetching workout plans:', err);
      setError('Failed to fetch workout plans');
    } finally {
      setLoading(false);
    }
  };
  
  const fetchPlanDetails = async () => {
    try {
      setLoading(true);
      
      // Fetch exercises for the selected workout plan
      const exercisesResponse = await fetch(`/api/workout-plans/${selectedPlanId}`, {
        credentials: 'include',
      });
      if (!exercisesResponse.ok) {
        throw new Error('Failed to fetch workout plan exercises');
      }
      
      const exercisesData = await exercisesResponse.json();
      setExercises(exercisesData.workout_plan.exercises || []);
      
      try {
        // Fetch meal plans associated with the workout plan
        const mealPlansResponse = await fetch(`/api/meal-plans?workout_plan_id=${selectedPlanId}`, {
          credentials: 'include',
        });
        if (!mealPlansResponse.ok) {
          throw new Error('Using mock data');
        }
        
        const mealPlansData = await mealPlansResponse.json();
        setMealPlans(mealPlansData.meal_plans || []);
      } catch (error) {
        // Fallback to mock meal plan data
        console.log('Using mock meal plan data instead of API');
        
        // Mock data for meal plans with correct types
        const mockMealPlans: MealPlan[] = [
          {
            id: '1',
            name: 'Day 1 Nutrition Plan',
            description: 'Nutrition plan for day 1',
            date: new Date().toISOString(),
            created_at: new Date().toISOString(),
            workout_plan_id: selectedPlanId,
            workout_plan_name: 'Current Workout Plan',
            daily_calories: 2000,
            days: [
              {
                day_number: 1,
                day_name: 'Monday',
                meals: [
                  {
                    id: '101',
                    name: 'Oatmeal with Fruits',
                    meal_type: 'breakfast',
                    calories: 300,
                    protein: 15,
                    carbs: 45,
                    fats: 5,
                    completed: false,
                    completion_date: undefined,
                    portion: 1,
                    notes: '',
                    food_items: []
                  },
                  {
                    id: '102',
                    name: 'Quinoa Salad',
                    meal_type: 'lunch',
                    calories: 450,
                    protein: 20,
                    carbs: 60,
                    fats: 10,
                    completed: false,
                    completion_date: undefined,
                    portion: 1,
                    notes: '',
                    food_items: []
                  },
                  {
                    id: '103',
                    name: 'Grilled Vegetables with Tofu',
                    meal_type: 'dinner',
                    calories: 550,
                    protein: 30,
                    carbs: 40,
                    fats: 20,
                    completed: false,
                    completion_date: undefined,
                    portion: 1,
                    notes: '',
                    food_items: []
                  }
                ]
              }
            ]
          }
        ];
        
        setMealPlans(mockMealPlans);
      }
      
      // Fetch progress tracking data
      try {
        const progressResponse = await fetch(`/api/progress?workout_plan_id=${selectedPlanId}`);
        if (!progressResponse.ok) {
          throw new Error('Failed to fetch progress tracking');
        }
        
        const progressData = await progressResponse.json();
        setProgressTracking(progressData.progressTracking);
      } catch (error) {
        console.error('Error fetching progress data:', error);
        // Set default progress tracking on error
        setProgressTracking({
          week: 1,
          exercises: {
            total: 0,
            completed: 0,
            percentage: 0
          },
          meals: {
            total: 0,
            completed: 0,
            percentage: 0
          },
          start_date: new Date().toISOString(),
          end_date: new Date().toISOString()
        });
      }
      
      setError('');
    } catch (err) {
      console.error('Error fetching plan details:', err);
      setError('Failed to fetch plan details');
    } finally {
      setLoading(false);
    }
  };
  
  const handleExerciseStatusChange = async (exerciseId: string, completed: boolean, logged: boolean) => {
    try {
      // First update the exercise status
      const response = await fetch('/api/workout-plans/exercises', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          exercise_id: exerciseId,
          completed,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to update exercise status');
      }
      
      // Update the exercises in the state
      setExercises(prev => 
        prev.map(ex => 
          ex.id === exerciseId ? { ...ex, completed } : ex
        )
      );

      // Only create an exercise log if logged is false and the exercise is being marked as completed
      if (!logged && completed) {
        const exercise = exercises.find(ex => ex.id === exerciseId);
        if (!exercise) {
          throw new Error('Exercise not found');
        }

        // Only create a log if there are no custom values
        if (!exercise.actual_sets && !exercise.actual_reps && !exercise.actual_weight && !exercise.actual_duration) {
          // Create a default exercise log entry
          const logResponse = await fetch('/api/exercise-logs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              exercise_id: exercise.exercise_id || null,
              exercise_name: exercise.exercise_name || 'Unknown Exercise',
              sets: exercise.sets || null,
              reps: exercise.reps || null,
              weight: exercise.weight || null,
              duration: exercise.duration || null,
              notes: 'Marked as completed',
              completed_at: new Date().toISOString()
            }),
          });

          if (!logResponse.ok) {
            const errorData = await logResponse.json().catch(() => ({}));
            console.error('Failed to create exercise log entry:', errorData.error);
          }
        }
      }
      
      // Refresh progress data
      const progressResponse = await fetch(`/api/progress?workout_plan_id=${selectedPlanId}`);
      if (progressResponse.ok) {
        const progressData = await progressResponse.json();
        setProgressTracking(progressData.progressTracking);
      }
    } catch (err) {
      console.error('Error updating exercise status:', err);
      toast.error(err instanceof Error ? err.message : 'Failed to update exercise status');
    }
  };
  
  const handleExerciseLogUpdate = async (exerciseId: string, logData: {
    actual_sets?: number;
    actual_reps?: number;
    actual_weight?: number;
    actual_duration?: number;
    notes?: string;
  }) => {
    try {
      // Validate numeric fields
      if (logData.actual_sets && (logData.actual_sets > 9999 || logData.actual_sets < 0)) {
        throw new Error('Sets must be between 0 and 9999');
      }
      if (logData.actual_reps && (logData.actual_reps > 9999 || logData.actual_reps < 0)) {
        throw new Error('Reps must be between 0 and 9999');
      }
      if (logData.actual_weight && (logData.actual_weight > 9999.99 || logData.actual_weight < 0)) {
        throw new Error('Weight must be between 0 and 9999.99');
      }
      if (logData.actual_duration && (logData.actual_duration > 9999 || logData.actual_duration < 0)) {
        throw new Error('Duration must be between 0 and 9999');
      }

      // First update the exercise status with custom values
      const response = await fetch('/api/workout-plans/exercises', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          exercise_id: exerciseId,
          ...logData,
          completed: true,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to update exercise status');
      }

      // Find the exercise details
      const exercise = exercises.find(ex => ex.id === exerciseId);
      if (!exercise) {
        throw new Error('Exercise not found');
      }

      // Create an exercise log entry with custom values
      const logResponse = await fetch('/api/exercise-logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          exercise_id: exercise.exercise_id || exerciseId,
          exercise_name: exercise.exercise_name || 'Unknown Exercise',
          sets: logData.actual_sets || null,
          reps: logData.actual_reps || null,
          weight: logData.actual_weight || null,
          duration: logData.actual_duration || null,
          notes: logData.notes || 'Exercise completed with custom data',
          completed_at: new Date().toISOString()
        }),
      });

      if (!logResponse.ok) {
        const errorData = await logResponse.json().catch(() => ({}));
        console.error('Failed to create exercise log entry:', errorData.error);
      }
      
      // Update the exercises in the state
      setExercises(prev => 
        prev.map(ex => 
          ex.id === exerciseId ? { 
            ...ex, 
            ...logData, 
            completed: true,
            actual_sets: logData.actual_sets,
            actual_reps: logData.actual_reps,
            actual_weight: logData.actual_weight,
            actual_duration: logData.actual_duration,
            notes: logData.notes
          } : ex
        )
      );
      
      // Refresh progress data
      const progressResponse = await fetch(`/api/progress?workout_plan_id=${selectedPlanId}`);
      if (progressResponse.ok) {
        const progressData = await progressResponse.json();
        setProgressTracking(progressData.progressTracking);
      }

      // Show success message
      toast.success('Exercise log updated successfully');
    } catch (err) {
      console.error('Error updating exercise log:', err);
      toast.error(err instanceof Error ? err.message : 'Failed to update exercise log');
    }
  };
  
  const handleMealStatusChange = async (mealId: string, completed: boolean) => {
    try {
      console.log(`Updating meal status: mealId=${mealId}, completed=${completed}`);
      
      // Check if this is mock data (meal-XXX format)
      const isMockData = typeof mealId === 'string' && mealId.startsWith('meal-');
      
      if (isMockData) {
        console.log('Using mock data - not sending API request');
        
        // Update the meal plans in the state directly for mock data
        setMealPlans(prev => 
          prev.map(plan => ({
            ...plan,
            days: plan.days.map(day => ({
              ...day,
              meals: day.meals.map(meal => 
                meal.id === mealId ? { ...meal, completed } : meal
              )
            }))
          }))
        );
        
        return;
      }
      
      // For real data, make the API call
      const response = await fetch('/api/meal-plans', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meal_plan_item_id: mealId,
          completed,
        }),
        credentials: 'include',
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Meal update API error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`Failed to update meal status: ${response.status} ${errorData.error || response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Meal update successful:', data);
      
      // Update the meal plans in the state
      setMealPlans(prev => 
        prev.map(plan => ({
          ...plan,
          days: plan.days.map(day => ({
            ...day,
            meals: day.meals.map(meal => 
              meal.id === mealId ? { ...meal, completed } : meal
            )
          }))
        }))
      );
      
      // Refresh progress data
      const progressResponse = await fetch(`/api/progress?workout_plan_id=${selectedPlanId}`);
      if (progressResponse.ok) {
        const progressData = await progressResponse.json();
        setProgressTracking(progressData.progressTracking);
      }
    } catch (err) {
      console.error('Error updating meal status:', err);
    }
  };
  
  // Get the selected workout plan
  const selectedPlan = workoutPlans.find(plan => plan.id === selectedPlanId);
  
  // Get days based on frequency of the selected plan
  const days = selectedPlan ? Array.from({ length: selectedPlan.frequency }, (_, i) => i + 1) : [];
  
  // Format day label
  const formatDayLabel = (day: number) => {
    const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return dayLabels[(day - 1) % 7];
  };
  
  // Find meal plan for the selected day
  const getMealPlanForDay = (day: number): MealPlan | null => {
    if (!mealPlans || mealPlans.length === 0) return null;

    // Try to find meal plan that has the matching day number in its days array
    const matchingPlan = mealPlans.find(plan => 
      plan.days && plan.days.some(d => d.day_number === day)
    );

    if (matchingPlan) {
      return matchingPlan;
    }

    // If no exact match found, try to match by name containing the day number
    const planByName = mealPlans.find(plan => {
      const planName = plan.name.toLowerCase();
      return planName.includes(`day ${day}`) || planName.includes(`day${day}`);
    });

    if (planByName) {
      // Structure the plan to match the expected format
      return {
        ...planByName,
        days: [{
          day_number: day,
          day_name: `Day ${day}`,
          meals: planByName.days[0].meals.map(meal => ({
            ...meal,
            // Convert string values to numbers
            protein: typeof meal.protein === 'string' ? parseFloat(meal.protein) : meal.protein || 0,
            carbs: typeof meal.carbs === 'string' ? parseFloat(meal.carbs) : meal.carbs || 0,
            fats: typeof meal.fats === 'string' ? parseFloat(meal.fats) : meal.fats || 0
          }))
        }]
      };
    }

    return null;
  };
  
  // Ensure we have all meal types for the selected day
  const ensureMealTypes = (mealPlan: MealPlan | null): MealPlan | null => {
    if (!mealPlan) return null;

    const requiredMealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
    
    return {
      ...mealPlan,
      days: mealPlan.days.map(day => {
        const existingMealTypes = day.meals.map(meal => meal.meal_type);
        
        const missingMealTypes = requiredMealTypes.filter(
          type => !existingMealTypes.includes(type)
        );

        const updatedMeals = [...day.meals];
        
        missingMealTypes.forEach(mealType => {
          updatedMeals.push({
            id: `placeholder-${mealPlan.id}-${day.day_number}-${mealType}`,
            name: `No ${mealType} planned`,
            meal_type: mealType,
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            completed: false,
            completion_date: undefined,
            portion: 1,
            notes: "",
            food_items: []
          });
        });

        return {
          ...day,
          meals: updatedMeals
        };
      })
    };
  };
  
  // Filter exercises for the selected day
  const exercisesForDay = exercises.filter(ex => ex.day_of_week === selectedDay);
  
  // Get and validate meal plan for the selected day
  const dayMealPlan = ensureMealTypes(getMealPlanForDay(selectedDay));
  
  // Calculate day completion
  const calculateDayCompletion = () => {
    const currentMealPlan = selectedDayMealPlan || dayMealPlan;
    if (!currentMealPlan) return 0;
    
    const mealsComplete = currentMealPlan.days[0].meals.filter(meal => meal.completed).length;
    const mealsTotal = currentMealPlan.days[0].meals.length;
    
    const totalItems = mealsTotal + exercisesForDay.length;
    const completedItems = mealsComplete + exercisesForDay.filter((ex: any) => ex.completed).length;
    
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };
  
  const handleToggleMealCompletion = async (mealId: string) => {
    try {
      const currentMealPlan = selectedDayMealPlan;
      if (!currentMealPlan) return;

      // Find the meal in the current day's meals
      const dayData = currentMealPlan.days.find(d => d.day_number === selectedDay);
      if (!dayData) return;

      const meal = dayData.meals.find(m => m.id === mealId);
      if (!meal) return;

      const newCompletionStatus = !meal.completed;

      // Update the state optimistically
      setSelectedDayMealPlan(prev => {
        if (!prev) return null;
        return {
          ...prev,
          days: prev.days.map(d => ({
            ...d,
            meals: d.meals.map(m => 
              m.id === mealId ? { ...m, completed: newCompletionStatus } : m
            )
          }))
        };
      });

      // Call API to update the completion status
      const response = await fetch('/api/meal-plans/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          mealId,
          completed: newCompletionStatus
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update meal status');
      }

      // Update the mealPlans state to keep it in sync
      setMealPlans(prev => 
        prev.map(plan => ({
          ...plan,
          days: (plan.days || []).map(d => ({
            ...d,
            meals: d.meals.map(m => 
              m.id === mealId ? { ...m, completed: newCompletionStatus } : m
            )
          }))
        }))
      );

      // Refresh progress data
      const progressResponse = await fetch(`/api/progress?workout_plan_id=${selectedPlanId}`);
      if (progressResponse.ok) {
        const progressData = await progressResponse.json();
        setProgressTracking(progressData.progressTracking);
      }
    } catch (error) {
      console.error('Failed to toggle meal completion:', error);
      toast.error('Failed to update meal status. Please try again.');
      
      // Revert changes on error
      setSelectedDayMealPlan(prev => {
        if (!prev) return null;
        return {
          ...prev,
          days: prev.days.map(d => ({
            ...d,
            meals: d.meals.map(m => 
              m.id === mealId ? { ...m, completed: !m.completed } : m
            )
          }))
        };
      });
    }
  };
  
  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
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
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
            <Link 
              href="/dashboard" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
            >
              <span className="mr-1">←</span> Back to Dashboard
            </Link>
          </div>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
          <button 
            onClick={() => fetchPlanDetails()} 
            className="text-indigo-600 hover:text-indigo-800 mr-4"
          >
            Try Again
          </button>
          <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-800">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }
  
  if (workoutPlans.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
            <Link 
              href="/dashboard" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
            >
              <span className="mr-1">←</span> Back to Dashboard
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <p className="text-center text-gray-600 py-8">
              You don't have any active workout plans. Create a workout plan to start tracking your progress.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/dashboard/workout-plans" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
              >
                Create Workout Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
          <Link 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>
        
        {/* Plan selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <label htmlFor="plan-selector" className="block text-sm font-medium text-gray-700 mb-2">
            Select Workout Plan
          </label>
          <select
            id="plan-selector"
            value={selectedPlanId}
            onChange={(e) => setSelectedPlanId(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {workoutPlans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Progress summary */}
        {selectedPlan && progressTracking && (
          <PlanProgressSummary
            workoutPlanName={selectedPlan.name}
            workoutGoal={selectedPlan.goal}
            totalDays={selectedPlan.frequency * selectedPlan.duration_weeks}
            completedDays={Math.floor((progressTracking.exercises?.completed || 0) / (exercises.length / selectedPlan.frequency))}
            startDate={selectedPlan.created_at}
            endDate={new Date(new Date(selectedPlan.created_at).setDate(new Date(selectedPlan.created_at).getDate() + (selectedPlan.duration_weeks * 7))).toISOString()}
            exerciseCompletionPercentage={progressTracking.exercises?.percentage || 0}
            nutritionCompletionPercentage={progressTracking.meals?.percentage || 0}
          />
        )}
        
        {/* Day selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Progress</h2>
          
          <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
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
                {/* Day {day}: {formatDayLabel(day)} */}
                Day {day}
              </button>
            ))}
          </div>
          
          {/* Day completion progress */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Day {selectedDay}</h3>
            
            {/* Day completion percentage */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium text-gray-700">Daily Progress</h4>
                <span className="text-sm font-medium text-gray-900">{calculateDayCompletion()}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full rounded-full" 
                  style={{ width: `${calculateDayCompletion()}%` }}
                ></div>
              </div>
            </div>
            
            {/* Meal plan for the day */}
            {/* <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Meal Plan</h4>
              {selectedDayMealPlan && selectedDayMealPlan.days && selectedDayMealPlan.days.length > 0 ? (
                <div className="space-y-4">
                  {selectedDayMealPlan.days[0].meals.map((meal, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={meal.completed || false}
                          onChange={() => handleToggleMealCompletion(meal.id)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className={meal.completed ? "line-through text-gray-400" : "text-gray-700"}>
                          {meal.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{meal.calories || 0} cal</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No meals planned for this day.</p>
              )}
            </div> */}
          </div>
        </div>
        
        {/* Two-column layout for exercises and meals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Workout section */}
          <div>
            <WorkoutProgressTracker
              exercises={exercisesForDay}
              selectedDay={selectedDay}
              onExerciseStatusChange={handleExerciseStatusChange}
              onExerciseLogUpdate={handleExerciseLogUpdate}
            />
          </div>
          
          {/* Meal plan section */}
          <div>
            {selectedDayMealPlan ? (
              <MealPlanDisplay
                mealPlan={{
                  id: selectedDayMealPlan.id,
                  name: selectedDayMealPlan.name,
                  description: selectedDayMealPlan.description,
                  workout_plan_id: selectedDayMealPlan.workout_plan_id,
                  workout_plan_name: selectedDayMealPlan.workout_plan_name,
                  created_at: selectedDayMealPlan.created_at,
                  days: selectedDayMealPlan.days
                }}
                workoutGoal={selectedPlan?.goal || ''}
                onMealStatusChange={handleMealStatusChange}
              />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">Nutrition Plan</h2>
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No meal plan found for this day.</p>
                  <Link 
                    href={`/dashboard/nutrition?create=true&workout_plan_id=${selectedPlanId}&day=${selectedDay}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                  >
                    Create Meal Plan
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 