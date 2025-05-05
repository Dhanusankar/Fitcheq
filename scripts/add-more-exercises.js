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
 * Add additional exercises to the database
 */
async function addMoreExercises() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to the database');
    
    console.log('Adding more exercises to the database...');

    // Define more exercises for specific equipment and categories
    const exercises = [
      // More Barbell exercises
      { 
        name: 'Barbell Hip Thrust', 
        category: 'Strength', 
        description: 'Sit with upper back against bench, place barbell across hips, and thrust hips upward.',
        muscle_groups: ['Glutes', 'Hamstrings', 'Lower Back'],
        equipment: ['Barbell', 'Bench'],
        difficulty: 'Intermediate'
      },
      { 
        name: 'Barbell Overhead Press', 
        category: 'Strength', 
        description: 'Standing with feet shoulder-width apart, press barbell from shoulders to overhead.',
        muscle_groups: ['Shoulders', 'Triceps', 'Upper Back'],
        equipment: ['Barbell'],
        difficulty: 'Intermediate'
      },
      
      // More Dumbbell exercises
      { 
        name: 'Dumbbell Lateral Raises', 
        category: 'Strength', 
        description: 'Standing with dumbbells at sides, raise arms laterally until parallel with floor.',
        muscle_groups: ['Shoulders', 'Upper Back'],
        equipment: ['Dumbbells'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Dumbbell Fly', 
        category: 'Strength', 
        description: 'Lie on bench with dumbbells extended above chest, lower arms out to sides in arc.',
        muscle_groups: ['Chest', 'Shoulders'],
        equipment: ['Dumbbells', 'Bench'],
        difficulty: 'Intermediate'
      },
      
      // More Kettlebell exercises
      { 
        name: 'Kettlebell Turkish Get-Up', 
        category: 'Strength', 
        description: 'Lie on back, hold kettlebell overhead, and stand up while keeping arm extended.',
        muscle_groups: ['Full Body', 'Core', 'Shoulders'],
        equipment: ['Kettlebell'],
        difficulty: 'Advanced'
      },
      { 
        name: 'Kettlebell Goblet Squat', 
        category: 'Strength', 
        description: 'Hold kettlebell at chest level, squat down keeping spine neutral.',
        muscle_groups: ['Quadriceps', 'Glutes', 'Core'],
        equipment: ['Kettlebell'],
        difficulty: 'Beginner'
      },
      
      // Additional Resistance Band exercises
      { 
        name: 'Resistance Band Chest Press', 
        category: 'Strength', 
        description: 'Anchor band behind, hold handles at chest, push forward extending arms.',
        muscle_groups: ['Chest', 'Triceps', 'Shoulders'],
        equipment: ['Resistance Bands'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Resistance Band Squats', 
        category: 'Strength', 
        description: 'Stand on band with feet shoulder-width apart, hold handles at shoulders, perform squat.',
        muscle_groups: ['Quadriceps', 'Glutes', 'Hamstrings'],
        equipment: ['Resistance Bands'],
        difficulty: 'Intermediate'
      },
      
      // Additional Pull-up Bar exercises
      { 
        name: 'Pull-ups', 
        category: 'Strength', 
        description: 'Hang from bar with palms facing away, pull body up until chin clears bar.',
        muscle_groups: ['Back', 'Biceps', 'Shoulders'],
        equipment: ['Pull-up Bar'],
        difficulty: 'Intermediate'
      },
      { 
        name: 'Chin-ups', 
        category: 'Strength', 
        description: 'Hang from bar with palms facing toward you, pull body up until chin clears bar.',
        muscle_groups: ['Biceps', 'Back', 'Shoulders'],
        equipment: ['Pull-up Bar'],
        difficulty: 'Intermediate'
      }
    ];

    // Insert each exercise
    for (const exercise of exercises) {
      try {
        // Check if the exercise already exists
        const existingCheck = await executeQuery(
          'SELECT id FROM exercises WHERE name = $1',
          [exercise.name]
        );
        
        if (existingCheck.rowCount === 0) {
          // Insert the exercise
          await executeQuery(
            `INSERT INTO exercises (name, category, description, muscle_groups, equipment, difficulty)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [
              exercise.name,
              exercise.category,
              exercise.description,
              exercise.muscle_groups,
              exercise.equipment,
              exercise.difficulty
            ]
          );
          console.log(`Added exercise: ${exercise.name}`);
        } else {
          console.log(`Exercise already exists: ${exercise.name}`);
        }
      } catch (error) {
        console.error(`Error adding exercise: ${exercise.name}`, error);
      }
    }

    console.log('Additional exercises added successfully!');
    
    return { success: true };
  } catch (error) {
    console.error('Error running script:', error);
    return { success: false, error };
  } finally {
    // Close the client connection
    try {
      await client.end();
      console.log('Database connection closed');
    } catch (e) {
      console.error('Error closing database connection:', e);
    }
  }
}

// Run the function
addMoreExercises()
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