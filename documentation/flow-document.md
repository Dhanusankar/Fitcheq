# Fitness Tracking App - Project Documentation

## 1. Project Overview

The Fitness Tracking App is a comprehensive web application designed to help users track their fitness journey, nutrition, and exercise routines. The application features user authentication, exercise logging, meal tracking, and personalized fitness goals.

## 2. Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (serverless functions)
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS

## 3. Project Structure

```
fitness-tracking-app/
├── .env.local              # Environment variables
├── src/                    # Source code
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── api/            # API routes (serverless functions)
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── login/          # Login page
│   │   ├── register/       # Registration page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable UI components
│   │   └── ui/             # UI components library
│   ├── lib/                # Utility functions and database code
│   │   ├── auth.ts         # Authentication utilities
│   │   ├── db.ts           # Database connection and query utilities
│   │   ├── init-db.ts      # Database initialization
│   │   └── seed-db.ts      # Database seeding with initial data
│   ├── providers/          # React context providers
│   └── types/              # TypeScript type definitions
└── .documentation/         # Project documentation
    └── flow-document.md    # This document
```

## 4. Database Schema

The application uses PostgreSQL with the following tables:

1. **users**: Stores user account information and profile data
   - id, name, email, password, age, gender, weight, height, bmi, fitness_goal, dietary_preference, dietary_restrictions, avatar_url, age_range, created_at, updated_at

2. **exercises**: Stores exercise information
   - id, name, category, description, muscle_groups, equipment, difficulty, created_at

3. **exercise_logs**: Tracks user exercise activities
   - id, user_id, exercise_id, exercise_name, sets, reps, weight, duration, intensity, notes, completed_at, created_at

4. **meals**: Stores meal information
   - id, name, category, calories, protein, carbs, fats, image_url, description, created_at

5. **meal_logs**: Tracks user meal consumption
   - id, user_id, meal_id, meal_name, portion, calories, protein, carbs, fats, meal_time, notes, consumed_at, created_at

6. **water_logs**: Tracks user water intake
   - id, user_id, amount_ml, logged_at, created_at

7. **weight_logs**: Tracks user weight changes
   - id, user_id, weight, logged_at, created_at

8. **workout_plans**: Stores workout plans
   - id, user_id, name, description, goal, frequency, duration_weeks, active, created_at, updated_at

9. **workout_plan_exercises**: Junction table for workout plans and exercises
   - id, workout_plan_id, exercise_id, exercise_name, day_of_week, sets, reps, weight, duration, created_at

## 5. Key Components and Files

### Authentication

- **src/app/api/auth/[...nextauth]/route.ts**: NextAuth.js configuration and route handlers
- **src/app/login/page.tsx**: Login page component
- **src/app/register/page.tsx**: Registration page component
- **src/app/api/register/route.ts**: User registration API endpoint

### Database

- **src/lib/db.ts**: Core database connection and query functions
- **src/lib/init-db.ts**: Database initialization with table creation
- **src/lib/seed-db.ts**: Seeding the database with initial exercise and meal data

### Core Features

#### Dashboard

- **src/app/dashboard/page.tsx**: Main dashboard page after login
- **src/app/dashboard/profile/page.tsx**: User profile management
- **src/app/dashboard/exercises/page.tsx**: Exercise tracking and history
- **src/app/dashboard/nutrition/page.tsx**: Nutrition tracking and history

#### Exercise Management

- **src/app/api/exercises/route.ts**: API endpoints for exercise CRUD operations
- **src/app/api/exercise-logs/route.ts**: API endpoints for logging exercise activities

#### Nutrition Management

- **src/app/api/meals/route.ts**: API endpoints for meal CRUD operations
- **src/app/api/meal-logs/route.ts**: API endpoints for logging meal consumption
- **src/app/api/nutrition-logs/route.ts**: API endpoints for tracking nutrition data

## 6. Application Flow

### User Authentication Flow

