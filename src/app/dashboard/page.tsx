'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Extend the Session types to include our custom fields
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      age?: number;
      gender?: string;
      weight?: number;
      height?: number;
      bmi?: number;
      fitness_goal?: string;
      dietary_preference?: string;
      dietary_restrictions?: string[];
    }
  }
}

// Add these interfaces to your existing ones
interface ExerciseLog {
  id: string;
  exercise_name: string;
  category?: string;
  sets?: number;
  reps?: number;
  weight?: number;
  duration?: number;
  intensity?: string;
  completed_at: string;
  notes?: string;
}

interface MealLog {
  id: string;
  meal_name: string;
  calories: number;
  meal_time?: string;
  consumed_at: string;
}

interface ProgressSummary {
  workoutPlanId: string;
  workoutPlanName: string;
  exercisePercentage: number;
  mealPercentage: number;
  week: number;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Add these states to your component
  const [recentExercises, setRecentExercises] = useState<ExerciseLog[]>([]);
  const [recentMeals, setRecentMeals] = useState<MealLog[]>([]);
  const [exercisesLoading, setExercisesLoading] = useState(true);
  const [mealsLoading, setMealsLoading] = useState(true);
  const [progressSummary, setProgressSummary] = useState<ProgressSummary | null>(null);
  const [progressSummaries, setProgressSummaries] = useState<ProgressSummary[]>([]);
  const [progressLoading, setProgressLoading] = useState(true);
  const [displayedTips, setDisplayedTips] = useState<{title: string, content: string, color: string}[]>([]);

  // Define all available tips
  const allTips = [
    { title: "Stay Hydrated", content: "Remember to drink at least 8 glasses of water per day.", color: "yellow" },
    { title: "Protein Intake", content: "Aim for 0.8-1g of protein per pound of body weight for muscle gain.", color: "green" },
    { title: "Rest Days", content: "Don't skip rest days: Recovery is when your muscles grow stronger.", color: "blue" },
    { title: "Hydration Swap", content: "Swap soda for water or natural juices to reduce sugar intake.", color: "teal" },
    { title: "Sleep Well", content: "Aim for 7–8 hours of sleep to support recovery and energy levels.", color: "indigo" },
    { title: "Form Matters", content: "Focus on form over reps: Proper technique ensures results and prevents injury.", color: "purple" },
    { title: "Consistency", content: "Consistency beats intensity. Regular moderate workouts trump occasional intense ones.", color: "red" },
    { title: "Meal Timing", content: "Try to eat within 45 minutes of your workout to optimize recovery.", color: "orange" },
    { title: "Stretching", content: "Don't forget to stretch before and after workouts to improve flexibility and reduce soreness.", color: "pink" },
    { title: "Progressive Overload", content: "Gradually increase weight or reps to continue making progress over time.", color: "emerald" }
  ];

  // Color map for Tailwind classes
  const colorMap: {[key: string]: {bg: string, border: string, text: string}} = {
    yellow: { bg: "bg-yellow-50", border: "border-yellow-100", text: "text-yellow-800" },
    green: { bg: "bg-green-50", border: "border-green-100", text: "text-green-800" },
    blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-800" },
    teal: { bg: "bg-teal-50", border: "border-teal-100", text: "text-teal-800" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-800" },
    purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-800" },
    red: { bg: "bg-red-50", border: "border-red-100", text: "text-red-800" },
    orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-800" },
    pink: { bg: "bg-pink-50", border: "border-pink-100", text: "text-pink-800" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-800" }
  };

  // Add a function to refresh tips
  const refreshTips = () => {
    const shuffledTips = [...allTips].sort(() => 0.5 - Math.random());
    setDisplayedTips(shuffledTips.slice(0, 2));
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login');
      return;
    }
    
    if (status === 'authenticated' && session) {
      fetchRecentExercises();
      fetchRecentMeals();
      fetchProgressSummary();
      
      // Randomly select 2 tips to display
      refreshTips();
    }
  }, [status, session, router]);

