
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
 * Model BadgesDemo
 * 
 */
export type BadgesDemo = $Result.DefaultSelection<Prisma.$BadgesDemoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BadgesDemos
 * const badgesDemos = await prisma.badgesDemo.findMany()
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
   * // Fetch zero or more BadgesDemos
   * const badgesDemos = await prisma.badgesDemo.findMany()
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
   * `prisma.badgesDemo`: Exposes CRUD operations for the **BadgesDemo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BadgesDemos
    * const badgesDemos = await prisma.badgesDemo.findMany()
    * ```
    */
  get badgesDemo(): Prisma.BadgesDemoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    BadgesDemo: 'BadgesDemo'
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
      modelProps: "badgesDemo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BadgesDemo: {
        payload: Prisma.$BadgesDemoPayload<ExtArgs>
        fields: Prisma.BadgesDemoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgesDemoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgesDemoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>
          }
          findFirst: {
            args: Prisma.BadgesDemoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgesDemoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>
          }
          findMany: {
            args: Prisma.BadgesDemoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>[]
          }
          create: {
            args: Prisma.BadgesDemoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>
          }
          createMany: {
            args: Prisma.BadgesDemoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgesDemoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>[]
          }
          delete: {
            args: Prisma.BadgesDemoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>
          }
          update: {
            args: Prisma.BadgesDemoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>
          }
          deleteMany: {
            args: Prisma.BadgesDemoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgesDemoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgesDemoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>[]
          }
          upsert: {
            args: Prisma.BadgesDemoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesDemoPayload>
          }
          aggregate: {
            args: Prisma.BadgesDemoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadgesDemo>
          }
          groupBy: {
            args: Prisma.BadgesDemoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgesDemoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgesDemoCountArgs<ExtArgs>
            result: $Utils.Optional<BadgesDemoCountAggregateOutputType> | number
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
    badgesDemo?: BadgesDemoOmit
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
   * Models
   */

  /**
   * Model BadgesDemo
   */

  export type AggregateBadgesDemo = {
    _count: BadgesDemoCountAggregateOutputType | null
    _min: BadgesDemoMinAggregateOutputType | null
    _max: BadgesDemoMaxAggregateOutputType | null
  }

  export type BadgesDemoMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    issuedOn: string | null
    recipientIdentify: string | null
    criteriaUrl: string | null
    criteriaNarrative: string | null
    issuerDescription: string | null
    issuerEmail: string | null
    IssuerImageUrl: string | null
    issuerName: string | null
    issuerUrl: string | null
  }

  export type BadgesDemoMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    issuedOn: string | null
    recipientIdentify: string | null
    criteriaUrl: string | null
    criteriaNarrative: string | null
    issuerDescription: string | null
    issuerEmail: string | null
    IssuerImageUrl: string | null
    issuerName: string | null
    issuerUrl: string | null
  }

  export type BadgesDemoCountAggregateOutputType = {
    uuid: number
    name: number
    description: number
    imageUrl: number
    issuedOn: number
    recipientIdentify: number
    criteriaUrl: number
    criteriaNarrative: number
    issuerDescription: number
    issuerEmail: number
    IssuerImageUrl: number
    issuerName: number
    issuerUrl: number
    tags: number
    _all: number
  }


  export type BadgesDemoMinAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    imageUrl?: true
    issuedOn?: true
    recipientIdentify?: true
    criteriaUrl?: true
    criteriaNarrative?: true
    issuerDescription?: true
    issuerEmail?: true
    IssuerImageUrl?: true
    issuerName?: true
    issuerUrl?: true
  }

  export type BadgesDemoMaxAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    imageUrl?: true
    issuedOn?: true
    recipientIdentify?: true
    criteriaUrl?: true
    criteriaNarrative?: true
    issuerDescription?: true
    issuerEmail?: true
    IssuerImageUrl?: true
    issuerName?: true
    issuerUrl?: true
  }

  export type BadgesDemoCountAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    imageUrl?: true
    issuedOn?: true
    recipientIdentify?: true
    criteriaUrl?: true
    criteriaNarrative?: true
    issuerDescription?: true
    issuerEmail?: true
    IssuerImageUrl?: true
    issuerName?: true
    issuerUrl?: true
    tags?: true
    _all?: true
  }

  export type BadgesDemoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgesDemo to aggregate.
     */
    where?: BadgesDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgesDemos to fetch.
     */
    orderBy?: BadgesDemoOrderByWithRelationInput | BadgesDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgesDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgesDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgesDemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BadgesDemos
    **/
    _count?: true | BadgesDemoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgesDemoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgesDemoMaxAggregateInputType
  }

  export type GetBadgesDemoAggregateType<T extends BadgesDemoAggregateArgs> = {
        [P in keyof T & keyof AggregateBadgesDemo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadgesDemo[P]>
      : GetScalarType<T[P], AggregateBadgesDemo[P]>
  }




  export type BadgesDemoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgesDemoWhereInput
    orderBy?: BadgesDemoOrderByWithAggregationInput | BadgesDemoOrderByWithAggregationInput[]
    by: BadgesDemoScalarFieldEnum[] | BadgesDemoScalarFieldEnum
    having?: BadgesDemoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgesDemoCountAggregateInputType | true
    _min?: BadgesDemoMinAggregateInputType
    _max?: BadgesDemoMaxAggregateInputType
  }

  export type BadgesDemoGroupByOutputType = {
    uuid: string
    name: string
    description: string
    imageUrl: string
    issuedOn: string
    recipientIdentify: string
    criteriaUrl: string
    criteriaNarrative: string
    issuerDescription: string
    issuerEmail: string
    IssuerImageUrl: string
    issuerName: string
    issuerUrl: string
    tags: string[]
    _count: BadgesDemoCountAggregateOutputType | null
    _min: BadgesDemoMinAggregateOutputType | null
    _max: BadgesDemoMaxAggregateOutputType | null
  }

  type GetBadgesDemoGroupByPayload<T extends BadgesDemoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgesDemoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgesDemoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgesDemoGroupByOutputType[P]>
            : GetScalarType<T[P], BadgesDemoGroupByOutputType[P]>
        }
      >
    >


  export type BadgesDemoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    issuedOn?: boolean
    recipientIdentify?: boolean
    criteriaUrl?: boolean
    criteriaNarrative?: boolean
    issuerDescription?: boolean
    issuerEmail?: boolean
    IssuerImageUrl?: boolean
    issuerName?: boolean
    issuerUrl?: boolean
    tags?: boolean
  }, ExtArgs["result"]["badgesDemo"]>

  export type BadgesDemoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    issuedOn?: boolean
    recipientIdentify?: boolean
    criteriaUrl?: boolean
    criteriaNarrative?: boolean
    issuerDescription?: boolean
    issuerEmail?: boolean
    IssuerImageUrl?: boolean
    issuerName?: boolean
    issuerUrl?: boolean
    tags?: boolean
  }, ExtArgs["result"]["badgesDemo"]>

  export type BadgesDemoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    issuedOn?: boolean
    recipientIdentify?: boolean
    criteriaUrl?: boolean
    criteriaNarrative?: boolean
    issuerDescription?: boolean
    issuerEmail?: boolean
    IssuerImageUrl?: boolean
    issuerName?: boolean
    issuerUrl?: boolean
    tags?: boolean
  }, ExtArgs["result"]["badgesDemo"]>

  export type BadgesDemoSelectScalar = {
    uuid?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    issuedOn?: boolean
    recipientIdentify?: boolean
    criteriaUrl?: boolean
    criteriaNarrative?: boolean
    issuerDescription?: boolean
    issuerEmail?: boolean
    IssuerImageUrl?: boolean
    issuerName?: boolean
    issuerUrl?: boolean
    tags?: boolean
  }

  export type BadgesDemoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "description" | "imageUrl" | "issuedOn" | "recipientIdentify" | "criteriaUrl" | "criteriaNarrative" | "issuerDescription" | "issuerEmail" | "IssuerImageUrl" | "issuerName" | "issuerUrl" | "tags", ExtArgs["result"]["badgesDemo"]>

  export type $BadgesDemoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BadgesDemo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      description: string
      imageUrl: string
      issuedOn: string
      recipientIdentify: string
      criteriaUrl: string
      criteriaNarrative: string
      issuerDescription: string
      issuerEmail: string
      IssuerImageUrl: string
      issuerName: string
      issuerUrl: string
      tags: string[]
    }, ExtArgs["result"]["badgesDemo"]>
    composites: {}
  }

  type BadgesDemoGetPayload<S extends boolean | null | undefined | BadgesDemoDefaultArgs> = $Result.GetResult<Prisma.$BadgesDemoPayload, S>

  type BadgesDemoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgesDemoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgesDemoCountAggregateInputType | true
    }

  export interface BadgesDemoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BadgesDemo'], meta: { name: 'BadgesDemo' } }
    /**
     * Find zero or one BadgesDemo that matches the filter.
     * @param {BadgesDemoFindUniqueArgs} args - Arguments to find a BadgesDemo
     * @example
     * // Get one BadgesDemo
     * const badgesDemo = await prisma.badgesDemo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgesDemoFindUniqueArgs>(args: SelectSubset<T, BadgesDemoFindUniqueArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BadgesDemo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgesDemoFindUniqueOrThrowArgs} args - Arguments to find a BadgesDemo
     * @example
     * // Get one BadgesDemo
     * const badgesDemo = await prisma.badgesDemo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgesDemoFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgesDemoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgesDemo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoFindFirstArgs} args - Arguments to find a BadgesDemo
     * @example
     * // Get one BadgesDemo
     * const badgesDemo = await prisma.badgesDemo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgesDemoFindFirstArgs>(args?: SelectSubset<T, BadgesDemoFindFirstArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgesDemo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoFindFirstOrThrowArgs} args - Arguments to find a BadgesDemo
     * @example
     * // Get one BadgesDemo
     * const badgesDemo = await prisma.badgesDemo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgesDemoFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgesDemoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BadgesDemos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BadgesDemos
     * const badgesDemos = await prisma.badgesDemo.findMany()
     * 
     * // Get first 10 BadgesDemos
     * const badgesDemos = await prisma.badgesDemo.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const badgesDemoWithUuidOnly = await prisma.badgesDemo.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends BadgesDemoFindManyArgs>(args?: SelectSubset<T, BadgesDemoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BadgesDemo.
     * @param {BadgesDemoCreateArgs} args - Arguments to create a BadgesDemo.
     * @example
     * // Create one BadgesDemo
     * const BadgesDemo = await prisma.badgesDemo.create({
     *   data: {
     *     // ... data to create a BadgesDemo
     *   }
     * })
     * 
     */
    create<T extends BadgesDemoCreateArgs>(args: SelectSubset<T, BadgesDemoCreateArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BadgesDemos.
     * @param {BadgesDemoCreateManyArgs} args - Arguments to create many BadgesDemos.
     * @example
     * // Create many BadgesDemos
     * const badgesDemo = await prisma.badgesDemo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgesDemoCreateManyArgs>(args?: SelectSubset<T, BadgesDemoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BadgesDemos and returns the data saved in the database.
     * @param {BadgesDemoCreateManyAndReturnArgs} args - Arguments to create many BadgesDemos.
     * @example
     * // Create many BadgesDemos
     * const badgesDemo = await prisma.badgesDemo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BadgesDemos and only return the `uuid`
     * const badgesDemoWithUuidOnly = await prisma.badgesDemo.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgesDemoCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgesDemoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BadgesDemo.
     * @param {BadgesDemoDeleteArgs} args - Arguments to delete one BadgesDemo.
     * @example
     * // Delete one BadgesDemo
     * const BadgesDemo = await prisma.badgesDemo.delete({
     *   where: {
     *     // ... filter to delete one BadgesDemo
     *   }
     * })
     * 
     */
    delete<T extends BadgesDemoDeleteArgs>(args: SelectSubset<T, BadgesDemoDeleteArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BadgesDemo.
     * @param {BadgesDemoUpdateArgs} args - Arguments to update one BadgesDemo.
     * @example
     * // Update one BadgesDemo
     * const badgesDemo = await prisma.badgesDemo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgesDemoUpdateArgs>(args: SelectSubset<T, BadgesDemoUpdateArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BadgesDemos.
     * @param {BadgesDemoDeleteManyArgs} args - Arguments to filter BadgesDemos to delete.
     * @example
     * // Delete a few BadgesDemos
     * const { count } = await prisma.badgesDemo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgesDemoDeleteManyArgs>(args?: SelectSubset<T, BadgesDemoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgesDemos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BadgesDemos
     * const badgesDemo = await prisma.badgesDemo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgesDemoUpdateManyArgs>(args: SelectSubset<T, BadgesDemoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgesDemos and returns the data updated in the database.
     * @param {BadgesDemoUpdateManyAndReturnArgs} args - Arguments to update many BadgesDemos.
     * @example
     * // Update many BadgesDemos
     * const badgesDemo = await prisma.badgesDemo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BadgesDemos and only return the `uuid`
     * const badgesDemoWithUuidOnly = await prisma.badgesDemo.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends BadgesDemoUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgesDemoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BadgesDemo.
     * @param {BadgesDemoUpsertArgs} args - Arguments to update or create a BadgesDemo.
     * @example
     * // Update or create a BadgesDemo
     * const badgesDemo = await prisma.badgesDemo.upsert({
     *   create: {
     *     // ... data to create a BadgesDemo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BadgesDemo we want to update
     *   }
     * })
     */
    upsert<T extends BadgesDemoUpsertArgs>(args: SelectSubset<T, BadgesDemoUpsertArgs<ExtArgs>>): Prisma__BadgesDemoClient<$Result.GetResult<Prisma.$BadgesDemoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BadgesDemos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoCountArgs} args - Arguments to filter BadgesDemos to count.
     * @example
     * // Count the number of BadgesDemos
     * const count = await prisma.badgesDemo.count({
     *   where: {
     *     // ... the filter for the BadgesDemos we want to count
     *   }
     * })
    **/
    count<T extends BadgesDemoCountArgs>(
      args?: Subset<T, BadgesDemoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgesDemoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BadgesDemo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgesDemoAggregateArgs>(args: Subset<T, BadgesDemoAggregateArgs>): Prisma.PrismaPromise<GetBadgesDemoAggregateType<T>>

    /**
     * Group by BadgesDemo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesDemoGroupByArgs} args - Group by arguments.
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
      T extends BadgesDemoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgesDemoGroupByArgs['orderBy'] }
        : { orderBy?: BadgesDemoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgesDemoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgesDemoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BadgesDemo model
   */
  readonly fields: BadgesDemoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BadgesDemo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgesDemoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BadgesDemo model
   */
  interface BadgesDemoFieldRefs {
    readonly uuid: FieldRef<"BadgesDemo", 'String'>
    readonly name: FieldRef<"BadgesDemo", 'String'>
    readonly description: FieldRef<"BadgesDemo", 'String'>
    readonly imageUrl: FieldRef<"BadgesDemo", 'String'>
    readonly issuedOn: FieldRef<"BadgesDemo", 'String'>
    readonly recipientIdentify: FieldRef<"BadgesDemo", 'String'>
    readonly criteriaUrl: FieldRef<"BadgesDemo", 'String'>
    readonly criteriaNarrative: FieldRef<"BadgesDemo", 'String'>
    readonly issuerDescription: FieldRef<"BadgesDemo", 'String'>
    readonly issuerEmail: FieldRef<"BadgesDemo", 'String'>
    readonly IssuerImageUrl: FieldRef<"BadgesDemo", 'String'>
    readonly issuerName: FieldRef<"BadgesDemo", 'String'>
    readonly issuerUrl: FieldRef<"BadgesDemo", 'String'>
    readonly tags: FieldRef<"BadgesDemo", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * BadgesDemo findUnique
   */
  export type BadgesDemoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * Filter, which BadgesDemo to fetch.
     */
    where: BadgesDemoWhereUniqueInput
  }

  /**
   * BadgesDemo findUniqueOrThrow
   */
  export type BadgesDemoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * Filter, which BadgesDemo to fetch.
     */
    where: BadgesDemoWhereUniqueInput
  }

  /**
   * BadgesDemo findFirst
   */
  export type BadgesDemoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * Filter, which BadgesDemo to fetch.
     */
    where?: BadgesDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgesDemos to fetch.
     */
    orderBy?: BadgesDemoOrderByWithRelationInput | BadgesDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgesDemos.
     */
    cursor?: BadgesDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgesDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgesDemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgesDemos.
     */
    distinct?: BadgesDemoScalarFieldEnum | BadgesDemoScalarFieldEnum[]
  }

  /**
   * BadgesDemo findFirstOrThrow
   */
  export type BadgesDemoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * Filter, which BadgesDemo to fetch.
     */
    where?: BadgesDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgesDemos to fetch.
     */
    orderBy?: BadgesDemoOrderByWithRelationInput | BadgesDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgesDemos.
     */
    cursor?: BadgesDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgesDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgesDemos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgesDemos.
     */
    distinct?: BadgesDemoScalarFieldEnum | BadgesDemoScalarFieldEnum[]
  }

  /**
   * BadgesDemo findMany
   */
  export type BadgesDemoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * Filter, which BadgesDemos to fetch.
     */
    where?: BadgesDemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgesDemos to fetch.
     */
    orderBy?: BadgesDemoOrderByWithRelationInput | BadgesDemoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BadgesDemos.
     */
    cursor?: BadgesDemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgesDemos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgesDemos.
     */
    skip?: number
    distinct?: BadgesDemoScalarFieldEnum | BadgesDemoScalarFieldEnum[]
  }

  /**
   * BadgesDemo create
   */
  export type BadgesDemoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * The data needed to create a BadgesDemo.
     */
    data: XOR<BadgesDemoCreateInput, BadgesDemoUncheckedCreateInput>
  }

  /**
   * BadgesDemo createMany
   */
  export type BadgesDemoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BadgesDemos.
     */
    data: BadgesDemoCreateManyInput | BadgesDemoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BadgesDemo createManyAndReturn
   */
  export type BadgesDemoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * The data used to create many BadgesDemos.
     */
    data: BadgesDemoCreateManyInput | BadgesDemoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BadgesDemo update
   */
  export type BadgesDemoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * The data needed to update a BadgesDemo.
     */
    data: XOR<BadgesDemoUpdateInput, BadgesDemoUncheckedUpdateInput>
    /**
     * Choose, which BadgesDemo to update.
     */
    where: BadgesDemoWhereUniqueInput
  }

  /**
   * BadgesDemo updateMany
   */
  export type BadgesDemoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BadgesDemos.
     */
    data: XOR<BadgesDemoUpdateManyMutationInput, BadgesDemoUncheckedUpdateManyInput>
    /**
     * Filter which BadgesDemos to update
     */
    where?: BadgesDemoWhereInput
    /**
     * Limit how many BadgesDemos to update.
     */
    limit?: number
  }

  /**
   * BadgesDemo updateManyAndReturn
   */
  export type BadgesDemoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * The data used to update BadgesDemos.
     */
    data: XOR<BadgesDemoUpdateManyMutationInput, BadgesDemoUncheckedUpdateManyInput>
    /**
     * Filter which BadgesDemos to update
     */
    where?: BadgesDemoWhereInput
    /**
     * Limit how many BadgesDemos to update.
     */
    limit?: number
  }

  /**
   * BadgesDemo upsert
   */
  export type BadgesDemoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * The filter to search for the BadgesDemo to update in case it exists.
     */
    where: BadgesDemoWhereUniqueInput
    /**
     * In case the BadgesDemo found by the `where` argument doesn't exist, create a new BadgesDemo with this data.
     */
    create: XOR<BadgesDemoCreateInput, BadgesDemoUncheckedCreateInput>
    /**
     * In case the BadgesDemo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgesDemoUpdateInput, BadgesDemoUncheckedUpdateInput>
  }

  /**
   * BadgesDemo delete
   */
  export type BadgesDemoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
    /**
     * Filter which BadgesDemo to delete.
     */
    where: BadgesDemoWhereUniqueInput
  }

  /**
   * BadgesDemo deleteMany
   */
  export type BadgesDemoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgesDemos to delete
     */
    where?: BadgesDemoWhereInput
    /**
     * Limit how many BadgesDemos to delete.
     */
    limit?: number
  }

  /**
   * BadgesDemo without action
   */
  export type BadgesDemoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesDemo
     */
    select?: BadgesDemoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgesDemo
     */
    omit?: BadgesDemoOmit<ExtArgs> | null
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


  export const BadgesDemoScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    issuedOn: 'issuedOn',
    recipientIdentify: 'recipientIdentify',
    criteriaUrl: 'criteriaUrl',
    criteriaNarrative: 'criteriaNarrative',
    issuerDescription: 'issuerDescription',
    issuerEmail: 'issuerEmail',
    IssuerImageUrl: 'IssuerImageUrl',
    issuerName: 'issuerName',
    issuerUrl: 'issuerUrl',
    tags: 'tags'
  };

  export type BadgesDemoScalarFieldEnum = (typeof BadgesDemoScalarFieldEnum)[keyof typeof BadgesDemoScalarFieldEnum]


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
   * Deep Input Types
   */


  export type BadgesDemoWhereInput = {
    AND?: BadgesDemoWhereInput | BadgesDemoWhereInput[]
    OR?: BadgesDemoWhereInput[]
    NOT?: BadgesDemoWhereInput | BadgesDemoWhereInput[]
    uuid?: StringFilter<"BadgesDemo"> | string
    name?: StringFilter<"BadgesDemo"> | string
    description?: StringFilter<"BadgesDemo"> | string
    imageUrl?: StringFilter<"BadgesDemo"> | string
    issuedOn?: StringFilter<"BadgesDemo"> | string
    recipientIdentify?: StringFilter<"BadgesDemo"> | string
    criteriaUrl?: StringFilter<"BadgesDemo"> | string
    criteriaNarrative?: StringFilter<"BadgesDemo"> | string
    issuerDescription?: StringFilter<"BadgesDemo"> | string
    issuerEmail?: StringFilter<"BadgesDemo"> | string
    IssuerImageUrl?: StringFilter<"BadgesDemo"> | string
    issuerName?: StringFilter<"BadgesDemo"> | string
    issuerUrl?: StringFilter<"BadgesDemo"> | string
    tags?: StringNullableListFilter<"BadgesDemo">
  }

  export type BadgesDemoOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    issuedOn?: SortOrder
    recipientIdentify?: SortOrder
    criteriaUrl?: SortOrder
    criteriaNarrative?: SortOrder
    issuerDescription?: SortOrder
    issuerEmail?: SortOrder
    IssuerImageUrl?: SortOrder
    issuerName?: SortOrder
    issuerUrl?: SortOrder
    tags?: SortOrder
  }

  export type BadgesDemoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: BadgesDemoWhereInput | BadgesDemoWhereInput[]
    OR?: BadgesDemoWhereInput[]
    NOT?: BadgesDemoWhereInput | BadgesDemoWhereInput[]
    name?: StringFilter<"BadgesDemo"> | string
    description?: StringFilter<"BadgesDemo"> | string
    imageUrl?: StringFilter<"BadgesDemo"> | string
    issuedOn?: StringFilter<"BadgesDemo"> | string
    recipientIdentify?: StringFilter<"BadgesDemo"> | string
    criteriaUrl?: StringFilter<"BadgesDemo"> | string
    criteriaNarrative?: StringFilter<"BadgesDemo"> | string
    issuerDescription?: StringFilter<"BadgesDemo"> | string
    issuerEmail?: StringFilter<"BadgesDemo"> | string
    IssuerImageUrl?: StringFilter<"BadgesDemo"> | string
    issuerName?: StringFilter<"BadgesDemo"> | string
    issuerUrl?: StringFilter<"BadgesDemo"> | string
    tags?: StringNullableListFilter<"BadgesDemo">
  }, "uuid">

  export type BadgesDemoOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    issuedOn?: SortOrder
    recipientIdentify?: SortOrder
    criteriaUrl?: SortOrder
    criteriaNarrative?: SortOrder
    issuerDescription?: SortOrder
    issuerEmail?: SortOrder
    IssuerImageUrl?: SortOrder
    issuerName?: SortOrder
    issuerUrl?: SortOrder
    tags?: SortOrder
    _count?: BadgesDemoCountOrderByAggregateInput
    _max?: BadgesDemoMaxOrderByAggregateInput
    _min?: BadgesDemoMinOrderByAggregateInput
  }

  export type BadgesDemoScalarWhereWithAggregatesInput = {
    AND?: BadgesDemoScalarWhereWithAggregatesInput | BadgesDemoScalarWhereWithAggregatesInput[]
    OR?: BadgesDemoScalarWhereWithAggregatesInput[]
    NOT?: BadgesDemoScalarWhereWithAggregatesInput | BadgesDemoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"BadgesDemo"> | string
    name?: StringWithAggregatesFilter<"BadgesDemo"> | string
    description?: StringWithAggregatesFilter<"BadgesDemo"> | string
    imageUrl?: StringWithAggregatesFilter<"BadgesDemo"> | string
    issuedOn?: StringWithAggregatesFilter<"BadgesDemo"> | string
    recipientIdentify?: StringWithAggregatesFilter<"BadgesDemo"> | string
    criteriaUrl?: StringWithAggregatesFilter<"BadgesDemo"> | string
    criteriaNarrative?: StringWithAggregatesFilter<"BadgesDemo"> | string
    issuerDescription?: StringWithAggregatesFilter<"BadgesDemo"> | string
    issuerEmail?: StringWithAggregatesFilter<"BadgesDemo"> | string
    IssuerImageUrl?: StringWithAggregatesFilter<"BadgesDemo"> | string
    issuerName?: StringWithAggregatesFilter<"BadgesDemo"> | string
    issuerUrl?: StringWithAggregatesFilter<"BadgesDemo"> | string
    tags?: StringNullableListFilter<"BadgesDemo">
  }

  export type BadgesDemoCreateInput = {
    uuid?: string
    name: string
    description: string
    imageUrl: string
    issuedOn: string
    recipientIdentify: string
    criteriaUrl: string
    criteriaNarrative: string
    issuerDescription: string
    issuerEmail: string
    IssuerImageUrl: string
    issuerName: string
    issuerUrl: string
    tags?: BadgesDemoCreatetagsInput | string[]
  }

  export type BadgesDemoUncheckedCreateInput = {
    uuid?: string
    name: string
    description: string
    imageUrl: string
    issuedOn: string
    recipientIdentify: string
    criteriaUrl: string
    criteriaNarrative: string
    issuerDescription: string
    issuerEmail: string
    IssuerImageUrl: string
    issuerName: string
    issuerUrl: string
    tags?: BadgesDemoCreatetagsInput | string[]
  }

  export type BadgesDemoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    issuedOn?: StringFieldUpdateOperationsInput | string
    recipientIdentify?: StringFieldUpdateOperationsInput | string
    criteriaUrl?: StringFieldUpdateOperationsInput | string
    criteriaNarrative?: StringFieldUpdateOperationsInput | string
    issuerDescription?: StringFieldUpdateOperationsInput | string
    issuerEmail?: StringFieldUpdateOperationsInput | string
    IssuerImageUrl?: StringFieldUpdateOperationsInput | string
    issuerName?: StringFieldUpdateOperationsInput | string
    issuerUrl?: StringFieldUpdateOperationsInput | string
    tags?: BadgesDemoUpdatetagsInput | string[]
  }

  export type BadgesDemoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    issuedOn?: StringFieldUpdateOperationsInput | string
    recipientIdentify?: StringFieldUpdateOperationsInput | string
    criteriaUrl?: StringFieldUpdateOperationsInput | string
    criteriaNarrative?: StringFieldUpdateOperationsInput | string
    issuerDescription?: StringFieldUpdateOperationsInput | string
    issuerEmail?: StringFieldUpdateOperationsInput | string
    IssuerImageUrl?: StringFieldUpdateOperationsInput | string
    issuerName?: StringFieldUpdateOperationsInput | string
    issuerUrl?: StringFieldUpdateOperationsInput | string
    tags?: BadgesDemoUpdatetagsInput | string[]
  }

  export type BadgesDemoCreateManyInput = {
    uuid?: string
    name: string
    description: string
    imageUrl: string
    issuedOn: string
    recipientIdentify: string
    criteriaUrl: string
    criteriaNarrative: string
    issuerDescription: string
    issuerEmail: string
    IssuerImageUrl: string
    issuerName: string
    issuerUrl: string
    tags?: BadgesDemoCreatetagsInput | string[]
  }

  export type BadgesDemoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    issuedOn?: StringFieldUpdateOperationsInput | string
    recipientIdentify?: StringFieldUpdateOperationsInput | string
    criteriaUrl?: StringFieldUpdateOperationsInput | string
    criteriaNarrative?: StringFieldUpdateOperationsInput | string
    issuerDescription?: StringFieldUpdateOperationsInput | string
    issuerEmail?: StringFieldUpdateOperationsInput | string
    IssuerImageUrl?: StringFieldUpdateOperationsInput | string
    issuerName?: StringFieldUpdateOperationsInput | string
    issuerUrl?: StringFieldUpdateOperationsInput | string
    tags?: BadgesDemoUpdatetagsInput | string[]
  }

  export type BadgesDemoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    issuedOn?: StringFieldUpdateOperationsInput | string
    recipientIdentify?: StringFieldUpdateOperationsInput | string
    criteriaUrl?: StringFieldUpdateOperationsInput | string
    criteriaNarrative?: StringFieldUpdateOperationsInput | string
    issuerDescription?: StringFieldUpdateOperationsInput | string
    issuerEmail?: StringFieldUpdateOperationsInput | string
    IssuerImageUrl?: StringFieldUpdateOperationsInput | string
    issuerName?: StringFieldUpdateOperationsInput | string
    issuerUrl?: StringFieldUpdateOperationsInput | string
    tags?: BadgesDemoUpdatetagsInput | string[]
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

  export type BadgesDemoCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    issuedOn?: SortOrder
    recipientIdentify?: SortOrder
    criteriaUrl?: SortOrder
    criteriaNarrative?: SortOrder
    issuerDescription?: SortOrder
    issuerEmail?: SortOrder
    IssuerImageUrl?: SortOrder
    issuerName?: SortOrder
    issuerUrl?: SortOrder
    tags?: SortOrder
  }

  export type BadgesDemoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    issuedOn?: SortOrder
    recipientIdentify?: SortOrder
    criteriaUrl?: SortOrder
    criteriaNarrative?: SortOrder
    issuerDescription?: SortOrder
    issuerEmail?: SortOrder
    IssuerImageUrl?: SortOrder
    issuerName?: SortOrder
    issuerUrl?: SortOrder
  }

  export type BadgesDemoMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    issuedOn?: SortOrder
    recipientIdentify?: SortOrder
    criteriaUrl?: SortOrder
    criteriaNarrative?: SortOrder
    issuerDescription?: SortOrder
    issuerEmail?: SortOrder
    IssuerImageUrl?: SortOrder
    issuerName?: SortOrder
    issuerUrl?: SortOrder
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

  export type BadgesDemoCreatetagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BadgesDemoUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
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