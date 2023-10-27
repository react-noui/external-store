import { memoize, Memoize } from "../utils/memoize";
import { ExternalStore } from "./ExternalStore";

/**
 * ExternalStore<T> with a promise interface.
 * @example
 * function fetchUser(userId: number): Promise<User> {
 *   return fetch(...).then(res => res.json())
 * }
 * class UserStore extends ExternalStoreAsync<User> {
 *   promise = fetchUser
 * }
 * const userStore = new UserStore();
 * userStore.get(1).then(user => ...)
 */
export class ExternalStoreAsync<T> extends ExternalStore<T> {
  error?: Error;
  declare readonly promise: (...args: any[]) => Promise<T>;
  declare get: Memoize<(...args: Parameters<typeof this['promise']>) => Promise<T>>

  constructor(initialValue?: T | undefined, promise?: (...args: any[]) => Promise<T>) {
    super(initialValue);
    this.promise = this.promise || promise;
    this.get = memoize(
      (
        ...args: Parameters<typeof this['promise']>
      ) => this.promise(...args)
        .then(this.set.bind(this))
        .then(() => this.value as T)
      );
  }

  reset(...params: Parameters<typeof this['promise']>) {
    super.reset();
    this.get.reset(...params);
  }
}
