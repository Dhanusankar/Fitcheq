# Fitcheq: Adaptive Fitness & Nutrition Tracker

A comprehensive web application for adults to improve and maintain fitness through guided exercise and diet planning, focusing on muscle building, fat control, and cardiovascular health.

![Fitness Tracker Dashboard](screenshots/dashboard.png)

## Features

- **User Profile Setup**: Create a profile with age, gender, weight, height, fitness goals, and dietary preferences
- **Session Management**: Persistent user sessions with real-time updates when profile settings change
- **Exercise Library**: Browse categorized exercises mapped to specific fitness goals with detailed metadata
- **Workout Plans**: Generate personalized weekly/monthly exercise programs based on your goals and preferences
  - Create and manage multiple workout plans
  - Track exercise completion and progress
  - Automatic deletion of associated meal plans when a workout plan is deleted
- **Nutrition Tracking**: Log meals, track daily nutrition, and get summaries of your calorie, protein, carb, and fat intake
- **Diet Planning**: Receive diet plans aligned with your fitness goals and dietary preferences
- **Progress Tracking**: Monitor your fitness journey with detailed logs and visualizations
- **Customization**: Update your profile and preferences to get adaptive recommendations
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices
- **Toast Notifications**: Intuitive feedback system for user actions and application events

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Next.js API Routes (serverless functions)
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **UI Components**: ShadCN
- **Styling**: Tailwind CSS
- **Notifications**: React Hot Toast
- **Deployment**: Ready for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- PostgreSQL database

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/fitness-tracking-app.git
   cd fitness-tracking-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   # Database
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/fitness_game"
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=your_password
   POSTGRES_DATABASE=fitness_game
   
   # Next Auth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_DEBUG=true
   ```

4. Set up Prisma and initialize the database
   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Create database tables (if running for the first time)
   npx prisma migrate dev --name init

   # Seed the database with initial data (optional)
   npm run db:init
   # or 
   yarn db:init
   ```

5. Start Prisma Studio (optional)
   ```bash
   # Launch Prisma Studio to view/edit database
   npx prisma studio
   ```
   This will open Prisma Studio at [http://localhost:5555](http://localhost:5555)

   Note: If you get permission errors when running Prisma commands on Windows:
   1. Close VS Code/your editor and any terminal windows
   2. Open Command Prompt as Administrator
   3. Navigate to your project directory:
      ```cmd
      cd D:\Projects\fitness-tracking-app
      ```
   4. Run the Prisma commands again

6. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser

### Quick Setup Guide

For a new system setup, here's the complete sequence of commands to get the project running:

```bash
# 1. Clone the repository and navigate to the directory
git clone https://github.com/yourusername/fitness-tracking-app.git
cd fitness-tracking-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Set up environment variables
# Create a .env file with required variables as shown in the Installation section above

# 4. Initialize the database with Prisma
npx prisma generate
npx prisma migrate dev --name init

# 5. Populate the database with sample data
node scripts/add-exercises.js
node scripts/add-meals.js

# 6. Start the development server
npm run dev
# or
yarn dev
```

Note: You need to have PostgreSQL installed and running on your system before running the Prisma commands.

## Database Management

### Prisma Database Commands

```bash
# Generate Prisma Client after schema changes
npx prisma generate

# Create database migrations from schema changes
npx prisma migrate dev --name <migration_name>

# Apply migrations to production/staging database
npx prisma migrate deploy

# Reset database (drops all tables and recreates them)
npx prisma migrate reset --force

# View and edit database with Prisma Studio
npx prisma studio
```

### Populating the Database with Sample Data

To populate your database with sample exercises, meals, and meal plans, use the following commands:

```bash
# Add exercise data to the database
node scripts/add-exercises.js

# Add more exercises (additional set)
node scripts/add-more-exercises.js

# Add meal data to the database
node scripts/add-meals.js

# Generate sample meal plans
node scripts/generate-meal-plan.js
```

### Checking Database Content

To check the content of your database:

```bash
# Check exercises in the database
node scripts/check-exercises.js

# Check meals in the database
node scripts/check-meals.js
```

## Usage

### Registration and Login

1. Create a new account or log in with existing credentials
2. Complete your profile with personal details, fitness goals, and dietary preferences

### User Profile Management

1. Access your profile from the dashboard or navigation menu
2. Update personal information, fitness goals, and preferences
3. Changes to your profile will automatically update throughout the application

### Workout Plans

1. Navigate to the Workout Plans section from the dashboard
2. Generate a new workout plan based on your goals, fitness level, and available equipment
3. View your plan details organized by days of the week
4. Track your progress as you complete workouts

### Exercise Tracking

1. Browse the exercise library categorized by muscle groups and equipment
2. Log completed exercises with sets, reps, weight, and duration
3. View your exercise history and track progress over time

### Nutrition Tracking

1. Navigate to the Nutrition Tracker from the dashboard
2. Browse the meal library or search for specific foods
3. Log meals with portion sizes and timing
4. Add custom meals when needed
5. View your nutritional intake summary and meal history

## Project Structure

```
fitness-tracking-app/
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
│   │   └── auth.ts         # NextAuth configuration
│   ├── providers/          # React context providers
│   │   └── AuthProvider.tsx # Authentication provider
│   └── types/              # TypeScript type definitions
│       └── next-auth.d.ts  # NextAuth type extensions
├── prisma/                 # Prisma schema and migrations
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
└── .documentation/         # Project documentation
```

## Data Management

### Session Management
- Real-time session updates when profile changes are made
- Persistent user session with JWT authentication strategy
- Session data accessible throughout the application
- Automatic update of session when profile is modified

### User Profile Updates
- Changes to user profile data (including fitness goals) instantly update the session
- Toast notifications provide immediate feedback on profile changes
- Robust error handling with timeouts to prevent UI freezes
- Graceful fallbacks for network issues or server errors

### Workout and Meal Plan Relationships
- Workout plans can have associated meal plans for comprehensive fitness tracking
- When a workout plan is deleted:
  1. All associated workout exercises are removed
  2. All meal plan items from linked meal plans are deleted
  3. All associated meal plans are deleted
  4. The workout plan itself is deleted
- All deletions are handled within a transaction to maintain data integrity
