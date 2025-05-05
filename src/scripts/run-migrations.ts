import { runMealPlanIntegrationMigrations, updateMealPlansAPI, updateWorkoutPlanExerciseTable } from '../lib/db-migrations';

async function runMigrations() {
  try {
    console.log('Running database migrations...');
    
    // Run the meal plan integration migrations
    const mealPlanResult = await runMealPlanIntegrationMigrations();
    if (mealPlanResult.success) {
      console.log('✅ Meal plan integration migrations completed successfully');
    } else {
      console.error('❌ Meal plan integration migrations failed:', mealPlanResult.error);
    }
    
    // Update API-related improvements
    const apiResult = await updateMealPlansAPI();
    if (apiResult.success) {
      console.log('✅ API updates completed successfully');
    } else {
      console.error('❌ API updates failed:', apiResult.error);
    }
    
    // Update workout plan exercises table for progress tracking
    const workoutPlanExerciseResult = await updateWorkoutPlanExerciseTable();
    if (workoutPlanExerciseResult.success) {
      console.log('✅ Workout plan exercises table updates completed successfully');
    } else {
      console.error('❌ Workout plan exercises table updates failed:', workoutPlanExerciseResult.error);
    }
    
    console.log('All migrations completed!');
  } catch (error) {
    console.error('Migration process failed with error:', error);
  }
}

// Run the migrations
runMigrations(); 