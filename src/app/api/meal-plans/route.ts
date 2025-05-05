import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';
import { updateProgressTracking } from '@/lib/progress-tracking';
import { MealPlan, MealItem } from '@/types/meal-plans';
import prisma from '@/lib/prisma';
import { MealType } from '@/lib/meal-types';
import { Decimal } from '@prisma/client/runtime/library';

// GET handler for retrieving meal plans
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const url = new URL(req.url);
    const workoutPlanId = url.searchParams.get('workout_plan_id');
    
    // Build query based on whether a workout plan ID is provided
    let queryText = `
      SELECT mp.*, wp.name as workout_plan_name 
      FROM meal_plans mp
      LEFT JOIN workout_plans wp ON mp.workout_plan_id = wp.id
      WHERE mp.user_id = $1
    `;
    let queryParams = [userId];
    
    // Add workout plan filter if provided
    if (workoutPlanId) {
      queryText += ` AND mp.workout_plan_id = $2`;
      queryParams.push(workoutPlanId);
    }
    
    queryText += ` ORDER BY mp.date ASC`;
    
    // Get meal plans
    const mealPlansResult = await query(queryText, queryParams);
    
    // For each meal plan, retrieve and structure the meals
    const formattedMealPlans = await Promise.all(
      mealPlansResult.rows.map(async (mealPlan) => {
        // Get all meal items for this plan
        const mealItemsResult = await query(
          `SELECT mpi.*, m.description
           FROM meal_plan_items mpi
           LEFT JOIN meals m ON mpi.meal_id = m.id
           WHERE mpi.meal_plan_id = $1 
           ORDER BY mpi.day_number, mpi.meal_time`,
          [mealPlan.id]
        );
        
        // Group meals by day
        const daysMap = new Map();
        
        for (const item of mealItemsResult.rows) {
          // Create meal item
          const mealItem: MealItem = {
            id: item.id,
            name: item.name,
            meal_type: item.meal_time,
            calories: item.calories,
            protein: item.protein,
            carbs: item.carbs,
            fats: item.fats,
            completed: item.completed,
            completion_date: item.completion_date,
            portion: item.portion,
            notes: item.notes,
            food_items: []  // Default to empty array since column doesn't exist yet
          };
          
          // Add to day
          const dayKey = item.day_number || 1;
          if (!daysMap.has(dayKey)) {
            daysMap.set(dayKey, {
              day_number: dayKey,
              day_name: `Day ${dayKey}`,
              meals: []
            });
          }
          
          daysMap.get(dayKey).meals.push(mealItem);
        }
        
        // Convert map to array sorted by day number
        const days = Array.from(daysMap.values()).sort((a, b) => a.day_number - b.day_number);
        
        // Create the meal plan object with our standardized structure
        const formattedMealPlan: MealPlan = {
          id: mealPlan.id,
          name: mealPlan.name,
          description: mealPlan.description || '',
          workout_plan_id: mealPlan.workout_plan_id,
          workout_plan_name: mealPlan.workout_plan_name,
          daily_calories: mealPlan.daily_calories || 2000,
          days,
          created_at: mealPlan.created_at,
          date: mealPlan.date
        };
        
        return formattedMealPlan;
      })
    );
    
    return NextResponse.json({ 
      meal_plans: formattedMealPlans
    });
  } catch (error) {
    console.error('Error in meal plans API:', error);
    return NextResponse.json({ 
      error: 'Failed to retrieve meal plans',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

// POST handler for creating a new meal plan
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const data = await req.json();
    const { workout_plan_id, name } = data;
    
    if (!workout_plan_id || !name) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }
    
    // Validate workout plan exists and belongs to user
    const workoutPlan = await prisma.workout_plans.findFirst({
      where: {
        id: workout_plan_id,
        user_id: session.user.id
      }
    });
    
    if (!workoutPlan) {
      return NextResponse.json({ error: 'Workout plan not found' }, { status: 404 });
    }

    // Generate meal plan with items
    const mealPlan = await generateMealPlan(
      session.user.id,
      workout_plan_id,
      workoutPlan.goal || 'general',
      workoutPlan.frequency || 3
    );
    
    return NextResponse.json({ meal_plan: mealPlan });
  } catch (error) {
    console.error('Error creating meal plan:', error);
    return NextResponse.json(
      { error: 'Failed to create meal plan' },
      { status: 500 }
    );
  }
}

