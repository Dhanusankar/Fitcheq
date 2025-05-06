
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Exercise_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  exercise_id: 'exercise_id',
  exercise_name: 'exercise_name',
  sets: 'sets',
  reps: 'reps',
  weight: 'weight',
  duration: 'duration',
  intensity: 'intensity',
  notes: 'notes',
  completed_at: 'completed_at',
  created_at: 'created_at'
};

exports.Prisma.ExercisesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  description: 'description',
  muscle_groups: 'muscle_groups',
  equipment: 'equipment',
  difficulty: 'difficulty',
  created_at: 'created_at'
};

exports.Prisma.Meal_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  meal_id: 'meal_id',
  meal_name: 'meal_name',
  portion: 'portion',
  calories: 'calories',
  protein: 'protein',
  carbs: 'carbs',
  fats: 'fats',
  meal_time: 'meal_time',
  notes: 'notes',
  consumed_at: 'consumed_at',
  created_at: 'created_at'
};

exports.Prisma.MealsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  calories: 'calories',
  protein: 'protein',
  carbs: 'carbs',
  fats: 'fats',
  image_url: 'image_url',
  description: 'description',
  created_at: 'created_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  age: 'age',
  gender: 'gender',
  weight: 'weight',
  height: 'height',
  bmi: 'bmi',
  fitness_goal: 'fitness_goal',
  dietary_preference: 'dietary_preference',
  dietary_restrictions: 'dietary_restrictions',
  avatar_url: 'avatar_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  age_range: 'age_range'
};

exports.Prisma.Water_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  amount_ml: 'amount_ml',
  logged_at: 'logged_at',
  created_at: 'created_at'
};

exports.Prisma.Weight_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  weight: 'weight',
  logged_at: 'logged_at',
  created_at: 'created_at'
};

exports.Prisma.Workout_plan_exercisesScalarFieldEnum = {
  id: 'id',
  workout_plan_id: 'workout_plan_id',
  exercise_id: 'exercise_id',
  exercise_name: 'exercise_name',
  day_of_week: 'day_of_week',
  sets: 'sets',
  reps: 'reps',
  weight: 'weight',
  duration: 'duration',
  completed: 'completed',
  completion_date: 'completion_date',
  actual_sets: 'actual_sets',
  actual_reps: 'actual_reps',
  actual_weight: 'actual_weight',
  actual_duration: 'actual_duration',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Workout_plansScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  description: 'description',
  goal: 'goal',
  frequency: 'frequency',
  duration_weeks: 'duration_weeks',
  active: 'active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  exercise_logs: 'exercise_logs',
  exercises: 'exercises',
  meal_logs: 'meal_logs',
  meals: 'meals',
  users: 'users',
  water_logs: 'water_logs',
  weight_logs: 'weight_logs',
  workout_plan_exercises: 'workout_plan_exercises',
  workout_plans: 'workout_plans'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
