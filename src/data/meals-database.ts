import { FoodItem } from '@/types/meal-plans';

// Base food items that can be used across multiple meals
export const foodItems: Record<string, FoodItem> = {
  // Breakfast foods
  oatmeal: {
    id: 'food-1',
    name: 'Oatmeal',
    amount: '1 cup',
    calories: 150,
    protein: 6,
    carbs: 27,
    fats: 2.5
  },
  eggs: {
    id: 'food-2',
    name: 'Eggs',
    amount: '2 large',
    calories: 140,
    protein: 12,
    carbs: 0,
    fats: 10
  },
  avocado: {
    id: 'food-3',
    name: 'Avocado',
    amount: '1/2 medium',
    calories: 120,
    protein: 1.5,
    carbs: 6,
    fats: 11
  },
  wholeGrainToast: {
    id: 'food-4',
    name: 'Whole Grain Toast',
    amount: '2 slices',
    calories: 140,
    protein: 6,
    carbs: 26,
    fats: 2
  },
  
  // Lunch foods
  chicken: {
    id: 'food-5',
    name: 'Grilled Chicken Breast',
    amount: '4 oz',
    calories: 180,
    protein: 35,
    carbs: 0,
    fats: 4
  },
  rice: {
    id: 'food-6',
    name: 'Brown Rice',
    amount: '1 cup',
    calories: 220,
    protein: 5,
    carbs: 45,
    fats: 2
  },
  sweetPotato: {
    id: 'food-7',
    name: 'Sweet Potato',
    amount: '1 medium',
    calories: 110,
    protein: 2,
    carbs: 26,
    fats: 0
  },
  quinoa: {
    id: 'food-8',
    name: 'Quinoa',
    amount: '1 cup',
    calories: 220,
    protein: 8,
    carbs: 39,
    fats: 3.5
  },
  
  // Dinner foods
  salmon: {
    id: 'food-9',
    name: 'Salmon Fillet',
    amount: '4 oz',
    calories: 210,
    protein: 23,
    carbs: 0,
    fats: 13
  },
  steak: {
    id: 'food-10',
    name: 'Lean Beef Steak',
    amount: '4 oz',
    calories: 190,
    protein: 28,
    carbs: 0,
    fats: 8
  },
  broccoli: {
    id: 'food-11',
    name: 'Steamed Broccoli',
    amount: '1 cup',
    calories: 55,
    protein: 3.7,
    carbs: 11,
    fats: 0.3
  },
  beans: {
    id: 'food-12',
    name: 'Black Beans',
    amount: '1/2 cup',
    calories: 110,
    protein: 7,
    carbs: 20,
    fats: 0.5
  },
  
  // Snack foods
  yogurt: {
    id: 'food-13',
    name: 'Greek Yogurt',
    amount: '1 cup',
    calories: 130,
    protein: 20,
    carbs: 9,
    fats: 0
  },
  almonds: {
    id: 'food-14',
    name: 'Almonds',
    amount: '1/4 cup',
    calories: 170,
    protein: 6,
    carbs: 6,
    fats: 15
  },
  banana: {
    id: 'food-15',
    name: 'Banana',
    amount: '1 medium',
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fats: 0.4
  },
  proteinBar: {
    id: 'food-16',
    name: 'Protein Bar',
    amount: '1 bar',
    calories: 210,
    protein: 20,
    carbs: 25,
    fats: 5
  }
};

