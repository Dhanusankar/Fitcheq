'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define types for exercise data
type Exercise = {
  id: string;
  name: string;
  category: string;
  description: string;
  muscle_groups: string[];
  equipment: string[];
  difficulty: string;
};

type ExerciseLogEntry = {
  id?: string;
  exercise_id?: string;
  exercise_name: string;
  sets?: number | null;
  reps?: number | null;
  weight?: number | null;
  duration?: number | null;
  intensity?: string | null;
  notes?: string;
  completed_at: Date;
};

// Define toast notification type
type Toast = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

export default function ExercisesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  const [logEntries, setLogEntries] = useState<ExerciseLogEntry[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showLogForm, setShowLogForm] = useState<boolean>(false);
  
  // Form state for logging exercise
  const [sets, setSets] = useState<number | undefined>();
  const [reps, setReps] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();
  const [duration, setDuration] = useState<number | undefined>();
  const [intensity, setIntensity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Toast notifications state
  const [toasts, setToasts] = useState<Toast[]>([]);

  // New state for adding exercise to library
  const [showAddExerciseForm, setShowAddExerciseForm] = useState<boolean>(false);
  const [newExerciseName, setNewExerciseName] = useState<string>('');
  const [newExerciseCategory, setNewExerciseCategory] = useState<string>('strength');
  const [newExerciseDescription, setNewExerciseDescription] = useState<string>('');
  const [newExerciseMuscleGroups, setNewExerciseMuscleGroups] = useState<string>('');
  const [newExerciseEquipment, setNewExerciseEquipment] = useState<string>('');
  const [newExerciseDifficulty, setNewExerciseDifficulty] = useState<string>('beginner');

  // Add difficulty filter state
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  // Add a toast notification
  const addToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      // Fetch exercises
      fetchExercises();
      // Fetch user's exercise log
      fetchUserExerciseLog();
    }
  }, [status, router]);

  useEffect(() => {
    if (exercises.length > 0) {
      filterExercises();
    }
  }, [category, searchTerm, exercises, difficultyFilter]);

  const fetchExercises = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/exercises');
      if (!response.ok) {
        throw new Error('Failed to fetch exercises');
      }
      
      const data = await response.json();
      setExercises(data.exercises || []);
      setFilteredExercises(data.exercises || []);
    } catch (error) {
      console.error('Failed to fetch exercises:', error);
      // Fallback to dummy data if API fails
      const dummyExercises: Exercise[] = [
        {
          id: '1',
          name: 'Push-ups',
          category: 'strength',
          description: 'A classic bodyweight exercise that works the chest, shoulders, and triceps.',
          muscle_groups: ['chest', 'shoulders', 'triceps'],
          equipment: [],
          difficulty: 'beginner'
        },
        {
          id: '2',
          name: 'Squats',
          category: 'strength',
          description: 'A lower body exercise that works the quadriceps, hamstrings, and glutes.',
          muscle_groups: ['quadriceps', 'hamstrings', 'glutes'],
          equipment: [],
          difficulty: 'beginner'
        },
        {
          id: '3',
          name: 'Running',
          category: 'cardio',
          description: 'A cardiovascular exercise that improves heart health and burns calories.',
          muscle_groups: ['legs', 'heart'],
          equipment: [],
          difficulty: 'moderate'
        },
        {
          id: '4',
          name: 'Bench Press',
          category: 'strength',
          description: 'A weightlifting exercise that targets the chest, shoulders, and triceps.',
          muscle_groups: ['chest', 'shoulders', 'triceps'],
          equipment: ['barbell', 'bench'],
          difficulty: 'intermediate'
        },
        {
          id: '5',
          name: 'Yoga',
          category: 'flexibility',
          description: 'A mind-body practice that improves flexibility, strength, and mental wellbeing.',
          muscle_groups: ['full body'],
          equipment: ['yoga mat'],
          difficulty: 'variable'
        },
      ];
      
      setExercises(dummyExercises);
      setFilteredExercises(dummyExercises);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserExerciseLog = async () => {
    try {
      const response = await fetch('/api/exercise-logs?limit=10'); // Fetch last 10 logs
      if (!response.ok) {
        throw new Error('Failed to fetch exercise logs');
      }
      
      const data = await response.json();
      // Format the logs with proper date handling and null checks
      const formattedLogs = data.map((log: any) => ({
        id: log.id,
        exercise_id: log.exercise_id,
        exercise_name: log.exercise_name || log.base_exercise_name || 'Unknown Exercise',
        sets: log.sets || null,
        reps: log.reps || null,
        weight: log.weight || null,
        duration: log.duration || null,
        intensity: log.intensity || null,
        notes: log.notes || '',
        completed_at: log.completed_at ? new Date(log.completed_at) : new Date()
      }));
      setLogEntries(formattedLogs);
    } catch (error) {
      console.error('Failed to fetch exercise logs:', error);
      setLogEntries([]);
    }
  };

  // Fetch exercises and logs when component mounts
  useEffect(() => {
    if (session?.user) {
      fetchExercises();
      fetchUserExerciseLog();
    }
  }, [session]);

  const filterExercises = () => {
    let filtered = exercises;
    
    // Category filter
    if (category !== 'all') {
      // Case-insensitive category comparison
      filtered = filtered.filter(ex => 
        ex.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Difficulty filter
    if (difficultyFilter !== 'all') {
      // Case-insensitive difficulty comparison
      filtered = filtered.filter(ex => 
        ex.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
      );
    }
    
    // Search term filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(ex => 
        ex.name.toLowerCase().includes(term) || 
        (ex.description && ex.description.toLowerCase().includes(term)) ||
        ex.muscle_groups.some(muscle => muscle.toLowerCase().includes(term)) ||
        ex.equipment.some(equipment => equipment.toLowerCase().includes(term))
      );
    }
    
    setFilteredExercises(filtered);
  };

  const handleAddExerciseLog = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setShowLogForm(true);
    // Reset form fields
    setSets(undefined);
    setReps(undefined);
    setWeight(undefined);
    setDuration(undefined);
    setIntensity('');
    setNotes('');
  };

  const handleLogFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedExercise) return;
    
    try {
      // Validate required fields based on exercise type
      if (selectedExercise.category.toLowerCase() === 'strength' && (!sets || !reps)) {
        addToast('Please fill in both sets and reps for strength exercises', 'error');
        return;
      }
      
      if (selectedExercise.category.toLowerCase() === 'cardio' && !duration) {
        addToast('Please specify the duration for cardio exercises', 'error');
        return;
      }
      
      // Create new log entry with only the filled fields
      const newLogEntry: Partial<ExerciseLogEntry> = {
        exercise_id: selectedExercise.id,
        exercise_name: selectedExercise.name,
        completed_at: new Date()
      };

      // Only add fields that have values
      if (sets !== undefined) newLogEntry.sets = sets;
      if (reps !== undefined) newLogEntry.reps = reps;
      if (weight !== undefined) newLogEntry.weight = weight;
      if (duration !== undefined) newLogEntry.duration = duration;
      if (intensity) newLogEntry.intensity = intensity;
      if (notes) newLogEntry.notes = notes;
      
      // Send to API
      const response = await fetch('/api/exercise-logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLogEntry),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to log exercise');
      }
      
      const data = await response.json();
      
      // Add the new log entry to the state
      setLogEntries(prevLogs => [{
        ...data,
        completed_at: new Date(data.completed_at)
      }, ...prevLogs]);
      
      // Close the form and reset
      setShowLogForm(false);
      setSelectedExercise(null);
      
      // Reset form fields
      setSets(undefined);
      setReps(undefined);
      setWeight(undefined);
      setDuration(undefined);
      setIntensity('');
      setNotes('');
      
      // Show success message
      addToast('Exercise logged successfully!', 'success');
    } catch (error) {
      console.error('Failed to log exercise:', error);
      addToast('Failed to log exercise. Please try again.', 'error');
    }
  };

  // Add new handleAddExercise function
  const handleAddExercise = () => {
    setShowAddExerciseForm(true);
    // Reset form fields
    setNewExerciseName('');
    setNewExerciseCategory('strength');
    setNewExerciseDescription('');
    setNewExerciseMuscleGroups('');
    setNewExerciseEquipment('');
    setNewExerciseDifficulty('beginner');
  };

  // Add new handleAddExerciseSubmit function
  const handleAddExerciseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form
      if (!newExerciseName || !newExerciseCategory) {
        addToast('Exercise name and category are required', 'error');
        return;
      }
      
      // Prepare the muscle groups and equipment arrays
      const muscleGroups = newExerciseMuscleGroups
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
        
      const equipment = newExerciseEquipment
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
      
      // Create the new exercise object
      const newExercise = {
        name: newExerciseName,
        category: newExerciseCategory,
        description: newExerciseDescription,
        muscle_groups: muscleGroups,
        equipment: equipment,
        difficulty: newExerciseDifficulty
      };
      
      // Send to API
      const response = await fetch('/api/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExercise),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add exercise');
      }
      
      const data = await response.json();
      
      // Add the new exercise to the state
      setExercises([data.exercise, ...exercises]);
      
      // Close the form
      setShowAddExerciseForm(false);
      
      // Show success message
      addToast('Exercise added to library successfully!', 'success');
    } catch (error) {
      console.error('Failed to add exercise:', error);
      addToast('Failed to add exercise. Please try again.', 'error');
    }
  };

  // Render UI
  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Exercise Library</h1>
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
          <h1 className="text-3xl font-bold text-gray-900">Exercise Library</h1>
          <Link 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>
        
        {/* Toast notifications */}
        <div className="fixed top-4 right-4 z-50 space-y-2 w-72">
          {toasts.map((toast) => (
            <div 
              key={toast.id} 
              className={`p-3 rounded-md shadow-md transform transition-all duration-500 ${
                toast.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {toast.message}
            </div>
          ))}
        </div>

        {/* Exercise Library section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">Exercise Library</h2>
              <p className="text-gray-600">Find exercises to add to your workout or log directly</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleAddExercise}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Add New Exercise
              </button>
            </div>
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category-filter"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="all">All Categories</option>
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
                <option value="flexibility">Flexibility</option>
                <option value="balance">Balance</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty
              </label>
              <select
                id="difficulty-filter"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="search-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                id="search-filter"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search exercises..."
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          {/* Exercise grid */}
          {filteredExercises.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No exercises found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExercises.map((exercise) => (
                <div 
                  key={exercise.id} 
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{exercise.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{exercise.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {exercise.muscle_groups.map((group, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {group}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {exercise.equipment.map((item, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleAddExerciseLog(exercise)}
                    className="w-full text-center py-2 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100 transition"
                  >
                    Log Exercise
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Recent Exercise Logs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Recent Exercise Logs</h2>
          
          {logEntries.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              You haven't logged any exercises yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exercise
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {logEntries.map((log, index) => (
                    <tr key={log.id || `log-${index}-${log.exercise_name}-${log.completed_at?.toISOString() || Date.now()}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{log.exercise_name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">
                          {log.sets && log.reps && (
                            <span>{log.sets} sets × {log.reps} reps{' '}</span>
                          )}
                          {log.weight && (
                            <span>at {log.weight} kg{' '}</span>
                          )}
                          {log.duration && (
                            <span>{log.duration} minutes{' '}</span>
                          )}
                          {log.intensity && (
                            <span>({log.intensity} intensity)</span>
                          )}
                          {log.notes && (
                            <div className="mt-1 text-xs text-gray-400">{log.notes}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.completed_at ? new Date(log.completed_at).toLocaleDateString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div> 
      
      {/* Exercise Log Form Modal */}
      {showLogForm && selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Log Exercise: {selectedExercise?.name || 'Unknown Exercise'}</h2>
            
            <form onSubmit={handleLogFormSubmit} className="space-y-4">
              {selectedExercise?.category.toLowerCase() === 'strength' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sets</label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={sets || ''}
                      onChange={(e) => setSets(e.target.value ? parseInt(e.target.value) : undefined)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reps</label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={reps || ''}
                      onChange={(e) => setReps(e.target.value ? parseInt(e.target.value) : undefined)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={weight || ''}
                      onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : undefined)}
                    />
                  </div>
                </>
              )}
              
              {selectedExercise?.category.toLowerCase() === 'cardio' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={duration || ''}
                    onChange={(e) => setDuration(e.target.value ? parseInt(e.target.value) : undefined)}
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Intensity</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value)}
                >
                  <option value="">Select intensity</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional notes about your workout"
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
                  Log Exercise
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Exercise Form Modal */}
      {showAddExerciseForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Add New Exercise</h2>
            
            <form onSubmit={handleAddExerciseSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Exercise Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newExerciseName}
                  onChange={(e) => setNewExerciseName(e.target.value)}
                  placeholder="e.g., Bulgarian Split Squat"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newExerciseCategory}
                  onChange={(e) => setNewExerciseCategory(e.target.value)}
                >
                  <option value="strength">Strength</option>
                  <option value="cardio">Cardio</option>
                  <option value="flexibility">Flexibility</option>
                  <option value="core">Core</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={3}
                  value={newExerciseDescription}
                  onChange={(e) => setNewExerciseDescription(e.target.value)}
                  placeholder="Describe how to perform the exercise"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Muscle Groups</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newExerciseMuscleGroups}
                  onChange={(e) => setNewExerciseMuscleGroups(e.target.value)}
                  placeholder="e.g., Quadriceps, Hamstrings, Glutes (comma separated)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equipment</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newExerciseEquipment}
                  onChange={(e) => setNewExerciseEquipment(e.target.value)}
                  placeholder="e.g., Dumbbells, Bench (comma separated)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newExerciseDifficulty}
                  onChange={(e) => setNewExerciseDifficulty(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddExerciseForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
                >
                  Add Exercise
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 