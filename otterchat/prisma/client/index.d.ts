
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationRequest
 * 
 */
export type VerificationRequest = $Result.DefaultSelection<Prisma.$VerificationRequestPayload>
/**
 * Model Servers
 * 
 */
export type Servers = $Result.DefaultSelection<Prisma.$ServersPayload>
/**
 * Model ServerMembers
 * 
 */
export type ServerMembers = $Result.DefaultSelection<Prisma.$ServerMembersPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Channels
 * 
 */
export type Channels = $Result.DefaultSelection<Prisma.$ChannelsPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model MessageAttachments
 * 
 */
export type MessageAttachments = $Result.DefaultSelection<Prisma.$MessageAttachmentsPayload>
/**
 * Model MessageReactions
 * 
 */
export type MessageReactions = $Result.DefaultSelection<Prisma.$MessageReactionsPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model ChannelPermissions
 * 
 */
export type ChannelPermissions = $Result.DefaultSelection<Prisma.$ChannelPermissionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  online: 'online',
  idle: 'idle',
  dnd: 'dnd',
  offline: 'offline'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ChannelType: {
  text: 'text',
  voice: 'voice',
  announcement: 'announcement',
  forum: 'forum'
};

export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType]


export const Messagetype: {
  default: 'default',
  reply: 'reply',
  system: 'system'
};

export type Messagetype = (typeof Messagetype)[keyof typeof Messagetype]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ChannelType = $Enums.ChannelType

export const ChannelType: typeof $Enums.ChannelType

export type Messagetype = $Enums.Messagetype

