const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

/**
 * Add meals to the database using Prisma
 */
async function addMeals() {
  try {
    console.log('Starting to add meals to the database using Prisma...');

    // Define various meals with nutritional information
    const meals = [
      // Breakfast meals
      { 
        name: 'Protein Oatmeal', 
        category: 'breakfast',
        calories: 350,
        protein: 20,
        carbs: 45,
        fats: 8,
        description: 'Steel-cut oats cooked with milk, protein powder, topped with berries and nuts'
      },
      { 
        name: 'Greek Yogurt Parfait', 
        category: 'breakfast',
        calories: 280,
        protein: 22,
        carbs: 30,
        fats: 6,
        description: 'Greek yogurt layered with granola, honey, and mixed berries'
      },
      { 
        name: 'Avocado Toast', 
        category: 'breakfast',
        calories: 320,
        protein: 10,
        carbs: 35,
        fats: 18,
        description: 'Whole grain toast topped with smashed avocado, poached egg, and red pepper flakes'
      },
      { 
        name: 'Protein Smoothie', 
        category: 'breakfast',
        calories: 300,
        protein: 25,
        carbs: 35,
        fats: 5,
        description: 'Blend of protein powder, banana, berries, spinach, and almond milk'
      },
      { 
        name: 'Veggie Omelette', 
        category: 'breakfast',
        calories: 340,
        protein: 24,
        carbs: 8,
        fats: 22,
        description: 'Three-egg omelette with spinach, bell peppers, onions, and feta cheese'
      },
      
      // Lunch meals
      { 
        name: 'Grilled Chicken Salad', 
        category: 'lunch',
        calories: 420,
        protein: 35,
        carbs: 20,
        fats: 18,
        description: 'Mixed greens topped with grilled chicken, cherry tomatoes, cucumbers, and balsamic vinaigrette'
      },
      { 
        name: 'Tuna Wrap', 
        category: 'lunch',
        calories: 380,
        protein: 28,
        carbs: 40,
        fats: 10,
        description: 'Whole grain wrap filled with tuna, lettuce, tomato, and light mayo'
      },
      { 
        name: 'Quinoa Bowl', 
        category: 'lunch',
        calories: 450,
        protein: 18,
        carbs: 60,
        fats: 15,
        description: 'Quinoa topped with roasted vegetables, chickpeas, and tahini dressing'
      },
      { 
        name: 'Turkey and Avocado Sandwich', 
        category: 'lunch',
        calories: 410,
        protein: 25,
        carbs: 45,
        fats: 16,
        description: 'Whole grain bread with turkey, avocado, lettuce, tomato, and mustard'
      },
      { 
        name: 'Lentil Soup', 
        category: 'lunch',
        calories: 320,
        protein: 18,
        carbs: 50,
        fats: 4,
        description: 'Hearty soup with lentils, carrots, celery, onions, and tomatoes'
      },
      
      // Dinner meals
      { 
        name: 'Grilled Salmon', 
        category: 'dinner',
        calories: 480,
        protein: 40,
        carbs: 10,
        fats: 28,
        description: 'Grilled salmon fillet with steamed broccoli and brown rice'
      },
      { 
        name: 'Chicken Stir-Fry', 
        category: 'dinner',
        calories: 450,
        protein: 35,
        carbs: 40,
        fats: 15,
        description: 'Chicken breast stir-fried with mixed vegetables and served with brown rice'
      },
      { 
        name: 'Beef and Vegetable Stew', 
        category: 'dinner',
        calories: 520,
        protein: 38,
        carbs: 30,
        fats: 25,
        description: 'Slow-cooked beef with carrots, potatoes, and onions in a savory broth'
      },
      { 
        name: 'Baked Tofu with Vegetables', 
        category: 'dinner',
        calories: 380,
        protein: 25,
        carbs: 35,
        fats: 18,
        description: 'Marinated tofu baked with assorted vegetables and quinoa'
      },
      { 
        name: 'Turkey Meatballs with Zucchini Noodles', 
        category: 'dinner',
        calories: 410,
        protein: 35,
        carbs: 15,
        fats: 22,
        description: 'Turkey meatballs in tomato sauce served over spiralized zucchini'
      },
      
      // Snacks
      { 
        name: 'Protein Bar', 
        category: 'snack',
        calories: 220,
        protein: 20,
        carbs: 25,
        fats: 7,
        description: 'Protein-rich bar with nuts and dried fruits'
      },
      { 
        name: 'Apple with Almond Butter', 
        category: 'snack',
        calories: 180,
        protein: 5,
        carbs: 25,
        fats: 10,
        description: 'Apple slices served with a tablespoon of almond butter'
      },
      { 
        name: 'Greek Yogurt with Honey', 
        category: 'snack',
        calories: 150,
        protein: 15,
        carbs: 12,
        fats: 3,
        description: 'Plain Greek yogurt drizzled with honey'
      },
      { 
        name: 'Hummus with Carrots', 
        category: 'snack',
        calories: 170,
        protein: 6,
        carbs: 20,
        fats: 8,
        description: 'Chickpea hummus served with carrot sticks'
      },
      { 
        name: 'Mixed Nuts', 
        category: 'snack',
        calories: 210,
        protein: 8,
        carbs: 8,
        fats: 18,
        description: 'Assorted nuts including almonds, walnuts, and cashews'
      },
      
      // Post-workout meals
      { 
        name: 'Whey Protein Shake', 
        category: 'Post-Workout',
        calories: 200,
        protein: 30,
        carbs: 10,
        fats: 2,
        description: 'Whey protein powder mixed with water or milk'
      },
      { 
        name: 'Chocolate Milk', 
        category: 'Post-Workout',
        calories: 230,
        protein: 10,
        carbs: 30,
        fats: 8,
        description: 'Low-fat chocolate milk for post-workout recovery'
      },
      { 
        name: 'Banana and Peanut Butter', 
        category: 'Post-Workout',
        calories: 250,
        protein: 8,
        carbs: 35,
        fats: 10,
        description: 'Banana with a tablespoon of peanut butter'
      },
      { 
        name: 'Chicken and Rice Bowl', 
        category: 'Post-Workout',
        calories: 380,
        protein: 30,
        carbs: 45,
        fats: 8,
        description: 'Grilled chicken with white rice and steamed vegetables'
      },
      { 
        name: 'Egg White Omelet with Toast', 
        category: 'Post-Workout',
        calories: 290,
        protein: 25,
        carbs: 30,
        fats: 6,
        description: 'Egg white omelet with vegetables and whole grain toast'
      }
    ];

    // Insert each meal
    for (const meal of meals) {
      try {
        // Check if the meal already exists
        const existingMeal = await prisma.meals.findFirst({
          where: {
            name: meal.name
          }
        });
        
        if (!existingMeal) {
          // Insert the meal using Prisma
          await prisma.meals.create({
            data: {
              name: meal.name,
              category: meal.category,
              calories: meal.calories,
              protein: meal.protein,
              carbs: meal.carbs,
              fats: meal.fats,
              description: meal.description
            }
          });
          console.log(`Added meal: ${meal.name}`);
        } else {
          console.log(`Meal already exists: ${meal.name}`);
        }
      } catch (error) {
        console.error(`Error adding meal: ${meal.name}`, error);
      }
    }

    console.log('Meals added successfully!');
    
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
addMeals()
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