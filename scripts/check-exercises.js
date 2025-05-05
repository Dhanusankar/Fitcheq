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
 * Check exercises in the database
 */
async function checkExercises() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to the database');
    
    // Count total exercises
    const totalResult = await executeQuery('SELECT COUNT(*) FROM exercises');
    console.log(`Total exercises in database: ${totalResult.rows[0].count}`);
    
    // Count by category
    const categoryResult = await executeQuery('SELECT category, COUNT(*) FROM exercises GROUP BY category ORDER BY COUNT(*) DESC');
    console.log('\nExercises by category:');
    categoryResult.rows.forEach(row => {
      console.log(`${row.category}: ${row.count}`);
    });
    
    // Count by difficulty
    const difficultyResult = await executeQuery('SELECT difficulty, COUNT(*) FROM exercises GROUP BY difficulty ORDER BY COUNT(*) DESC');
    console.log('\nExercises by difficulty:');
    difficultyResult.rows.forEach(row => {
      console.log(`${row.difficulty}: ${row.count}`);
    });
    
    // Count by equipment (this is more complex since equipment is an array)
    const equipmentResult = await executeQuery(`
      SELECT DISTINCT e.value AS equipment, COUNT(*) 
      FROM exercises, unnest(equipment) AS e(value) 
      GROUP BY e.value 
      ORDER BY COUNT(*) DESC
    `);
    console.log('\nExercises by equipment:');
    equipmentResult.rows.forEach(row => {
      console.log(`${row.equipment}: ${row.count}`);
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error checking exercises:', error);
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
checkExercises()
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