const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DATABASE || 'fitness_game',
});

// Function to execute queries
async function executeQuery(text, params = []) {
  try {
    const start = Date.now();
    const result = await client.query(text, params);
    const duration = Date.now() - start;
    console.log(`Executed query in ${duration}ms, rows: ${result.rowCount}`);
    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

/**
 * Generates a meal plan based on user preferences
 * @param {Object} options - Configuration options
 * @param {number} options.dailyCalories - Target daily calories
 * @param {string} options.dietType - Diet type (e.g., 'standard', 'vegetarian', 'keto', 'paleo')
 * @param {number} options.mealsPerDay - Number of meals per day (typically 3-6)
 * @param {number} options.days - Number of days in the meal plan (typically 7)
 * @param {number} options.proteinPercentage - Target percentage of calories from protein
 * @param {number} options.carbPercentage - Target percentage of calories from carbs
 * @param {number} options.fatPercentage - Target percentage of calories from fat
 */
async function generateMealPlan(options) {
  const {
    dailyCalories = 2000, 
    dietType = 'standard',
    mealsPerDay = 3,
    days = 7,
    proteinPercentage = 30,
    carbPercentage = 40,
    fatPercentage = 30
  } = options;

  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to the database');
    
    // Validate macro percentages
    if (proteinPercentage + carbPercentage + fatPercentage !== 100) {
      throw new Error('Protein, carb, and fat percentages must add up to 100%');
    }
    
    console.log(`\nGenerating ${days}-day meal plan with ${mealsPerDay} meals per day`);
    console.log(`Diet type: ${dietType}`);
    console.log(`Daily calories: ${dailyCalories}`);
    console.log(`Macros: ${proteinPercentage}% protein, ${carbPercentage}% carbs, ${fatPercentage}% fat`);
    
    // Convert percentage targets to grams
    // Protein: 4 calories per gram
    // Carbs: 4 calories per gram
    // Fat: 9 calories per gram
    const dailyProteinTarget = (dailyCalories * (proteinPercentage / 100)) / 4;
    const dailyCarbTarget = (dailyCalories * (carbPercentage / 100)) / 4;
    const dailyFatTarget = (dailyCalories * (fatPercentage / 100)) / 9;
    
    console.log(`\nDaily targets:`);
    console.log(`Protein: ${Math.round(dailyProteinTarget)}g`);
    console.log(`Carbs: ${Math.round(dailyCarbTarget)}g`);
    console.log(`Fat: ${Math.round(dailyFatTarget)}g`);
    
    // Step 1: Get all meals that match the diet type
    let dietCondition = '';
    if (dietType === 'vegetarian') {
      dietCondition = "AND lower(description) NOT LIKE '%meat%' AND lower(description) NOT LIKE '%chicken%' AND lower(description) NOT LIKE '%beef%' AND lower(description) NOT LIKE '%fish%'";
    } else if (dietType === 'keto') {
      dietCondition = "AND carbs < 10";
    } else if (dietType === 'paleo') {
      dietCondition = "AND lower(description) NOT LIKE '%grain%' AND lower(description) NOT LIKE '%dairy%' AND lower(description) NOT LIKE '%legume%'";
    }
    
    // Get breakfast options
    const breakfastMeals = await executeQuery(`
      SELECT * FROM meals 
      WHERE category = 'Breakfast' ${dietCondition}
      ORDER BY RANDOM()
    `);
    
    // Get lunch options
    const lunchMeals = await executeQuery(`
      SELECT * FROM meals 
      WHERE category = 'Lunch' ${dietCondition}
      ORDER BY RANDOM()
    `);
    
    // Get dinner options
    const dinnerMeals = await executeQuery(`
      SELECT * FROM meals 
      WHERE category = 'Dinner' ${dietCondition}
      ORDER BY RANDOM()
    `);
    
    // Get snack options
    const snackMeals = await executeQuery(`
      SELECT * FROM meals 
      WHERE category IN ('Snacks', 'Post-Workout') ${dietCondition}
      ORDER BY RANDOM()
    `);
    
    console.log(`\nAvailable meals for ${dietType} diet:`);
    console.log(`Breakfast options: ${breakfastMeals.rows.length}`);
    console.log(`Lunch options: ${lunchMeals.rows.length}`);
    console.log(`Dinner options: ${dinnerMeals.rows.length}`);
    console.log(`Snack options: ${snackMeals.rows.length}`);
    
    // Step 2: Generate a meal plan for each day
    const mealPlan = [];
    
    for (let day = 1; day <= days; day++) {
      const dailyPlan = {
        day,
        meals: [],
        stats: {
          totalCalories: 0,
          totalProtein: 0,
          totalCarbs: 0,
          totalFat: 0
        }
      };
      
      // Step 3: Distribute calories across meals
      const caloriesPerMeal = dailyCalories / mealsPerDay;
      
      // Step 4: Add meals to the plan
      const mealCategories = getMealCategoriesForDay(mealsPerDay);
      
      for (const category of mealCategories) {
        let mealPool;
        switch (category) {
          case 'Breakfast':
            mealPool = breakfastMeals.rows;
            break;
          case 'Lunch':
            mealPool = lunchMeals.rows;
            break;
          case 'Dinner':
            mealPool = dinnerMeals.rows;
            break;
          default:
            mealPool = snackMeals.rows;
            break;
        }
        
        if (mealPool.length === 0) {
          console.warn(`No ${category} options available for the selected diet type`);
          continue;
        }
        
        // Find a meal close to the target calories
        const targetCalories = caloriesPerMeal;
        const meal = findBestMeal(mealPool, {
          targetCalories,
          currentStats: dailyPlan.stats,
          dailyProteinTarget,
          dailyCarbTarget,
          dailyFatTarget
        });
        
        if (meal) {
          dailyPlan.meals.push({
            ...meal,
            mealTime: category
          });
          
          // Update daily totals
          dailyPlan.stats.totalCalories += meal.calories;
          dailyPlan.stats.totalProtein += meal.protein;
          dailyPlan.stats.totalCarbs += meal.carbs;
          dailyPlan.stats.totalFat += meal.fats;
        }
      }
      
      // Add the daily plan to the overall plan
      mealPlan.push(dailyPlan);
    }
    
    // Output the meal plan
    console.log('\n=========================================');
    console.log(`${days}-DAY MEAL PLAN SUMMARY`);
    console.log('=========================================');
    
    mealPlan.forEach(day => {
      console.log(`\nDAY ${day.day}:`);
      console.log(`Total calories: ${Math.round(day.stats.totalCalories)} kcal`);
      console.log(`Total protein: ${Math.round(day.stats.totalProtein)}g (${Math.round((day.stats.totalProtein * 4 / day.stats.totalCalories) * 100)}%)`);
      console.log(`Total carbs: ${Math.round(day.stats.totalCarbs)}g (${Math.round((day.stats.totalCarbs * 4 / day.stats.totalCalories) * 100)}%)`);
      console.log(`Total fat: ${Math.round(day.stats.totalFat)}g (${Math.round((day.stats.totalFat * 9 / day.stats.totalCalories) * 100)}%)`);
      
      day.meals.forEach(meal => {
        console.log(`\n  ${meal.mealTime}: ${meal.name}`);
        console.log(`    Calories: ${meal.calories} kcal | Protein: ${meal.protein}g | Carbs: ${meal.carbs}g | Fat: ${meal.fats}g`);
        console.log(`    Description: ${meal.description}`);
      });
    });
    
    return { success: true, mealPlan };
  } catch (error) {
    console.error('Error generating meal plan:', error);
    return { success: false, error };
  } finally {
    // Close the client connection
    try {
      await client.end();
      console.log('\nDatabase connection closed');
    } catch (e) {
      console.error('Error closing database connection:', e);
    }
  }
}

/**
 * Distributes meal categories based on number of meals per day
 * @param {number} mealsPerDay - Number of meals per day
 * @returns {string[]} - Array of meal categories
 */
function getMealCategoriesForDay(mealsPerDay) {
  switch (mealsPerDay) {
    case 3:
      return ['Breakfast', 'Lunch', 'Dinner'];
    case 4:
      return ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];
    case 5:
      return ['Breakfast', 'Snacks', 'Lunch', 'Snacks', 'Dinner'];
    case 6:
      return ['Breakfast', 'Snacks', 'Lunch', 'Snacks', 'Dinner', 'Post-Workout'];
    default:
      return ['Breakfast', 'Lunch', 'Dinner'];
  }
}

