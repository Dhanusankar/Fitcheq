
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model exercise_logs
 * 
 */
export type exercise_logs = $Result.DefaultSelection<Prisma.$exercise_logsPayload>
/**
 * Model exercises
 * 
 */
export type exercises = $Result.DefaultSelection<Prisma.$exercisesPayload>
/**
 * Model meal_logs
 * 
 */
export type meal_logs = $Result.DefaultSelection<Prisma.$meal_logsPayload>
/**
 * Model meals
 * 
 */
export type meals = $Result.DefaultSelection<Prisma.$mealsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model water_logs
 * 
 */
export type water_logs = $Result.DefaultSelection<Prisma.$water_logsPayload>
/**
 * Model weight_logs
 * 
 */
export type weight_logs = $Result.DefaultSelection<Prisma.$weight_logsPayload>
/**
 * Model workout_plan_exercises
 * 
 */
export type workout_plan_exercises = $Result.DefaultSelection<Prisma.$workout_plan_exercisesPayload>
/**
 * Model workout_plans
 * 
 */
export type workout_plans = $Result.DefaultSelection<Prisma.$workout_plansPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Exercise_logs
 * const exercise_logs = await prisma.exercise_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Exercise_logs
   * const exercise_logs = await prisma.exercise_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.exercise_logs`: Exposes CRUD operations for the **exercise_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercise_logs
    * const exercise_logs = await prisma.exercise_logs.findMany()
    * ```
    */
  get exercise_logs(): Prisma.exercise_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercises`: Exposes CRUD operations for the **exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.exercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal_logs`: Exposes CRUD operations for the **meal_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meal_logs
    * const meal_logs = await prisma.meal_logs.findMany()
    * ```
    */
  get meal_logs(): Prisma.meal_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meals`: Exposes CRUD operations for the **meals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meals.findMany()
    * ```
    */
  get meals(): Prisma.mealsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.water_logs`: Exposes CRUD operations for the **water_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Water_logs
    * const water_logs = await prisma.water_logs.findMany()
    * ```
    */
  get water_logs(): Prisma.water_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weight_logs`: Exposes CRUD operations for the **weight_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weight_logs
    * const weight_logs = await prisma.weight_logs.findMany()
    * ```
    */
  get weight_logs(): Prisma.weight_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout_plan_exercises`: Exposes CRUD operations for the **workout_plan_exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workout_plan_exercises
    * const workout_plan_exercises = await prisma.workout_plan_exercises.findMany()
    * ```
    */
  get workout_plan_exercises(): Prisma.workout_plan_exercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout_plans`: Exposes CRUD operations for the **workout_plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workout_plans
    * const workout_plans = await prisma.workout_plans.findMany()
    * ```
    */
  get workout_plans(): Prisma.workout_plansDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "exercise_logs" | "exercises" | "meal_logs" | "meals" | "users" | "water_logs" | "weight_logs" | "workout_plan_exercises" | "workout_plans"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      exercise_logs: {
        payload: Prisma.$exercise_logsPayload<ExtArgs>
        fields: Prisma.exercise_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exercise_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exercise_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>
          }
          findFirst: {
            args: Prisma.exercise_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exercise_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>
          }
          findMany: {
            args: Prisma.exercise_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>[]
          }
          create: {
            args: Prisma.exercise_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>
          }
          createMany: {
            args: Prisma.exercise_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exercise_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>[]
          }
          delete: {
            args: Prisma.exercise_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>
          }
          update: {
            args: Prisma.exercise_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>
          }
          deleteMany: {
            args: Prisma.exercise_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exercise_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exercise_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>[]
          }
          upsert: {
            args: Prisma.exercise_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercise_logsPayload>
          }
          aggregate: {
            args: Prisma.Exercise_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise_logs>
          }
          groupBy: {
            args: Prisma.exercise_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exercise_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.exercise_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Exercise_logsCountAggregateOutputType> | number
          }
        }
      }
      exercises: {
        payload: Prisma.$exercisesPayload<ExtArgs>
        fields: Prisma.exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findFirst: {
            args: Prisma.exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findMany: {
            args: Prisma.exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          create: {
            args: Prisma.exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          createMany: {
            args: Prisma.exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          delete: {
            args: Prisma.exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          update: {
            args: Prisma.exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          deleteMany: {
            args: Prisma.exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          upsert: {
            args: Prisma.exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          aggregate: {
            args: Prisma.ExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercises>
          }
          groupBy: {
            args: Prisma.exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercisesCountAggregateOutputType> | number
          }
        }
      }
      meal_logs: {
        payload: Prisma.$meal_logsPayload<ExtArgs>
        fields: Prisma.meal_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meal_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meal_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>
          }
          findFirst: {
            args: Prisma.meal_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meal_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>
          }
          findMany: {
            args: Prisma.meal_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>[]
          }
          create: {
            args: Prisma.meal_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>
          }
          createMany: {
            args: Prisma.meal_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.meal_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>[]
          }
          delete: {
            args: Prisma.meal_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>
          }
          update: {
            args: Prisma.meal_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>
          }
          deleteMany: {
            args: Prisma.meal_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meal_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.meal_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>[]
          }
          upsert: {
            args: Prisma.meal_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meal_logsPayload>
          }
          aggregate: {
            args: Prisma.Meal_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal_logs>
          }
          groupBy: {
            args: Prisma.meal_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meal_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.meal_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Meal_logsCountAggregateOutputType> | number
          }
        }
      }
      meals: {
        payload: Prisma.$mealsPayload<ExtArgs>
        fields: Prisma.mealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mealsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mealsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          findFirst: {
            args: Prisma.mealsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mealsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          findMany: {
            args: Prisma.mealsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>[]
          }
          create: {
            args: Prisma.mealsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          createMany: {
            args: Prisma.mealsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mealsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>[]
          }
          delete: {
            args: Prisma.mealsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          update: {
            args: Prisma.mealsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          deleteMany: {
            args: Prisma.mealsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mealsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mealsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>[]
          }
          upsert: {
            args: Prisma.mealsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mealsPayload>
          }
          aggregate: {
            args: Prisma.MealsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeals>
          }
          groupBy: {
            args: Prisma.mealsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mealsCountArgs<ExtArgs>
            result: $Utils.Optional<MealsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      water_logs: {
        payload: Prisma.$water_logsPayload<ExtArgs>
        fields: Prisma.water_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.water_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.water_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>
          }
          findFirst: {
            args: Prisma.water_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.water_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>
          }
          findMany: {
            args: Prisma.water_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>[]
          }
          create: {
            args: Prisma.water_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>
          }
          createMany: {
            args: Prisma.water_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.water_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>[]
          }
          delete: {
            args: Prisma.water_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>
          }
          update: {
            args: Prisma.water_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>
          }
          deleteMany: {
            args: Prisma.water_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.water_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.water_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>[]
          }
          upsert: {
            args: Prisma.water_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$water_logsPayload>
          }
          aggregate: {
            args: Prisma.Water_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWater_logs>
          }
          groupBy: {
            args: Prisma.water_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Water_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.water_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Water_logsCountAggregateOutputType> | number
          }
        }
      }
      weight_logs: {
        payload: Prisma.$weight_logsPayload<ExtArgs>
        fields: Prisma.weight_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.weight_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.weight_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>
          }
          findFirst: {
            args: Prisma.weight_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.weight_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>
          }
          findMany: {
            args: Prisma.weight_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>[]
          }
          create: {
            args: Prisma.weight_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>
          }
          createMany: {
            args: Prisma.weight_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.weight_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>[]
          }
          delete: {
            args: Prisma.weight_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>
          }
          update: {
            args: Prisma.weight_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>
          }
          deleteMany: {
            args: Prisma.weight_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.weight_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.weight_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>[]
          }
          upsert: {
            args: Prisma.weight_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$weight_logsPayload>
          }
          aggregate: {
            args: Prisma.Weight_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeight_logs>
          }
          groupBy: {
            args: Prisma.weight_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Weight_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.weight_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Weight_logsCountAggregateOutputType> | number
          }
        }
      }
      workout_plan_exercises: {
        payload: Prisma.$workout_plan_exercisesPayload<ExtArgs>
        fields: Prisma.workout_plan_exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workout_plan_exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workout_plan_exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>
          }
          findFirst: {
            args: Prisma.workout_plan_exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workout_plan_exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>
          }
          findMany: {
            args: Prisma.workout_plan_exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>[]
          }
          create: {
            args: Prisma.workout_plan_exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>
          }
          createMany: {
            args: Prisma.workout_plan_exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workout_plan_exercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>[]
          }
          delete: {
            args: Prisma.workout_plan_exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>
          }
          update: {
            args: Prisma.workout_plan_exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>
          }
          deleteMany: {
            args: Prisma.workout_plan_exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workout_plan_exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workout_plan_exercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>[]
          }
          upsert: {
            args: Prisma.workout_plan_exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plan_exercisesPayload>
          }
          aggregate: {
            args: Prisma.Workout_plan_exercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout_plan_exercises>
          }
          groupBy: {
            args: Prisma.workout_plan_exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workout_plan_exercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workout_plan_exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<Workout_plan_exercisesCountAggregateOutputType> | number
          }
        }
      }
      workout_plans: {
        payload: Prisma.$workout_plansPayload<ExtArgs>
        fields: Prisma.workout_plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workout_plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workout_plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          findFirst: {
            args: Prisma.workout_plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workout_plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          findMany: {
            args: Prisma.workout_plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>[]
          }
          create: {
            args: Prisma.workout_plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          createMany: {
            args: Prisma.workout_plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workout_plansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>[]
          }
          delete: {
            args: Prisma.workout_plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          update: {
            args: Prisma.workout_plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          deleteMany: {
            args: Prisma.workout_plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workout_plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workout_plansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>[]
          }
          upsert: {
            args: Prisma.workout_plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_plansPayload>
          }
          aggregate: {
            args: Prisma.Workout_plansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout_plans>
          }
          groupBy: {
            args: Prisma.workout_plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workout_plansGroupByOutputType>[]
          }
          count: {
            args: Prisma.workout_plansCountArgs<ExtArgs>
            result: $Utils.Optional<Workout_plansCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    exercise_logs?: exercise_logsOmit
    exercises?: exercisesOmit
    meal_logs?: meal_logsOmit
    meals?: mealsOmit
    users?: usersOmit
    water_logs?: water_logsOmit
    weight_logs?: weight_logsOmit
    workout_plan_exercises?: workout_plan_exercisesOmit
    workout_plans?: workout_plansOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExercisesCountOutputType
   */

  export type ExercisesCountOutputType = {
    exercise_logs: number
    workout_plan_exercises: number
  }

  export type ExercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise_logs?: boolean | ExercisesCountOutputTypeCountExercise_logsArgs
    workout_plan_exercises?: boolean | ExercisesCountOutputTypeCountWorkout_plan_exercisesArgs
  }

  // Custom InputTypes
  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExercisesCountOutputType
     */
    select?: ExercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountExercise_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercise_logsWhereInput
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountWorkout_plan_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plan_exercisesWhereInput
  }


  /**
   * Count Type MealsCountOutputType
   */

  export type MealsCountOutputType = {
    meal_logs: number
  }

  export type MealsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_logs?: boolean | MealsCountOutputTypeCountMeal_logsArgs
  }

  // Custom InputTypes
  /**
   * MealsCountOutputType without action
   */
  export type MealsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealsCountOutputType
     */
    select?: MealsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealsCountOutputType without action
   */
  export type MealsCountOutputTypeCountMeal_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_logsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    exercise_logs: number
    meal_logs: number
    water_logs: number
    weight_logs: number
    workout_plans: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise_logs?: boolean | UsersCountOutputTypeCountExercise_logsArgs
    meal_logs?: boolean | UsersCountOutputTypeCountMeal_logsArgs
    water_logs?: boolean | UsersCountOutputTypeCountWater_logsArgs
    weight_logs?: boolean | UsersCountOutputTypeCountWeight_logsArgs
    workout_plans?: boolean | UsersCountOutputTypeCountWorkout_plansArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExercise_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercise_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMeal_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWater_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: water_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWeight_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weight_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plansWhereInput
  }


  /**
   * Count Type Workout_plansCountOutputType
   */

  export type Workout_plansCountOutputType = {
    workout_plan_exercises: number
  }

  export type Workout_plansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plan_exercises?: boolean | Workout_plansCountOutputTypeCountWorkout_plan_exercisesArgs
  }

  // Custom InputTypes
  /**
   * Workout_plansCountOutputType without action
   */
  export type Workout_plansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout_plansCountOutputType
     */
    select?: Workout_plansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Workout_plansCountOutputType without action
   */
  export type Workout_plansCountOutputTypeCountWorkout_plan_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plan_exercisesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model exercise_logs
   */

  export type AggregateExercise_logs = {
    _count: Exercise_logsCountAggregateOutputType | null
    _avg: Exercise_logsAvgAggregateOutputType | null
    _sum: Exercise_logsSumAggregateOutputType | null
    _min: Exercise_logsMinAggregateOutputType | null
    _max: Exercise_logsMaxAggregateOutputType | null
  }

  export type Exercise_logsAvgAggregateOutputType = {
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
  }

  export type Exercise_logsSumAggregateOutputType = {
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
  }

  export type Exercise_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    exercise_id: string | null
    exercise_name: string | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    intensity: string | null
    notes: string | null
    completed_at: Date | null
    created_at: Date | null
  }

  export type Exercise_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    exercise_id: string | null
    exercise_name: string | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    intensity: string | null
    notes: string | null
    completed_at: Date | null
    created_at: Date | null
  }

  export type Exercise_logsCountAggregateOutputType = {
    id: number
    user_id: number
    exercise_id: number
    exercise_name: number
    sets: number
    reps: number
    weight: number
    duration: number
    intensity: number
    notes: number
    completed_at: number
    created_at: number
    _all: number
  }


  export type Exercise_logsAvgAggregateInputType = {
    sets?: true
    reps?: true
    weight?: true
    duration?: true
  }

  export type Exercise_logsSumAggregateInputType = {
    sets?: true
    reps?: true
    weight?: true
    duration?: true
  }

  export type Exercise_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    exercise_id?: true
    exercise_name?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    intensity?: true
    notes?: true
    completed_at?: true
    created_at?: true
  }

  export type Exercise_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    exercise_id?: true
    exercise_name?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    intensity?: true
    notes?: true
    completed_at?: true
    created_at?: true
  }

  export type Exercise_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    exercise_id?: true
    exercise_name?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    intensity?: true
    notes?: true
    completed_at?: true
    created_at?: true
    _all?: true
  }

  export type Exercise_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercise_logs to aggregate.
     */
    where?: exercise_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercise_logs to fetch.
     */
    orderBy?: exercise_logsOrderByWithRelationInput | exercise_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exercise_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercise_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercise_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercise_logs
    **/
    _count?: true | Exercise_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Exercise_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Exercise_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exercise_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exercise_logsMaxAggregateInputType
  }

  export type GetExercise_logsAggregateType<T extends Exercise_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise_logs[P]>
      : GetScalarType<T[P], AggregateExercise_logs[P]>
  }




  export type exercise_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercise_logsWhereInput
    orderBy?: exercise_logsOrderByWithAggregationInput | exercise_logsOrderByWithAggregationInput[]
    by: Exercise_logsScalarFieldEnum[] | Exercise_logsScalarFieldEnum
    having?: exercise_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exercise_logsCountAggregateInputType | true
    _avg?: Exercise_logsAvgAggregateInputType
    _sum?: Exercise_logsSumAggregateInputType
    _min?: Exercise_logsMinAggregateInputType
    _max?: Exercise_logsMaxAggregateInputType
  }

  export type Exercise_logsGroupByOutputType = {
    id: string
    user_id: string
    exercise_id: string | null
    exercise_name: string | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    intensity: string | null
    notes: string | null
    completed_at: Date
    created_at: Date | null
    _count: Exercise_logsCountAggregateOutputType | null
    _avg: Exercise_logsAvgAggregateOutputType | null
    _sum: Exercise_logsSumAggregateOutputType | null
    _min: Exercise_logsMinAggregateOutputType | null
    _max: Exercise_logsMaxAggregateOutputType | null
  }

  type GetExercise_logsGroupByPayload<T extends exercise_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exercise_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exercise_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exercise_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Exercise_logsGroupByOutputType[P]>
        }
      >
    >


  export type exercise_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    intensity?: boolean
    notes?: boolean
    completed_at?: boolean
    created_at?: boolean
    exercises?: boolean | exercise_logs$exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise_logs"]>

  export type exercise_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    intensity?: boolean
    notes?: boolean
    completed_at?: boolean
    created_at?: boolean
    exercises?: boolean | exercise_logs$exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise_logs"]>

  export type exercise_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    intensity?: boolean
    notes?: boolean
    completed_at?: boolean
    created_at?: boolean
    exercises?: boolean | exercise_logs$exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise_logs"]>

  export type exercise_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    intensity?: boolean
    notes?: boolean
    completed_at?: boolean
    created_at?: boolean
  }

  export type exercise_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "exercise_id" | "exercise_name" | "sets" | "reps" | "weight" | "duration" | "intensity" | "notes" | "completed_at" | "created_at", ExtArgs["result"]["exercise_logs"]>
  export type exercise_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercise_logs$exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type exercise_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercise_logs$exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type exercise_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercise_logs$exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $exercise_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercise_logs"
    objects: {
      exercises: Prisma.$exercisesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      exercise_id: string | null
      exercise_name: string | null
      sets: number | null
      reps: number | null
      weight: Prisma.Decimal | null
      duration: number | null
      intensity: string | null
      notes: string | null
      completed_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["exercise_logs"]>
    composites: {}
  }

  type exercise_logsGetPayload<S extends boolean | null | undefined | exercise_logsDefaultArgs> = $Result.GetResult<Prisma.$exercise_logsPayload, S>

  type exercise_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exercise_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exercise_logsCountAggregateInputType | true
    }

  export interface exercise_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercise_logs'], meta: { name: 'exercise_logs' } }
    /**
     * Find zero or one Exercise_logs that matches the filter.
     * @param {exercise_logsFindUniqueArgs} args - Arguments to find a Exercise_logs
     * @example
     * // Get one Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exercise_logsFindUniqueArgs>(args: SelectSubset<T, exercise_logsFindUniqueArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exercise_logsFindUniqueOrThrowArgs} args - Arguments to find a Exercise_logs
     * @example
     * // Get one Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exercise_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, exercise_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercise_logsFindFirstArgs} args - Arguments to find a Exercise_logs
     * @example
     * // Get one Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exercise_logsFindFirstArgs>(args?: SelectSubset<T, exercise_logsFindFirstArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercise_logsFindFirstOrThrowArgs} args - Arguments to find a Exercise_logs
     * @example
     * // Get one Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exercise_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, exercise_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercise_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercise_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.findMany()
     * 
     * // Get first 10 Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercise_logsWithIdOnly = await prisma.exercise_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exercise_logsFindManyArgs>(args?: SelectSubset<T, exercise_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise_logs.
     * @param {exercise_logsCreateArgs} args - Arguments to create a Exercise_logs.
     * @example
     * // Create one Exercise_logs
     * const Exercise_logs = await prisma.exercise_logs.create({
     *   data: {
     *     // ... data to create a Exercise_logs
     *   }
     * })
     * 
     */
    create<T extends exercise_logsCreateArgs>(args: SelectSubset<T, exercise_logsCreateArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercise_logs.
     * @param {exercise_logsCreateManyArgs} args - Arguments to create many Exercise_logs.
     * @example
     * // Create many Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exercise_logsCreateManyArgs>(args?: SelectSubset<T, exercise_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercise_logs and returns the data saved in the database.
     * @param {exercise_logsCreateManyAndReturnArgs} args - Arguments to create many Exercise_logs.
     * @example
     * // Create many Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercise_logs and only return the `id`
     * const exercise_logsWithIdOnly = await prisma.exercise_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exercise_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, exercise_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise_logs.
     * @param {exercise_logsDeleteArgs} args - Arguments to delete one Exercise_logs.
     * @example
     * // Delete one Exercise_logs
     * const Exercise_logs = await prisma.exercise_logs.delete({
     *   where: {
     *     // ... filter to delete one Exercise_logs
     *   }
     * })
     * 
     */
    delete<T extends exercise_logsDeleteArgs>(args: SelectSubset<T, exercise_logsDeleteArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise_logs.
     * @param {exercise_logsUpdateArgs} args - Arguments to update one Exercise_logs.
     * @example
     * // Update one Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exercise_logsUpdateArgs>(args: SelectSubset<T, exercise_logsUpdateArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercise_logs.
     * @param {exercise_logsDeleteManyArgs} args - Arguments to filter Exercise_logs to delete.
     * @example
     * // Delete a few Exercise_logs
     * const { count } = await prisma.exercise_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exercise_logsDeleteManyArgs>(args?: SelectSubset<T, exercise_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercise_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercise_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exercise_logsUpdateManyArgs>(args: SelectSubset<T, exercise_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercise_logs and returns the data updated in the database.
     * @param {exercise_logsUpdateManyAndReturnArgs} args - Arguments to update many Exercise_logs.
     * @example
     * // Update many Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercise_logs and only return the `id`
     * const exercise_logsWithIdOnly = await prisma.exercise_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exercise_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, exercise_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise_logs.
     * @param {exercise_logsUpsertArgs} args - Arguments to update or create a Exercise_logs.
     * @example
     * // Update or create a Exercise_logs
     * const exercise_logs = await prisma.exercise_logs.upsert({
     *   create: {
     *     // ... data to create a Exercise_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise_logs we want to update
     *   }
     * })
     */
    upsert<T extends exercise_logsUpsertArgs>(args: SelectSubset<T, exercise_logsUpsertArgs<ExtArgs>>): Prisma__exercise_logsClient<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercise_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercise_logsCountArgs} args - Arguments to filter Exercise_logs to count.
     * @example
     * // Count the number of Exercise_logs
     * const count = await prisma.exercise_logs.count({
     *   where: {
     *     // ... the filter for the Exercise_logs we want to count
     *   }
     * })
    **/
    count<T extends exercise_logsCountArgs>(
      args?: Subset<T, exercise_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exercise_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercise_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exercise_logsAggregateArgs>(args: Subset<T, Exercise_logsAggregateArgs>): Prisma.PrismaPromise<GetExercise_logsAggregateType<T>>

    /**
     * Group by Exercise_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercise_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exercise_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exercise_logsGroupByArgs['orderBy'] }
        : { orderBy?: exercise_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exercise_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercise_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercise_logs model
   */
  readonly fields: exercise_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercise_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exercise_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends exercise_logs$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, exercise_logs$exercisesArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercise_logs model
   */
  interface exercise_logsFieldRefs {
    readonly id: FieldRef<"exercise_logs", 'String'>
    readonly user_id: FieldRef<"exercise_logs", 'String'>
    readonly exercise_id: FieldRef<"exercise_logs", 'String'>
    readonly exercise_name: FieldRef<"exercise_logs", 'String'>
    readonly sets: FieldRef<"exercise_logs", 'Int'>
    readonly reps: FieldRef<"exercise_logs", 'Int'>
    readonly weight: FieldRef<"exercise_logs", 'Decimal'>
    readonly duration: FieldRef<"exercise_logs", 'Int'>
    readonly intensity: FieldRef<"exercise_logs", 'String'>
    readonly notes: FieldRef<"exercise_logs", 'String'>
    readonly completed_at: FieldRef<"exercise_logs", 'DateTime'>
    readonly created_at: FieldRef<"exercise_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exercise_logs findUnique
   */
  export type exercise_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * Filter, which exercise_logs to fetch.
     */
    where: exercise_logsWhereUniqueInput
  }

  /**
   * exercise_logs findUniqueOrThrow
   */
  export type exercise_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * Filter, which exercise_logs to fetch.
     */
    where: exercise_logsWhereUniqueInput
  }

  /**
   * exercise_logs findFirst
   */
  export type exercise_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * Filter, which exercise_logs to fetch.
     */
    where?: exercise_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercise_logs to fetch.
     */
    orderBy?: exercise_logsOrderByWithRelationInput | exercise_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercise_logs.
     */
    cursor?: exercise_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercise_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercise_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercise_logs.
     */
    distinct?: Exercise_logsScalarFieldEnum | Exercise_logsScalarFieldEnum[]
  }

  /**
   * exercise_logs findFirstOrThrow
   */
  export type exercise_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * Filter, which exercise_logs to fetch.
     */
    where?: exercise_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercise_logs to fetch.
     */
    orderBy?: exercise_logsOrderByWithRelationInput | exercise_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercise_logs.
     */
    cursor?: exercise_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercise_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercise_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercise_logs.
     */
    distinct?: Exercise_logsScalarFieldEnum | Exercise_logsScalarFieldEnum[]
  }

  /**
   * exercise_logs findMany
   */
  export type exercise_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * Filter, which exercise_logs to fetch.
     */
    where?: exercise_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercise_logs to fetch.
     */
    orderBy?: exercise_logsOrderByWithRelationInput | exercise_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercise_logs.
     */
    cursor?: exercise_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercise_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercise_logs.
     */
    skip?: number
    distinct?: Exercise_logsScalarFieldEnum | Exercise_logsScalarFieldEnum[]
  }

  /**
   * exercise_logs create
   */
  export type exercise_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a exercise_logs.
     */
    data: XOR<exercise_logsCreateInput, exercise_logsUncheckedCreateInput>
  }

  /**
   * exercise_logs createMany
   */
  export type exercise_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercise_logs.
     */
    data: exercise_logsCreateManyInput | exercise_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercise_logs createManyAndReturn
   */
  export type exercise_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * The data used to create many exercise_logs.
     */
    data: exercise_logsCreateManyInput | exercise_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * exercise_logs update
   */
  export type exercise_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a exercise_logs.
     */
    data: XOR<exercise_logsUpdateInput, exercise_logsUncheckedUpdateInput>
    /**
     * Choose, which exercise_logs to update.
     */
    where: exercise_logsWhereUniqueInput
  }

  /**
   * exercise_logs updateMany
   */
  export type exercise_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercise_logs.
     */
    data: XOR<exercise_logsUpdateManyMutationInput, exercise_logsUncheckedUpdateManyInput>
    /**
     * Filter which exercise_logs to update
     */
    where?: exercise_logsWhereInput
    /**
     * Limit how many exercise_logs to update.
     */
    limit?: number
  }

  /**
   * exercise_logs updateManyAndReturn
   */
  export type exercise_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * The data used to update exercise_logs.
     */
    data: XOR<exercise_logsUpdateManyMutationInput, exercise_logsUncheckedUpdateManyInput>
    /**
     * Filter which exercise_logs to update
     */
    where?: exercise_logsWhereInput
    /**
     * Limit how many exercise_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * exercise_logs upsert
   */
  export type exercise_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the exercise_logs to update in case it exists.
     */
    where: exercise_logsWhereUniqueInput
    /**
     * In case the exercise_logs found by the `where` argument doesn't exist, create a new exercise_logs with this data.
     */
    create: XOR<exercise_logsCreateInput, exercise_logsUncheckedCreateInput>
    /**
     * In case the exercise_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exercise_logsUpdateInput, exercise_logsUncheckedUpdateInput>
  }

  /**
   * exercise_logs delete
   */
  export type exercise_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    /**
     * Filter which exercise_logs to delete.
     */
    where: exercise_logsWhereUniqueInput
  }

  /**
   * exercise_logs deleteMany
   */
  export type exercise_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercise_logs to delete
     */
    where?: exercise_logsWhereInput
    /**
     * Limit how many exercise_logs to delete.
     */
    limit?: number
  }

  /**
   * exercise_logs.exercises
   */
  export type exercise_logs$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    where?: exercisesWhereInput
  }

  /**
   * exercise_logs without action
   */
  export type exercise_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
  }


  /**
   * Model exercises
   */

  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    difficulty: string | null
    created_at: Date | null
  }

  export type ExercisesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    difficulty: string | null
    created_at: Date | null
  }

  export type ExercisesCountAggregateOutputType = {
    id: number
    name: number
    category: number
    description: number
    muscle_groups: number
    equipment: number
    difficulty: number
    created_at: number
    _all: number
  }


  export type ExercisesMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    difficulty?: true
    created_at?: true
  }

  export type ExercisesMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    difficulty?: true
    created_at?: true
  }

  export type ExercisesCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    muscle_groups?: true
    equipment?: true
    difficulty?: true
    created_at?: true
    _all?: true
  }

  export type ExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to aggregate.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercisesWhereInput
    orderBy?: exercisesOrderByWithAggregationInput | exercisesOrderByWithAggregationInput[]
    by: ExercisesScalarFieldEnum[] | ExercisesScalarFieldEnum
    having?: exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }

  export type ExercisesGroupByOutputType = {
    id: string
    name: string
    category: string
    description: string | null
    muscle_groups: string[]
    equipment: string[]
    difficulty: string | null
    created_at: Date | null
    _count: ExercisesCountAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    muscle_groups?: boolean
    equipment?: boolean
    difficulty?: boolean
    created_at?: boolean
    exercise_logs?: boolean | exercises$exercise_logsArgs<ExtArgs>
    workout_plan_exercises?: boolean | exercises$workout_plan_exercisesArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    muscle_groups?: boolean
    equipment?: boolean
    difficulty?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    muscle_groups?: boolean
    equipment?: boolean
    difficulty?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    muscle_groups?: boolean
    equipment?: boolean
    difficulty?: boolean
    created_at?: boolean
  }

  export type exercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "description" | "muscle_groups" | "equipment" | "difficulty" | "created_at", ExtArgs["result"]["exercises"]>
  export type exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise_logs?: boolean | exercises$exercise_logsArgs<ExtArgs>
    workout_plan_exercises?: boolean | exercises$workout_plan_exercisesArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type exercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type exercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercises"
    objects: {
      exercise_logs: Prisma.$exercise_logsPayload<ExtArgs>[]
      workout_plan_exercises: Prisma.$workout_plan_exercisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      description: string | null
      muscle_groups: string[]
      equipment: string[]
      difficulty: string | null
      created_at: Date | null
    }, ExtArgs["result"]["exercises"]>
    composites: {}
  }

  type exercisesGetPayload<S extends boolean | null | undefined | exercisesDefaultArgs> = $Result.GetResult<Prisma.$exercisesPayload, S>

  type exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercises'], meta: { name: 'exercises' } }
    /**
     * Find zero or one Exercises that matches the filter.
     * @param {exercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exercisesFindUniqueArgs>(args: SelectSubset<T, exercisesFindUniqueArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exercisesFindFirstArgs>(args?: SelectSubset<T, exercisesFindFirstArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercisesWithIdOnly = await prisma.exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exercisesFindManyArgs>(args?: SelectSubset<T, exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercises.
     * @param {exercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
     */
    create<T extends exercisesCreateArgs>(args: SelectSubset<T, exercisesCreateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {exercisesCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exercisesCreateManyArgs>(args?: SelectSubset<T, exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {exercisesCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercises.
     * @param {exercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
     */
    delete<T extends exercisesDeleteArgs>(args: SelectSubset<T, exercisesDeleteArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercises.
     * @param {exercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exercisesUpdateArgs>(args: SelectSubset<T, exercisesUpdateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {exercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exercisesDeleteManyArgs>(args?: SelectSubset<T, exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exercisesUpdateManyArgs>(args: SelectSubset<T, exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {exercisesUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercises.
     * @param {exercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
     */
    upsert<T extends exercisesUpsertArgs>(args: SelectSubset<T, exercisesUpsertArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends exercisesCountArgs>(
      args?: Subset<T, exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exercisesGroupByArgs['orderBy'] }
        : { orderBy?: exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercises model
   */
  readonly fields: exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise_logs<T extends exercises$exercise_logsArgs<ExtArgs> = {}>(args?: Subset<T, exercises$exercise_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workout_plan_exercises<T extends exercises$workout_plan_exercisesArgs<ExtArgs> = {}>(args?: Subset<T, exercises$workout_plan_exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercises model
   */
  interface exercisesFieldRefs {
    readonly id: FieldRef<"exercises", 'String'>
    readonly name: FieldRef<"exercises", 'String'>
    readonly category: FieldRef<"exercises", 'String'>
    readonly description: FieldRef<"exercises", 'String'>
    readonly muscle_groups: FieldRef<"exercises", 'String[]'>
    readonly equipment: FieldRef<"exercises", 'String[]'>
    readonly difficulty: FieldRef<"exercises", 'String'>
    readonly created_at: FieldRef<"exercises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exercises findUnique
   */
  export type exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findUniqueOrThrow
   */
  export type exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findFirst
   */
  export type exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findFirstOrThrow
   */
  export type exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findMany
   */
  export type exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises create
   */
  export type exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a exercises.
     */
    data: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
  }

  /**
   * exercises createMany
   */
  export type exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercises createManyAndReturn
   */
  export type exercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercises update
   */
  export type exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a exercises.
     */
    data: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
    /**
     * Choose, which exercises to update.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises updateMany
   */
  export type exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercises updateManyAndReturn
   */
  export type exercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercises upsert
   */
  export type exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the exercises to update in case it exists.
     */
    where: exercisesWhereUniqueInput
    /**
     * In case the exercises found by the `where` argument doesn't exist, create a new exercises with this data.
     */
    create: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
    /**
     * In case the exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
  }

  /**
   * exercises delete
   */
  export type exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter which exercises to delete.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises deleteMany
   */
  export type exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to delete
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to delete.
     */
    limit?: number
  }

  /**
   * exercises.exercise_logs
   */
  export type exercises$exercise_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    where?: exercise_logsWhereInput
    orderBy?: exercise_logsOrderByWithRelationInput | exercise_logsOrderByWithRelationInput[]
    cursor?: exercise_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exercise_logsScalarFieldEnum | Exercise_logsScalarFieldEnum[]
  }

  /**
   * exercises.workout_plan_exercises
   */
  export type exercises$workout_plan_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    where?: workout_plan_exercisesWhereInput
    orderBy?: workout_plan_exercisesOrderByWithRelationInput | workout_plan_exercisesOrderByWithRelationInput[]
    cursor?: workout_plan_exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_plan_exercisesScalarFieldEnum | Workout_plan_exercisesScalarFieldEnum[]
  }

  /**
   * exercises without action
   */
  export type exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
  }


  /**
   * Model meal_logs
   */

  export type AggregateMeal_logs = {
    _count: Meal_logsCountAggregateOutputType | null
    _avg: Meal_logsAvgAggregateOutputType | null
    _sum: Meal_logsSumAggregateOutputType | null
    _min: Meal_logsMinAggregateOutputType | null
    _max: Meal_logsMaxAggregateOutputType | null
  }

  export type Meal_logsAvgAggregateOutputType = {
    portion: Decimal | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
  }

  export type Meal_logsSumAggregateOutputType = {
    portion: Decimal | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
  }

  export type Meal_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    meal_id: string | null
    meal_name: string | null
    portion: Decimal | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
    meal_time: string | null
    notes: string | null
    consumed_at: Date | null
    created_at: Date | null
  }

  export type Meal_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    meal_id: string | null
    meal_name: string | null
    portion: Decimal | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
    meal_time: string | null
    notes: string | null
    consumed_at: Date | null
    created_at: Date | null
  }

  export type Meal_logsCountAggregateOutputType = {
    id: number
    user_id: number
    meal_id: number
    meal_name: number
    portion: number
    calories: number
    protein: number
    carbs: number
    fats: number
    meal_time: number
    notes: number
    consumed_at: number
    created_at: number
    _all: number
  }


  export type Meal_logsAvgAggregateInputType = {
    portion?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
  }

  export type Meal_logsSumAggregateInputType = {
    portion?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
  }

  export type Meal_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
    meal_name?: true
    portion?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    meal_time?: true
    notes?: true
    consumed_at?: true
    created_at?: true
  }

  export type Meal_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
    meal_name?: true
    portion?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    meal_time?: true
    notes?: true
    consumed_at?: true
    created_at?: true
  }

  export type Meal_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    meal_id?: true
    meal_name?: true
    portion?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    meal_time?: true
    notes?: true
    consumed_at?: true
    created_at?: true
    _all?: true
  }

  export type Meal_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal_logs to aggregate.
     */
    where?: meal_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_logs to fetch.
     */
    orderBy?: meal_logsOrderByWithRelationInput | meal_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meal_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meal_logs
    **/
    _count?: true | Meal_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meal_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meal_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meal_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meal_logsMaxAggregateInputType
  }

  export type GetMeal_logsAggregateType<T extends Meal_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal_logs[P]>
      : GetScalarType<T[P], AggregateMeal_logs[P]>
  }




  export type meal_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meal_logsWhereInput
    orderBy?: meal_logsOrderByWithAggregationInput | meal_logsOrderByWithAggregationInput[]
    by: Meal_logsScalarFieldEnum[] | Meal_logsScalarFieldEnum
    having?: meal_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meal_logsCountAggregateInputType | true
    _avg?: Meal_logsAvgAggregateInputType
    _sum?: Meal_logsSumAggregateInputType
    _min?: Meal_logsMinAggregateInputType
    _max?: Meal_logsMaxAggregateInputType
  }

  export type Meal_logsGroupByOutputType = {
    id: string
    user_id: string
    meal_id: string | null
    meal_name: string | null
    portion: Decimal | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
    meal_time: string | null
    notes: string | null
    consumed_at: Date
    created_at: Date | null
    _count: Meal_logsCountAggregateOutputType | null
    _avg: Meal_logsAvgAggregateOutputType | null
    _sum: Meal_logsSumAggregateOutputType | null
    _min: Meal_logsMinAggregateOutputType | null
    _max: Meal_logsMaxAggregateOutputType | null
  }

  type GetMeal_logsGroupByPayload<T extends meal_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meal_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meal_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meal_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Meal_logsGroupByOutputType[P]>
        }
      >
    >


  export type meal_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    meal_name?: boolean
    portion?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    meal_time?: boolean
    notes?: boolean
    consumed_at?: boolean
    created_at?: boolean
    meals?: boolean | meal_logs$mealsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_logs"]>

  export type meal_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    meal_name?: boolean
    portion?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    meal_time?: boolean
    notes?: boolean
    consumed_at?: boolean
    created_at?: boolean
    meals?: boolean | meal_logs$mealsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_logs"]>

  export type meal_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    meal_name?: boolean
    portion?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    meal_time?: boolean
    notes?: boolean
    consumed_at?: boolean
    created_at?: boolean
    meals?: boolean | meal_logs$mealsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal_logs"]>

  export type meal_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    meal_id?: boolean
    meal_name?: boolean
    portion?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    meal_time?: boolean
    notes?: boolean
    consumed_at?: boolean
    created_at?: boolean
  }

  export type meal_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "meal_id" | "meal_name" | "portion" | "calories" | "protein" | "carbs" | "fats" | "meal_time" | "notes" | "consumed_at" | "created_at", ExtArgs["result"]["meal_logs"]>
  export type meal_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | meal_logs$mealsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type meal_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | meal_logs$mealsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type meal_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | meal_logs$mealsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $meal_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meal_logs"
    objects: {
      meals: Prisma.$mealsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      meal_id: string | null
      meal_name: string | null
      portion: Prisma.Decimal | null
      calories: number | null
      protein: Prisma.Decimal | null
      carbs: Prisma.Decimal | null
      fats: Prisma.Decimal | null
      meal_time: string | null
      notes: string | null
      consumed_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["meal_logs"]>
    composites: {}
  }

  type meal_logsGetPayload<S extends boolean | null | undefined | meal_logsDefaultArgs> = $Result.GetResult<Prisma.$meal_logsPayload, S>

  type meal_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meal_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meal_logsCountAggregateInputType | true
    }

  export interface meal_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meal_logs'], meta: { name: 'meal_logs' } }
    /**
     * Find zero or one Meal_logs that matches the filter.
     * @param {meal_logsFindUniqueArgs} args - Arguments to find a Meal_logs
     * @example
     * // Get one Meal_logs
     * const meal_logs = await prisma.meal_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meal_logsFindUniqueArgs>(args: SelectSubset<T, meal_logsFindUniqueArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meal_logsFindUniqueOrThrowArgs} args - Arguments to find a Meal_logs
     * @example
     * // Get one Meal_logs
     * const meal_logs = await prisma.meal_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meal_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, meal_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_logsFindFirstArgs} args - Arguments to find a Meal_logs
     * @example
     * // Get one Meal_logs
     * const meal_logs = await prisma.meal_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meal_logsFindFirstArgs>(args?: SelectSubset<T, meal_logsFindFirstArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_logsFindFirstOrThrowArgs} args - Arguments to find a Meal_logs
     * @example
     * // Get one Meal_logs
     * const meal_logs = await prisma.meal_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meal_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, meal_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meal_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meal_logs
     * const meal_logs = await prisma.meal_logs.findMany()
     * 
     * // Get first 10 Meal_logs
     * const meal_logs = await prisma.meal_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meal_logsWithIdOnly = await prisma.meal_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meal_logsFindManyArgs>(args?: SelectSubset<T, meal_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal_logs.
     * @param {meal_logsCreateArgs} args - Arguments to create a Meal_logs.
     * @example
     * // Create one Meal_logs
     * const Meal_logs = await prisma.meal_logs.create({
     *   data: {
     *     // ... data to create a Meal_logs
     *   }
     * })
     * 
     */
    create<T extends meal_logsCreateArgs>(args: SelectSubset<T, meal_logsCreateArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meal_logs.
     * @param {meal_logsCreateManyArgs} args - Arguments to create many Meal_logs.
     * @example
     * // Create many Meal_logs
     * const meal_logs = await prisma.meal_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meal_logsCreateManyArgs>(args?: SelectSubset<T, meal_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meal_logs and returns the data saved in the database.
     * @param {meal_logsCreateManyAndReturnArgs} args - Arguments to create many Meal_logs.
     * @example
     * // Create many Meal_logs
     * const meal_logs = await prisma.meal_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meal_logs and only return the `id`
     * const meal_logsWithIdOnly = await prisma.meal_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends meal_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, meal_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal_logs.
     * @param {meal_logsDeleteArgs} args - Arguments to delete one Meal_logs.
     * @example
     * // Delete one Meal_logs
     * const Meal_logs = await prisma.meal_logs.delete({
     *   where: {
     *     // ... filter to delete one Meal_logs
     *   }
     * })
     * 
     */
    delete<T extends meal_logsDeleteArgs>(args: SelectSubset<T, meal_logsDeleteArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal_logs.
     * @param {meal_logsUpdateArgs} args - Arguments to update one Meal_logs.
     * @example
     * // Update one Meal_logs
     * const meal_logs = await prisma.meal_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meal_logsUpdateArgs>(args: SelectSubset<T, meal_logsUpdateArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meal_logs.
     * @param {meal_logsDeleteManyArgs} args - Arguments to filter Meal_logs to delete.
     * @example
     * // Delete a few Meal_logs
     * const { count } = await prisma.meal_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meal_logsDeleteManyArgs>(args?: SelectSubset<T, meal_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meal_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meal_logs
     * const meal_logs = await prisma.meal_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meal_logsUpdateManyArgs>(args: SelectSubset<T, meal_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meal_logs and returns the data updated in the database.
     * @param {meal_logsUpdateManyAndReturnArgs} args - Arguments to update many Meal_logs.
     * @example
     * // Update many Meal_logs
     * const meal_logs = await prisma.meal_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meal_logs and only return the `id`
     * const meal_logsWithIdOnly = await prisma.meal_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends meal_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, meal_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal_logs.
     * @param {meal_logsUpsertArgs} args - Arguments to update or create a Meal_logs.
     * @example
     * // Update or create a Meal_logs
     * const meal_logs = await prisma.meal_logs.upsert({
     *   create: {
     *     // ... data to create a Meal_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal_logs we want to update
     *   }
     * })
     */
    upsert<T extends meal_logsUpsertArgs>(args: SelectSubset<T, meal_logsUpsertArgs<ExtArgs>>): Prisma__meal_logsClient<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meal_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_logsCountArgs} args - Arguments to filter Meal_logs to count.
     * @example
     * // Count the number of Meal_logs
     * const count = await prisma.meal_logs.count({
     *   where: {
     *     // ... the filter for the Meal_logs we want to count
     *   }
     * })
    **/
    count<T extends meal_logsCountArgs>(
      args?: Subset<T, meal_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meal_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meal_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meal_logsAggregateArgs>(args: Subset<T, Meal_logsAggregateArgs>): Prisma.PrismaPromise<GetMeal_logsAggregateType<T>>

    /**
     * Group by Meal_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meal_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meal_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meal_logsGroupByArgs['orderBy'] }
        : { orderBy?: meal_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meal_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeal_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meal_logs model
   */
  readonly fields: meal_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meal_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meal_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meals<T extends meal_logs$mealsArgs<ExtArgs> = {}>(args?: Subset<T, meal_logs$mealsArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meal_logs model
   */
  interface meal_logsFieldRefs {
    readonly id: FieldRef<"meal_logs", 'String'>
    readonly user_id: FieldRef<"meal_logs", 'String'>
    readonly meal_id: FieldRef<"meal_logs", 'String'>
    readonly meal_name: FieldRef<"meal_logs", 'String'>
    readonly portion: FieldRef<"meal_logs", 'Decimal'>
    readonly calories: FieldRef<"meal_logs", 'Int'>
    readonly protein: FieldRef<"meal_logs", 'Decimal'>
    readonly carbs: FieldRef<"meal_logs", 'Decimal'>
    readonly fats: FieldRef<"meal_logs", 'Decimal'>
    readonly meal_time: FieldRef<"meal_logs", 'String'>
    readonly notes: FieldRef<"meal_logs", 'String'>
    readonly consumed_at: FieldRef<"meal_logs", 'DateTime'>
    readonly created_at: FieldRef<"meal_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meal_logs findUnique
   */
  export type meal_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * Filter, which meal_logs to fetch.
     */
    where: meal_logsWhereUniqueInput
  }

  /**
   * meal_logs findUniqueOrThrow
   */
  export type meal_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * Filter, which meal_logs to fetch.
     */
    where: meal_logsWhereUniqueInput
  }

  /**
   * meal_logs findFirst
   */
  export type meal_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * Filter, which meal_logs to fetch.
     */
    where?: meal_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_logs to fetch.
     */
    orderBy?: meal_logsOrderByWithRelationInput | meal_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meal_logs.
     */
    cursor?: meal_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meal_logs.
     */
    distinct?: Meal_logsScalarFieldEnum | Meal_logsScalarFieldEnum[]
  }

  /**
   * meal_logs findFirstOrThrow
   */
  export type meal_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * Filter, which meal_logs to fetch.
     */
    where?: meal_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_logs to fetch.
     */
    orderBy?: meal_logsOrderByWithRelationInput | meal_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meal_logs.
     */
    cursor?: meal_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meal_logs.
     */
    distinct?: Meal_logsScalarFieldEnum | Meal_logsScalarFieldEnum[]
  }

  /**
   * meal_logs findMany
   */
  export type meal_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * Filter, which meal_logs to fetch.
     */
    where?: meal_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meal_logs to fetch.
     */
    orderBy?: meal_logsOrderByWithRelationInput | meal_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meal_logs.
     */
    cursor?: meal_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meal_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meal_logs.
     */
    skip?: number
    distinct?: Meal_logsScalarFieldEnum | Meal_logsScalarFieldEnum[]
  }

  /**
   * meal_logs create
   */
  export type meal_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a meal_logs.
     */
    data: XOR<meal_logsCreateInput, meal_logsUncheckedCreateInput>
  }

  /**
   * meal_logs createMany
   */
  export type meal_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meal_logs.
     */
    data: meal_logsCreateManyInput | meal_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meal_logs createManyAndReturn
   */
  export type meal_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * The data used to create many meal_logs.
     */
    data: meal_logsCreateManyInput | meal_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * meal_logs update
   */
  export type meal_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a meal_logs.
     */
    data: XOR<meal_logsUpdateInput, meal_logsUncheckedUpdateInput>
    /**
     * Choose, which meal_logs to update.
     */
    where: meal_logsWhereUniqueInput
  }

  /**
   * meal_logs updateMany
   */
  export type meal_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meal_logs.
     */
    data: XOR<meal_logsUpdateManyMutationInput, meal_logsUncheckedUpdateManyInput>
    /**
     * Filter which meal_logs to update
     */
    where?: meal_logsWhereInput
    /**
     * Limit how many meal_logs to update.
     */
    limit?: number
  }

  /**
   * meal_logs updateManyAndReturn
   */
  export type meal_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * The data used to update meal_logs.
     */
    data: XOR<meal_logsUpdateManyMutationInput, meal_logsUncheckedUpdateManyInput>
    /**
     * Filter which meal_logs to update
     */
    where?: meal_logsWhereInput
    /**
     * Limit how many meal_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * meal_logs upsert
   */
  export type meal_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the meal_logs to update in case it exists.
     */
    where: meal_logsWhereUniqueInput
    /**
     * In case the meal_logs found by the `where` argument doesn't exist, create a new meal_logs with this data.
     */
    create: XOR<meal_logsCreateInput, meal_logsUncheckedCreateInput>
    /**
     * In case the meal_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meal_logsUpdateInput, meal_logsUncheckedUpdateInput>
  }

  /**
   * meal_logs delete
   */
  export type meal_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    /**
     * Filter which meal_logs to delete.
     */
    where: meal_logsWhereUniqueInput
  }

  /**
   * meal_logs deleteMany
   */
  export type meal_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meal_logs to delete
     */
    where?: meal_logsWhereInput
    /**
     * Limit how many meal_logs to delete.
     */
    limit?: number
  }

  /**
   * meal_logs.meals
   */
  export type meal_logs$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    where?: mealsWhereInput
  }

  /**
   * meal_logs without action
   */
  export type meal_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
  }


  /**
   * Model meals
   */

  export type AggregateMeals = {
    _count: MealsCountAggregateOutputType | null
    _avg: MealsAvgAggregateOutputType | null
    _sum: MealsSumAggregateOutputType | null
    _min: MealsMinAggregateOutputType | null
    _max: MealsMaxAggregateOutputType | null
  }

  export type MealsAvgAggregateOutputType = {
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
  }

  export type MealsSumAggregateOutputType = {
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
  }

  export type MealsMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
    image_url: string | null
    description: string | null
    created_at: Date | null
  }

  export type MealsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
    image_url: string | null
    description: string | null
    created_at: Date | null
  }

  export type MealsCountAggregateOutputType = {
    id: number
    name: number
    category: number
    calories: number
    protein: number
    carbs: number
    fats: number
    image_url: number
    description: number
    created_at: number
    _all: number
  }


  export type MealsAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
  }

  export type MealsSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
  }

  export type MealsMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    image_url?: true
    description?: true
    created_at?: true
  }

  export type MealsMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    image_url?: true
    description?: true
    created_at?: true
  }

  export type MealsCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    calories?: true
    protein?: true
    carbs?: true
    fats?: true
    image_url?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type MealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meals to aggregate.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meals
    **/
    _count?: true | MealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealsMaxAggregateInputType
  }

  export type GetMealsAggregateType<T extends MealsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeals[P]>
      : GetScalarType<T[P], AggregateMeals[P]>
  }




  export type mealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mealsWhereInput
    orderBy?: mealsOrderByWithAggregationInput | mealsOrderByWithAggregationInput[]
    by: MealsScalarFieldEnum[] | MealsScalarFieldEnum
    having?: mealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealsCountAggregateInputType | true
    _avg?: MealsAvgAggregateInputType
    _sum?: MealsSumAggregateInputType
    _min?: MealsMinAggregateInputType
    _max?: MealsMaxAggregateInputType
  }

  export type MealsGroupByOutputType = {
    id: string
    name: string
    category: string | null
    calories: number | null
    protein: Decimal | null
    carbs: Decimal | null
    fats: Decimal | null
    image_url: string | null
    description: string | null
    created_at: Date | null
    _count: MealsCountAggregateOutputType | null
    _avg: MealsAvgAggregateOutputType | null
    _sum: MealsSumAggregateOutputType | null
    _min: MealsMinAggregateOutputType | null
    _max: MealsMaxAggregateOutputType | null
  }

  type GetMealsGroupByPayload<T extends mealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealsGroupByOutputType[P]>
            : GetScalarType<T[P], MealsGroupByOutputType[P]>
        }
      >
    >


  export type mealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    meal_logs?: boolean | meals$meal_logsArgs<ExtArgs>
    _count?: boolean | MealsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meals"]>

  export type mealsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["meals"]>

  export type mealsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["meals"]>

  export type mealsSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fats?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type mealsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "calories" | "protein" | "carbs" | "fats" | "image_url" | "description" | "created_at", ExtArgs["result"]["meals"]>
  export type mealsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_logs?: boolean | meals$meal_logsArgs<ExtArgs>
    _count?: boolean | MealsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mealsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mealsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meals"
    objects: {
      meal_logs: Prisma.$meal_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string | null
      calories: number | null
      protein: Prisma.Decimal | null
      carbs: Prisma.Decimal | null
      fats: Prisma.Decimal | null
      image_url: string | null
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["meals"]>
    composites: {}
  }

  type mealsGetPayload<S extends boolean | null | undefined | mealsDefaultArgs> = $Result.GetResult<Prisma.$mealsPayload, S>

  type mealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mealsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealsCountAggregateInputType | true
    }

  export interface mealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meals'], meta: { name: 'meals' } }
    /**
     * Find zero or one Meals that matches the filter.
     * @param {mealsFindUniqueArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mealsFindUniqueArgs>(args: SelectSubset<T, mealsFindUniqueArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mealsFindUniqueOrThrowArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mealsFindUniqueOrThrowArgs>(args: SelectSubset<T, mealsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsFindFirstArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mealsFindFirstArgs>(args?: SelectSubset<T, mealsFindFirstArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsFindFirstOrThrowArgs} args - Arguments to find a Meals
     * @example
     * // Get one Meals
     * const meals = await prisma.meals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mealsFindFirstOrThrowArgs>(args?: SelectSubset<T, mealsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meals.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealsWithIdOnly = await prisma.meals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mealsFindManyArgs>(args?: SelectSubset<T, mealsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meals.
     * @param {mealsCreateArgs} args - Arguments to create a Meals.
     * @example
     * // Create one Meals
     * const Meals = await prisma.meals.create({
     *   data: {
     *     // ... data to create a Meals
     *   }
     * })
     * 
     */
    create<T extends mealsCreateArgs>(args: SelectSubset<T, mealsCreateArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {mealsCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meals = await prisma.meals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mealsCreateManyArgs>(args?: SelectSubset<T, mealsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {mealsCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meals = await prisma.meals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealsWithIdOnly = await prisma.meals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mealsCreateManyAndReturnArgs>(args?: SelectSubset<T, mealsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meals.
     * @param {mealsDeleteArgs} args - Arguments to delete one Meals.
     * @example
     * // Delete one Meals
     * const Meals = await prisma.meals.delete({
     *   where: {
     *     // ... filter to delete one Meals
     *   }
     * })
     * 
     */
    delete<T extends mealsDeleteArgs>(args: SelectSubset<T, mealsDeleteArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meals.
     * @param {mealsUpdateArgs} args - Arguments to update one Meals.
     * @example
     * // Update one Meals
     * const meals = await prisma.meals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mealsUpdateArgs>(args: SelectSubset<T, mealsUpdateArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {mealsDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mealsDeleteManyArgs>(args?: SelectSubset<T, mealsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meals = await prisma.meals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mealsUpdateManyArgs>(args: SelectSubset<T, mealsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {mealsUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meals = await prisma.meals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealsWithIdOnly = await prisma.meals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mealsUpdateManyAndReturnArgs>(args: SelectSubset<T, mealsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meals.
     * @param {mealsUpsertArgs} args - Arguments to update or create a Meals.
     * @example
     * // Update or create a Meals
     * const meals = await prisma.meals.upsert({
     *   create: {
     *     // ... data to create a Meals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meals we want to update
     *   }
     * })
     */
    upsert<T extends mealsUpsertArgs>(args: SelectSubset<T, mealsUpsertArgs<ExtArgs>>): Prisma__mealsClient<$Result.GetResult<Prisma.$mealsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meals.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends mealsCountArgs>(
      args?: Subset<T, mealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealsAggregateArgs>(args: Subset<T, MealsAggregateArgs>): Prisma.PrismaPromise<GetMealsAggregateType<T>>

    /**
     * Group by Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mealsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mealsGroupByArgs['orderBy'] }
        : { orderBy?: mealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meals model
   */
  readonly fields: mealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal_logs<T extends meals$meal_logsArgs<ExtArgs> = {}>(args?: Subset<T, meals$meal_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meals model
   */
  interface mealsFieldRefs {
    readonly id: FieldRef<"meals", 'String'>
    readonly name: FieldRef<"meals", 'String'>
    readonly category: FieldRef<"meals", 'String'>
    readonly calories: FieldRef<"meals", 'Int'>
    readonly protein: FieldRef<"meals", 'Decimal'>
    readonly carbs: FieldRef<"meals", 'Decimal'>
    readonly fats: FieldRef<"meals", 'Decimal'>
    readonly image_url: FieldRef<"meals", 'String'>
    readonly description: FieldRef<"meals", 'String'>
    readonly created_at: FieldRef<"meals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meals findUnique
   */
  export type mealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals findUniqueOrThrow
   */
  export type mealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals findFirst
   */
  export type mealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meals.
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * meals findFirstOrThrow
   */
  export type mealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meals.
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meals.
     */
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * meals findMany
   */
  export type mealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter, which meals to fetch.
     */
    where?: mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meals to fetch.
     */
    orderBy?: mealsOrderByWithRelationInput | mealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meals.
     */
    cursor?: mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meals.
     */
    skip?: number
    distinct?: MealsScalarFieldEnum | MealsScalarFieldEnum[]
  }

  /**
   * meals create
   */
  export type mealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * The data needed to create a meals.
     */
    data: XOR<mealsCreateInput, mealsUncheckedCreateInput>
  }

  /**
   * meals createMany
   */
  export type mealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meals.
     */
    data: mealsCreateManyInput | mealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meals createManyAndReturn
   */
  export type mealsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * The data used to create many meals.
     */
    data: mealsCreateManyInput | mealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meals update
   */
  export type mealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * The data needed to update a meals.
     */
    data: XOR<mealsUpdateInput, mealsUncheckedUpdateInput>
    /**
     * Choose, which meals to update.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals updateMany
   */
  export type mealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meals.
     */
    data: XOR<mealsUpdateManyMutationInput, mealsUncheckedUpdateManyInput>
    /**
     * Filter which meals to update
     */
    where?: mealsWhereInput
    /**
     * Limit how many meals to update.
     */
    limit?: number
  }

  /**
   * meals updateManyAndReturn
   */
  export type mealsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * The data used to update meals.
     */
    data: XOR<mealsUpdateManyMutationInput, mealsUncheckedUpdateManyInput>
    /**
     * Filter which meals to update
     */
    where?: mealsWhereInput
    /**
     * Limit how many meals to update.
     */
    limit?: number
  }

  /**
   * meals upsert
   */
  export type mealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * The filter to search for the meals to update in case it exists.
     */
    where: mealsWhereUniqueInput
    /**
     * In case the meals found by the `where` argument doesn't exist, create a new meals with this data.
     */
    create: XOR<mealsCreateInput, mealsUncheckedCreateInput>
    /**
     * In case the meals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mealsUpdateInput, mealsUncheckedUpdateInput>
  }

  /**
   * meals delete
   */
  export type mealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
    /**
     * Filter which meals to delete.
     */
    where: mealsWhereUniqueInput
  }

  /**
   * meals deleteMany
   */
  export type mealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meals to delete
     */
    where?: mealsWhereInput
    /**
     * Limit how many meals to delete.
     */
    limit?: number
  }

  /**
   * meals.meal_logs
   */
  export type meals$meal_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    where?: meal_logsWhereInput
    orderBy?: meal_logsOrderByWithRelationInput | meal_logsOrderByWithRelationInput[]
    cursor?: meal_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meal_logsScalarFieldEnum | Meal_logsScalarFieldEnum[]
  }

  /**
   * meals without action
   */
  export type mealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meals
     */
    select?: mealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meals
     */
    omit?: mealsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mealsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    age: number | null
    weight: Decimal | null
    height: Decimal | null
    bmi: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    age: number | null
    weight: Decimal | null
    height: Decimal | null
    bmi: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    age: number | null
    gender: string | null
    weight: Decimal | null
    height: Decimal | null
    bmi: Decimal | null
    fitness_goal: string | null
    dietary_preference: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    age_range: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    age: number | null
    gender: string | null
    weight: Decimal | null
    height: Decimal | null
    bmi: Decimal | null
    fitness_goal: string | null
    dietary_preference: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    age_range: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    age: number
    gender: number
    weight: number
    height: number
    bmi: number
    fitness_goal: number
    dietary_preference: number
    dietary_restrictions: number
    avatar_url: number
    created_at: number
    updated_at: number
    age_range: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    age?: true
    weight?: true
    height?: true
    bmi?: true
  }

  export type UsersSumAggregateInputType = {
    age?: true
    weight?: true
    height?: true
    bmi?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    bmi?: true
    fitness_goal?: true
    dietary_preference?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    age_range?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    bmi?: true
    fitness_goal?: true
    dietary_preference?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    age_range?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    bmi?: true
    fitness_goal?: true
    dietary_preference?: true
    dietary_restrictions?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    age_range?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    age: number | null
    gender: string | null
    weight: Decimal | null
    height: Decimal | null
    bmi: Decimal | null
    fitness_goal: string | null
    dietary_preference: string | null
    dietary_restrictions: string[]
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    age_range: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    fitness_goal?: boolean
    dietary_preference?: boolean
    dietary_restrictions?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    age_range?: boolean
    exercise_logs?: boolean | users$exercise_logsArgs<ExtArgs>
    meal_logs?: boolean | users$meal_logsArgs<ExtArgs>
    water_logs?: boolean | users$water_logsArgs<ExtArgs>
    weight_logs?: boolean | users$weight_logsArgs<ExtArgs>
    workout_plans?: boolean | users$workout_plansArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    fitness_goal?: boolean
    dietary_preference?: boolean
    dietary_restrictions?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    age_range?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    fitness_goal?: boolean
    dietary_preference?: boolean
    dietary_restrictions?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    age_range?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    fitness_goal?: boolean
    dietary_preference?: boolean
    dietary_restrictions?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    age_range?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "age" | "gender" | "weight" | "height" | "bmi" | "fitness_goal" | "dietary_preference" | "dietary_restrictions" | "avatar_url" | "created_at" | "updated_at" | "age_range", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise_logs?: boolean | users$exercise_logsArgs<ExtArgs>
    meal_logs?: boolean | users$meal_logsArgs<ExtArgs>
    water_logs?: boolean | users$water_logsArgs<ExtArgs>
    weight_logs?: boolean | users$weight_logsArgs<ExtArgs>
    workout_plans?: boolean | users$workout_plansArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      exercise_logs: Prisma.$exercise_logsPayload<ExtArgs>[]
      meal_logs: Prisma.$meal_logsPayload<ExtArgs>[]
      water_logs: Prisma.$water_logsPayload<ExtArgs>[]
      weight_logs: Prisma.$weight_logsPayload<ExtArgs>[]
      workout_plans: Prisma.$workout_plansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      age: number | null
      gender: string | null
      weight: Prisma.Decimal | null
      height: Prisma.Decimal | null
      bmi: Prisma.Decimal | null
      fitness_goal: string | null
      dietary_preference: string | null
      dietary_restrictions: string[]
      avatar_url: string | null
      created_at: Date | null
      updated_at: Date | null
      age_range: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise_logs<T extends users$exercise_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$exercise_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercise_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meal_logs<T extends users$meal_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$meal_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meal_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    water_logs<T extends users$water_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$water_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weight_logs<T extends users$weight_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$weight_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workout_plans<T extends users$workout_plansArgs<ExtArgs> = {}>(args?: Subset<T, users$workout_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'String'>
    readonly weight: FieldRef<"users", 'Decimal'>
    readonly height: FieldRef<"users", 'Decimal'>
    readonly bmi: FieldRef<"users", 'Decimal'>
    readonly fitness_goal: FieldRef<"users", 'String'>
    readonly dietary_preference: FieldRef<"users", 'String'>
    readonly dietary_restrictions: FieldRef<"users", 'String[]'>
    readonly avatar_url: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly age_range: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.exercise_logs
   */
  export type users$exercise_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise_logs
     */
    select?: exercise_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise_logs
     */
    omit?: exercise_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercise_logsInclude<ExtArgs> | null
    where?: exercise_logsWhereInput
    orderBy?: exercise_logsOrderByWithRelationInput | exercise_logsOrderByWithRelationInput[]
    cursor?: exercise_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exercise_logsScalarFieldEnum | Exercise_logsScalarFieldEnum[]
  }

  /**
   * users.meal_logs
   */
  export type users$meal_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meal_logs
     */
    select?: meal_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meal_logs
     */
    omit?: meal_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meal_logsInclude<ExtArgs> | null
    where?: meal_logsWhereInput
    orderBy?: meal_logsOrderByWithRelationInput | meal_logsOrderByWithRelationInput[]
    cursor?: meal_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Meal_logsScalarFieldEnum | Meal_logsScalarFieldEnum[]
  }

  /**
   * users.water_logs
   */
  export type users$water_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    where?: water_logsWhereInput
    orderBy?: water_logsOrderByWithRelationInput | water_logsOrderByWithRelationInput[]
    cursor?: water_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Water_logsScalarFieldEnum | Water_logsScalarFieldEnum[]
  }

  /**
   * users.weight_logs
   */
  export type users$weight_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    where?: weight_logsWhereInput
    orderBy?: weight_logsOrderByWithRelationInput | weight_logsOrderByWithRelationInput[]
    cursor?: weight_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Weight_logsScalarFieldEnum | Weight_logsScalarFieldEnum[]
  }

  /**
   * users.workout_plans
   */
  export type users$workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    where?: workout_plansWhereInput
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    cursor?: workout_plansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model water_logs
   */

  export type AggregateWater_logs = {
    _count: Water_logsCountAggregateOutputType | null
    _avg: Water_logsAvgAggregateOutputType | null
    _sum: Water_logsSumAggregateOutputType | null
    _min: Water_logsMinAggregateOutputType | null
    _max: Water_logsMaxAggregateOutputType | null
  }

  export type Water_logsAvgAggregateOutputType = {
    amount_ml: number | null
  }

  export type Water_logsSumAggregateOutputType = {
    amount_ml: number | null
  }

  export type Water_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount_ml: number | null
    logged_at: Date | null
    created_at: Date | null
  }

  export type Water_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount_ml: number | null
    logged_at: Date | null
    created_at: Date | null
  }

  export type Water_logsCountAggregateOutputType = {
    id: number
    user_id: number
    amount_ml: number
    logged_at: number
    created_at: number
    _all: number
  }


  export type Water_logsAvgAggregateInputType = {
    amount_ml?: true
  }

  export type Water_logsSumAggregateInputType = {
    amount_ml?: true
  }

  export type Water_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    amount_ml?: true
    logged_at?: true
    created_at?: true
  }

  export type Water_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount_ml?: true
    logged_at?: true
    created_at?: true
  }

  export type Water_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    amount_ml?: true
    logged_at?: true
    created_at?: true
    _all?: true
  }

  export type Water_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which water_logs to aggregate.
     */
    where?: water_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_logs to fetch.
     */
    orderBy?: water_logsOrderByWithRelationInput | water_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: water_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned water_logs
    **/
    _count?: true | Water_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Water_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Water_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Water_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Water_logsMaxAggregateInputType
  }

  export type GetWater_logsAggregateType<T extends Water_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateWater_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWater_logs[P]>
      : GetScalarType<T[P], AggregateWater_logs[P]>
  }




  export type water_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: water_logsWhereInput
    orderBy?: water_logsOrderByWithAggregationInput | water_logsOrderByWithAggregationInput[]
    by: Water_logsScalarFieldEnum[] | Water_logsScalarFieldEnum
    having?: water_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Water_logsCountAggregateInputType | true
    _avg?: Water_logsAvgAggregateInputType
    _sum?: Water_logsSumAggregateInputType
    _min?: Water_logsMinAggregateInputType
    _max?: Water_logsMaxAggregateInputType
  }

  export type Water_logsGroupByOutputType = {
    id: string
    user_id: string
    amount_ml: number
    logged_at: Date
    created_at: Date | null
    _count: Water_logsCountAggregateOutputType | null
    _avg: Water_logsAvgAggregateOutputType | null
    _sum: Water_logsSumAggregateOutputType | null
    _min: Water_logsMinAggregateOutputType | null
    _max: Water_logsMaxAggregateOutputType | null
  }

  type GetWater_logsGroupByPayload<T extends water_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Water_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Water_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Water_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Water_logsGroupByOutputType[P]>
        }
      >
    >


  export type water_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_ml?: boolean
    logged_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water_logs"]>

  export type water_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_ml?: boolean
    logged_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water_logs"]>

  export type water_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_ml?: boolean
    logged_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["water_logs"]>

  export type water_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount_ml?: boolean
    logged_at?: boolean
    created_at?: boolean
  }

  export type water_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount_ml" | "logged_at" | "created_at", ExtArgs["result"]["water_logs"]>
  export type water_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type water_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type water_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $water_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "water_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      amount_ml: number
      logged_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["water_logs"]>
    composites: {}
  }

  type water_logsGetPayload<S extends boolean | null | undefined | water_logsDefaultArgs> = $Result.GetResult<Prisma.$water_logsPayload, S>

  type water_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<water_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Water_logsCountAggregateInputType | true
    }

  export interface water_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['water_logs'], meta: { name: 'water_logs' } }
    /**
     * Find zero or one Water_logs that matches the filter.
     * @param {water_logsFindUniqueArgs} args - Arguments to find a Water_logs
     * @example
     * // Get one Water_logs
     * const water_logs = await prisma.water_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends water_logsFindUniqueArgs>(args: SelectSubset<T, water_logsFindUniqueArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Water_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {water_logsFindUniqueOrThrowArgs} args - Arguments to find a Water_logs
     * @example
     * // Get one Water_logs
     * const water_logs = await prisma.water_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends water_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, water_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Water_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_logsFindFirstArgs} args - Arguments to find a Water_logs
     * @example
     * // Get one Water_logs
     * const water_logs = await prisma.water_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends water_logsFindFirstArgs>(args?: SelectSubset<T, water_logsFindFirstArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Water_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_logsFindFirstOrThrowArgs} args - Arguments to find a Water_logs
     * @example
     * // Get one Water_logs
     * const water_logs = await prisma.water_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends water_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, water_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Water_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Water_logs
     * const water_logs = await prisma.water_logs.findMany()
     * 
     * // Get first 10 Water_logs
     * const water_logs = await prisma.water_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const water_logsWithIdOnly = await prisma.water_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends water_logsFindManyArgs>(args?: SelectSubset<T, water_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Water_logs.
     * @param {water_logsCreateArgs} args - Arguments to create a Water_logs.
     * @example
     * // Create one Water_logs
     * const Water_logs = await prisma.water_logs.create({
     *   data: {
     *     // ... data to create a Water_logs
     *   }
     * })
     * 
     */
    create<T extends water_logsCreateArgs>(args: SelectSubset<T, water_logsCreateArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Water_logs.
     * @param {water_logsCreateManyArgs} args - Arguments to create many Water_logs.
     * @example
     * // Create many Water_logs
     * const water_logs = await prisma.water_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends water_logsCreateManyArgs>(args?: SelectSubset<T, water_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Water_logs and returns the data saved in the database.
     * @param {water_logsCreateManyAndReturnArgs} args - Arguments to create many Water_logs.
     * @example
     * // Create many Water_logs
     * const water_logs = await prisma.water_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Water_logs and only return the `id`
     * const water_logsWithIdOnly = await prisma.water_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends water_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, water_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Water_logs.
     * @param {water_logsDeleteArgs} args - Arguments to delete one Water_logs.
     * @example
     * // Delete one Water_logs
     * const Water_logs = await prisma.water_logs.delete({
     *   where: {
     *     // ... filter to delete one Water_logs
     *   }
     * })
     * 
     */
    delete<T extends water_logsDeleteArgs>(args: SelectSubset<T, water_logsDeleteArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Water_logs.
     * @param {water_logsUpdateArgs} args - Arguments to update one Water_logs.
     * @example
     * // Update one Water_logs
     * const water_logs = await prisma.water_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends water_logsUpdateArgs>(args: SelectSubset<T, water_logsUpdateArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Water_logs.
     * @param {water_logsDeleteManyArgs} args - Arguments to filter Water_logs to delete.
     * @example
     * // Delete a few Water_logs
     * const { count } = await prisma.water_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends water_logsDeleteManyArgs>(args?: SelectSubset<T, water_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Water_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Water_logs
     * const water_logs = await prisma.water_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends water_logsUpdateManyArgs>(args: SelectSubset<T, water_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Water_logs and returns the data updated in the database.
     * @param {water_logsUpdateManyAndReturnArgs} args - Arguments to update many Water_logs.
     * @example
     * // Update many Water_logs
     * const water_logs = await prisma.water_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Water_logs and only return the `id`
     * const water_logsWithIdOnly = await prisma.water_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends water_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, water_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Water_logs.
     * @param {water_logsUpsertArgs} args - Arguments to update or create a Water_logs.
     * @example
     * // Update or create a Water_logs
     * const water_logs = await prisma.water_logs.upsert({
     *   create: {
     *     // ... data to create a Water_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Water_logs we want to update
     *   }
     * })
     */
    upsert<T extends water_logsUpsertArgs>(args: SelectSubset<T, water_logsUpsertArgs<ExtArgs>>): Prisma__water_logsClient<$Result.GetResult<Prisma.$water_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Water_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_logsCountArgs} args - Arguments to filter Water_logs to count.
     * @example
     * // Count the number of Water_logs
     * const count = await prisma.water_logs.count({
     *   where: {
     *     // ... the filter for the Water_logs we want to count
     *   }
     * })
    **/
    count<T extends water_logsCountArgs>(
      args?: Subset<T, water_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Water_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Water_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Water_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Water_logsAggregateArgs>(args: Subset<T, Water_logsAggregateArgs>): Prisma.PrismaPromise<GetWater_logsAggregateType<T>>

    /**
     * Group by Water_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {water_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends water_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: water_logsGroupByArgs['orderBy'] }
        : { orderBy?: water_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, water_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWater_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the water_logs model
   */
  readonly fields: water_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for water_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__water_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the water_logs model
   */
  interface water_logsFieldRefs {
    readonly id: FieldRef<"water_logs", 'String'>
    readonly user_id: FieldRef<"water_logs", 'String'>
    readonly amount_ml: FieldRef<"water_logs", 'Int'>
    readonly logged_at: FieldRef<"water_logs", 'DateTime'>
    readonly created_at: FieldRef<"water_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * water_logs findUnique
   */
  export type water_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * Filter, which water_logs to fetch.
     */
    where: water_logsWhereUniqueInput
  }

  /**
   * water_logs findUniqueOrThrow
   */
  export type water_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * Filter, which water_logs to fetch.
     */
    where: water_logsWhereUniqueInput
  }

  /**
   * water_logs findFirst
   */
  export type water_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * Filter, which water_logs to fetch.
     */
    where?: water_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_logs to fetch.
     */
    orderBy?: water_logsOrderByWithRelationInput | water_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for water_logs.
     */
    cursor?: water_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of water_logs.
     */
    distinct?: Water_logsScalarFieldEnum | Water_logsScalarFieldEnum[]
  }

  /**
   * water_logs findFirstOrThrow
   */
  export type water_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * Filter, which water_logs to fetch.
     */
    where?: water_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_logs to fetch.
     */
    orderBy?: water_logsOrderByWithRelationInput | water_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for water_logs.
     */
    cursor?: water_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of water_logs.
     */
    distinct?: Water_logsScalarFieldEnum | Water_logsScalarFieldEnum[]
  }

  /**
   * water_logs findMany
   */
  export type water_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * Filter, which water_logs to fetch.
     */
    where?: water_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of water_logs to fetch.
     */
    orderBy?: water_logsOrderByWithRelationInput | water_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing water_logs.
     */
    cursor?: water_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` water_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` water_logs.
     */
    skip?: number
    distinct?: Water_logsScalarFieldEnum | Water_logsScalarFieldEnum[]
  }

  /**
   * water_logs create
   */
  export type water_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a water_logs.
     */
    data: XOR<water_logsCreateInput, water_logsUncheckedCreateInput>
  }

  /**
   * water_logs createMany
   */
  export type water_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many water_logs.
     */
    data: water_logsCreateManyInput | water_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * water_logs createManyAndReturn
   */
  export type water_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * The data used to create many water_logs.
     */
    data: water_logsCreateManyInput | water_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * water_logs update
   */
  export type water_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a water_logs.
     */
    data: XOR<water_logsUpdateInput, water_logsUncheckedUpdateInput>
    /**
     * Choose, which water_logs to update.
     */
    where: water_logsWhereUniqueInput
  }

  /**
   * water_logs updateMany
   */
  export type water_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update water_logs.
     */
    data: XOR<water_logsUpdateManyMutationInput, water_logsUncheckedUpdateManyInput>
    /**
     * Filter which water_logs to update
     */
    where?: water_logsWhereInput
    /**
     * Limit how many water_logs to update.
     */
    limit?: number
  }

  /**
   * water_logs updateManyAndReturn
   */
  export type water_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * The data used to update water_logs.
     */
    data: XOR<water_logsUpdateManyMutationInput, water_logsUncheckedUpdateManyInput>
    /**
     * Filter which water_logs to update
     */
    where?: water_logsWhereInput
    /**
     * Limit how many water_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * water_logs upsert
   */
  export type water_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the water_logs to update in case it exists.
     */
    where: water_logsWhereUniqueInput
    /**
     * In case the water_logs found by the `where` argument doesn't exist, create a new water_logs with this data.
     */
    create: XOR<water_logsCreateInput, water_logsUncheckedCreateInput>
    /**
     * In case the water_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<water_logsUpdateInput, water_logsUncheckedUpdateInput>
  }

  /**
   * water_logs delete
   */
  export type water_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
    /**
     * Filter which water_logs to delete.
     */
    where: water_logsWhereUniqueInput
  }

  /**
   * water_logs deleteMany
   */
  export type water_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which water_logs to delete
     */
    where?: water_logsWhereInput
    /**
     * Limit how many water_logs to delete.
     */
    limit?: number
  }

  /**
   * water_logs without action
   */
  export type water_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the water_logs
     */
    select?: water_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the water_logs
     */
    omit?: water_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: water_logsInclude<ExtArgs> | null
  }


  /**
   * Model weight_logs
   */

  export type AggregateWeight_logs = {
    _count: Weight_logsCountAggregateOutputType | null
    _avg: Weight_logsAvgAggregateOutputType | null
    _sum: Weight_logsSumAggregateOutputType | null
    _min: Weight_logsMinAggregateOutputType | null
    _max: Weight_logsMaxAggregateOutputType | null
  }

  export type Weight_logsAvgAggregateOutputType = {
    weight: Decimal | null
  }

  export type Weight_logsSumAggregateOutputType = {
    weight: Decimal | null
  }

  export type Weight_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    weight: Decimal | null
    logged_at: Date | null
    created_at: Date | null
  }

  export type Weight_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    weight: Decimal | null
    logged_at: Date | null
    created_at: Date | null
  }

  export type Weight_logsCountAggregateOutputType = {
    id: number
    user_id: number
    weight: number
    logged_at: number
    created_at: number
    _all: number
  }


  export type Weight_logsAvgAggregateInputType = {
    weight?: true
  }

  export type Weight_logsSumAggregateInputType = {
    weight?: true
  }

  export type Weight_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    weight?: true
    logged_at?: true
    created_at?: true
  }

  export type Weight_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    weight?: true
    logged_at?: true
    created_at?: true
  }

  export type Weight_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    weight?: true
    logged_at?: true
    created_at?: true
    _all?: true
  }

  export type Weight_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weight_logs to aggregate.
     */
    where?: weight_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weight_logs to fetch.
     */
    orderBy?: weight_logsOrderByWithRelationInput | weight_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: weight_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weight_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weight_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned weight_logs
    **/
    _count?: true | Weight_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Weight_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Weight_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Weight_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Weight_logsMaxAggregateInputType
  }

  export type GetWeight_logsAggregateType<T extends Weight_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateWeight_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeight_logs[P]>
      : GetScalarType<T[P], AggregateWeight_logs[P]>
  }




  export type weight_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: weight_logsWhereInput
    orderBy?: weight_logsOrderByWithAggregationInput | weight_logsOrderByWithAggregationInput[]
    by: Weight_logsScalarFieldEnum[] | Weight_logsScalarFieldEnum
    having?: weight_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Weight_logsCountAggregateInputType | true
    _avg?: Weight_logsAvgAggregateInputType
    _sum?: Weight_logsSumAggregateInputType
    _min?: Weight_logsMinAggregateInputType
    _max?: Weight_logsMaxAggregateInputType
  }

  export type Weight_logsGroupByOutputType = {
    id: string
    user_id: string
    weight: Decimal
    logged_at: Date
    created_at: Date | null
    _count: Weight_logsCountAggregateOutputType | null
    _avg: Weight_logsAvgAggregateOutputType | null
    _sum: Weight_logsSumAggregateOutputType | null
    _min: Weight_logsMinAggregateOutputType | null
    _max: Weight_logsMaxAggregateOutputType | null
  }

  type GetWeight_logsGroupByPayload<T extends weight_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Weight_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Weight_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Weight_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Weight_logsGroupByOutputType[P]>
        }
      >
    >


  export type weight_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    weight?: boolean
    logged_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weight_logs"]>

  export type weight_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    weight?: boolean
    logged_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weight_logs"]>

  export type weight_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    weight?: boolean
    logged_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weight_logs"]>

  export type weight_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    weight?: boolean
    logged_at?: boolean
    created_at?: boolean
  }

  export type weight_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "weight" | "logged_at" | "created_at", ExtArgs["result"]["weight_logs"]>
  export type weight_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type weight_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type weight_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $weight_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "weight_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      weight: Prisma.Decimal
      logged_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["weight_logs"]>
    composites: {}
  }

  type weight_logsGetPayload<S extends boolean | null | undefined | weight_logsDefaultArgs> = $Result.GetResult<Prisma.$weight_logsPayload, S>

  type weight_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<weight_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Weight_logsCountAggregateInputType | true
    }

  export interface weight_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['weight_logs'], meta: { name: 'weight_logs' } }
    /**
     * Find zero or one Weight_logs that matches the filter.
     * @param {weight_logsFindUniqueArgs} args - Arguments to find a Weight_logs
     * @example
     * // Get one Weight_logs
     * const weight_logs = await prisma.weight_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends weight_logsFindUniqueArgs>(args: SelectSubset<T, weight_logsFindUniqueArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weight_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {weight_logsFindUniqueOrThrowArgs} args - Arguments to find a Weight_logs
     * @example
     * // Get one Weight_logs
     * const weight_logs = await prisma.weight_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends weight_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, weight_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weight_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weight_logsFindFirstArgs} args - Arguments to find a Weight_logs
     * @example
     * // Get one Weight_logs
     * const weight_logs = await prisma.weight_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends weight_logsFindFirstArgs>(args?: SelectSubset<T, weight_logsFindFirstArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weight_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weight_logsFindFirstOrThrowArgs} args - Arguments to find a Weight_logs
     * @example
     * // Get one Weight_logs
     * const weight_logs = await prisma.weight_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends weight_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, weight_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weight_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weight_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weight_logs
     * const weight_logs = await prisma.weight_logs.findMany()
     * 
     * // Get first 10 Weight_logs
     * const weight_logs = await prisma.weight_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weight_logsWithIdOnly = await prisma.weight_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends weight_logsFindManyArgs>(args?: SelectSubset<T, weight_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weight_logs.
     * @param {weight_logsCreateArgs} args - Arguments to create a Weight_logs.
     * @example
     * // Create one Weight_logs
     * const Weight_logs = await prisma.weight_logs.create({
     *   data: {
     *     // ... data to create a Weight_logs
     *   }
     * })
     * 
     */
    create<T extends weight_logsCreateArgs>(args: SelectSubset<T, weight_logsCreateArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weight_logs.
     * @param {weight_logsCreateManyArgs} args - Arguments to create many Weight_logs.
     * @example
     * // Create many Weight_logs
     * const weight_logs = await prisma.weight_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends weight_logsCreateManyArgs>(args?: SelectSubset<T, weight_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weight_logs and returns the data saved in the database.
     * @param {weight_logsCreateManyAndReturnArgs} args - Arguments to create many Weight_logs.
     * @example
     * // Create many Weight_logs
     * const weight_logs = await prisma.weight_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weight_logs and only return the `id`
     * const weight_logsWithIdOnly = await prisma.weight_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends weight_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, weight_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weight_logs.
     * @param {weight_logsDeleteArgs} args - Arguments to delete one Weight_logs.
     * @example
     * // Delete one Weight_logs
     * const Weight_logs = await prisma.weight_logs.delete({
     *   where: {
     *     // ... filter to delete one Weight_logs
     *   }
     * })
     * 
     */
    delete<T extends weight_logsDeleteArgs>(args: SelectSubset<T, weight_logsDeleteArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weight_logs.
     * @param {weight_logsUpdateArgs} args - Arguments to update one Weight_logs.
     * @example
     * // Update one Weight_logs
     * const weight_logs = await prisma.weight_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends weight_logsUpdateArgs>(args: SelectSubset<T, weight_logsUpdateArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weight_logs.
     * @param {weight_logsDeleteManyArgs} args - Arguments to filter Weight_logs to delete.
     * @example
     * // Delete a few Weight_logs
     * const { count } = await prisma.weight_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends weight_logsDeleteManyArgs>(args?: SelectSubset<T, weight_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weight_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weight_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weight_logs
     * const weight_logs = await prisma.weight_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends weight_logsUpdateManyArgs>(args: SelectSubset<T, weight_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weight_logs and returns the data updated in the database.
     * @param {weight_logsUpdateManyAndReturnArgs} args - Arguments to update many Weight_logs.
     * @example
     * // Update many Weight_logs
     * const weight_logs = await prisma.weight_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weight_logs and only return the `id`
     * const weight_logsWithIdOnly = await prisma.weight_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends weight_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, weight_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weight_logs.
     * @param {weight_logsUpsertArgs} args - Arguments to update or create a Weight_logs.
     * @example
     * // Update or create a Weight_logs
     * const weight_logs = await prisma.weight_logs.upsert({
     *   create: {
     *     // ... data to create a Weight_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weight_logs we want to update
     *   }
     * })
     */
    upsert<T extends weight_logsUpsertArgs>(args: SelectSubset<T, weight_logsUpsertArgs<ExtArgs>>): Prisma__weight_logsClient<$Result.GetResult<Prisma.$weight_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weight_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weight_logsCountArgs} args - Arguments to filter Weight_logs to count.
     * @example
     * // Count the number of Weight_logs
     * const count = await prisma.weight_logs.count({
     *   where: {
     *     // ... the filter for the Weight_logs we want to count
     *   }
     * })
    **/
    count<T extends weight_logsCountArgs>(
      args?: Subset<T, weight_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Weight_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weight_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Weight_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Weight_logsAggregateArgs>(args: Subset<T, Weight_logsAggregateArgs>): Prisma.PrismaPromise<GetWeight_logsAggregateType<T>>

    /**
     * Group by Weight_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {weight_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends weight_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: weight_logsGroupByArgs['orderBy'] }
        : { orderBy?: weight_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, weight_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeight_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the weight_logs model
   */
  readonly fields: weight_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for weight_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__weight_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the weight_logs model
   */
  interface weight_logsFieldRefs {
    readonly id: FieldRef<"weight_logs", 'String'>
    readonly user_id: FieldRef<"weight_logs", 'String'>
    readonly weight: FieldRef<"weight_logs", 'Decimal'>
    readonly logged_at: FieldRef<"weight_logs", 'DateTime'>
    readonly created_at: FieldRef<"weight_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * weight_logs findUnique
   */
  export type weight_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * Filter, which weight_logs to fetch.
     */
    where: weight_logsWhereUniqueInput
  }

  /**
   * weight_logs findUniqueOrThrow
   */
  export type weight_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * Filter, which weight_logs to fetch.
     */
    where: weight_logsWhereUniqueInput
  }

  /**
   * weight_logs findFirst
   */
  export type weight_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * Filter, which weight_logs to fetch.
     */
    where?: weight_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weight_logs to fetch.
     */
    orderBy?: weight_logsOrderByWithRelationInput | weight_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weight_logs.
     */
    cursor?: weight_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weight_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weight_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weight_logs.
     */
    distinct?: Weight_logsScalarFieldEnum | Weight_logsScalarFieldEnum[]
  }

  /**
   * weight_logs findFirstOrThrow
   */
  export type weight_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * Filter, which weight_logs to fetch.
     */
    where?: weight_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weight_logs to fetch.
     */
    orderBy?: weight_logsOrderByWithRelationInput | weight_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for weight_logs.
     */
    cursor?: weight_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weight_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weight_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of weight_logs.
     */
    distinct?: Weight_logsScalarFieldEnum | Weight_logsScalarFieldEnum[]
  }

  /**
   * weight_logs findMany
   */
  export type weight_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * Filter, which weight_logs to fetch.
     */
    where?: weight_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of weight_logs to fetch.
     */
    orderBy?: weight_logsOrderByWithRelationInput | weight_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing weight_logs.
     */
    cursor?: weight_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` weight_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` weight_logs.
     */
    skip?: number
    distinct?: Weight_logsScalarFieldEnum | Weight_logsScalarFieldEnum[]
  }

  /**
   * weight_logs create
   */
  export type weight_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a weight_logs.
     */
    data: XOR<weight_logsCreateInput, weight_logsUncheckedCreateInput>
  }

  /**
   * weight_logs createMany
   */
  export type weight_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many weight_logs.
     */
    data: weight_logsCreateManyInput | weight_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * weight_logs createManyAndReturn
   */
  export type weight_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * The data used to create many weight_logs.
     */
    data: weight_logsCreateManyInput | weight_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * weight_logs update
   */
  export type weight_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a weight_logs.
     */
    data: XOR<weight_logsUpdateInput, weight_logsUncheckedUpdateInput>
    /**
     * Choose, which weight_logs to update.
     */
    where: weight_logsWhereUniqueInput
  }

  /**
   * weight_logs updateMany
   */
  export type weight_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update weight_logs.
     */
    data: XOR<weight_logsUpdateManyMutationInput, weight_logsUncheckedUpdateManyInput>
    /**
     * Filter which weight_logs to update
     */
    where?: weight_logsWhereInput
    /**
     * Limit how many weight_logs to update.
     */
    limit?: number
  }

  /**
   * weight_logs updateManyAndReturn
   */
  export type weight_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * The data used to update weight_logs.
     */
    data: XOR<weight_logsUpdateManyMutationInput, weight_logsUncheckedUpdateManyInput>
    /**
     * Filter which weight_logs to update
     */
    where?: weight_logsWhereInput
    /**
     * Limit how many weight_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * weight_logs upsert
   */
  export type weight_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the weight_logs to update in case it exists.
     */
    where: weight_logsWhereUniqueInput
    /**
     * In case the weight_logs found by the `where` argument doesn't exist, create a new weight_logs with this data.
     */
    create: XOR<weight_logsCreateInput, weight_logsUncheckedCreateInput>
    /**
     * In case the weight_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<weight_logsUpdateInput, weight_logsUncheckedUpdateInput>
  }

  /**
   * weight_logs delete
   */
  export type weight_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
    /**
     * Filter which weight_logs to delete.
     */
    where: weight_logsWhereUniqueInput
  }

  /**
   * weight_logs deleteMany
   */
  export type weight_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which weight_logs to delete
     */
    where?: weight_logsWhereInput
    /**
     * Limit how many weight_logs to delete.
     */
    limit?: number
  }

  /**
   * weight_logs without action
   */
  export type weight_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the weight_logs
     */
    select?: weight_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the weight_logs
     */
    omit?: weight_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: weight_logsInclude<ExtArgs> | null
  }


  /**
   * Model workout_plan_exercises
   */

  export type AggregateWorkout_plan_exercises = {
    _count: Workout_plan_exercisesCountAggregateOutputType | null
    _avg: Workout_plan_exercisesAvgAggregateOutputType | null
    _sum: Workout_plan_exercisesSumAggregateOutputType | null
    _min: Workout_plan_exercisesMinAggregateOutputType | null
    _max: Workout_plan_exercisesMaxAggregateOutputType | null
  }

  export type Workout_plan_exercisesAvgAggregateOutputType = {
    day_of_week: number | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    actual_sets: number | null
    actual_reps: number | null
    actual_weight: Decimal | null
    actual_duration: number | null
  }

  export type Workout_plan_exercisesSumAggregateOutputType = {
    day_of_week: number | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    actual_sets: number | null
    actual_reps: number | null
    actual_weight: Decimal | null
    actual_duration: number | null
  }

  export type Workout_plan_exercisesMinAggregateOutputType = {
    id: string | null
    workout_plan_id: string | null
    exercise_id: string | null
    exercise_name: string | null
    day_of_week: number | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    completed: boolean | null
    completion_date: Date | null
    actual_sets: number | null
    actual_reps: number | null
    actual_weight: Decimal | null
    actual_duration: number | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_plan_exercisesMaxAggregateOutputType = {
    id: string | null
    workout_plan_id: string | null
    exercise_id: string | null
    exercise_name: string | null
    day_of_week: number | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    completed: boolean | null
    completion_date: Date | null
    actual_sets: number | null
    actual_reps: number | null
    actual_weight: Decimal | null
    actual_duration: number | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_plan_exercisesCountAggregateOutputType = {
    id: number
    workout_plan_id: number
    exercise_id: number
    exercise_name: number
    day_of_week: number
    sets: number
    reps: number
    weight: number
    duration: number
    completed: number
    completion_date: number
    actual_sets: number
    actual_reps: number
    actual_weight: number
    actual_duration: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Workout_plan_exercisesAvgAggregateInputType = {
    day_of_week?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    actual_sets?: true
    actual_reps?: true
    actual_weight?: true
    actual_duration?: true
  }

  export type Workout_plan_exercisesSumAggregateInputType = {
    day_of_week?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    actual_sets?: true
    actual_reps?: true
    actual_weight?: true
    actual_duration?: true
  }

  export type Workout_plan_exercisesMinAggregateInputType = {
    id?: true
    workout_plan_id?: true
    exercise_id?: true
    exercise_name?: true
    day_of_week?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    completed?: true
    completion_date?: true
    actual_sets?: true
    actual_reps?: true
    actual_weight?: true
    actual_duration?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_plan_exercisesMaxAggregateInputType = {
    id?: true
    workout_plan_id?: true
    exercise_id?: true
    exercise_name?: true
    day_of_week?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    completed?: true
    completion_date?: true
    actual_sets?: true
    actual_reps?: true
    actual_weight?: true
    actual_duration?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_plan_exercisesCountAggregateInputType = {
    id?: true
    workout_plan_id?: true
    exercise_id?: true
    exercise_name?: true
    day_of_week?: true
    sets?: true
    reps?: true
    weight?: true
    duration?: true
    completed?: true
    completion_date?: true
    actual_sets?: true
    actual_reps?: true
    actual_weight?: true
    actual_duration?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Workout_plan_exercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_plan_exercises to aggregate.
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plan_exercises to fetch.
     */
    orderBy?: workout_plan_exercisesOrderByWithRelationInput | workout_plan_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workout_plan_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plan_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plan_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workout_plan_exercises
    **/
    _count?: true | Workout_plan_exercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workout_plan_exercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workout_plan_exercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workout_plan_exercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workout_plan_exercisesMaxAggregateInputType
  }

  export type GetWorkout_plan_exercisesAggregateType<T extends Workout_plan_exercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout_plan_exercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout_plan_exercises[P]>
      : GetScalarType<T[P], AggregateWorkout_plan_exercises[P]>
  }




  export type workout_plan_exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plan_exercisesWhereInput
    orderBy?: workout_plan_exercisesOrderByWithAggregationInput | workout_plan_exercisesOrderByWithAggregationInput[]
    by: Workout_plan_exercisesScalarFieldEnum[] | Workout_plan_exercisesScalarFieldEnum
    having?: workout_plan_exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workout_plan_exercisesCountAggregateInputType | true
    _avg?: Workout_plan_exercisesAvgAggregateInputType
    _sum?: Workout_plan_exercisesSumAggregateInputType
    _min?: Workout_plan_exercisesMinAggregateInputType
    _max?: Workout_plan_exercisesMaxAggregateInputType
  }

  export type Workout_plan_exercisesGroupByOutputType = {
    id: string
    workout_plan_id: string
    exercise_id: string | null
    exercise_name: string | null
    day_of_week: number | null
    sets: number | null
    reps: number | null
    weight: Decimal | null
    duration: number | null
    completed: boolean | null
    completion_date: Date | null
    actual_sets: number | null
    actual_reps: number | null
    actual_weight: Decimal | null
    actual_duration: number | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Workout_plan_exercisesCountAggregateOutputType | null
    _avg: Workout_plan_exercisesAvgAggregateOutputType | null
    _sum: Workout_plan_exercisesSumAggregateOutputType | null
    _min: Workout_plan_exercisesMinAggregateOutputType | null
    _max: Workout_plan_exercisesMaxAggregateOutputType | null
  }

  type GetWorkout_plan_exercisesGroupByPayload<T extends workout_plan_exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workout_plan_exercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workout_plan_exercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workout_plan_exercisesGroupByOutputType[P]>
            : GetScalarType<T[P], Workout_plan_exercisesGroupByOutputType[P]>
        }
      >
    >


  export type workout_plan_exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    day_of_week?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    completed?: boolean
    completion_date?: boolean
    actual_sets?: boolean
    actual_reps?: boolean
    actual_weight?: boolean
    actual_duration?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | workout_plan_exercises$exercisesArgs<ExtArgs>
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plan_exercises"]>

  export type workout_plan_exercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    day_of_week?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    completed?: boolean
    completion_date?: boolean
    actual_sets?: boolean
    actual_reps?: boolean
    actual_weight?: boolean
    actual_duration?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | workout_plan_exercises$exercisesArgs<ExtArgs>
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plan_exercises"]>

  export type workout_plan_exercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    day_of_week?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    completed?: boolean
    completion_date?: boolean
    actual_sets?: boolean
    actual_reps?: boolean
    actual_weight?: boolean
    actual_duration?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | workout_plan_exercises$exercisesArgs<ExtArgs>
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plan_exercises"]>

  export type workout_plan_exercisesSelectScalar = {
    id?: boolean
    workout_plan_id?: boolean
    exercise_id?: boolean
    exercise_name?: boolean
    day_of_week?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    duration?: boolean
    completed?: boolean
    completion_date?: boolean
    actual_sets?: boolean
    actual_reps?: boolean
    actual_weight?: boolean
    actual_duration?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type workout_plan_exercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workout_plan_id" | "exercise_id" | "exercise_name" | "day_of_week" | "sets" | "reps" | "weight" | "duration" | "completed" | "completion_date" | "actual_sets" | "actual_reps" | "actual_weight" | "actual_duration" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["workout_plan_exercises"]>
  export type workout_plan_exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | workout_plan_exercises$exercisesArgs<ExtArgs>
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }
  export type workout_plan_exercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | workout_plan_exercises$exercisesArgs<ExtArgs>
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }
  export type workout_plan_exercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | workout_plan_exercises$exercisesArgs<ExtArgs>
    workout_plans?: boolean | workout_plansDefaultArgs<ExtArgs>
  }

  export type $workout_plan_exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workout_plan_exercises"
    objects: {
      exercises: Prisma.$exercisesPayload<ExtArgs> | null
      workout_plans: Prisma.$workout_plansPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workout_plan_id: string
      exercise_id: string | null
      exercise_name: string | null
      day_of_week: number | null
      sets: number | null
      reps: number | null
      weight: Prisma.Decimal | null
      duration: number | null
      completed: boolean | null
      completion_date: Date | null
      actual_sets: number | null
      actual_reps: number | null
      actual_weight: Prisma.Decimal | null
      actual_duration: number | null
      notes: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["workout_plan_exercises"]>
    composites: {}
  }

  type workout_plan_exercisesGetPayload<S extends boolean | null | undefined | workout_plan_exercisesDefaultArgs> = $Result.GetResult<Prisma.$workout_plan_exercisesPayload, S>

  type workout_plan_exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workout_plan_exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workout_plan_exercisesCountAggregateInputType | true
    }

  export interface workout_plan_exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workout_plan_exercises'], meta: { name: 'workout_plan_exercises' } }
    /**
     * Find zero or one Workout_plan_exercises that matches the filter.
     * @param {workout_plan_exercisesFindUniqueArgs} args - Arguments to find a Workout_plan_exercises
     * @example
     * // Get one Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workout_plan_exercisesFindUniqueArgs>(args: SelectSubset<T, workout_plan_exercisesFindUniqueArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout_plan_exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workout_plan_exercisesFindUniqueOrThrowArgs} args - Arguments to find a Workout_plan_exercises
     * @example
     * // Get one Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workout_plan_exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, workout_plan_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_plan_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plan_exercisesFindFirstArgs} args - Arguments to find a Workout_plan_exercises
     * @example
     * // Get one Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workout_plan_exercisesFindFirstArgs>(args?: SelectSubset<T, workout_plan_exercisesFindFirstArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_plan_exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plan_exercisesFindFirstOrThrowArgs} args - Arguments to find a Workout_plan_exercises
     * @example
     * // Get one Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workout_plan_exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, workout_plan_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workout_plan_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plan_exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.findMany()
     * 
     * // Get first 10 Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workout_plan_exercisesWithIdOnly = await prisma.workout_plan_exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workout_plan_exercisesFindManyArgs>(args?: SelectSubset<T, workout_plan_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout_plan_exercises.
     * @param {workout_plan_exercisesCreateArgs} args - Arguments to create a Workout_plan_exercises.
     * @example
     * // Create one Workout_plan_exercises
     * const Workout_plan_exercises = await prisma.workout_plan_exercises.create({
     *   data: {
     *     // ... data to create a Workout_plan_exercises
     *   }
     * })
     * 
     */
    create<T extends workout_plan_exercisesCreateArgs>(args: SelectSubset<T, workout_plan_exercisesCreateArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workout_plan_exercises.
     * @param {workout_plan_exercisesCreateManyArgs} args - Arguments to create many Workout_plan_exercises.
     * @example
     * // Create many Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workout_plan_exercisesCreateManyArgs>(args?: SelectSubset<T, workout_plan_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workout_plan_exercises and returns the data saved in the database.
     * @param {workout_plan_exercisesCreateManyAndReturnArgs} args - Arguments to create many Workout_plan_exercises.
     * @example
     * // Create many Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workout_plan_exercises and only return the `id`
     * const workout_plan_exercisesWithIdOnly = await prisma.workout_plan_exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workout_plan_exercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, workout_plan_exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout_plan_exercises.
     * @param {workout_plan_exercisesDeleteArgs} args - Arguments to delete one Workout_plan_exercises.
     * @example
     * // Delete one Workout_plan_exercises
     * const Workout_plan_exercises = await prisma.workout_plan_exercises.delete({
     *   where: {
     *     // ... filter to delete one Workout_plan_exercises
     *   }
     * })
     * 
     */
    delete<T extends workout_plan_exercisesDeleteArgs>(args: SelectSubset<T, workout_plan_exercisesDeleteArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout_plan_exercises.
     * @param {workout_plan_exercisesUpdateArgs} args - Arguments to update one Workout_plan_exercises.
     * @example
     * // Update one Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workout_plan_exercisesUpdateArgs>(args: SelectSubset<T, workout_plan_exercisesUpdateArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workout_plan_exercises.
     * @param {workout_plan_exercisesDeleteManyArgs} args - Arguments to filter Workout_plan_exercises to delete.
     * @example
     * // Delete a few Workout_plan_exercises
     * const { count } = await prisma.workout_plan_exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workout_plan_exercisesDeleteManyArgs>(args?: SelectSubset<T, workout_plan_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_plan_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plan_exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workout_plan_exercisesUpdateManyArgs>(args: SelectSubset<T, workout_plan_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_plan_exercises and returns the data updated in the database.
     * @param {workout_plan_exercisesUpdateManyAndReturnArgs} args - Arguments to update many Workout_plan_exercises.
     * @example
     * // Update many Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workout_plan_exercises and only return the `id`
     * const workout_plan_exercisesWithIdOnly = await prisma.workout_plan_exercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workout_plan_exercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, workout_plan_exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout_plan_exercises.
     * @param {workout_plan_exercisesUpsertArgs} args - Arguments to update or create a Workout_plan_exercises.
     * @example
     * // Update or create a Workout_plan_exercises
     * const workout_plan_exercises = await prisma.workout_plan_exercises.upsert({
     *   create: {
     *     // ... data to create a Workout_plan_exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout_plan_exercises we want to update
     *   }
     * })
     */
    upsert<T extends workout_plan_exercisesUpsertArgs>(args: SelectSubset<T, workout_plan_exercisesUpsertArgs<ExtArgs>>): Prisma__workout_plan_exercisesClient<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workout_plan_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plan_exercisesCountArgs} args - Arguments to filter Workout_plan_exercises to count.
     * @example
     * // Count the number of Workout_plan_exercises
     * const count = await prisma.workout_plan_exercises.count({
     *   where: {
     *     // ... the filter for the Workout_plan_exercises we want to count
     *   }
     * })
    **/
    count<T extends workout_plan_exercisesCountArgs>(
      args?: Subset<T, workout_plan_exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workout_plan_exercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout_plan_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workout_plan_exercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workout_plan_exercisesAggregateArgs>(args: Subset<T, Workout_plan_exercisesAggregateArgs>): Prisma.PrismaPromise<GetWorkout_plan_exercisesAggregateType<T>>

    /**
     * Group by Workout_plan_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plan_exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workout_plan_exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workout_plan_exercisesGroupByArgs['orderBy'] }
        : { orderBy?: workout_plan_exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workout_plan_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkout_plan_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workout_plan_exercises model
   */
  readonly fields: workout_plan_exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workout_plan_exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workout_plan_exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends workout_plan_exercises$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, workout_plan_exercises$exercisesArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workout_plans<T extends workout_plansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workout_plansDefaultArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workout_plan_exercises model
   */
  interface workout_plan_exercisesFieldRefs {
    readonly id: FieldRef<"workout_plan_exercises", 'String'>
    readonly workout_plan_id: FieldRef<"workout_plan_exercises", 'String'>
    readonly exercise_id: FieldRef<"workout_plan_exercises", 'String'>
    readonly exercise_name: FieldRef<"workout_plan_exercises", 'String'>
    readonly day_of_week: FieldRef<"workout_plan_exercises", 'Int'>
    readonly sets: FieldRef<"workout_plan_exercises", 'Int'>
    readonly reps: FieldRef<"workout_plan_exercises", 'Int'>
    readonly weight: FieldRef<"workout_plan_exercises", 'Decimal'>
    readonly duration: FieldRef<"workout_plan_exercises", 'Int'>
    readonly completed: FieldRef<"workout_plan_exercises", 'Boolean'>
    readonly completion_date: FieldRef<"workout_plan_exercises", 'DateTime'>
    readonly actual_sets: FieldRef<"workout_plan_exercises", 'Int'>
    readonly actual_reps: FieldRef<"workout_plan_exercises", 'Int'>
    readonly actual_weight: FieldRef<"workout_plan_exercises", 'Decimal'>
    readonly actual_duration: FieldRef<"workout_plan_exercises", 'Int'>
    readonly notes: FieldRef<"workout_plan_exercises", 'String'>
    readonly created_at: FieldRef<"workout_plan_exercises", 'DateTime'>
    readonly updated_at: FieldRef<"workout_plan_exercises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workout_plan_exercises findUnique
   */
  export type workout_plan_exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_plan_exercises to fetch.
     */
    where: workout_plan_exercisesWhereUniqueInput
  }

  /**
   * workout_plan_exercises findUniqueOrThrow
   */
  export type workout_plan_exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_plan_exercises to fetch.
     */
    where: workout_plan_exercisesWhereUniqueInput
  }

  /**
   * workout_plan_exercises findFirst
   */
  export type workout_plan_exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_plan_exercises to fetch.
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plan_exercises to fetch.
     */
    orderBy?: workout_plan_exercisesOrderByWithRelationInput | workout_plan_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_plan_exercises.
     */
    cursor?: workout_plan_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plan_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plan_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plan_exercises.
     */
    distinct?: Workout_plan_exercisesScalarFieldEnum | Workout_plan_exercisesScalarFieldEnum[]
  }

  /**
   * workout_plan_exercises findFirstOrThrow
   */
  export type workout_plan_exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_plan_exercises to fetch.
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plan_exercises to fetch.
     */
    orderBy?: workout_plan_exercisesOrderByWithRelationInput | workout_plan_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_plan_exercises.
     */
    cursor?: workout_plan_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plan_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plan_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plan_exercises.
     */
    distinct?: Workout_plan_exercisesScalarFieldEnum | Workout_plan_exercisesScalarFieldEnum[]
  }

  /**
   * workout_plan_exercises findMany
   */
  export type workout_plan_exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_plan_exercises to fetch.
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plan_exercises to fetch.
     */
    orderBy?: workout_plan_exercisesOrderByWithRelationInput | workout_plan_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workout_plan_exercises.
     */
    cursor?: workout_plan_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plan_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plan_exercises.
     */
    skip?: number
    distinct?: Workout_plan_exercisesScalarFieldEnum | Workout_plan_exercisesScalarFieldEnum[]
  }

  /**
   * workout_plan_exercises create
   */
  export type workout_plan_exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a workout_plan_exercises.
     */
    data: XOR<workout_plan_exercisesCreateInput, workout_plan_exercisesUncheckedCreateInput>
  }

  /**
   * workout_plan_exercises createMany
   */
  export type workout_plan_exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workout_plan_exercises.
     */
    data: workout_plan_exercisesCreateManyInput | workout_plan_exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workout_plan_exercises createManyAndReturn
   */
  export type workout_plan_exercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * The data used to create many workout_plan_exercises.
     */
    data: workout_plan_exercisesCreateManyInput | workout_plan_exercisesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_plan_exercises update
   */
  export type workout_plan_exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a workout_plan_exercises.
     */
    data: XOR<workout_plan_exercisesUpdateInput, workout_plan_exercisesUncheckedUpdateInput>
    /**
     * Choose, which workout_plan_exercises to update.
     */
    where: workout_plan_exercisesWhereUniqueInput
  }

  /**
   * workout_plan_exercises updateMany
   */
  export type workout_plan_exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workout_plan_exercises.
     */
    data: XOR<workout_plan_exercisesUpdateManyMutationInput, workout_plan_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which workout_plan_exercises to update
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * Limit how many workout_plan_exercises to update.
     */
    limit?: number
  }

  /**
   * workout_plan_exercises updateManyAndReturn
   */
  export type workout_plan_exercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * The data used to update workout_plan_exercises.
     */
    data: XOR<workout_plan_exercisesUpdateManyMutationInput, workout_plan_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which workout_plan_exercises to update
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * Limit how many workout_plan_exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_plan_exercises upsert
   */
  export type workout_plan_exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the workout_plan_exercises to update in case it exists.
     */
    where: workout_plan_exercisesWhereUniqueInput
    /**
     * In case the workout_plan_exercises found by the `where` argument doesn't exist, create a new workout_plan_exercises with this data.
     */
    create: XOR<workout_plan_exercisesCreateInput, workout_plan_exercisesUncheckedCreateInput>
    /**
     * In case the workout_plan_exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workout_plan_exercisesUpdateInput, workout_plan_exercisesUncheckedUpdateInput>
  }

  /**
   * workout_plan_exercises delete
   */
  export type workout_plan_exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    /**
     * Filter which workout_plan_exercises to delete.
     */
    where: workout_plan_exercisesWhereUniqueInput
  }

  /**
   * workout_plan_exercises deleteMany
   */
  export type workout_plan_exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_plan_exercises to delete
     */
    where?: workout_plan_exercisesWhereInput
    /**
     * Limit how many workout_plan_exercises to delete.
     */
    limit?: number
  }

  /**
   * workout_plan_exercises.exercises
   */
  export type workout_plan_exercises$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    where?: exercisesWhereInput
  }

  /**
   * workout_plan_exercises without action
   */
  export type workout_plan_exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
  }


  /**
   * Model workout_plans
   */

  export type AggregateWorkout_plans = {
    _count: Workout_plansCountAggregateOutputType | null
    _avg: Workout_plansAvgAggregateOutputType | null
    _sum: Workout_plansSumAggregateOutputType | null
    _min: Workout_plansMinAggregateOutputType | null
    _max: Workout_plansMaxAggregateOutputType | null
  }

  export type Workout_plansAvgAggregateOutputType = {
    frequency: number | null
    duration_weeks: number | null
  }

  export type Workout_plansSumAggregateOutputType = {
    frequency: number | null
    duration_weeks: number | null
  }

  export type Workout_plansMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    description: string | null
    goal: string | null
    frequency: number | null
    duration_weeks: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_plansMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    description: string | null
    goal: string | null
    frequency: number | null
    duration_weeks: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_plansCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    description: number
    goal: number
    frequency: number
    duration_weeks: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Workout_plansAvgAggregateInputType = {
    frequency?: true
    duration_weeks?: true
  }

  export type Workout_plansSumAggregateInputType = {
    frequency?: true
    duration_weeks?: true
  }

  export type Workout_plansMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    goal?: true
    frequency?: true
    duration_weeks?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_plansMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    goal?: true
    frequency?: true
    duration_weeks?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_plansCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    goal?: true
    frequency?: true
    duration_weeks?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Workout_plansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_plans to aggregate.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workout_plans
    **/
    _count?: true | Workout_plansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workout_plansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workout_plansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workout_plansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workout_plansMaxAggregateInputType
  }

  export type GetWorkout_plansAggregateType<T extends Workout_plansAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout_plans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout_plans[P]>
      : GetScalarType<T[P], AggregateWorkout_plans[P]>
  }




  export type workout_plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_plansWhereInput
    orderBy?: workout_plansOrderByWithAggregationInput | workout_plansOrderByWithAggregationInput[]
    by: Workout_plansScalarFieldEnum[] | Workout_plansScalarFieldEnum
    having?: workout_plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workout_plansCountAggregateInputType | true
    _avg?: Workout_plansAvgAggregateInputType
    _sum?: Workout_plansSumAggregateInputType
    _min?: Workout_plansMinAggregateInputType
    _max?: Workout_plansMaxAggregateInputType
  }

  export type Workout_plansGroupByOutputType = {
    id: string
    user_id: string
    name: string
    description: string | null
    goal: string | null
    frequency: number | null
    duration_weeks: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Workout_plansCountAggregateOutputType | null
    _avg: Workout_plansAvgAggregateOutputType | null
    _sum: Workout_plansSumAggregateOutputType | null
    _min: Workout_plansMinAggregateOutputType | null
    _max: Workout_plansMaxAggregateOutputType | null
  }

  type GetWorkout_plansGroupByPayload<T extends workout_plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workout_plansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workout_plansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workout_plansGroupByOutputType[P]>
            : GetScalarType<T[P], Workout_plansGroupByOutputType[P]>
        }
      >
    >


  export type workout_plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    frequency?: boolean
    duration_weeks?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    workout_plan_exercises?: boolean | workout_plans$workout_plan_exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Workout_plansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plans"]>

  export type workout_plansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    frequency?: boolean
    duration_weeks?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plans"]>

  export type workout_plansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    frequency?: boolean
    duration_weeks?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_plans"]>

  export type workout_plansSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    goal?: boolean
    frequency?: boolean
    duration_weeks?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type workout_plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "goal" | "frequency" | "duration_weeks" | "active" | "created_at" | "updated_at", ExtArgs["result"]["workout_plans"]>
  export type workout_plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plan_exercises?: boolean | workout_plans$workout_plan_exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Workout_plansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workout_plansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type workout_plansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $workout_plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workout_plans"
    objects: {
      workout_plan_exercises: Prisma.$workout_plan_exercisesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      name: string
      description: string | null
      goal: string | null
      frequency: number | null
      duration_weeks: number | null
      active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["workout_plans"]>
    composites: {}
  }

  type workout_plansGetPayload<S extends boolean | null | undefined | workout_plansDefaultArgs> = $Result.GetResult<Prisma.$workout_plansPayload, S>

  type workout_plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workout_plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workout_plansCountAggregateInputType | true
    }

  export interface workout_plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workout_plans'], meta: { name: 'workout_plans' } }
    /**
     * Find zero or one Workout_plans that matches the filter.
     * @param {workout_plansFindUniqueArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workout_plansFindUniqueArgs>(args: SelectSubset<T, workout_plansFindUniqueArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout_plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workout_plansFindUniqueOrThrowArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workout_plansFindUniqueOrThrowArgs>(args: SelectSubset<T, workout_plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansFindFirstArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workout_plansFindFirstArgs>(args?: SelectSubset<T, workout_plansFindFirstArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansFindFirstOrThrowArgs} args - Arguments to find a Workout_plans
     * @example
     * // Get one Workout_plans
     * const workout_plans = await prisma.workout_plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workout_plansFindFirstOrThrowArgs>(args?: SelectSubset<T, workout_plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workout_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workout_plans
     * const workout_plans = await prisma.workout_plans.findMany()
     * 
     * // Get first 10 Workout_plans
     * const workout_plans = await prisma.workout_plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workout_plansWithIdOnly = await prisma.workout_plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workout_plansFindManyArgs>(args?: SelectSubset<T, workout_plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout_plans.
     * @param {workout_plansCreateArgs} args - Arguments to create a Workout_plans.
     * @example
     * // Create one Workout_plans
     * const Workout_plans = await prisma.workout_plans.create({
     *   data: {
     *     // ... data to create a Workout_plans
     *   }
     * })
     * 
     */
    create<T extends workout_plansCreateArgs>(args: SelectSubset<T, workout_plansCreateArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workout_plans.
     * @param {workout_plansCreateManyArgs} args - Arguments to create many Workout_plans.
     * @example
     * // Create many Workout_plans
     * const workout_plans = await prisma.workout_plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workout_plansCreateManyArgs>(args?: SelectSubset<T, workout_plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workout_plans and returns the data saved in the database.
     * @param {workout_plansCreateManyAndReturnArgs} args - Arguments to create many Workout_plans.
     * @example
     * // Create many Workout_plans
     * const workout_plans = await prisma.workout_plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workout_plans and only return the `id`
     * const workout_plansWithIdOnly = await prisma.workout_plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workout_plansCreateManyAndReturnArgs>(args?: SelectSubset<T, workout_plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout_plans.
     * @param {workout_plansDeleteArgs} args - Arguments to delete one Workout_plans.
     * @example
     * // Delete one Workout_plans
     * const Workout_plans = await prisma.workout_plans.delete({
     *   where: {
     *     // ... filter to delete one Workout_plans
     *   }
     * })
     * 
     */
    delete<T extends workout_plansDeleteArgs>(args: SelectSubset<T, workout_plansDeleteArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout_plans.
     * @param {workout_plansUpdateArgs} args - Arguments to update one Workout_plans.
     * @example
     * // Update one Workout_plans
     * const workout_plans = await prisma.workout_plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workout_plansUpdateArgs>(args: SelectSubset<T, workout_plansUpdateArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workout_plans.
     * @param {workout_plansDeleteManyArgs} args - Arguments to filter Workout_plans to delete.
     * @example
     * // Delete a few Workout_plans
     * const { count } = await prisma.workout_plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workout_plansDeleteManyArgs>(args?: SelectSubset<T, workout_plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workout_plans
     * const workout_plans = await prisma.workout_plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workout_plansUpdateManyArgs>(args: SelectSubset<T, workout_plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_plans and returns the data updated in the database.
     * @param {workout_plansUpdateManyAndReturnArgs} args - Arguments to update many Workout_plans.
     * @example
     * // Update many Workout_plans
     * const workout_plans = await prisma.workout_plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workout_plans and only return the `id`
     * const workout_plansWithIdOnly = await prisma.workout_plans.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workout_plansUpdateManyAndReturnArgs>(args: SelectSubset<T, workout_plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout_plans.
     * @param {workout_plansUpsertArgs} args - Arguments to update or create a Workout_plans.
     * @example
     * // Update or create a Workout_plans
     * const workout_plans = await prisma.workout_plans.upsert({
     *   create: {
     *     // ... data to create a Workout_plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout_plans we want to update
     *   }
     * })
     */
    upsert<T extends workout_plansUpsertArgs>(args: SelectSubset<T, workout_plansUpsertArgs<ExtArgs>>): Prisma__workout_plansClient<$Result.GetResult<Prisma.$workout_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansCountArgs} args - Arguments to filter Workout_plans to count.
     * @example
     * // Count the number of Workout_plans
     * const count = await prisma.workout_plans.count({
     *   where: {
     *     // ... the filter for the Workout_plans we want to count
     *   }
     * })
    **/
    count<T extends workout_plansCountArgs>(
      args?: Subset<T, workout_plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workout_plansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workout_plansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workout_plansAggregateArgs>(args: Subset<T, Workout_plansAggregateArgs>): Prisma.PrismaPromise<GetWorkout_plansAggregateType<T>>

    /**
     * Group by Workout_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_plansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workout_plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workout_plansGroupByArgs['orderBy'] }
        : { orderBy?: workout_plansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workout_plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkout_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workout_plans model
   */
  readonly fields: workout_plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workout_plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workout_plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout_plan_exercises<T extends workout_plans$workout_plan_exercisesArgs<ExtArgs> = {}>(args?: Subset<T, workout_plans$workout_plan_exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_plan_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workout_plans model
   */
  interface workout_plansFieldRefs {
    readonly id: FieldRef<"workout_plans", 'String'>
    readonly user_id: FieldRef<"workout_plans", 'String'>
    readonly name: FieldRef<"workout_plans", 'String'>
    readonly description: FieldRef<"workout_plans", 'String'>
    readonly goal: FieldRef<"workout_plans", 'String'>
    readonly frequency: FieldRef<"workout_plans", 'Int'>
    readonly duration_weeks: FieldRef<"workout_plans", 'Int'>
    readonly active: FieldRef<"workout_plans", 'Boolean'>
    readonly created_at: FieldRef<"workout_plans", 'DateTime'>
    readonly updated_at: FieldRef<"workout_plans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workout_plans findUnique
   */
  export type workout_plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans findUniqueOrThrow
   */
  export type workout_plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans findFirst
   */
  export type workout_plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_plans.
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plans.
     */
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * workout_plans findFirstOrThrow
   */
  export type workout_plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_plans.
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_plans.
     */
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * workout_plans findMany
   */
  export type workout_plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter, which workout_plans to fetch.
     */
    where?: workout_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_plans to fetch.
     */
    orderBy?: workout_plansOrderByWithRelationInput | workout_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workout_plans.
     */
    cursor?: workout_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_plans.
     */
    skip?: number
    distinct?: Workout_plansScalarFieldEnum | Workout_plansScalarFieldEnum[]
  }

  /**
   * workout_plans create
   */
  export type workout_plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * The data needed to create a workout_plans.
     */
    data: XOR<workout_plansCreateInput, workout_plansUncheckedCreateInput>
  }

  /**
   * workout_plans createMany
   */
  export type workout_plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workout_plans.
     */
    data: workout_plansCreateManyInput | workout_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workout_plans createManyAndReturn
   */
  export type workout_plansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * The data used to create many workout_plans.
     */
    data: workout_plansCreateManyInput | workout_plansCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_plans update
   */
  export type workout_plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * The data needed to update a workout_plans.
     */
    data: XOR<workout_plansUpdateInput, workout_plansUncheckedUpdateInput>
    /**
     * Choose, which workout_plans to update.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans updateMany
   */
  export type workout_plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workout_plans.
     */
    data: XOR<workout_plansUpdateManyMutationInput, workout_plansUncheckedUpdateManyInput>
    /**
     * Filter which workout_plans to update
     */
    where?: workout_plansWhereInput
    /**
     * Limit how many workout_plans to update.
     */
    limit?: number
  }

  /**
   * workout_plans updateManyAndReturn
   */
  export type workout_plansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * The data used to update workout_plans.
     */
    data: XOR<workout_plansUpdateManyMutationInput, workout_plansUncheckedUpdateManyInput>
    /**
     * Filter which workout_plans to update
     */
    where?: workout_plansWhereInput
    /**
     * Limit how many workout_plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_plans upsert
   */
  export type workout_plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * The filter to search for the workout_plans to update in case it exists.
     */
    where: workout_plansWhereUniqueInput
    /**
     * In case the workout_plans found by the `where` argument doesn't exist, create a new workout_plans with this data.
     */
    create: XOR<workout_plansCreateInput, workout_plansUncheckedCreateInput>
    /**
     * In case the workout_plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workout_plansUpdateInput, workout_plansUncheckedUpdateInput>
  }

  /**
   * workout_plans delete
   */
  export type workout_plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
    /**
     * Filter which workout_plans to delete.
     */
    where: workout_plansWhereUniqueInput
  }

  /**
   * workout_plans deleteMany
   */
  export type workout_plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_plans to delete
     */
    where?: workout_plansWhereInput
    /**
     * Limit how many workout_plans to delete.
     */
    limit?: number
  }

  /**
   * workout_plans.workout_plan_exercises
   */
  export type workout_plans$workout_plan_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plan_exercises
     */
    select?: workout_plan_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plan_exercises
     */
    omit?: workout_plan_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plan_exercisesInclude<ExtArgs> | null
    where?: workout_plan_exercisesWhereInput
    orderBy?: workout_plan_exercisesOrderByWithRelationInput | workout_plan_exercisesOrderByWithRelationInput[]
    cursor?: workout_plan_exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_plan_exercisesScalarFieldEnum | Workout_plan_exercisesScalarFieldEnum[]
  }

  /**
   * workout_plans without action
   */
  export type workout_plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_plans
     */
    select?: workout_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_plans
     */
    omit?: workout_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_plansInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Exercise_logsScalarFieldEnum: {
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

  export type Exercise_logsScalarFieldEnum = (typeof Exercise_logsScalarFieldEnum)[keyof typeof Exercise_logsScalarFieldEnum]


  export const ExercisesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    description: 'description',
    muscle_groups: 'muscle_groups',
    equipment: 'equipment',
    difficulty: 'difficulty',
    created_at: 'created_at'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const Meal_logsScalarFieldEnum: {
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

  export type Meal_logsScalarFieldEnum = (typeof Meal_logsScalarFieldEnum)[keyof typeof Meal_logsScalarFieldEnum]


  export const MealsScalarFieldEnum: {
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

  export type MealsScalarFieldEnum = (typeof MealsScalarFieldEnum)[keyof typeof MealsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Water_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount_ml: 'amount_ml',
    logged_at: 'logged_at',
    created_at: 'created_at'
  };

  export type Water_logsScalarFieldEnum = (typeof Water_logsScalarFieldEnum)[keyof typeof Water_logsScalarFieldEnum]


  export const Weight_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    weight: 'weight',
    logged_at: 'logged_at',
    created_at: 'created_at'
  };

  export type Weight_logsScalarFieldEnum = (typeof Weight_logsScalarFieldEnum)[keyof typeof Weight_logsScalarFieldEnum]


  export const Workout_plan_exercisesScalarFieldEnum: {
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

  export type Workout_plan_exercisesScalarFieldEnum = (typeof Workout_plan_exercisesScalarFieldEnum)[keyof typeof Workout_plan_exercisesScalarFieldEnum]


  export const Workout_plansScalarFieldEnum: {
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

  export type Workout_plansScalarFieldEnum = (typeof Workout_plansScalarFieldEnum)[keyof typeof Workout_plansScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type exercise_logsWhereInput = {
    AND?: exercise_logsWhereInput | exercise_logsWhereInput[]
    OR?: exercise_logsWhereInput[]
    NOT?: exercise_logsWhereInput | exercise_logsWhereInput[]
    id?: UuidFilter<"exercise_logs"> | string
    user_id?: UuidFilter<"exercise_logs"> | string
    exercise_id?: UuidNullableFilter<"exercise_logs"> | string | null
    exercise_name?: StringNullableFilter<"exercise_logs"> | string | null
    sets?: IntNullableFilter<"exercise_logs"> | number | null
    reps?: IntNullableFilter<"exercise_logs"> | number | null
    weight?: DecimalNullableFilter<"exercise_logs"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableFilter<"exercise_logs"> | number | null
    intensity?: StringNullableFilter<"exercise_logs"> | string | null
    notes?: StringNullableFilter<"exercise_logs"> | string | null
    completed_at?: DateTimeFilter<"exercise_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"exercise_logs"> | Date | string | null
    exercises?: XOR<ExercisesNullableScalarRelationFilter, exercisesWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type exercise_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrderInput | SortOrder
    exercise_name?: SortOrderInput | SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    intensity?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    completed_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    exercises?: exercisesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type exercise_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: exercise_logsWhereInput | exercise_logsWhereInput[]
    OR?: exercise_logsWhereInput[]
    NOT?: exercise_logsWhereInput | exercise_logsWhereInput[]
    user_id?: UuidFilter<"exercise_logs"> | string
    exercise_id?: UuidNullableFilter<"exercise_logs"> | string | null
    exercise_name?: StringNullableFilter<"exercise_logs"> | string | null
    sets?: IntNullableFilter<"exercise_logs"> | number | null
    reps?: IntNullableFilter<"exercise_logs"> | number | null
    weight?: DecimalNullableFilter<"exercise_logs"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableFilter<"exercise_logs"> | number | null
    intensity?: StringNullableFilter<"exercise_logs"> | string | null
    notes?: StringNullableFilter<"exercise_logs"> | string | null
    completed_at?: DateTimeFilter<"exercise_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"exercise_logs"> | Date | string | null
    exercises?: XOR<ExercisesNullableScalarRelationFilter, exercisesWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type exercise_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrderInput | SortOrder
    exercise_name?: SortOrderInput | SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    intensity?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    completed_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: exercise_logsCountOrderByAggregateInput
    _avg?: exercise_logsAvgOrderByAggregateInput
    _max?: exercise_logsMaxOrderByAggregateInput
    _min?: exercise_logsMinOrderByAggregateInput
    _sum?: exercise_logsSumOrderByAggregateInput
  }

  export type exercise_logsScalarWhereWithAggregatesInput = {
    AND?: exercise_logsScalarWhereWithAggregatesInput | exercise_logsScalarWhereWithAggregatesInput[]
    OR?: exercise_logsScalarWhereWithAggregatesInput[]
    NOT?: exercise_logsScalarWhereWithAggregatesInput | exercise_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"exercise_logs"> | string
    user_id?: UuidWithAggregatesFilter<"exercise_logs"> | string
    exercise_id?: UuidNullableWithAggregatesFilter<"exercise_logs"> | string | null
    exercise_name?: StringNullableWithAggregatesFilter<"exercise_logs"> | string | null
    sets?: IntNullableWithAggregatesFilter<"exercise_logs"> | number | null
    reps?: IntNullableWithAggregatesFilter<"exercise_logs"> | number | null
    weight?: DecimalNullableWithAggregatesFilter<"exercise_logs"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableWithAggregatesFilter<"exercise_logs"> | number | null
    intensity?: StringNullableWithAggregatesFilter<"exercise_logs"> | string | null
    notes?: StringNullableWithAggregatesFilter<"exercise_logs"> | string | null
    completed_at?: DateTimeWithAggregatesFilter<"exercise_logs"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"exercise_logs"> | Date | string | null
  }

  export type exercisesWhereInput = {
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    id?: UuidFilter<"exercises"> | string
    name?: StringFilter<"exercises"> | string
    category?: StringFilter<"exercises"> | string
    description?: StringNullableFilter<"exercises"> | string | null
    muscle_groups?: StringNullableListFilter<"exercises">
    equipment?: StringNullableListFilter<"exercises">
    difficulty?: StringNullableFilter<"exercises"> | string | null
    created_at?: DateTimeNullableFilter<"exercises"> | Date | string | null
    exercise_logs?: Exercise_logsListRelationFilter
    workout_plan_exercises?: Workout_plan_exercisesListRelationFilter
  }

  export type exercisesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    muscle_groups?: SortOrder
    equipment?: SortOrder
    difficulty?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    exercise_logs?: exercise_logsOrderByRelationAggregateInput
    workout_plan_exercises?: workout_plan_exercisesOrderByRelationAggregateInput
  }

  export type exercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    name?: StringFilter<"exercises"> | string
    category?: StringFilter<"exercises"> | string
    description?: StringNullableFilter<"exercises"> | string | null
    muscle_groups?: StringNullableListFilter<"exercises">
    equipment?: StringNullableListFilter<"exercises">
    difficulty?: StringNullableFilter<"exercises"> | string | null
    created_at?: DateTimeNullableFilter<"exercises"> | Date | string | null
    exercise_logs?: Exercise_logsListRelationFilter
    workout_plan_exercises?: Workout_plan_exercisesListRelationFilter
  }, "id">

  export type exercisesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    muscle_groups?: SortOrder
    equipment?: SortOrder
    difficulty?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: exercisesCountOrderByAggregateInput
    _max?: exercisesMaxOrderByAggregateInput
    _min?: exercisesMinOrderByAggregateInput
  }

  export type exercisesScalarWhereWithAggregatesInput = {
    AND?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    OR?: exercisesScalarWhereWithAggregatesInput[]
    NOT?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"exercises"> | string
    name?: StringWithAggregatesFilter<"exercises"> | string
    category?: StringWithAggregatesFilter<"exercises"> | string
    description?: StringNullableWithAggregatesFilter<"exercises"> | string | null
    muscle_groups?: StringNullableListFilter<"exercises">
    equipment?: StringNullableListFilter<"exercises">
    difficulty?: StringNullableWithAggregatesFilter<"exercises"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"exercises"> | Date | string | null
  }

  export type meal_logsWhereInput = {
    AND?: meal_logsWhereInput | meal_logsWhereInput[]
    OR?: meal_logsWhereInput[]
    NOT?: meal_logsWhereInput | meal_logsWhereInput[]
    id?: UuidFilter<"meal_logs"> | string
    user_id?: UuidFilter<"meal_logs"> | string
    meal_id?: UuidNullableFilter<"meal_logs"> | string | null
    meal_name?: StringNullableFilter<"meal_logs"> | string | null
    portion?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    calories?: IntNullableFilter<"meal_logs"> | number | null
    protein?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    meal_time?: StringNullableFilter<"meal_logs"> | string | null
    notes?: StringNullableFilter<"meal_logs"> | string | null
    consumed_at?: DateTimeFilter<"meal_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"meal_logs"> | Date | string | null
    meals?: XOR<MealsNullableScalarRelationFilter, mealsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type meal_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrderInput | SortOrder
    meal_name?: SortOrderInput | SortOrder
    portion?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fats?: SortOrderInput | SortOrder
    meal_time?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    consumed_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    meals?: mealsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type meal_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: meal_logsWhereInput | meal_logsWhereInput[]
    OR?: meal_logsWhereInput[]
    NOT?: meal_logsWhereInput | meal_logsWhereInput[]
    user_id?: UuidFilter<"meal_logs"> | string
    meal_id?: UuidNullableFilter<"meal_logs"> | string | null
    meal_name?: StringNullableFilter<"meal_logs"> | string | null
    portion?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    calories?: IntNullableFilter<"meal_logs"> | number | null
    protein?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    meal_time?: StringNullableFilter<"meal_logs"> | string | null
    notes?: StringNullableFilter<"meal_logs"> | string | null
    consumed_at?: DateTimeFilter<"meal_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"meal_logs"> | Date | string | null
    meals?: XOR<MealsNullableScalarRelationFilter, mealsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type meal_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrderInput | SortOrder
    meal_name?: SortOrderInput | SortOrder
    portion?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fats?: SortOrderInput | SortOrder
    meal_time?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    consumed_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: meal_logsCountOrderByAggregateInput
    _avg?: meal_logsAvgOrderByAggregateInput
    _max?: meal_logsMaxOrderByAggregateInput
    _min?: meal_logsMinOrderByAggregateInput
    _sum?: meal_logsSumOrderByAggregateInput
  }

  export type meal_logsScalarWhereWithAggregatesInput = {
    AND?: meal_logsScalarWhereWithAggregatesInput | meal_logsScalarWhereWithAggregatesInput[]
    OR?: meal_logsScalarWhereWithAggregatesInput[]
    NOT?: meal_logsScalarWhereWithAggregatesInput | meal_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"meal_logs"> | string
    user_id?: UuidWithAggregatesFilter<"meal_logs"> | string
    meal_id?: UuidNullableWithAggregatesFilter<"meal_logs"> | string | null
    meal_name?: StringNullableWithAggregatesFilter<"meal_logs"> | string | null
    portion?: DecimalNullableWithAggregatesFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    calories?: IntNullableWithAggregatesFilter<"meal_logs"> | number | null
    protein?: DecimalNullableWithAggregatesFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableWithAggregatesFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableWithAggregatesFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    meal_time?: StringNullableWithAggregatesFilter<"meal_logs"> | string | null
    notes?: StringNullableWithAggregatesFilter<"meal_logs"> | string | null
    consumed_at?: DateTimeWithAggregatesFilter<"meal_logs"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"meal_logs"> | Date | string | null
  }

  export type mealsWhereInput = {
    AND?: mealsWhereInput | mealsWhereInput[]
    OR?: mealsWhereInput[]
    NOT?: mealsWhereInput | mealsWhereInput[]
    id?: UuidFilter<"meals"> | string
    name?: StringFilter<"meals"> | string
    category?: StringNullableFilter<"meals"> | string | null
    calories?: IntNullableFilter<"meals"> | number | null
    protein?: DecimalNullableFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    image_url?: StringNullableFilter<"meals"> | string | null
    description?: StringNullableFilter<"meals"> | string | null
    created_at?: DateTimeNullableFilter<"meals"> | Date | string | null
    meal_logs?: Meal_logsListRelationFilter
  }

  export type mealsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fats?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meal_logs?: meal_logsOrderByRelationAggregateInput
  }

  export type mealsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mealsWhereInput | mealsWhereInput[]
    OR?: mealsWhereInput[]
    NOT?: mealsWhereInput | mealsWhereInput[]
    name?: StringFilter<"meals"> | string
    category?: StringNullableFilter<"meals"> | string | null
    calories?: IntNullableFilter<"meals"> | number | null
    protein?: DecimalNullableFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    image_url?: StringNullableFilter<"meals"> | string | null
    description?: StringNullableFilter<"meals"> | string | null
    created_at?: DateTimeNullableFilter<"meals"> | Date | string | null
    meal_logs?: Meal_logsListRelationFilter
  }, "id">

  export type mealsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fats?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: mealsCountOrderByAggregateInput
    _avg?: mealsAvgOrderByAggregateInput
    _max?: mealsMaxOrderByAggregateInput
    _min?: mealsMinOrderByAggregateInput
    _sum?: mealsSumOrderByAggregateInput
  }

  export type mealsScalarWhereWithAggregatesInput = {
    AND?: mealsScalarWhereWithAggregatesInput | mealsScalarWhereWithAggregatesInput[]
    OR?: mealsScalarWhereWithAggregatesInput[]
    NOT?: mealsScalarWhereWithAggregatesInput | mealsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"meals"> | string
    name?: StringWithAggregatesFilter<"meals"> | string
    category?: StringNullableWithAggregatesFilter<"meals"> | string | null
    calories?: IntNullableWithAggregatesFilter<"meals"> | number | null
    protein?: DecimalNullableWithAggregatesFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableWithAggregatesFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableWithAggregatesFilter<"meals"> | Decimal | DecimalJsLike | number | string | null
    image_url?: StringNullableWithAggregatesFilter<"meals"> | string | null
    description?: StringNullableWithAggregatesFilter<"meals"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"meals"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    age?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    weight?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    bmi?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: StringNullableFilter<"users"> | string | null
    dietary_preference?: StringNullableFilter<"users"> | string | null
    dietary_restrictions?: StringNullableListFilter<"users">
    avatar_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    age_range?: StringFilter<"users"> | string
    exercise_logs?: Exercise_logsListRelationFilter
    meal_logs?: Meal_logsListRelationFilter
    water_logs?: Water_logsListRelationFilter
    weight_logs?: Weight_logsListRelationFilter
    workout_plans?: Workout_plansListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    fitness_goal?: SortOrderInput | SortOrder
    dietary_preference?: SortOrderInput | SortOrder
    dietary_restrictions?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    age_range?: SortOrder
    exercise_logs?: exercise_logsOrderByRelationAggregateInput
    meal_logs?: meal_logsOrderByRelationAggregateInput
    water_logs?: water_logsOrderByRelationAggregateInput
    weight_logs?: weight_logsOrderByRelationAggregateInput
    workout_plans?: workout_plansOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    age?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    weight?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    bmi?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: StringNullableFilter<"users"> | string | null
    dietary_preference?: StringNullableFilter<"users"> | string | null
    dietary_restrictions?: StringNullableListFilter<"users">
    avatar_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    age_range?: StringFilter<"users"> | string
    exercise_logs?: Exercise_logsListRelationFilter
    meal_logs?: Meal_logsListRelationFilter
    water_logs?: Water_logsListRelationFilter
    weight_logs?: Weight_logsListRelationFilter
    workout_plans?: Workout_plansListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    fitness_goal?: SortOrderInput | SortOrder
    dietary_preference?: SortOrderInput | SortOrder
    dietary_restrictions?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    age_range?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    weight?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    bmi?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: StringNullableWithAggregatesFilter<"users"> | string | null
    dietary_preference?: StringNullableWithAggregatesFilter<"users"> | string | null
    dietary_restrictions?: StringNullableListFilter<"users">
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    age_range?: StringWithAggregatesFilter<"users"> | string
  }

  export type water_logsWhereInput = {
    AND?: water_logsWhereInput | water_logsWhereInput[]
    OR?: water_logsWhereInput[]
    NOT?: water_logsWhereInput | water_logsWhereInput[]
    id?: UuidFilter<"water_logs"> | string
    user_id?: UuidFilter<"water_logs"> | string
    amount_ml?: IntFilter<"water_logs"> | number
    logged_at?: DateTimeFilter<"water_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"water_logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type water_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_ml?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type water_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: water_logsWhereInput | water_logsWhereInput[]
    OR?: water_logsWhereInput[]
    NOT?: water_logsWhereInput | water_logsWhereInput[]
    user_id?: UuidFilter<"water_logs"> | string
    amount_ml?: IntFilter<"water_logs"> | number
    logged_at?: DateTimeFilter<"water_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"water_logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type water_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_ml?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: water_logsCountOrderByAggregateInput
    _avg?: water_logsAvgOrderByAggregateInput
    _max?: water_logsMaxOrderByAggregateInput
    _min?: water_logsMinOrderByAggregateInput
    _sum?: water_logsSumOrderByAggregateInput
  }

  export type water_logsScalarWhereWithAggregatesInput = {
    AND?: water_logsScalarWhereWithAggregatesInput | water_logsScalarWhereWithAggregatesInput[]
    OR?: water_logsScalarWhereWithAggregatesInput[]
    NOT?: water_logsScalarWhereWithAggregatesInput | water_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"water_logs"> | string
    user_id?: UuidWithAggregatesFilter<"water_logs"> | string
    amount_ml?: IntWithAggregatesFilter<"water_logs"> | number
    logged_at?: DateTimeWithAggregatesFilter<"water_logs"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"water_logs"> | Date | string | null
  }

  export type weight_logsWhereInput = {
    AND?: weight_logsWhereInput | weight_logsWhereInput[]
    OR?: weight_logsWhereInput[]
    NOT?: weight_logsWhereInput | weight_logsWhereInput[]
    id?: UuidFilter<"weight_logs"> | string
    user_id?: UuidFilter<"weight_logs"> | string
    weight?: DecimalFilter<"weight_logs"> | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFilter<"weight_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"weight_logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type weight_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type weight_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: weight_logsWhereInput | weight_logsWhereInput[]
    OR?: weight_logsWhereInput[]
    NOT?: weight_logsWhereInput | weight_logsWhereInput[]
    user_id?: UuidFilter<"weight_logs"> | string
    weight?: DecimalFilter<"weight_logs"> | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFilter<"weight_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"weight_logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type weight_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: weight_logsCountOrderByAggregateInput
    _avg?: weight_logsAvgOrderByAggregateInput
    _max?: weight_logsMaxOrderByAggregateInput
    _min?: weight_logsMinOrderByAggregateInput
    _sum?: weight_logsSumOrderByAggregateInput
  }

  export type weight_logsScalarWhereWithAggregatesInput = {
    AND?: weight_logsScalarWhereWithAggregatesInput | weight_logsScalarWhereWithAggregatesInput[]
    OR?: weight_logsScalarWhereWithAggregatesInput[]
    NOT?: weight_logsScalarWhereWithAggregatesInput | weight_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"weight_logs"> | string
    user_id?: UuidWithAggregatesFilter<"weight_logs"> | string
    weight?: DecimalWithAggregatesFilter<"weight_logs"> | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeWithAggregatesFilter<"weight_logs"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"weight_logs"> | Date | string | null
  }

  export type workout_plan_exercisesWhereInput = {
    AND?: workout_plan_exercisesWhereInput | workout_plan_exercisesWhereInput[]
    OR?: workout_plan_exercisesWhereInput[]
    NOT?: workout_plan_exercisesWhereInput | workout_plan_exercisesWhereInput[]
    id?: UuidFilter<"workout_plan_exercises"> | string
    workout_plan_id?: UuidFilter<"workout_plan_exercises"> | string
    exercise_id?: UuidNullableFilter<"workout_plan_exercises"> | string | null
    exercise_name?: StringNullableFilter<"workout_plan_exercises"> | string | null
    day_of_week?: IntNullableFilter<"workout_plan_exercises"> | number | null
    sets?: IntNullableFilter<"workout_plan_exercises"> | number | null
    reps?: IntNullableFilter<"workout_plan_exercises"> | number | null
    weight?: DecimalNullableFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableFilter<"workout_plan_exercises"> | number | null
    completed?: BoolNullableFilter<"workout_plan_exercises"> | boolean | null
    completion_date?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    actual_sets?: IntNullableFilter<"workout_plan_exercises"> | number | null
    actual_reps?: IntNullableFilter<"workout_plan_exercises"> | number | null
    actual_weight?: DecimalNullableFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    actual_duration?: IntNullableFilter<"workout_plan_exercises"> | number | null
    notes?: StringNullableFilter<"workout_plan_exercises"> | string | null
    created_at?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    exercises?: XOR<ExercisesNullableScalarRelationFilter, exercisesWhereInput> | null
    workout_plans?: XOR<Workout_plansScalarRelationFilter, workout_plansWhereInput>
  }

  export type workout_plan_exercisesOrderByWithRelationInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_id?: SortOrderInput | SortOrder
    exercise_name?: SortOrderInput | SortOrder
    day_of_week?: SortOrderInput | SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    completion_date?: SortOrderInput | SortOrder
    actual_sets?: SortOrderInput | SortOrder
    actual_reps?: SortOrderInput | SortOrder
    actual_weight?: SortOrderInput | SortOrder
    actual_duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    exercises?: exercisesOrderByWithRelationInput
    workout_plans?: workout_plansOrderByWithRelationInput
  }

  export type workout_plan_exercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workout_plan_exercisesWhereInput | workout_plan_exercisesWhereInput[]
    OR?: workout_plan_exercisesWhereInput[]
    NOT?: workout_plan_exercisesWhereInput | workout_plan_exercisesWhereInput[]
    workout_plan_id?: UuidFilter<"workout_plan_exercises"> | string
    exercise_id?: UuidNullableFilter<"workout_plan_exercises"> | string | null
    exercise_name?: StringNullableFilter<"workout_plan_exercises"> | string | null
    day_of_week?: IntNullableFilter<"workout_plan_exercises"> | number | null
    sets?: IntNullableFilter<"workout_plan_exercises"> | number | null
    reps?: IntNullableFilter<"workout_plan_exercises"> | number | null
    weight?: DecimalNullableFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableFilter<"workout_plan_exercises"> | number | null
    completed?: BoolNullableFilter<"workout_plan_exercises"> | boolean | null
    completion_date?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    actual_sets?: IntNullableFilter<"workout_plan_exercises"> | number | null
    actual_reps?: IntNullableFilter<"workout_plan_exercises"> | number | null
    actual_weight?: DecimalNullableFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    actual_duration?: IntNullableFilter<"workout_plan_exercises"> | number | null
    notes?: StringNullableFilter<"workout_plan_exercises"> | string | null
    created_at?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    exercises?: XOR<ExercisesNullableScalarRelationFilter, exercisesWhereInput> | null
    workout_plans?: XOR<Workout_plansScalarRelationFilter, workout_plansWhereInput>
  }, "id">

  export type workout_plan_exercisesOrderByWithAggregationInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_id?: SortOrderInput | SortOrder
    exercise_name?: SortOrderInput | SortOrder
    day_of_week?: SortOrderInput | SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    completion_date?: SortOrderInput | SortOrder
    actual_sets?: SortOrderInput | SortOrder
    actual_reps?: SortOrderInput | SortOrder
    actual_weight?: SortOrderInput | SortOrder
    actual_duration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: workout_plan_exercisesCountOrderByAggregateInput
    _avg?: workout_plan_exercisesAvgOrderByAggregateInput
    _max?: workout_plan_exercisesMaxOrderByAggregateInput
    _min?: workout_plan_exercisesMinOrderByAggregateInput
    _sum?: workout_plan_exercisesSumOrderByAggregateInput
  }

  export type workout_plan_exercisesScalarWhereWithAggregatesInput = {
    AND?: workout_plan_exercisesScalarWhereWithAggregatesInput | workout_plan_exercisesScalarWhereWithAggregatesInput[]
    OR?: workout_plan_exercisesScalarWhereWithAggregatesInput[]
    NOT?: workout_plan_exercisesScalarWhereWithAggregatesInput | workout_plan_exercisesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workout_plan_exercises"> | string
    workout_plan_id?: UuidWithAggregatesFilter<"workout_plan_exercises"> | string
    exercise_id?: UuidNullableWithAggregatesFilter<"workout_plan_exercises"> | string | null
    exercise_name?: StringNullableWithAggregatesFilter<"workout_plan_exercises"> | string | null
    day_of_week?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    sets?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    reps?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    weight?: DecimalNullableWithAggregatesFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    completed?: BoolNullableWithAggregatesFilter<"workout_plan_exercises"> | boolean | null
    completion_date?: DateTimeNullableWithAggregatesFilter<"workout_plan_exercises"> | Date | string | null
    actual_sets?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    actual_reps?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    actual_weight?: DecimalNullableWithAggregatesFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    actual_duration?: IntNullableWithAggregatesFilter<"workout_plan_exercises"> | number | null
    notes?: StringNullableWithAggregatesFilter<"workout_plan_exercises"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"workout_plan_exercises"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workout_plan_exercises"> | Date | string | null
  }

  export type workout_plansWhereInput = {
    AND?: workout_plansWhereInput | workout_plansWhereInput[]
    OR?: workout_plansWhereInput[]
    NOT?: workout_plansWhereInput | workout_plansWhereInput[]
    id?: UuidFilter<"workout_plans"> | string
    user_id?: UuidFilter<"workout_plans"> | string
    name?: StringFilter<"workout_plans"> | string
    description?: StringNullableFilter<"workout_plans"> | string | null
    goal?: StringNullableFilter<"workout_plans"> | string | null
    frequency?: IntNullableFilter<"workout_plans"> | number | null
    duration_weeks?: IntNullableFilter<"workout_plans"> | number | null
    active?: BoolNullableFilter<"workout_plans"> | boolean | null
    created_at?: DateTimeNullableFilter<"workout_plans"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_plans"> | Date | string | null
    workout_plan_exercises?: Workout_plan_exercisesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type workout_plansOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    duration_weeks?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    workout_plan_exercises?: workout_plan_exercisesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type workout_plansWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workout_plansWhereInput | workout_plansWhereInput[]
    OR?: workout_plansWhereInput[]
    NOT?: workout_plansWhereInput | workout_plansWhereInput[]
    user_id?: UuidFilter<"workout_plans"> | string
    name?: StringFilter<"workout_plans"> | string
    description?: StringNullableFilter<"workout_plans"> | string | null
    goal?: StringNullableFilter<"workout_plans"> | string | null
    frequency?: IntNullableFilter<"workout_plans"> | number | null
    duration_weeks?: IntNullableFilter<"workout_plans"> | number | null
    active?: BoolNullableFilter<"workout_plans"> | boolean | null
    created_at?: DateTimeNullableFilter<"workout_plans"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_plans"> | Date | string | null
    workout_plan_exercises?: Workout_plan_exercisesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type workout_plansOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    duration_weeks?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: workout_plansCountOrderByAggregateInput
    _avg?: workout_plansAvgOrderByAggregateInput
    _max?: workout_plansMaxOrderByAggregateInput
    _min?: workout_plansMinOrderByAggregateInput
    _sum?: workout_plansSumOrderByAggregateInput
  }

  export type workout_plansScalarWhereWithAggregatesInput = {
    AND?: workout_plansScalarWhereWithAggregatesInput | workout_plansScalarWhereWithAggregatesInput[]
    OR?: workout_plansScalarWhereWithAggregatesInput[]
    NOT?: workout_plansScalarWhereWithAggregatesInput | workout_plansScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workout_plans"> | string
    user_id?: UuidWithAggregatesFilter<"workout_plans"> | string
    name?: StringWithAggregatesFilter<"workout_plans"> | string
    description?: StringNullableWithAggregatesFilter<"workout_plans"> | string | null
    goal?: StringNullableWithAggregatesFilter<"workout_plans"> | string | null
    frequency?: IntNullableWithAggregatesFilter<"workout_plans"> | number | null
    duration_weeks?: IntNullableWithAggregatesFilter<"workout_plans"> | number | null
    active?: BoolNullableWithAggregatesFilter<"workout_plans"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"workout_plans"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workout_plans"> | Date | string | null
  }

  export type exercise_logsCreateInput = {
    id?: string
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
    exercises?: exercisesCreateNestedOneWithoutExercise_logsInput
    users: usersCreateNestedOneWithoutExercise_logsInput
  }

  export type exercise_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    exercise_id?: string | null
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
  }

  export type exercise_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneWithoutExercise_logsNestedInput
    users?: usersUpdateOneRequiredWithoutExercise_logsNestedInput
  }

  export type exercise_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercise_logsCreateManyInput = {
    id?: string
    user_id: string
    exercise_id?: string | null
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
  }

  export type exercise_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercise_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercisesCreateInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
    exercise_logs?: exercise_logsCreateNestedManyWithoutExercisesInput
    workout_plan_exercises?: workout_plan_exercisesCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutExercisesInput
    workout_plan_exercises?: workout_plan_exercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercise_logs?: exercise_logsUpdateManyWithoutExercisesNestedInput
    workout_plan_exercises?: workout_plan_exercisesUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutExercisesNestedInput
    workout_plan_exercises?: workout_plan_exercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesCreateManyInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
  }

  export type exercisesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercisesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsCreateInput = {
    id?: string
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
    meals?: mealsCreateNestedOneWithoutMeal_logsInput
    users: usersCreateNestedOneWithoutMeal_logsInput
  }

  export type meal_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    meal_id?: string | null
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
  }

  export type meal_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meals?: mealsUpdateOneWithoutMeal_logsNestedInput
    users?: usersUpdateOneRequiredWithoutMeal_logsNestedInput
  }

  export type meal_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    meal_id?: NullableStringFieldUpdateOperationsInput | string | null
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsCreateManyInput = {
    id?: string
    user_id: string
    meal_id?: string | null
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
  }

  export type meal_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    meal_id?: NullableStringFieldUpdateOperationsInput | string | null
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mealsCreateInput = {
    id?: string
    name: string
    category?: string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    image_url?: string | null
    description?: string | null
    created_at?: Date | string | null
    meal_logs?: meal_logsCreateNestedManyWithoutMealsInput
  }

  export type mealsUncheckedCreateInput = {
    id?: string
    name: string
    category?: string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    image_url?: string | null
    description?: string | null
    created_at?: Date | string | null
    meal_logs?: meal_logsUncheckedCreateNestedManyWithoutMealsInput
  }

  export type mealsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meal_logs?: meal_logsUpdateManyWithoutMealsNestedInput
  }

  export type mealsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meal_logs?: meal_logsUncheckedUpdateManyWithoutMealsNestedInput
  }

  export type mealsCreateManyInput = {
    id?: string
    name: string
    category?: string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    image_url?: string | null
    description?: string | null
    created_at?: Date | string | null
  }

  export type mealsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mealsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsCreateNestedManyWithoutUsersInput
    water_logs?: water_logsCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsUncheckedCreateNestedManyWithoutUsersInput
    water_logs?: water_logsUncheckedCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUncheckedUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUncheckedUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
  }

  export type water_logsCreateInput = {
    id?: string
    amount_ml: number
    logged_at?: Date | string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutWater_logsInput
  }

  export type water_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    amount_ml: number
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type water_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWater_logsNestedInput
  }

  export type water_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type water_logsCreateManyInput = {
    id?: string
    user_id: string
    amount_ml: number
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type water_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type water_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type weight_logsCreateInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    logged_at?: Date | string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutWeight_logsInput
  }

  export type weight_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    weight: Decimal | DecimalJsLike | number | string
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type weight_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWeight_logsNestedInput
  }

  export type weight_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type weight_logsCreateManyInput = {
    id?: string
    user_id: string
    weight: Decimal | DecimalJsLike | number | string
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type weight_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type weight_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesCreateInput = {
    id?: string
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercises?: exercisesCreateNestedOneWithoutWorkout_plan_exercisesInput
    workout_plans: workout_plansCreateNestedOneWithoutWorkout_plan_exercisesInput
  }

  export type workout_plan_exercisesUncheckedCreateInput = {
    id?: string
    workout_plan_id: string
    exercise_id?: string | null
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plan_exercisesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneWithoutWorkout_plan_exercisesNestedInput
    workout_plans?: workout_plansUpdateOneRequiredWithoutWorkout_plan_exercisesNestedInput
  }

  export type workout_plan_exercisesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workout_plan_id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesCreateManyInput = {
    id?: string
    workout_plan_id: string
    exercise_id?: string | null
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plan_exercisesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workout_plan_id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plansCreateInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_plan_exercises?: workout_plan_exercisesCreateNestedManyWithoutWorkout_plansInput
    users: usersCreateNestedOneWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUpdateManyWithoutWorkout_plansNestedInput
    users?: usersUpdateOneRequiredWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput
  }

  export type workout_plansCreateManyInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ExercisesNullableScalarRelationFilter = {
    is?: exercisesWhereInput | null
    isNot?: exercisesWhereInput | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type exercise_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type exercise_logsAvgOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
  }

  export type exercise_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type exercise_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    notes?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type exercise_logsSumOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Exercise_logsListRelationFilter = {
    every?: exercise_logsWhereInput
    some?: exercise_logsWhereInput
    none?: exercise_logsWhereInput
  }

  export type Workout_plan_exercisesListRelationFilter = {
    every?: workout_plan_exercisesWhereInput
    some?: workout_plan_exercisesWhereInput
    none?: workout_plan_exercisesWhereInput
  }

  export type exercise_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workout_plan_exercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exercisesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    muscle_groups?: SortOrder
    equipment?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
  }

  export type exercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
  }

  export type exercisesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MealsNullableScalarRelationFilter = {
    is?: mealsWhereInput | null
    isNot?: mealsWhereInput | null
  }

  export type meal_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
    meal_name?: SortOrder
    portion?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    meal_time?: SortOrder
    notes?: SortOrder
    consumed_at?: SortOrder
    created_at?: SortOrder
  }

  export type meal_logsAvgOrderByAggregateInput = {
    portion?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type meal_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
    meal_name?: SortOrder
    portion?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    meal_time?: SortOrder
    notes?: SortOrder
    consumed_at?: SortOrder
    created_at?: SortOrder
  }

  export type meal_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meal_id?: SortOrder
    meal_name?: SortOrder
    portion?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    meal_time?: SortOrder
    notes?: SortOrder
    consumed_at?: SortOrder
    created_at?: SortOrder
  }

  export type meal_logsSumOrderByAggregateInput = {
    portion?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type Meal_logsListRelationFilter = {
    every?: meal_logsWhereInput
    some?: meal_logsWhereInput
    none?: meal_logsWhereInput
  }

  export type meal_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mealsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type mealsAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type mealsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type mealsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type mealsSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type Water_logsListRelationFilter = {
    every?: water_logsWhereInput
    some?: water_logsWhereInput
    none?: water_logsWhereInput
  }

  export type Weight_logsListRelationFilter = {
    every?: weight_logsWhereInput
    some?: weight_logsWhereInput
    none?: weight_logsWhereInput
  }

  export type Workout_plansListRelationFilter = {
    every?: workout_plansWhereInput
    some?: workout_plansWhereInput
    none?: workout_plansWhereInput
  }

  export type water_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type weight_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workout_plansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
    fitness_goal?: SortOrder
    dietary_preference?: SortOrder
    dietary_restrictions?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    age_range?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
    fitness_goal?: SortOrder
    dietary_preference?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    age_range?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
    fitness_goal?: SortOrder
    dietary_preference?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    age_range?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type water_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_ml?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrder
  }

  export type water_logsAvgOrderByAggregateInput = {
    amount_ml?: SortOrder
  }

  export type water_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_ml?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrder
  }

  export type water_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_ml?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrder
  }

  export type water_logsSumOrderByAggregateInput = {
    amount_ml?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type weight_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrder
  }

  export type weight_logsAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type weight_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrder
  }

  export type weight_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
    logged_at?: SortOrder
    created_at?: SortOrder
  }

  export type weight_logsSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Workout_plansScalarRelationFilter = {
    is?: workout_plansWhereInput
    isNot?: workout_plansWhereInput
  }

  export type workout_plan_exercisesCountOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_id?: SortOrder
    exercise_name?: SortOrder
    day_of_week?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    completed?: SortOrder
    completion_date?: SortOrder
    actual_sets?: SortOrder
    actual_reps?: SortOrder
    actual_weight?: SortOrder
    actual_duration?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_plan_exercisesAvgOrderByAggregateInput = {
    day_of_week?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    actual_sets?: SortOrder
    actual_reps?: SortOrder
    actual_weight?: SortOrder
    actual_duration?: SortOrder
  }

  export type workout_plan_exercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_id?: SortOrder
    exercise_name?: SortOrder
    day_of_week?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    completed?: SortOrder
    completion_date?: SortOrder
    actual_sets?: SortOrder
    actual_reps?: SortOrder
    actual_weight?: SortOrder
    actual_duration?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_plan_exercisesMinOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_id?: SortOrder
    exercise_name?: SortOrder
    day_of_week?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    completed?: SortOrder
    completion_date?: SortOrder
    actual_sets?: SortOrder
    actual_reps?: SortOrder
    actual_weight?: SortOrder
    actual_duration?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_plan_exercisesSumOrderByAggregateInput = {
    day_of_week?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    duration?: SortOrder
    actual_sets?: SortOrder
    actual_reps?: SortOrder
    actual_weight?: SortOrder
    actual_duration?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type workout_plansCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    frequency?: SortOrder
    duration_weeks?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_plansAvgOrderByAggregateInput = {
    frequency?: SortOrder
    duration_weeks?: SortOrder
  }

  export type workout_plansMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    frequency?: SortOrder
    duration_weeks?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_plansMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    frequency?: SortOrder
    duration_weeks?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_plansSumOrderByAggregateInput = {
    frequency?: SortOrder
    duration_weeks?: SortOrder
  }

  export type exercisesCreateNestedOneWithoutExercise_logsInput = {
    create?: XOR<exercisesCreateWithoutExercise_logsInput, exercisesUncheckedCreateWithoutExercise_logsInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutExercise_logsInput
    connect?: exercisesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutExercise_logsInput = {
    create?: XOR<usersCreateWithoutExercise_logsInput, usersUncheckedCreateWithoutExercise_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExercise_logsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type exercisesUpdateOneWithoutExercise_logsNestedInput = {
    create?: XOR<exercisesCreateWithoutExercise_logsInput, exercisesUncheckedCreateWithoutExercise_logsInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutExercise_logsInput
    upsert?: exercisesUpsertWithoutExercise_logsInput
    disconnect?: exercisesWhereInput | boolean
    delete?: exercisesWhereInput | boolean
    connect?: exercisesWhereUniqueInput
    update?: XOR<XOR<exercisesUpdateToOneWithWhereWithoutExercise_logsInput, exercisesUpdateWithoutExercise_logsInput>, exercisesUncheckedUpdateWithoutExercise_logsInput>
  }

  export type usersUpdateOneRequiredWithoutExercise_logsNestedInput = {
    create?: XOR<usersCreateWithoutExercise_logsInput, usersUncheckedCreateWithoutExercise_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExercise_logsInput
    upsert?: usersUpsertWithoutExercise_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExercise_logsInput, usersUpdateWithoutExercise_logsInput>, usersUncheckedUpdateWithoutExercise_logsInput>
  }

  export type exercisesCreatemuscle_groupsInput = {
    set: string[]
  }

  export type exercisesCreateequipmentInput = {
    set: string[]
  }

  export type exercise_logsCreateNestedManyWithoutExercisesInput = {
    create?: XOR<exercise_logsCreateWithoutExercisesInput, exercise_logsUncheckedCreateWithoutExercisesInput> | exercise_logsCreateWithoutExercisesInput[] | exercise_logsUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutExercisesInput | exercise_logsCreateOrConnectWithoutExercisesInput[]
    createMany?: exercise_logsCreateManyExercisesInputEnvelope
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
  }

  export type workout_plan_exercisesCreateNestedManyWithoutExercisesInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutExercisesInput, workout_plan_exercisesUncheckedCreateWithoutExercisesInput> | workout_plan_exercisesCreateWithoutExercisesInput[] | workout_plan_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutExercisesInput | workout_plan_exercisesCreateOrConnectWithoutExercisesInput[]
    createMany?: workout_plan_exercisesCreateManyExercisesInputEnvelope
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
  }

  export type exercise_logsUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<exercise_logsCreateWithoutExercisesInput, exercise_logsUncheckedCreateWithoutExercisesInput> | exercise_logsCreateWithoutExercisesInput[] | exercise_logsUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutExercisesInput | exercise_logsCreateOrConnectWithoutExercisesInput[]
    createMany?: exercise_logsCreateManyExercisesInputEnvelope
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
  }

  export type workout_plan_exercisesUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutExercisesInput, workout_plan_exercisesUncheckedCreateWithoutExercisesInput> | workout_plan_exercisesCreateWithoutExercisesInput[] | workout_plan_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutExercisesInput | workout_plan_exercisesCreateOrConnectWithoutExercisesInput[]
    createMany?: workout_plan_exercisesCreateManyExercisesInputEnvelope
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
  }

  export type exercisesUpdatemuscle_groupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type exercisesUpdateequipmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type exercise_logsUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<exercise_logsCreateWithoutExercisesInput, exercise_logsUncheckedCreateWithoutExercisesInput> | exercise_logsCreateWithoutExercisesInput[] | exercise_logsUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutExercisesInput | exercise_logsCreateOrConnectWithoutExercisesInput[]
    upsert?: exercise_logsUpsertWithWhereUniqueWithoutExercisesInput | exercise_logsUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: exercise_logsCreateManyExercisesInputEnvelope
    set?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    disconnect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    delete?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    update?: exercise_logsUpdateWithWhereUniqueWithoutExercisesInput | exercise_logsUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: exercise_logsUpdateManyWithWhereWithoutExercisesInput | exercise_logsUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: exercise_logsScalarWhereInput | exercise_logsScalarWhereInput[]
  }

  export type workout_plan_exercisesUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutExercisesInput, workout_plan_exercisesUncheckedCreateWithoutExercisesInput> | workout_plan_exercisesCreateWithoutExercisesInput[] | workout_plan_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutExercisesInput | workout_plan_exercisesCreateOrConnectWithoutExercisesInput[]
    upsert?: workout_plan_exercisesUpsertWithWhereUniqueWithoutExercisesInput | workout_plan_exercisesUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: workout_plan_exercisesCreateManyExercisesInputEnvelope
    set?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    disconnect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    delete?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    update?: workout_plan_exercisesUpdateWithWhereUniqueWithoutExercisesInput | workout_plan_exercisesUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: workout_plan_exercisesUpdateManyWithWhereWithoutExercisesInput | workout_plan_exercisesUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: workout_plan_exercisesScalarWhereInput | workout_plan_exercisesScalarWhereInput[]
  }

  export type exercise_logsUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<exercise_logsCreateWithoutExercisesInput, exercise_logsUncheckedCreateWithoutExercisesInput> | exercise_logsCreateWithoutExercisesInput[] | exercise_logsUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutExercisesInput | exercise_logsCreateOrConnectWithoutExercisesInput[]
    upsert?: exercise_logsUpsertWithWhereUniqueWithoutExercisesInput | exercise_logsUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: exercise_logsCreateManyExercisesInputEnvelope
    set?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    disconnect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    delete?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    update?: exercise_logsUpdateWithWhereUniqueWithoutExercisesInput | exercise_logsUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: exercise_logsUpdateManyWithWhereWithoutExercisesInput | exercise_logsUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: exercise_logsScalarWhereInput | exercise_logsScalarWhereInput[]
  }

  export type workout_plan_exercisesUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutExercisesInput, workout_plan_exercisesUncheckedCreateWithoutExercisesInput> | workout_plan_exercisesCreateWithoutExercisesInput[] | workout_plan_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutExercisesInput | workout_plan_exercisesCreateOrConnectWithoutExercisesInput[]
    upsert?: workout_plan_exercisesUpsertWithWhereUniqueWithoutExercisesInput | workout_plan_exercisesUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: workout_plan_exercisesCreateManyExercisesInputEnvelope
    set?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    disconnect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    delete?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    update?: workout_plan_exercisesUpdateWithWhereUniqueWithoutExercisesInput | workout_plan_exercisesUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: workout_plan_exercisesUpdateManyWithWhereWithoutExercisesInput | workout_plan_exercisesUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: workout_plan_exercisesScalarWhereInput | workout_plan_exercisesScalarWhereInput[]
  }

  export type mealsCreateNestedOneWithoutMeal_logsInput = {
    create?: XOR<mealsCreateWithoutMeal_logsInput, mealsUncheckedCreateWithoutMeal_logsInput>
    connectOrCreate?: mealsCreateOrConnectWithoutMeal_logsInput
    connect?: mealsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMeal_logsInput = {
    create?: XOR<usersCreateWithoutMeal_logsInput, usersUncheckedCreateWithoutMeal_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMeal_logsInput
    connect?: usersWhereUniqueInput
  }

  export type mealsUpdateOneWithoutMeal_logsNestedInput = {
    create?: XOR<mealsCreateWithoutMeal_logsInput, mealsUncheckedCreateWithoutMeal_logsInput>
    connectOrCreate?: mealsCreateOrConnectWithoutMeal_logsInput
    upsert?: mealsUpsertWithoutMeal_logsInput
    disconnect?: mealsWhereInput | boolean
    delete?: mealsWhereInput | boolean
    connect?: mealsWhereUniqueInput
    update?: XOR<XOR<mealsUpdateToOneWithWhereWithoutMeal_logsInput, mealsUpdateWithoutMeal_logsInput>, mealsUncheckedUpdateWithoutMeal_logsInput>
  }

  export type usersUpdateOneRequiredWithoutMeal_logsNestedInput = {
    create?: XOR<usersCreateWithoutMeal_logsInput, usersUncheckedCreateWithoutMeal_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMeal_logsInput
    upsert?: usersUpsertWithoutMeal_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMeal_logsInput, usersUpdateWithoutMeal_logsInput>, usersUncheckedUpdateWithoutMeal_logsInput>
  }

  export type meal_logsCreateNestedManyWithoutMealsInput = {
    create?: XOR<meal_logsCreateWithoutMealsInput, meal_logsUncheckedCreateWithoutMealsInput> | meal_logsCreateWithoutMealsInput[] | meal_logsUncheckedCreateWithoutMealsInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutMealsInput | meal_logsCreateOrConnectWithoutMealsInput[]
    createMany?: meal_logsCreateManyMealsInputEnvelope
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
  }

  export type meal_logsUncheckedCreateNestedManyWithoutMealsInput = {
    create?: XOR<meal_logsCreateWithoutMealsInput, meal_logsUncheckedCreateWithoutMealsInput> | meal_logsCreateWithoutMealsInput[] | meal_logsUncheckedCreateWithoutMealsInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutMealsInput | meal_logsCreateOrConnectWithoutMealsInput[]
    createMany?: meal_logsCreateManyMealsInputEnvelope
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
  }

  export type meal_logsUpdateManyWithoutMealsNestedInput = {
    create?: XOR<meal_logsCreateWithoutMealsInput, meal_logsUncheckedCreateWithoutMealsInput> | meal_logsCreateWithoutMealsInput[] | meal_logsUncheckedCreateWithoutMealsInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutMealsInput | meal_logsCreateOrConnectWithoutMealsInput[]
    upsert?: meal_logsUpsertWithWhereUniqueWithoutMealsInput | meal_logsUpsertWithWhereUniqueWithoutMealsInput[]
    createMany?: meal_logsCreateManyMealsInputEnvelope
    set?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    disconnect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    delete?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    update?: meal_logsUpdateWithWhereUniqueWithoutMealsInput | meal_logsUpdateWithWhereUniqueWithoutMealsInput[]
    updateMany?: meal_logsUpdateManyWithWhereWithoutMealsInput | meal_logsUpdateManyWithWhereWithoutMealsInput[]
    deleteMany?: meal_logsScalarWhereInput | meal_logsScalarWhereInput[]
  }

  export type meal_logsUncheckedUpdateManyWithoutMealsNestedInput = {
    create?: XOR<meal_logsCreateWithoutMealsInput, meal_logsUncheckedCreateWithoutMealsInput> | meal_logsCreateWithoutMealsInput[] | meal_logsUncheckedCreateWithoutMealsInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutMealsInput | meal_logsCreateOrConnectWithoutMealsInput[]
    upsert?: meal_logsUpsertWithWhereUniqueWithoutMealsInput | meal_logsUpsertWithWhereUniqueWithoutMealsInput[]
    createMany?: meal_logsCreateManyMealsInputEnvelope
    set?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    disconnect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    delete?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    update?: meal_logsUpdateWithWhereUniqueWithoutMealsInput | meal_logsUpdateWithWhereUniqueWithoutMealsInput[]
    updateMany?: meal_logsUpdateManyWithWhereWithoutMealsInput | meal_logsUpdateManyWithWhereWithoutMealsInput[]
    deleteMany?: meal_logsScalarWhereInput | meal_logsScalarWhereInput[]
  }

  export type usersCreatedietary_restrictionsInput = {
    set: string[]
  }

  export type exercise_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<exercise_logsCreateWithoutUsersInput, exercise_logsUncheckedCreateWithoutUsersInput> | exercise_logsCreateWithoutUsersInput[] | exercise_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutUsersInput | exercise_logsCreateOrConnectWithoutUsersInput[]
    createMany?: exercise_logsCreateManyUsersInputEnvelope
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
  }

  export type meal_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<meal_logsCreateWithoutUsersInput, meal_logsUncheckedCreateWithoutUsersInput> | meal_logsCreateWithoutUsersInput[] | meal_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutUsersInput | meal_logsCreateOrConnectWithoutUsersInput[]
    createMany?: meal_logsCreateManyUsersInputEnvelope
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
  }

  export type water_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<water_logsCreateWithoutUsersInput, water_logsUncheckedCreateWithoutUsersInput> | water_logsCreateWithoutUsersInput[] | water_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: water_logsCreateOrConnectWithoutUsersInput | water_logsCreateOrConnectWithoutUsersInput[]
    createMany?: water_logsCreateManyUsersInputEnvelope
    connect?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
  }

  export type weight_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<weight_logsCreateWithoutUsersInput, weight_logsUncheckedCreateWithoutUsersInput> | weight_logsCreateWithoutUsersInput[] | weight_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: weight_logsCreateOrConnectWithoutUsersInput | weight_logsCreateOrConnectWithoutUsersInput[]
    createMany?: weight_logsCreateManyUsersInputEnvelope
    connect?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
  }

  export type workout_plansCreateNestedManyWithoutUsersInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
  }

  export type exercise_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<exercise_logsCreateWithoutUsersInput, exercise_logsUncheckedCreateWithoutUsersInput> | exercise_logsCreateWithoutUsersInput[] | exercise_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutUsersInput | exercise_logsCreateOrConnectWithoutUsersInput[]
    createMany?: exercise_logsCreateManyUsersInputEnvelope
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
  }

  export type meal_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<meal_logsCreateWithoutUsersInput, meal_logsUncheckedCreateWithoutUsersInput> | meal_logsCreateWithoutUsersInput[] | meal_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutUsersInput | meal_logsCreateOrConnectWithoutUsersInput[]
    createMany?: meal_logsCreateManyUsersInputEnvelope
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
  }

  export type water_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<water_logsCreateWithoutUsersInput, water_logsUncheckedCreateWithoutUsersInput> | water_logsCreateWithoutUsersInput[] | water_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: water_logsCreateOrConnectWithoutUsersInput | water_logsCreateOrConnectWithoutUsersInput[]
    createMany?: water_logsCreateManyUsersInputEnvelope
    connect?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
  }

  export type weight_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<weight_logsCreateWithoutUsersInput, weight_logsUncheckedCreateWithoutUsersInput> | weight_logsCreateWithoutUsersInput[] | weight_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: weight_logsCreateOrConnectWithoutUsersInput | weight_logsCreateOrConnectWithoutUsersInput[]
    createMany?: weight_logsCreateManyUsersInputEnvelope
    connect?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
  }

  export type workout_plansUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
  }

  export type usersUpdatedietary_restrictionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type exercise_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<exercise_logsCreateWithoutUsersInput, exercise_logsUncheckedCreateWithoutUsersInput> | exercise_logsCreateWithoutUsersInput[] | exercise_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutUsersInput | exercise_logsCreateOrConnectWithoutUsersInput[]
    upsert?: exercise_logsUpsertWithWhereUniqueWithoutUsersInput | exercise_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: exercise_logsCreateManyUsersInputEnvelope
    set?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    disconnect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    delete?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    update?: exercise_logsUpdateWithWhereUniqueWithoutUsersInput | exercise_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: exercise_logsUpdateManyWithWhereWithoutUsersInput | exercise_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: exercise_logsScalarWhereInput | exercise_logsScalarWhereInput[]
  }

  export type meal_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<meal_logsCreateWithoutUsersInput, meal_logsUncheckedCreateWithoutUsersInput> | meal_logsCreateWithoutUsersInput[] | meal_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutUsersInput | meal_logsCreateOrConnectWithoutUsersInput[]
    upsert?: meal_logsUpsertWithWhereUniqueWithoutUsersInput | meal_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: meal_logsCreateManyUsersInputEnvelope
    set?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    disconnect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    delete?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    update?: meal_logsUpdateWithWhereUniqueWithoutUsersInput | meal_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: meal_logsUpdateManyWithWhereWithoutUsersInput | meal_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: meal_logsScalarWhereInput | meal_logsScalarWhereInput[]
  }

  export type water_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<water_logsCreateWithoutUsersInput, water_logsUncheckedCreateWithoutUsersInput> | water_logsCreateWithoutUsersInput[] | water_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: water_logsCreateOrConnectWithoutUsersInput | water_logsCreateOrConnectWithoutUsersInput[]
    upsert?: water_logsUpsertWithWhereUniqueWithoutUsersInput | water_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: water_logsCreateManyUsersInputEnvelope
    set?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    disconnect?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    delete?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    connect?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    update?: water_logsUpdateWithWhereUniqueWithoutUsersInput | water_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: water_logsUpdateManyWithWhereWithoutUsersInput | water_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: water_logsScalarWhereInput | water_logsScalarWhereInput[]
  }

  export type weight_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<weight_logsCreateWithoutUsersInput, weight_logsUncheckedCreateWithoutUsersInput> | weight_logsCreateWithoutUsersInput[] | weight_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: weight_logsCreateOrConnectWithoutUsersInput | weight_logsCreateOrConnectWithoutUsersInput[]
    upsert?: weight_logsUpsertWithWhereUniqueWithoutUsersInput | weight_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: weight_logsCreateManyUsersInputEnvelope
    set?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    disconnect?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    delete?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    connect?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    update?: weight_logsUpdateWithWhereUniqueWithoutUsersInput | weight_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: weight_logsUpdateManyWithWhereWithoutUsersInput | weight_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: weight_logsScalarWhereInput | weight_logsScalarWhereInput[]
  }

  export type workout_plansUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    upsert?: workout_plansUpsertWithWhereUniqueWithoutUsersInput | workout_plansUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    set?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    disconnect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    delete?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    update?: workout_plansUpdateWithWhereUniqueWithoutUsersInput | workout_plansUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workout_plansUpdateManyWithWhereWithoutUsersInput | workout_plansUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
  }

  export type exercise_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<exercise_logsCreateWithoutUsersInput, exercise_logsUncheckedCreateWithoutUsersInput> | exercise_logsCreateWithoutUsersInput[] | exercise_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: exercise_logsCreateOrConnectWithoutUsersInput | exercise_logsCreateOrConnectWithoutUsersInput[]
    upsert?: exercise_logsUpsertWithWhereUniqueWithoutUsersInput | exercise_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: exercise_logsCreateManyUsersInputEnvelope
    set?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    disconnect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    delete?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    connect?: exercise_logsWhereUniqueInput | exercise_logsWhereUniqueInput[]
    update?: exercise_logsUpdateWithWhereUniqueWithoutUsersInput | exercise_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: exercise_logsUpdateManyWithWhereWithoutUsersInput | exercise_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: exercise_logsScalarWhereInput | exercise_logsScalarWhereInput[]
  }

  export type meal_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<meal_logsCreateWithoutUsersInput, meal_logsUncheckedCreateWithoutUsersInput> | meal_logsCreateWithoutUsersInput[] | meal_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: meal_logsCreateOrConnectWithoutUsersInput | meal_logsCreateOrConnectWithoutUsersInput[]
    upsert?: meal_logsUpsertWithWhereUniqueWithoutUsersInput | meal_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: meal_logsCreateManyUsersInputEnvelope
    set?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    disconnect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    delete?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    connect?: meal_logsWhereUniqueInput | meal_logsWhereUniqueInput[]
    update?: meal_logsUpdateWithWhereUniqueWithoutUsersInput | meal_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: meal_logsUpdateManyWithWhereWithoutUsersInput | meal_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: meal_logsScalarWhereInput | meal_logsScalarWhereInput[]
  }

  export type water_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<water_logsCreateWithoutUsersInput, water_logsUncheckedCreateWithoutUsersInput> | water_logsCreateWithoutUsersInput[] | water_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: water_logsCreateOrConnectWithoutUsersInput | water_logsCreateOrConnectWithoutUsersInput[]
    upsert?: water_logsUpsertWithWhereUniqueWithoutUsersInput | water_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: water_logsCreateManyUsersInputEnvelope
    set?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    disconnect?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    delete?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    connect?: water_logsWhereUniqueInput | water_logsWhereUniqueInput[]
    update?: water_logsUpdateWithWhereUniqueWithoutUsersInput | water_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: water_logsUpdateManyWithWhereWithoutUsersInput | water_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: water_logsScalarWhereInput | water_logsScalarWhereInput[]
  }

  export type weight_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<weight_logsCreateWithoutUsersInput, weight_logsUncheckedCreateWithoutUsersInput> | weight_logsCreateWithoutUsersInput[] | weight_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: weight_logsCreateOrConnectWithoutUsersInput | weight_logsCreateOrConnectWithoutUsersInput[]
    upsert?: weight_logsUpsertWithWhereUniqueWithoutUsersInput | weight_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: weight_logsCreateManyUsersInputEnvelope
    set?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    disconnect?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    delete?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    connect?: weight_logsWhereUniqueInput | weight_logsWhereUniqueInput[]
    update?: weight_logsUpdateWithWhereUniqueWithoutUsersInput | weight_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: weight_logsUpdateManyWithWhereWithoutUsersInput | weight_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: weight_logsScalarWhereInput | weight_logsScalarWhereInput[]
  }

  export type workout_plansUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput> | workout_plansCreateWithoutUsersInput[] | workout_plansUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workout_plansCreateOrConnectWithoutUsersInput | workout_plansCreateOrConnectWithoutUsersInput[]
    upsert?: workout_plansUpsertWithWhereUniqueWithoutUsersInput | workout_plansUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workout_plansCreateManyUsersInputEnvelope
    set?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    disconnect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    delete?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    connect?: workout_plansWhereUniqueInput | workout_plansWhereUniqueInput[]
    update?: workout_plansUpdateWithWhereUniqueWithoutUsersInput | workout_plansUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workout_plansUpdateManyWithWhereWithoutUsersInput | workout_plansUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutWater_logsInput = {
    create?: XOR<usersCreateWithoutWater_logsInput, usersUncheckedCreateWithoutWater_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWater_logsInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutWater_logsNestedInput = {
    create?: XOR<usersCreateWithoutWater_logsInput, usersUncheckedCreateWithoutWater_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWater_logsInput
    upsert?: usersUpsertWithoutWater_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWater_logsInput, usersUpdateWithoutWater_logsInput>, usersUncheckedUpdateWithoutWater_logsInput>
  }

  export type usersCreateNestedOneWithoutWeight_logsInput = {
    create?: XOR<usersCreateWithoutWeight_logsInput, usersUncheckedCreateWithoutWeight_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWeight_logsInput
    connect?: usersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutWeight_logsNestedInput = {
    create?: XOR<usersCreateWithoutWeight_logsInput, usersUncheckedCreateWithoutWeight_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWeight_logsInput
    upsert?: usersUpsertWithoutWeight_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWeight_logsInput, usersUpdateWithoutWeight_logsInput>, usersUncheckedUpdateWithoutWeight_logsInput>
  }

  export type exercisesCreateNestedOneWithoutWorkout_plan_exercisesInput = {
    create?: XOR<exercisesCreateWithoutWorkout_plan_exercisesInput, exercisesUncheckedCreateWithoutWorkout_plan_exercisesInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_plan_exercisesInput
    connect?: exercisesWhereUniqueInput
  }

  export type workout_plansCreateNestedOneWithoutWorkout_plan_exercisesInput = {
    create?: XOR<workout_plansCreateWithoutWorkout_plan_exercisesInput, workout_plansUncheckedCreateWithoutWorkout_plan_exercisesInput>
    connectOrCreate?: workout_plansCreateOrConnectWithoutWorkout_plan_exercisesInput
    connect?: workout_plansWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type exercisesUpdateOneWithoutWorkout_plan_exercisesNestedInput = {
    create?: XOR<exercisesCreateWithoutWorkout_plan_exercisesInput, exercisesUncheckedCreateWithoutWorkout_plan_exercisesInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_plan_exercisesInput
    upsert?: exercisesUpsertWithoutWorkout_plan_exercisesInput
    disconnect?: exercisesWhereInput | boolean
    delete?: exercisesWhereInput | boolean
    connect?: exercisesWhereUniqueInput
    update?: XOR<XOR<exercisesUpdateToOneWithWhereWithoutWorkout_plan_exercisesInput, exercisesUpdateWithoutWorkout_plan_exercisesInput>, exercisesUncheckedUpdateWithoutWorkout_plan_exercisesInput>
  }

  export type workout_plansUpdateOneRequiredWithoutWorkout_plan_exercisesNestedInput = {
    create?: XOR<workout_plansCreateWithoutWorkout_plan_exercisesInput, workout_plansUncheckedCreateWithoutWorkout_plan_exercisesInput>
    connectOrCreate?: workout_plansCreateOrConnectWithoutWorkout_plan_exercisesInput
    upsert?: workout_plansUpsertWithoutWorkout_plan_exercisesInput
    connect?: workout_plansWhereUniqueInput
    update?: XOR<XOR<workout_plansUpdateToOneWithWhereWithoutWorkout_plan_exercisesInput, workout_plansUpdateWithoutWorkout_plan_exercisesInput>, workout_plansUncheckedUpdateWithoutWorkout_plan_exercisesInput>
  }

  export type workout_plan_exercisesCreateNestedManyWithoutWorkout_plansInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput> | workout_plan_exercisesCreateWithoutWorkout_plansInput[] | workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput | workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput[]
    createMany?: workout_plan_exercisesCreateManyWorkout_plansInputEnvelope
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWorkout_plansInput = {
    create?: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkout_plansInput
    connect?: usersWhereUniqueInput
  }

  export type workout_plan_exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput> | workout_plan_exercisesCreateWithoutWorkout_plansInput[] | workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput | workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput[]
    createMany?: workout_plan_exercisesCreateManyWorkout_plansInputEnvelope
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
  }

  export type workout_plan_exercisesUpdateManyWithoutWorkout_plansNestedInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput> | workout_plan_exercisesCreateWithoutWorkout_plansInput[] | workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput | workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput[]
    upsert?: workout_plan_exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput | workout_plan_exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput[]
    createMany?: workout_plan_exercisesCreateManyWorkout_plansInputEnvelope
    set?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    disconnect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    delete?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    update?: workout_plan_exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput | workout_plan_exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput[]
    updateMany?: workout_plan_exercisesUpdateManyWithWhereWithoutWorkout_plansInput | workout_plan_exercisesUpdateManyWithWhereWithoutWorkout_plansInput[]
    deleteMany?: workout_plan_exercisesScalarWhereInput | workout_plan_exercisesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutWorkout_plansNestedInput = {
    create?: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkout_plansInput
    upsert?: usersUpsertWithoutWorkout_plansInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkout_plansInput, usersUpdateWithoutWorkout_plansInput>, usersUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type workout_plan_exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput = {
    create?: XOR<workout_plan_exercisesCreateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput> | workout_plan_exercisesCreateWithoutWorkout_plansInput[] | workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput[]
    connectOrCreate?: workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput | workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput[]
    upsert?: workout_plan_exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput | workout_plan_exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput[]
    createMany?: workout_plan_exercisesCreateManyWorkout_plansInputEnvelope
    set?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    disconnect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    delete?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    connect?: workout_plan_exercisesWhereUniqueInput | workout_plan_exercisesWhereUniqueInput[]
    update?: workout_plan_exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput | workout_plan_exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput[]
    updateMany?: workout_plan_exercisesUpdateManyWithWhereWithoutWorkout_plansInput | workout_plan_exercisesUpdateManyWithWhereWithoutWorkout_plansInput[]
    deleteMany?: workout_plan_exercisesScalarWhereInput | workout_plan_exercisesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type exercisesCreateWithoutExercise_logsInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
    workout_plan_exercises?: workout_plan_exercisesCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUncheckedCreateWithoutExercise_logsInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type exercisesCreateOrConnectWithoutExercise_logsInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutExercise_logsInput, exercisesUncheckedCreateWithoutExercise_logsInput>
  }

  export type usersCreateWithoutExercise_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    meal_logs?: meal_logsCreateNestedManyWithoutUsersInput
    water_logs?: water_logsCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExercise_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    meal_logs?: meal_logsUncheckedCreateNestedManyWithoutUsersInput
    water_logs?: water_logsUncheckedCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExercise_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExercise_logsInput, usersUncheckedCreateWithoutExercise_logsInput>
  }

  export type exercisesUpsertWithoutExercise_logsInput = {
    update: XOR<exercisesUpdateWithoutExercise_logsInput, exercisesUncheckedUpdateWithoutExercise_logsInput>
    create: XOR<exercisesCreateWithoutExercise_logsInput, exercisesUncheckedCreateWithoutExercise_logsInput>
    where?: exercisesWhereInput
  }

  export type exercisesUpdateToOneWithWhereWithoutExercise_logsInput = {
    where?: exercisesWhereInput
    data: XOR<exercisesUpdateWithoutExercise_logsInput, exercisesUncheckedUpdateWithoutExercise_logsInput>
  }

  export type exercisesUpdateWithoutExercise_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateWithoutExercise_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type usersUpsertWithoutExercise_logsInput = {
    update: XOR<usersUpdateWithoutExercise_logsInput, usersUncheckedUpdateWithoutExercise_logsInput>
    create: XOR<usersCreateWithoutExercise_logsInput, usersUncheckedCreateWithoutExercise_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExercise_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExercise_logsInput, usersUncheckedUpdateWithoutExercise_logsInput>
  }

  export type usersUpdateWithoutExercise_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    meal_logs?: meal_logsUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExercise_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    meal_logs?: meal_logsUncheckedUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUncheckedUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type exercise_logsCreateWithoutExercisesInput = {
    id?: string
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutExercise_logsInput
  }

  export type exercise_logsUncheckedCreateWithoutExercisesInput = {
    id?: string
    user_id: string
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
  }

  export type exercise_logsCreateOrConnectWithoutExercisesInput = {
    where: exercise_logsWhereUniqueInput
    create: XOR<exercise_logsCreateWithoutExercisesInput, exercise_logsUncheckedCreateWithoutExercisesInput>
  }

  export type exercise_logsCreateManyExercisesInputEnvelope = {
    data: exercise_logsCreateManyExercisesInput | exercise_logsCreateManyExercisesInput[]
    skipDuplicates?: boolean
  }

  export type workout_plan_exercisesCreateWithoutExercisesInput = {
    id?: string
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_plans: workout_plansCreateNestedOneWithoutWorkout_plan_exercisesInput
  }

  export type workout_plan_exercisesUncheckedCreateWithoutExercisesInput = {
    id?: string
    workout_plan_id: string
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plan_exercisesCreateOrConnectWithoutExercisesInput = {
    where: workout_plan_exercisesWhereUniqueInput
    create: XOR<workout_plan_exercisesCreateWithoutExercisesInput, workout_plan_exercisesUncheckedCreateWithoutExercisesInput>
  }

  export type workout_plan_exercisesCreateManyExercisesInputEnvelope = {
    data: workout_plan_exercisesCreateManyExercisesInput | workout_plan_exercisesCreateManyExercisesInput[]
    skipDuplicates?: boolean
  }

  export type exercise_logsUpsertWithWhereUniqueWithoutExercisesInput = {
    where: exercise_logsWhereUniqueInput
    update: XOR<exercise_logsUpdateWithoutExercisesInput, exercise_logsUncheckedUpdateWithoutExercisesInput>
    create: XOR<exercise_logsCreateWithoutExercisesInput, exercise_logsUncheckedCreateWithoutExercisesInput>
  }

  export type exercise_logsUpdateWithWhereUniqueWithoutExercisesInput = {
    where: exercise_logsWhereUniqueInput
    data: XOR<exercise_logsUpdateWithoutExercisesInput, exercise_logsUncheckedUpdateWithoutExercisesInput>
  }

  export type exercise_logsUpdateManyWithWhereWithoutExercisesInput = {
    where: exercise_logsScalarWhereInput
    data: XOR<exercise_logsUpdateManyMutationInput, exercise_logsUncheckedUpdateManyWithoutExercisesInput>
  }

  export type exercise_logsScalarWhereInput = {
    AND?: exercise_logsScalarWhereInput | exercise_logsScalarWhereInput[]
    OR?: exercise_logsScalarWhereInput[]
    NOT?: exercise_logsScalarWhereInput | exercise_logsScalarWhereInput[]
    id?: UuidFilter<"exercise_logs"> | string
    user_id?: UuidFilter<"exercise_logs"> | string
    exercise_id?: UuidNullableFilter<"exercise_logs"> | string | null
    exercise_name?: StringNullableFilter<"exercise_logs"> | string | null
    sets?: IntNullableFilter<"exercise_logs"> | number | null
    reps?: IntNullableFilter<"exercise_logs"> | number | null
    weight?: DecimalNullableFilter<"exercise_logs"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableFilter<"exercise_logs"> | number | null
    intensity?: StringNullableFilter<"exercise_logs"> | string | null
    notes?: StringNullableFilter<"exercise_logs"> | string | null
    completed_at?: DateTimeFilter<"exercise_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"exercise_logs"> | Date | string | null
  }

  export type workout_plan_exercisesUpsertWithWhereUniqueWithoutExercisesInput = {
    where: workout_plan_exercisesWhereUniqueInput
    update: XOR<workout_plan_exercisesUpdateWithoutExercisesInput, workout_plan_exercisesUncheckedUpdateWithoutExercisesInput>
    create: XOR<workout_plan_exercisesCreateWithoutExercisesInput, workout_plan_exercisesUncheckedCreateWithoutExercisesInput>
  }

  export type workout_plan_exercisesUpdateWithWhereUniqueWithoutExercisesInput = {
    where: workout_plan_exercisesWhereUniqueInput
    data: XOR<workout_plan_exercisesUpdateWithoutExercisesInput, workout_plan_exercisesUncheckedUpdateWithoutExercisesInput>
  }

  export type workout_plan_exercisesUpdateManyWithWhereWithoutExercisesInput = {
    where: workout_plan_exercisesScalarWhereInput
    data: XOR<workout_plan_exercisesUpdateManyMutationInput, workout_plan_exercisesUncheckedUpdateManyWithoutExercisesInput>
  }

  export type workout_plan_exercisesScalarWhereInput = {
    AND?: workout_plan_exercisesScalarWhereInput | workout_plan_exercisesScalarWhereInput[]
    OR?: workout_plan_exercisesScalarWhereInput[]
    NOT?: workout_plan_exercisesScalarWhereInput | workout_plan_exercisesScalarWhereInput[]
    id?: UuidFilter<"workout_plan_exercises"> | string
    workout_plan_id?: UuidFilter<"workout_plan_exercises"> | string
    exercise_id?: UuidNullableFilter<"workout_plan_exercises"> | string | null
    exercise_name?: StringNullableFilter<"workout_plan_exercises"> | string | null
    day_of_week?: IntNullableFilter<"workout_plan_exercises"> | number | null
    sets?: IntNullableFilter<"workout_plan_exercises"> | number | null
    reps?: IntNullableFilter<"workout_plan_exercises"> | number | null
    weight?: DecimalNullableFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntNullableFilter<"workout_plan_exercises"> | number | null
    completed?: BoolNullableFilter<"workout_plan_exercises"> | boolean | null
    completion_date?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    actual_sets?: IntNullableFilter<"workout_plan_exercises"> | number | null
    actual_reps?: IntNullableFilter<"workout_plan_exercises"> | number | null
    actual_weight?: DecimalNullableFilter<"workout_plan_exercises"> | Decimal | DecimalJsLike | number | string | null
    actual_duration?: IntNullableFilter<"workout_plan_exercises"> | number | null
    notes?: StringNullableFilter<"workout_plan_exercises"> | string | null
    created_at?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_plan_exercises"> | Date | string | null
  }

  export type mealsCreateWithoutMeal_logsInput = {
    id?: string
    name: string
    category?: string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    image_url?: string | null
    description?: string | null
    created_at?: Date | string | null
  }

  export type mealsUncheckedCreateWithoutMeal_logsInput = {
    id?: string
    name: string
    category?: string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    image_url?: string | null
    description?: string | null
    created_at?: Date | string | null
  }

  export type mealsCreateOrConnectWithoutMeal_logsInput = {
    where: mealsWhereUniqueInput
    create: XOR<mealsCreateWithoutMeal_logsInput, mealsUncheckedCreateWithoutMeal_logsInput>
  }

  export type usersCreateWithoutMeal_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsCreateNestedManyWithoutUsersInput
    water_logs?: water_logsCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMeal_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutUsersInput
    water_logs?: water_logsUncheckedCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMeal_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMeal_logsInput, usersUncheckedCreateWithoutMeal_logsInput>
  }

  export type mealsUpsertWithoutMeal_logsInput = {
    update: XOR<mealsUpdateWithoutMeal_logsInput, mealsUncheckedUpdateWithoutMeal_logsInput>
    create: XOR<mealsCreateWithoutMeal_logsInput, mealsUncheckedCreateWithoutMeal_logsInput>
    where?: mealsWhereInput
  }

  export type mealsUpdateToOneWithWhereWithoutMeal_logsInput = {
    where?: mealsWhereInput
    data: XOR<mealsUpdateWithoutMeal_logsInput, mealsUncheckedUpdateWithoutMeal_logsInput>
  }

  export type mealsUpdateWithoutMeal_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mealsUncheckedUpdateWithoutMeal_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutMeal_logsInput = {
    update: XOR<usersUpdateWithoutMeal_logsInput, usersUncheckedUpdateWithoutMeal_logsInput>
    create: XOR<usersCreateWithoutMeal_logsInput, usersUncheckedCreateWithoutMeal_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMeal_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMeal_logsInput, usersUncheckedUpdateWithoutMeal_logsInput>
  }

  export type usersUpdateWithoutMeal_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMeal_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUncheckedUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type meal_logsCreateWithoutMealsInput = {
    id?: string
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutMeal_logsInput
  }

  export type meal_logsUncheckedCreateWithoutMealsInput = {
    id?: string
    user_id: string
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
  }

  export type meal_logsCreateOrConnectWithoutMealsInput = {
    where: meal_logsWhereUniqueInput
    create: XOR<meal_logsCreateWithoutMealsInput, meal_logsUncheckedCreateWithoutMealsInput>
  }

  export type meal_logsCreateManyMealsInputEnvelope = {
    data: meal_logsCreateManyMealsInput | meal_logsCreateManyMealsInput[]
    skipDuplicates?: boolean
  }

  export type meal_logsUpsertWithWhereUniqueWithoutMealsInput = {
    where: meal_logsWhereUniqueInput
    update: XOR<meal_logsUpdateWithoutMealsInput, meal_logsUncheckedUpdateWithoutMealsInput>
    create: XOR<meal_logsCreateWithoutMealsInput, meal_logsUncheckedCreateWithoutMealsInput>
  }

  export type meal_logsUpdateWithWhereUniqueWithoutMealsInput = {
    where: meal_logsWhereUniqueInput
    data: XOR<meal_logsUpdateWithoutMealsInput, meal_logsUncheckedUpdateWithoutMealsInput>
  }

  export type meal_logsUpdateManyWithWhereWithoutMealsInput = {
    where: meal_logsScalarWhereInput
    data: XOR<meal_logsUpdateManyMutationInput, meal_logsUncheckedUpdateManyWithoutMealsInput>
  }

  export type meal_logsScalarWhereInput = {
    AND?: meal_logsScalarWhereInput | meal_logsScalarWhereInput[]
    OR?: meal_logsScalarWhereInput[]
    NOT?: meal_logsScalarWhereInput | meal_logsScalarWhereInput[]
    id?: UuidFilter<"meal_logs"> | string
    user_id?: UuidFilter<"meal_logs"> | string
    meal_id?: UuidNullableFilter<"meal_logs"> | string | null
    meal_name?: StringNullableFilter<"meal_logs"> | string | null
    portion?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    calories?: IntNullableFilter<"meal_logs"> | number | null
    protein?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    carbs?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    fats?: DecimalNullableFilter<"meal_logs"> | Decimal | DecimalJsLike | number | string | null
    meal_time?: StringNullableFilter<"meal_logs"> | string | null
    notes?: StringNullableFilter<"meal_logs"> | string | null
    consumed_at?: DateTimeFilter<"meal_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"meal_logs"> | Date | string | null
  }

  export type exercise_logsCreateWithoutUsersInput = {
    id?: string
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
    exercises?: exercisesCreateNestedOneWithoutExercise_logsInput
  }

  export type exercise_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    exercise_id?: string | null
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
  }

  export type exercise_logsCreateOrConnectWithoutUsersInput = {
    where: exercise_logsWhereUniqueInput
    create: XOR<exercise_logsCreateWithoutUsersInput, exercise_logsUncheckedCreateWithoutUsersInput>
  }

  export type exercise_logsCreateManyUsersInputEnvelope = {
    data: exercise_logsCreateManyUsersInput | exercise_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type meal_logsCreateWithoutUsersInput = {
    id?: string
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
    meals?: mealsCreateNestedOneWithoutMeal_logsInput
  }

  export type meal_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    meal_id?: string | null
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
  }

  export type meal_logsCreateOrConnectWithoutUsersInput = {
    where: meal_logsWhereUniqueInput
    create: XOR<meal_logsCreateWithoutUsersInput, meal_logsUncheckedCreateWithoutUsersInput>
  }

  export type meal_logsCreateManyUsersInputEnvelope = {
    data: meal_logsCreateManyUsersInput | meal_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type water_logsCreateWithoutUsersInput = {
    id?: string
    amount_ml: number
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type water_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    amount_ml: number
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type water_logsCreateOrConnectWithoutUsersInput = {
    where: water_logsWhereUniqueInput
    create: XOR<water_logsCreateWithoutUsersInput, water_logsUncheckedCreateWithoutUsersInput>
  }

  export type water_logsCreateManyUsersInputEnvelope = {
    data: water_logsCreateManyUsersInput | water_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type weight_logsCreateWithoutUsersInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type weight_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type weight_logsCreateOrConnectWithoutUsersInput = {
    where: weight_logsWhereUniqueInput
    create: XOR<weight_logsCreateWithoutUsersInput, weight_logsUncheckedCreateWithoutUsersInput>
  }

  export type weight_logsCreateManyUsersInputEnvelope = {
    data: weight_logsCreateManyUsersInput | weight_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workout_plansCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_plan_exercises?: workout_plan_exercisesCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUncheckedCreateNestedManyWithoutWorkout_plansInput
  }

  export type workout_plansCreateOrConnectWithoutUsersInput = {
    where: workout_plansWhereUniqueInput
    create: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput>
  }

  export type workout_plansCreateManyUsersInputEnvelope = {
    data: workout_plansCreateManyUsersInput | workout_plansCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type exercise_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: exercise_logsWhereUniqueInput
    update: XOR<exercise_logsUpdateWithoutUsersInput, exercise_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<exercise_logsCreateWithoutUsersInput, exercise_logsUncheckedCreateWithoutUsersInput>
  }

  export type exercise_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: exercise_logsWhereUniqueInput
    data: XOR<exercise_logsUpdateWithoutUsersInput, exercise_logsUncheckedUpdateWithoutUsersInput>
  }

  export type exercise_logsUpdateManyWithWhereWithoutUsersInput = {
    where: exercise_logsScalarWhereInput
    data: XOR<exercise_logsUpdateManyMutationInput, exercise_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type meal_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: meal_logsWhereUniqueInput
    update: XOR<meal_logsUpdateWithoutUsersInput, meal_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<meal_logsCreateWithoutUsersInput, meal_logsUncheckedCreateWithoutUsersInput>
  }

  export type meal_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: meal_logsWhereUniqueInput
    data: XOR<meal_logsUpdateWithoutUsersInput, meal_logsUncheckedUpdateWithoutUsersInput>
  }

  export type meal_logsUpdateManyWithWhereWithoutUsersInput = {
    where: meal_logsScalarWhereInput
    data: XOR<meal_logsUpdateManyMutationInput, meal_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type water_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: water_logsWhereUniqueInput
    update: XOR<water_logsUpdateWithoutUsersInput, water_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<water_logsCreateWithoutUsersInput, water_logsUncheckedCreateWithoutUsersInput>
  }

  export type water_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: water_logsWhereUniqueInput
    data: XOR<water_logsUpdateWithoutUsersInput, water_logsUncheckedUpdateWithoutUsersInput>
  }

  export type water_logsUpdateManyWithWhereWithoutUsersInput = {
    where: water_logsScalarWhereInput
    data: XOR<water_logsUpdateManyMutationInput, water_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type water_logsScalarWhereInput = {
    AND?: water_logsScalarWhereInput | water_logsScalarWhereInput[]
    OR?: water_logsScalarWhereInput[]
    NOT?: water_logsScalarWhereInput | water_logsScalarWhereInput[]
    id?: UuidFilter<"water_logs"> | string
    user_id?: UuidFilter<"water_logs"> | string
    amount_ml?: IntFilter<"water_logs"> | number
    logged_at?: DateTimeFilter<"water_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"water_logs"> | Date | string | null
  }

  export type weight_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: weight_logsWhereUniqueInput
    update: XOR<weight_logsUpdateWithoutUsersInput, weight_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<weight_logsCreateWithoutUsersInput, weight_logsUncheckedCreateWithoutUsersInput>
  }

  export type weight_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: weight_logsWhereUniqueInput
    data: XOR<weight_logsUpdateWithoutUsersInput, weight_logsUncheckedUpdateWithoutUsersInput>
  }

  export type weight_logsUpdateManyWithWhereWithoutUsersInput = {
    where: weight_logsScalarWhereInput
    data: XOR<weight_logsUpdateManyMutationInput, weight_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type weight_logsScalarWhereInput = {
    AND?: weight_logsScalarWhereInput | weight_logsScalarWhereInput[]
    OR?: weight_logsScalarWhereInput[]
    NOT?: weight_logsScalarWhereInput | weight_logsScalarWhereInput[]
    id?: UuidFilter<"weight_logs"> | string
    user_id?: UuidFilter<"weight_logs"> | string
    weight?: DecimalFilter<"weight_logs"> | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFilter<"weight_logs"> | Date | string
    created_at?: DateTimeNullableFilter<"weight_logs"> | Date | string | null
  }

  export type workout_plansUpsertWithWhereUniqueWithoutUsersInput = {
    where: workout_plansWhereUniqueInput
    update: XOR<workout_plansUpdateWithoutUsersInput, workout_plansUncheckedUpdateWithoutUsersInput>
    create: XOR<workout_plansCreateWithoutUsersInput, workout_plansUncheckedCreateWithoutUsersInput>
  }

  export type workout_plansUpdateWithWhereUniqueWithoutUsersInput = {
    where: workout_plansWhereUniqueInput
    data: XOR<workout_plansUpdateWithoutUsersInput, workout_plansUncheckedUpdateWithoutUsersInput>
  }

  export type workout_plansUpdateManyWithWhereWithoutUsersInput = {
    where: workout_plansScalarWhereInput
    data: XOR<workout_plansUpdateManyMutationInput, workout_plansUncheckedUpdateManyWithoutUsersInput>
  }

  export type workout_plansScalarWhereInput = {
    AND?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
    OR?: workout_plansScalarWhereInput[]
    NOT?: workout_plansScalarWhereInput | workout_plansScalarWhereInput[]
    id?: UuidFilter<"workout_plans"> | string
    user_id?: UuidFilter<"workout_plans"> | string
    name?: StringFilter<"workout_plans"> | string
    description?: StringNullableFilter<"workout_plans"> | string | null
    goal?: StringNullableFilter<"workout_plans"> | string | null
    frequency?: IntNullableFilter<"workout_plans"> | number | null
    duration_weeks?: IntNullableFilter<"workout_plans"> | number | null
    active?: BoolNullableFilter<"workout_plans"> | boolean | null
    created_at?: DateTimeNullableFilter<"workout_plans"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_plans"> | Date | string | null
  }

  export type usersCreateWithoutWater_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWater_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsUncheckedCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWater_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWater_logsInput, usersUncheckedCreateWithoutWater_logsInput>
  }

  export type usersUpsertWithoutWater_logsInput = {
    update: XOR<usersUpdateWithoutWater_logsInput, usersUncheckedUpdateWithoutWater_logsInput>
    create: XOR<usersCreateWithoutWater_logsInput, usersUncheckedCreateWithoutWater_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWater_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWater_logsInput, usersUncheckedUpdateWithoutWater_logsInput>
  }

  export type usersUpdateWithoutWater_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWater_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUncheckedUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutWeight_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsCreateNestedManyWithoutUsersInput
    water_logs?: water_logsCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWeight_logsInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsUncheckedCreateNestedManyWithoutUsersInput
    water_logs?: water_logsUncheckedCreateNestedManyWithoutUsersInput
    workout_plans?: workout_plansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWeight_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWeight_logsInput, usersUncheckedCreateWithoutWeight_logsInput>
  }

  export type usersUpsertWithoutWeight_logsInput = {
    update: XOR<usersUpdateWithoutWeight_logsInput, usersUncheckedUpdateWithoutWeight_logsInput>
    create: XOR<usersCreateWithoutWeight_logsInput, usersUncheckedCreateWithoutWeight_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWeight_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWeight_logsInput, usersUncheckedUpdateWithoutWeight_logsInput>
  }

  export type usersUpdateWithoutWeight_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWeight_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUncheckedUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUncheckedUpdateManyWithoutUsersNestedInput
    workout_plans?: workout_plansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type exercisesCreateWithoutWorkout_plan_exercisesInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
    exercise_logs?: exercise_logsCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUncheckedCreateWithoutWorkout_plan_exercisesInput = {
    id?: string
    name: string
    category: string
    description?: string | null
    muscle_groups?: exercisesCreatemuscle_groupsInput | string[]
    equipment?: exercisesCreateequipmentInput | string[]
    difficulty?: string | null
    created_at?: Date | string | null
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type exercisesCreateOrConnectWithoutWorkout_plan_exercisesInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutWorkout_plan_exercisesInput, exercisesUncheckedCreateWithoutWorkout_plan_exercisesInput>
  }

  export type workout_plansCreateWithoutWorkout_plan_exercisesInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutWorkout_plansInput
  }

  export type workout_plansUncheckedCreateWithoutWorkout_plan_exercisesInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plansCreateOrConnectWithoutWorkout_plan_exercisesInput = {
    where: workout_plansWhereUniqueInput
    create: XOR<workout_plansCreateWithoutWorkout_plan_exercisesInput, workout_plansUncheckedCreateWithoutWorkout_plan_exercisesInput>
  }

  export type exercisesUpsertWithoutWorkout_plan_exercisesInput = {
    update: XOR<exercisesUpdateWithoutWorkout_plan_exercisesInput, exercisesUncheckedUpdateWithoutWorkout_plan_exercisesInput>
    create: XOR<exercisesCreateWithoutWorkout_plan_exercisesInput, exercisesUncheckedCreateWithoutWorkout_plan_exercisesInput>
    where?: exercisesWhereInput
  }

  export type exercisesUpdateToOneWithWhereWithoutWorkout_plan_exercisesInput = {
    where?: exercisesWhereInput
    data: XOR<exercisesUpdateWithoutWorkout_plan_exercisesInput, exercisesUncheckedUpdateWithoutWorkout_plan_exercisesInput>
  }

  export type exercisesUpdateWithoutWorkout_plan_exercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercise_logs?: exercise_logsUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateWithoutWorkout_plan_exercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_groups?: exercisesUpdatemuscle_groupsInput | string[]
    equipment?: exercisesUpdateequipmentInput | string[]
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type workout_plansUpsertWithoutWorkout_plan_exercisesInput = {
    update: XOR<workout_plansUpdateWithoutWorkout_plan_exercisesInput, workout_plansUncheckedUpdateWithoutWorkout_plan_exercisesInput>
    create: XOR<workout_plansCreateWithoutWorkout_plan_exercisesInput, workout_plansUncheckedCreateWithoutWorkout_plan_exercisesInput>
    where?: workout_plansWhereInput
  }

  export type workout_plansUpdateToOneWithWhereWithoutWorkout_plan_exercisesInput = {
    where?: workout_plansWhereInput
    data: XOR<workout_plansUpdateWithoutWorkout_plan_exercisesInput, workout_plansUncheckedUpdateWithoutWorkout_plan_exercisesInput>
  }

  export type workout_plansUpdateWithoutWorkout_plan_exercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateWithoutWorkout_plan_exercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesCreateWithoutWorkout_plansInput = {
    id?: string
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercises?: exercisesCreateNestedOneWithoutWorkout_plan_exercisesInput
  }

  export type workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput = {
    id?: string
    exercise_id?: string | null
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plan_exercisesCreateOrConnectWithoutWorkout_plansInput = {
    where: workout_plan_exercisesWhereUniqueInput
    create: XOR<workout_plan_exercisesCreateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput>
  }

  export type workout_plan_exercisesCreateManyWorkout_plansInputEnvelope = {
    data: workout_plan_exercisesCreateManyWorkout_plansInput | workout_plan_exercisesCreateManyWorkout_plansInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWorkout_plansInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsCreateNestedManyWithoutUsersInput
    water_logs?: water_logsCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkout_plansInput = {
    id?: string
    name: string
    email: string
    password: string
    age?: number | null
    gender?: string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bmi?: Decimal | DecimalJsLike | number | string | null
    fitness_goal?: string | null
    dietary_preference?: string | null
    dietary_restrictions?: usersCreatedietary_restrictionsInput | string[]
    avatar_url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    age_range?: string
    exercise_logs?: exercise_logsUncheckedCreateNestedManyWithoutUsersInput
    meal_logs?: meal_logsUncheckedCreateNestedManyWithoutUsersInput
    water_logs?: water_logsUncheckedCreateNestedManyWithoutUsersInput
    weight_logs?: weight_logsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkout_plansInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
  }

  export type workout_plan_exercisesUpsertWithWhereUniqueWithoutWorkout_plansInput = {
    where: workout_plan_exercisesWhereUniqueInput
    update: XOR<workout_plan_exercisesUpdateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedUpdateWithoutWorkout_plansInput>
    create: XOR<workout_plan_exercisesCreateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedCreateWithoutWorkout_plansInput>
  }

  export type workout_plan_exercisesUpdateWithWhereUniqueWithoutWorkout_plansInput = {
    where: workout_plan_exercisesWhereUniqueInput
    data: XOR<workout_plan_exercisesUpdateWithoutWorkout_plansInput, workout_plan_exercisesUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type workout_plan_exercisesUpdateManyWithWhereWithoutWorkout_plansInput = {
    where: workout_plan_exercisesScalarWhereInput
    data: XOR<workout_plan_exercisesUpdateManyMutationInput, workout_plan_exercisesUncheckedUpdateManyWithoutWorkout_plansInput>
  }

  export type usersUpsertWithoutWorkout_plansInput = {
    update: XOR<usersUpdateWithoutWorkout_plansInput, usersUncheckedUpdateWithoutWorkout_plansInput>
    create: XOR<usersCreateWithoutWorkout_plansInput, usersUncheckedCreateWithoutWorkout_plansInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkout_plansInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkout_plansInput, usersUncheckedUpdateWithoutWorkout_plansInput>
  }

  export type usersUpdateWithoutWorkout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fitness_goal?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_preference?: NullableStringFieldUpdateOperationsInput | string | null
    dietary_restrictions?: usersUpdatedietary_restrictionsInput | string[]
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_range?: StringFieldUpdateOperationsInput | string
    exercise_logs?: exercise_logsUncheckedUpdateManyWithoutUsersNestedInput
    meal_logs?: meal_logsUncheckedUpdateManyWithoutUsersNestedInput
    water_logs?: water_logsUncheckedUpdateManyWithoutUsersNestedInput
    weight_logs?: weight_logsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type exercise_logsCreateManyExercisesInput = {
    id?: string
    user_id: string
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
  }

  export type workout_plan_exercisesCreateManyExercisesInput = {
    id?: string
    workout_plan_id: string
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exercise_logsUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutExercise_logsNestedInput
  }

  export type exercise_logsUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercise_logsUncheckedUpdateManyWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plans?: workout_plansUpdateOneRequiredWithoutWorkout_plan_exercisesNestedInput
  }

  export type workout_plan_exercisesUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workout_plan_id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesUncheckedUpdateManyWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workout_plan_id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsCreateManyMealsInput = {
    id?: string
    user_id: string
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
  }

  export type meal_logsUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMeal_logsNestedInput
  }

  export type meal_logsUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsUncheckedUpdateManyWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercise_logsCreateManyUsersInput = {
    id?: string
    exercise_id?: string | null
    exercise_name?: string | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    intensity?: string | null
    notes?: string | null
    completed_at?: Date | string
    created_at?: Date | string | null
  }

  export type meal_logsCreateManyUsersInput = {
    id?: string
    meal_id?: string | null
    meal_name?: string | null
    portion?: Decimal | DecimalJsLike | number | string | null
    calories?: number | null
    protein?: Decimal | DecimalJsLike | number | string | null
    carbs?: Decimal | DecimalJsLike | number | string | null
    fats?: Decimal | DecimalJsLike | number | string | null
    meal_time?: string | null
    notes?: string | null
    consumed_at?: Date | string
    created_at?: Date | string | null
  }

  export type water_logsCreateManyUsersInput = {
    id?: string
    amount_ml: number
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type weight_logsCreateManyUsersInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    logged_at?: Date | string
    created_at?: Date | string | null
  }

  export type workout_plansCreateManyUsersInput = {
    id?: string
    name: string
    description?: string | null
    goal?: string | null
    frequency?: number | null
    duration_weeks?: number | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exercise_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneWithoutExercise_logsNestedInput
  }

  export type exercise_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercise_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    intensity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meals?: mealsUpdateOneWithoutMeal_logsNestedInput
  }

  export type meal_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_id?: NullableStringFieldUpdateOperationsInput | string | null
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meal_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_id?: NullableStringFieldUpdateOperationsInput | string | null
    meal_name?: NullableStringFieldUpdateOperationsInput | string | null
    portion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    carbs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fats?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    meal_time?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type water_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type water_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type water_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_ml?: IntFieldUpdateOperationsInput | number
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type weight_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type weight_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type weight_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plansUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUpdateManyWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_plan_exercises?: workout_plan_exercisesUncheckedUpdateManyWithoutWorkout_plansNestedInput
  }

  export type workout_plansUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableIntFieldUpdateOperationsInput | number | null
    duration_weeks?: NullableIntFieldUpdateOperationsInput | number | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesCreateManyWorkout_plansInput = {
    id?: string
    exercise_id?: string | null
    exercise_name?: string | null
    day_of_week?: number | null
    sets?: number | null
    reps?: number | null
    weight?: Decimal | DecimalJsLike | number | string | null
    duration?: number | null
    completed?: boolean | null
    completion_date?: Date | string | null
    actual_sets?: number | null
    actual_reps?: number | null
    actual_weight?: Decimal | DecimalJsLike | number | string | null
    actual_duration?: number | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_plan_exercisesUpdateWithoutWorkout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneWithoutWorkout_plan_exercisesNestedInput
  }

  export type workout_plan_exercisesUncheckedUpdateWithoutWorkout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_plan_exercisesUncheckedUpdateManyWithoutWorkout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_id?: NullableStringFieldUpdateOperationsInput | string | null
    exercise_name?: NullableStringFieldUpdateOperationsInput | string | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_sets?: NullableIntFieldUpdateOperationsInput | number | null
    actual_reps?: NullableIntFieldUpdateOperationsInput | number | null
    actual_weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_duration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}