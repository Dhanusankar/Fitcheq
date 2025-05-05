'use client';

type PlanProgressSummaryProps = {
  workoutPlanName: string;
  workoutGoal: string;
  totalDays: number;
  completedDays: number;
  startDate: string;
  endDate: string;
  exerciseCompletionPercentage: number;
  nutritionCompletionPercentage: number;
};

export default function PlanProgressSummary({
  workoutPlanName,
  workoutGoal,
  totalDays,
  completedDays,
  startDate,
  endDate,
  exerciseCompletionPercentage,
  nutritionCompletionPercentage
}: PlanProgressSummaryProps) {

  // Calculate overall completion percentage
  const overallCompletionPercentage = Math.round(
    (exerciseCompletionPercentage + nutritionCompletionPercentage) / 2
  );
  
  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  // Determine status indicator color
  const getStatusColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-indigo-700">{workoutPlanName}</h2>
          <p className="text-gray-600">
            Goal: <span className="font-medium">{workoutGoal}</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-indigo-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Days Completed</p>
            <p className="font-bold text-indigo-700">{completedDays} / {totalDays}</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Period</p>
            <p className="font-bold text-indigo-700">
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Overall progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-700">Overall Progress</h3>
          <span className={`text-sm font-medium ${getStatusColor(overallCompletionPercentage)}`}>
            {overallCompletionPercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${overallCompletionPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Progress breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-700">Workout Completion</h3>
            <span className={`text-sm font-medium ${getStatusColor(exerciseCompletionPercentage)}`}>
              {exerciseCompletionPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{ width: `${exerciseCompletionPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-700">Nutrition Completion</h3>
            <span className={`text-sm font-medium ${getStatusColor(nutritionCompletionPercentage)}`}>
              {nutritionCompletionPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${nutritionCompletionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(overallCompletionPercentage)}`}></div>
          <h3 className="font-medium text-gray-700">Plan Status</h3>
        </div>
        <p className="mt-2 text-gray-600">
          {overallCompletionPercentage >= 80 ? (
            "Great progress! Your grind is inspiring. Stay Strong, stay unstoppable"
          ) : overallCompletionPercentage >= 50 ? (
            "Good effort so far. Halfway warriors become full time champions.Keep going!!"
          ) : (
            "You're just getting started. Consistency is key to seeing results!"
          )}
        </p>
        {/* <p className="mt-3 text-xs text-indigo-600 italic">
          You'll receive motivational emails when you reach 40%, 80%, and 100% of your plan completion.
        </p> */}
      </div>
    </div>
  );
} 