// PATCH handler for updating meal completion status
export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const { meal_plan_item_id, completed } = data;

    if (!meal_plan_item_id) {
      return NextResponse.json({ error: 'Missing meal_plan_item_id' }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      // Get meal plan item with its associated meal plan
      const mealPlanItem = await tx.meal_plan_items.findFirst({
        where: {
          id: meal_plan_item_id,
          meal_plans: {
            user_id: session.user.id
          }
        },
        include: {
          meal_plans: true,
          meals: true
        }
      });

      if (!mealPlanItem) {
        throw new Error('Meal plan item not found or access denied');
      }

      // Update meal plan item completion status
      const updatedMealPlanItem = await tx.meal_plan_items.update({
        where: { id: meal_plan_item_id },
        data: {
          completed
        }
      });

      if (completed && mealPlanItem.meals) {
        // Create meal log entry when marked as complete
        await tx.meal_logs.create({
          data: {
            user_id: session.user.id,
            meal_id: mealPlanItem.meal_id,
            meal_name: mealPlanItem.name,
            calories: mealPlanItem.calories || 0,
            protein: mealPlanItem.protein || new Decimal(0),
            carbs: mealPlanItem.carbs || new Decimal(0),
            fats: mealPlanItem.fats || new Decimal(0),
            meal_time: mealPlanItem.meal_time,
            portion: new Decimal(1),
            consumed_at: new Date(),
            notes: `Completed from meal plan: ${mealPlanItem.meal_plans.name}`
          }
        });

        // Update progress tracking
        if (mealPlanItem.meal_plans.workout_plan_id) {
          await updateProgressTracking(
            session.user.id,
            mealPlanItem.meal_plans.workout_plan_id
          );
        }
      }

      return updatedMealPlanItem;
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating meal completion:', error);
    return NextResponse.json(
      { error: 'Failed to update meal completion' },
      { status: 500 }
    );
  }
}

// PUT handler for associating meal plan with workout plan
export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { meal_plan_id, workout_plan_id } = body;
    
    if (!meal_plan_id) {
      return NextResponse.json({ 
        error: 'Missing required fields: meal_plan_id is required'
      }, { status: 400 });
    }
    
    // Verify the meal plan belongs to the user
    const mealPlanCheck = await query(
      `SELECT * FROM meal_plans WHERE id = $1 AND user_id = $2`,
      [meal_plan_id, userId]
    );
    
    if (mealPlanCheck.rows.length === 0) {
      return NextResponse.json({ error: 'Meal plan not found or not owned by user' }, { status: 404 });
    }
    
    // If workout_plan_id is provided, verify it belongs to the user
    if (workout_plan_id) {
      const workoutPlanCheck = await query(
        `SELECT * FROM workout_plans WHERE id = $1 AND user_id = $2`,
        [workout_plan_id, userId]
      );
      
      if (workoutPlanCheck.rows.length === 0) {
        return NextResponse.json({ error: 'Workout plan not found or not owned by user' }, { status: 404 });
      }
    }
    
    // Update the meal plan to associate with workout plan
    const updateResult = await query(
      `UPDATE meal_plans
      SET workout_plan_id = $1, updated_at = NOW()
      WHERE id = $2 AND user_id = $3
      RETURNING *`,
      [workout_plan_id || null, meal_plan_id, userId]
    );
    
    // Update progress tracking if associating with a workout plan
    if (workout_plan_id) {
      await updateProgressTracking(userId, workout_plan_id);
    }
    
    return NextResponse.json({ meal_plan: updateResult.rows[0] });
  } catch (error) {
    console.error('Error associating meal plan with workout plan:', error);
    return NextResponse.json({ error: 'Failed to associate meal plan with workout plan' }, { status: 500 });
  }
}