// Meal templates organized by meal type and fitness goal
export const mealTemplates = {
  // Breakfast meals
  breakfast: [
    {
      id: 'meal-breakfast-1',
      name: 'Oatmeal with Fruit',
      meal_type: 'breakfast' as const,
      calories: 320,
      protein: 14,
      carbs: 55,
      fats: 7,
      completed: false,
      food_items: [
        { ...foodItems.oatmeal },
        {
          id: 'food-b1-banana',
          name: 'Banana',
          amount: '1 medium',
          calories: 105,
          protein: 1.3,
          carbs: 27,
          fats: 0.4
        },
        {
          id: 'food-b1-honey',
          name: 'Honey',
          amount: '1 tbsp',
          calories: 65,
          protein: 0,
          carbs: 17,
          fats: 0
        }
      ]
    },
    {
      id: 'meal-breakfast-2',
      name: 'Protein Packed Scramble',
      meal_type: 'breakfast' as const,
      calories: 380,
      protein: 25,
      carbs: 26,
      fats: 21,
      completed: false,
      food_items: [
        { ...foodItems.eggs },
        { ...foodItems.avocado },
        {
          id: 'food-b2-spinach',
          name: 'Spinach',
          amount: '1 cup',
          calories: 20,
          protein: 2,
          carbs: 3,
          fats: 0
        },
        {
          id: 'food-b2-salsa',
          name: 'Salsa',
          amount: '2 tbsp',
          calories: 10,
          protein: 0,
          carbs: 2,
          fats: 0
        }
      ]
    },
    {
      id: 'meal-breakfast-3',
      name: 'Avocado Toast',
      meal_type: 'breakfast' as const,
      calories: 340,
      protein: 12,
      carbs: 32,
      fats: 20,
      completed: false,
      food_items: [
        { ...foodItems.wholeGrainToast },
        { ...foodItems.avocado },
        {
          id: 'food-b3-tomato',
          name: 'Sliced Tomato',
          amount: '1 medium',
          calories: 25,
          protein: 1,
          carbs: 5,
          fats: 0.5
        },
        {
          id: 'food-b3-salt',
          name: 'Sea Salt & Pepper',
          amount: 'to taste',
          calories: 0,
          protein: 0,
          carbs: 0,
          fats: 0
        }
      ]
    },
    {
      id: 'meal-breakfast-4',
      name: 'Protein Smoothie Bowl',
      meal_type: 'breakfast' as const,
      calories: 350,
      protein: 30,
      carbs: 45,
      fats: 5,
      completed: false,
      food_items: [
        {
          id: 'food-b4-protein',
          name: 'Protein Powder',
          amount: '1 scoop',
          calories: 120,
          protein: 24,
          carbs: 3,
          fats: 1
        },
        { ...foodItems.banana },
        {
          id: 'food-b4-berries',
          name: 'Mixed Berries',
          amount: '1/2 cup',
          calories: 40,
          protein: 0.5,
          carbs: 10,
          fats: 0.5
        },
        {
          id: 'food-b4-milk',
          name: 'Almond Milk',
          amount: '1 cup',
          calories: 40,
          protein: 1,
          carbs: 3,
          fats: 3
        }
      ]
    }
  ],
  
  // Lunch meals
  lunch: [
    {
      id: 'meal-lunch-1',
      name: 'Chicken & Rice Bowl',
      meal_type: 'lunch' as const,
      calories: 450,
      protein: 40,
      carbs: 47,
      fats: 10,
      completed: false,
      food_items: [
        { ...foodItems.chicken },
        { ...foodItems.rice },
        {
          id: 'food-l1-veggies',
          name: 'Mixed Vegetables',
          amount: '1 cup',
          calories: 50,
          protein: 2,
          carbs: 10,
          fats: 0
        },
        {
          id: 'food-l1-sauce',
          name: 'Low-Fat Sauce',
          amount: '2 tbsp',
          calories: 40,
          protein: 0,
          carbs: 2,
          fats: 4
        }
      ]
    },
    {
      id: 'meal-lunch-2',
      name: 'Quinoa Salad',
      meal_type: 'lunch' as const,
      calories: 380,
      protein: 15,
      carbs: 45,
      fats: 16,
      completed: false,
      food_items: [
        { ...foodItems.quinoa },
        {
          id: 'food-l2-cucumber',
          name: 'Cucumber',
          amount: '1/2 cup',
          calories: 15,
          protein: 0.6,
          carbs: 3.5,
          fats: 0.1
        },
        {
          id: 'food-l2-tomatoes',
          name: 'Cherry Tomatoes',
          amount: '1/2 cup',
          calories: 15,
          protein: 0.8,
          carbs: 3.3,
          fats: 0.2
        },
        {
          id: 'food-l2-olives',
          name: 'Kalamata Olives',
          amount: '10 olives',
          calories: 50,
          protein: 0.5,
          carbs: 1,
          fats: 5
        },
        {
          id: 'food-l2-dressing',
          name: 'Olive Oil & Lemon Dressing',
          amount: '1 tbsp',
          calories: 45,
          protein: 0,
          carbs: 0,
          fats: 5
        }
      ]
    },
    {
      id: 'meal-lunch-3',
      name: 'Sweet Potato & Tuna',
      meal_type: 'lunch' as const,
      calories: 320,
      protein: 30,
      carbs: 28,
      fats: 10,
      completed: false,
      food_items: [
        { ...foodItems.sweetPotato },
        {
          id: 'food-l3-tuna',
          name: 'Tuna (in water)',
          amount: '4 oz',
          calories: 120,
          protein: 26,
          carbs: 0,
          fats: 1
        },
        {
          id: 'food-l3-greens',
          name: 'Mixed Greens',
          amount: '2 cups',
          calories: 20,
          protein: 1,
          carbs: 4,
          fats: 0
        },
        {
          id: 'food-l3-dressing',
          name: 'Light Mayo',
          amount: '1 tbsp',
          calories: 40,
          protein: 0,
          carbs: 1,
          fats: 4
        }
      ]
    },
    {
      id: 'meal-lunch-4',
      name: 'Chicken Wrap',
      meal_type: 'lunch' as const,
      calories: 410,
      protein: 38,
      carbs: 40,
      fats: 10,
      completed: false,
      food_items: [
        { ...foodItems.chicken },
        {
          id: 'food-l4-wrap',
          name: 'Whole Wheat Wrap',
          amount: '1 large',
          calories: 130,
          protein: 4,
          carbs: 22,
          fats: 3
        },
        {
          id: 'food-l4-veggies',
          name: 'Lettuce, Tomato, Onion',
          amount: '1/2 cup',
          calories: 20,
          protein: 1,
          carbs: 4,
          fats: 0
        },
        {
          id: 'food-l4-hummus',
          name: 'Hummus',
          amount: '2 tbsp',
          calories: 70,
          protein: 2,
          carbs: 6,
          fats: 5
        }
      ]
    }
  ],
  
  // Dinner meals
  dinner: [
    {
      id: 'meal-dinner-1',
      name: 'Salmon with Vegetables',
      meal_type: 'dinner' as const,
      calories: 420,
      protein: 35,
      carbs: 25,
      fats: 18,
      completed: false,
      food_items: [
        { ...foodItems.salmon },
        { ...foodItems.broccoli },
        { ...foodItems.sweetPotato },
        {
          id: 'food-d1-seasoning',
          name: 'Herbs & Seasoning',
          amount: 'to taste',
          calories: 5,
          protein: 0,
          carbs: 1,
          fats: 0
        }
      ]
    },
    {
      id: 'meal-dinner-2',
      name: 'Steak & Vegetables',
      meal_type: 'dinner' as const,
      calories: 450,
      protein: 40,
      carbs: 30,
      fats: 15,
      completed: false,
      food_items: [
        { ...foodItems.steak },
        { ...foodItems.broccoli },
        {
          id: 'food-d2-potatoes',
          name: 'Roasted Potatoes',
          amount: '1 cup',
          calories: 180,
          protein: 4,
          carbs: 37,
          fats: 0.2
        },
        {
          id: 'food-d2-butter',
          name: 'Butter',
          amount: '1 tsp',
          calories: 35,
          protein: 0,
          carbs: 0,
          fats: 4
        }
      ]
    },
    {
      id: 'meal-dinner-3',
      name: 'Bean & Vegetable Stir Fry',
      meal_type: 'dinner' as const,
      calories: 380,
      protein: 20,
      carbs: 60,
      fats: 8,
      completed: false,
      food_items: [
        { ...foodItems.beans },
        { ...foodItems.broccoli },
        {
          id: 'food-d3-peppers',
          name: 'Bell Peppers',
          amount: '1 cup',
          calories: 40,
          protein: 1.5,
          carbs: 9,
          fats: 0.3
        },
        {
          id: 'food-d3-carrots',
          name: 'Carrots',
          amount: '1/2 cup',
          calories: 25,
          protein: 0.6,
          carbs: 6,
          fats: 0.1
        },
        { ...foodItems.rice },
        {
          id: 'food-d3-sauce',
          name: 'Teriyaki Sauce',
          amount: '2 tbsp',
          calories: 40,
          protein: 0,
          carbs: 10,
          fats: 0
        }
      ]
    },
    {
      id: 'meal-dinner-4',
      name: 'Grilled Chicken Salad',
      meal_type: 'dinner' as const,
      calories: 350,
      protein: 40,
      carbs: 15,
      fats: 15,
      completed: false,
      food_items: [
        { ...foodItems.chicken },
        {
          id: 'food-d4-greens',
          name: 'Mixed Greens',
          amount: '3 cups',
          calories: 30,
          protein: 2,
          carbs: 6,
          fats: 0
        },
        {
          id: 'food-d4-avocado',
          name: 'Avocado',
          amount: '1/4',
          calories: 60,
          protein: 0.7,
          carbs: 3,
          fats: 5.5
        },
        {
          id: 'food-d4-tomato',
          name: 'Cherry Tomatoes',
          amount: '1/2 cup',
          calories: 15,
          protein: 0.8,
          carbs: 3.3,
          fats: 0.2
        },
        {
          id: 'food-d4-cucumber',
          name: 'Cucumber',
          amount: '1/2 cup',
          calories: 15,
          protein: 0.6,
          carbs: 3.5,
          fats: 0.1
        },
        {
          id: 'food-d4-dressing',
          name: 'Balsamic Vinaigrette',
          amount: '1 tbsp',
          calories: 45,
          protein: 0,
          carbs: 2,
          fats: 4.5
        }
      ]
    }
  ],
  
  // Snack options
  snack: [
    {
      id: 'meal-snack-1',
      name: 'Greek Yogurt with Berries',
      meal_type: 'snack' as const,
      calories: 180,
      protein: 21,
      carbs: 15,
      fats: 0.5,
      completed: false,
      food_items: [
        { ...foodItems.yogurt },
        {
          id: 'food-s1-berries',
          name: 'Mixed Berries',
          amount: '1/2 cup',
          calories: 40,
          protein: 0.5,
          carbs: 10,
          fats: 0.5
        },
        {
          id: 'food-s1-honey',
          name: 'Honey',
          amount: '1 tsp',
          calories: 20,
          protein: 0,
          carbs: 6,
          fats: 0
        }
      ]
    },
    {
      id: 'meal-snack-2',
      name: 'Nuts & Fruit',
      meal_type: 'snack' as const,
      calories: 230,
      protein: 6,
      carbs: 25,
      fats: 15,
      completed: false,
      food_items: [
        { ...foodItems.almonds },
        {
          id: 'food-s2-apple',
          name: 'Apple',
          amount: '1 medium',
          calories: 95,
          protein: 0.5,
          carbs: 25,
          fats: 0.3
        }
      ]
    },
    {
      id: 'meal-snack-3',
      name: 'Protein Shake',
      meal_type: 'snack' as const,
      calories: 200,
      protein: 30,
      carbs: 10,
      fats: 3,
      completed: false,
      food_items: [
        {
          id: 'food-s3-protein',
          name: 'Whey Protein',
          amount: '1 scoop',
          calories: 120,
          protein: 25,
          carbs: 3,
          fats: 1
        },
        {
          id: 'food-s3-milk',
          name: 'Almond Milk',
          amount: '1 cup',
          calories: 40,
          protein: 1,
          carbs: 3,
          fats: 3
        },
        {
          id: 'food-s3-banana',
          name: 'Half Banana',
          amount: '1/2 medium',
          calories: 50,
          protein: 0.6,
          carbs: 13,
          fats: 0.2
        }
      ]
    },
    {
      id: 'meal-snack-4',
      name: 'Protein Bar',
      meal_type: 'snack' as const,
      calories: 210,
      protein: 20,
      carbs: 25,
      fats: 5,
      completed: false,
      food_items: [
        { ...foodItems.proteinBar }
      ]
    }
  ]
};

// Helper function to get random meals for each meal type
export const getRandomMealsForDay = (goalType: string = 'weight_loss') => {
  // For now, we're not filtering by goal type, but we could add that functionality 
  // based on calories or macros preferences per goal
  
  // Get a random meal of each type
  const breakfast = mealTemplates.breakfast[Math.floor(Math.random() * mealTemplates.breakfast.length)];
  const lunch = mealTemplates.lunch[Math.floor(Math.random() * mealTemplates.lunch.length)];
  const dinner = mealTemplates.dinner[Math.floor(Math.random() * mealTemplates.dinner.length)];
  const snack = mealTemplates.snack[Math.floor(Math.random() * mealTemplates.snack.length)];
  
  // Generate random IDs to ensure uniqueness
  const generateUniqueId = () => `meal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  return [
    { ...breakfast, id: generateUniqueId() },
    { ...lunch, id: generateUniqueId() },
    { ...dinner, id: generateUniqueId() },
    { ...snack, id: generateUniqueId() }
  ];
}; 