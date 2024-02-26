import { AsyncReturnType, Memoize, memoize } from "../utils/memoize";
import { ExternalStore } from "./ExternalStore";
import { ExternalStoreMap } from "./ExternalStoreMap";

/**
 * ExternalStore<T> with a promise interface.
 * @example
 * function fetchUser(userId: number): Promise<User> {
 *   return fetch(...).then(res => res.json())
 * }
 * const userStore = new ExternalStoreAsync(fetchUser);
 * const user = await userStore.call(1);
 */
export class ExternalStoreAsync<
  P extends (...args: any[]) => Promise<any>,
  T = AsyncReturnType<P>
> extends ExternalStore<undefined> {
  declare key: (value: T) => string | number;
  declare promise: Memoize<P>;
  private listenersParams: Record<string, (() => void)[]> = {};

  constructor(promise: P) {
    super(undefined);
    this.promise = memoize(promise, this.argsKey);
  }

  argsKey = (...args: Parameters<P>) => JSON.stringify(args);

  getValue = (...args: Parameters<P>) => {
    return this.getSnapshotParams(...args);
  }

  call = async (...args: Parameters<P>) => {
    await this.promise(...args);
    this.emitChangeParams(this.argsKey(...args));
  }

  subscribeParams = (...args: Parameters<P>) => {
    const key = this.argsKey(...args);
    return (listener: () => void) => {
      this.listenersParams[key] = [...this.listenersParams[key] ?? [], listener];
      return () => {
        this.listenersParams[key] = this.listenersParams[key].filter((l) => l !== listener);
      };
    };
  }

  getSnapshotParams = (...args: Parameters<P>) => this.promise.cache.get(...args);

  emitChangeParams(key: string) {
    (this.listenersParams[key] ?? []).forEach((listen) => listen());
  }

  reset = (...args: Parameters<P>) => {
    this.promise.cache.delete(...args);
    const key = this.argsKey(...args);
    this.emitChangeParams(key);
  }
}
