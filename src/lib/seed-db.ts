import { query } from './db';

/**
 * Seed the database with initial exercises and meals
 */
export async function seedDatabase() {
  // Sample exercises
  const exercises = [
    { 
      name: 'Push-ups', 
      category: 'Strength', 
      description: 'Classic upper body exercise targeting chest, shoulders, and triceps',
      muscle_groups: ['Chest', 'Shoulders', 'Triceps'],
      equipment: ['Bodyweight'],
      difficulty: 'Beginner'
    },
    { 
      name: 'Squats', 
      category: 'Strength', 
      description: 'Lower body compound exercise for strength and muscle development',
      muscle_groups: ['Quadriceps', 'Hamstrings', 'Glutes'],
      equipment: ['Bodyweight'],
      difficulty: 'Beginner'
    },
    { 
      name: 'Planks', 
      category: 'Core', 
      description: 'Isometric core exercise that builds endurance and stability',
      muscle_groups: ['Abdominals', 'Back'],
      equipment: ['Bodyweight'],
      difficulty: 'Beginner'
    },
    { 
      name: 'Running', 
      category: 'Cardio', 
      description: 'Cardiovascular exercise that improves endurance and burns calories',
      muscle_groups: ['Legs', 'Heart'],
      equipment: ['None'],
      difficulty: 'Moderate'
    },
    { 
      name: 'Bench Press', 
      category: 'Strength', 
      description: 'Upper body strength exercise primarily for chest development',
      muscle_groups: ['Chest', 'Shoulders', 'Triceps'],
      equipment: ['Barbell', 'Bench'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Deadlift', 
      category: 'Strength', 
      description: 'Compound movement that builds overall strength and targets posterior chain',
      muscle_groups: ['Back', 'Hamstrings', 'Glutes'],
      equipment: ['Barbell'],
      difficulty: 'Advanced'
    },
    { 
      name: 'Cycling', 
      category: 'Cardio', 
      description: 'Low-impact cardiovascular exercise',
      muscle_groups: ['Quadriceps', 'Hamstrings', 'Calves'],
      equipment: ['Bicycle'],
      difficulty: 'Moderate'
    },
    { 
      name: 'Pull-ups', 
      category: 'Strength', 
      description: 'Upper body pulling exercise targeting back and biceps',
      muscle_groups: ['Back', 'Biceps'],
      equipment: ['Pull-up Bar'],
      difficulty: 'Intermediate'
    }
  ];
  
  // Sample meals
  const meals = [
    {
      name: 'Chicken Salad',
      category: 'Lunch',
      calories: 350,
      protein: 30,
      carbs: 15,
      fats: 20,
      description: 'Grilled chicken breast with mixed greens, cherry tomatoes, and olive oil dressing'
    },
    {
      name: 'Protein Smoothie',
      category: 'Breakfast',
      calories: 280,
      protein: 25,
      carbs: 30,
      fats: 5,
      description: 'Protein powder, banana, milk, and berries blended together'
    },
    {
      name: 'Grilled Salmon',
      category: 'Dinner',
      calories: 400,
      protein: 35,
      carbs: 8,
      fats: 25,
      description: 'Grilled salmon fillet with steamed vegetables and lemon'
    },
    {
      name: 'Oatmeal',
      category: 'Breakfast',
      calories: 300,
      protein: 10,
      carbs: 50,
      fats: 6,
      description: 'Rolled oats cooked with milk, topped with honey and fruit'
    },
    {
      name: 'Greek Yogurt with Berries',
      category: 'Snack',
      calories: 180,
      protein: 15,
      carbs: 20,
      fats: 4,
      description: 'Greek yogurt with mixed berries and a drizzle of honey'
    },
    {
      name: 'Turkey Sandwich',
      category: 'Lunch',
      calories: 320,
      protein: 22,
      carbs: 40,
      fats: 8,
      description: 'Turkey slices with lettuce, tomato, and mustard on whole grain bread'
    }
  ];
  
  try {
    console.log('Starting database seeding...');
    
    // Check if we already have exercises
    const exerciseCheck = await query('SELECT COUNT(*) FROM exercises');
    if (exerciseCheck.rows[0].count === '0') {
      console.log('Seeding exercises...');
      for (const exercise of exercises) {
        try {
          await query(
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
        } catch (error) {
          console.log(`Skipping duplicate exercise: ${exercise.name}`);
        }
      }
      console.log('Exercises seeded successfully');
    } else {
      console.log('Exercises already exist, skipping seed');
    }
    
    // Check if we already have meals
    const mealCheck = await query('SELECT COUNT(*) FROM meals');
    if (mealCheck.rows[0].count === '0') {
      console.log('Seeding meals...');
      for (const meal of meals) {
        try {
          await query(
            `INSERT INTO meals (name, category, calories, protein, carbs, fats, description)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
              meal.name,
              meal.category,
              meal.calories,
              meal.protein,
              meal.carbs,
              meal.fats,
              meal.description
            ]
          );
        } catch (error) {
          console.log(`Skipping duplicate meal: ${meal.name}`);
        }
      }
      console.log('Meals seeded successfully');
    } else {
      console.log('Meals already exist, skipping seed');
    }
    
    console.log('Database seeding completed');
    return true;
  } catch (error) {
    console.error('Error seeding database:', error);
    return false;
  }
}

// Initialize and seed the database
export async function initAndSeed() {
  try {
    // First make sure tables are created
    await query(`
      CREATE TABLE IF NOT EXISTS exercises (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description TEXT,
        muscle_groups TEXT[],
        equipment TEXT[],
        difficulty VARCHAR(50),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await query(`
      CREATE TABLE IF NOT EXISTS meals (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50),
        calories INTEGER,
        protein DECIMAL(6,2),
        carbs DECIMAL(6,2),
        fats DECIMAL(6,2),
        image_url TEXT,
        description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Then seed the database
    await seedDatabase();
    
    return { success: true };
  } catch (error) {
    console.error('Error initializing and seeding database:', error);
    return { success: false, error };
  }
}

// Call this function on server startup
initAndSeed().catch(console.error); 