// Helper function to calculate BMR using Mifflin-St Jeor equation
function calculateBMR(weight: number, height: number, age: number, gender: string): number {
  // Convert weight to kg if needed
  const weightInKg = Math.round(weight);
  // Convert height to cm if needed
  const heightInCm = Math.round(height);
  
  if (gender.toLowerCase() === 'male') {
    return Math.round((10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5);
  } else {
    return Math.round((10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161);
  }
}

// Helper function to calculate daily calorie needs based on activity level and goal
function calculateDailyCalories(bmr: number, goal: string, workoutIntensity: number): number {
  // Base activity multiplier for workout days
  let activityMultiplier = 1.2; // Sedentary
  
  // Adjust based on workout intensity (1-5 scale)
  switch (workoutIntensity) {
    case 1:
      activityMultiplier = 1.3; // Light activity
      break;
    case 2:
      activityMultiplier = 1.4; // Moderate activity
      break;
    case 3:
      activityMultiplier = 1.5; // Active
      break;
    case 4:
      activityMultiplier = 1.6; // Very active
      break;
    case 5:
      activityMultiplier = 1.7; // Extra active
      break;
  }
  
  let calories = Math.round(bmr * activityMultiplier);
  
  // Adjust calories based on goal
  if (goal.toLowerCase().includes('weight_loss') || goal.toLowerCase().includes('fat_loss')) {
    calories = Math.round(calories * 0.8); // 20% deficit for weight loss
  } else if (goal.toLowerCase().includes('muscle') || goal.toLowerCase().includes('strength')) {
    calories = Math.round(calories * 1.1); // 10% surplus for muscle gain
  }
  
  return calories;
}

// Helper function to generate a meal plan based on workout goals and frequency
export async function generateMealPlan(
  userId: string,
  workoutPlanId: string,
  goal: string,
  frequency: number
) {
  try {
    // Get workout plan details
    const workoutPlan = await prisma.workout_plans.findUnique({
      where: { id: workoutPlanId }
    });
    
    if (!workoutPlan) {
      throw new Error('Workout plan not found');
    }
    
    // Get user details for BMR calculation
    const user = await prisma.users.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      throw new Error('User not found');
    }
    
    // Calculate BMR and daily calorie needs
    const bmr = calculateBMR(
      Number(user.weight),
      Number(user.height),
      user.age || 25,
      user.gender || 'male'
    );
    
    // Estimate workout intensity based on goal
    let workoutIntensity = 3; // Default to moderate
    if (goal.toLowerCase().includes('muscle') || goal.toLowerCase().includes('strength')) {
      workoutIntensity = 4;
    } else if (goal.toLowerCase().includes('cardio') || goal.toLowerCase().includes('heart')) {
      workoutIntensity = 5;
    }
    
    const dailyCalories = calculateDailyCalories(bmr, goal, workoutIntensity);
    
    // Build diet condition based on user preferences
    let whereClause: any = {};
    if (user.dietary_preference) {
      // Add dietary preference conditions
      switch (user.dietary_preference.toLowerCase()) {
        case 'vegetarian':
          whereClause.description = { not: { contains: 'meat' } };
          break;
        case 'vegan':
          whereClause.description = {
            not: {
              contains: ['meat', 'egg', 'dairy']
            }
          };
          break;
        case 'keto':
          whereClause.carbs = { lt: 10 };
          break;
      }
    }

    // Get meals from database with dietary restrictions
    const breakfastMeals = await prisma.meals.findMany({
      where: {
        ...whereClause,
        category: 'breakfast'
      },
      orderBy: {
        calories: 'asc'
      },
      take: 10
    });

    const lunchMeals = await prisma.meals.findMany({
      where: {
        ...whereClause,
        category: 'lunch'
      },
      orderBy: {
        calories: 'asc'
      },
      take: 10
    });

    const dinnerMeals = await prisma.meals.findMany({
      where: {
        ...whereClause,
        category: 'dinner'
      },
      orderBy: {
        calories: 'asc'
      },
      take: 10
    });

    const snackMeals = await prisma.meals.findMany({
      where: {
        ...whereClause,
        category: 'snack'
      },
      orderBy: {
        calories: 'asc'
      },
      take: 10
    });
    
    // Create the meal plan
    const mealPlan = await prisma.meal_plans.create({
      data: {
        user_id: userId,
        workout_plan_id: workoutPlanId,
        name: `${workoutPlan.name} Nutrition Plan`,
        description: `Nutrition plan for your ${workoutPlan.name}. Target: ${Math.round(dailyCalories)} calories per workout day`,
        daily_calories: Math.round(dailyCalories),
        date: new Date()
      }
    });

    // Add meals for workout days
    for (let day = 1; day <= frequency; day++) {
      // Select random meals for each category
      const breakfast = breakfastMeals[Math.floor(Math.random() * breakfastMeals.length)];
      const lunch = lunchMeals[Math.floor(Math.random() * lunchMeals.length)];
      const dinner = dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)];
      const snack = snackMeals[Math.floor(Math.random() * snackMeals.length)];
      
      // Adjust macros based on fitness goal
      let proteinMultiplier = 1;
      let carbsMultiplier = 1;
      let fatsMultiplier = 1;
      
      if (goal.toLowerCase().includes('muscle') || goal.toLowerCase().includes('strength')) {
        proteinMultiplier = 1.3;
        carbsMultiplier = 1.2;
        fatsMultiplier = 0.9;
      } else if (goal.toLowerCase().includes('fat') || goal.toLowerCase().includes('weight_loss')) {
        proteinMultiplier = 1.2;
        carbsMultiplier = 0.7;
        fatsMultiplier = 0.8;
      }
      
      // Add each meal type to the plan with day information
      const dayInfo = { day_number: day, day_name: `Day ${day}` };
      // TESTING MEALS
      console.log("\n\n\n\n\n\n\nADDING MEALS TO PLAN TESTING\n\n\n\n\n\n\n")
      if (breakfast) {
        await addMealToPlan(mealPlan.id, breakfast, 'breakfast', proteinMultiplier, carbsMultiplier, fatsMultiplier, dayInfo);
        console.log("BREAKFAST ADDED TO PLAN TESTING BREAKFAST")
      }
      
      if (lunch) {
        await addMealToPlan(mealPlan.id, lunch, 'lunch', proteinMultiplier, carbsMultiplier, fatsMultiplier, dayInfo);
        console.log("LUNCH ADDED TO PLAN TESTING LUNCH")
      }
      
      if (dinner) {
        await addMealToPlan(mealPlan.id, dinner, 'dinner', proteinMultiplier, carbsMultiplier, fatsMultiplier, dayInfo);
        console.log("DINNER ADDED TO PLAN TESTING DINNER")
      }
      
      if (snack) {
        await addMealToPlan(mealPlan.id, snack, 'snack', proteinMultiplier, carbsMultiplier, fatsMultiplier, dayInfo);
        console.log("SNACK ADDED TO PLAN TESTING SNACK")
      }
    }
    
    // Get the complete meal plan with items
    const completeMealPlan = await prisma.meal_plans.findUnique({
      where: { id: mealPlan.id },
      include: {
        meal_plan_items: {
          include: {
            meals: true
          }
        }
      }
    });
    
    return completeMealPlan;
  } catch (error) {
    console.error('Error generating meal plan:', error);
    throw error;
  }
}

// Helper function to add a meal to a meal plan
async function addMealToPlan(
  mealPlanId: string,
  meal: any,
  mealTime: string,
  proteinMultiplier: number,
  carbsMultiplier: number,
  fatsMultiplier: number,
  dayInfo: { day_number: number; day_name: string }
) {
  try {
    // Create the meal plan item with complete information
    const result = await prisma.meal_plan_items.createMany({
      data: {
        meal_plan_id: mealPlanId,
        meal_id: meal.id,
        name: meal.name,
        meal_time: mealTime,
        calories: Math.round(meal.calories || 0),
        protein: new Decimal((meal.protein || 0) * proteinMultiplier),
        carbs: new Decimal((meal.carbs || 0) * carbsMultiplier),
        fats: new Decimal((meal.fats || 0) * fatsMultiplier),
        completed: false,
        day_number: dayInfo.day_number,
        portion: new Decimal(1),
        notes: `Generated for ${dayInfo.day_name}`
      }
    });

    return result;
  } catch (error) {
    console.error('Error in addMealToPlan:', error);
    throw error;
  }
}