'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { json } from 'stream/consumers';

// Define types for meal data
type Meal = {
  id: string;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  image_url?: string;
  description?: string;
};

type MealLogEntry = {
  id?: string;
  meal_id?: string;
  meal_name: string;
  portion: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  meal_time: string;
  notes?: string;
  consumed_at: Date;
};

// Define toast notification type
type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error';
};

// Add meal and food item interfaces
interface FoodItem {
  id: string;
  name: string;
  amount: string;
  calories: number;
}

interface MealPlanMeal {
  id: string;
  name: string;
  meal_type: string;
  calories: number;
  protein: string;
  carbs: string;
  fats: string;
  completed: boolean;
  completion_date: string | null;
  portion: string;
  notes: string;
  food_items: any[];
}

interface DayData {
  day_number: number;
  day_name: string;
  meals: MealPlanMeal[];
}

interface MealPlan {
  id: string;
  name: string;
  description: string;
  workout_plan_id: string;
  workout_plan_name: string;
  daily_calories: number;
  days: DayData[];
  created_at: string;
  date: string;
}

export default function NutritionPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  const [mealLogs, setMealLogs] = useState<MealLogEntry[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [showLogForm, setShowLogForm] = useState<boolean>(false);
  
  // Daily nutrition summary
  const [dailySummary, setDailySummary] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    mealProgress: { total: 0, completed: 0 }
  });
  
  // Form state for logging meal
  const [portion, setPortion] = useState<number>(1);
  const [mealTime, setMealTime] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [customMealName, setCustomMealName] = useState<string>('');
  const [customCalories, setCustomCalories] = useState<number | ''>('');
  const [customProtein, setCustomProtein] = useState<number | ''>('');
  const [customCarbs, setCustomCarbs] = useState<number | ''>('');
  const [customFats, setCustomFats] = useState<number | ''>('');
  const [isCustomMeal, setIsCustomMeal] = useState<boolean>(false);

  // New state for adding meal to library
  const [showAddMealForm, setShowAddMealForm] = useState<boolean>(false);
  const [newMealName, setNewMealName] = useState<string>('');
  const [newMealCategory, setNewMealCategory] = useState<string>('breakfast');
  const [newMealCalories, setNewMealCalories] = useState<number | ''>('');
  const [newMealProtein, setNewMealProtein] = useState<number | ''>('');
  const [newMealCarbs, setNewMealCarbs] = useState<number | ''>('');
  const [newMealFats, setNewMealFats] = useState<number | ''>('');
  const [newMealDescription, setNewMealDescription] = useState<string>('');

  // Toast notifications state
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Add calorie range filter
  const [calorieFilter, setCalorieFilter] = useState<string>('all');

  // Add new state variables for meal plan functionality
  const [activeMealPlan, setActiveMealPlan] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [completedMeals, setCompletedMeals] = useState(0);
  const [totalMeals, setTotalMeals] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [macronutrientSplit, setMacronutrientSplit] = useState<{protein: number, carbs: number, fat: number} | null>({
    protein: 30,
    carbs: 45,
    fat: 25
  });

  // State for meal plans
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan | null>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  // Add state for meal type filter
  const [mealTypeFilter, setMealTypeFilter] = useState<string | null>(null);

  // Add debounce utility
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Update addToast function to use more unique keys
  const addToast = (message: string, type: 'success' | 'error') => {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  // Debounce the toggle function
  const debouncedToggleMealCompletion = useCallback(
    debounce(async (mealId: string, currentStatus: boolean) => {
      try {
        // Make API call to update meal status
        const response = await fetch('/api/meal-plans', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            meal_plan_item_id: mealId,
            completed: !currentStatus,
          }),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to update meal status');
        }
        
        // Update both activeMealPlan and mealPlans states
        if (activeMealPlan) {
          let mealType = ''; // Store meal type outside state update
          
          // Update active meal plan
          setActiveMealPlan((prevState: MealPlan | null) => {
            if (!prevState) return null;
            
            const updatedDays = prevState.days.map((day: DayData) => ({
              ...day,
              meals: day.meals.map((meal: MealPlanMeal) => {
                if (meal.id === mealId) {
                  mealType = meal.meal_type; // Store meal type for toast
                  return { ...meal, completed: !currentStatus };
                }
                return meal;
              })
            }));
            
            return {
              ...prevState,
              days: updatedDays
            };
          });

          // Update all meal plans
          setMealPlans((prevMealPlans) => 
            prevMealPlans.map((plan) => {
              if (plan.id === activeMealPlan.id) {
                return {
                  ...plan,
                  days: plan.days.map((day: DayData) => ({
                    ...day,
                    meals: day.meals.map((meal: MealPlanMeal) => {
                      if (meal.id === mealId) {
                        return { ...meal, completed: !currentStatus };
                      }
                      return meal;
                    })
                  }))
                };
              }
              return plan;
            })
          );

          // Calculate and update progress
          let totalMealsCount = 0;
          let completedMealsCount = 0;
          
          activeMealPlan.days.forEach((day: DayData) => {
            if (day && day.meals) {
              totalMealsCount += day.meals.length;
              completedMealsCount += day.meals.filter(m => 
                m.id === mealId ? !currentStatus : m.completed
              ).length;
            }
          });

          // Update total meals state
          setTotalMeals(totalMealsCount);
          setCompletedMeals(completedMealsCount);
          
          // If we're on the selected day, update the daily summary
          const selectedDayData = activeMealPlan.days.find((d: DayData) => d.day_name === selectedDay);
          if (selectedDayData && selectedDayData.meals) {
            const dayCompletedMeals = selectedDayData.meals.filter((m: MealPlanMeal) => 
              m.id === mealId ? !currentStatus : m.completed
            ).length;
            
            setDailySummary(prevSummary => ({
              ...prevSummary,
              mealProgress: {
                total: selectedDayData.meals.length,
                completed: dayCompletedMeals
              }
            }));
          }

          // Show toast after state update with stored meal type
          const formattedMealType = mealType.charAt(0).toUpperCase() + mealType.slice(1);
          addToast(`${formattedMealType} marked as ${!currentStatus ? 'completed' : 'incomplete'}!`, 'success');
        }
      } catch (error) {
        console.error('Failed to update meal status:', error);
        addToast('Failed to update meal status. Please try again.', 'error');
      }
    }, 300),
    [activeMealPlan, selectedDay]
  );

  // Update the handleToggleMealCompletion to use the debounced version
  const handleToggleMealCompletion = (mealId: string, currentStatus: boolean) => {
    debouncedToggleMealCompletion(mealId, currentStatus);
  };

  // Handler for changing meal plan
  const handleMealPlanChange = async (mealPlanId: string) => {
    if (!mealPlanId) return;
    
    try {
      // Find the selected meal plan from the mealPlans array
      const selectedPlan = mealPlans.find(plan => plan.id === mealPlanId);
      if (!selectedPlan) {
        throw new Error('Selected meal plan not found');
      }
      
      setActiveMealPlan(selectedPlan);
      
      // Calculate total and completed meals for the selected plan
      let total = 0;
      let completed = 0;
      
      if (selectedPlan.days && Array.isArray(selectedPlan.days)) {
        selectedPlan.days.forEach((day: DayData) => {
          if (day && day.meals && Array.isArray(day.meals)) {
            day.meals.forEach((meal: MealPlanMeal) => {
              total++;
              if (meal.completed) completed++;
            });
          }
        });
        
        // Set initial selected day to first day in the plan
        if (selectedPlan.days.length > 0) {
          setSelectedDay(selectedPlan.days[0].day_name);
        }
      }
      
      setTotalMeals(total);
      setCompletedMeals(completed);
      
      // Show success message
      addToast(`Switched to meal plan: ${selectedPlan.name || selectedPlan.workout_plan_name}`, 'success');
    } catch (error) {
      console.error('Error changing meal plan:', error);
      addToast('Failed to change meal plan. Please try again.', 'error');
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      // Fetch meals
      fetchMeals();
      // Fetch user's meal logs
      fetchUserMealLogs();
    }
  }, [status, router]);

  useEffect(() => {
    if (meals.length > 0) {
      filterMeals();
    }
  }, [category, searchTerm, meals]);

  useEffect(() => {
    // Calculate daily nutrition summary
    calculateDailySummary();
  }, [mealLogs]);

  // Load meal plan data
  useEffect(() => {
    const fetchMealPlan = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/meal-plans');
        
        if (!response.ok) {
          throw new Error('Failed to fetch meal plans');
        }
        
        const data = await response.json();
        const mealPlans = data.meal_plans || [];
        
        // Store all meal plans in state
        setMealPlans(mealPlans);
        
        // If meal plans exist, use the first one as active
        if (mealPlans.length > 0) {
          const firstPlan = mealPlans[0];
          setActiveMealPlan(firstPlan);
          console.log("active meal plan state" + firstPlan)
          // Calculate total and completed meals
          let total = 0;
          let completed = 0;
          
          // Add null check for days
          if (firstPlan && firstPlan.days && Array.isArray(firstPlan.days)) {
            firstPlan.days.forEach((day: DayData) => {
              // Add null check for meals
              if (day && day.meals && Array.isArray(day.meals)) {
                day.meals.forEach((meal: MealPlanMeal) => {
                  total++;
                  if (meal.completed) completed++;
                });
              }
            });
            
            // Set initial selected day to first day in the plan
            if (firstPlan.days.length > 0) {
              setSelectedDay(firstPlan.days[0].day_name);
            }
          }
          
          setTotalMeals(total);
          setCompletedMeals(completed);
        } else {
          setActiveMealPlan(null);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal plan:', error);
        setLoading(false);
        setActiveMealPlan(null);
      }
    };

    if (status !== 'loading') {
      fetchMealPlan();
    }
  }, [status, session?.user?.id]);

  useEffect(() => {
    // Fetch initial water intake
    const fetchWaterIntake = async () => {
      try {
        const response = await fetch('/api/water-tracking');
        if (!response.ok) {
          throw new Error('Failed to fetch water intake');
        }
        const data = await response.json();
        setWaterIntake(data.amount_ml);
      } catch (error) {
        console.error('Failed to fetch water intake:', error);
        addToast('Failed to fetch water intake', 'error');
      }
    };

    if (status === 'authenticated') {
      fetchWaterIntake();
    }
  }, [status]);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/meals');
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      
      const data = await response.json();
      setMeals(data.meals || []);
      setFilteredMeals(data.meals || []);
    } catch (error) {
      console.error('Failed to fetch meals:', error);
      // Fallback to dummy data if API fails
      const dummyMeals: Meal[] = [
        {
          id: '1',
          name: 'Chicken Salad',
          category: 'lunch',
          calories: 350,
          protein: 30,
          carbs: 15,
          fats: 18,
          description: 'Grilled chicken with mixed greens, tomatoes, and olive oil dressing.',
        },
        {
          id: '2',
          name: 'Protein Smoothie',
          category: 'breakfast',
          calories: 320,
          protein: 25,
          carbs: 30,
          fats: 10,
          description: 'Whey protein with banana, berries, and almond milk.',
        },
        {
          id: '3',
          name: 'Salmon with Vegetables',
          category: 'dinner',
          calories: 450,
          protein: 35,
          carbs: 20,
          fats: 25,
          description: 'Baked salmon fillet with roasted broccoli and sweet potatoes.',
        },
        {
          id: '4',
          name: 'Greek Yogurt with Berries',
          category: 'snack',
          calories: 180,
          protein: 15,
          carbs: 18,
          fats: 5,
          description: 'Greek yogurt topped with mixed berries and a drizzle of honey.',
        },
        {
          id: '5',
          name: 'Beef and Vegetable Stir-Fry',
          category: 'dinner',
          calories: 420,
          protein: 32,
          carbs: 25,
          fats: 20,
          description: 'Stir-fried beef strips with bell peppers, broccoli, and snap peas.',
        },
      ];
      
      setMeals(dummyMeals);
      setFilteredMeals(dummyMeals);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserMealLogs = async () => {
    try {
      const response = await fetch('/api/nutrition-logs');
      if (!response.ok) {
        throw new Error('Failed to fetch meal logs');
      }
      
      const data = await response.json();
      setMealLogs(data.logs || []);
    } catch (error) {
      console.error('Failed to fetch meal logs:', error);
      // Fallback to dummy data if API fails
      const dummyLogs: MealLogEntry[] = [
        {
          id: '101',
          meal_id: '1',
          meal_name: 'Chicken Salad',
          portion: 1,
          calories: 350,
          protein: 30,
          carbs: 15,
          fats: 18,
          meal_time: 'lunch',
          notes: 'Added extra olive oil',
          consumed_at: new Date()
        },
        {
          id: '102',
          meal_id: '4',
          meal_name: 'Greek Yogurt with Berries',
          portion: 1,
          calories: 180,
          protein: 15,
          carbs: 18,
          fats: 5,
          meal_time: 'snack',
          consumed_at: new Date()
        }
      ];
      
      setMealLogs(dummyLogs);
    }
  };

  const calculateDailySummary = () => {
    // Calculate the daily nutrition summary based on meal logs
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayLogs = mealLogs.filter(log => {
      const logDate = new Date(log.consumed_at);
      logDate.setHours(0, 0, 0, 0);
      return logDate.getTime() === today.getTime();
    });
    
    const summary = todayLogs.reduce((acc, log) => {
      // Ensure all values are properly converted to numbers
      const calories = typeof log.calories === 'number' ? log.calories : Number(log.calories) || 0;
      const protein = typeof log.protein === 'number' ? log.protein : Number(log.protein) || 0;
      const carbs = typeof log.carbs === 'number' ? log.carbs : Number(log.carbs) || 0;
      const fats = typeof log.fats === 'number' ? log.fats : Number(log.fats) || 0;
      
      return {
        calories: acc.calories + calories,
        protein: acc.protein + protein,
        carbs: acc.carbs + carbs,
        fats: acc.fats + fats
      };
    }, {
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0
    });
    
    // Include meal progress with default values
    setDailySummary({
      ...summary,
      mealProgress: dailySummary.mealProgress
    });
  };

  const filterMeals = () => {
    let filtered = meals;
    
    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(meal => meal.category.toLowerCase() === category.toLowerCase());
    }
    
    // Calorie filter
    if (calorieFilter !== 'all') {
      switch (calorieFilter) {
        case 'under200':
          filtered = filtered.filter(meal => meal.calories < 200);
          break;
        case '200to400':
          filtered = filtered.filter(meal => meal.calories >= 200 && meal.calories <= 400);
          break;
        case '400to600':
          filtered = filtered.filter(meal => meal.calories > 400 && meal.calories <= 600);
          break;
        case 'over600':
          filtered = filtered.filter(meal => meal.calories > 600);
          break;
      }
    }
    
    // Search term filter (checks name and description)
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(meal => 
        meal.name.toLowerCase().includes(term) || 
        (meal.description && meal.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredMeals(filtered);
  };

  const handleAddMealLog = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowLogForm(true);
    setIsCustomMeal(false);
    // Reset form fields
    setPortion(1);
    setMealTime('');
    setNotes('');
  };

  const handleAddCustomMeal = () => {
    setSelectedMeal(null);
    setShowLogForm(true);
    setIsCustomMeal(true);
    // Reset form fields
    setCustomMealName('');
    setCustomCalories('');
    setCustomProtein('');
    setCustomCarbs('');
    setCustomFats('');
    setPortion(1);
    setMealTime('');
    setNotes('');
  };

  const handleLogFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let newLogEntry: MealLogEntry;
      
      if (isCustomMeal) {
        // Validate custom meal data
        if (!customMealName || customCalories === '' || customProtein === '' || customCarbs === '' || customFats === '') {
          addToast('Please fill in all required fields', 'error');
          return;
        }
        
        newLogEntry = {
          meal_name: customMealName,
          portion: portion,
          calories: Number(customCalories) * portion,
          protein: Number(customProtein) * portion,
          carbs: Number(customCarbs) * portion,
          fats: Number(customFats) * portion,
          meal_time: mealTime,
          notes: notes,
          consumed_at: new Date()
        };
      } else if (selectedMeal) {
        newLogEntry = {
          meal_id: selectedMeal.id,
          meal_name: selectedMeal.name,
          portion: portion,
          calories: selectedMeal.calories * portion,
          protein: selectedMeal.protein * portion,
          carbs: selectedMeal.carbs * portion,
          fats: selectedMeal.fats * portion,
          meal_time: mealTime,
          notes: notes,
          consumed_at: new Date()
        };
      } else {
        addToast('No meal selected', 'error');
        return;
      }
      
      // Send to API
      const response = await fetch('/api/nutrition-logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLogEntry),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to log meal');
      }
      
      const data = await response.json();
      
      // Add the new log to the state
      setMealLogs([data.log, ...mealLogs]);
      
      // Close the form
      setShowLogForm(false);
      setSelectedMeal(null);
      
      // Show success message
      addToast('Meal logged successfully!', 'success');
    } catch (error) {
      console.error('Failed to log meal:', error);
      addToast('Failed to log meal. Please try again.', 'error');
    }
  };

  // Add handleAddMealToLibrary function
  const handleAddMealToLibrary = () => {
    setShowAddMealForm(true);
    // Reset form fields
    setNewMealName('');
    setNewMealCategory('breakfast');
    setNewMealCalories('');
    setNewMealProtein('');
    setNewMealCarbs('');
    setNewMealFats('');
    setNewMealDescription('');
  };

  // Add handleAddMealToLibrarySubmit function
  const handleAddMealToLibrarySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate required fields
      if (!newMealName || newMealCalories === '') {
        addToast('Meal name and calories are required', 'error');
        return;
      }
      
      // Create the new meal object
      const newMeal = {
        name: newMealName,
        category: newMealCategory,
        calories: Number(newMealCalories),
        protein: Number(newMealProtein) || 0,
        carbs: Number(newMealCarbs) || 0,
        fats: Number(newMealFats) || 0,
        description: newMealDescription
      };
      
      // Send to API
      const response = await fetch('/api/meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMeal),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add meal to library');
      }
      
      const data = await response.json();
      
      // Add the new meal to the state
      setMeals([data.meal, ...meals]);
      
      // Close the form
      setShowAddMealForm(false);
      
      // Show success message
      addToast('Meal added to library successfully!', 'success');
    } catch (error) {
      console.error('Failed to add meal to library:', error);
      addToast('Failed to add meal to library. Please try again.', 'error');
    }
  };

  // Function to get meal completion text for day selector
  const getMealCompletionText = (day: string) => {
    if (!activeMealPlan || !activeMealPlan.days) return '';
    
    const dayData = activeMealPlan.days.find((d: {day_name: string}) => d.day_name === day);
    if (!dayData || !dayData.meals) return '';
    
    const total = dayData.meals.length;
    const completed = dayData.meals.filter((m: {completed: boolean}) => m.completed).length;
    
    return `${completed}/${total} completed`;
  };

  // Function to calculate calories for a meal
  const calculateMealCalories = (meal: any) => {
    if (!meal || !meal.food_items) return 0;
    return meal.food_items.reduce((total: number, item: {calories: number}) => total + (item?.calories || 0), 0);
  };

  // Update the useEffect for calculating dailySummary to include mealProgress
  useEffect(() => {
    if (selectedMealPlan && selectedMealPlan.days && selectedDayIndex !== null && selectedDayIndex >= 0 && selectedDayIndex < selectedMealPlan.days.length) {
      const dayData = selectedMealPlan.days[selectedDayIndex];
      if (!dayData || !dayData.meals) return;
      
      const mealsForDay = dayData.meals;
      
      // Calculate totals
      let calories = 0;
      
      mealsForDay.forEach(meal => {
        if (meal.food_items && Array.isArray(meal.food_items)) {
          meal.food_items.forEach((item) => {
            calories += item.calories || 0;
            // FoodItem doesn't have these properties so we don't calculate them here
          });
        }
      });
      
      // Calculate meal progress
      const completedMeals = mealsForDay.filter(meal => meal.completed).length;
      const totalMeals = mealsForDay.length;
      
      setDailySummary(prevSummary => ({
        ...prevSummary,
        calories,
        mealProgress: {
          total: totalMeals,
          completed: completedMeals
        }
      }));
    }
  }, [selectedMealPlan, selectedDayIndex]);

  const toggleMealPlan = (id: string) => {
    setActiveMealPlan((prevState: MealPlan | null) => {
      return prevState?.id === id ? null : mealPlans.find(plan => plan.id === id) || null;
    });
  };

  const handleWaterIntakeChange = async (change: number) => {
    const newAmount = Math.max(0, waterIntake + change);
    
    try {
      const response = await fetch('/api/water-tracking', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount_ml: newAmount }),
      });

      if (!response.ok) {
        throw new Error('Failed to update water intake');
      }

      const data = await response.json();
      setWaterIntake(data.amount_ml);
      addToast('Water intake updated!', 'success');
    } catch (error) {
      console.error('Failed to update water intake:', error);
      addToast('Failed to update water intake', 'error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Nutrition</h1>
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
          <h1 className="text-3xl font-bold text-gray-900">Nutrition</h1>
          <Link 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Meal Plan Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-2xl font-bold text-indigo-700 mb-2">Your Meal Plan</h2>
                  <p className="text-gray-600">
                    {activeMealPlan
                      ? `Based on your ${activeMealPlan.workout_plan_name?.toLowerCase() || 'fitness plan'}`
                      : 'No active meal plan'}
                  </p>
                </div>
                <div>
                  <select
                    className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => handleMealPlanChange(e.target.value)}
                    value={activeMealPlan?.id || ''}
                  >
                    <option value="" disabled>Select meal plan</option>
                    {mealPlans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.workout_plan_name}
                      </option>
                    ))}
                    {mealPlans.length === 0 && (
                      <option value="" disabled>No meal plans available</option>
                    )}
                  </select>
                </div>
              </div>

              {activeMealPlan ? (
                <>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm font-medium text-gray-500">Daily Calorie Target:</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {activeMealPlan.daily_calories} calories
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500">Progress</span>
                      <span className="text-sm font-medium text-gray-500">
                        {completedMeals} of {totalMeals} meals completed
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${(completedMeals / Math.max(totalMeals, 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mt-8 mb-4">
                    {activeMealPlan?.days?.map((day: DayData) => (
                      <button
                        key={`day-${day.day_number}-${day.day_name}`}
                        onClick={() => setSelectedDay(day.day_name)}
                        className={`p-2 rounded-md flex flex-col items-center justify-center ${
                          selectedDay === day.day_name ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                      >
                        <span className="text-sm font-medium">Day {day.day_number}</span>
                        <span className="text-xs mt-1">{getMealCompletionText(day.day_name)}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p className="mb-4">You don't have any active meal plans.</p>
                  <p>Please check your workout plans to see associated meal plans.</p>
                </div>
              )}
            </div>

            {activeMealPlan && selectedDay && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-indigo-700 mb-6">
                  {selectedDay}'s Meals
                </h3>
                
                {/* Add meal type filter buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setMealTypeFilter(null)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      mealTypeFilter === null 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {['breakfast', 'lunch', 'dinner', 'snack'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setMealTypeFilter(type)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        mealTypeFilter === type 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {activeMealPlan.days ? (
                  <div className="mt-4">
                    {activeMealPlan.days
                      .find((day: DayData) => day.day_name === selectedDay)
                      ?.meals
                      ?.filter((meal: MealPlanMeal) => 
                        mealTypeFilter === null || meal.meal_type === mealTypeFilter
                      )
                      ?.map((meal: MealPlanMeal) => {
                        const uniqueKey = `meal-${meal.id}-${meal.meal_type}-${meal.name}-${selectedDay}`;
                        return (
                          <div
                            key={uniqueKey}
                            className="bg-white rounded-lg shadow-md p-4 mb-4"
                          >
                            <div className="flex flex-wrap justify-between items-center mb-3">
                              <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                  {meal.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {meal.meal_type.charAt(0).toUpperCase() + meal.meal_type.slice(1)}
                                </p>
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                <div className="text-sm">
                                  <p className="text-gray-500">{meal.calories} calories</p>
                                  <p className="text-gray-500">
                                    P: {meal.protein}g • C: {meal.carbs}g • F: {meal.fats}g
                                  </p>
                                </div>
                                <button
                                  onClick={() => handleToggleMealCompletion(meal.id, meal.completed)}
                                  className={`rounded-full p-1 ${
                                    meal.completed
                                      ? 'bg-green-100 text-green-600'
                                      : 'bg-gray-100 text-gray-400'
                                  }`}
                                >
                                  <svg 
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>

                            {meal.notes && (
                              <div className="mt-2 text-sm text-gray-600">
                                {meal.notes}
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <p>Could not find meal data for this day.</p>
                    <p className="mt-2">Please check your workout plan to see associated meal plans.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Nutrition Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-indigo-700 mb-6">Nutrition Stats</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Macronutrient Split</h3>
                  {macronutrientSplit ? (
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-600">Protein</span>
                          <span className="text-sm font-medium text-gray-600">{macronutrientSplit.protein}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${macronutrientSplit.protein}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-600">Carbs</span>
                          <span className="text-sm font-medium text-gray-600">{macronutrientSplit.carbs}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${macronutrientSplit.carbs}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-600">Fat</span>
                          <span className="text-sm font-medium text-gray-600">{macronutrientSplit.fat}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-600 h-2 rounded-full"
                            style={{ width: `${macronutrientSplit.fat}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No macronutrient data available</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Daily Intake</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-indigo-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-500">Calories</div>
                      <div className="text-xl font-semibold text-indigo-700">
                        {activeMealPlan ? activeMealPlan.daily_calories : 0}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-500">Protein</div>
                      <div className="text-xl font-semibold text-blue-700">
                        {activeMealPlan ? Math.round((activeMealPlan.daily_calories * (macronutrientSplit?.protein || 0) / 100) / 4) : 0}g
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-500">Carbs</div>
                      <div className="text-xl font-semibold text-green-700">
                        {activeMealPlan ? Math.round((activeMealPlan.daily_calories * (macronutrientSplit?.carbs || 0) / 100) / 4) : 0}g
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-500">Fat</div>
                      <div className="text-xl font-semibold text-yellow-700">
                        {activeMealPlan ? Math.round((activeMealPlan.daily_calories * (macronutrientSplit?.fat || 0) / 100) / 9) : 0}g
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Water Tracking</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Daily Goal: 2000ml</span>
                      <span className="text-sm font-medium text-gray-600">{waterIntake}ml</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${Math.min((waterIntake / 2000) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleWaterIntakeChange(-250)}
                        className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm border border-blue-200"
                      >
                        -250ml
                      </button>
                      <button
                        onClick={() => handleWaterIntakeChange(250)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        +250ml
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast notifications container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2">
        {toasts.map((toast) => (
          <div
            key={`toast-${toast.id}-${toast.type}`}
            className={`px-4 py-3 rounded-lg shadow-lg text-white ${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } transition-all duration-300 max-w-xs`}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Meal Log Form Modal */}
      {showLogForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">
              {isCustomMeal ? 'Log Custom Meal' : `Log Meal: ${selectedMeal?.name}`}
            </h2>
            
            <form onSubmit={handleLogFormSubmit} className="space-y-4">
              {isCustomMeal && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meal Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={customMealName}
                      onChange={(e) => setCustomMealName(e.target.value)}
                      placeholder="e.g., Homemade Chicken Sandwich"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
                    <input
                      type="number"
                      required
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={customCalories}
                      onChange={(e) => setCustomCalories(e.target.value ? parseInt(e.target.value) : '')}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Protein (g)</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.1"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={customProtein}
                        onChange={(e) => setCustomProtein(e.target.value ? parseFloat(e.target.value) : '')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Carbs (g)</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.1"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={customCarbs}
                        onChange={(e) => setCustomCarbs(e.target.value ? parseFloat(e.target.value) : '')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fats (g)</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.1"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={customFats}
                        onChange={(e) => setCustomFats(e.target.value ? parseFloat(e.target.value) : '')}
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Portion Size</label>
                <input
                  type="number"
                  required
                  min="0.25"
                  step="0.25"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={portion}
                  onChange={(e) => setPortion(parseFloat(e.target.value))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meal Time</label>
                <select
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={mealTime}
                  onChange={(e) => setMealTime(e.target.value)}
                >
                  <option value="">Select meal time</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional notes about this meal"
                />
              </div>
              
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
                >
                  Log Meal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Meal Form Modal */}
      {showAddMealForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Add New Meal</h2>
            
            <form onSubmit={handleAddMealToLibrarySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meal Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMealName}
                  onChange={(e) => setNewMealName(e.target.value)}
                  placeholder="e.g., Homemade Chicken Sandwich"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
                <input
                  type="number"
                  required
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMealCalories}
                  onChange={(e) => setNewMealCalories(e.target.value ? parseInt(e.target.value) : '')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Protein (g)</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMealProtein}
                  onChange={(e) => setNewMealProtein(e.target.value ? parseFloat(e.target.value) : '')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Carbs (g)</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMealCarbs}
                  onChange={(e) => setNewMealCarbs(e.target.value ? parseFloat(e.target.value) : '')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fats (g)</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMealFats}
                  onChange={(e) => setNewMealFats(e.target.value ? parseFloat(e.target.value) : '')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={2}
                  value={newMealDescription}
                  onChange={(e) => setNewMealDescription(e.target.value)}
                  placeholder="Optional description about this meal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMealCategory}
                  onChange={(e) => setNewMealCategory(e.target.value)}
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddMealForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
                >
                  Add Meal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 