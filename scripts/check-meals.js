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
 * Check meals in the database
 */
async function checkMeals() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to the database');
    
    // Count total meals
    const totalResult = await executeQuery('SELECT COUNT(*) FROM meals');
    console.log(`Total meals in database: ${totalResult.rows[0].count}`);
    
    // Count by category
    const categoryResult = await executeQuery('SELECT category, COUNT(*) FROM meals GROUP BY category ORDER BY COUNT(*) DESC');
    console.log('\nMeals by category:');
    categoryResult.rows.forEach(row => {
      console.log(`${row.category}: ${row.count}`);
    });
    
    // Get average nutritional values
    const nutritionResult = await executeQuery(`
      SELECT 
        ROUND(AVG(calories)::numeric, 2) as avg_calories,
        ROUND(AVG(protein)::numeric, 2) as avg_protein,
        ROUND(AVG(carbs)::numeric, 2) as avg_carbs,
        ROUND(AVG(fats)::numeric, 2) as avg_fats
      FROM meals
    `);
    
    console.log('\nAverage nutritional values across all meals:');
    console.log(`Calories: ${nutritionResult.rows[0].avg_calories}`);
    console.log(`Protein: ${nutritionResult.rows[0].avg_protein}g`);
    console.log(`Carbs: ${nutritionResult.rows[0].avg_carbs}g`);
    console.log(`Fats: ${nutritionResult.rows[0].avg_fats}g`);
    
    // Get average nutritional values by category
    const nutritionByCategoryResult = await executeQuery(`
      SELECT 
        category,
        ROUND(AVG(calories)::numeric, 2) as avg_calories,
        ROUND(AVG(protein)::numeric, 2) as avg_protein,
        ROUND(AVG(carbs)::numeric, 2) as avg_carbs,
        ROUND(AVG(fats)::numeric, 2) as avg_fats
      FROM meals
      GROUP BY category
      ORDER BY category
    `);
    
    console.log('\nAverage nutritional values by category:');
    nutritionByCategoryResult.rows.forEach(row => {
      console.log(`\n${row.category}:`);
      console.log(`  Calories: ${row.avg_calories}`);
      console.log(`  Protein: ${row.avg_protein}g`);
      console.log(`  Carbs: ${row.avg_carbs}g`);
      console.log(`  Fats: ${row.avg_fats}g`);
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error checking meals:', error);
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

// Run the function
checkMeals()
  .then(result => {
    if (result.success) {
      console.log('Script completed successfully');
      process.exit(0);
    } else {
      console.error('Script failed:', result.error);
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unhandled error:', error);
    process.exit(1);
  }); 