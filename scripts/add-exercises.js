const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

/**
 * Add exercises to the database using Prisma
 */
async function addExercisesDirectly() {
  try {
    console.log('Starting to add exercises to the database using Prisma...');

    // Define all the exercises
    const exercises = [
      // Strength exercises (Beginner)
      { 
        name: 'Bodyweight Squat', 
        category: 'Strength', 
        description: 'Stand with feet shoulder-width apart, lower body by bending knees and hips, then return to standing.',
        muscle_groups: ['Quadriceps', 'Hamstrings', 'Glutes'],
        equipment: ['Bodyweight'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Push-ups', 
        category: 'Strength', 
        description: 'Start in plank position, lower body until chest nearly touches floor, then push back up.',
        muscle_groups: ['Chest', 'Triceps', 'Shoulders'],
        equipment: ['Bodyweight'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Walking Lunges', 
        category: 'Strength', 
        description: 'Step forward into a lunge position, then bring the back foot forward to step into another lunge.',
        muscle_groups: ['Quadriceps', 'Hamstrings', 'Glutes'],
        equipment: ['Bodyweight'],
        difficulty: 'Beginner'
      },
      
      // Strength exercises (Intermediate)
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
      
      // Strength exercises (Advanced)
      { 
        name: 'Weighted Pull-ups', 
        category: 'Strength', 
        description: 'Perform pull-ups with additional weight attached to your body.',
        muscle_groups: ['Back', 'Biceps', 'Shoulders'],
        equipment: ['Pull-up Bar'],
        difficulty: 'Advanced'
      },
      { 
        name: 'Barbell Clean and Jerk', 
        category: 'Strength', 
        description: 'Lift barbell from floor to shoulders in one motion, then press overhead.',
        muscle_groups: ['Full Body'],
        equipment: ['Barbell'],
        difficulty: 'Advanced'
      },
      
      // Cardio exercises (Beginner)
      { 
        name: 'Treadmill Walking', 
        category: 'Cardio', 
        description: 'Walk on treadmill at moderate pace, adjusting incline for added challenge.',
        muscle_groups: ['Lower Body'],
        equipment: ['Treadmill'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Stationary Bike Easy Ride', 
        category: 'Cardio', 
        description: 'Pedal at a comfortable pace with light resistance.',
        muscle_groups: ['Quadriceps', 'Hamstrings', 'Calves'],
        equipment: ['Bicycle'],
        difficulty: 'Beginner'
      },
      
      // Cardio exercises (Intermediate)
      { 
        name: 'Treadmill Running', 
        category: 'Cardio', 
        description: 'Run on treadmill at moderate to high intensity, adjusting incline and speed as needed.',
        muscle_groups: ['Quadriceps', 'Hamstrings', 'Calves', 'Core'],
        equipment: ['Treadmill'],
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
        name: 'Stationary Bike Intervals', 
        category: 'Cardio', 
        description: 'Alternate between periods of high intensity and recovery on a stationary bike.',
        muscle_groups: ['Quadriceps', 'Hamstrings', 'Calves'],
        equipment: ['Bicycle'],
        difficulty: 'Intermediate'
      },
      
      // Cardio exercises (Advanced)
      { 
        name: 'High-Intensity Interval Sprint', 
        category: 'Cardio', 
        description: 'Alternate between maximum effort sprints and active recovery periods.',
        muscle_groups: ['Full Body'],
        equipment: ['Treadmill'],
        difficulty: 'Advanced'
      },
      
      // Core exercises (Beginner)
      { 
        name: 'Seated Bicycle Crunches', 
        category: 'Core', 
        description: 'Sit on floor, lean back slightly, and alternate touching elbow to opposite knee.',
        muscle_groups: ['Abdominals', 'Obliques'],
        equipment: ['Bodyweight'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Basic Plank', 
        category: 'Core', 
        description: 'Hold push-up position with weight on forearms, keeping body straight.',
        muscle_groups: ['Abdominals', 'Lower Back'],
        equipment: ['Bodyweight'],
        difficulty: 'Beginner'
      },
      
      // Core exercises (Intermediate)
      { 
        name: 'Bodyweight Plank', 
        category: 'Core', 
        description: 'Hold a push-up position with weight on forearms, keeping body straight for extended periods.',
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
      
      // Core exercises (Advanced)
      { 
        name: 'Dragon Flag', 
        category: 'Core', 
        description: 'Lie on bench, grasp behind head, raise straight body up supported only by shoulders.',
        muscle_groups: ['Full Core'],
        equipment: ['Bench'],
        difficulty: 'Advanced'
      },
      
      // Additional exercises for various equipment types
      { 
        name: 'Resistance Band Rows', 
        category: 'Strength', 
        description: 'Anchor resistance band at chest height, step back to create tension, pull band toward chest.',
        muscle_groups: ['Back', 'Biceps'],
        equipment: ['Resistance Bands'],
        difficulty: 'Beginner'
      },
      { 
        name: 'Dumbbell Bench Press', 
        category: 'Strength', 
        description: 'Lie on bench with dumbbells at chest level, press weights upward until arms are extended.',
        muscle_groups: ['Chest', 'Triceps', 'Shoulders'],
        equipment: ['Dumbbells', 'Bench'],
        difficulty: 'Intermediate'
      },
      { 
        name: 'Kettlebell Swings', 
        category: 'Strength', 
        description: 'Bend at hips with kettlebell between legs, swing kettlebell forward to shoulder height using hip drive.',
        muscle_groups: ['Glutes', 'Hamstrings', 'Lower Back', 'Shoulders'],
        equipment: ['Kettlebell'],
        difficulty: 'Intermediate'
      }
    ];

    // Insert each exercise
    for (const exercise of exercises) {
      try {
        // Check if the exercise already exists
        const existingExercise = await prisma.exercises.findFirst({
          where: {
            name: exercise.name
          }
        });
        
        if (!existingExercise) {
          // Insert the exercise using Prisma
          await prisma.exercises.create({
            data: {
              name: exercise.name,
              category: exercise.category,
              description: exercise.description,
              muscle_groups: exercise.muscle_groups,
              equipment: exercise.equipment,
              difficulty: exercise.difficulty
            }
          });
          console.log(`Added exercise: ${exercise.name}`);
        } else {
          console.log(`Exercise already exists: ${exercise.name}`);
        }
      } catch (error) {
        console.error(`Error adding exercise: ${exercise.name}`, error);
      }
    }

    console.log('Exercises added successfully!');
    
    return { success: true };
  } catch (error) {
    console.error('Error running script:', error);
    return { success: false, error };
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
    console.log('Prisma client disconnected');
  }
}

// Run the function
addExercisesDirectly()
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