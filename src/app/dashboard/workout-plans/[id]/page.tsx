'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

type WorkoutPlan = {
  id: string;
  name: string;
  description: string;
  goal: string;
  frequency: number;
  duration_weeks: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  exercises: WorkoutPlanExercise[];
};

type WorkoutPlanExercise = {
  id: string;
  workout_plan_id: string;
  exercise_id?: string;
  exercise_name: string;
  day_of_week: number;
  sets?: number;
  reps?: number;
  weight?: number;
  duration?: number;
};

export default function WorkoutPlanDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const planId = params.id as string;
  
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDay, setSelectedDay] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [showPrintView, setShowPrintView] = useState(false);

  // Fetch workout plan
  useEffect(() => {
    if (status === 'authenticated' && planId) {
      fetchWorkoutPlan();
    } else if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, planId, router]);

  const fetchWorkoutPlan = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/workout-plans/${planId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch workout plan');
      }
      
      const data = await response.json();
      setWorkoutPlan(data.workout_plan);
    } catch (err) {
      setError('Error fetching workout plan');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async () => {
    if (!workoutPlan) return;
    
    try {
      const response = await fetch(`/api/workout-plans/${planId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          active: !workoutPlan.active,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update workout plan');
      }
      
      const data = await response.json();
      setWorkoutPlan(data.workout_plan);
    } catch (err) {
      setError('Error updating workout plan');
      console.error(err);
    }
  };

  const handleDeletePlan = async () => {
    if (!confirm('Are you sure you want to delete this workout plan?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/workout-plans/${planId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete workout plan');
      }
      
      router.push('/dashboard/workout-plans');
    } catch (err) {
      setError('Error deleting workout plan');
      console.error(err);
    }
  };

  // Get exercises for the selected day
  const getExercisesForDay = (day: number) => {
    if (!workoutPlan) return [];
    return workoutPlan.exercises.filter(
      (exercise) => exercise.day_of_week === day
    );
  };

  // Generate days of the week based on frequency
  const generateDays = () => {
    if (!workoutPlan) return [];
    return Array.from({ length: workoutPlan.frequency }, (_, i) => i + 1);
  };

  // Format the day label
  const formatDayLabel = (day: number) => {
    const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // Adjust for 1-indexed days
    return dayLabels[(day - 1) % 7];
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Workout Plan</h1>
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
          <button
            onClick={() => router.push('/dashboard/workout-plans')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Back to Workout Plans
          </button>
        </div>
      </div>
    );
  }

  if (!workoutPlan) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Workout Plan Not Found</h1>
          <button
            onClick={() => router.push('/dashboard/workout-plans')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Back to Workout Plans
          </button>
        </div>
      </div>
    );
  }

  // Print view for the entire workout plan
  if (showPrintView) {
    return (
      <div className="bg-white p-6">
        <div className="print:hidden mb-4 flex justify-between">
          <button
            onClick={() => setShowPrintView(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Back to Plan
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Print
          </button>
        </div>
        
        <div className="print:p-0">
          <h1 className="text-3xl font-bold text-center mb-6">{workoutPlan.name}</h1>
          <div className="mb-4 text-center">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2">
              {workoutPlan.goal}
            </span>
            <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
              {workoutPlan.frequency}x per week for {workoutPlan.duration_weeks} weeks
            </span>
          </div>
          <p className="text-gray-600 text-center mb-8">{workoutPlan.description}</p>
          
          {generateDays().map((day) => (
            <div key={day} className="mb-8">
              <h2 className="text-xl font-bold mb-3 pb-2 border-b-2 border-gray-200">
                Day {day}: {formatDayLabel(day)}
              </h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border">Exercise</th>
                    <th className="px-4 py-2 text-center border w-20">Sets</th>
                    <th className="px-4 py-2 text-center border w-20">Reps</th>
                    <th className="px-4 py-2 text-center border w-20">Weight</th>
                    <th className="px-4 py-2 text-center border w-24">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {getExercisesForDay(day).map((exercise) => (
                    <tr key={exercise.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 border font-medium">{exercise.exercise_name}</td>
                      <td className="px-4 py-3 text-center border">{exercise.sets || '-'}</td>
                      <td className="px-4 py-3 text-center border">{exercise.reps || '-'}</td>
                      <td className="px-4 py-3 text-center border">{exercise.weight || '-'}</td>
                      <td className="px-4 py-3 text-center border">
                        {exercise.duration ? `${exercise.duration} min` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {getExercisesForDay(day).length === 0 && (
                <div className="text-gray-500 text-center py-4">
                  No exercises for this day
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div>
            <Link href="/dashboard/workout-plans">
              <div className="text-indigo-600 hover:text-indigo-800 mb-2">
                ← Back to Workout Plans
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{workoutPlan.name}</h1>
          </div>
          <div className="flex mt-3 md:mt-0">
            <button
              onClick={() => setShowPrintView(true)}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition mr-2"
            >
              Print View
            </button>
            <button
              onClick={handleToggleActive}
              className={`px-3 py-1.5 rounded-md hover:opacity-80 transition mr-2 ${
                workoutPlan.active
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {workoutPlan.active ? 'Active' : 'Inactive'}
            </button>
            <button
              onClick={handleDeletePlan}
              className="px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition"
            >
              Delete
            </button>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-6">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {workoutPlan.goal}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  {workoutPlan.frequency}x per week
                </span>
                <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                  {workoutPlan.duration_weeks} week program
                </span>
              </div>
              <p className="text-gray-600">{workoutPlan.description}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-xl font-semibold mb-4">Workout Schedule</h2>
              
              {/* Day selector */}
              <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
                {generateDays().map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-md flex-shrink-0 ${
                      selectedDay === day
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {/* Day {day}: {formatDayLabel(day)} */}
                    Day {day}
                  </button>
                ))}
              </div>
              
              {/* Exercises for selected day */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3">
                  Day {selectedDay}: {formatDayLabel(selectedDay)}
                </h3>
                
                {getExercisesForDay(selectedDay).length === 0 ? (
                  <div className="text-gray-500 text-center py-8">
                    No exercises for this day
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left border">Exercise</th>
                          <th className="px-4 py-2 text-center border w-20">Sets</th>
                          <th className="px-4 py-2 text-center border w-20">Reps</th>
                          {/* <th className="px-4 py-2 text-center border w-20">Weight</th>
                          <th className="px-4 py-2 text-center border w-24">Duration</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {getExercisesForDay(selectedDay).map((exercise) => (
                          <tr key={exercise.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 border">
                              <div className="font-medium">{exercise.exercise_name}</div>
                              {exercise.exercise_id && (
                                <Link href={`/dashboard/exercises?id=${exercise.exercise_id}`}>
                                  <div className="text-xs text-indigo-600 mt-1">View Details</div>
                                </Link>
                              )}
                            </td>
                            <td className="px-4 py-3 text-center border">{exercise.sets || '-'}</td>
                            <td className="px-4 py-3 text-center border">{exercise.reps || '-'}</td>
                            {/* <td className="px-4 py-3 text-center border">{exercise.weight || '-'}</td>
                            <td className="px-4 py-3 text-center border">
                              {exercise.duration ? `${exercise.duration} min` : '-'}
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 