/**
 * Find the best meal based on calorie and macro targets
 * @param {Array} meals - Array of meal options
 * @param {Object} targets - Target values
 * @returns {Object} - Best matching meal
 */
function findBestMeal(meals, targets) {
  const { 
    targetCalories, 
    currentStats, 
    dailyProteinTarget, 
    dailyCarbTarget, 
    dailyFatTarget 
  } = targets;
  
  // Calculate how much of each macro is needed for the rest of the day
  const remainingProtein = Math.max(0, dailyProteinTarget - currentStats.totalProtein);
  const remainingCarbs = Math.max(0, dailyCarbTarget - currentStats.totalCarbs);
  const remainingFat = Math.max(0, dailyFatTarget - currentStats.totalFat);
  
  // Score each meal based on how well it fits the current needs
  const scoredMeals = meals.map(meal => {
    // Calorie score - closer to target is better
    const calorieScore = 1 - Math.min(Math.abs(meal.calories - targetCalories) / targetCalories, 1);
    
    // Macro scores - based on how well they contribute to remaining needs
    let proteinScore = 0;
    let carbScore = 0;
    let fatScore = 0;
    
    if (remainingProtein > 0) {
      proteinScore = Math.min(meal.protein / remainingProtein, 1);
    }
    
    if (remainingCarbs > 0) {
      carbScore = Math.min(meal.carbs / remainingCarbs, 1);
    }
    
    if (remainingFat > 0) {
      fatScore = Math.min(meal.fats / remainingFat, 1);
    }
    
    // Combine the scores with weighting
    const totalScore = (
      calorieScore * 0.4 + 
      proteinScore * 0.25 + 
      carbScore * 0.2 + 
      fatScore * 0.15
    );
    
    return {
      ...meal,
      score: totalScore
    };
  });
  
  // Sort by score and pick the best
  scoredMeals.sort((a, b) => b.score - a.score);
  return scoredMeals[0];
}

// Example usage - adjust these parameters as needed
const mealPlanOptions = {
  dailyCalories: 2200,
  dietType: 'standard', // standard, vegetarian, keto, paleo
  mealsPerDay: 4,
  days: 7,
  proteinPercentage: 30,
  carbPercentage: 45,
  fatPercentage: 25
};

// Run the function
generateMealPlan(mealPlanOptions)
  .then(result => {
    if (result.success) {
      console.log('\nMeal plan generated successfully');
      process.exit(0);
    } else {
      console.error('\nFailed to generate meal plan:', result.error);
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unhandled error:', error);
    process.exit(1);
  }); 