import { query } from './db';

/**
 * Add additional exercises to the database
 */
export async function addExercises() {
  // Define our intermediate level exercises for all equipment types
  const exercises = [
    // Strength exercises - Intermediate level
    { 
      name: 'Barbell Bench Press', 
      category: 'Strength', 
      description: 'Lie on a bench, grip the barbell with hands slightly wider than shoulder-width, lower the bar to your chest, and press back up.',
      muscle_groups: ['Chest', 'Triceps', 'Shoulders'],
      equipment: ['Barbell', 'Bench'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Barbell Squat', 
      category: 'Strength', 
      description: 'Place a barbell on your upper back, feet shoulder-width apart, bend knees and hips to lower your body, then stand back up.',
      muscle_groups: ['Quadriceps', 'Hamstrings', 'Glutes', 'Lower Back'],
      equipment: ['Barbell'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Dumbbell Row', 
      category: 'Strength', 
      description: 'Place one knee and hand on a bench, hold a dumbbell in the other hand, and pull it up to your ribcage.',
      muscle_groups: ['Back', 'Biceps', 'Shoulders'],
      equipment: ['Dumbbells', 'Bench'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Barbell Deadlift', 
      category: 'Strength', 
      description: 'Stand with feet hip-width apart, bend at the hips and knees to grip the barbell, then stand up by driving through the heels.',
      muscle_groups: ['Lower Back', 'Hamstrings', 'Glutes', 'Traps'],
      equipment: ['Barbell'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Dumbbell Shoulder Press', 
      category: 'Strength', 
      description: 'Sit on a bench with back support, hold dumbbells at shoulder height, and press them overhead.',
      muscle_groups: ['Shoulders', 'Triceps'],
      equipment: ['Dumbbells', 'Bench'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Bench Dips', 
      category: 'Strength', 
      description: 'Sit on edge of bench, place hands beside hips, slide hips forward off bench, and bend elbows to lower body.',
      muscle_groups: ['Triceps', 'Chest', 'Shoulders'],
      equipment: ['Bench'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Resistance Band Pull-Aparts', 
      category: 'Strength', 
      description: 'Hold a resistance band with arms extended, then pull the band apart by moving your arms outward.',
      muscle_groups: ['Upper Back', 'Shoulders', 'Rear Deltoids'],
      equipment: ['Resistance Bands'],
      difficulty: 'Intermediate'
    },
    
    // Cardio exercises - Intermediate level
    { 
      name: 'Treadmill Running', 
      category: 'Cardio', 
      description: 'Run on treadmill at moderate to high intensity, adjusting incline and speed as needed.',
      muscle_groups: ['Quadriceps', 'Hamstrings', 'Calves', 'Core'],
      equipment: ['Treadmill'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Stationary Bike Intervals', 
      category: 'Cardio', 
      description: 'Alternate between periods of high intensity and recovery on a stationary bike.',
      muscle_groups: ['Quadriceps', 'Hamstrings', 'Calves'],
      equipment: ['Bicycle'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Jump Rope', 
      category: 'Cardio', 
      description: 'Jump rope continuously, varying speed and style for increased challenge.',
      muscle_groups: ['Calves', 'Shoulders', 'Core'],
      equipment: ['Bodyweight'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Burpees', 
      category: 'Cardio', 
      description: 'Start standing, drop to a squat, kick feet back to plank, return to squat, and jump up.',
      muscle_groups: ['Full Body'],
      equipment: ['Bodyweight'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Barbell Complex', 
      category: 'Cardio', 
      description: 'Perform a series of barbell exercises back-to-back without rest.',
      muscle_groups: ['Full Body'],
      equipment: ['Barbell'],
      difficulty: 'Intermediate'
    },
    
    // Core exercises - Intermediate level
    { 
      name: 'Bodyweight Plank', 
      category: 'Core', 
      description: 'Hold a push-up position with weight on forearms, keeping body straight.',
      muscle_groups: ['Abdominals', 'Lower Back'],
      equipment: ['Bodyweight'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Russian Twists', 
      category: 'Core', 
      description: 'Sit on floor with knees bent, lean back slightly, twist torso side to side.',
      muscle_groups: ['Obliques', 'Abdominals'],
      equipment: ['Bodyweight'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Hanging Leg Raises', 
      category: 'Core', 
      description: 'Hang from a pull-up bar and raise legs until parallel to ground.',
      muscle_groups: ['Lower Abdominals', 'Hip Flexors'],
      equipment: ['Pull-up Bar'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Ab Rollout', 
      category: 'Core', 
      description: 'Kneel on floor holding ab wheel, roll forward as far as possible, then pull back.',
      muscle_groups: ['Abdominals', 'Lower Back', 'Shoulders'],
      equipment: ['Bodyweight'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Side Plank', 
      category: 'Core', 
      description: 'Lie on side with forearm on ground, lift hips to create straight line from head to feet.',
      muscle_groups: ['Obliques', 'Hip Abductors'],
      equipment: ['Bodyweight'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Medicine Ball Slams', 
      category: 'Core', 
      description: 'Lift medicine ball overhead, then slam it down to the ground with force.',
      muscle_groups: ['Abdominals', 'Shoulders', 'Back'],
      equipment: ['Dumbbells'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Swiss Ball Crunch', 
      category: 'Core', 
      description: 'Lie back on a Swiss ball with feet on floor, hands behind head, and crunch upward.',
      muscle_groups: ['Abdominals'],
      equipment: ['Bench'],
      difficulty: 'Intermediate'
    },
    { 
      name: 'Resistance Band Woodchoppers', 
      category: 'Core', 
      description: 'Attach band to high point, stand sideways, pull handle down across body in chopping motion.',
      muscle_groups: ['Obliques', 'Shoulders'],
      equipment: ['Resistance Bands'],
      difficulty: 'Intermediate'
    }
  ];
  
  try {
    console.log('Adding additional exercises to the database...');
    
    for (const exercise of exercises) {
      try {
        // Check if the exercise with this name already exists
        const existingCheck = await query(
          `SELECT id FROM exercises WHERE name = $1`,
          [exercise.name]
        );
        
        // Only insert if it doesn't exist
        if (existingCheck.rowCount === 0) {
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
          console.log(`Added exercise: ${exercise.name}`);
        } else {
          console.log(`Exercise already exists: ${exercise.name}`);
        }
      } catch (error) {
        console.log(`Error adding exercise: ${exercise.name}`, error);
      }
    }
    
    console.log('Additional exercises added successfully');
    return true;
  } catch (error) {
    console.error('Error adding exercises:', error);
    return false;
  }
}

// Export the function to be called by the API route 