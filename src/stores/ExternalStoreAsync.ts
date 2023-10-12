import { memoize } from "../utils/memoize";
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
  declare readonly promise: (...args: any[]) => Promise<T>;
  error?: Error;

  get get() {
    return memoize(
      (
        ...args: Parameters<typeof this['promise']>
      ) => this.promise(...args)
        .then(this.set.bind(this))
        .then(() => this.value)
    );
  }
}