  async function fetchRecentExercises() {
    try {
      const response = await fetch('/api/exercise-logs?limit=3');
      if (response.ok) {
        const data = await response.json();
        // console.log("testing-data", data);
        // Ensure we properly format the data
        const formattedLogs = (data || []).map((log: any) => ({
          id: log.id,
          exercise_name: log.exercise_name || log.base_exercise_name || 'Unknown Exercise',
          category: log.category,
          sets: log.sets,
          reps: log.reps,
          weight: log.weight,
          duration: log.duration,
          intensity: log.intensity,
          completed_at: log.completed_at,
          notes: log.notes
        }));
        // console.log("testing-formattedLogs", formattedLogs);
        setRecentExercises(formattedLogs);
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setExercisesLoading(false);
    }
  }

  async function fetchRecentMeals() {
    try {
      const response = await fetch('/api/nutrition-logs?limit=3');
      if (response.ok) {
        const data = await response.json();
        setRecentMeals(data.logs || []);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setMealsLoading(false);
    }
  }

  async function fetchProgressSummary() {
    try {
      if (!session?.user?.id) return;
      
      const progressResponse = await fetch('/api/sync-progress');
      if (!progressResponse.ok) throw new Error('Failed to fetch progress');
      
      const progressData = await progressResponse.json();
      
      if (progressData.progress && progressData.progress.length > 0) {
        const summaries = progressData.progress.map((item: any) => ({
          workoutPlanId: item.workoutPlanId,
          workoutPlanName: item.workoutPlanName,
          exercisePercentage: item.tracking.exercises.percentage,
          mealPercentage: item.tracking.meals.percentage,
          week: item.tracking.week
        }));
        
        setProgressSummaries(summaries);
        setProgressSummary(summaries[0]);
      }
    } catch (error) {
      console.error('Error fetching progress summary:', error);
    } finally {
      setProgressLoading(false);
    }
  }

  // Add this helper function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">Fitcheq Dashboard</h1>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Sign Out
          </button>
        </div>

        {/* User Stats Summary Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Welcome, {session?.user?.name}!</h2>
              <p className="text-gray-600">
                Goal: {session?.user?.fitness_goal ? 
                  session.user.fitness_goal.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
                  'Not set yet'}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Height</p>
                  <p className="font-bold text-indigo-700">{session?.user?.height || '-'} cm</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="font-bold text-indigo-700">{session?.user?.weight || '-'} kg</p>
                </div>
              </div>
              
              <Link 
                href="/dashboard/profile" 
                className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-md text-sm flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Replace the existing progress summary section with this enhanced version */}
        {progressSummaries.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Current Progress</h2>
                <p className="text-gray-600">
                  {progressSummaries.length > 1 
                    ? `Tracking ${progressSummaries.length} active workout plans` 
                    : progressSummaries[0].workoutPlanName}
                </p>
              </div>
              <Link 
                href="/dashboard/progress"
                className="text-indigo-600 hover:underline text-sm"
              >
                View full progress
              </Link>
            </div>
            
            {/* Show the first plan progress prominently */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-gray-700">
                    {progressSummaries[0].workoutPlanName} - Workout Progress
                  </span>
                  <span className="text-sm font-medium text-indigo-600">
                    {progressSummaries[0].exercisePercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${progressSummaries[0].exercisePercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-gray-700">
                    {progressSummaries[0].workoutPlanName} - Nutrition Progress
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {progressSummaries[0].mealPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${progressSummaries[0].mealPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Show additional plans if there are more than one */}
            {progressSummaries.length > 1 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Other Active Plans</h3>
                <div className="space-y-3">
                  {progressSummaries.slice(1).map((summary) => (
                    <div key={summary.workoutPlanId} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {summary.workoutPlanName}
                        </span>
                        <Link 
                          href={`/dashboard/progress?plan=${summary.workoutPlanId}`}
                          className="text-xs text-indigo-600 hover:underline"
                        >
                          Details
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">Workouts</span>
                            <span className="text-xs text-indigo-600">{summary.exercisePercentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-indigo-600 h-1.5 rounded-full" 
                              style={{ width: `${summary.exercisePercentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">Nutrition</span>
                            <span className="text-xs text-green-600">{summary.mealPercentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-green-600 h-1.5 rounded-full" 
                              style={{ width: `${summary.mealPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-3">Exercise Library</h3>
                <p className="text-gray-600 mb-4">
                  Log your workouts, track your progress, and reach your fitness goals.
                </p>
              </div>
              <span className="bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/exercises" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm inline-block">
                Track Exercises
              </Link>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-3">Nutrition Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Log meals, monitor nutritional intake, and maintain a balanced diet.
                </p>
              </div>
              <span className="bg-green-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/nutrition" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm inline-block">
                Track Nutrition
              </Link>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-3">Workout Programs</h3>
                <p className="text-gray-600 mb-4">
                  Create personalized workout programs with automatic meal plans for each day.
                </p>
                <div className="mb-4 mt-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">Auto-Generated Nutrition</span>
                </div>
              </div>
              <span className="bg-purple-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/workout-plans" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm inline-block">
                Browse Programs
              </Link>
            </div>
          </div>
          
          {/* Add Progress Tracking Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-3">Track Your Progress</h3>
                <p className="text-gray-600 mb-4">
                  View and track your combined workout and meal plan progress in one place.
                </p>
              </div>
              <span className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/progress" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm inline-block">
                View Progress
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats and Tips */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Tips & Reminders</h2>
            <button 
              onClick={refreshTips}
              className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Tips
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedTips.map((tip, index) => (
              <div key={index} className={`${colorMap[tip.color].bg} border ${colorMap[tip.color].border} rounded-lg p-4`}>
                <h3 className={`font-medium ${colorMap[tip.color].text}`}>{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Exercises and Meals */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Recent Exercises */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Workouts</h2>
              <Link 
                href="/dashboard/exercises" 
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Log Exercise
              </Link>
            </div>
            
            {exercisesLoading ? (
              <p className="text-gray-500 text-sm">Loading recent workouts...</p>
            ) : recentExercises.length === 0 ? (
              <p className="text-gray-500 text-sm">No recent workouts found. Start tracking your exercises!</p>
            ) : (
              <div className="space-y-3">
                {recentExercises.map(log => (
                  <div key={log.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="bg-indigo-100 rounded-full p-2">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{log.exercise_name}</span>
                        <span className="text-sm text-gray-500">{formatDate(log.completed_at)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {log.sets && log.reps && `${log.sets} sets × ${log.reps} reps` || `${log.duration} minutes`}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-2">
                  <Link 
                    href="/dashboard/exercises" 
                    className="text-sm text-indigo-600 hover:text-indigo-800 inline-flex items-center"
                  >
                    View all workouts
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Recent Meals */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Nutrition</h2>
              <Link 
                href="/dashboard/nutrition" 
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Log Meal
              </Link>
            </div>
            
            {mealsLoading ? (
              <p className="text-gray-500 text-sm">Loading recent meals...</p>
            ) : recentMeals.length === 0 ? (
              <p className="text-gray-500 text-sm">No recent meals found. Start tracking your nutrition!</p>
            ) : (
              <div className="space-y-3">
                {recentMeals.map(meal => (
                  <div key={meal.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="bg-green-100 rounded-full p-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{meal.meal_name}</span>
                        <span className="text-sm text-gray-500">{formatDate(meal.consumed_at)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {meal.calories} kcal {meal.meal_time && `· ${meal.meal_time}`}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-2">
                  <Link 
                    href="/dashboard/nutrition" 
                    className="text-sm text-indigo-600 hover:text-indigo-800 inline-flex items-center"
                  >
                    View all nutrition
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
} 