export const Messagetype: typeof $Enums.Messagetype

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationRequest`: Exposes CRUD operations for the **VerificationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationRequests
    * const verificationRequests = await prisma.verificationRequest.findMany()
    * ```
    */
  get verificationRequest(): Prisma.VerificationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servers`: Exposes CRUD operations for the **Servers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.servers.findMany()
    * ```
    */
  get servers(): Prisma.ServersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serverMembers`: Exposes CRUD operations for the **ServerMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerMembers
    * const serverMembers = await prisma.serverMembers.findMany()
    * ```
    */
  get serverMembers(): Prisma.ServerMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channels`: Exposes CRUD operations for the **Channels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channels.findMany()
    * ```
    */
  get channels(): Prisma.ChannelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageAttachments`: Exposes CRUD operations for the **MessageAttachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageAttachments
    * const messageAttachments = await prisma.messageAttachments.findMany()
    * ```
    */
  get messageAttachments(): Prisma.MessageAttachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageReactions`: Exposes CRUD operations for the **MessageReactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageReactions
    * const messageReactions = await prisma.messageReactions.findMany()
    * ```
    */
  get messageReactions(): Prisma.MessageReactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelPermissions`: Exposes CRUD operations for the **ChannelPermissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelPermissions
    * const channelPermissions = await prisma.channelPermissions.findMany()
    * ```
    */
  get channelPermissions(): Prisma.ChannelPermissionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Users: 'Users',
    Account: 'Account',
    Session: 'Session',
    VerificationRequest: 'VerificationRequest',
    Servers: 'Servers',
    ServerMembers: 'ServerMembers',
    Categories: 'Categories',
    Channels: 'Channels',
    Messages: 'Messages',
    MessageAttachments: 'MessageAttachments',
    MessageReactions: 'MessageReactions',
    Roles: 'Roles',
    ChannelPermissions: 'ChannelPermissions'
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
      modelProps: "users" | "account" | "session" | "verificationRequest" | "servers" | "serverMembers" | "categories" | "channels" | "messages" | "messageAttachments" | "messageReactions" | "roles" | "channelPermissions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationRequest: {
        payload: Prisma.$VerificationRequestPayload<ExtArgs>
        fields: Prisma.VerificationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          findFirst: {
            args: Prisma.VerificationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          findMany: {
            args: Prisma.VerificationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>[]
          }
          create: {
            args: Prisma.VerificationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          createMany: {
            args: Prisma.VerificationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>[]
          }
          delete: {
            args: Prisma.VerificationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          update: {
            args: Prisma.VerificationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          deleteMany: {
            args: Prisma.VerificationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>[]
          }
          upsert: {
            args: Prisma.VerificationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationRequestPayload>
          }
          aggregate: {
            args: Prisma.VerificationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationRequest>
          }
          groupBy: {
            args: Prisma.VerificationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationRequestCountAggregateOutputType> | number
          }
        }
      }
      Servers: {
        payload: Prisma.$ServersPayload<ExtArgs>
        fields: Prisma.ServersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          findFirst: {
            args: Prisma.ServersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          findMany: {
            args: Prisma.ServersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>[]
          }
          create: {
            args: Prisma.ServersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          createMany: {
            args: Prisma.ServersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>[]
          }
          delete: {
            args: Prisma.ServersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          update: {
            args: Prisma.ServersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          deleteMany: {
            args: Prisma.ServersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>[]
          }
          upsert: {
            args: Prisma.ServersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          aggregate: {
            args: Prisma.ServersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers>
          }
          groupBy: {
            args: Prisma.ServersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServersCountArgs<ExtArgs>
            result: $Utils.Optional<ServersCountAggregateOutputType> | number
          }
        }
      }
      ServerMembers: {
        payload: Prisma.$ServerMembersPayload<ExtArgs>
        fields: Prisma.ServerMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>
          }
          findFirst: {
            args: Prisma.ServerMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>
          }
          findMany: {
            args: Prisma.ServerMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>[]
          }
          create: {
            args: Prisma.ServerMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>
          }
          createMany: {
            args: Prisma.ServerMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServerMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>[]
          }
          delete: {
            args: Prisma.ServerMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>
          }
          update: {
            args: Prisma.ServerMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>
          }
          deleteMany: {
            args: Prisma.ServerMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServerMembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>[]
          }
          upsert: {
            args: Prisma.ServerMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerMembersPayload>
          }
          aggregate: {
            args: Prisma.ServerMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServerMembers>
          }
          groupBy: {
            args: Prisma.ServerMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ServerMembersCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Channels: {
        payload: Prisma.$ChannelsPayload<ExtArgs>
        fields: Prisma.ChannelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          findFirst: {
            args: Prisma.ChannelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          findMany: {
            args: Prisma.ChannelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>[]
          }
          create: {
            args: Prisma.ChannelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          createMany: {
            args: Prisma.ChannelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>[]
          }
          delete: {
            args: Prisma.ChannelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          update: {
            args: Prisma.ChannelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          deleteMany: {
            args: Prisma.ChannelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>[]
          }
          upsert: {
            args: Prisma.ChannelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelsPayload>
          }
          aggregate: {
            args: Prisma.ChannelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannels>
          }
          groupBy: {
            args: Prisma.ChannelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelsCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelsCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      MessageAttachments: {
        payload: Prisma.$MessageAttachmentsPayload<ExtArgs>
        fields: Prisma.MessageAttachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageAttachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageAttachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>
          }
          findFirst: {
            args: Prisma.MessageAttachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageAttachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>
          }
          findMany: {
            args: Prisma.MessageAttachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>[]
          }
          create: {
            args: Prisma.MessageAttachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>
          }
          createMany: {
            args: Prisma.MessageAttachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageAttachmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>[]
          }
          delete: {
            args: Prisma.MessageAttachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>
          }
          update: {
            args: Prisma.MessageAttachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>
          }
          deleteMany: {
            args: Prisma.MessageAttachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageAttachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageAttachmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>[]
          }
          upsert: {
            args: Prisma.MessageAttachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageAttachmentsPayload>
          }
          aggregate: {
            args: Prisma.MessageAttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageAttachments>
          }
          groupBy: {
            args: Prisma.MessageAttachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageAttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageAttachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<MessageAttachmentsCountAggregateOutputType> | number
          }
        }
      }
      MessageReactions: {
        payload: Prisma.$MessageReactionsPayload<ExtArgs>
        fields: Prisma.MessageReactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageReactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageReactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>
          }
          findFirst: {
            args: Prisma.MessageReactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageReactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>
          }
          findMany: {
            args: Prisma.MessageReactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>[]
          }
          create: {
            args: Prisma.MessageReactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>
          }
          createMany: {
            args: Prisma.MessageReactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageReactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>[]
          }
          delete: {
            args: Prisma.MessageReactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>
          }
          update: {
            args: Prisma.MessageReactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>
          }
          deleteMany: {
            args: Prisma.MessageReactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageReactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageReactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>[]
          }
          upsert: {
            args: Prisma.MessageReactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReactionsPayload>
          }
          aggregate: {
            args: Prisma.MessageReactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageReactions>
          }
          groupBy: {
            args: Prisma.MessageReactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageReactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageReactionsCountArgs<ExtArgs>
            result: $Utils.Optional<MessageReactionsCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      ChannelPermissions: {
        payload: Prisma.$ChannelPermissionsPayload<ExtArgs>
        fields: Prisma.ChannelPermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelPermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelPermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>
          }
          findFirst: {
            args: Prisma.ChannelPermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelPermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>
          }
          findMany: {
            args: Prisma.ChannelPermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>[]
          }
          create: {
            args: Prisma.ChannelPermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>
          }
          createMany: {
            args: Prisma.ChannelPermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelPermissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>[]
          }
          delete: {
            args: Prisma.ChannelPermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>
          }
          update: {
            args: Prisma.ChannelPermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>
          }
          deleteMany: {
            args: Prisma.ChannelPermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelPermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelPermissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>[]
          }
          upsert: {
            args: Prisma.ChannelPermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPermissionsPayload>
          }
          aggregate: {
            args: Prisma.ChannelPermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelPermissions>
          }
          groupBy: {
            args: Prisma.ChannelPermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelPermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelPermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelPermissionsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    users?: UsersOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationRequest?: VerificationRequestOmit
    servers?: ServersOmit
    serverMembers?: ServerMembersOmit
    categories?: CategoriesOmit
    channels?: ChannelsOmit
    messages?: MessagesOmit
    messageAttachments?: MessageAttachmentsOmit
    messageReactions?: MessageReactionsOmit
    roles?: RolesOmit
    channelPermissions?: ChannelPermissionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    owned_servers: number
    server_members: number
    messages_reactions: number
    channel_permissions: number
    accounts: number
    sessions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owned_servers?: boolean | UsersCountOutputTypeCountOwned_serversArgs
    server_members?: boolean | UsersCountOutputTypeCountServer_membersArgs
    messages_reactions?: boolean | UsersCountOutputTypeCountMessages_reactionsArgs
    channel_permissions?: boolean | UsersCountOutputTypeCountChannel_permissionsArgs
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
    sessions?: boolean | UsersCountOutputTypeCountSessionsArgs
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
  export type UsersCountOutputTypeCountOwned_serversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountServer_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessages_reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChannel_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelPermissionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ServersCountOutputType
   */

  export type ServersCountOutputType = {
    members: number
    channels: number
    categories: number
    roles: number
  }

  export type ServersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ServersCountOutputTypeCountMembersArgs
    channels?: boolean | ServersCountOutputTypeCountChannelsArgs
    categories?: boolean | ServersCountOutputTypeCountCategoriesArgs
    roles?: boolean | ServersCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServersCountOutputType
     */
    select?: ServersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerMembersWhereInput
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsWhereInput
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    channels: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | CategoriesCountOutputTypeCountChannelsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsWhereInput
  }


  /**
   * Count Type ChannelsCountOutputType
   */

  export type ChannelsCountOutputType = {
    channel_permissions: number
  }

  export type ChannelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel_permissions?: boolean | ChannelsCountOutputTypeCountChannel_permissionsArgs
  }

  // Custom InputTypes
  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsCountOutputType
     */
    select?: ChannelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeCountChannel_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelPermissionsWhereInput
  }


  /**
   * Count Type MessagesCountOutputType
   */

  export type MessagesCountOutputType = {
    replies: number
    attatachments: number
    message_rections: number
  }

  export type MessagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | MessagesCountOutputTypeCountRepliesArgs
    attatachments?: boolean | MessagesCountOutputTypeCountAttatachmentsArgs
    message_rections?: boolean | MessagesCountOutputTypeCountMessage_rectionsArgs
  }

  // Custom InputTypes
  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     */
    select?: MessagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountAttatachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageAttachmentsWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountMessage_rectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReactionsWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    channel_permissions: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel_permissions?: boolean | RolesCountOutputTypeCountChannel_permissionsArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountChannel_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelPermissionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerification: Date | null
    image: string | null
    username: string | null
    display_name: string | null
    avatar_url: string | null
    status: $Enums.UserStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerification: Date | null
    image: string | null
    username: string | null
    display_name: string | null
    avatar_url: string | null
    status: $Enums.UserStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    emailVerification: number
    image: number
    username: number
    display_name: number
    avatar_url: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    emailVerification?: true
    image?: true
    username?: true
    display_name?: true
    avatar_url?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerification?: true
    image?: true
    username?: true
    display_name?: true
    avatar_url?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    emailVerification?: true
    image?: true
    username?: true
    display_name?: true
    avatar_url?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    emailVerification: Date | null
    image: string | null
    username: string
    display_name: string
    avatar_url: string | null
    status: $Enums.UserStatus
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerification?: boolean
    image?: boolean
    username?: boolean
    display_name?: boolean
    avatar_url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    owned_servers?: boolean | Users$owned_serversArgs<ExtArgs>
    server_members?: boolean | Users$server_membersArgs<ExtArgs>
    messages_reactions?: boolean | Users$messages_reactionsArgs<ExtArgs>
    channel_permissions?: boolean | Users$channel_permissionsArgs<ExtArgs>
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    sessions?: boolean | Users$sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerification?: boolean
    image?: boolean
    username?: boolean
    display_name?: boolean
    avatar_url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerification?: boolean
    image?: boolean
    username?: boolean
    display_name?: boolean
    avatar_url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerification?: boolean
    image?: boolean
    username?: boolean
    display_name?: boolean
    avatar_url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerification" | "image" | "username" | "display_name" | "avatar_url" | "status" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owned_servers?: boolean | Users$owned_serversArgs<ExtArgs>
    server_members?: boolean | Users$server_membersArgs<ExtArgs>
    messages_reactions?: boolean | Users$messages_reactionsArgs<ExtArgs>
    channel_permissions?: boolean | Users$channel_permissionsArgs<ExtArgs>
    accounts?: boolean | Users$accountsArgs<ExtArgs>
    sessions?: boolean | Users$sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      owned_servers: Prisma.$ServersPayload<ExtArgs>[]
      server_members: Prisma.$ServerMembersPayload<ExtArgs>[]
      messages_reactions: Prisma.$MessageReactionsPayload<ExtArgs>[]
      channel_permissions: Prisma.$ChannelPermissionsPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerification: Date | null
      image: string | null
      username: string
      display_name: string
      avatar_url: string | null
      status: $Enums.UserStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owned_servers<T extends Users$owned_serversArgs<ExtArgs> = {}>(args?: Subset<T, Users$owned_serversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    server_members<T extends Users$server_membersArgs<ExtArgs> = {}>(args?: Subset<T, Users$server_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages_reactions<T extends Users$messages_reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$messages_reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channel_permissions<T extends Users$channel_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$channel_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends Users$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Users$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Users$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly emailVerification: FieldRef<"Users", 'DateTime'>
    readonly image: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly display_name: FieldRef<"Users", 'String'>
    readonly avatar_url: FieldRef<"Users", 'String'>
    readonly status: FieldRef<"Users", 'UserStatus'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.owned_servers
   */
  export type Users$owned_serversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    where?: ServersWhereInput
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    cursor?: ServersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Users.server_members
   */
  export type Users$server_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    where?: ServerMembersWhereInput
    orderBy?: ServerMembersOrderByWithRelationInput | ServerMembersOrderByWithRelationInput[]
    cursor?: ServerMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServerMembersScalarFieldEnum | ServerMembersScalarFieldEnum[]
  }

  /**
   * Users.messages_reactions
   */
  export type Users$messages_reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    where?: MessageReactionsWhereInput
    orderBy?: MessageReactionsOrderByWithRelationInput | MessageReactionsOrderByWithRelationInput[]
    cursor?: MessageReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReactionsScalarFieldEnum | MessageReactionsScalarFieldEnum[]
  }

  /**
   * Users.channel_permissions
   */
  export type Users$channel_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    where?: ChannelPermissionsWhereInput
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    cursor?: ChannelPermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelPermissionsScalarFieldEnum | ChannelPermissionsScalarFieldEnum[]
  }

  /**
   * Users.accounts
   */
  export type Users$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Users.sessions
   */
  export type Users$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    providerType: number
    providerId: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "providerType" | "providerId" | "providerAccountId" | "refreshToken" | "accessToken" | "accessTokenExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      providerType: string
      providerId: string
      providerAccountId: string
      refreshToken: string | null
      accessToken: string | null
      accessTokenExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly providerType: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpires: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    accessToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expires: Date
    sessionToken: string
    accessToken: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expires" | "sessionToken" | "accessToken" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expires: Date
      sessionToken: string
      accessToken: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationRequest
   */

  export type AggregateVerificationRequest = {
    _count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  export type VerificationRequestMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationRequestCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationRequestMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationRequestCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRequest to aggregate.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationRequests
    **/
    _count?: true | VerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type GetVerificationRequestAggregateType<T extends VerificationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationRequest[P]>
      : GetScalarType<T[P], AggregateVerificationRequest[P]>
  }




  export type VerificationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationRequestWhereInput
    orderBy?: VerificationRequestOrderByWithAggregationInput | VerificationRequestOrderByWithAggregationInput[]
    by: VerificationRequestScalarFieldEnum[] | VerificationRequestScalarFieldEnum
    having?: VerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationRequestCountAggregateInputType | true
    _min?: VerificationRequestMinAggregateInputType
    _max?: VerificationRequestMaxAggregateInputType
  }

  export type VerificationRequestGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationRequestCountAggregateOutputType | null
    _min: VerificationRequestMinAggregateOutputType | null
    _max: VerificationRequestMaxAggregateOutputType | null
  }

  type GetVerificationRequestGroupByPayload<T extends VerificationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationRequestGroupByOutputType[P]>
        }
      >
    >


  export type VerificationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationRequest"]>

  export type VerificationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationRequest"]>

  export type VerificationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationRequest"]>

  export type VerificationRequestSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationRequest"]>

  export type $VerificationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationRequest"]>
    composites: {}
  }

  type VerificationRequestGetPayload<S extends boolean | null | undefined | VerificationRequestDefaultArgs> = $Result.GetResult<Prisma.$VerificationRequestPayload, S>

  type VerificationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationRequestCountAggregateInputType | true
    }

  export interface VerificationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationRequest'], meta: { name: 'VerificationRequest' } }
    /**
     * Find zero or one VerificationRequest that matches the filter.
     * @param {VerificationRequestFindUniqueArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationRequestFindUniqueArgs>(args: SelectSubset<T, VerificationRequestFindUniqueArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationRequestFindUniqueOrThrowArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationRequestFindFirstArgs>(args?: SelectSubset<T, VerificationRequestFindFirstArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindFirstOrThrowArgs} args - Arguments to find a VerificationRequest
     * @example
     * // Get one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany()
     * 
     * // Get first 10 VerificationRequests
     * const verificationRequests = await prisma.verificationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationRequestFindManyArgs>(args?: SelectSubset<T, VerificationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationRequest.
     * @param {VerificationRequestCreateArgs} args - Arguments to create a VerificationRequest.
     * @example
     * // Create one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.create({
     *   data: {
     *     // ... data to create a VerificationRequest
     *   }
     * })
     * 
     */
    create<T extends VerificationRequestCreateArgs>(args: SelectSubset<T, VerificationRequestCreateArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationRequests.
     * @param {VerificationRequestCreateManyArgs} args - Arguments to create many VerificationRequests.
     * @example
     * // Create many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationRequestCreateManyArgs>(args?: SelectSubset<T, VerificationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationRequests and returns the data saved in the database.
     * @param {VerificationRequestCreateManyAndReturnArgs} args - Arguments to create many VerificationRequests.
     * @example
     * // Create many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationRequests and only return the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationRequest.
     * @param {VerificationRequestDeleteArgs} args - Arguments to delete one VerificationRequest.
     * @example
     * // Delete one VerificationRequest
     * const VerificationRequest = await prisma.verificationRequest.delete({
     *   where: {
     *     // ... filter to delete one VerificationRequest
     *   }
     * })
     * 
     */
    delete<T extends VerificationRequestDeleteArgs>(args: SelectSubset<T, VerificationRequestDeleteArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationRequest.
     * @param {VerificationRequestUpdateArgs} args - Arguments to update one VerificationRequest.
     * @example
     * // Update one VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationRequestUpdateArgs>(args: SelectSubset<T, VerificationRequestUpdateArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationRequests.
     * @param {VerificationRequestDeleteManyArgs} args - Arguments to filter VerificationRequests to delete.
     * @example
     * // Delete a few VerificationRequests
     * const { count } = await prisma.verificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationRequestDeleteManyArgs>(args?: SelectSubset<T, VerificationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationRequestUpdateManyArgs>(args: SelectSubset<T, VerificationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationRequests and returns the data updated in the database.
     * @param {VerificationRequestUpdateManyAndReturnArgs} args - Arguments to update many VerificationRequests.
     * @example
     * // Update many VerificationRequests
     * const verificationRequest = await prisma.verificationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationRequests and only return the `id`
     * const verificationRequestWithIdOnly = await prisma.verificationRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationRequest.
     * @param {VerificationRequestUpsertArgs} args - Arguments to update or create a VerificationRequest.
     * @example
     * // Update or create a VerificationRequest
     * const verificationRequest = await prisma.verificationRequest.upsert({
     *   create: {
     *     // ... data to create a VerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationRequest we want to update
     *   }
     * })
     */
    upsert<T extends VerificationRequestUpsertArgs>(args: SelectSubset<T, VerificationRequestUpsertArgs<ExtArgs>>): Prisma__VerificationRequestClient<$Result.GetResult<Prisma.$VerificationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestCountArgs} args - Arguments to filter VerificationRequests to count.
     * @example
     * // Count the number of VerificationRequests
     * const count = await prisma.verificationRequest.count({
     *   where: {
     *     // ... the filter for the VerificationRequests we want to count
     *   }
     * })
    **/
    count<T extends VerificationRequestCountArgs>(
      args?: Subset<T, VerificationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationRequestAggregateArgs>(args: Subset<T, VerificationRequestAggregateArgs>): Prisma.PrismaPromise<GetVerificationRequestAggregateType<T>>

    /**
     * Group by VerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationRequestGroupByArgs} args - Group by arguments.
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
      T extends VerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: VerificationRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationRequest model
   */
  readonly fields: VerificationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationRequest model
   */
  interface VerificationRequestFieldRefs {
    readonly id: FieldRef<"VerificationRequest", 'String'>
    readonly identifier: FieldRef<"VerificationRequest", 'String'>
    readonly token: FieldRef<"VerificationRequest", 'String'>
    readonly expires: FieldRef<"VerificationRequest", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationRequest findUnique
   */
  export type VerificationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest findUniqueOrThrow
   */
  export type VerificationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest findFirst
   */
  export type VerificationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     */
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }

  /**
   * VerificationRequest findFirstOrThrow
   */
  export type VerificationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * Filter, which VerificationRequest to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationRequests.
     */
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }

  /**
   * VerificationRequest findMany
   */
  export type VerificationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * Filter, which VerificationRequests to fetch.
     */
    where?: VerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationRequests to fetch.
     */
    orderBy?: VerificationRequestOrderByWithRelationInput | VerificationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationRequests.
     */
    cursor?: VerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationRequests.
     */
    skip?: number
    distinct?: VerificationRequestScalarFieldEnum | VerificationRequestScalarFieldEnum[]
  }

  /**
   * VerificationRequest create
   */
  export type VerificationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationRequest.
     */
    data: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
  }

  /**
   * VerificationRequest createMany
   */
  export type VerificationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationRequests.
     */
    data: VerificationRequestCreateManyInput | VerificationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationRequest createManyAndReturn
   */
  export type VerificationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationRequests.
     */
    data: VerificationRequestCreateManyInput | VerificationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationRequest update
   */
  export type VerificationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationRequest.
     */
    data: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
    /**
     * Choose, which VerificationRequest to update.
     */
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest updateMany
   */
  export type VerificationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationRequests.
     */
    data: XOR<VerificationRequestUpdateManyMutationInput, VerificationRequestUncheckedUpdateManyInput>
    /**
     * Filter which VerificationRequests to update
     */
    where?: VerificationRequestWhereInput
    /**
     * Limit how many VerificationRequests to update.
     */
    limit?: number
  }

  /**
   * VerificationRequest updateManyAndReturn
   */
  export type VerificationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * The data used to update VerificationRequests.
     */
    data: XOR<VerificationRequestUpdateManyMutationInput, VerificationRequestUncheckedUpdateManyInput>
    /**
     * Filter which VerificationRequests to update
     */
    where?: VerificationRequestWhereInput
    /**
     * Limit how many VerificationRequests to update.
     */
    limit?: number
  }

  /**
   * VerificationRequest upsert
   */
  export type VerificationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationRequest to update in case it exists.
     */
    where: VerificationRequestWhereUniqueInput
    /**
     * In case the VerificationRequest found by the `where` argument doesn't exist, create a new VerificationRequest with this data.
     */
    create: XOR<VerificationRequestCreateInput, VerificationRequestUncheckedCreateInput>
    /**
     * In case the VerificationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationRequestUpdateInput, VerificationRequestUncheckedUpdateInput>
  }

  /**
   * VerificationRequest delete
   */
  export type VerificationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
    /**
     * Filter which VerificationRequest to delete.
     */
    where: VerificationRequestWhereUniqueInput
  }

  /**
   * VerificationRequest deleteMany
   */
  export type VerificationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationRequests to delete
     */
    where?: VerificationRequestWhereInput
    /**
     * Limit how many VerificationRequests to delete.
     */
    limit?: number
  }

  /**
   * VerificationRequest without action
   */
  export type VerificationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationRequest
     */
    select?: VerificationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationRequest
     */
    omit?: VerificationRequestOmit<ExtArgs> | null
  }


  /**
   * Model Servers
   */

  export type AggregateServers = {
    _count: ServersCountAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  export type ServersMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon_url: string | null
    banner_url: string | null
    owner_id: string | null
    invite_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon_url: string | null
    banner_url: string | null
    owner_id: string | null
    invite_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServersCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon_url: number
    banner_url: number
    owner_id: number
    invite_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServersMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon_url?: true
    banner_url?: true
    owner_id?: true
    invite_code?: true
    created_at?: true
    updated_at?: true
  }

  export type ServersMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon_url?: true
    banner_url?: true
    owner_id?: true
    invite_code?: true
    created_at?: true
    updated_at?: true
  }

  export type ServersCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon_url?: true
    banner_url?: true
    owner_id?: true
    invite_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to aggregate.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServersMaxAggregateInputType
  }

  export type GetServersAggregateType<T extends ServersAggregateArgs> = {
        [P in keyof T & keyof AggregateServers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers[P]>
      : GetScalarType<T[P], AggregateServers[P]>
  }




  export type ServersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServersWhereInput
    orderBy?: ServersOrderByWithAggregationInput | ServersOrderByWithAggregationInput[]
    by: ServersScalarFieldEnum[] | ServersScalarFieldEnum
    having?: ServersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServersCountAggregateInputType | true
    _min?: ServersMinAggregateInputType
    _max?: ServersMaxAggregateInputType
  }

  export type ServersGroupByOutputType = {
    id: string
    name: string
    description: string | null
    icon_url: string | null
    banner_url: string | null
    owner_id: string
    invite_code: string
    created_at: Date
    updated_at: Date
    _count: ServersCountAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  type GetServersGroupByPayload<T extends ServersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServersGroupByOutputType[P]>
            : GetScalarType<T[P], ServersGroupByOutputType[P]>
        }
      >
    >


  export type ServersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon_url?: boolean
    banner_url?: boolean
    owner_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UsersDefaultArgs<ExtArgs>
    members?: boolean | Servers$membersArgs<ExtArgs>
    channels?: boolean | Servers$channelsArgs<ExtArgs>
    categories?: boolean | Servers$categoriesArgs<ExtArgs>
    roles?: boolean | Servers$rolesArgs<ExtArgs>
    _count?: boolean | ServersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type ServersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon_url?: boolean
    banner_url?: boolean
    owner_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type ServersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon_url?: boolean
    banner_url?: boolean
    owner_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type ServersSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon_url?: boolean
    banner_url?: boolean
    owner_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon_url" | "banner_url" | "owner_id" | "invite_code" | "created_at" | "updated_at", ExtArgs["result"]["servers"]>
  export type ServersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UsersDefaultArgs<ExtArgs>
    members?: boolean | Servers$membersArgs<ExtArgs>
    channels?: boolean | Servers$channelsArgs<ExtArgs>
    categories?: boolean | Servers$categoriesArgs<ExtArgs>
    roles?: boolean | Servers$rolesArgs<ExtArgs>
    _count?: boolean | ServersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ServersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ServersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servers"
    objects: {
      owner: Prisma.$UsersPayload<ExtArgs>
      members: Prisma.$ServerMembersPayload<ExtArgs>[]
      channels: Prisma.$ChannelsPayload<ExtArgs>[]
      categories: Prisma.$CategoriesPayload<ExtArgs>[]
      roles: Prisma.$RolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      icon_url: string | null
      banner_url: string | null
      owner_id: string
      invite_code: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["servers"]>
    composites: {}
  }

  type ServersGetPayload<S extends boolean | null | undefined | ServersDefaultArgs> = $Result.GetResult<Prisma.$ServersPayload, S>

  type ServersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServersCountAggregateInputType | true
    }

  export interface ServersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servers'], meta: { name: 'Servers' } }
    /**
     * Find zero or one Servers that matches the filter.
     * @param {ServersFindUniqueArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServersFindUniqueArgs>(args: SelectSubset<T, ServersFindUniqueArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServersFindUniqueOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServersFindUniqueOrThrowArgs>(args: SelectSubset<T, ServersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersFindFirstArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServersFindFirstArgs>(args?: SelectSubset<T, ServersFindFirstArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersFindFirstOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServersFindFirstOrThrowArgs>(args?: SelectSubset<T, ServersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.servers.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.servers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serversWithIdOnly = await prisma.servers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServersFindManyArgs>(args?: SelectSubset<T, ServersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers.
     * @param {ServersCreateArgs} args - Arguments to create a Servers.
     * @example
     * // Create one Servers
     * const Servers = await prisma.servers.create({
     *   data: {
     *     // ... data to create a Servers
     *   }
     * })
     * 
     */
    create<T extends ServersCreateArgs>(args: SelectSubset<T, ServersCreateArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {ServersCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServersCreateManyArgs>(args?: SelectSubset<T, ServersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servers and returns the data saved in the database.
     * @param {ServersCreateManyAndReturnArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servers and only return the `id`
     * const serversWithIdOnly = await prisma.servers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServersCreateManyAndReturnArgs>(args?: SelectSubset<T, ServersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servers.
     * @param {ServersDeleteArgs} args - Arguments to delete one Servers.
     * @example
     * // Delete one Servers
     * const Servers = await prisma.servers.delete({
     *   where: {
     *     // ... filter to delete one Servers
     *   }
     * })
     * 
     */
    delete<T extends ServersDeleteArgs>(args: SelectSubset<T, ServersDeleteArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers.
     * @param {ServersUpdateArgs} args - Arguments to update one Servers.
     * @example
     * // Update one Servers
     * const servers = await prisma.servers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServersUpdateArgs>(args: SelectSubset<T, ServersUpdateArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {ServersDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.servers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServersDeleteManyArgs>(args?: SelectSubset<T, ServersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServersUpdateManyArgs>(args: SelectSubset<T, ServersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers and returns the data updated in the database.
     * @param {ServersUpdateManyAndReturnArgs} args - Arguments to update many Servers.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servers and only return the `id`
     * const serversWithIdOnly = await prisma.servers.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServersUpdateManyAndReturnArgs>(args: SelectSubset<T, ServersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servers.
     * @param {ServersUpsertArgs} args - Arguments to update or create a Servers.
     * @example
     * // Update or create a Servers
     * const servers = await prisma.servers.upsert({
     *   create: {
     *     // ... data to create a Servers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers we want to update
     *   }
     * })
     */
    upsert<T extends ServersUpsertArgs>(args: SelectSubset<T, ServersUpsertArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.servers.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServersCountArgs>(
      args?: Subset<T, ServersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServersAggregateArgs>(args: Subset<T, ServersAggregateArgs>): Prisma.PrismaPromise<GetServersAggregateType<T>>

    /**
     * Group by Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersGroupByArgs} args - Group by arguments.
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
      T extends ServersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServersGroupByArgs['orderBy'] }
        : { orderBy?: ServersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servers model
   */
  readonly fields: ServersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Servers$membersArgs<ExtArgs> = {}>(args?: Subset<T, Servers$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channels<T extends Servers$channelsArgs<ExtArgs> = {}>(args?: Subset<T, Servers$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Servers$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Servers$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Servers$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Servers$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Servers model
   */
  interface ServersFieldRefs {
    readonly id: FieldRef<"Servers", 'String'>
    readonly name: FieldRef<"Servers", 'String'>
    readonly description: FieldRef<"Servers", 'String'>
    readonly icon_url: FieldRef<"Servers", 'String'>
    readonly banner_url: FieldRef<"Servers", 'String'>
    readonly owner_id: FieldRef<"Servers", 'String'>
    readonly invite_code: FieldRef<"Servers", 'String'>
    readonly created_at: FieldRef<"Servers", 'DateTime'>
    readonly updated_at: FieldRef<"Servers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servers findUnique
   */
  export type ServersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers findUniqueOrThrow
   */
  export type ServersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers findFirst
   */
  export type ServersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Servers findFirstOrThrow
   */
  export type ServersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Servers findMany
   */
  export type ServersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Servers create
   */
  export type ServersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * The data needed to create a Servers.
     */
    data: XOR<ServersCreateInput, ServersUncheckedCreateInput>
  }

  /**
   * Servers createMany
   */
  export type ServersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServersCreateManyInput | ServersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servers createManyAndReturn
   */
  export type ServersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * The data used to create many Servers.
     */
    data: ServersCreateManyInput | ServersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servers update
   */
  export type ServersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * The data needed to update a Servers.
     */
    data: XOR<ServersUpdateInput, ServersUncheckedUpdateInput>
    /**
     * Choose, which Servers to update.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers updateMany
   */
  export type ServersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServersUpdateManyMutationInput, ServersUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServersWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
  }

  /**
   * Servers updateManyAndReturn
   */
  export type ServersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * The data used to update Servers.
     */
    data: XOR<ServersUpdateManyMutationInput, ServersUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServersWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servers upsert
   */
  export type ServersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * The filter to search for the Servers to update in case it exists.
     */
    where: ServersWhereUniqueInput
    /**
     * In case the Servers found by the `where` argument doesn't exist, create a new Servers with this data.
     */
    create: XOR<ServersCreateInput, ServersUncheckedCreateInput>
    /**
     * In case the Servers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServersUpdateInput, ServersUncheckedUpdateInput>
  }

  /**
   * Servers delete
   */
  export type ServersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter which Servers to delete.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers deleteMany
   */
  export type ServersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServersWhereInput
    /**
     * Limit how many Servers to delete.
     */
    limit?: number
  }

  /**
   * Servers.members
   */
  export type Servers$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    where?: ServerMembersWhereInput
    orderBy?: ServerMembersOrderByWithRelationInput | ServerMembersOrderByWithRelationInput[]
    cursor?: ServerMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServerMembersScalarFieldEnum | ServerMembersScalarFieldEnum[]
  }

  /**
   * Servers.channels
   */
  export type Servers$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    where?: ChannelsWhereInput
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    cursor?: ChannelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Servers.categories
   */
  export type Servers$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    cursor?: CategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Servers.roles
   */
  export type Servers$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    cursor?: RolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Servers without action
   */
  export type ServersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
  }


  /**
   * Model ServerMembers
   */

  export type AggregateServerMembers = {
    _count: ServerMembersCountAggregateOutputType | null
    _min: ServerMembersMinAggregateOutputType | null
    _max: ServerMembersMaxAggregateOutputType | null
  }

  export type ServerMembersMinAggregateOutputType = {
    id: string | null
    server_id: string | null
    user_id: string | null
    nickname: string | null
    joined_at: Date | null
  }

  export type ServerMembersMaxAggregateOutputType = {
    id: string | null
    server_id: string | null
    user_id: string | null
    nickname: string | null
    joined_at: Date | null
  }

  export type ServerMembersCountAggregateOutputType = {
    id: number
    server_id: number
    user_id: number
    nickname: number
    joined_at: number
    roles: number
    _all: number
  }


  export type ServerMembersMinAggregateInputType = {
    id?: true
    server_id?: true
    user_id?: true
    nickname?: true
    joined_at?: true
  }

  export type ServerMembersMaxAggregateInputType = {
    id?: true
    server_id?: true
    user_id?: true
    nickname?: true
    joined_at?: true
  }

  export type ServerMembersCountAggregateInputType = {
    id?: true
    server_id?: true
    user_id?: true
    nickname?: true
    joined_at?: true
    roles?: true
    _all?: true
  }

  export type ServerMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerMembers to aggregate.
     */
    where?: ServerMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerMembers to fetch.
     */
    orderBy?: ServerMembersOrderByWithRelationInput | ServerMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerMembers
    **/
    _count?: true | ServerMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMembersMaxAggregateInputType
  }

  export type GetServerMembersAggregateType<T extends ServerMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateServerMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerMembers[P]>
      : GetScalarType<T[P], AggregateServerMembers[P]>
  }




  export type ServerMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerMembersWhereInput
    orderBy?: ServerMembersOrderByWithAggregationInput | ServerMembersOrderByWithAggregationInput[]
    by: ServerMembersScalarFieldEnum[] | ServerMembersScalarFieldEnum
    having?: ServerMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerMembersCountAggregateInputType | true
    _min?: ServerMembersMinAggregateInputType
    _max?: ServerMembersMaxAggregateInputType
  }

  export type ServerMembersGroupByOutputType = {
    id: string
    server_id: string
    user_id: string
    nickname: string | null
    joined_at: Date
    roles: JsonValue | null
    _count: ServerMembersCountAggregateOutputType | null
    _min: ServerMembersMinAggregateOutputType | null
    _max: ServerMembersMaxAggregateOutputType | null
  }

  type GetServerMembersGroupByPayload<T extends ServerMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ServerMembersGroupByOutputType[P]>
        }
      >
    >


  export type ServerMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    user_id?: boolean
    nickname?: boolean
    joined_at?: boolean
    roles?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverMembers"]>

  export type ServerMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    user_id?: boolean
    nickname?: boolean
    joined_at?: boolean
    roles?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverMembers"]>

  export type ServerMembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    user_id?: boolean
    nickname?: boolean
    joined_at?: boolean
    roles?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverMembers"]>

  export type ServerMembersSelectScalar = {
    id?: boolean
    server_id?: boolean
    user_id?: boolean
    nickname?: boolean
    joined_at?: boolean
    roles?: boolean
  }

  export type ServerMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "server_id" | "user_id" | "nickname" | "joined_at" | "roles", ExtArgs["result"]["serverMembers"]>
  export type ServerMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ServerMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ServerMembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ServerMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServerMembers"
    objects: {
      server: Prisma.$ServersPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      server_id: string
      user_id: string
      nickname: string | null
      joined_at: Date
      roles: Prisma.JsonValue | null
    }, ExtArgs["result"]["serverMembers"]>
    composites: {}
  }

  type ServerMembersGetPayload<S extends boolean | null | undefined | ServerMembersDefaultArgs> = $Result.GetResult<Prisma.$ServerMembersPayload, S>

  type ServerMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerMembersCountAggregateInputType | true
    }

  export interface ServerMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServerMembers'], meta: { name: 'ServerMembers' } }
    /**
     * Find zero or one ServerMembers that matches the filter.
     * @param {ServerMembersFindUniqueArgs} args - Arguments to find a ServerMembers
     * @example
     * // Get one ServerMembers
     * const serverMembers = await prisma.serverMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerMembersFindUniqueArgs>(args: SelectSubset<T, ServerMembersFindUniqueArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServerMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerMembersFindUniqueOrThrowArgs} args - Arguments to find a ServerMembers
     * @example
     * // Get one ServerMembers
     * const serverMembers = await prisma.serverMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersFindFirstArgs} args - Arguments to find a ServerMembers
     * @example
     * // Get one ServerMembers
     * const serverMembers = await prisma.serverMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerMembersFindFirstArgs>(args?: SelectSubset<T, ServerMembersFindFirstArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersFindFirstOrThrowArgs} args - Arguments to find a ServerMembers
     * @example
     * // Get one ServerMembers
     * const serverMembers = await prisma.serverMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServerMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerMembers
     * const serverMembers = await prisma.serverMembers.findMany()
     * 
     * // Get first 10 ServerMembers
     * const serverMembers = await prisma.serverMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverMembersWithIdOnly = await prisma.serverMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerMembersFindManyArgs>(args?: SelectSubset<T, ServerMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServerMembers.
     * @param {ServerMembersCreateArgs} args - Arguments to create a ServerMembers.
     * @example
     * // Create one ServerMembers
     * const ServerMembers = await prisma.serverMembers.create({
     *   data: {
     *     // ... data to create a ServerMembers
     *   }
     * })
     * 
     */
    create<T extends ServerMembersCreateArgs>(args: SelectSubset<T, ServerMembersCreateArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServerMembers.
     * @param {ServerMembersCreateManyArgs} args - Arguments to create many ServerMembers.
     * @example
     * // Create many ServerMembers
     * const serverMembers = await prisma.serverMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerMembersCreateManyArgs>(args?: SelectSubset<T, ServerMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServerMembers and returns the data saved in the database.
     * @param {ServerMembersCreateManyAndReturnArgs} args - Arguments to create many ServerMembers.
     * @example
     * // Create many ServerMembers
     * const serverMembers = await prisma.serverMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServerMembers and only return the `id`
     * const serverMembersWithIdOnly = await prisma.serverMembers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServerMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, ServerMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServerMembers.
     * @param {ServerMembersDeleteArgs} args - Arguments to delete one ServerMembers.
     * @example
     * // Delete one ServerMembers
     * const ServerMembers = await prisma.serverMembers.delete({
     *   where: {
     *     // ... filter to delete one ServerMembers
     *   }
     * })
     * 
     */
    delete<T extends ServerMembersDeleteArgs>(args: SelectSubset<T, ServerMembersDeleteArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServerMembers.
     * @param {ServerMembersUpdateArgs} args - Arguments to update one ServerMembers.
     * @example
     * // Update one ServerMembers
     * const serverMembers = await prisma.serverMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerMembersUpdateArgs>(args: SelectSubset<T, ServerMembersUpdateArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServerMembers.
     * @param {ServerMembersDeleteManyArgs} args - Arguments to filter ServerMembers to delete.
     * @example
     * // Delete a few ServerMembers
     * const { count } = await prisma.serverMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerMembersDeleteManyArgs>(args?: SelectSubset<T, ServerMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerMembers
     * const serverMembers = await prisma.serverMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerMembersUpdateManyArgs>(args: SelectSubset<T, ServerMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerMembers and returns the data updated in the database.
     * @param {ServerMembersUpdateManyAndReturnArgs} args - Arguments to update many ServerMembers.
     * @example
     * // Update many ServerMembers
     * const serverMembers = await prisma.serverMembers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServerMembers and only return the `id`
     * const serverMembersWithIdOnly = await prisma.serverMembers.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServerMembersUpdateManyAndReturnArgs>(args: SelectSubset<T, ServerMembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServerMembers.
     * @param {ServerMembersUpsertArgs} args - Arguments to update or create a ServerMembers.
     * @example
     * // Update or create a ServerMembers
     * const serverMembers = await prisma.serverMembers.upsert({
     *   create: {
     *     // ... data to create a ServerMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerMembers we want to update
     *   }
     * })
     */
    upsert<T extends ServerMembersUpsertArgs>(args: SelectSubset<T, ServerMembersUpsertArgs<ExtArgs>>): Prisma__ServerMembersClient<$Result.GetResult<Prisma.$ServerMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServerMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersCountArgs} args - Arguments to filter ServerMembers to count.
     * @example
     * // Count the number of ServerMembers
     * const count = await prisma.serverMembers.count({
     *   where: {
     *     // ... the filter for the ServerMembers we want to count
     *   }
     * })
    **/
    count<T extends ServerMembersCountArgs>(
      args?: Subset<T, ServerMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerMembersAggregateArgs>(args: Subset<T, ServerMembersAggregateArgs>): Prisma.PrismaPromise<GetServerMembersAggregateType<T>>

    /**
     * Group by ServerMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerMembersGroupByArgs} args - Group by arguments.
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
      T extends ServerMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerMembersGroupByArgs['orderBy'] }
        : { orderBy?: ServerMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServerMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServerMembers model
   */
  readonly fields: ServerMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends ServersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServersDefaultArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServerMembers model
   */
  interface ServerMembersFieldRefs {
    readonly id: FieldRef<"ServerMembers", 'String'>
    readonly server_id: FieldRef<"ServerMembers", 'String'>
    readonly user_id: FieldRef<"ServerMembers", 'String'>
    readonly nickname: FieldRef<"ServerMembers", 'String'>
    readonly joined_at: FieldRef<"ServerMembers", 'DateTime'>
    readonly roles: FieldRef<"ServerMembers", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ServerMembers findUnique
   */
  export type ServerMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * Filter, which ServerMembers to fetch.
     */
    where: ServerMembersWhereUniqueInput
  }

  /**
   * ServerMembers findUniqueOrThrow
   */
  export type ServerMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * Filter, which ServerMembers to fetch.
     */
    where: ServerMembersWhereUniqueInput
  }

  /**
   * ServerMembers findFirst
   */
  export type ServerMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * Filter, which ServerMembers to fetch.
     */
    where?: ServerMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerMembers to fetch.
     */
    orderBy?: ServerMembersOrderByWithRelationInput | ServerMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerMembers.
     */
    cursor?: ServerMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerMembers.
     */
    distinct?: ServerMembersScalarFieldEnum | ServerMembersScalarFieldEnum[]
  }

  /**
   * ServerMembers findFirstOrThrow
   */
  export type ServerMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * Filter, which ServerMembers to fetch.
     */
    where?: ServerMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerMembers to fetch.
     */
    orderBy?: ServerMembersOrderByWithRelationInput | ServerMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerMembers.
     */
    cursor?: ServerMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerMembers.
     */
    distinct?: ServerMembersScalarFieldEnum | ServerMembersScalarFieldEnum[]
  }

  /**
   * ServerMembers findMany
   */
  export type ServerMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * Filter, which ServerMembers to fetch.
     */
    where?: ServerMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerMembers to fetch.
     */
    orderBy?: ServerMembersOrderByWithRelationInput | ServerMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerMembers.
     */
    cursor?: ServerMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerMembers.
     */
    skip?: number
    distinct?: ServerMembersScalarFieldEnum | ServerMembersScalarFieldEnum[]
  }

  /**
   * ServerMembers create
   */
  export type ServerMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a ServerMembers.
     */
    data: XOR<ServerMembersCreateInput, ServerMembersUncheckedCreateInput>
  }

  /**
   * ServerMembers createMany
   */
  export type ServerMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServerMembers.
     */
    data: ServerMembersCreateManyInput | ServerMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServerMembers createManyAndReturn
   */
  export type ServerMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * The data used to create many ServerMembers.
     */
    data: ServerMembersCreateManyInput | ServerMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServerMembers update
   */
  export type ServerMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a ServerMembers.
     */
    data: XOR<ServerMembersUpdateInput, ServerMembersUncheckedUpdateInput>
    /**
     * Choose, which ServerMembers to update.
     */
    where: ServerMembersWhereUniqueInput
  }

  /**
   * ServerMembers updateMany
   */
  export type ServerMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServerMembers.
     */
    data: XOR<ServerMembersUpdateManyMutationInput, ServerMembersUncheckedUpdateManyInput>
    /**
     * Filter which ServerMembers to update
     */
    where?: ServerMembersWhereInput
    /**
     * Limit how many ServerMembers to update.
     */
    limit?: number
  }

  /**
   * ServerMembers updateManyAndReturn
   */
  export type ServerMembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * The data used to update ServerMembers.
     */
    data: XOR<ServerMembersUpdateManyMutationInput, ServerMembersUncheckedUpdateManyInput>
    /**
     * Filter which ServerMembers to update
     */
    where?: ServerMembersWhereInput
    /**
     * Limit how many ServerMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServerMembers upsert
   */
  export type ServerMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the ServerMembers to update in case it exists.
     */
    where: ServerMembersWhereUniqueInput
    /**
     * In case the ServerMembers found by the `where` argument doesn't exist, create a new ServerMembers with this data.
     */
    create: XOR<ServerMembersCreateInput, ServerMembersUncheckedCreateInput>
    /**
     * In case the ServerMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerMembersUpdateInput, ServerMembersUncheckedUpdateInput>
  }

  /**
   * ServerMembers delete
   */
  export type ServerMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
    /**
     * Filter which ServerMembers to delete.
     */
    where: ServerMembersWhereUniqueInput
  }

  /**
   * ServerMembers deleteMany
   */
  export type ServerMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerMembers to delete
     */
    where?: ServerMembersWhereInput
    /**
     * Limit how many ServerMembers to delete.
     */
    limit?: number
  }

  /**
   * ServerMembers without action
   */
  export type ServerMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerMembers
     */
    select?: ServerMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerMembers
     */
    omit?: ServerMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerMembersInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    position: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    position: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    server_id: string | null
    name: string | null
    position: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    server_id: string | null
    name: string | null
    position: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    server_id: number
    name: number
    position: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    position?: true
  }

  export type CategoriesSumAggregateInputType = {
    position?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    position?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    position?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    position?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    server_id: string
    name: string
    position: number
    created_at: Date
    updated_at: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    position?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    channels?: boolean | Categories$channelsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    position?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    position?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    server_id?: boolean
    name?: boolean
    position?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "server_id" | "name" | "position" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    channels?: boolean | Categories$channelsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      server: Prisma.$ServersPayload<ExtArgs>
      channels: Prisma.$ChannelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      server_id: string
      name: string
      position: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends ServersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServersDefaultArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channels<T extends Categories$channelsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly server_id: FieldRef<"Categories", 'String'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly position: FieldRef<"Categories", 'Int'>
    readonly created_at: FieldRef<"Categories", 'DateTime'>
    readonly updated_at: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.channels
   */
  export type Categories$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    where?: ChannelsWhereInput
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    cursor?: ChannelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Channels
   */

  export type AggregateChannels = {
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  export type ChannelsAvgAggregateOutputType = {
    position: number | null
  }

  export type ChannelsSumAggregateOutputType = {
    position: number | null
  }

  export type ChannelsMinAggregateOutputType = {
    id: string | null
    server_id: string | null
    name: string | null
    type: $Enums.ChannelType | null
    topic: string | null
    position: number | null
    category_id: string | null
    is_nsfw: boolean | null
    created_at: Date | null
  }

  export type ChannelsMaxAggregateOutputType = {
    id: string | null
    server_id: string | null
    name: string | null
    type: $Enums.ChannelType | null
    topic: string | null
    position: number | null
    category_id: string | null
    is_nsfw: boolean | null
    created_at: Date | null
  }

  export type ChannelsCountAggregateOutputType = {
    id: number
    server_id: number
    name: number
    type: number
    topic: number
    position: number
    category_id: number
    is_nsfw: number
    created_at: number
    _all: number
  }


  export type ChannelsAvgAggregateInputType = {
    position?: true
  }

  export type ChannelsSumAggregateInputType = {
    position?: true
  }

  export type ChannelsMinAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    type?: true
    topic?: true
    position?: true
    category_id?: true
    is_nsfw?: true
    created_at?: true
  }

  export type ChannelsMaxAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    type?: true
    topic?: true
    position?: true
    category_id?: true
    is_nsfw?: true
    created_at?: true
  }

  export type ChannelsCountAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    type?: true
    topic?: true
    position?: true
    category_id?: true
    is_nsfw?: true
    created_at?: true
    _all?: true
  }

  export type ChannelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to aggregate.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelsMaxAggregateInputType
  }

  export type GetChannelsAggregateType<T extends ChannelsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannels[P]>
      : GetScalarType<T[P], AggregateChannels[P]>
  }




  export type ChannelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelsWhereInput
    orderBy?: ChannelsOrderByWithAggregationInput | ChannelsOrderByWithAggregationInput[]
    by: ChannelsScalarFieldEnum[] | ChannelsScalarFieldEnum
    having?: ChannelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelsCountAggregateInputType | true
    _avg?: ChannelsAvgAggregateInputType
    _sum?: ChannelsSumAggregateInputType
    _min?: ChannelsMinAggregateInputType
    _max?: ChannelsMaxAggregateInputType
  }

  export type ChannelsGroupByOutputType = {
    id: string
    server_id: string
    name: string
    type: $Enums.ChannelType
    topic: string | null
    position: number
    category_id: string | null
    is_nsfw: boolean
    created_at: Date
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  type GetChannelsGroupByPayload<T extends ChannelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
        }
      >
    >


  export type ChannelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    position?: boolean
    category_id?: boolean
    is_nsfw?: boolean
    created_at?: boolean
    channel_permissions?: boolean | Channels$channel_permissionsArgs<ExtArgs>
    server?: boolean | ServersDefaultArgs<ExtArgs>
    category?: boolean | Channels$categoryArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channels"]>

  export type ChannelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    position?: boolean
    category_id?: boolean
    is_nsfw?: boolean
    created_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    category?: boolean | Channels$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["channels"]>

  export type ChannelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    position?: boolean
    category_id?: boolean
    is_nsfw?: boolean
    created_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    category?: boolean | Channels$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["channels"]>

  export type ChannelsSelectScalar = {
    id?: boolean
    server_id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    position?: boolean
    category_id?: boolean
    is_nsfw?: boolean
    created_at?: boolean
  }

  export type ChannelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "server_id" | "name" | "type" | "topic" | "position" | "category_id" | "is_nsfw" | "created_at", ExtArgs["result"]["channels"]>
  export type ChannelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel_permissions?: boolean | Channels$channel_permissionsArgs<ExtArgs>
    server?: boolean | ServersDefaultArgs<ExtArgs>
    category?: boolean | Channels$categoryArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    category?: boolean | Channels$categoryArgs<ExtArgs>
  }
  export type ChannelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    category?: boolean | Channels$categoryArgs<ExtArgs>
  }

  export type $ChannelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channels"
    objects: {
      channel_permissions: Prisma.$ChannelPermissionsPayload<ExtArgs>[]
      server: Prisma.$ServersPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      server_id: string
      name: string
      type: $Enums.ChannelType
      topic: string | null
      position: number
      category_id: string | null
      is_nsfw: boolean
      created_at: Date
    }, ExtArgs["result"]["channels"]>
    composites: {}
  }

  type ChannelsGetPayload<S extends boolean | null | undefined | ChannelsDefaultArgs> = $Result.GetResult<Prisma.$ChannelsPayload, S>

  type ChannelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelsCountAggregateInputType | true
    }

  export interface ChannelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channels'], meta: { name: 'Channels' } }
    /**
     * Find zero or one Channels that matches the filter.
     * @param {ChannelsFindUniqueArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelsFindUniqueArgs>(args: SelectSubset<T, ChannelsFindUniqueArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelsFindUniqueOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsFindFirstArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelsFindFirstArgs>(args?: SelectSubset<T, ChannelsFindFirstArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsFindFirstOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channels.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelsWithIdOnly = await prisma.channels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelsFindManyArgs>(args?: SelectSubset<T, ChannelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channels.
     * @param {ChannelsCreateArgs} args - Arguments to create a Channels.
     * @example
     * // Create one Channels
     * const Channels = await prisma.channels.create({
     *   data: {
     *     // ... data to create a Channels
     *   }
     * })
     * 
     */
    create<T extends ChannelsCreateArgs>(args: SelectSubset<T, ChannelsCreateArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelsCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channels = await prisma.channels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelsCreateManyArgs>(args?: SelectSubset<T, ChannelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelsCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channels = await prisma.channels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelsWithIdOnly = await prisma.channels.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelsCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channels.
     * @param {ChannelsDeleteArgs} args - Arguments to delete one Channels.
     * @example
     * // Delete one Channels
     * const Channels = await prisma.channels.delete({
     *   where: {
     *     // ... filter to delete one Channels
     *   }
     * })
     * 
     */
    delete<T extends ChannelsDeleteArgs>(args: SelectSubset<T, ChannelsDeleteArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channels.
     * @param {ChannelsUpdateArgs} args - Arguments to update one Channels.
     * @example
     * // Update one Channels
     * const channels = await prisma.channels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelsUpdateArgs>(args: SelectSubset<T, ChannelsUpdateArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelsDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelsDeleteManyArgs>(args?: SelectSubset<T, ChannelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channels = await prisma.channels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelsUpdateManyArgs>(args: SelectSubset<T, ChannelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelsUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channels = await prisma.channels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelsWithIdOnly = await prisma.channels.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChannelsUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channels.
     * @param {ChannelsUpsertArgs} args - Arguments to update or create a Channels.
     * @example
     * // Update or create a Channels
     * const channels = await prisma.channels.upsert({
     *   create: {
     *     // ... data to create a Channels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channels we want to update
     *   }
     * })
     */
    upsert<T extends ChannelsUpsertArgs>(args: SelectSubset<T, ChannelsUpsertArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channels.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelsCountArgs>(
      args?: Subset<T, ChannelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelsAggregateArgs>(args: Subset<T, ChannelsAggregateArgs>): Prisma.PrismaPromise<GetChannelsAggregateType<T>>

    /**
     * Group by Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsGroupByArgs} args - Group by arguments.
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
      T extends ChannelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelsGroupByArgs['orderBy'] }
        : { orderBy?: ChannelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channels model
   */
  readonly fields: ChannelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel_permissions<T extends Channels$channel_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Channels$channel_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    server<T extends ServersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServersDefaultArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Channels$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Channels$categoryArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Channels model
   */
  interface ChannelsFieldRefs {
    readonly id: FieldRef<"Channels", 'String'>
    readonly server_id: FieldRef<"Channels", 'String'>
    readonly name: FieldRef<"Channels", 'String'>
    readonly type: FieldRef<"Channels", 'ChannelType'>
    readonly topic: FieldRef<"Channels", 'String'>
    readonly position: FieldRef<"Channels", 'Int'>
    readonly category_id: FieldRef<"Channels", 'String'>
    readonly is_nsfw: FieldRef<"Channels", 'Boolean'>
    readonly created_at: FieldRef<"Channels", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channels findUnique
   */
  export type ChannelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels findUniqueOrThrow
   */
  export type ChannelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels findFirst
   */
  export type ChannelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Channels findFirstOrThrow
   */
  export type ChannelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Channels findMany
   */
  export type ChannelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelsOrderByWithRelationInput | ChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * Channels create
   */
  export type ChannelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Channels.
     */
    data: XOR<ChannelsCreateInput, ChannelsUncheckedCreateInput>
  }

  /**
   * Channels createMany
   */
  export type ChannelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelsCreateManyInput | ChannelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channels createManyAndReturn
   */
  export type ChannelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelsCreateManyInput | ChannelsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channels update
   */
  export type ChannelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Channels.
     */
    data: XOR<ChannelsUpdateInput, ChannelsUncheckedUpdateInput>
    /**
     * Choose, which Channels to update.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels updateMany
   */
  export type ChannelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelsUpdateManyMutationInput, ChannelsUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelsWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channels updateManyAndReturn
   */
  export type ChannelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelsUpdateManyMutationInput, ChannelsUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelsWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channels upsert
   */
  export type ChannelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Channels to update in case it exists.
     */
    where: ChannelsWhereUniqueInput
    /**
     * In case the Channels found by the `where` argument doesn't exist, create a new Channels with this data.
     */
    create: XOR<ChannelsCreateInput, ChannelsUncheckedCreateInput>
    /**
     * In case the Channels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelsUpdateInput, ChannelsUncheckedUpdateInput>
  }

  /**
   * Channels delete
   */
  export type ChannelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
    /**
     * Filter which Channels to delete.
     */
    where: ChannelsWhereUniqueInput
  }

  /**
   * Channels deleteMany
   */
  export type ChannelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelsWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channels.channel_permissions
   */
  export type Channels$channel_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    where?: ChannelPermissionsWhereInput
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    cursor?: ChannelPermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelPermissionsScalarFieldEnum | ChannelPermissionsScalarFieldEnum[]
  }

  /**
   * Channels.category
   */
  export type Channels$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * Channels without action
   */
  export type ChannelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channels
     */
    select?: ChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channels
     */
    omit?: ChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelsInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    channel_id: string | null
    author_id: string | null
    content: string | null
    message_type: $Enums.Messagetype | null
    reply_to_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    channel_id: string | null
    author_id: string | null
    content: string | null
    message_type: $Enums.Messagetype | null
    reply_to_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    channel_id: number
    author_id: number
    content: number
    message_type: number
    reply_to_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    channel_id?: true
    author_id?: true
    content?: true
    message_type?: true
    reply_to_id?: true
    created_at?: true
    updated_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    channel_id?: true
    author_id?: true
    content?: true
    message_type?: true
    reply_to_id?: true
    created_at?: true
    updated_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    channel_id?: true
    author_id?: true
    content?: true
    message_type?: true
    reply_to_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    channel_id: string
    author_id: string
    content: string
    message_type: $Enums.Messagetype
    reply_to_id: string | null
    created_at: Date
    updated_at: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    author_id?: boolean
    content?: boolean
    message_type?: boolean
    reply_to_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    reply_to?: boolean | Messages$reply_toArgs<ExtArgs>
    replies?: boolean | Messages$repliesArgs<ExtArgs>
    attatachments?: boolean | Messages$attatachmentsArgs<ExtArgs>
    message_rections?: boolean | Messages$message_rectionsArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    author_id?: boolean
    content?: boolean
    message_type?: boolean
    reply_to_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    reply_to?: boolean | Messages$reply_toArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    author_id?: boolean
    content?: boolean
    message_type?: boolean
    reply_to_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    reply_to?: boolean | Messages$reply_toArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    channel_id?: boolean
    author_id?: boolean
    content?: boolean
    message_type?: boolean
    reply_to_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channel_id" | "author_id" | "content" | "message_type" | "reply_to_id" | "created_at" | "updated_at", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reply_to?: boolean | Messages$reply_toArgs<ExtArgs>
    replies?: boolean | Messages$repliesArgs<ExtArgs>
    attatachments?: boolean | Messages$attatachmentsArgs<ExtArgs>
    message_rections?: boolean | Messages$message_rectionsArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reply_to?: boolean | Messages$reply_toArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reply_to?: boolean | Messages$reply_toArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      reply_to: Prisma.$MessagesPayload<ExtArgs> | null
      replies: Prisma.$MessagesPayload<ExtArgs>[]
      attatachments: Prisma.$MessageAttachmentsPayload<ExtArgs>[]
      message_rections: Prisma.$MessageReactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channel_id: string
      author_id: string
      content: string
      message_type: $Enums.Messagetype
      reply_to_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reply_to<T extends Messages$reply_toArgs<ExtArgs> = {}>(args?: Subset<T, Messages$reply_toArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Messages$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Messages$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attatachments<T extends Messages$attatachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Messages$attatachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_rections<T extends Messages$message_rectionsArgs<ExtArgs> = {}>(args?: Subset<T, Messages$message_rectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly channel_id: FieldRef<"Messages", 'String'>
    readonly author_id: FieldRef<"Messages", 'String'>
    readonly content: FieldRef<"Messages", 'String'>
    readonly message_type: FieldRef<"Messages", 'Messagetype'>
    readonly reply_to_id: FieldRef<"Messages", 'String'>
    readonly created_at: FieldRef<"Messages", 'DateTime'>
    readonly updated_at: FieldRef<"Messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages.reply_to
   */
  export type Messages$reply_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
  }

  /**
   * Messages.replies
   */
  export type Messages$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages.attatachments
   */
  export type Messages$attatachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    where?: MessageAttachmentsWhereInput
    orderBy?: MessageAttachmentsOrderByWithRelationInput | MessageAttachmentsOrderByWithRelationInput[]
    cursor?: MessageAttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageAttachmentsScalarFieldEnum | MessageAttachmentsScalarFieldEnum[]
  }

  /**
   * Messages.message_rections
   */
  export type Messages$message_rectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    where?: MessageReactionsWhereInput
    orderBy?: MessageReactionsOrderByWithRelationInput | MessageReactionsOrderByWithRelationInput[]
    cursor?: MessageReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReactionsScalarFieldEnum | MessageReactionsScalarFieldEnum[]
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model MessageAttachments
   */

  export type AggregateMessageAttachments = {
    _count: MessageAttachmentsCountAggregateOutputType | null
    _avg: MessageAttachmentsAvgAggregateOutputType | null
    _sum: MessageAttachmentsSumAggregateOutputType | null
    _min: MessageAttachmentsMinAggregateOutputType | null
    _max: MessageAttachmentsMaxAggregateOutputType | null
  }

  export type MessageAttachmentsAvgAggregateOutputType = {
    file_size: number | null
  }

  export type MessageAttachmentsSumAggregateOutputType = {
    file_size: number | null
  }

  export type MessageAttachmentsMinAggregateOutputType = {
    id: string | null
    messages_id: string | null
    filename: string | null
    file_url: string | null
    file_size: number | null
  }

  export type MessageAttachmentsMaxAggregateOutputType = {
    id: string | null
    messages_id: string | null
    filename: string | null
    file_url: string | null
    file_size: number | null
  }

  export type MessageAttachmentsCountAggregateOutputType = {
    id: number
    messages_id: number
    filename: number
    file_url: number
    file_size: number
    _all: number
  }


  export type MessageAttachmentsAvgAggregateInputType = {
    file_size?: true
  }

  export type MessageAttachmentsSumAggregateInputType = {
    file_size?: true
  }

  export type MessageAttachmentsMinAggregateInputType = {
    id?: true
    messages_id?: true
    filename?: true
    file_url?: true
    file_size?: true
  }

  export type MessageAttachmentsMaxAggregateInputType = {
    id?: true
    messages_id?: true
    filename?: true
    file_url?: true
    file_size?: true
  }

  export type MessageAttachmentsCountAggregateInputType = {
    id?: true
    messages_id?: true
    filename?: true
    file_url?: true
    file_size?: true
    _all?: true
  }

  export type MessageAttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageAttachments to aggregate.
     */
    where?: MessageAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentsOrderByWithRelationInput | MessageAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageAttachments
    **/
    _count?: true | MessageAttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageAttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageAttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageAttachmentsMaxAggregateInputType
  }

  export type GetMessageAttachmentsAggregateType<T extends MessageAttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageAttachments[P]>
      : GetScalarType<T[P], AggregateMessageAttachments[P]>
  }




  export type MessageAttachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageAttachmentsWhereInput
    orderBy?: MessageAttachmentsOrderByWithAggregationInput | MessageAttachmentsOrderByWithAggregationInput[]
    by: MessageAttachmentsScalarFieldEnum[] | MessageAttachmentsScalarFieldEnum
    having?: MessageAttachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageAttachmentsCountAggregateInputType | true
    _avg?: MessageAttachmentsAvgAggregateInputType
    _sum?: MessageAttachmentsSumAggregateInputType
    _min?: MessageAttachmentsMinAggregateInputType
    _max?: MessageAttachmentsMaxAggregateInputType
  }

  export type MessageAttachmentsGroupByOutputType = {
    id: string
    messages_id: string
    filename: string
    file_url: string
    file_size: number
    _count: MessageAttachmentsCountAggregateOutputType | null
    _avg: MessageAttachmentsAvgAggregateOutputType | null
    _sum: MessageAttachmentsSumAggregateOutputType | null
    _min: MessageAttachmentsMinAggregateOutputType | null
    _max: MessageAttachmentsMaxAggregateOutputType | null
  }

  type GetMessageAttachmentsGroupByPayload<T extends MessageAttachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageAttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageAttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageAttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], MessageAttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type MessageAttachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messages_id?: boolean
    filename?: boolean
    file_url?: boolean
    file_size?: boolean
    message?: boolean | MessageAttachments$messageArgs<ExtArgs>
  }, ExtArgs["result"]["messageAttachments"]>

  export type MessageAttachmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messages_id?: boolean
    filename?: boolean
    file_url?: boolean
    file_size?: boolean
    message?: boolean | MessageAttachments$messageArgs<ExtArgs>
  }, ExtArgs["result"]["messageAttachments"]>

  export type MessageAttachmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messages_id?: boolean
    filename?: boolean
    file_url?: boolean
    file_size?: boolean
    message?: boolean | MessageAttachments$messageArgs<ExtArgs>
  }, ExtArgs["result"]["messageAttachments"]>

  export type MessageAttachmentsSelectScalar = {
    id?: boolean
    messages_id?: boolean
    filename?: boolean
    file_url?: boolean
    file_size?: boolean
  }

  export type MessageAttachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messages_id" | "filename" | "file_url" | "file_size", ExtArgs["result"]["messageAttachments"]>
  export type MessageAttachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageAttachments$messageArgs<ExtArgs>
  }
  export type MessageAttachmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageAttachments$messageArgs<ExtArgs>
  }
  export type MessageAttachmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageAttachments$messageArgs<ExtArgs>
  }

  export type $MessageAttachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageAttachments"
    objects: {
      message: Prisma.$MessagesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messages_id: string
      filename: string
      file_url: string
      file_size: number
    }, ExtArgs["result"]["messageAttachments"]>
    composites: {}
  }

  type MessageAttachmentsGetPayload<S extends boolean | null | undefined | MessageAttachmentsDefaultArgs> = $Result.GetResult<Prisma.$MessageAttachmentsPayload, S>

  type MessageAttachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageAttachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageAttachmentsCountAggregateInputType | true
    }

  export interface MessageAttachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageAttachments'], meta: { name: 'MessageAttachments' } }
    /**
     * Find zero or one MessageAttachments that matches the filter.
     * @param {MessageAttachmentsFindUniqueArgs} args - Arguments to find a MessageAttachments
     * @example
     * // Get one MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageAttachmentsFindUniqueArgs>(args: SelectSubset<T, MessageAttachmentsFindUniqueArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageAttachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageAttachmentsFindUniqueOrThrowArgs} args - Arguments to find a MessageAttachments
     * @example
     * // Get one MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageAttachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageAttachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsFindFirstArgs} args - Arguments to find a MessageAttachments
     * @example
     * // Get one MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageAttachmentsFindFirstArgs>(args?: SelectSubset<T, MessageAttachmentsFindFirstArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageAttachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsFindFirstOrThrowArgs} args - Arguments to find a MessageAttachments
     * @example
     * // Get one MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageAttachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageAttachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.findMany()
     * 
     * // Get first 10 MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageAttachmentsWithIdOnly = await prisma.messageAttachments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageAttachmentsFindManyArgs>(args?: SelectSubset<T, MessageAttachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageAttachments.
     * @param {MessageAttachmentsCreateArgs} args - Arguments to create a MessageAttachments.
     * @example
     * // Create one MessageAttachments
     * const MessageAttachments = await prisma.messageAttachments.create({
     *   data: {
     *     // ... data to create a MessageAttachments
     *   }
     * })
     * 
     */
    create<T extends MessageAttachmentsCreateArgs>(args: SelectSubset<T, MessageAttachmentsCreateArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageAttachments.
     * @param {MessageAttachmentsCreateManyArgs} args - Arguments to create many MessageAttachments.
     * @example
     * // Create many MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageAttachmentsCreateManyArgs>(args?: SelectSubset<T, MessageAttachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageAttachments and returns the data saved in the database.
     * @param {MessageAttachmentsCreateManyAndReturnArgs} args - Arguments to create many MessageAttachments.
     * @example
     * // Create many MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageAttachments and only return the `id`
     * const messageAttachmentsWithIdOnly = await prisma.messageAttachments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageAttachmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageAttachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageAttachments.
     * @param {MessageAttachmentsDeleteArgs} args - Arguments to delete one MessageAttachments.
     * @example
     * // Delete one MessageAttachments
     * const MessageAttachments = await prisma.messageAttachments.delete({
     *   where: {
     *     // ... filter to delete one MessageAttachments
     *   }
     * })
     * 
     */
    delete<T extends MessageAttachmentsDeleteArgs>(args: SelectSubset<T, MessageAttachmentsDeleteArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageAttachments.
     * @param {MessageAttachmentsUpdateArgs} args - Arguments to update one MessageAttachments.
     * @example
     * // Update one MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageAttachmentsUpdateArgs>(args: SelectSubset<T, MessageAttachmentsUpdateArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageAttachments.
     * @param {MessageAttachmentsDeleteManyArgs} args - Arguments to filter MessageAttachments to delete.
     * @example
     * // Delete a few MessageAttachments
     * const { count } = await prisma.messageAttachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageAttachmentsDeleteManyArgs>(args?: SelectSubset<T, MessageAttachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageAttachmentsUpdateManyArgs>(args: SelectSubset<T, MessageAttachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageAttachments and returns the data updated in the database.
     * @param {MessageAttachmentsUpdateManyAndReturnArgs} args - Arguments to update many MessageAttachments.
     * @example
     * // Update many MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageAttachments and only return the `id`
     * const messageAttachmentsWithIdOnly = await prisma.messageAttachments.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageAttachmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageAttachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageAttachments.
     * @param {MessageAttachmentsUpsertArgs} args - Arguments to update or create a MessageAttachments.
     * @example
     * // Update or create a MessageAttachments
     * const messageAttachments = await prisma.messageAttachments.upsert({
     *   create: {
     *     // ... data to create a MessageAttachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageAttachments we want to update
     *   }
     * })
     */
    upsert<T extends MessageAttachmentsUpsertArgs>(args: SelectSubset<T, MessageAttachmentsUpsertArgs<ExtArgs>>): Prisma__MessageAttachmentsClient<$Result.GetResult<Prisma.$MessageAttachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsCountArgs} args - Arguments to filter MessageAttachments to count.
     * @example
     * // Count the number of MessageAttachments
     * const count = await prisma.messageAttachments.count({
     *   where: {
     *     // ... the filter for the MessageAttachments we want to count
     *   }
     * })
    **/
    count<T extends MessageAttachmentsCountArgs>(
      args?: Subset<T, MessageAttachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageAttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAttachmentsAggregateArgs>(args: Subset<T, MessageAttachmentsAggregateArgs>): Prisma.PrismaPromise<GetMessageAttachmentsAggregateType<T>>

    /**
     * Group by MessageAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAttachmentsGroupByArgs} args - Group by arguments.
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
      T extends MessageAttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageAttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: MessageAttachmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageAttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageAttachments model
   */
  readonly fields: MessageAttachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageAttachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageAttachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageAttachments$messageArgs<ExtArgs> = {}>(args?: Subset<T, MessageAttachments$messageArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageAttachments model
   */
  interface MessageAttachmentsFieldRefs {
    readonly id: FieldRef<"MessageAttachments", 'String'>
    readonly messages_id: FieldRef<"MessageAttachments", 'String'>
    readonly filename: FieldRef<"MessageAttachments", 'String'>
    readonly file_url: FieldRef<"MessageAttachments", 'String'>
    readonly file_size: FieldRef<"MessageAttachments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MessageAttachments findUnique
   */
  export type MessageAttachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachments to fetch.
     */
    where: MessageAttachmentsWhereUniqueInput
  }

  /**
   * MessageAttachments findUniqueOrThrow
   */
  export type MessageAttachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachments to fetch.
     */
    where: MessageAttachmentsWhereUniqueInput
  }

  /**
   * MessageAttachments findFirst
   */
  export type MessageAttachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachments to fetch.
     */
    where?: MessageAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentsOrderByWithRelationInput | MessageAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageAttachments.
     */
    cursor?: MessageAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageAttachments.
     */
    distinct?: MessageAttachmentsScalarFieldEnum | MessageAttachmentsScalarFieldEnum[]
  }

  /**
   * MessageAttachments findFirstOrThrow
   */
  export type MessageAttachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachments to fetch.
     */
    where?: MessageAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentsOrderByWithRelationInput | MessageAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageAttachments.
     */
    cursor?: MessageAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageAttachments.
     */
    distinct?: MessageAttachmentsScalarFieldEnum | MessageAttachmentsScalarFieldEnum[]
  }

  /**
   * MessageAttachments findMany
   */
  export type MessageAttachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which MessageAttachments to fetch.
     */
    where?: MessageAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageAttachments to fetch.
     */
    orderBy?: MessageAttachmentsOrderByWithRelationInput | MessageAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageAttachments.
     */
    cursor?: MessageAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageAttachments.
     */
    skip?: number
    distinct?: MessageAttachmentsScalarFieldEnum | MessageAttachmentsScalarFieldEnum[]
  }

  /**
   * MessageAttachments create
   */
  export type MessageAttachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageAttachments.
     */
    data: XOR<MessageAttachmentsCreateInput, MessageAttachmentsUncheckedCreateInput>
  }

  /**
   * MessageAttachments createMany
   */
  export type MessageAttachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageAttachments.
     */
    data: MessageAttachmentsCreateManyInput | MessageAttachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageAttachments createManyAndReturn
   */
  export type MessageAttachmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * The data used to create many MessageAttachments.
     */
    data: MessageAttachmentsCreateManyInput | MessageAttachmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageAttachments update
   */
  export type MessageAttachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageAttachments.
     */
    data: XOR<MessageAttachmentsUpdateInput, MessageAttachmentsUncheckedUpdateInput>
    /**
     * Choose, which MessageAttachments to update.
     */
    where: MessageAttachmentsWhereUniqueInput
  }

  /**
   * MessageAttachments updateMany
   */
  export type MessageAttachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageAttachments.
     */
    data: XOR<MessageAttachmentsUpdateManyMutationInput, MessageAttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which MessageAttachments to update
     */
    where?: MessageAttachmentsWhereInput
    /**
     * Limit how many MessageAttachments to update.
     */
    limit?: number
  }

  /**
   * MessageAttachments updateManyAndReturn
   */
  export type MessageAttachmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * The data used to update MessageAttachments.
     */
    data: XOR<MessageAttachmentsUpdateManyMutationInput, MessageAttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which MessageAttachments to update
     */
    where?: MessageAttachmentsWhereInput
    /**
     * Limit how many MessageAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageAttachments upsert
   */
  export type MessageAttachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageAttachments to update in case it exists.
     */
    where: MessageAttachmentsWhereUniqueInput
    /**
     * In case the MessageAttachments found by the `where` argument doesn't exist, create a new MessageAttachments with this data.
     */
    create: XOR<MessageAttachmentsCreateInput, MessageAttachmentsUncheckedCreateInput>
    /**
     * In case the MessageAttachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageAttachmentsUpdateInput, MessageAttachmentsUncheckedUpdateInput>
  }

  /**
   * MessageAttachments delete
   */
  export type MessageAttachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
    /**
     * Filter which MessageAttachments to delete.
     */
    where: MessageAttachmentsWhereUniqueInput
  }

  /**
   * MessageAttachments deleteMany
   */
  export type MessageAttachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageAttachments to delete
     */
    where?: MessageAttachmentsWhereInput
    /**
     * Limit how many MessageAttachments to delete.
     */
    limit?: number
  }

  /**
   * MessageAttachments.message
   */
  export type MessageAttachments$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
  }

  /**
   * MessageAttachments without action
   */
  export type MessageAttachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageAttachments
     */
    select?: MessageAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageAttachments
     */
    omit?: MessageAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageAttachmentsInclude<ExtArgs> | null
  }


  /**
   * Model MessageReactions
   */

  export type AggregateMessageReactions = {
    _count: MessageReactionsCountAggregateOutputType | null
    _min: MessageReactionsMinAggregateOutputType | null
    _max: MessageReactionsMaxAggregateOutputType | null
  }

  export type MessageReactionsMinAggregateOutputType = {
    id: string | null
    message_id: string | null
    user_id: string | null
    emoji: string | null
    created_at: Date | null
  }

  export type MessageReactionsMaxAggregateOutputType = {
    id: string | null
    message_id: string | null
    user_id: string | null
    emoji: string | null
    created_at: Date | null
  }

  export type MessageReactionsCountAggregateOutputType = {
    id: number
    message_id: number
    user_id: number
    emoji: number
    created_at: number
    _all: number
  }


  export type MessageReactionsMinAggregateInputType = {
    id?: true
    message_id?: true
    user_id?: true
    emoji?: true
    created_at?: true
  }

  export type MessageReactionsMaxAggregateInputType = {
    id?: true
    message_id?: true
    user_id?: true
    emoji?: true
    created_at?: true
  }

  export type MessageReactionsCountAggregateInputType = {
    id?: true
    message_id?: true
    user_id?: true
    emoji?: true
    created_at?: true
    _all?: true
  }

  export type MessageReactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReactions to aggregate.
     */
    where?: MessageReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionsOrderByWithRelationInput | MessageReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageReactions
    **/
    _count?: true | MessageReactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageReactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageReactionsMaxAggregateInputType
  }

  export type GetMessageReactionsAggregateType<T extends MessageReactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageReactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageReactions[P]>
      : GetScalarType<T[P], AggregateMessageReactions[P]>
  }




  export type MessageReactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReactionsWhereInput
    orderBy?: MessageReactionsOrderByWithAggregationInput | MessageReactionsOrderByWithAggregationInput[]
    by: MessageReactionsScalarFieldEnum[] | MessageReactionsScalarFieldEnum
    having?: MessageReactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageReactionsCountAggregateInputType | true
    _min?: MessageReactionsMinAggregateInputType
    _max?: MessageReactionsMaxAggregateInputType
  }

  export type MessageReactionsGroupByOutputType = {
    id: string
    message_id: string | null
    user_id: string
    emoji: string
    created_at: Date
    _count: MessageReactionsCountAggregateOutputType | null
    _min: MessageReactionsMinAggregateOutputType | null
    _max: MessageReactionsMaxAggregateOutputType | null
  }

  type GetMessageReactionsGroupByPayload<T extends MessageReactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageReactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageReactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageReactionsGroupByOutputType[P]>
            : GetScalarType<T[P], MessageReactionsGroupByOutputType[P]>
        }
      >
    >


  export type MessageReactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    user_id?: boolean
    emoji?: boolean
    created_at?: boolean
    message?: boolean | MessageReactions$messageArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReactions"]>

  export type MessageReactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    user_id?: boolean
    emoji?: boolean
    created_at?: boolean
    message?: boolean | MessageReactions$messageArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReactions"]>

  export type MessageReactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_id?: boolean
    user_id?: boolean
    emoji?: boolean
    created_at?: boolean
    message?: boolean | MessageReactions$messageArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReactions"]>

  export type MessageReactionsSelectScalar = {
    id?: boolean
    message_id?: boolean
    user_id?: boolean
    emoji?: boolean
    created_at?: boolean
  }

  export type MessageReactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_id" | "user_id" | "emoji" | "created_at", ExtArgs["result"]["messageReactions"]>
  export type MessageReactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageReactions$messageArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessageReactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageReactions$messageArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessageReactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageReactions$messageArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MessageReactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageReactions"
    objects: {
      message: Prisma.$MessagesPayload<ExtArgs> | null
      users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message_id: string | null
      user_id: string
      emoji: string
      created_at: Date
    }, ExtArgs["result"]["messageReactions"]>
    composites: {}
  }

  type MessageReactionsGetPayload<S extends boolean | null | undefined | MessageReactionsDefaultArgs> = $Result.GetResult<Prisma.$MessageReactionsPayload, S>

  type MessageReactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageReactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageReactionsCountAggregateInputType | true
    }

  export interface MessageReactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageReactions'], meta: { name: 'MessageReactions' } }
    /**
     * Find zero or one MessageReactions that matches the filter.
     * @param {MessageReactionsFindUniqueArgs} args - Arguments to find a MessageReactions
     * @example
     * // Get one MessageReactions
     * const messageReactions = await prisma.messageReactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageReactionsFindUniqueArgs>(args: SelectSubset<T, MessageReactionsFindUniqueArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageReactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageReactionsFindUniqueOrThrowArgs} args - Arguments to find a MessageReactions
     * @example
     * // Get one MessageReactions
     * const messageReactions = await prisma.messageReactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageReactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageReactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsFindFirstArgs} args - Arguments to find a MessageReactions
     * @example
     * // Get one MessageReactions
     * const messageReactions = await prisma.messageReactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageReactionsFindFirstArgs>(args?: SelectSubset<T, MessageReactionsFindFirstArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageReactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsFindFirstOrThrowArgs} args - Arguments to find a MessageReactions
     * @example
     * // Get one MessageReactions
     * const messageReactions = await prisma.messageReactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageReactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageReactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageReactions
     * const messageReactions = await prisma.messageReactions.findMany()
     * 
     * // Get first 10 MessageReactions
     * const messageReactions = await prisma.messageReactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageReactionsWithIdOnly = await prisma.messageReactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageReactionsFindManyArgs>(args?: SelectSubset<T, MessageReactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageReactions.
     * @param {MessageReactionsCreateArgs} args - Arguments to create a MessageReactions.
     * @example
     * // Create one MessageReactions
     * const MessageReactions = await prisma.messageReactions.create({
     *   data: {
     *     // ... data to create a MessageReactions
     *   }
     * })
     * 
     */
    create<T extends MessageReactionsCreateArgs>(args: SelectSubset<T, MessageReactionsCreateArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageReactions.
     * @param {MessageReactionsCreateManyArgs} args - Arguments to create many MessageReactions.
     * @example
     * // Create many MessageReactions
     * const messageReactions = await prisma.messageReactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageReactionsCreateManyArgs>(args?: SelectSubset<T, MessageReactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageReactions and returns the data saved in the database.
     * @param {MessageReactionsCreateManyAndReturnArgs} args - Arguments to create many MessageReactions.
     * @example
     * // Create many MessageReactions
     * const messageReactions = await prisma.messageReactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageReactions and only return the `id`
     * const messageReactionsWithIdOnly = await prisma.messageReactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageReactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageReactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageReactions.
     * @param {MessageReactionsDeleteArgs} args - Arguments to delete one MessageReactions.
     * @example
     * // Delete one MessageReactions
     * const MessageReactions = await prisma.messageReactions.delete({
     *   where: {
     *     // ... filter to delete one MessageReactions
     *   }
     * })
     * 
     */
    delete<T extends MessageReactionsDeleteArgs>(args: SelectSubset<T, MessageReactionsDeleteArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageReactions.
     * @param {MessageReactionsUpdateArgs} args - Arguments to update one MessageReactions.
     * @example
     * // Update one MessageReactions
     * const messageReactions = await prisma.messageReactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageReactionsUpdateArgs>(args: SelectSubset<T, MessageReactionsUpdateArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageReactions.
     * @param {MessageReactionsDeleteManyArgs} args - Arguments to filter MessageReactions to delete.
     * @example
     * // Delete a few MessageReactions
     * const { count } = await prisma.messageReactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageReactionsDeleteManyArgs>(args?: SelectSubset<T, MessageReactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageReactions
     * const messageReactions = await prisma.messageReactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageReactionsUpdateManyArgs>(args: SelectSubset<T, MessageReactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReactions and returns the data updated in the database.
     * @param {MessageReactionsUpdateManyAndReturnArgs} args - Arguments to update many MessageReactions.
     * @example
     * // Update many MessageReactions
     * const messageReactions = await prisma.messageReactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageReactions and only return the `id`
     * const messageReactionsWithIdOnly = await prisma.messageReactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageReactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageReactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageReactions.
     * @param {MessageReactionsUpsertArgs} args - Arguments to update or create a MessageReactions.
     * @example
     * // Update or create a MessageReactions
     * const messageReactions = await prisma.messageReactions.upsert({
     *   create: {
     *     // ... data to create a MessageReactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageReactions we want to update
     *   }
     * })
     */
    upsert<T extends MessageReactionsUpsertArgs>(args: SelectSubset<T, MessageReactionsUpsertArgs<ExtArgs>>): Prisma__MessageReactionsClient<$Result.GetResult<Prisma.$MessageReactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsCountArgs} args - Arguments to filter MessageReactions to count.
     * @example
     * // Count the number of MessageReactions
     * const count = await prisma.messageReactions.count({
     *   where: {
     *     // ... the filter for the MessageReactions we want to count
     *   }
     * })
    **/
    count<T extends MessageReactionsCountArgs>(
      args?: Subset<T, MessageReactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageReactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageReactionsAggregateArgs>(args: Subset<T, MessageReactionsAggregateArgs>): Prisma.PrismaPromise<GetMessageReactionsAggregateType<T>>

    /**
     * Group by MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionsGroupByArgs} args - Group by arguments.
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
      T extends MessageReactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageReactionsGroupByArgs['orderBy'] }
        : { orderBy?: MessageReactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageReactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageReactions model
   */
  readonly fields: MessageReactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageReactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageReactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageReactions$messageArgs<ExtArgs> = {}>(args?: Subset<T, MessageReactions$messageArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageReactions model
   */
  interface MessageReactionsFieldRefs {
    readonly id: FieldRef<"MessageReactions", 'String'>
    readonly message_id: FieldRef<"MessageReactions", 'String'>
    readonly user_id: FieldRef<"MessageReactions", 'String'>
    readonly emoji: FieldRef<"MessageReactions", 'String'>
    readonly created_at: FieldRef<"MessageReactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageReactions findUnique
   */
  export type MessageReactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where: MessageReactionsWhereUniqueInput
  }

  /**
   * MessageReactions findUniqueOrThrow
   */
  export type MessageReactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where: MessageReactionsWhereUniqueInput
  }

  /**
   * MessageReactions findFirst
   */
  export type MessageReactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where?: MessageReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionsOrderByWithRelationInput | MessageReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReactions.
     */
    cursor?: MessageReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReactions.
     */
    distinct?: MessageReactionsScalarFieldEnum | MessageReactionsScalarFieldEnum[]
  }

  /**
   * MessageReactions findFirstOrThrow
   */
  export type MessageReactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where?: MessageReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionsOrderByWithRelationInput | MessageReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReactions.
     */
    cursor?: MessageReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReactions.
     */
    distinct?: MessageReactionsScalarFieldEnum | MessageReactionsScalarFieldEnum[]
  }

  /**
   * MessageReactions findMany
   */
  export type MessageReactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where?: MessageReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionsOrderByWithRelationInput | MessageReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageReactions.
     */
    cursor?: MessageReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    distinct?: MessageReactionsScalarFieldEnum | MessageReactionsScalarFieldEnum[]
  }

  /**
   * MessageReactions create
   */
  export type MessageReactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageReactions.
     */
    data: XOR<MessageReactionsCreateInput, MessageReactionsUncheckedCreateInput>
  }

  /**
   * MessageReactions createMany
   */
  export type MessageReactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageReactions.
     */
    data: MessageReactionsCreateManyInput | MessageReactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageReactions createManyAndReturn
   */
  export type MessageReactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * The data used to create many MessageReactions.
     */
    data: MessageReactionsCreateManyInput | MessageReactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReactions update
   */
  export type MessageReactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageReactions.
     */
    data: XOR<MessageReactionsUpdateInput, MessageReactionsUncheckedUpdateInput>
    /**
     * Choose, which MessageReactions to update.
     */
    where: MessageReactionsWhereUniqueInput
  }

  /**
   * MessageReactions updateMany
   */
  export type MessageReactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageReactions.
     */
    data: XOR<MessageReactionsUpdateManyMutationInput, MessageReactionsUncheckedUpdateManyInput>
    /**
     * Filter which MessageReactions to update
     */
    where?: MessageReactionsWhereInput
    /**
     * Limit how many MessageReactions to update.
     */
    limit?: number
  }

  /**
   * MessageReactions updateManyAndReturn
   */
  export type MessageReactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * The data used to update MessageReactions.
     */
    data: XOR<MessageReactionsUpdateManyMutationInput, MessageReactionsUncheckedUpdateManyInput>
    /**
     * Filter which MessageReactions to update
     */
    where?: MessageReactionsWhereInput
    /**
     * Limit how many MessageReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReactions upsert
   */
  export type MessageReactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageReactions to update in case it exists.
     */
    where: MessageReactionsWhereUniqueInput
    /**
     * In case the MessageReactions found by the `where` argument doesn't exist, create a new MessageReactions with this data.
     */
    create: XOR<MessageReactionsCreateInput, MessageReactionsUncheckedCreateInput>
    /**
     * In case the MessageReactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageReactionsUpdateInput, MessageReactionsUncheckedUpdateInput>
  }

  /**
   * MessageReactions delete
   */
  export type MessageReactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
    /**
     * Filter which MessageReactions to delete.
     */
    where: MessageReactionsWhereUniqueInput
  }

  /**
   * MessageReactions deleteMany
   */
  export type MessageReactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReactions to delete
     */
    where?: MessageReactionsWhereInput
    /**
     * Limit how many MessageReactions to delete.
     */
    limit?: number
  }

  /**
   * MessageReactions.message
   */
  export type MessageReactions$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
  }

  /**
   * MessageReactions without action
   */
  export type MessageReactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReactions
     */
    select?: MessageReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReactions
     */
    omit?: MessageReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionsInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    permissions: number | null
    position: number | null
  }

  export type RolesSumAggregateOutputType = {
    permissions: bigint | null
    position: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    server_id: string | null
    name: string | null
    color: string | null
    permissions: bigint | null
    position: number | null
    is_mentionable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    server_id: string | null
    name: string | null
    color: string | null
    permissions: bigint | null
    position: number | null
    is_mentionable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    server_id: number
    name: number
    color: number
    permissions: number
    position: number
    is_mentionable: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    permissions?: true
    position?: true
  }

  export type RolesSumAggregateInputType = {
    permissions?: true
    position?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    color?: true
    permissions?: true
    position?: true
    is_mentionable?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    color?: true
    permissions?: true
    position?: true
    is_mentionable?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    server_id?: true
    name?: true
    color?: true
    permissions?: true
    position?: true
    is_mentionable?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    server_id: string
    name: string
    color: string | null
    permissions: bigint
    position: number
    is_mentionable: boolean
    created_at: Date
    updated_at: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    is_mentionable?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
    channel_permissions?: boolean | Roles$channel_permissionsArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    is_mentionable?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    server_id?: boolean
    name?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    is_mentionable?: boolean
    created_at?: boolean
    updated_at?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    server_id?: boolean
    name?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    is_mentionable?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "server_id" | "name" | "color" | "permissions" | "position" | "is_mentionable" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
    channel_permissions?: boolean | Roles$channel_permissionsArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      server: Prisma.$ServersPayload<ExtArgs>
      channel_permissions: Prisma.$ChannelPermissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      server_id: string
      name: string
      color: string | null
      permissions: bigint
      position: number
      is_mentionable: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends ServersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServersDefaultArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel_permissions<T extends Roles$channel_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Roles$channel_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'String'>
    readonly server_id: FieldRef<"Roles", 'String'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly color: FieldRef<"Roles", 'String'>
    readonly permissions: FieldRef<"Roles", 'BigInt'>
    readonly position: FieldRef<"Roles", 'Int'>
    readonly is_mentionable: FieldRef<"Roles", 'Boolean'>
    readonly created_at: FieldRef<"Roles", 'DateTime'>
    readonly updated_at: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.channel_permissions
   */
  export type Roles$channel_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    where?: ChannelPermissionsWhereInput
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    cursor?: ChannelPermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelPermissionsScalarFieldEnum | ChannelPermissionsScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model ChannelPermissions
   */

  export type AggregateChannelPermissions = {
    _count: ChannelPermissionsCountAggregateOutputType | null
    _avg: ChannelPermissionsAvgAggregateOutputType | null
    _sum: ChannelPermissionsSumAggregateOutputType | null
    _min: ChannelPermissionsMinAggregateOutputType | null
    _max: ChannelPermissionsMaxAggregateOutputType | null
  }

  export type ChannelPermissionsAvgAggregateOutputType = {
    allow_permissions: number | null
    deny_permissions: number | null
  }

  export type ChannelPermissionsSumAggregateOutputType = {
    allow_permissions: bigint | null
    deny_permissions: bigint | null
  }

  export type ChannelPermissionsMinAggregateOutputType = {
    id: string | null
    channel_id: string | null
    role_id: string | null
    user_id: string | null
    allow_permissions: bigint | null
    deny_permissions: bigint | null
  }

  export type ChannelPermissionsMaxAggregateOutputType = {
    id: string | null
    channel_id: string | null
    role_id: string | null
    user_id: string | null
    allow_permissions: bigint | null
    deny_permissions: bigint | null
  }

  export type ChannelPermissionsCountAggregateOutputType = {
    id: number
    channel_id: number
    role_id: number
    user_id: number
    allow_permissions: number
    deny_permissions: number
    _all: number
  }


  export type ChannelPermissionsAvgAggregateInputType = {
    allow_permissions?: true
    deny_permissions?: true
  }

  export type ChannelPermissionsSumAggregateInputType = {
    allow_permissions?: true
    deny_permissions?: true
  }

  export type ChannelPermissionsMinAggregateInputType = {
    id?: true
    channel_id?: true
    role_id?: true
    user_id?: true
    allow_permissions?: true
    deny_permissions?: true
  }

  export type ChannelPermissionsMaxAggregateInputType = {
    id?: true
    channel_id?: true
    role_id?: true
    user_id?: true
    allow_permissions?: true
    deny_permissions?: true
  }

  export type ChannelPermissionsCountAggregateInputType = {
    id?: true
    channel_id?: true
    role_id?: true
    user_id?: true
    allow_permissions?: true
    deny_permissions?: true
    _all?: true
  }

  export type ChannelPermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelPermissions to aggregate.
     */
    where?: ChannelPermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelPermissions to fetch.
     */
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelPermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelPermissions
    **/
    _count?: true | ChannelPermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelPermissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelPermissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelPermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelPermissionsMaxAggregateInputType
  }

  export type GetChannelPermissionsAggregateType<T extends ChannelPermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelPermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelPermissions[P]>
      : GetScalarType<T[P], AggregateChannelPermissions[P]>
  }




  export type ChannelPermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelPermissionsWhereInput
    orderBy?: ChannelPermissionsOrderByWithAggregationInput | ChannelPermissionsOrderByWithAggregationInput[]
    by: ChannelPermissionsScalarFieldEnum[] | ChannelPermissionsScalarFieldEnum
    having?: ChannelPermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelPermissionsCountAggregateInputType | true
    _avg?: ChannelPermissionsAvgAggregateInputType
    _sum?: ChannelPermissionsSumAggregateInputType
    _min?: ChannelPermissionsMinAggregateInputType
    _max?: ChannelPermissionsMaxAggregateInputType
  }

  export type ChannelPermissionsGroupByOutputType = {
    id: string
    channel_id: string
    role_id: string
    user_id: string
    allow_permissions: bigint
    deny_permissions: bigint
    _count: ChannelPermissionsCountAggregateOutputType | null
    _avg: ChannelPermissionsAvgAggregateOutputType | null
    _sum: ChannelPermissionsSumAggregateOutputType | null
    _min: ChannelPermissionsMinAggregateOutputType | null
    _max: ChannelPermissionsMaxAggregateOutputType | null
  }

  type GetChannelPermissionsGroupByPayload<T extends ChannelPermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelPermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelPermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelPermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelPermissionsGroupByOutputType[P]>
        }
      >
    >


  export type ChannelPermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    role_id?: boolean
    user_id?: boolean
    allow_permissions?: boolean
    deny_permissions?: boolean
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelPermissions"]>

  export type ChannelPermissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    role_id?: boolean
    user_id?: boolean
    allow_permissions?: boolean
    deny_permissions?: boolean
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelPermissions"]>

  export type ChannelPermissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    role_id?: boolean
    user_id?: boolean
    allow_permissions?: boolean
    deny_permissions?: boolean
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelPermissions"]>

  export type ChannelPermissionsSelectScalar = {
    id?: boolean
    channel_id?: boolean
    role_id?: boolean
    user_id?: boolean
    allow_permissions?: boolean
    deny_permissions?: boolean
  }

  export type ChannelPermissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channel_id" | "role_id" | "user_id" | "allow_permissions" | "deny_permissions", ExtArgs["result"]["channelPermissions"]>
  export type ChannelPermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ChannelPermissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ChannelPermissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ChannelPermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelPermissions"
    objects: {
      channel: Prisma.$ChannelsPayload<ExtArgs>
      role: Prisma.$RolesPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channel_id: string
      role_id: string
      user_id: string
      allow_permissions: bigint
      deny_permissions: bigint
    }, ExtArgs["result"]["channelPermissions"]>
    composites: {}
  }

  type ChannelPermissionsGetPayload<S extends boolean | null | undefined | ChannelPermissionsDefaultArgs> = $Result.GetResult<Prisma.$ChannelPermissionsPayload, S>

  type ChannelPermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelPermissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelPermissionsCountAggregateInputType | true
    }

  export interface ChannelPermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelPermissions'], meta: { name: 'ChannelPermissions' } }
    /**
     * Find zero or one ChannelPermissions that matches the filter.
     * @param {ChannelPermissionsFindUniqueArgs} args - Arguments to find a ChannelPermissions
     * @example
     * // Get one ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelPermissionsFindUniqueArgs>(args: SelectSubset<T, ChannelPermissionsFindUniqueArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelPermissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelPermissionsFindUniqueOrThrowArgs} args - Arguments to find a ChannelPermissions
     * @example
     * // Get one ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelPermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelPermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsFindFirstArgs} args - Arguments to find a ChannelPermissions
     * @example
     * // Get one ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelPermissionsFindFirstArgs>(args?: SelectSubset<T, ChannelPermissionsFindFirstArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelPermissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsFindFirstOrThrowArgs} args - Arguments to find a ChannelPermissions
     * @example
     * // Get one ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelPermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelPermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.findMany()
     * 
     * // Get first 10 ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelPermissionsWithIdOnly = await prisma.channelPermissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelPermissionsFindManyArgs>(args?: SelectSubset<T, ChannelPermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelPermissions.
     * @param {ChannelPermissionsCreateArgs} args - Arguments to create a ChannelPermissions.
     * @example
     * // Create one ChannelPermissions
     * const ChannelPermissions = await prisma.channelPermissions.create({
     *   data: {
     *     // ... data to create a ChannelPermissions
     *   }
     * })
     * 
     */
    create<T extends ChannelPermissionsCreateArgs>(args: SelectSubset<T, ChannelPermissionsCreateArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelPermissions.
     * @param {ChannelPermissionsCreateManyArgs} args - Arguments to create many ChannelPermissions.
     * @example
     * // Create many ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelPermissionsCreateManyArgs>(args?: SelectSubset<T, ChannelPermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelPermissions and returns the data saved in the database.
     * @param {ChannelPermissionsCreateManyAndReturnArgs} args - Arguments to create many ChannelPermissions.
     * @example
     * // Create many ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelPermissions and only return the `id`
     * const channelPermissionsWithIdOnly = await prisma.channelPermissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelPermissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelPermissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelPermissions.
     * @param {ChannelPermissionsDeleteArgs} args - Arguments to delete one ChannelPermissions.
     * @example
     * // Delete one ChannelPermissions
     * const ChannelPermissions = await prisma.channelPermissions.delete({
     *   where: {
     *     // ... filter to delete one ChannelPermissions
     *   }
     * })
     * 
     */
    delete<T extends ChannelPermissionsDeleteArgs>(args: SelectSubset<T, ChannelPermissionsDeleteArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelPermissions.
     * @param {ChannelPermissionsUpdateArgs} args - Arguments to update one ChannelPermissions.
     * @example
     * // Update one ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelPermissionsUpdateArgs>(args: SelectSubset<T, ChannelPermissionsUpdateArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelPermissions.
     * @param {ChannelPermissionsDeleteManyArgs} args - Arguments to filter ChannelPermissions to delete.
     * @example
     * // Delete a few ChannelPermissions
     * const { count } = await prisma.channelPermissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelPermissionsDeleteManyArgs>(args?: SelectSubset<T, ChannelPermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelPermissionsUpdateManyArgs>(args: SelectSubset<T, ChannelPermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelPermissions and returns the data updated in the database.
     * @param {ChannelPermissionsUpdateManyAndReturnArgs} args - Arguments to update many ChannelPermissions.
     * @example
     * // Update many ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelPermissions and only return the `id`
     * const channelPermissionsWithIdOnly = await prisma.channelPermissions.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChannelPermissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelPermissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelPermissions.
     * @param {ChannelPermissionsUpsertArgs} args - Arguments to update or create a ChannelPermissions.
     * @example
     * // Update or create a ChannelPermissions
     * const channelPermissions = await prisma.channelPermissions.upsert({
     *   create: {
     *     // ... data to create a ChannelPermissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelPermissions we want to update
     *   }
     * })
     */
    upsert<T extends ChannelPermissionsUpsertArgs>(args: SelectSubset<T, ChannelPermissionsUpsertArgs<ExtArgs>>): Prisma__ChannelPermissionsClient<$Result.GetResult<Prisma.$ChannelPermissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsCountArgs} args - Arguments to filter ChannelPermissions to count.
     * @example
     * // Count the number of ChannelPermissions
     * const count = await prisma.channelPermissions.count({
     *   where: {
     *     // ... the filter for the ChannelPermissions we want to count
     *   }
     * })
    **/
    count<T extends ChannelPermissionsCountArgs>(
      args?: Subset<T, ChannelPermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelPermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelPermissionsAggregateArgs>(args: Subset<T, ChannelPermissionsAggregateArgs>): Prisma.PrismaPromise<GetChannelPermissionsAggregateType<T>>

    /**
     * Group by ChannelPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelPermissionsGroupByArgs} args - Group by arguments.
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
      T extends ChannelPermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelPermissionsGroupByArgs['orderBy'] }
        : { orderBy?: ChannelPermissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelPermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelPermissions model
   */
  readonly fields: ChannelPermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelPermissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelPermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelsDefaultArgs<ExtArgs>>): Prisma__ChannelsClient<$Result.GetResult<Prisma.$ChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChannelPermissions model
   */
  interface ChannelPermissionsFieldRefs {
    readonly id: FieldRef<"ChannelPermissions", 'String'>
    readonly channel_id: FieldRef<"ChannelPermissions", 'String'>
    readonly role_id: FieldRef<"ChannelPermissions", 'String'>
    readonly user_id: FieldRef<"ChannelPermissions", 'String'>
    readonly allow_permissions: FieldRef<"ChannelPermissions", 'BigInt'>
    readonly deny_permissions: FieldRef<"ChannelPermissions", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ChannelPermissions findUnique
   */
  export type ChannelPermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelPermissions to fetch.
     */
    where: ChannelPermissionsWhereUniqueInput
  }

  /**
   * ChannelPermissions findUniqueOrThrow
   */
  export type ChannelPermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelPermissions to fetch.
     */
    where: ChannelPermissionsWhereUniqueInput
  }

  /**
   * ChannelPermissions findFirst
   */
  export type ChannelPermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelPermissions to fetch.
     */
    where?: ChannelPermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelPermissions to fetch.
     */
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelPermissions.
     */
    cursor?: ChannelPermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelPermissions.
     */
    distinct?: ChannelPermissionsScalarFieldEnum | ChannelPermissionsScalarFieldEnum[]
  }

  /**
   * ChannelPermissions findFirstOrThrow
   */
  export type ChannelPermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelPermissions to fetch.
     */
    where?: ChannelPermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelPermissions to fetch.
     */
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelPermissions.
     */
    cursor?: ChannelPermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelPermissions.
     */
    distinct?: ChannelPermissionsScalarFieldEnum | ChannelPermissionsScalarFieldEnum[]
  }

  /**
   * ChannelPermissions findMany
   */
  export type ChannelPermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelPermissions to fetch.
     */
    where?: ChannelPermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelPermissions to fetch.
     */
    orderBy?: ChannelPermissionsOrderByWithRelationInput | ChannelPermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelPermissions.
     */
    cursor?: ChannelPermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelPermissions.
     */
    skip?: number
    distinct?: ChannelPermissionsScalarFieldEnum | ChannelPermissionsScalarFieldEnum[]
  }

  /**
   * ChannelPermissions create
   */
  export type ChannelPermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelPermissions.
     */
    data: XOR<ChannelPermissionsCreateInput, ChannelPermissionsUncheckedCreateInput>
  }

  /**
   * ChannelPermissions createMany
   */
  export type ChannelPermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelPermissions.
     */
    data: ChannelPermissionsCreateManyInput | ChannelPermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChannelPermissions createManyAndReturn
   */
  export type ChannelPermissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelPermissions.
     */
    data: ChannelPermissionsCreateManyInput | ChannelPermissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelPermissions update
   */
  export type ChannelPermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelPermissions.
     */
    data: XOR<ChannelPermissionsUpdateInput, ChannelPermissionsUncheckedUpdateInput>
    /**
     * Choose, which ChannelPermissions to update.
     */
    where: ChannelPermissionsWhereUniqueInput
  }

  /**
   * ChannelPermissions updateMany
   */
  export type ChannelPermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelPermissions.
     */
    data: XOR<ChannelPermissionsUpdateManyMutationInput, ChannelPermissionsUncheckedUpdateManyInput>
    /**
     * Filter which ChannelPermissions to update
     */
    where?: ChannelPermissionsWhereInput
    /**
     * Limit how many ChannelPermissions to update.
     */
    limit?: number
  }

  /**
   * ChannelPermissions updateManyAndReturn
   */
  export type ChannelPermissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * The data used to update ChannelPermissions.
     */
    data: XOR<ChannelPermissionsUpdateManyMutationInput, ChannelPermissionsUncheckedUpdateManyInput>
    /**
     * Filter which ChannelPermissions to update
     */
    where?: ChannelPermissionsWhereInput
    /**
     * Limit how many ChannelPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelPermissions upsert
   */
  export type ChannelPermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelPermissions to update in case it exists.
     */
    where: ChannelPermissionsWhereUniqueInput
    /**
     * In case the ChannelPermissions found by the `where` argument doesn't exist, create a new ChannelPermissions with this data.
     */
    create: XOR<ChannelPermissionsCreateInput, ChannelPermissionsUncheckedCreateInput>
    /**
     * In case the ChannelPermissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelPermissionsUpdateInput, ChannelPermissionsUncheckedUpdateInput>
  }

  /**
   * ChannelPermissions delete
   */
  export type ChannelPermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
    /**
     * Filter which ChannelPermissions to delete.
     */
    where: ChannelPermissionsWhereUniqueInput
  }

  /**
   * ChannelPermissions deleteMany
   */
  export type ChannelPermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelPermissions to delete
     */
    where?: ChannelPermissionsWhereInput
    /**
     * Limit how many ChannelPermissions to delete.
     */
    limit?: number
  }

  /**
   * ChannelPermissions without action
   */
  export type ChannelPermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelPermissions
     */
    select?: ChannelPermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelPermissions
     */
    omit?: ChannelPermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelPermissionsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerification: 'emailVerification',
    image: 'image',
    username: 'username',
    display_name: 'display_name',
    avatar_url: 'avatar_url',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerType: 'providerType',
    providerId: 'providerId',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    accessTokenExpires: 'accessTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationRequestScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationRequestScalarFieldEnum = (typeof VerificationRequestScalarFieldEnum)[keyof typeof VerificationRequestScalarFieldEnum]


  export const ServersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon_url: 'icon_url',
    banner_url: 'banner_url',
    owner_id: 'owner_id',
    invite_code: 'invite_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServersScalarFieldEnum = (typeof ServersScalarFieldEnum)[keyof typeof ServersScalarFieldEnum]


  export const ServerMembersScalarFieldEnum: {
    id: 'id',
    server_id: 'server_id',
    user_id: 'user_id',
    nickname: 'nickname',
    joined_at: 'joined_at',
    roles: 'roles'
  };

  export type ServerMembersScalarFieldEnum = (typeof ServerMembersScalarFieldEnum)[keyof typeof ServerMembersScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    server_id: 'server_id',
    name: 'name',
    position: 'position',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ChannelsScalarFieldEnum: {
    id: 'id',
    server_id: 'server_id',
    name: 'name',
    type: 'type',
    topic: 'topic',
    position: 'position',
    category_id: 'category_id',
    is_nsfw: 'is_nsfw',
    created_at: 'created_at'
  };

  export type ChannelsScalarFieldEnum = (typeof ChannelsScalarFieldEnum)[keyof typeof ChannelsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    channel_id: 'channel_id',
    author_id: 'author_id',
    content: 'content',
    message_type: 'message_type',
    reply_to_id: 'reply_to_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const MessageAttachmentsScalarFieldEnum: {
    id: 'id',
    messages_id: 'messages_id',
    filename: 'filename',
    file_url: 'file_url',
    file_size: 'file_size'
  };

  export type MessageAttachmentsScalarFieldEnum = (typeof MessageAttachmentsScalarFieldEnum)[keyof typeof MessageAttachmentsScalarFieldEnum]


  export const MessageReactionsScalarFieldEnum: {
    id: 'id',
    message_id: 'message_id',
    user_id: 'user_id',
    emoji: 'emoji',
    created_at: 'created_at'
  };

  export type MessageReactionsScalarFieldEnum = (typeof MessageReactionsScalarFieldEnum)[keyof typeof MessageReactionsScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    server_id: 'server_id',
    name: 'name',
    color: 'color',
    permissions: 'permissions',
    position: 'position',
    is_mentionable: 'is_mentionable',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const ChannelPermissionsScalarFieldEnum: {
    id: 'id',
    channel_id: 'channel_id',
    role_id: 'role_id',
    user_id: 'user_id',
    allow_permissions: 'allow_permissions',
    deny_permissions: 'deny_permissions'
  };

  export type ChannelPermissionsScalarFieldEnum = (typeof ChannelPermissionsScalarFieldEnum)[keyof typeof ChannelPermissionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ChannelType'
   */
  export type EnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType'>
    


  /**
   * Reference to a field of type 'ChannelType[]'
   */
  export type ListEnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Messagetype'
   */
  export type EnumMessagetypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Messagetype'>
    


  /**
   * Reference to a field of type 'Messagetype[]'
   */
  export type ListEnumMessagetypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Messagetype[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    emailVerification?: DateTimeNullableFilter<"Users"> | Date | string | null
    image?: StringNullableFilter<"Users"> | string | null
    username?: StringFilter<"Users"> | string
    display_name?: StringFilter<"Users"> | string
    avatar_url?: StringNullableFilter<"Users"> | string | null
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    owned_servers?: ServersListRelationFilter
    server_members?: ServerMembersListRelationFilter
    messages_reactions?: MessageReactionsListRelationFilter
    channel_permissions?: ChannelPermissionsListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerification?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owned_servers?: ServersOrderByRelationAggregateInput
    server_members?: ServerMembersOrderByRelationAggregateInput
    messages_reactions?: MessageReactionsOrderByRelationAggregateInput
    channel_permissions?: ChannelPermissionsOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    emailVerification?: DateTimeNullableFilter<"Users"> | Date | string | null
    image?: StringNullableFilter<"Users"> | string | null
    display_name?: StringFilter<"Users"> | string
    avatar_url?: StringNullableFilter<"Users"> | string | null
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    owned_servers?: ServersListRelationFilter
    server_members?: ServerMembersListRelationFilter
    messages_reactions?: MessageReactionsListRelationFilter
    channel_permissions?: ChannelPermissionsListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerification?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    emailVerification?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    username?: StringWithAggregatesFilter<"Users"> | string
    display_name?: StringWithAggregatesFilter<"Users"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"Users"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"Users"> | $Enums.UserStatus
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_providerAccountId?: AccountProviderIdProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "providerId_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    providerType?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    accessToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "sessionToken" | "accessToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationRequestWhereInput = {
    AND?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    OR?: VerificationRequestWhereInput[]
    NOT?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    id?: StringFilter<"VerificationRequest"> | string
    identifier?: StringFilter<"VerificationRequest"> | string
    token?: StringFilter<"VerificationRequest"> | string
    expires?: DateTimeFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationRequest"> | Date | string
  }

  export type VerificationRequestOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationRequestIdentifierTokenCompoundUniqueInput
    AND?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    OR?: VerificationRequestWhereInput[]
    NOT?: VerificationRequestWhereInput | VerificationRequestWhereInput[]
    identifier?: StringFilter<"VerificationRequest"> | string
    expires?: DateTimeFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationRequest"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationRequestCountOrderByAggregateInput
    _max?: VerificationRequestMaxOrderByAggregateInput
    _min?: VerificationRequestMinOrderByAggregateInput
  }

  export type VerificationRequestScalarWhereWithAggregatesInput = {
    AND?: VerificationRequestScalarWhereWithAggregatesInput | VerificationRequestScalarWhereWithAggregatesInput[]
    OR?: VerificationRequestScalarWhereWithAggregatesInput[]
    NOT?: VerificationRequestScalarWhereWithAggregatesInput | VerificationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationRequest"> | string
    identifier?: StringWithAggregatesFilter<"VerificationRequest"> | string
    token?: StringWithAggregatesFilter<"VerificationRequest"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationRequest"> | Date | string
  }

  export type ServersWhereInput = {
    AND?: ServersWhereInput | ServersWhereInput[]
    OR?: ServersWhereInput[]
    NOT?: ServersWhereInput | ServersWhereInput[]
    id?: StringFilter<"Servers"> | string
    name?: StringFilter<"Servers"> | string
    description?: StringNullableFilter<"Servers"> | string | null
    icon_url?: StringNullableFilter<"Servers"> | string | null
    banner_url?: StringNullableFilter<"Servers"> | string | null
    owner_id?: StringFilter<"Servers"> | string
    invite_code?: StringFilter<"Servers"> | string
    created_at?: DateTimeFilter<"Servers"> | Date | string
    updated_at?: DateTimeFilter<"Servers"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    members?: ServerMembersListRelationFilter
    channels?: ChannelsListRelationFilter
    categories?: CategoriesListRelationFilter
    roles?: RolesListRelationFilter
  }

  export type ServersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon_url?: SortOrderInput | SortOrder
    banner_url?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: UsersOrderByWithRelationInput
    members?: ServerMembersOrderByRelationAggregateInput
    channels?: ChannelsOrderByRelationAggregateInput
    categories?: CategoriesOrderByRelationAggregateInput
    roles?: RolesOrderByRelationAggregateInput
  }

  export type ServersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invite_code?: string
    AND?: ServersWhereInput | ServersWhereInput[]
    OR?: ServersWhereInput[]
    NOT?: ServersWhereInput | ServersWhereInput[]
    name?: StringFilter<"Servers"> | string
    description?: StringNullableFilter<"Servers"> | string | null
    icon_url?: StringNullableFilter<"Servers"> | string | null
    banner_url?: StringNullableFilter<"Servers"> | string | null
    owner_id?: StringFilter<"Servers"> | string
    created_at?: DateTimeFilter<"Servers"> | Date | string
    updated_at?: DateTimeFilter<"Servers"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    members?: ServerMembersListRelationFilter
    channels?: ChannelsListRelationFilter
    categories?: CategoriesListRelationFilter
    roles?: RolesListRelationFilter
  }, "id" | "invite_code">

  export type ServersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon_url?: SortOrderInput | SortOrder
    banner_url?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ServersCountOrderByAggregateInput
    _max?: ServersMaxOrderByAggregateInput
    _min?: ServersMinOrderByAggregateInput
  }

  export type ServersScalarWhereWithAggregatesInput = {
    AND?: ServersScalarWhereWithAggregatesInput | ServersScalarWhereWithAggregatesInput[]
    OR?: ServersScalarWhereWithAggregatesInput[]
    NOT?: ServersScalarWhereWithAggregatesInput | ServersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servers"> | string
    name?: StringWithAggregatesFilter<"Servers"> | string
    description?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    icon_url?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    banner_url?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    owner_id?: StringWithAggregatesFilter<"Servers"> | string
    invite_code?: StringWithAggregatesFilter<"Servers"> | string
    created_at?: DateTimeWithAggregatesFilter<"Servers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Servers"> | Date | string
  }

  export type ServerMembersWhereInput = {
    AND?: ServerMembersWhereInput | ServerMembersWhereInput[]
    OR?: ServerMembersWhereInput[]
    NOT?: ServerMembersWhereInput | ServerMembersWhereInput[]
    id?: StringFilter<"ServerMembers"> | string
    server_id?: StringFilter<"ServerMembers"> | string
    user_id?: StringFilter<"ServerMembers"> | string
    nickname?: StringNullableFilter<"ServerMembers"> | string | null
    joined_at?: DateTimeFilter<"ServerMembers"> | Date | string
    roles?: JsonNullableFilter<"ServerMembers">
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ServerMembersOrderByWithRelationInput = {
    id?: SortOrder
    server_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    roles?: SortOrderInput | SortOrder
    server?: ServersOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type ServerMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    server_id_user_id?: ServerMembersServer_idUser_idCompoundUniqueInput
    AND?: ServerMembersWhereInput | ServerMembersWhereInput[]
    OR?: ServerMembersWhereInput[]
    NOT?: ServerMembersWhereInput | ServerMembersWhereInput[]
    server_id?: StringFilter<"ServerMembers"> | string
    user_id?: StringFilter<"ServerMembers"> | string
    nickname?: StringNullableFilter<"ServerMembers"> | string | null
    joined_at?: DateTimeFilter<"ServerMembers"> | Date | string
    roles?: JsonNullableFilter<"ServerMembers">
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "server_id_user_id">

  export type ServerMembersOrderByWithAggregationInput = {
    id?: SortOrder
    server_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    roles?: SortOrderInput | SortOrder
    _count?: ServerMembersCountOrderByAggregateInput
    _max?: ServerMembersMaxOrderByAggregateInput
    _min?: ServerMembersMinOrderByAggregateInput
  }

  export type ServerMembersScalarWhereWithAggregatesInput = {
    AND?: ServerMembersScalarWhereWithAggregatesInput | ServerMembersScalarWhereWithAggregatesInput[]
    OR?: ServerMembersScalarWhereWithAggregatesInput[]
    NOT?: ServerMembersScalarWhereWithAggregatesInput | ServerMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServerMembers"> | string
    server_id?: StringWithAggregatesFilter<"ServerMembers"> | string
    user_id?: StringWithAggregatesFilter<"ServerMembers"> | string
    nickname?: StringNullableWithAggregatesFilter<"ServerMembers"> | string | null
    joined_at?: DateTimeWithAggregatesFilter<"ServerMembers"> | Date | string
    roles?: JsonNullableWithAggregatesFilter<"ServerMembers">
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    server_id?: StringFilter<"Categories"> | string
    name?: StringFilter<"Categories"> | string
    position?: IntFilter<"Categories"> | number
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    channels?: ChannelsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    server?: ServersOrderByWithRelationInput
    channels?: ChannelsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    server_id?: StringFilter<"Categories"> | string
    name?: StringFilter<"Categories"> | string
    position?: IntFilter<"Categories"> | number
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    channels?: ChannelsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    server_id?: StringWithAggregatesFilter<"Categories"> | string
    name?: StringWithAggregatesFilter<"Categories"> | string
    position?: IntWithAggregatesFilter<"Categories"> | number
    created_at?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type ChannelsWhereInput = {
    AND?: ChannelsWhereInput | ChannelsWhereInput[]
    OR?: ChannelsWhereInput[]
    NOT?: ChannelsWhereInput | ChannelsWhereInput[]
    id?: StringFilter<"Channels"> | string
    server_id?: StringFilter<"Channels"> | string
    name?: StringFilter<"Channels"> | string
    type?: EnumChannelTypeFilter<"Channels"> | $Enums.ChannelType
    topic?: StringNullableFilter<"Channels"> | string | null
    position?: IntFilter<"Channels"> | number
    category_id?: StringNullableFilter<"Channels"> | string | null
    is_nsfw?: BoolFilter<"Channels"> | boolean
    created_at?: DateTimeFilter<"Channels"> | Date | string
    channel_permissions?: ChannelPermissionsListRelationFilter
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    category?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
  }

  export type ChannelsOrderByWithRelationInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrderInput | SortOrder
    position?: SortOrder
    category_id?: SortOrderInput | SortOrder
    is_nsfw?: SortOrder
    created_at?: SortOrder
    channel_permissions?: ChannelPermissionsOrderByRelationAggregateInput
    server?: ServersOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
  }

  export type ChannelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelsWhereInput | ChannelsWhereInput[]
    OR?: ChannelsWhereInput[]
    NOT?: ChannelsWhereInput | ChannelsWhereInput[]
    server_id?: StringFilter<"Channels"> | string
    name?: StringFilter<"Channels"> | string
    type?: EnumChannelTypeFilter<"Channels"> | $Enums.ChannelType
    topic?: StringNullableFilter<"Channels"> | string | null
    position?: IntFilter<"Channels"> | number
    category_id?: StringNullableFilter<"Channels"> | string | null
    is_nsfw?: BoolFilter<"Channels"> | boolean
    created_at?: DateTimeFilter<"Channels"> | Date | string
    channel_permissions?: ChannelPermissionsListRelationFilter
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    category?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
  }, "id">

  export type ChannelsOrderByWithAggregationInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrderInput | SortOrder
    position?: SortOrder
    category_id?: SortOrderInput | SortOrder
    is_nsfw?: SortOrder
    created_at?: SortOrder
    _count?: ChannelsCountOrderByAggregateInput
    _avg?: ChannelsAvgOrderByAggregateInput
    _max?: ChannelsMaxOrderByAggregateInput
    _min?: ChannelsMinOrderByAggregateInput
    _sum?: ChannelsSumOrderByAggregateInput
  }

  export type ChannelsScalarWhereWithAggregatesInput = {
    AND?: ChannelsScalarWhereWithAggregatesInput | ChannelsScalarWhereWithAggregatesInput[]
    OR?: ChannelsScalarWhereWithAggregatesInput[]
    NOT?: ChannelsScalarWhereWithAggregatesInput | ChannelsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channels"> | string
    server_id?: StringWithAggregatesFilter<"Channels"> | string
    name?: StringWithAggregatesFilter<"Channels"> | string
    type?: EnumChannelTypeWithAggregatesFilter<"Channels"> | $Enums.ChannelType
    topic?: StringNullableWithAggregatesFilter<"Channels"> | string | null
    position?: IntWithAggregatesFilter<"Channels"> | number
    category_id?: StringNullableWithAggregatesFilter<"Channels"> | string | null
    is_nsfw?: BoolWithAggregatesFilter<"Channels"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Channels"> | Date | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    channel_id?: StringFilter<"Messages"> | string
    author_id?: StringFilter<"Messages"> | string
    content?: StringFilter<"Messages"> | string
    message_type?: EnumMessagetypeFilter<"Messages"> | $Enums.Messagetype
    reply_to_id?: StringNullableFilter<"Messages"> | string | null
    created_at?: DateTimeFilter<"Messages"> | Date | string
    updated_at?: DateTimeFilter<"Messages"> | Date | string
    reply_to?: XOR<MessagesNullableScalarRelationFilter, MessagesWhereInput> | null
    replies?: MessagesListRelationFilter
    attatachments?: MessageAttachmentsListRelationFilter
    message_rections?: MessageReactionsListRelationFilter
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    channel_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    message_type?: SortOrder
    reply_to_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reply_to?: MessagesOrderByWithRelationInput
    replies?: MessagesOrderByRelationAggregateInput
    attatachments?: MessageAttachmentsOrderByRelationAggregateInput
    message_rections?: MessageReactionsOrderByRelationAggregateInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    channel_id?: StringFilter<"Messages"> | string
    author_id?: StringFilter<"Messages"> | string
    content?: StringFilter<"Messages"> | string
    message_type?: EnumMessagetypeFilter<"Messages"> | $Enums.Messagetype
    reply_to_id?: StringNullableFilter<"Messages"> | string | null
    created_at?: DateTimeFilter<"Messages"> | Date | string
    updated_at?: DateTimeFilter<"Messages"> | Date | string
    reply_to?: XOR<MessagesNullableScalarRelationFilter, MessagesWhereInput> | null
    replies?: MessagesListRelationFilter
    attatachments?: MessageAttachmentsListRelationFilter
    message_rections?: MessageReactionsListRelationFilter
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    channel_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    message_type?: SortOrder
    reply_to_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    channel_id?: StringWithAggregatesFilter<"Messages"> | string
    author_id?: StringWithAggregatesFilter<"Messages"> | string
    content?: StringWithAggregatesFilter<"Messages"> | string
    message_type?: EnumMessagetypeWithAggregatesFilter<"Messages"> | $Enums.Messagetype
    reply_to_id?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
  }

  export type MessageAttachmentsWhereInput = {
    AND?: MessageAttachmentsWhereInput | MessageAttachmentsWhereInput[]
    OR?: MessageAttachmentsWhereInput[]
    NOT?: MessageAttachmentsWhereInput | MessageAttachmentsWhereInput[]
    id?: StringFilter<"MessageAttachments"> | string
    messages_id?: StringFilter<"MessageAttachments"> | string
    filename?: StringFilter<"MessageAttachments"> | string
    file_url?: StringFilter<"MessageAttachments"> | string
    file_size?: IntFilter<"MessageAttachments"> | number
    message?: XOR<MessagesNullableScalarRelationFilter, MessagesWhereInput> | null
  }

  export type MessageAttachmentsOrderByWithRelationInput = {
    id?: SortOrder
    messages_id?: SortOrder
    filename?: SortOrder
    file_url?: SortOrder
    file_size?: SortOrder
    message?: MessagesOrderByWithRelationInput
  }

  export type MessageAttachmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageAttachmentsWhereInput | MessageAttachmentsWhereInput[]
    OR?: MessageAttachmentsWhereInput[]
    NOT?: MessageAttachmentsWhereInput | MessageAttachmentsWhereInput[]
    messages_id?: StringFilter<"MessageAttachments"> | string
    filename?: StringFilter<"MessageAttachments"> | string
    file_url?: StringFilter<"MessageAttachments"> | string
    file_size?: IntFilter<"MessageAttachments"> | number
    message?: XOR<MessagesNullableScalarRelationFilter, MessagesWhereInput> | null
  }, "id">

  export type MessageAttachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    messages_id?: SortOrder
    filename?: SortOrder
    file_url?: SortOrder
    file_size?: SortOrder
    _count?: MessageAttachmentsCountOrderByAggregateInput
    _avg?: MessageAttachmentsAvgOrderByAggregateInput
    _max?: MessageAttachmentsMaxOrderByAggregateInput
    _min?: MessageAttachmentsMinOrderByAggregateInput
    _sum?: MessageAttachmentsSumOrderByAggregateInput
  }

  export type MessageAttachmentsScalarWhereWithAggregatesInput = {
    AND?: MessageAttachmentsScalarWhereWithAggregatesInput | MessageAttachmentsScalarWhereWithAggregatesInput[]
    OR?: MessageAttachmentsScalarWhereWithAggregatesInput[]
    NOT?: MessageAttachmentsScalarWhereWithAggregatesInput | MessageAttachmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageAttachments"> | string
    messages_id?: StringWithAggregatesFilter<"MessageAttachments"> | string
    filename?: StringWithAggregatesFilter<"MessageAttachments"> | string
    file_url?: StringWithAggregatesFilter<"MessageAttachments"> | string
    file_size?: IntWithAggregatesFilter<"MessageAttachments"> | number
  }

  export type MessageReactionsWhereInput = {
    AND?: MessageReactionsWhereInput | MessageReactionsWhereInput[]
    OR?: MessageReactionsWhereInput[]
    NOT?: MessageReactionsWhereInput | MessageReactionsWhereInput[]
    id?: StringFilter<"MessageReactions"> | string
    message_id?: StringNullableFilter<"MessageReactions"> | string | null
    user_id?: StringFilter<"MessageReactions"> | string
    emoji?: StringFilter<"MessageReactions"> | string
    created_at?: DateTimeFilter<"MessageReactions"> | Date | string
    message?: XOR<MessagesNullableScalarRelationFilter, MessagesWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MessageReactionsOrderByWithRelationInput = {
    id?: SortOrder
    message_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    message?: MessagesOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
  }

  export type MessageReactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageReactionsWhereInput | MessageReactionsWhereInput[]
    OR?: MessageReactionsWhereInput[]
    NOT?: MessageReactionsWhereInput | MessageReactionsWhereInput[]
    message_id?: StringNullableFilter<"MessageReactions"> | string | null
    user_id?: StringFilter<"MessageReactions"> | string
    emoji?: StringFilter<"MessageReactions"> | string
    created_at?: DateTimeFilter<"MessageReactions"> | Date | string
    message?: XOR<MessagesNullableScalarRelationFilter, MessagesWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type MessageReactionsOrderByWithAggregationInput = {
    id?: SortOrder
    message_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
    _count?: MessageReactionsCountOrderByAggregateInput
    _max?: MessageReactionsMaxOrderByAggregateInput
    _min?: MessageReactionsMinOrderByAggregateInput
  }

  export type MessageReactionsScalarWhereWithAggregatesInput = {
    AND?: MessageReactionsScalarWhereWithAggregatesInput | MessageReactionsScalarWhereWithAggregatesInput[]
    OR?: MessageReactionsScalarWhereWithAggregatesInput[]
    NOT?: MessageReactionsScalarWhereWithAggregatesInput | MessageReactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageReactions"> | string
    message_id?: StringNullableWithAggregatesFilter<"MessageReactions"> | string | null
    user_id?: StringWithAggregatesFilter<"MessageReactions"> | string
    emoji?: StringWithAggregatesFilter<"MessageReactions"> | string
    created_at?: DateTimeWithAggregatesFilter<"MessageReactions"> | Date | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: StringFilter<"Roles"> | string
    server_id?: StringFilter<"Roles"> | string
    name?: StringFilter<"Roles"> | string
    color?: StringNullableFilter<"Roles"> | string | null
    permissions?: BigIntFilter<"Roles"> | bigint | number
    position?: IntFilter<"Roles"> | number
    is_mentionable?: BoolFilter<"Roles"> | boolean
    created_at?: DateTimeFilter<"Roles"> | Date | string
    updated_at?: DateTimeFilter<"Roles"> | Date | string
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    channel_permissions?: ChannelPermissionsListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    permissions?: SortOrder
    position?: SortOrder
    is_mentionable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    server?: ServersOrderByWithRelationInput
    channel_permissions?: ChannelPermissionsOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    server_id?: StringFilter<"Roles"> | string
    name?: StringFilter<"Roles"> | string
    color?: StringNullableFilter<"Roles"> | string | null
    permissions?: BigIntFilter<"Roles"> | bigint | number
    position?: IntFilter<"Roles"> | number
    is_mentionable?: BoolFilter<"Roles"> | boolean
    created_at?: DateTimeFilter<"Roles"> | Date | string
    updated_at?: DateTimeFilter<"Roles"> | Date | string
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
    channel_permissions?: ChannelPermissionsListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    permissions?: SortOrder
    position?: SortOrder
    is_mentionable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roles"> | string
    server_id?: StringWithAggregatesFilter<"Roles"> | string
    name?: StringWithAggregatesFilter<"Roles"> | string
    color?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    permissions?: BigIntWithAggregatesFilter<"Roles"> | bigint | number
    position?: IntWithAggregatesFilter<"Roles"> | number
    is_mentionable?: BoolWithAggregatesFilter<"Roles"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
  }

  export type ChannelPermissionsWhereInput = {
    AND?: ChannelPermissionsWhereInput | ChannelPermissionsWhereInput[]
    OR?: ChannelPermissionsWhereInput[]
    NOT?: ChannelPermissionsWhereInput | ChannelPermissionsWhereInput[]
    id?: StringFilter<"ChannelPermissions"> | string
    channel_id?: StringFilter<"ChannelPermissions"> | string
    role_id?: StringFilter<"ChannelPermissions"> | string
    user_id?: StringFilter<"ChannelPermissions"> | string
    allow_permissions?: BigIntFilter<"ChannelPermissions"> | bigint | number
    deny_permissions?: BigIntFilter<"ChannelPermissions"> | bigint | number
    channel?: XOR<ChannelsScalarRelationFilter, ChannelsWhereInput>
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ChannelPermissionsOrderByWithRelationInput = {
    id?: SortOrder
    channel_id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
    channel?: ChannelsOrderByWithRelationInput
    role?: RolesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type ChannelPermissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelPermissionsWhereInput | ChannelPermissionsWhereInput[]
    OR?: ChannelPermissionsWhereInput[]
    NOT?: ChannelPermissionsWhereInput | ChannelPermissionsWhereInput[]
    channel_id?: StringFilter<"ChannelPermissions"> | string
    role_id?: StringFilter<"ChannelPermissions"> | string
    user_id?: StringFilter<"ChannelPermissions"> | string
    allow_permissions?: BigIntFilter<"ChannelPermissions"> | bigint | number
    deny_permissions?: BigIntFilter<"ChannelPermissions"> | bigint | number
    channel?: XOR<ChannelsScalarRelationFilter, ChannelsWhereInput>
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ChannelPermissionsOrderByWithAggregationInput = {
    id?: SortOrder
    channel_id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
    _count?: ChannelPermissionsCountOrderByAggregateInput
    _avg?: ChannelPermissionsAvgOrderByAggregateInput
    _max?: ChannelPermissionsMaxOrderByAggregateInput
    _min?: ChannelPermissionsMinOrderByAggregateInput
    _sum?: ChannelPermissionsSumOrderByAggregateInput
  }

  export type ChannelPermissionsScalarWhereWithAggregatesInput = {
    AND?: ChannelPermissionsScalarWhereWithAggregatesInput | ChannelPermissionsScalarWhereWithAggregatesInput[]
    OR?: ChannelPermissionsScalarWhereWithAggregatesInput[]
    NOT?: ChannelPermissionsScalarWhereWithAggregatesInput | ChannelPermissionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelPermissions"> | string
    channel_id?: StringWithAggregatesFilter<"ChannelPermissions"> | string
    role_id?: StringWithAggregatesFilter<"ChannelPermissions"> | string
    user_id?: StringWithAggregatesFilter<"ChannelPermissions"> | string
    allow_permissions?: BigIntWithAggregatesFilter<"ChannelPermissions"> | bigint | number
    deny_permissions?: BigIntWithAggregatesFilter<"ChannelPermissions"> | bigint | number
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersUncheckedCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersUncheckedCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsUncheckedCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUncheckedUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUncheckedUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServersCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: UsersCreateNestedOneWithoutOwned_serversInput
    members?: ServerMembersCreateNestedManyWithoutServerInput
    channels?: ChannelsCreateNestedManyWithoutServerInput
    categories?: CategoriesCreateNestedManyWithoutServerInput
    roles?: RolesCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    owner_id: string
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: ServerMembersUncheckedCreateNestedManyWithoutServerInput
    channels?: ChannelsUncheckedCreateNestedManyWithoutServerInput
    categories?: CategoriesUncheckedCreateNestedManyWithoutServerInput
    roles?: RolesUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsersUpdateOneRequiredWithoutOwned_serversNestedInput
    members?: ServerMembersUpdateManyWithoutServerNestedInput
    channels?: ChannelsUpdateManyWithoutServerNestedInput
    categories?: CategoriesUpdateManyWithoutServerNestedInput
    roles?: RolesUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ServerMembersUncheckedUpdateManyWithoutServerNestedInput
    channels?: ChannelsUncheckedUpdateManyWithoutServerNestedInput
    categories?: CategoriesUncheckedUpdateManyWithoutServerNestedInput
    roles?: RolesUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServersCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    owner_id: string
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerMembersCreateInput = {
    id?: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
    server: ServersCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutServer_membersInput
  }

  export type ServerMembersUncheckedCreateInput = {
    id?: string
    server_id: string
    user_id: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
    server?: ServersUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutServer_membersNestedInput
  }

  export type ServerMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersCreateManyInput = {
    id?: string
    server_id: string
    user_id: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CategoriesCreateInput = {
    id?: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
    server: ServersCreateNestedOneWithoutCategoriesInput
    channels?: ChannelsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string
    server_id: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServersUpdateOneRequiredWithoutCategoriesNestedInput
    channels?: ChannelsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: string
    server_id: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelsCreateInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    is_nsfw?: boolean
    created_at?: Date | string
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutChannelInput
    server: ServersCreateNestedOneWithoutChannelsInput
    category?: CategoriesCreateNestedOneWithoutChannelsInput
  }

  export type ChannelsUncheckedCreateInput = {
    id?: string
    server_id: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    category_id?: string | null
    is_nsfw?: boolean
    created_at?: Date | string
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUpdateManyWithoutChannelNestedInput
    server?: ServersUpdateOneRequiredWithoutChannelsNestedInput
    category?: CategoriesUpdateOneWithoutChannelsNestedInput
  }

  export type ChannelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsCreateManyInput = {
    id?: string
    server_id: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    category_id?: string | null
    is_nsfw?: boolean
    created_at?: Date | string
  }

  export type ChannelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
    reply_to?: MessagesCreateNestedOneWithoutRepliesInput
    replies?: MessagesCreateNestedManyWithoutReply_toInput
    attatachments?: MessageAttachmentsCreateNestedManyWithoutMessageInput
    message_rections?: MessageReactionsCreateNestedManyWithoutMessageInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    reply_to_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: MessagesUncheckedCreateNestedManyWithoutReply_toInput
    attatachments?: MessageAttachmentsUncheckedCreateNestedManyWithoutMessageInput
    message_rections?: MessageReactionsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reply_to?: MessagesUpdateOneWithoutRepliesNestedInput
    replies?: MessagesUpdateManyWithoutReply_toNestedInput
    attatachments?: MessageAttachmentsUpdateManyWithoutMessageNestedInput
    message_rections?: MessageReactionsUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    reply_to_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessagesUncheckedUpdateManyWithoutReply_toNestedInput
    attatachments?: MessageAttachmentsUncheckedUpdateManyWithoutMessageNestedInput
    message_rections?: MessageReactionsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessagesCreateManyInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    reply_to_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    reply_to_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentsCreateInput = {
    id?: string
    filename: string
    file_url: string
    file_size: number
    message?: MessagesCreateNestedOneWithoutAttatachmentsInput
  }

  export type MessageAttachmentsUncheckedCreateInput = {
    id?: string
    messages_id: string
    filename: string
    file_url: string
    file_size: number
  }

  export type MessageAttachmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
    message?: MessagesUpdateOneWithoutAttatachmentsNestedInput
  }

  export type MessageAttachmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
  }

  export type MessageAttachmentsCreateManyInput = {
    id?: string
    messages_id: string
    filename: string
    file_url: string
    file_size: number
  }

  export type MessageAttachmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
  }

  export type MessageAttachmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
  }

  export type MessageReactionsCreateInput = {
    id?: string
    emoji: string
    created_at?: Date | string
    message?: MessagesCreateNestedOneWithoutMessage_rectionsInput
    users: UsersCreateNestedOneWithoutMessages_reactionsInput
  }

  export type MessageReactionsUncheckedCreateInput = {
    id?: string
    message_id?: string | null
    user_id: string
    emoji: string
    created_at?: Date | string
  }

  export type MessageReactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessagesUpdateOneWithoutMessage_rectionsNestedInput
    users?: UsersUpdateOneRequiredWithoutMessages_reactionsNestedInput
  }

  export type MessageReactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionsCreateManyInput = {
    id?: string
    message_id?: string | null
    user_id: string
    emoji: string
    created_at?: Date | string
  }

  export type MessageReactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateInput = {
    id?: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    server: ServersCreateNestedOneWithoutRolesInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: string
    server_id: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServersUpdateOneRequiredWithoutRolesNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: string
    server_id: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelPermissionsCreateInput = {
    id?: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
    channel: ChannelsCreateNestedOneWithoutChannel_permissionsInput
    role: RolesCreateNestedOneWithoutChannel_permissionsInput
    user: UsersCreateNestedOneWithoutChannel_permissionsInput
  }

  export type ChannelPermissionsUncheckedCreateInput = {
    id?: string
    channel_id: string
    role_id: string
    user_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    channel?: ChannelsUpdateOneRequiredWithoutChannel_permissionsNestedInput
    role?: RolesUpdateOneRequiredWithoutChannel_permissionsNestedInput
    user?: UsersUpdateOneRequiredWithoutChannel_permissionsNestedInput
  }

  export type ChannelPermissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChannelPermissionsCreateManyInput = {
    id?: string
    channel_id: string
    role_id: string
    user_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChannelPermissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type ServersListRelationFilter = {
    every?: ServersWhereInput
    some?: ServersWhereInput
    none?: ServersWhereInput
  }

  export type ServerMembersListRelationFilter = {
    every?: ServerMembersWhereInput
    some?: ServerMembersWhereInput
    none?: ServerMembersWhereInput
  }

  export type MessageReactionsListRelationFilter = {
    every?: MessageReactionsWhereInput
    some?: MessageReactionsWhereInput
    none?: MessageReactionsWhereInput
  }

  export type ChannelPermissionsListRelationFilter = {
    every?: ChannelPermissionsWhereInput
    some?: ChannelPermissionsWhereInput
    none?: ChannelPermissionsWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageReactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelPermissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerification?: SortOrder
    image?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerification?: SortOrder
    image?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerification?: SortOrder
    image?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
    providerId: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelsListRelationFilter = {
    every?: ChannelsWhereInput
    some?: ChannelsWhereInput
    none?: ChannelsWhereInput
  }

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput
    some?: CategoriesWhereInput
    none?: CategoriesWhereInput
  }

  export type RolesListRelationFilter = {
    every?: RolesWhereInput
    some?: RolesWhereInput
    none?: RolesWhereInput
  }

  export type ChannelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon_url?: SortOrder
    banner_url?: SortOrder
    owner_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon_url?: SortOrder
    banner_url?: SortOrder
    owner_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon_url?: SortOrder
    banner_url?: SortOrder
    owner_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ServersScalarRelationFilter = {
    is?: ServersWhereInput
    isNot?: ServersWhereInput
  }

  export type ServerMembersServer_idUser_idCompoundUniqueInput = {
    server_id: string
    user_id: string
  }

  export type ServerMembersCountOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrder
    joined_at?: SortOrder
    roles?: SortOrder
  }

  export type ServerMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrder
    joined_at?: SortOrder
  }

  export type ServerMembersMinOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    user_id?: SortOrder
    nickname?: SortOrder
    joined_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    position?: SortOrder
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

  export type EnumChannelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeFilter<$PrismaModel> | $Enums.ChannelType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type ChannelsCountOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    position?: SortOrder
    category_id?: SortOrder
    is_nsfw?: SortOrder
    created_at?: SortOrder
  }

  export type ChannelsAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ChannelsMaxOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    position?: SortOrder
    category_id?: SortOrder
    is_nsfw?: SortOrder
    created_at?: SortOrder
  }

  export type ChannelsMinOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    position?: SortOrder
    category_id?: SortOrder
    is_nsfw?: SortOrder
    created_at?: SortOrder
  }

  export type ChannelsSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumChannelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMessagetypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Messagetype | EnumMessagetypeFieldRefInput<$PrismaModel>
    in?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessagetypeFilter<$PrismaModel> | $Enums.Messagetype
  }

  export type MessagesNullableScalarRelationFilter = {
    is?: MessagesWhereInput | null
    isNot?: MessagesWhereInput | null
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type MessageAttachmentsListRelationFilter = {
    every?: MessageAttachmentsWhereInput
    some?: MessageAttachmentsWhereInput
    none?: MessageAttachmentsWhereInput
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageAttachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    message_type?: SortOrder
    reply_to_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    message_type?: SortOrder
    reply_to_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    message_type?: SortOrder
    reply_to_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumMessagetypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Messagetype | EnumMessagetypeFieldRefInput<$PrismaModel>
    in?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessagetypeWithAggregatesFilter<$PrismaModel> | $Enums.Messagetype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessagetypeFilter<$PrismaModel>
    _max?: NestedEnumMessagetypeFilter<$PrismaModel>
  }

  export type MessageAttachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    messages_id?: SortOrder
    filename?: SortOrder
    file_url?: SortOrder
    file_size?: SortOrder
  }

  export type MessageAttachmentsAvgOrderByAggregateInput = {
    file_size?: SortOrder
  }

  export type MessageAttachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    messages_id?: SortOrder
    filename?: SortOrder
    file_url?: SortOrder
    file_size?: SortOrder
  }

  export type MessageAttachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    messages_id?: SortOrder
    filename?: SortOrder
    file_url?: SortOrder
    file_size?: SortOrder
  }

  export type MessageAttachmentsSumOrderByAggregateInput = {
    file_size?: SortOrder
  }

  export type MessageReactionsCountOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    user_id?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
  }

  export type MessageReactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    user_id?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
  }

  export type MessageReactionsMinOrderByAggregateInput = {
    id?: SortOrder
    message_id?: SortOrder
    user_id?: SortOrder
    emoji?: SortOrder
    created_at?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    permissions?: SortOrder
    position?: SortOrder
    is_mentionable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    permissions?: SortOrder
    position?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    permissions?: SortOrder
    position?: SortOrder
    is_mentionable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    server_id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    permissions?: SortOrder
    position?: SortOrder
    is_mentionable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    permissions?: SortOrder
    position?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ChannelsScalarRelationFilter = {
    is?: ChannelsWhereInput
    isNot?: ChannelsWhereInput
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type ChannelPermissionsCountOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
  }

  export type ChannelPermissionsAvgOrderByAggregateInput = {
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
  }

  export type ChannelPermissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
  }

  export type ChannelPermissionsMinOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
  }

  export type ChannelPermissionsSumOrderByAggregateInput = {
    allow_permissions?: SortOrder
    deny_permissions?: SortOrder
  }

  export type ServersCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ServersCreateWithoutOwnerInput, ServersUncheckedCreateWithoutOwnerInput> | ServersCreateWithoutOwnerInput[] | ServersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutOwnerInput | ServersCreateOrConnectWithoutOwnerInput[]
    createMany?: ServersCreateManyOwnerInputEnvelope
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
  }

  export type ServerMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<ServerMembersCreateWithoutUserInput, ServerMembersUncheckedCreateWithoutUserInput> | ServerMembersCreateWithoutUserInput[] | ServerMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutUserInput | ServerMembersCreateOrConnectWithoutUserInput[]
    createMany?: ServerMembersCreateManyUserInputEnvelope
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
  }

  export type MessageReactionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<MessageReactionsCreateWithoutUsersInput, MessageReactionsUncheckedCreateWithoutUsersInput> | MessageReactionsCreateWithoutUsersInput[] | MessageReactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutUsersInput | MessageReactionsCreateOrConnectWithoutUsersInput[]
    createMany?: MessageReactionsCreateManyUsersInputEnvelope
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
  }

  export type ChannelPermissionsCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelPermissionsCreateWithoutUserInput, ChannelPermissionsUncheckedCreateWithoutUserInput> | ChannelPermissionsCreateWithoutUserInput[] | ChannelPermissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutUserInput | ChannelPermissionsCreateOrConnectWithoutUserInput[]
    createMany?: ChannelPermissionsCreateManyUserInputEnvelope
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ServersUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ServersCreateWithoutOwnerInput, ServersUncheckedCreateWithoutOwnerInput> | ServersCreateWithoutOwnerInput[] | ServersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutOwnerInput | ServersCreateOrConnectWithoutOwnerInput[]
    createMany?: ServersCreateManyOwnerInputEnvelope
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
  }

  export type ServerMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServerMembersCreateWithoutUserInput, ServerMembersUncheckedCreateWithoutUserInput> | ServerMembersCreateWithoutUserInput[] | ServerMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutUserInput | ServerMembersCreateOrConnectWithoutUserInput[]
    createMany?: ServerMembersCreateManyUserInputEnvelope
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
  }

  export type MessageReactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<MessageReactionsCreateWithoutUsersInput, MessageReactionsUncheckedCreateWithoutUsersInput> | MessageReactionsCreateWithoutUsersInput[] | MessageReactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutUsersInput | MessageReactionsCreateOrConnectWithoutUsersInput[]
    createMany?: MessageReactionsCreateManyUsersInputEnvelope
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
  }

  export type ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelPermissionsCreateWithoutUserInput, ChannelPermissionsUncheckedCreateWithoutUserInput> | ChannelPermissionsCreateWithoutUserInput[] | ChannelPermissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutUserInput | ChannelPermissionsCreateOrConnectWithoutUserInput[]
    createMany?: ChannelPermissionsCreateManyUserInputEnvelope
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServersUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ServersCreateWithoutOwnerInput, ServersUncheckedCreateWithoutOwnerInput> | ServersCreateWithoutOwnerInput[] | ServersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutOwnerInput | ServersCreateOrConnectWithoutOwnerInput[]
    upsert?: ServersUpsertWithWhereUniqueWithoutOwnerInput | ServersUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ServersCreateManyOwnerInputEnvelope
    set?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    disconnect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    delete?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    update?: ServersUpdateWithWhereUniqueWithoutOwnerInput | ServersUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ServersUpdateManyWithWhereWithoutOwnerInput | ServersUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ServersScalarWhereInput | ServersScalarWhereInput[]
  }

  export type ServerMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServerMembersCreateWithoutUserInput, ServerMembersUncheckedCreateWithoutUserInput> | ServerMembersCreateWithoutUserInput[] | ServerMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutUserInput | ServerMembersCreateOrConnectWithoutUserInput[]
    upsert?: ServerMembersUpsertWithWhereUniqueWithoutUserInput | ServerMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServerMembersCreateManyUserInputEnvelope
    set?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    disconnect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    delete?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    update?: ServerMembersUpdateWithWhereUniqueWithoutUserInput | ServerMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServerMembersUpdateManyWithWhereWithoutUserInput | ServerMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServerMembersScalarWhereInput | ServerMembersScalarWhereInput[]
  }

  export type MessageReactionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MessageReactionsCreateWithoutUsersInput, MessageReactionsUncheckedCreateWithoutUsersInput> | MessageReactionsCreateWithoutUsersInput[] | MessageReactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutUsersInput | MessageReactionsCreateOrConnectWithoutUsersInput[]
    upsert?: MessageReactionsUpsertWithWhereUniqueWithoutUsersInput | MessageReactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: MessageReactionsCreateManyUsersInputEnvelope
    set?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    disconnect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    delete?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    update?: MessageReactionsUpdateWithWhereUniqueWithoutUsersInput | MessageReactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MessageReactionsUpdateManyWithWhereWithoutUsersInput | MessageReactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MessageReactionsScalarWhereInput | MessageReactionsScalarWhereInput[]
  }

  export type ChannelPermissionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelPermissionsCreateWithoutUserInput, ChannelPermissionsUncheckedCreateWithoutUserInput> | ChannelPermissionsCreateWithoutUserInput[] | ChannelPermissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutUserInput | ChannelPermissionsCreateOrConnectWithoutUserInput[]
    upsert?: ChannelPermissionsUpsertWithWhereUniqueWithoutUserInput | ChannelPermissionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelPermissionsCreateManyUserInputEnvelope
    set?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    disconnect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    delete?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    update?: ChannelPermissionsUpdateWithWhereUniqueWithoutUserInput | ChannelPermissionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelPermissionsUpdateManyWithWhereWithoutUserInput | ChannelPermissionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ServersUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ServersCreateWithoutOwnerInput, ServersUncheckedCreateWithoutOwnerInput> | ServersCreateWithoutOwnerInput[] | ServersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutOwnerInput | ServersCreateOrConnectWithoutOwnerInput[]
    upsert?: ServersUpsertWithWhereUniqueWithoutOwnerInput | ServersUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ServersCreateManyOwnerInputEnvelope
    set?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    disconnect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    delete?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    update?: ServersUpdateWithWhereUniqueWithoutOwnerInput | ServersUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ServersUpdateManyWithWhereWithoutOwnerInput | ServersUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ServersScalarWhereInput | ServersScalarWhereInput[]
  }

  export type ServerMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServerMembersCreateWithoutUserInput, ServerMembersUncheckedCreateWithoutUserInput> | ServerMembersCreateWithoutUserInput[] | ServerMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutUserInput | ServerMembersCreateOrConnectWithoutUserInput[]
    upsert?: ServerMembersUpsertWithWhereUniqueWithoutUserInput | ServerMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServerMembersCreateManyUserInputEnvelope
    set?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    disconnect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    delete?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    update?: ServerMembersUpdateWithWhereUniqueWithoutUserInput | ServerMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServerMembersUpdateManyWithWhereWithoutUserInput | ServerMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServerMembersScalarWhereInput | ServerMembersScalarWhereInput[]
  }

  export type MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MessageReactionsCreateWithoutUsersInput, MessageReactionsUncheckedCreateWithoutUsersInput> | MessageReactionsCreateWithoutUsersInput[] | MessageReactionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutUsersInput | MessageReactionsCreateOrConnectWithoutUsersInput[]
    upsert?: MessageReactionsUpsertWithWhereUniqueWithoutUsersInput | MessageReactionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: MessageReactionsCreateManyUsersInputEnvelope
    set?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    disconnect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    delete?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    update?: MessageReactionsUpdateWithWhereUniqueWithoutUsersInput | MessageReactionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MessageReactionsUpdateManyWithWhereWithoutUsersInput | MessageReactionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MessageReactionsScalarWhereInput | MessageReactionsScalarWhereInput[]
  }

  export type ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelPermissionsCreateWithoutUserInput, ChannelPermissionsUncheckedCreateWithoutUserInput> | ChannelPermissionsCreateWithoutUserInput[] | ChannelPermissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutUserInput | ChannelPermissionsCreateOrConnectWithoutUserInput[]
    upsert?: ChannelPermissionsUpsertWithWhereUniqueWithoutUserInput | ChannelPermissionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelPermissionsCreateManyUserInputEnvelope
    set?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    disconnect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    delete?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    update?: ChannelPermissionsUpdateWithWhereUniqueWithoutUserInput | ChannelPermissionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelPermissionsUpdateManyWithWhereWithoutUserInput | ChannelPermissionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccountsInput
    upsert?: UsersUpsertWithoutAccountsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccountsInput, UsersUpdateWithoutAccountsInput>, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type UsersCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSessionsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSessionsInput
    upsert?: UsersUpsertWithoutSessionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSessionsInput, UsersUpdateWithoutSessionsInput>, UsersUncheckedUpdateWithoutSessionsInput>
  }

  export type UsersCreateNestedOneWithoutOwned_serversInput = {
    create?: XOR<UsersCreateWithoutOwned_serversInput, UsersUncheckedCreateWithoutOwned_serversInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOwned_serversInput
    connect?: UsersWhereUniqueInput
  }

  export type ServerMembersCreateNestedManyWithoutServerInput = {
    create?: XOR<ServerMembersCreateWithoutServerInput, ServerMembersUncheckedCreateWithoutServerInput> | ServerMembersCreateWithoutServerInput[] | ServerMembersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutServerInput | ServerMembersCreateOrConnectWithoutServerInput[]
    createMany?: ServerMembersCreateManyServerInputEnvelope
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
  }

  export type ChannelsCreateNestedManyWithoutServerInput = {
    create?: XOR<ChannelsCreateWithoutServerInput, ChannelsUncheckedCreateWithoutServerInput> | ChannelsCreateWithoutServerInput[] | ChannelsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutServerInput | ChannelsCreateOrConnectWithoutServerInput[]
    createMany?: ChannelsCreateManyServerInputEnvelope
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
  }

  export type CategoriesCreateNestedManyWithoutServerInput = {
    create?: XOR<CategoriesCreateWithoutServerInput, CategoriesUncheckedCreateWithoutServerInput> | CategoriesCreateWithoutServerInput[] | CategoriesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutServerInput | CategoriesCreateOrConnectWithoutServerInput[]
    createMany?: CategoriesCreateManyServerInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type RolesCreateNestedManyWithoutServerInput = {
    create?: XOR<RolesCreateWithoutServerInput, RolesUncheckedCreateWithoutServerInput> | RolesCreateWithoutServerInput[] | RolesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutServerInput | RolesCreateOrConnectWithoutServerInput[]
    createMany?: RolesCreateManyServerInputEnvelope
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
  }

  export type ServerMembersUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<ServerMembersCreateWithoutServerInput, ServerMembersUncheckedCreateWithoutServerInput> | ServerMembersCreateWithoutServerInput[] | ServerMembersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutServerInput | ServerMembersCreateOrConnectWithoutServerInput[]
    createMany?: ServerMembersCreateManyServerInputEnvelope
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
  }

  export type ChannelsUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<ChannelsCreateWithoutServerInput, ChannelsUncheckedCreateWithoutServerInput> | ChannelsCreateWithoutServerInput[] | ChannelsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutServerInput | ChannelsCreateOrConnectWithoutServerInput[]
    createMany?: ChannelsCreateManyServerInputEnvelope
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
  }

  export type CategoriesUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<CategoriesCreateWithoutServerInput, CategoriesUncheckedCreateWithoutServerInput> | CategoriesCreateWithoutServerInput[] | CategoriesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutServerInput | CategoriesCreateOrConnectWithoutServerInput[]
    createMany?: CategoriesCreateManyServerInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type RolesUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<RolesCreateWithoutServerInput, RolesUncheckedCreateWithoutServerInput> | RolesCreateWithoutServerInput[] | RolesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutServerInput | RolesCreateOrConnectWithoutServerInput[]
    createMany?: RolesCreateManyServerInputEnvelope
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutOwned_serversNestedInput = {
    create?: XOR<UsersCreateWithoutOwned_serversInput, UsersUncheckedCreateWithoutOwned_serversInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOwned_serversInput
    upsert?: UsersUpsertWithoutOwned_serversInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOwned_serversInput, UsersUpdateWithoutOwned_serversInput>, UsersUncheckedUpdateWithoutOwned_serversInput>
  }

  export type ServerMembersUpdateManyWithoutServerNestedInput = {
    create?: XOR<ServerMembersCreateWithoutServerInput, ServerMembersUncheckedCreateWithoutServerInput> | ServerMembersCreateWithoutServerInput[] | ServerMembersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutServerInput | ServerMembersCreateOrConnectWithoutServerInput[]
    upsert?: ServerMembersUpsertWithWhereUniqueWithoutServerInput | ServerMembersUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ServerMembersCreateManyServerInputEnvelope
    set?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    disconnect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    delete?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    update?: ServerMembersUpdateWithWhereUniqueWithoutServerInput | ServerMembersUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ServerMembersUpdateManyWithWhereWithoutServerInput | ServerMembersUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ServerMembersScalarWhereInput | ServerMembersScalarWhereInput[]
  }

  export type ChannelsUpdateManyWithoutServerNestedInput = {
    create?: XOR<ChannelsCreateWithoutServerInput, ChannelsUncheckedCreateWithoutServerInput> | ChannelsCreateWithoutServerInput[] | ChannelsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutServerInput | ChannelsCreateOrConnectWithoutServerInput[]
    upsert?: ChannelsUpsertWithWhereUniqueWithoutServerInput | ChannelsUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ChannelsCreateManyServerInputEnvelope
    set?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    disconnect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    delete?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    update?: ChannelsUpdateWithWhereUniqueWithoutServerInput | ChannelsUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ChannelsUpdateManyWithWhereWithoutServerInput | ChannelsUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ChannelsScalarWhereInput | ChannelsScalarWhereInput[]
  }

  export type CategoriesUpdateManyWithoutServerNestedInput = {
    create?: XOR<CategoriesCreateWithoutServerInput, CategoriesUncheckedCreateWithoutServerInput> | CategoriesCreateWithoutServerInput[] | CategoriesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutServerInput | CategoriesCreateOrConnectWithoutServerInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutServerInput | CategoriesUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: CategoriesCreateManyServerInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutServerInput | CategoriesUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutServerInput | CategoriesUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type RolesUpdateManyWithoutServerNestedInput = {
    create?: XOR<RolesCreateWithoutServerInput, RolesUncheckedCreateWithoutServerInput> | RolesCreateWithoutServerInput[] | RolesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutServerInput | RolesCreateOrConnectWithoutServerInput[]
    upsert?: RolesUpsertWithWhereUniqueWithoutServerInput | RolesUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: RolesCreateManyServerInputEnvelope
    set?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    disconnect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    delete?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    update?: RolesUpdateWithWhereUniqueWithoutServerInput | RolesUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: RolesUpdateManyWithWhereWithoutServerInput | RolesUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: RolesScalarWhereInput | RolesScalarWhereInput[]
  }

  export type ServerMembersUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<ServerMembersCreateWithoutServerInput, ServerMembersUncheckedCreateWithoutServerInput> | ServerMembersCreateWithoutServerInput[] | ServerMembersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerMembersCreateOrConnectWithoutServerInput | ServerMembersCreateOrConnectWithoutServerInput[]
    upsert?: ServerMembersUpsertWithWhereUniqueWithoutServerInput | ServerMembersUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ServerMembersCreateManyServerInputEnvelope
    set?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    disconnect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    delete?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    connect?: ServerMembersWhereUniqueInput | ServerMembersWhereUniqueInput[]
    update?: ServerMembersUpdateWithWhereUniqueWithoutServerInput | ServerMembersUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ServerMembersUpdateManyWithWhereWithoutServerInput | ServerMembersUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ServerMembersScalarWhereInput | ServerMembersScalarWhereInput[]
  }

  export type ChannelsUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<ChannelsCreateWithoutServerInput, ChannelsUncheckedCreateWithoutServerInput> | ChannelsCreateWithoutServerInput[] | ChannelsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutServerInput | ChannelsCreateOrConnectWithoutServerInput[]
    upsert?: ChannelsUpsertWithWhereUniqueWithoutServerInput | ChannelsUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ChannelsCreateManyServerInputEnvelope
    set?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    disconnect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    delete?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    update?: ChannelsUpdateWithWhereUniqueWithoutServerInput | ChannelsUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ChannelsUpdateManyWithWhereWithoutServerInput | ChannelsUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ChannelsScalarWhereInput | ChannelsScalarWhereInput[]
  }

  export type CategoriesUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<CategoriesCreateWithoutServerInput, CategoriesUncheckedCreateWithoutServerInput> | CategoriesCreateWithoutServerInput[] | CategoriesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutServerInput | CategoriesCreateOrConnectWithoutServerInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutServerInput | CategoriesUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: CategoriesCreateManyServerInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutServerInput | CategoriesUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutServerInput | CategoriesUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type RolesUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<RolesCreateWithoutServerInput, RolesUncheckedCreateWithoutServerInput> | RolesCreateWithoutServerInput[] | RolesUncheckedCreateWithoutServerInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutServerInput | RolesCreateOrConnectWithoutServerInput[]
    upsert?: RolesUpsertWithWhereUniqueWithoutServerInput | RolesUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: RolesCreateManyServerInputEnvelope
    set?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    disconnect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    delete?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    update?: RolesUpdateWithWhereUniqueWithoutServerInput | RolesUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: RolesUpdateManyWithWhereWithoutServerInput | RolesUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: RolesScalarWhereInput | RolesScalarWhereInput[]
  }

  export type ServersCreateNestedOneWithoutMembersInput = {
    create?: XOR<ServersCreateWithoutMembersInput, ServersUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ServersCreateOrConnectWithoutMembersInput
    connect?: ServersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutServer_membersInput = {
    create?: XOR<UsersCreateWithoutServer_membersInput, UsersUncheckedCreateWithoutServer_membersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServer_membersInput
    connect?: UsersWhereUniqueInput
  }

  export type ServersUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ServersCreateWithoutMembersInput, ServersUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ServersCreateOrConnectWithoutMembersInput
    upsert?: ServersUpsertWithoutMembersInput
    connect?: ServersWhereUniqueInput
    update?: XOR<XOR<ServersUpdateToOneWithWhereWithoutMembersInput, ServersUpdateWithoutMembersInput>, ServersUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateOneRequiredWithoutServer_membersNestedInput = {
    create?: XOR<UsersCreateWithoutServer_membersInput, UsersUncheckedCreateWithoutServer_membersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServer_membersInput
    upsert?: UsersUpsertWithoutServer_membersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutServer_membersInput, UsersUpdateWithoutServer_membersInput>, UsersUncheckedUpdateWithoutServer_membersInput>
  }

  export type ServersCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ServersCreateWithoutCategoriesInput, ServersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ServersCreateOrConnectWithoutCategoriesInput
    connect?: ServersWhereUniqueInput
  }

  export type ChannelsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ChannelsCreateWithoutCategoryInput, ChannelsUncheckedCreateWithoutCategoryInput> | ChannelsCreateWithoutCategoryInput[] | ChannelsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutCategoryInput | ChannelsCreateOrConnectWithoutCategoryInput[]
    createMany?: ChannelsCreateManyCategoryInputEnvelope
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
  }

  export type ChannelsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ChannelsCreateWithoutCategoryInput, ChannelsUncheckedCreateWithoutCategoryInput> | ChannelsCreateWithoutCategoryInput[] | ChannelsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutCategoryInput | ChannelsCreateOrConnectWithoutCategoryInput[]
    createMany?: ChannelsCreateManyCategoryInputEnvelope
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServersUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ServersCreateWithoutCategoriesInput, ServersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ServersCreateOrConnectWithoutCategoriesInput
    upsert?: ServersUpsertWithoutCategoriesInput
    connect?: ServersWhereUniqueInput
    update?: XOR<XOR<ServersUpdateToOneWithWhereWithoutCategoriesInput, ServersUpdateWithoutCategoriesInput>, ServersUncheckedUpdateWithoutCategoriesInput>
  }

  export type ChannelsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ChannelsCreateWithoutCategoryInput, ChannelsUncheckedCreateWithoutCategoryInput> | ChannelsCreateWithoutCategoryInput[] | ChannelsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutCategoryInput | ChannelsCreateOrConnectWithoutCategoryInput[]
    upsert?: ChannelsUpsertWithWhereUniqueWithoutCategoryInput | ChannelsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ChannelsCreateManyCategoryInputEnvelope
    set?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    disconnect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    delete?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    update?: ChannelsUpdateWithWhereUniqueWithoutCategoryInput | ChannelsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ChannelsUpdateManyWithWhereWithoutCategoryInput | ChannelsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ChannelsScalarWhereInput | ChannelsScalarWhereInput[]
  }

  export type ChannelsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ChannelsCreateWithoutCategoryInput, ChannelsUncheckedCreateWithoutCategoryInput> | ChannelsCreateWithoutCategoryInput[] | ChannelsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChannelsCreateOrConnectWithoutCategoryInput | ChannelsCreateOrConnectWithoutCategoryInput[]
    upsert?: ChannelsUpsertWithWhereUniqueWithoutCategoryInput | ChannelsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ChannelsCreateManyCategoryInputEnvelope
    set?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    disconnect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    delete?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    connect?: ChannelsWhereUniqueInput | ChannelsWhereUniqueInput[]
    update?: ChannelsUpdateWithWhereUniqueWithoutCategoryInput | ChannelsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ChannelsUpdateManyWithWhereWithoutCategoryInput | ChannelsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ChannelsScalarWhereInput | ChannelsScalarWhereInput[]
  }

  export type ChannelPermissionsCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelPermissionsCreateWithoutChannelInput, ChannelPermissionsUncheckedCreateWithoutChannelInput> | ChannelPermissionsCreateWithoutChannelInput[] | ChannelPermissionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutChannelInput | ChannelPermissionsCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelPermissionsCreateManyChannelInputEnvelope
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
  }

  export type ServersCreateNestedOneWithoutChannelsInput = {
    create?: XOR<ServersCreateWithoutChannelsInput, ServersUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: ServersCreateOrConnectWithoutChannelsInput
    connect?: ServersWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutChannelsInput = {
    create?: XOR<CategoriesCreateWithoutChannelsInput, CategoriesUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutChannelsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type ChannelPermissionsUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelPermissionsCreateWithoutChannelInput, ChannelPermissionsUncheckedCreateWithoutChannelInput> | ChannelPermissionsCreateWithoutChannelInput[] | ChannelPermissionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutChannelInput | ChannelPermissionsCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelPermissionsCreateManyChannelInputEnvelope
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
  }

  export type EnumChannelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChannelType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChannelPermissionsUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelPermissionsCreateWithoutChannelInput, ChannelPermissionsUncheckedCreateWithoutChannelInput> | ChannelPermissionsCreateWithoutChannelInput[] | ChannelPermissionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutChannelInput | ChannelPermissionsCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelPermissionsUpsertWithWhereUniqueWithoutChannelInput | ChannelPermissionsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelPermissionsCreateManyChannelInputEnvelope
    set?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    disconnect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    delete?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    update?: ChannelPermissionsUpdateWithWhereUniqueWithoutChannelInput | ChannelPermissionsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelPermissionsUpdateManyWithWhereWithoutChannelInput | ChannelPermissionsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
  }

  export type ServersUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<ServersCreateWithoutChannelsInput, ServersUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: ServersCreateOrConnectWithoutChannelsInput
    upsert?: ServersUpsertWithoutChannelsInput
    connect?: ServersWhereUniqueInput
    update?: XOR<XOR<ServersUpdateToOneWithWhereWithoutChannelsInput, ServersUpdateWithoutChannelsInput>, ServersUncheckedUpdateWithoutChannelsInput>
  }

  export type CategoriesUpdateOneWithoutChannelsNestedInput = {
    create?: XOR<CategoriesCreateWithoutChannelsInput, CategoriesUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutChannelsInput
    upsert?: CategoriesUpsertWithoutChannelsInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutChannelsInput, CategoriesUpdateWithoutChannelsInput>, CategoriesUncheckedUpdateWithoutChannelsInput>
  }

  export type ChannelPermissionsUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelPermissionsCreateWithoutChannelInput, ChannelPermissionsUncheckedCreateWithoutChannelInput> | ChannelPermissionsCreateWithoutChannelInput[] | ChannelPermissionsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutChannelInput | ChannelPermissionsCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelPermissionsUpsertWithWhereUniqueWithoutChannelInput | ChannelPermissionsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelPermissionsCreateManyChannelInputEnvelope
    set?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    disconnect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    delete?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    update?: ChannelPermissionsUpdateWithWhereUniqueWithoutChannelInput | ChannelPermissionsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelPermissionsUpdateManyWithWhereWithoutChannelInput | ChannelPermissionsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
  }

  export type MessagesCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessagesCreateWithoutRepliesInput, MessagesUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutRepliesInput
    connect?: MessagesWhereUniqueInput
  }

  export type MessagesCreateNestedManyWithoutReply_toInput = {
    create?: XOR<MessagesCreateWithoutReply_toInput, MessagesUncheckedCreateWithoutReply_toInput> | MessagesCreateWithoutReply_toInput[] | MessagesUncheckedCreateWithoutReply_toInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReply_toInput | MessagesCreateOrConnectWithoutReply_toInput[]
    createMany?: MessagesCreateManyReply_toInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessageAttachmentsCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageAttachmentsCreateWithoutMessageInput, MessageAttachmentsUncheckedCreateWithoutMessageInput> | MessageAttachmentsCreateWithoutMessageInput[] | MessageAttachmentsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentsCreateOrConnectWithoutMessageInput | MessageAttachmentsCreateOrConnectWithoutMessageInput[]
    createMany?: MessageAttachmentsCreateManyMessageInputEnvelope
    connect?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
  }

  export type MessageReactionsCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReactionsCreateWithoutMessageInput, MessageReactionsUncheckedCreateWithoutMessageInput> | MessageReactionsCreateWithoutMessageInput[] | MessageReactionsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutMessageInput | MessageReactionsCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReactionsCreateManyMessageInputEnvelope
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutReply_toInput = {
    create?: XOR<MessagesCreateWithoutReply_toInput, MessagesUncheckedCreateWithoutReply_toInput> | MessagesCreateWithoutReply_toInput[] | MessagesUncheckedCreateWithoutReply_toInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReply_toInput | MessagesCreateOrConnectWithoutReply_toInput[]
    createMany?: MessagesCreateManyReply_toInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessageAttachmentsUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageAttachmentsCreateWithoutMessageInput, MessageAttachmentsUncheckedCreateWithoutMessageInput> | MessageAttachmentsCreateWithoutMessageInput[] | MessageAttachmentsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentsCreateOrConnectWithoutMessageInput | MessageAttachmentsCreateOrConnectWithoutMessageInput[]
    createMany?: MessageAttachmentsCreateManyMessageInputEnvelope
    connect?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
  }

  export type MessageReactionsUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReactionsCreateWithoutMessageInput, MessageReactionsUncheckedCreateWithoutMessageInput> | MessageReactionsCreateWithoutMessageInput[] | MessageReactionsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutMessageInput | MessageReactionsCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReactionsCreateManyMessageInputEnvelope
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
  }

  export type EnumMessagetypeFieldUpdateOperationsInput = {
    set?: $Enums.Messagetype
  }

  export type MessagesUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<MessagesCreateWithoutRepliesInput, MessagesUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutRepliesInput
    upsert?: MessagesUpsertWithoutRepliesInput
    disconnect?: MessagesWhereInput | boolean
    delete?: MessagesWhereInput | boolean
    connect?: MessagesWhereUniqueInput
    update?: XOR<XOR<MessagesUpdateToOneWithWhereWithoutRepliesInput, MessagesUpdateWithoutRepliesInput>, MessagesUncheckedUpdateWithoutRepliesInput>
  }

  export type MessagesUpdateManyWithoutReply_toNestedInput = {
    create?: XOR<MessagesCreateWithoutReply_toInput, MessagesUncheckedCreateWithoutReply_toInput> | MessagesCreateWithoutReply_toInput[] | MessagesUncheckedCreateWithoutReply_toInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReply_toInput | MessagesCreateOrConnectWithoutReply_toInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReply_toInput | MessagesUpsertWithWhereUniqueWithoutReply_toInput[]
    createMany?: MessagesCreateManyReply_toInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReply_toInput | MessagesUpdateWithWhereUniqueWithoutReply_toInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReply_toInput | MessagesUpdateManyWithWhereWithoutReply_toInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessageAttachmentsUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageAttachmentsCreateWithoutMessageInput, MessageAttachmentsUncheckedCreateWithoutMessageInput> | MessageAttachmentsCreateWithoutMessageInput[] | MessageAttachmentsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentsCreateOrConnectWithoutMessageInput | MessageAttachmentsCreateOrConnectWithoutMessageInput[]
    upsert?: MessageAttachmentsUpsertWithWhereUniqueWithoutMessageInput | MessageAttachmentsUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageAttachmentsCreateManyMessageInputEnvelope
    set?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    disconnect?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    delete?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    connect?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    update?: MessageAttachmentsUpdateWithWhereUniqueWithoutMessageInput | MessageAttachmentsUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageAttachmentsUpdateManyWithWhereWithoutMessageInput | MessageAttachmentsUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageAttachmentsScalarWhereInput | MessageAttachmentsScalarWhereInput[]
  }

  export type MessageReactionsUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReactionsCreateWithoutMessageInput, MessageReactionsUncheckedCreateWithoutMessageInput> | MessageReactionsCreateWithoutMessageInput[] | MessageReactionsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutMessageInput | MessageReactionsCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReactionsUpsertWithWhereUniqueWithoutMessageInput | MessageReactionsUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReactionsCreateManyMessageInputEnvelope
    set?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    disconnect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    delete?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    update?: MessageReactionsUpdateWithWhereUniqueWithoutMessageInput | MessageReactionsUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReactionsUpdateManyWithWhereWithoutMessageInput | MessageReactionsUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReactionsScalarWhereInput | MessageReactionsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutReply_toNestedInput = {
    create?: XOR<MessagesCreateWithoutReply_toInput, MessagesUncheckedCreateWithoutReply_toInput> | MessagesCreateWithoutReply_toInput[] | MessagesUncheckedCreateWithoutReply_toInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReply_toInput | MessagesCreateOrConnectWithoutReply_toInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReply_toInput | MessagesUpsertWithWhereUniqueWithoutReply_toInput[]
    createMany?: MessagesCreateManyReply_toInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReply_toInput | MessagesUpdateWithWhereUniqueWithoutReply_toInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReply_toInput | MessagesUpdateManyWithWhereWithoutReply_toInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessageAttachmentsUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageAttachmentsCreateWithoutMessageInput, MessageAttachmentsUncheckedCreateWithoutMessageInput> | MessageAttachmentsCreateWithoutMessageInput[] | MessageAttachmentsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageAttachmentsCreateOrConnectWithoutMessageInput | MessageAttachmentsCreateOrConnectWithoutMessageInput[]
    upsert?: MessageAttachmentsUpsertWithWhereUniqueWithoutMessageInput | MessageAttachmentsUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageAttachmentsCreateManyMessageInputEnvelope
    set?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    disconnect?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    delete?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    connect?: MessageAttachmentsWhereUniqueInput | MessageAttachmentsWhereUniqueInput[]
    update?: MessageAttachmentsUpdateWithWhereUniqueWithoutMessageInput | MessageAttachmentsUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageAttachmentsUpdateManyWithWhereWithoutMessageInput | MessageAttachmentsUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageAttachmentsScalarWhereInput | MessageAttachmentsScalarWhereInput[]
  }

  export type MessageReactionsUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReactionsCreateWithoutMessageInput, MessageReactionsUncheckedCreateWithoutMessageInput> | MessageReactionsCreateWithoutMessageInput[] | MessageReactionsUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionsCreateOrConnectWithoutMessageInput | MessageReactionsCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReactionsUpsertWithWhereUniqueWithoutMessageInput | MessageReactionsUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReactionsCreateManyMessageInputEnvelope
    set?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    disconnect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    delete?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    connect?: MessageReactionsWhereUniqueInput | MessageReactionsWhereUniqueInput[]
    update?: MessageReactionsUpdateWithWhereUniqueWithoutMessageInput | MessageReactionsUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReactionsUpdateManyWithWhereWithoutMessageInput | MessageReactionsUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReactionsScalarWhereInput | MessageReactionsScalarWhereInput[]
  }

  export type MessagesCreateNestedOneWithoutAttatachmentsInput = {
    create?: XOR<MessagesCreateWithoutAttatachmentsInput, MessagesUncheckedCreateWithoutAttatachmentsInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutAttatachmentsInput
    connect?: MessagesWhereUniqueInput
  }

  export type MessagesUpdateOneWithoutAttatachmentsNestedInput = {
    create?: XOR<MessagesCreateWithoutAttatachmentsInput, MessagesUncheckedCreateWithoutAttatachmentsInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutAttatachmentsInput
    upsert?: MessagesUpsertWithoutAttatachmentsInput
    disconnect?: MessagesWhereInput | boolean
    delete?: MessagesWhereInput | boolean
    connect?: MessagesWhereUniqueInput
    update?: XOR<XOR<MessagesUpdateToOneWithWhereWithoutAttatachmentsInput, MessagesUpdateWithoutAttatachmentsInput>, MessagesUncheckedUpdateWithoutAttatachmentsInput>
  }

  export type MessagesCreateNestedOneWithoutMessage_rectionsInput = {
    create?: XOR<MessagesCreateWithoutMessage_rectionsInput, MessagesUncheckedCreateWithoutMessage_rectionsInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutMessage_rectionsInput
    connect?: MessagesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMessages_reactionsInput = {
    create?: XOR<UsersCreateWithoutMessages_reactionsInput, UsersUncheckedCreateWithoutMessages_reactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessages_reactionsInput
    connect?: UsersWhereUniqueInput
  }

  export type MessagesUpdateOneWithoutMessage_rectionsNestedInput = {
    create?: XOR<MessagesCreateWithoutMessage_rectionsInput, MessagesUncheckedCreateWithoutMessage_rectionsInput>
    connectOrCreate?: MessagesCreateOrConnectWithoutMessage_rectionsInput
    upsert?: MessagesUpsertWithoutMessage_rectionsInput
    disconnect?: MessagesWhereInput | boolean
    delete?: MessagesWhereInput | boolean
    connect?: MessagesWhereUniqueInput
    update?: XOR<XOR<MessagesUpdateToOneWithWhereWithoutMessage_rectionsInput, MessagesUpdateWithoutMessage_rectionsInput>, MessagesUncheckedUpdateWithoutMessage_rectionsInput>
  }

  export type UsersUpdateOneRequiredWithoutMessages_reactionsNestedInput = {
    create?: XOR<UsersCreateWithoutMessages_reactionsInput, UsersUncheckedCreateWithoutMessages_reactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessages_reactionsInput
    upsert?: UsersUpsertWithoutMessages_reactionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMessages_reactionsInput, UsersUpdateWithoutMessages_reactionsInput>, UsersUncheckedUpdateWithoutMessages_reactionsInput>
  }

  export type ServersCreateNestedOneWithoutRolesInput = {
    create?: XOR<ServersCreateWithoutRolesInput, ServersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ServersCreateOrConnectWithoutRolesInput
    connect?: ServersWhereUniqueInput
  }

  export type ChannelPermissionsCreateNestedManyWithoutRoleInput = {
    create?: XOR<ChannelPermissionsCreateWithoutRoleInput, ChannelPermissionsUncheckedCreateWithoutRoleInput> | ChannelPermissionsCreateWithoutRoleInput[] | ChannelPermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutRoleInput | ChannelPermissionsCreateOrConnectWithoutRoleInput[]
    createMany?: ChannelPermissionsCreateManyRoleInputEnvelope
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
  }

  export type ChannelPermissionsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ChannelPermissionsCreateWithoutRoleInput, ChannelPermissionsUncheckedCreateWithoutRoleInput> | ChannelPermissionsCreateWithoutRoleInput[] | ChannelPermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutRoleInput | ChannelPermissionsCreateOrConnectWithoutRoleInput[]
    createMany?: ChannelPermissionsCreateManyRoleInputEnvelope
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ServersUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ServersCreateWithoutRolesInput, ServersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ServersCreateOrConnectWithoutRolesInput
    upsert?: ServersUpsertWithoutRolesInput
    connect?: ServersWhereUniqueInput
    update?: XOR<XOR<ServersUpdateToOneWithWhereWithoutRolesInput, ServersUpdateWithoutRolesInput>, ServersUncheckedUpdateWithoutRolesInput>
  }

  export type ChannelPermissionsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ChannelPermissionsCreateWithoutRoleInput, ChannelPermissionsUncheckedCreateWithoutRoleInput> | ChannelPermissionsCreateWithoutRoleInput[] | ChannelPermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutRoleInput | ChannelPermissionsCreateOrConnectWithoutRoleInput[]
    upsert?: ChannelPermissionsUpsertWithWhereUniqueWithoutRoleInput | ChannelPermissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ChannelPermissionsCreateManyRoleInputEnvelope
    set?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    disconnect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    delete?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    update?: ChannelPermissionsUpdateWithWhereUniqueWithoutRoleInput | ChannelPermissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ChannelPermissionsUpdateManyWithWhereWithoutRoleInput | ChannelPermissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
  }

  export type ChannelPermissionsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ChannelPermissionsCreateWithoutRoleInput, ChannelPermissionsUncheckedCreateWithoutRoleInput> | ChannelPermissionsCreateWithoutRoleInput[] | ChannelPermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ChannelPermissionsCreateOrConnectWithoutRoleInput | ChannelPermissionsCreateOrConnectWithoutRoleInput[]
    upsert?: ChannelPermissionsUpsertWithWhereUniqueWithoutRoleInput | ChannelPermissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ChannelPermissionsCreateManyRoleInputEnvelope
    set?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    disconnect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    delete?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    connect?: ChannelPermissionsWhereUniqueInput | ChannelPermissionsWhereUniqueInput[]
    update?: ChannelPermissionsUpdateWithWhereUniqueWithoutRoleInput | ChannelPermissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ChannelPermissionsUpdateManyWithWhereWithoutRoleInput | ChannelPermissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
  }

  export type ChannelsCreateNestedOneWithoutChannel_permissionsInput = {
    create?: XOR<ChannelsCreateWithoutChannel_permissionsInput, ChannelsUncheckedCreateWithoutChannel_permissionsInput>
    connectOrCreate?: ChannelsCreateOrConnectWithoutChannel_permissionsInput
    connect?: ChannelsWhereUniqueInput
  }

  export type RolesCreateNestedOneWithoutChannel_permissionsInput = {
    create?: XOR<RolesCreateWithoutChannel_permissionsInput, RolesUncheckedCreateWithoutChannel_permissionsInput>
    connectOrCreate?: RolesCreateOrConnectWithoutChannel_permissionsInput
    connect?: RolesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutChannel_permissionsInput = {
    create?: XOR<UsersCreateWithoutChannel_permissionsInput, UsersUncheckedCreateWithoutChannel_permissionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChannel_permissionsInput
    connect?: UsersWhereUniqueInput
  }

  export type ChannelsUpdateOneRequiredWithoutChannel_permissionsNestedInput = {
    create?: XOR<ChannelsCreateWithoutChannel_permissionsInput, ChannelsUncheckedCreateWithoutChannel_permissionsInput>
    connectOrCreate?: ChannelsCreateOrConnectWithoutChannel_permissionsInput
    upsert?: ChannelsUpsertWithoutChannel_permissionsInput
    connect?: ChannelsWhereUniqueInput
    update?: XOR<XOR<ChannelsUpdateToOneWithWhereWithoutChannel_permissionsInput, ChannelsUpdateWithoutChannel_permissionsInput>, ChannelsUncheckedUpdateWithoutChannel_permissionsInput>
  }

  export type RolesUpdateOneRequiredWithoutChannel_permissionsNestedInput = {
    create?: XOR<RolesCreateWithoutChannel_permissionsInput, RolesUncheckedCreateWithoutChannel_permissionsInput>
    connectOrCreate?: RolesCreateOrConnectWithoutChannel_permissionsInput
    upsert?: RolesUpsertWithoutChannel_permissionsInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutChannel_permissionsInput, RolesUpdateWithoutChannel_permissionsInput>, RolesUncheckedUpdateWithoutChannel_permissionsInput>
  }

  export type UsersUpdateOneRequiredWithoutChannel_permissionsNestedInput = {
    create?: XOR<UsersCreateWithoutChannel_permissionsInput, UsersUncheckedCreateWithoutChannel_permissionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChannel_permissionsInput
    upsert?: UsersUpsertWithoutChannel_permissionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChannel_permissionsInput, UsersUpdateWithoutChannel_permissionsInput>, UsersUncheckedUpdateWithoutChannel_permissionsInput>
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumChannelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeFilter<$PrismaModel> | $Enums.ChannelType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMessagetypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Messagetype | EnumMessagetypeFieldRefInput<$PrismaModel>
    in?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessagetypeFilter<$PrismaModel> | $Enums.Messagetype
  }

  export type NestedEnumMessagetypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Messagetype | EnumMessagetypeFieldRefInput<$PrismaModel>
    in?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Messagetype[] | ListEnumMessagetypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessagetypeWithAggregatesFilter<$PrismaModel> | $Enums.Messagetype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessagetypeFilter<$PrismaModel>
    _max?: NestedEnumMessagetypeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ServersCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: ServerMembersCreateNestedManyWithoutServerInput
    channels?: ChannelsCreateNestedManyWithoutServerInput
    categories?: CategoriesCreateNestedManyWithoutServerInput
    roles?: RolesCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: ServerMembersUncheckedCreateNestedManyWithoutServerInput
    channels?: ChannelsUncheckedCreateNestedManyWithoutServerInput
    categories?: CategoriesUncheckedCreateNestedManyWithoutServerInput
    roles?: RolesUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutOwnerInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutOwnerInput, ServersUncheckedCreateWithoutOwnerInput>
  }

  export type ServersCreateManyOwnerInputEnvelope = {
    data: ServersCreateManyOwnerInput | ServersCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ServerMembersCreateWithoutUserInput = {
    id?: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
    server: ServersCreateNestedOneWithoutMembersInput
  }

  export type ServerMembersUncheckedCreateWithoutUserInput = {
    id?: string
    server_id: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersCreateOrConnectWithoutUserInput = {
    where: ServerMembersWhereUniqueInput
    create: XOR<ServerMembersCreateWithoutUserInput, ServerMembersUncheckedCreateWithoutUserInput>
  }

  export type ServerMembersCreateManyUserInputEnvelope = {
    data: ServerMembersCreateManyUserInput | ServerMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageReactionsCreateWithoutUsersInput = {
    id?: string
    emoji: string
    created_at?: Date | string
    message?: MessagesCreateNestedOneWithoutMessage_rectionsInput
  }

  export type MessageReactionsUncheckedCreateWithoutUsersInput = {
    id?: string
    message_id?: string | null
    emoji: string
    created_at?: Date | string
  }

  export type MessageReactionsCreateOrConnectWithoutUsersInput = {
    where: MessageReactionsWhereUniqueInput
    create: XOR<MessageReactionsCreateWithoutUsersInput, MessageReactionsUncheckedCreateWithoutUsersInput>
  }

  export type MessageReactionsCreateManyUsersInputEnvelope = {
    data: MessageReactionsCreateManyUsersInput | MessageReactionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ChannelPermissionsCreateWithoutUserInput = {
    id?: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
    channel: ChannelsCreateNestedOneWithoutChannel_permissionsInput
    role: RolesCreateNestedOneWithoutChannel_permissionsInput
  }

  export type ChannelPermissionsUncheckedCreateWithoutUserInput = {
    id?: string
    channel_id: string
    role_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsCreateOrConnectWithoutUserInput = {
    where: ChannelPermissionsWhereUniqueInput
    create: XOR<ChannelPermissionsCreateWithoutUserInput, ChannelPermissionsUncheckedCreateWithoutUserInput>
  }

  export type ChannelPermissionsCreateManyUserInputEnvelope = {
    data: ChannelPermissionsCreateManyUserInput | ChannelPermissionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServersUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ServersWhereUniqueInput
    update: XOR<ServersUpdateWithoutOwnerInput, ServersUncheckedUpdateWithoutOwnerInput>
    create: XOR<ServersCreateWithoutOwnerInput, ServersUncheckedCreateWithoutOwnerInput>
  }

  export type ServersUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ServersWhereUniqueInput
    data: XOR<ServersUpdateWithoutOwnerInput, ServersUncheckedUpdateWithoutOwnerInput>
  }

  export type ServersUpdateManyWithWhereWithoutOwnerInput = {
    where: ServersScalarWhereInput
    data: XOR<ServersUpdateManyMutationInput, ServersUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ServersScalarWhereInput = {
    AND?: ServersScalarWhereInput | ServersScalarWhereInput[]
    OR?: ServersScalarWhereInput[]
    NOT?: ServersScalarWhereInput | ServersScalarWhereInput[]
    id?: StringFilter<"Servers"> | string
    name?: StringFilter<"Servers"> | string
    description?: StringNullableFilter<"Servers"> | string | null
    icon_url?: StringNullableFilter<"Servers"> | string | null
    banner_url?: StringNullableFilter<"Servers"> | string | null
    owner_id?: StringFilter<"Servers"> | string
    invite_code?: StringFilter<"Servers"> | string
    created_at?: DateTimeFilter<"Servers"> | Date | string
    updated_at?: DateTimeFilter<"Servers"> | Date | string
  }

  export type ServerMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: ServerMembersWhereUniqueInput
    update: XOR<ServerMembersUpdateWithoutUserInput, ServerMembersUncheckedUpdateWithoutUserInput>
    create: XOR<ServerMembersCreateWithoutUserInput, ServerMembersUncheckedCreateWithoutUserInput>
  }

  export type ServerMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: ServerMembersWhereUniqueInput
    data: XOR<ServerMembersUpdateWithoutUserInput, ServerMembersUncheckedUpdateWithoutUserInput>
  }

  export type ServerMembersUpdateManyWithWhereWithoutUserInput = {
    where: ServerMembersScalarWhereInput
    data: XOR<ServerMembersUpdateManyMutationInput, ServerMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type ServerMembersScalarWhereInput = {
    AND?: ServerMembersScalarWhereInput | ServerMembersScalarWhereInput[]
    OR?: ServerMembersScalarWhereInput[]
    NOT?: ServerMembersScalarWhereInput | ServerMembersScalarWhereInput[]
    id?: StringFilter<"ServerMembers"> | string
    server_id?: StringFilter<"ServerMembers"> | string
    user_id?: StringFilter<"ServerMembers"> | string
    nickname?: StringNullableFilter<"ServerMembers"> | string | null
    joined_at?: DateTimeFilter<"ServerMembers"> | Date | string
    roles?: JsonNullableFilter<"ServerMembers">
  }

  export type MessageReactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: MessageReactionsWhereUniqueInput
    update: XOR<MessageReactionsUpdateWithoutUsersInput, MessageReactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<MessageReactionsCreateWithoutUsersInput, MessageReactionsUncheckedCreateWithoutUsersInput>
  }

  export type MessageReactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: MessageReactionsWhereUniqueInput
    data: XOR<MessageReactionsUpdateWithoutUsersInput, MessageReactionsUncheckedUpdateWithoutUsersInput>
  }

  export type MessageReactionsUpdateManyWithWhereWithoutUsersInput = {
    where: MessageReactionsScalarWhereInput
    data: XOR<MessageReactionsUpdateManyMutationInput, MessageReactionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type MessageReactionsScalarWhereInput = {
    AND?: MessageReactionsScalarWhereInput | MessageReactionsScalarWhereInput[]
    OR?: MessageReactionsScalarWhereInput[]
    NOT?: MessageReactionsScalarWhereInput | MessageReactionsScalarWhereInput[]
    id?: StringFilter<"MessageReactions"> | string
    message_id?: StringNullableFilter<"MessageReactions"> | string | null
    user_id?: StringFilter<"MessageReactions"> | string
    emoji?: StringFilter<"MessageReactions"> | string
    created_at?: DateTimeFilter<"MessageReactions"> | Date | string
  }

  export type ChannelPermissionsUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelPermissionsWhereUniqueInput
    update: XOR<ChannelPermissionsUpdateWithoutUserInput, ChannelPermissionsUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelPermissionsCreateWithoutUserInput, ChannelPermissionsUncheckedCreateWithoutUserInput>
  }

  export type ChannelPermissionsUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelPermissionsWhereUniqueInput
    data: XOR<ChannelPermissionsUpdateWithoutUserInput, ChannelPermissionsUncheckedUpdateWithoutUserInput>
  }

  export type ChannelPermissionsUpdateManyWithWhereWithoutUserInput = {
    where: ChannelPermissionsScalarWhereInput
    data: XOR<ChannelPermissionsUpdateManyMutationInput, ChannelPermissionsUncheckedUpdateManyWithoutUserInput>
  }

  export type ChannelPermissionsScalarWhereInput = {
    AND?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
    OR?: ChannelPermissionsScalarWhereInput[]
    NOT?: ChannelPermissionsScalarWhereInput | ChannelPermissionsScalarWhereInput[]
    id?: StringFilter<"ChannelPermissions"> | string
    channel_id?: StringFilter<"ChannelPermissions"> | string
    role_id?: StringFilter<"ChannelPermissions"> | string
    user_id?: StringFilter<"ChannelPermissions"> | string
    allow_permissions?: BigIntFilter<"ChannelPermissions"> | bigint | number
    deny_permissions?: BigIntFilter<"ChannelPermissions"> | bigint | number
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UsersCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersUncheckedCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersUncheckedCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsUncheckedCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAccountsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
  }

  export type UsersUpsertWithoutAccountsInput = {
    update: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
    create: XOR<UsersCreateWithoutAccountsInput, UsersUncheckedCreateWithoutAccountsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccountsInput, UsersUncheckedUpdateWithoutAccountsInput>
  }

  export type UsersUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUncheckedUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUncheckedUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersUncheckedCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersUncheckedCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsUncheckedCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSessionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
  }

  export type UsersUpsertWithoutSessionsInput = {
    update: XOR<UsersUpdateWithoutSessionsInput, UsersUncheckedUpdateWithoutSessionsInput>
    create: XOR<UsersCreateWithoutSessionsInput, UsersUncheckedCreateWithoutSessionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSessionsInput, UsersUncheckedUpdateWithoutSessionsInput>
  }

  export type UsersUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUncheckedUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUncheckedUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutOwned_serversInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    server_members?: ServerMembersCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOwned_serversInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    server_members?: ServerMembersUncheckedCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsUncheckedCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOwned_serversInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOwned_serversInput, UsersUncheckedCreateWithoutOwned_serversInput>
  }

  export type ServerMembersCreateWithoutServerInput = {
    id?: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
    user: UsersCreateNestedOneWithoutServer_membersInput
  }

  export type ServerMembersUncheckedCreateWithoutServerInput = {
    id?: string
    user_id: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersCreateOrConnectWithoutServerInput = {
    where: ServerMembersWhereUniqueInput
    create: XOR<ServerMembersCreateWithoutServerInput, ServerMembersUncheckedCreateWithoutServerInput>
  }

  export type ServerMembersCreateManyServerInputEnvelope = {
    data: ServerMembersCreateManyServerInput | ServerMembersCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type ChannelsCreateWithoutServerInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    is_nsfw?: boolean
    created_at?: Date | string
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutChannelInput
    category?: CategoriesCreateNestedOneWithoutChannelsInput
  }

  export type ChannelsUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    category_id?: string | null
    is_nsfw?: boolean
    created_at?: Date | string
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelsCreateOrConnectWithoutServerInput = {
    where: ChannelsWhereUniqueInput
    create: XOR<ChannelsCreateWithoutServerInput, ChannelsUncheckedCreateWithoutServerInput>
  }

  export type ChannelsCreateManyServerInputEnvelope = {
    data: ChannelsCreateManyServerInput | ChannelsCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesCreateWithoutServerInput = {
    id?: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutServerInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutServerInput, CategoriesUncheckedCreateWithoutServerInput>
  }

  export type CategoriesCreateManyServerInputEnvelope = {
    data: CategoriesCreateManyServerInput | CategoriesCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type RolesCreateWithoutServerInput = {
    id?: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesCreateOrConnectWithoutServerInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutServerInput, RolesUncheckedCreateWithoutServerInput>
  }

  export type RolesCreateManyServerInputEnvelope = {
    data: RolesCreateManyServerInput | RolesCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutOwned_serversInput = {
    update: XOR<UsersUpdateWithoutOwned_serversInput, UsersUncheckedUpdateWithoutOwned_serversInput>
    create: XOR<UsersCreateWithoutOwned_serversInput, UsersUncheckedCreateWithoutOwned_serversInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOwned_serversInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOwned_serversInput, UsersUncheckedUpdateWithoutOwned_serversInput>
  }

  export type UsersUpdateWithoutOwned_serversInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_members?: ServerMembersUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOwned_serversInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_members?: ServerMembersUncheckedUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServerMembersUpsertWithWhereUniqueWithoutServerInput = {
    where: ServerMembersWhereUniqueInput
    update: XOR<ServerMembersUpdateWithoutServerInput, ServerMembersUncheckedUpdateWithoutServerInput>
    create: XOR<ServerMembersCreateWithoutServerInput, ServerMembersUncheckedCreateWithoutServerInput>
  }

  export type ServerMembersUpdateWithWhereUniqueWithoutServerInput = {
    where: ServerMembersWhereUniqueInput
    data: XOR<ServerMembersUpdateWithoutServerInput, ServerMembersUncheckedUpdateWithoutServerInput>
  }

  export type ServerMembersUpdateManyWithWhereWithoutServerInput = {
    where: ServerMembersScalarWhereInput
    data: XOR<ServerMembersUpdateManyMutationInput, ServerMembersUncheckedUpdateManyWithoutServerInput>
  }

  export type ChannelsUpsertWithWhereUniqueWithoutServerInput = {
    where: ChannelsWhereUniqueInput
    update: XOR<ChannelsUpdateWithoutServerInput, ChannelsUncheckedUpdateWithoutServerInput>
    create: XOR<ChannelsCreateWithoutServerInput, ChannelsUncheckedCreateWithoutServerInput>
  }

  export type ChannelsUpdateWithWhereUniqueWithoutServerInput = {
    where: ChannelsWhereUniqueInput
    data: XOR<ChannelsUpdateWithoutServerInput, ChannelsUncheckedUpdateWithoutServerInput>
  }

  export type ChannelsUpdateManyWithWhereWithoutServerInput = {
    where: ChannelsScalarWhereInput
    data: XOR<ChannelsUpdateManyMutationInput, ChannelsUncheckedUpdateManyWithoutServerInput>
  }

  export type ChannelsScalarWhereInput = {
    AND?: ChannelsScalarWhereInput | ChannelsScalarWhereInput[]
    OR?: ChannelsScalarWhereInput[]
    NOT?: ChannelsScalarWhereInput | ChannelsScalarWhereInput[]
    id?: StringFilter<"Channels"> | string
    server_id?: StringFilter<"Channels"> | string
    name?: StringFilter<"Channels"> | string
    type?: EnumChannelTypeFilter<"Channels"> | $Enums.ChannelType
    topic?: StringNullableFilter<"Channels"> | string | null
    position?: IntFilter<"Channels"> | number
    category_id?: StringNullableFilter<"Channels"> | string | null
    is_nsfw?: BoolFilter<"Channels"> | boolean
    created_at?: DateTimeFilter<"Channels"> | Date | string
  }

  export type CategoriesUpsertWithWhereUniqueWithoutServerInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutServerInput, CategoriesUncheckedUpdateWithoutServerInput>
    create: XOR<CategoriesCreateWithoutServerInput, CategoriesUncheckedCreateWithoutServerInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutServerInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutServerInput, CategoriesUncheckedUpdateWithoutServerInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutServerInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutServerInput>
  }

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    OR?: CategoriesScalarWhereInput[]
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    id?: StringFilter<"Categories"> | string
    server_id?: StringFilter<"Categories"> | string
    name?: StringFilter<"Categories"> | string
    position?: IntFilter<"Categories"> | number
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
  }

  export type RolesUpsertWithWhereUniqueWithoutServerInput = {
    where: RolesWhereUniqueInput
    update: XOR<RolesUpdateWithoutServerInput, RolesUncheckedUpdateWithoutServerInput>
    create: XOR<RolesCreateWithoutServerInput, RolesUncheckedCreateWithoutServerInput>
  }

  export type RolesUpdateWithWhereUniqueWithoutServerInput = {
    where: RolesWhereUniqueInput
    data: XOR<RolesUpdateWithoutServerInput, RolesUncheckedUpdateWithoutServerInput>
  }

  export type RolesUpdateManyWithWhereWithoutServerInput = {
    where: RolesScalarWhereInput
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyWithoutServerInput>
  }

  export type RolesScalarWhereInput = {
    AND?: RolesScalarWhereInput | RolesScalarWhereInput[]
    OR?: RolesScalarWhereInput[]
    NOT?: RolesScalarWhereInput | RolesScalarWhereInput[]
    id?: StringFilter<"Roles"> | string
    server_id?: StringFilter<"Roles"> | string
    name?: StringFilter<"Roles"> | string
    color?: StringNullableFilter<"Roles"> | string | null
    permissions?: BigIntFilter<"Roles"> | bigint | number
    position?: IntFilter<"Roles"> | number
    is_mentionable?: BoolFilter<"Roles"> | boolean
    created_at?: DateTimeFilter<"Roles"> | Date | string
    updated_at?: DateTimeFilter<"Roles"> | Date | string
  }

  export type ServersCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: UsersCreateNestedOneWithoutOwned_serversInput
    channels?: ChannelsCreateNestedManyWithoutServerInput
    categories?: CategoriesCreateNestedManyWithoutServerInput
    roles?: RolesCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    owner_id: string
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelsUncheckedCreateNestedManyWithoutServerInput
    categories?: CategoriesUncheckedCreateNestedManyWithoutServerInput
    roles?: RolesUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutMembersInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutMembersInput, ServersUncheckedCreateWithoutMembersInput>
  }

  export type UsersCreateWithoutServer_membersInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersCreateNestedManyWithoutOwnerInput
    messages_reactions?: MessageReactionsCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutServer_membersInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersUncheckedCreateNestedManyWithoutOwnerInput
    messages_reactions?: MessageReactionsUncheckedCreateNestedManyWithoutUsersInput
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutServer_membersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutServer_membersInput, UsersUncheckedCreateWithoutServer_membersInput>
  }

  export type ServersUpsertWithoutMembersInput = {
    update: XOR<ServersUpdateWithoutMembersInput, ServersUncheckedUpdateWithoutMembersInput>
    create: XOR<ServersCreateWithoutMembersInput, ServersUncheckedCreateWithoutMembersInput>
    where?: ServersWhereInput
  }

  export type ServersUpdateToOneWithWhereWithoutMembersInput = {
    where?: ServersWhereInput
    data: XOR<ServersUpdateWithoutMembersInput, ServersUncheckedUpdateWithoutMembersInput>
  }

  export type ServersUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsersUpdateOneRequiredWithoutOwned_serversNestedInput
    channels?: ChannelsUpdateManyWithoutServerNestedInput
    categories?: CategoriesUpdateManyWithoutServerNestedInput
    roles?: RolesUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelsUncheckedUpdateManyWithoutServerNestedInput
    categories?: CategoriesUncheckedUpdateManyWithoutServerNestedInput
    roles?: RolesUncheckedUpdateManyWithoutServerNestedInput
  }

  export type UsersUpsertWithoutServer_membersInput = {
    update: XOR<UsersUpdateWithoutServer_membersInput, UsersUncheckedUpdateWithoutServer_membersInput>
    create: XOR<UsersCreateWithoutServer_membersInput, UsersUncheckedCreateWithoutServer_membersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutServer_membersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutServer_membersInput, UsersUncheckedUpdateWithoutServer_membersInput>
  }

  export type UsersUpdateWithoutServer_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUpdateManyWithoutOwnerNestedInput
    messages_reactions?: MessageReactionsUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutServer_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUncheckedUpdateManyWithoutOwnerNestedInput
    messages_reactions?: MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServersCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: UsersCreateNestedOneWithoutOwned_serversInput
    members?: ServerMembersCreateNestedManyWithoutServerInput
    channels?: ChannelsCreateNestedManyWithoutServerInput
    roles?: RolesCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    owner_id: string
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: ServerMembersUncheckedCreateNestedManyWithoutServerInput
    channels?: ChannelsUncheckedCreateNestedManyWithoutServerInput
    roles?: RolesUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutCategoriesInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutCategoriesInput, ServersUncheckedCreateWithoutCategoriesInput>
  }

  export type ChannelsCreateWithoutCategoryInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    is_nsfw?: boolean
    created_at?: Date | string
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutChannelInput
    server: ServersCreateNestedOneWithoutChannelsInput
  }

  export type ChannelsUncheckedCreateWithoutCategoryInput = {
    id?: string
    server_id: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    is_nsfw?: boolean
    created_at?: Date | string
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelsCreateOrConnectWithoutCategoryInput = {
    where: ChannelsWhereUniqueInput
    create: XOR<ChannelsCreateWithoutCategoryInput, ChannelsUncheckedCreateWithoutCategoryInput>
  }

  export type ChannelsCreateManyCategoryInputEnvelope = {
    data: ChannelsCreateManyCategoryInput | ChannelsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServersUpsertWithoutCategoriesInput = {
    update: XOR<ServersUpdateWithoutCategoriesInput, ServersUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ServersCreateWithoutCategoriesInput, ServersUncheckedCreateWithoutCategoriesInput>
    where?: ServersWhereInput
  }

  export type ServersUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ServersWhereInput
    data: XOR<ServersUpdateWithoutCategoriesInput, ServersUncheckedUpdateWithoutCategoriesInput>
  }

  export type ServersUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsersUpdateOneRequiredWithoutOwned_serversNestedInput
    members?: ServerMembersUpdateManyWithoutServerNestedInput
    channels?: ChannelsUpdateManyWithoutServerNestedInput
    roles?: RolesUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ServerMembersUncheckedUpdateManyWithoutServerNestedInput
    channels?: ChannelsUncheckedUpdateManyWithoutServerNestedInput
    roles?: RolesUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ChannelsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ChannelsWhereUniqueInput
    update: XOR<ChannelsUpdateWithoutCategoryInput, ChannelsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ChannelsCreateWithoutCategoryInput, ChannelsUncheckedCreateWithoutCategoryInput>
  }

  export type ChannelsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ChannelsWhereUniqueInput
    data: XOR<ChannelsUpdateWithoutCategoryInput, ChannelsUncheckedUpdateWithoutCategoryInput>
  }

  export type ChannelsUpdateManyWithWhereWithoutCategoryInput = {
    where: ChannelsScalarWhereInput
    data: XOR<ChannelsUpdateManyMutationInput, ChannelsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ChannelPermissionsCreateWithoutChannelInput = {
    id?: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
    role: RolesCreateNestedOneWithoutChannel_permissionsInput
    user: UsersCreateNestedOneWithoutChannel_permissionsInput
  }

  export type ChannelPermissionsUncheckedCreateWithoutChannelInput = {
    id?: string
    role_id: string
    user_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsCreateOrConnectWithoutChannelInput = {
    where: ChannelPermissionsWhereUniqueInput
    create: XOR<ChannelPermissionsCreateWithoutChannelInput, ChannelPermissionsUncheckedCreateWithoutChannelInput>
  }

  export type ChannelPermissionsCreateManyChannelInputEnvelope = {
    data: ChannelPermissionsCreateManyChannelInput | ChannelPermissionsCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ServersCreateWithoutChannelsInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: UsersCreateNestedOneWithoutOwned_serversInput
    members?: ServerMembersCreateNestedManyWithoutServerInput
    categories?: CategoriesCreateNestedManyWithoutServerInput
    roles?: RolesCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutChannelsInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    owner_id: string
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: ServerMembersUncheckedCreateNestedManyWithoutServerInput
    categories?: CategoriesUncheckedCreateNestedManyWithoutServerInput
    roles?: RolesUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutChannelsInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutChannelsInput, ServersUncheckedCreateWithoutChannelsInput>
  }

  export type CategoriesCreateWithoutChannelsInput = {
    id?: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
    server: ServersCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateWithoutChannelsInput = {
    id?: string
    server_id: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutChannelsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutChannelsInput, CategoriesUncheckedCreateWithoutChannelsInput>
  }

  export type ChannelPermissionsUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelPermissionsWhereUniqueInput
    update: XOR<ChannelPermissionsUpdateWithoutChannelInput, ChannelPermissionsUncheckedUpdateWithoutChannelInput>
    create: XOR<ChannelPermissionsCreateWithoutChannelInput, ChannelPermissionsUncheckedCreateWithoutChannelInput>
  }

  export type ChannelPermissionsUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelPermissionsWhereUniqueInput
    data: XOR<ChannelPermissionsUpdateWithoutChannelInput, ChannelPermissionsUncheckedUpdateWithoutChannelInput>
  }

  export type ChannelPermissionsUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelPermissionsScalarWhereInput
    data: XOR<ChannelPermissionsUpdateManyMutationInput, ChannelPermissionsUncheckedUpdateManyWithoutChannelInput>
  }

  export type ServersUpsertWithoutChannelsInput = {
    update: XOR<ServersUpdateWithoutChannelsInput, ServersUncheckedUpdateWithoutChannelsInput>
    create: XOR<ServersCreateWithoutChannelsInput, ServersUncheckedCreateWithoutChannelsInput>
    where?: ServersWhereInput
  }

  export type ServersUpdateToOneWithWhereWithoutChannelsInput = {
    where?: ServersWhereInput
    data: XOR<ServersUpdateWithoutChannelsInput, ServersUncheckedUpdateWithoutChannelsInput>
  }

  export type ServersUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsersUpdateOneRequiredWithoutOwned_serversNestedInput
    members?: ServerMembersUpdateManyWithoutServerNestedInput
    categories?: CategoriesUpdateManyWithoutServerNestedInput
    roles?: RolesUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ServerMembersUncheckedUpdateManyWithoutServerNestedInput
    categories?: CategoriesUncheckedUpdateManyWithoutServerNestedInput
    roles?: RolesUncheckedUpdateManyWithoutServerNestedInput
  }

  export type CategoriesUpsertWithoutChannelsInput = {
    update: XOR<CategoriesUpdateWithoutChannelsInput, CategoriesUncheckedUpdateWithoutChannelsInput>
    create: XOR<CategoriesCreateWithoutChannelsInput, CategoriesUncheckedCreateWithoutChannelsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutChannelsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutChannelsInput, CategoriesUncheckedUpdateWithoutChannelsInput>
  }

  export type CategoriesUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServersUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateWithoutRepliesInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
    reply_to?: MessagesCreateNestedOneWithoutRepliesInput
    attatachments?: MessageAttachmentsCreateNestedManyWithoutMessageInput
    message_rections?: MessageReactionsCreateNestedManyWithoutMessageInput
  }

  export type MessagesUncheckedCreateWithoutRepliesInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    reply_to_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    attatachments?: MessageAttachmentsUncheckedCreateNestedManyWithoutMessageInput
    message_rections?: MessageReactionsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessagesCreateOrConnectWithoutRepliesInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutRepliesInput, MessagesUncheckedCreateWithoutRepliesInput>
  }

  export type MessagesCreateWithoutReply_toInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
    replies?: MessagesCreateNestedManyWithoutReply_toInput
    attatachments?: MessageAttachmentsCreateNestedManyWithoutMessageInput
    message_rections?: MessageReactionsCreateNestedManyWithoutMessageInput
  }

  export type MessagesUncheckedCreateWithoutReply_toInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
    replies?: MessagesUncheckedCreateNestedManyWithoutReply_toInput
    attatachments?: MessageAttachmentsUncheckedCreateNestedManyWithoutMessageInput
    message_rections?: MessageReactionsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessagesCreateOrConnectWithoutReply_toInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutReply_toInput, MessagesUncheckedCreateWithoutReply_toInput>
  }

  export type MessagesCreateManyReply_toInputEnvelope = {
    data: MessagesCreateManyReply_toInput | MessagesCreateManyReply_toInput[]
    skipDuplicates?: boolean
  }

  export type MessageAttachmentsCreateWithoutMessageInput = {
    id?: string
    filename: string
    file_url: string
    file_size: number
  }

  export type MessageAttachmentsUncheckedCreateWithoutMessageInput = {
    id?: string
    filename: string
    file_url: string
    file_size: number
  }

  export type MessageAttachmentsCreateOrConnectWithoutMessageInput = {
    where: MessageAttachmentsWhereUniqueInput
    create: XOR<MessageAttachmentsCreateWithoutMessageInput, MessageAttachmentsUncheckedCreateWithoutMessageInput>
  }

  export type MessageAttachmentsCreateManyMessageInputEnvelope = {
    data: MessageAttachmentsCreateManyMessageInput | MessageAttachmentsCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageReactionsCreateWithoutMessageInput = {
    id?: string
    emoji: string
    created_at?: Date | string
    users: UsersCreateNestedOneWithoutMessages_reactionsInput
  }

  export type MessageReactionsUncheckedCreateWithoutMessageInput = {
    id?: string
    user_id: string
    emoji: string
    created_at?: Date | string
  }

  export type MessageReactionsCreateOrConnectWithoutMessageInput = {
    where: MessageReactionsWhereUniqueInput
    create: XOR<MessageReactionsCreateWithoutMessageInput, MessageReactionsUncheckedCreateWithoutMessageInput>
  }

  export type MessageReactionsCreateManyMessageInputEnvelope = {
    data: MessageReactionsCreateManyMessageInput | MessageReactionsCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessagesUpsertWithoutRepliesInput = {
    update: XOR<MessagesUpdateWithoutRepliesInput, MessagesUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessagesCreateWithoutRepliesInput, MessagesUncheckedCreateWithoutRepliesInput>
    where?: MessagesWhereInput
  }

  export type MessagesUpdateToOneWithWhereWithoutRepliesInput = {
    where?: MessagesWhereInput
    data: XOR<MessagesUpdateWithoutRepliesInput, MessagesUncheckedUpdateWithoutRepliesInput>
  }

  export type MessagesUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reply_to?: MessagesUpdateOneWithoutRepliesNestedInput
    attatachments?: MessageAttachmentsUpdateManyWithoutMessageNestedInput
    message_rections?: MessageReactionsUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    reply_to_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attatachments?: MessageAttachmentsUncheckedUpdateManyWithoutMessageNestedInput
    message_rections?: MessageReactionsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUpsertWithWhereUniqueWithoutReply_toInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutReply_toInput, MessagesUncheckedUpdateWithoutReply_toInput>
    create: XOR<MessagesCreateWithoutReply_toInput, MessagesUncheckedCreateWithoutReply_toInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutReply_toInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutReply_toInput, MessagesUncheckedUpdateWithoutReply_toInput>
  }

  export type MessagesUpdateManyWithWhereWithoutReply_toInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutReply_toInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    channel_id?: StringFilter<"Messages"> | string
    author_id?: StringFilter<"Messages"> | string
    content?: StringFilter<"Messages"> | string
    message_type?: EnumMessagetypeFilter<"Messages"> | $Enums.Messagetype
    reply_to_id?: StringNullableFilter<"Messages"> | string | null
    created_at?: DateTimeFilter<"Messages"> | Date | string
    updated_at?: DateTimeFilter<"Messages"> | Date | string
  }

  export type MessageAttachmentsUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageAttachmentsWhereUniqueInput
    update: XOR<MessageAttachmentsUpdateWithoutMessageInput, MessageAttachmentsUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageAttachmentsCreateWithoutMessageInput, MessageAttachmentsUncheckedCreateWithoutMessageInput>
  }

  export type MessageAttachmentsUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageAttachmentsWhereUniqueInput
    data: XOR<MessageAttachmentsUpdateWithoutMessageInput, MessageAttachmentsUncheckedUpdateWithoutMessageInput>
  }

  export type MessageAttachmentsUpdateManyWithWhereWithoutMessageInput = {
    where: MessageAttachmentsScalarWhereInput
    data: XOR<MessageAttachmentsUpdateManyMutationInput, MessageAttachmentsUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageAttachmentsScalarWhereInput = {
    AND?: MessageAttachmentsScalarWhereInput | MessageAttachmentsScalarWhereInput[]
    OR?: MessageAttachmentsScalarWhereInput[]
    NOT?: MessageAttachmentsScalarWhereInput | MessageAttachmentsScalarWhereInput[]
    id?: StringFilter<"MessageAttachments"> | string
    messages_id?: StringFilter<"MessageAttachments"> | string
    filename?: StringFilter<"MessageAttachments"> | string
    file_url?: StringFilter<"MessageAttachments"> | string
    file_size?: IntFilter<"MessageAttachments"> | number
  }

  export type MessageReactionsUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageReactionsWhereUniqueInput
    update: XOR<MessageReactionsUpdateWithoutMessageInput, MessageReactionsUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageReactionsCreateWithoutMessageInput, MessageReactionsUncheckedCreateWithoutMessageInput>
  }

  export type MessageReactionsUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageReactionsWhereUniqueInput
    data: XOR<MessageReactionsUpdateWithoutMessageInput, MessageReactionsUncheckedUpdateWithoutMessageInput>
  }

  export type MessageReactionsUpdateManyWithWhereWithoutMessageInput = {
    where: MessageReactionsScalarWhereInput
    data: XOR<MessageReactionsUpdateManyMutationInput, MessageReactionsUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessagesCreateWithoutAttatachmentsInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
    reply_to?: MessagesCreateNestedOneWithoutRepliesInput
    replies?: MessagesCreateNestedManyWithoutReply_toInput
    message_rections?: MessageReactionsCreateNestedManyWithoutMessageInput
  }

  export type MessagesUncheckedCreateWithoutAttatachmentsInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    reply_to_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: MessagesUncheckedCreateNestedManyWithoutReply_toInput
    message_rections?: MessageReactionsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessagesCreateOrConnectWithoutAttatachmentsInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutAttatachmentsInput, MessagesUncheckedCreateWithoutAttatachmentsInput>
  }

  export type MessagesUpsertWithoutAttatachmentsInput = {
    update: XOR<MessagesUpdateWithoutAttatachmentsInput, MessagesUncheckedUpdateWithoutAttatachmentsInput>
    create: XOR<MessagesCreateWithoutAttatachmentsInput, MessagesUncheckedCreateWithoutAttatachmentsInput>
    where?: MessagesWhereInput
  }

  export type MessagesUpdateToOneWithWhereWithoutAttatachmentsInput = {
    where?: MessagesWhereInput
    data: XOR<MessagesUpdateWithoutAttatachmentsInput, MessagesUncheckedUpdateWithoutAttatachmentsInput>
  }

  export type MessagesUpdateWithoutAttatachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reply_to?: MessagesUpdateOneWithoutRepliesNestedInput
    replies?: MessagesUpdateManyWithoutReply_toNestedInput
    message_rections?: MessageReactionsUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutAttatachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    reply_to_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessagesUncheckedUpdateManyWithoutReply_toNestedInput
    message_rections?: MessageReactionsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessagesCreateWithoutMessage_rectionsInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
    reply_to?: MessagesCreateNestedOneWithoutRepliesInput
    replies?: MessagesCreateNestedManyWithoutReply_toInput
    attatachments?: MessageAttachmentsCreateNestedManyWithoutMessageInput
  }

  export type MessagesUncheckedCreateWithoutMessage_rectionsInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    reply_to_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: MessagesUncheckedCreateNestedManyWithoutReply_toInput
    attatachments?: MessageAttachmentsUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessagesCreateOrConnectWithoutMessage_rectionsInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutMessage_rectionsInput, MessagesUncheckedCreateWithoutMessage_rectionsInput>
  }

  export type UsersCreateWithoutMessages_reactionsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersCreateNestedManyWithoutUserInput
    channel_permissions?: ChannelPermissionsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMessages_reactionsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersUncheckedCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersUncheckedCreateNestedManyWithoutUserInput
    channel_permissions?: ChannelPermissionsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMessages_reactionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMessages_reactionsInput, UsersUncheckedCreateWithoutMessages_reactionsInput>
  }

  export type MessagesUpsertWithoutMessage_rectionsInput = {
    update: XOR<MessagesUpdateWithoutMessage_rectionsInput, MessagesUncheckedUpdateWithoutMessage_rectionsInput>
    create: XOR<MessagesCreateWithoutMessage_rectionsInput, MessagesUncheckedCreateWithoutMessage_rectionsInput>
    where?: MessagesWhereInput
  }

  export type MessagesUpdateToOneWithWhereWithoutMessage_rectionsInput = {
    where?: MessagesWhereInput
    data: XOR<MessagesUpdateWithoutMessage_rectionsInput, MessagesUncheckedUpdateWithoutMessage_rectionsInput>
  }

  export type MessagesUpdateWithoutMessage_rectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reply_to?: MessagesUpdateOneWithoutRepliesNestedInput
    replies?: MessagesUpdateManyWithoutReply_toNestedInput
    attatachments?: MessageAttachmentsUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutMessage_rectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    reply_to_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessagesUncheckedUpdateManyWithoutReply_toNestedInput
    attatachments?: MessageAttachmentsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UsersUpsertWithoutMessages_reactionsInput = {
    update: XOR<UsersUpdateWithoutMessages_reactionsInput, UsersUncheckedUpdateWithoutMessages_reactionsInput>
    create: XOR<UsersCreateWithoutMessages_reactionsInput, UsersUncheckedCreateWithoutMessages_reactionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMessages_reactionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMessages_reactionsInput, UsersUncheckedUpdateWithoutMessages_reactionsInput>
  }

  export type UsersUpdateWithoutMessages_reactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUpdateManyWithoutUserNestedInput
    channel_permissions?: ChannelPermissionsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMessages_reactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUncheckedUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUncheckedUpdateManyWithoutUserNestedInput
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServersCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: UsersCreateNestedOneWithoutOwned_serversInput
    members?: ServerMembersCreateNestedManyWithoutServerInput
    channels?: ChannelsCreateNestedManyWithoutServerInput
    categories?: CategoriesCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    owner_id: string
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
    members?: ServerMembersUncheckedCreateNestedManyWithoutServerInput
    channels?: ChannelsUncheckedCreateNestedManyWithoutServerInput
    categories?: CategoriesUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutRolesInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutRolesInput, ServersUncheckedCreateWithoutRolesInput>
  }

  export type ChannelPermissionsCreateWithoutRoleInput = {
    id?: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
    channel: ChannelsCreateNestedOneWithoutChannel_permissionsInput
    user: UsersCreateNestedOneWithoutChannel_permissionsInput
  }

  export type ChannelPermissionsUncheckedCreateWithoutRoleInput = {
    id?: string
    channel_id: string
    user_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsCreateOrConnectWithoutRoleInput = {
    where: ChannelPermissionsWhereUniqueInput
    create: XOR<ChannelPermissionsCreateWithoutRoleInput, ChannelPermissionsUncheckedCreateWithoutRoleInput>
  }

  export type ChannelPermissionsCreateManyRoleInputEnvelope = {
    data: ChannelPermissionsCreateManyRoleInput | ChannelPermissionsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ServersUpsertWithoutRolesInput = {
    update: XOR<ServersUpdateWithoutRolesInput, ServersUncheckedUpdateWithoutRolesInput>
    create: XOR<ServersCreateWithoutRolesInput, ServersUncheckedCreateWithoutRolesInput>
    where?: ServersWhereInput
  }

  export type ServersUpdateToOneWithWhereWithoutRolesInput = {
    where?: ServersWhereInput
    data: XOR<ServersUpdateWithoutRolesInput, ServersUncheckedUpdateWithoutRolesInput>
  }

  export type ServersUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsersUpdateOneRequiredWithoutOwned_serversNestedInput
    members?: ServerMembersUpdateManyWithoutServerNestedInput
    channels?: ChannelsUpdateManyWithoutServerNestedInput
    categories?: CategoriesUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ServerMembersUncheckedUpdateManyWithoutServerNestedInput
    channels?: ChannelsUncheckedUpdateManyWithoutServerNestedInput
    categories?: CategoriesUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ChannelPermissionsUpsertWithWhereUniqueWithoutRoleInput = {
    where: ChannelPermissionsWhereUniqueInput
    update: XOR<ChannelPermissionsUpdateWithoutRoleInput, ChannelPermissionsUncheckedUpdateWithoutRoleInput>
    create: XOR<ChannelPermissionsCreateWithoutRoleInput, ChannelPermissionsUncheckedCreateWithoutRoleInput>
  }

  export type ChannelPermissionsUpdateWithWhereUniqueWithoutRoleInput = {
    where: ChannelPermissionsWhereUniqueInput
    data: XOR<ChannelPermissionsUpdateWithoutRoleInput, ChannelPermissionsUncheckedUpdateWithoutRoleInput>
  }

  export type ChannelPermissionsUpdateManyWithWhereWithoutRoleInput = {
    where: ChannelPermissionsScalarWhereInput
    data: XOR<ChannelPermissionsUpdateManyMutationInput, ChannelPermissionsUncheckedUpdateManyWithoutRoleInput>
  }

  export type ChannelsCreateWithoutChannel_permissionsInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    is_nsfw?: boolean
    created_at?: Date | string
    server: ServersCreateNestedOneWithoutChannelsInput
    category?: CategoriesCreateNestedOneWithoutChannelsInput
  }

  export type ChannelsUncheckedCreateWithoutChannel_permissionsInput = {
    id?: string
    server_id: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    category_id?: string | null
    is_nsfw?: boolean
    created_at?: Date | string
  }

  export type ChannelsCreateOrConnectWithoutChannel_permissionsInput = {
    where: ChannelsWhereUniqueInput
    create: XOR<ChannelsCreateWithoutChannel_permissionsInput, ChannelsUncheckedCreateWithoutChannel_permissionsInput>
  }

  export type RolesCreateWithoutChannel_permissionsInput = {
    id?: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    server: ServersCreateNestedOneWithoutRolesInput
  }

  export type RolesUncheckedCreateWithoutChannel_permissionsInput = {
    id?: string
    server_id: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesCreateOrConnectWithoutChannel_permissionsInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutChannel_permissionsInput, RolesUncheckedCreateWithoutChannel_permissionsInput>
  }

  export type UsersCreateWithoutChannel_permissionsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsCreateNestedManyWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutChannel_permissionsInput = {
    id?: string
    email: string
    emailVerification?: Date | string | null
    image?: string | null
    username: string
    display_name: string
    avatar_url?: string | null
    status?: $Enums.UserStatus
    created_at?: Date | string
    updated_at?: Date | string
    owned_servers?: ServersUncheckedCreateNestedManyWithoutOwnerInput
    server_members?: ServerMembersUncheckedCreateNestedManyWithoutUserInput
    messages_reactions?: MessageReactionsUncheckedCreateNestedManyWithoutUsersInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutChannel_permissionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChannel_permissionsInput, UsersUncheckedCreateWithoutChannel_permissionsInput>
  }

  export type ChannelsUpsertWithoutChannel_permissionsInput = {
    update: XOR<ChannelsUpdateWithoutChannel_permissionsInput, ChannelsUncheckedUpdateWithoutChannel_permissionsInput>
    create: XOR<ChannelsCreateWithoutChannel_permissionsInput, ChannelsUncheckedCreateWithoutChannel_permissionsInput>
    where?: ChannelsWhereInput
  }

  export type ChannelsUpdateToOneWithWhereWithoutChannel_permissionsInput = {
    where?: ChannelsWhereInput
    data: XOR<ChannelsUpdateWithoutChannel_permissionsInput, ChannelsUncheckedUpdateWithoutChannel_permissionsInput>
  }

  export type ChannelsUpdateWithoutChannel_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServersUpdateOneRequiredWithoutChannelsNestedInput
    category?: CategoriesUpdateOneWithoutChannelsNestedInput
  }

  export type ChannelsUncheckedUpdateWithoutChannel_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUpsertWithoutChannel_permissionsInput = {
    update: XOR<RolesUpdateWithoutChannel_permissionsInput, RolesUncheckedUpdateWithoutChannel_permissionsInput>
    create: XOR<RolesCreateWithoutChannel_permissionsInput, RolesUncheckedCreateWithoutChannel_permissionsInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutChannel_permissionsInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutChannel_permissionsInput, RolesUncheckedUpdateWithoutChannel_permissionsInput>
  }

  export type RolesUpdateWithoutChannel_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServersUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateWithoutChannel_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpsertWithoutChannel_permissionsInput = {
    update: XOR<UsersUpdateWithoutChannel_permissionsInput, UsersUncheckedUpdateWithoutChannel_permissionsInput>
    create: XOR<UsersCreateWithoutChannel_permissionsInput, UsersUncheckedCreateWithoutChannel_permissionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChannel_permissionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChannel_permissionsInput, UsersUncheckedUpdateWithoutChannel_permissionsInput>
  }

  export type UsersUpdateWithoutChannel_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUpdateManyWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutChannel_permissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owned_servers?: ServersUncheckedUpdateManyWithoutOwnerNestedInput
    server_members?: ServerMembersUncheckedUpdateManyWithoutUserNestedInput
    messages_reactions?: MessageReactionsUncheckedUpdateManyWithoutUsersNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServersCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    icon_url?: string | null
    banner_url?: string | null
    invite_code: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServerMembersCreateManyUserInput = {
    id?: string
    server_id: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageReactionsCreateManyUsersInput = {
    id?: string
    message_id?: string | null
    emoji: string
    created_at?: Date | string
  }

  export type ChannelPermissionsCreateManyUserInput = {
    id?: string
    channel_id: string
    role_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type AccountCreateManyUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServersUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ServerMembersUpdateManyWithoutServerNestedInput
    channels?: ChannelsUpdateManyWithoutServerNestedInput
    categories?: CategoriesUpdateManyWithoutServerNestedInput
    roles?: RolesUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ServerMembersUncheckedUpdateManyWithoutServerNestedInput
    channels?: ChannelsUncheckedUpdateManyWithoutServerNestedInput
    categories?: CategoriesUncheckedUpdateManyWithoutServerNestedInput
    roles?: RolesUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
    server?: ServersUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ServerMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageReactionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessagesUpdateOneWithoutMessage_rectionsNestedInput
  }

  export type MessageReactionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelPermissionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    channel?: ChannelsUpdateOneRequiredWithoutChannel_permissionsNestedInput
    role?: RolesUpdateOneRequiredWithoutChannel_permissionsNestedInput
  }

  export type ChannelPermissionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChannelPermissionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerMembersCreateManyServerInput = {
    id?: string
    user_id: string
    nickname?: string | null
    joined_at?: Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChannelsCreateManyServerInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    category_id?: string | null
    is_nsfw?: boolean
    created_at?: Date | string
  }

  export type CategoriesCreateManyServerInput = {
    id?: string
    name: string
    position: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesCreateManyServerInput = {
    id?: string
    name: string
    color?: string | null
    permissions: bigint | number
    position: number
    is_mentionable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServerMembersUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
    user?: UsersUpdateOneRequiredWithoutServer_membersNestedInput
  }

  export type ServerMembersUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ServerMembersUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChannelsUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUpdateManyWithoutChannelNestedInput
    category?: CategoriesUpdateOneWithoutChannelsNestedInput
  }

  export type ChannelsUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    position?: IntFieldUpdateOperationsInput | number
    is_mentionable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelsCreateManyCategoryInput = {
    id?: string
    server_id: string
    name: string
    type?: $Enums.ChannelType
    topic?: string | null
    position: number
    is_nsfw?: boolean
    created_at?: Date | string
  }

  export type ChannelsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUpdateManyWithoutChannelNestedInput
    server?: ServersUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type ChannelsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel_permissions?: ChannelPermissionsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    server_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    is_nsfw?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelPermissionsCreateManyChannelInput = {
    id?: string
    role_id: string
    user_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: RolesUpdateOneRequiredWithoutChannel_permissionsNestedInput
    user?: UsersUpdateOneRequiredWithoutChannel_permissionsNestedInput
  }

  export type ChannelPermissionsUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChannelPermissionsUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MessagesCreateManyReply_toInput = {
    id?: string
    channel_id: string
    author_id: string
    content: string
    message_type?: $Enums.Messagetype
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MessageAttachmentsCreateManyMessageInput = {
    id?: string
    filename: string
    file_url: string
    file_size: number
  }

  export type MessageReactionsCreateManyMessageInput = {
    id?: string
    user_id: string
    emoji: string
    created_at?: Date | string
  }

  export type MessagesUpdateWithoutReply_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessagesUpdateManyWithoutReply_toNestedInput
    attatachments?: MessageAttachmentsUpdateManyWithoutMessageNestedInput
    message_rections?: MessageReactionsUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateWithoutReply_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessagesUncheckedUpdateManyWithoutReply_toNestedInput
    attatachments?: MessageAttachmentsUncheckedUpdateManyWithoutMessageNestedInput
    message_rections?: MessageReactionsUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessagesUncheckedUpdateManyWithoutReply_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessagetypeFieldUpdateOperationsInput | $Enums.Messagetype
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageAttachmentsUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
  }

  export type MessageAttachmentsUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
  }

  export type MessageAttachmentsUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_size?: IntFieldUpdateOperationsInput | number
  }

  export type MessageReactionsUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutMessages_reactionsNestedInput
  }

  export type MessageReactionsUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionsUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelPermissionsCreateManyRoleInput = {
    id?: string
    channel_id: string
    user_id: string
    allow_permissions: bigint | number
    deny_permissions: bigint | number
  }

  export type ChannelPermissionsUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    channel?: ChannelsUpdateOneRequiredWithoutChannel_permissionsNestedInput
    user?: UsersUpdateOneRequiredWithoutChannel_permissionsNestedInput
  }

  export type ChannelPermissionsUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChannelPermissionsUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    allow_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
    deny_permissions?: BigIntFieldUpdateOperationsInput | bigint | number
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