1. **Registration**:
   - User fills out registration form with name, email, password, and optional profile data
   - Client sends POST request to `/api/register`
   - Server validates data, checks for existing users, and creates a new user
   - Password is hashed with bcrypt before storing
   - User is redirected to login page

2. **Login**:
   - User enters email and password
   - NextAuth.js authenticates the user against the database
   - Upon successful authentication, a JWT session is created
   - User is redirected to dashboard

### Exercise Tracking Flow

1. User selects or searches for an exercise from the database
2. User enters details (sets, reps, weight, duration, etc.)
3. Data is sent to `/api/exercise-logs` API endpoint
4. Server validates and stores the exercise log
5. User can view exercise history and progress charts

### Meal Tracking Flow

1. User selects or searches for a meal from the database
2. User enters details (portion, meal time, etc.)
3. Data is sent to `/api/meal-logs` API endpoint
4. Server validates and stores the meal log
5. User can view nutrition history and calorie intake charts

## 7. Environment Configuration

The application uses environment variables defined in `.env.local`:

- Database connection parameters (POSTGRES_HOST, POSTGRES_PORT, etc.)
- NextAuth.js configuration (NEXTAUTH_URL, NEXTAUTH_SECRET)

## 8. API Endpoints

### Authentication
- **POST /api/register**: Register a new user
- **POST /api/auth/signin**: Log in a user
- **GET /api/auth/signout**: Log out a user

### User Profile
- **GET /api/user**: Get current user profile
- **PUT /api/user**: Update user profile

### Exercises
- **GET /api/exercises**: Get all exercises
- **POST /api/exercises**: Create a new exercise
- **GET /api/exercises/:id**: Get a specific exercise
- **PUT /api/exercises/:id**: Update an exercise
- **DELETE /api/exercises/:id**: Delete an exercise

### Exercise Logs
- **GET /api/exercise-logs**: Get user's exercise logs
- **POST /api/exercise-logs**: Create a new exercise log
- **PUT /api/exercise-logs/:id**: Update an exercise log
- **DELETE /api/exercise-logs/:id**: Delete an exercise log

### Meals
- **GET /api/meals**: Get all meals
- **POST /api/meals**: Create a new meal
- **GET /api/meals/:id**: Get a specific meal
- **PUT /api/meals/:id**: Update a meal
- **DELETE /api/meals/:id**: Delete a meal

### Meal Logs
- **GET /api/meal-logs**: Get user's meal logs
- **POST /api/meal-logs**: Create a new meal log
- **PUT /api/meal-logs/:id**: Update a meal log
- **DELETE /api/meal-logs/:id**: Delete a meal log

### Nutrition Logs
- **GET /api/nutrition-logs**: Get user's nutrition data
- **POST /api/nutrition-logs**: Log nutrition data
- **GET /api/nutrition-logs/summary**: Get nutrition summary by day/week/month

## 9. Database Initialization and Seeding

The application performs two important database operations on startup:

1. **Initialization**: `src/lib/init-db.ts` creates the necessary database tables if they don't exist
2. **Seeding**: `src/lib/seed-db.ts` populates the database with initial exercise and meal data

These processes ensure that the application has the necessary data structure and baseline data to function properly.

## 10. Error Handling

The application implements comprehensive error handling:

- API routes include try/catch blocks with specific error messages
- Database operations have error handling with detailed logging
- Frontend components handle loading states and error displays
- User-friendly error messages are displayed for common issues

### Registration Error Handling

The registration API (`src/app/api/register/route.ts`) includes specific error handling for:
- Missing required fields
- Age validation
- Existing user conflicts
- Database connection issues
- Database initialization failures

## 11. Future Enhancements

Potential areas for future development:

1. **Social Features**: Friend connections, sharing achievements, and community challenges
2. **Advanced Analytics**: Detailed progress tracking, goal prediction, and personalized recommendations
3. **Integration with Fitness Devices**: Support for fitness trackers and smartwatches
4. **Mobile App**: Native mobile applications for iOS and Android
5. **AI-Powered Recommendations**: Personalized exercise and nutrition suggestions based on user data and goals
