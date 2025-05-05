'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
  exercises?: WorkoutPlanExercise[];
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

export default function WorkoutPlansPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generatingPlan, setGeneratingPlan] = useState(false);

  // Form state for generating workout plan
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState(3);
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [fitnessLevel, setFitnessLevel] = useState('beginner');
  const [preferredEquipment, setPreferredEquipment] = useState<string[]>([]);

  // Equipment options
  const equipmentOptions = [
    'Bodyweight',
    'Dumbbells',
    'Barbell',
    'Kettlebell',
    'Resistance Bands',
    'Pull-up Bar',
    'Bench',
    'Treadmill',
    'Bicycle',
    'None'
  ];

  // Fetch workout plans
  useEffect(() => {
    if (status === 'authenticated') {
      fetchWorkoutPlans();
    } else if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const fetchWorkoutPlans = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/workout-plans');
      
      if (!response.ok) {
        throw new Error('Failed to fetch workout plans');
      }
      
      const data = await response.json();
      setWorkoutPlans(data.workout_plans || []);
    } catch (err) {
      setError('Error fetching workout plans');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEquipmentChange = (equipment: string) => {
    setPreferredEquipment(prev => 
      prev.includes(equipment)
        ? prev.filter(item => item !== equipment)
        : [...prev, equipment]
    );
  };

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!goal) {
      setError('Please select a fitness goal');
      return;
    }
    
    try {
      setGeneratingPlan(true);
      setError('');
      
      const response = await fetch('/api/workout-plans/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          goal,
          frequency,
          duration_weeks: durationWeeks,
          fitness_level: fitnessLevel,
          preferred_equipment: preferredEquipment,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate workout plan');
      }
      
      await response.json(); // Make sure we can parse the response
      
      // Close modal and refresh workout plans
      setShowGenerateModal(false);
      fetchWorkoutPlans();
      
      // Reset form
      setGoal('');
      setFrequency(3);
      setDurationWeeks(4);
      setFitnessLevel('beginner');
      setPreferredEquipment([]);
    } catch (err: any) {
      console.error('Error generating plan:', err);
      setError(err.message || 'Error generating workout plan');
    } finally {
      setGeneratingPlan(false);
    }
  };

  const handleDeletePlan = async (planId: string) => {
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
      
      // Refresh the list
      fetchWorkoutPlans();
    } catch (err) {
      setError('Error deleting workout plan');
      console.error(err);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Workout Plans</h1>
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
          <h1 className="text-3xl font-bold text-gray-900">Workout Plans</h1>
          <Link 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Workout Plans</h2>
            <button
              onClick={() => setShowGenerateModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Generate Workout Plan
            </button>
          </div>
          
          {workoutPlans.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                You don&apos;t have any workout plans yet. Create one to get started!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workoutPlans.map((plan) => (
                <div key={plan.id} className="bg-white border border-gray-200 p-6 rounded-lg hover:border-indigo-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                    <div className="flex space-x-2">
                      <Link href={`/dashboard/workout-plans/${plan.id}`}>
                        <button className="text-blue-600 hover:text-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeletePlan(plan.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      {plan.goal}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {plan.frequency}x per week
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {plan.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>
                      {plan.active ? (
                        <span className="text-green-600">Active</span>
                      ) : (
                        <span className="text-gray-400">Inactive</span>
                      )}
                    </div>
                    <div>
                      {new Date(plan.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <Link href={`/dashboard/workout-plans/${plan.id}`}>
                    <div className="mt-4 text-center py-2 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100 transition cursor-pointer">
                      View Details
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Generate Plan Modal */}
      {showGenerateModal && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-start justify-center z-50 overflow-y-auto p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGenerateModal(false);
            }
          }}
        >
          <div className="relative bg-white rounded-lg w-full max-w-lg my-8">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Generate Workout Plan</h2>
                <button
                  onClick={() => setShowGenerateModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="px-6 pt-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleGeneratePlan} id="generate-plan-form">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Fitness Goal *
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    >
                      <option value="">Select a goal</option>
                      <option value="muscle_gain">Muscle Gain</option>
                      <option value="fat_loss">Fat Loss</option>
                      <option value="cardiovascular_health">Cardiovascular Health</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Workout Days (per week)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="7"
                        value={frequency}
                        onChange={(e) => setFrequency(parseInt(e.target.value))}
                        className="w-full mr-4"
                      />
                      <span className="text-gray-700 font-bold">{frequency}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Program Duration (weeks)
                    </label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={durationWeeks}
                        onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
                        className="w-full mr-4"
                      />
                      <span className="text-gray-700 font-bold">{durationWeeks}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Fitness Level
                    </label>
                    <select
                      value={fitnessLevel}
                      onChange={(e) => setFitnessLevel(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred Equipment (optional)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {equipmentOptions.map((equipment) => (
                        <div key={equipment} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                          <input
                            type="checkbox"
                            id={`equipment-${equipment}`}
                            checked={preferredEquipment.includes(equipment)}
                            onChange={() => handleEquipmentChange(equipment)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label 
                            htmlFor={`equipment-${equipment}`}
                            className="text-gray-700 select-none cursor-pointer"
                          >
                            {equipment}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-blue-800 font-medium text-sm">Complete Nutrition Plan</p>
                        <p className="text-blue-600 text-sm">
                          Personalized meal plans will be automatically generated for each day of your workout plan, matching your fitness goals and workout frequency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-200 rounded-b-lg">
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowGenerateModal(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                      disabled={generatingPlan}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
                      disabled={generatingPlan}
                    >
                      {generatingPlan ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </div>
                      ) : (
                        'Generate Plan'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 