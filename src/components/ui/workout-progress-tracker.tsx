'use client';

import { useState } from 'react';

type WorkoutExercise = {
  id: string;
  exercise_name: string;
  day_of_week: number;
  sets?: number;
  reps?: number;
  weight?: number;
  duration?: number;
  completed: boolean;
};

type WorkoutProgressTrackerProps = {
  exercises: WorkoutExercise[];
  selectedDay: number;
  onExerciseStatusChange: (exerciseId: string, completed: boolean, logged: boolean) => void;
  onExerciseLogUpdate: (exerciseId: string, logData: {
    actual_sets?: number;
    actual_reps?: number;
    actual_weight?: number;
    actual_duration?: number;
    notes?: string;
  }) => void;
};

export default function WorkoutProgressTracker({
  exercises,
  selectedDay,
  onExerciseStatusChange,
  onExerciseLogUpdate
}: WorkoutProgressTrackerProps) {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [logData, setLogData] = useState<Record<string, {
    actual_sets?: number;
    actual_reps?: number;
    actual_weight?: number;
    actual_duration?: number;
    notes: string;
  }>>({});
  
  // Filter exercises for the selected day
  const exercisesForDay = exercises.filter(ex => ex.day_of_week === selectedDay);
  
  // Calculate completion percentage
  const calculateCompletion = () => {
    if (exercisesForDay.length === 0) return 0;
    const completedCount = exercisesForDay.filter(ex => ex.completed).length;
    return Math.round((completedCount / exercisesForDay.length) * 100);
  };
  
  // Handle exercise completion toggle
  const handleExerciseToggle = (exerciseId: string, currentStatus: boolean) => {
    onExerciseStatusChange(exerciseId, !currentStatus, false);
  };
  
  // Handle exercise log expand/collapse
  const handleExpandToggle = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId);
    
    // Initialize log data for this exercise if not already present
    if (!logData[exerciseId]) {
      const exercise = exercises.find(ex => ex.id === exerciseId);
      setLogData({
        ...logData,
        [exerciseId]: {
          actual_sets: exercise?.sets,
          actual_reps: exercise?.reps,
          actual_weight: exercise?.weight,
          actual_duration: exercise?.duration,
          notes: ''
        }
      });
    }
  };
  
  // Handle log data changes
  const handleLogDataChange = (
    exerciseId: string,
    field: 'actual_sets' | 'actual_reps' | 'actual_weight' | 'actual_duration' | 'notes',
    value: any
  ) => {
    const updatedLogData = {
      ...logData,
      [exerciseId]: {
        ...logData[exerciseId],
        [field]: value
      }
    };
    
    setLogData(updatedLogData);
  };
  
  // Handle log data submission
  const handleLogSubmit = (exerciseId: string) => {
    if (logData[exerciseId]) {
      onExerciseLogUpdate(exerciseId, logData[exerciseId]);
      // Toggle completion state if not already completed
      const exercise = exercises.find(ex => ex.id === exerciseId);
      if (exercise && !exercise.completed) {
        onExerciseStatusChange(exerciseId, true, true);
      }
      // Collapse the form
      setExpandedExercise(null);
    }
  };
  
  const completionPercentage = calculateCompletion();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Workout Progress</h2>
      
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-700">Day {selectedDay} Progress</h3>
          <span className="text-sm font-medium text-indigo-600">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Exercise list */}
      {exercisesForDay.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No exercises planned for this day.</p>
      ) : (
        <div className="space-y-4">
          {exercisesForDay.map((exercise) => (
            <div key={exercise.id} className="border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-indigo-600">{exercise.exercise_name}</h4>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      {exercise.sets && (
                        <div><span className="font-medium">Sets:</span> {exercise.sets}</div>
                      )}
                      {exercise.reps && (
                        <div><span className="font-medium">Reps:</span> {exercise.reps}</div>
                      )}
                      {exercise.weight && (
                        <div><span className="font-medium">Weight:</span> {exercise.weight} kg</div>
                      )}
                      {exercise.duration && (
                        <div><span className="font-medium">Duration:</span> {exercise.duration} min</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleExpandToggle(exercise.id)}
                      className="p-2 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200"
                    >
                      {expandedExercise === exercise.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={() => handleExerciseToggle(exercise.id, exercise.completed)}
                      className={`p-2 rounded-md ${
                        exercise.completed 
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
              
              {/* Expanded log form */}
              {expandedExercise === exercise.id && logData[exercise.id] && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <h5 className="font-medium text-gray-700 mb-3">Log your progress</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {exercise.sets !== undefined && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Actual Sets</label>
                        <input
                          type="number"
                          min="0"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={logData[exercise.id].actual_sets || ''}
                          onChange={(e) => handleLogDataChange(
                            exercise.id, 
                            'actual_sets', 
                            e.target.value ? parseInt(e.target.value) : undefined
                          )}
                        />
                      </div>
                    )}
                    
                    {exercise.reps !== undefined && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Actual Reps</label>
                        <input
                          type="number"
                          min="0"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={logData[exercise.id].actual_reps || ''}
                          onChange={(e) => handleLogDataChange(
                            exercise.id, 
                            'actual_reps', 
                            e.target.value ? parseInt(e.target.value) : undefined
                          )}
                        />
                      </div>
                    )}
                    
                    {exercise.weight !== undefined && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Actual Weight (kg)</label>
                        <input
                          type="number"
                          min="0"
                          step="0.5"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={logData[exercise.id].actual_weight || ''}
                          onChange={(e) => handleLogDataChange(
                            exercise.id, 
                            'actual_weight', 
                            e.target.value ? parseFloat(e.target.value) : undefined
                          )}
                        />
                      </div>
                    )}
                    
                    {exercise.duration !== undefined && (
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Actual Duration (min)</label>
                        <input
                          type="number"
                          min="0"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={logData[exercise.id].actual_duration || ''}
                          onChange={(e) => handleLogDataChange(
                            exercise.id, 
                            'actual_duration', 
                            e.target.value ? parseInt(e.target.value) : undefined
                          )}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Notes</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={2}
                      value={logData[exercise.id].notes || ''}
                      onChange={(e) => handleLogDataChange(exercise.id, 'notes', e.target.value)}
                      placeholder="How did it feel? Any difficulties?"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleLogSubmit(exercise.id)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Save Progress
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 