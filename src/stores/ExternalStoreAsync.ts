import { memoize, Memoize } from "../utils/memoize";
import { ExternalStore } from "./ExternalStore";
import { ExternalStoreRecord } from "./ExternalStoreRecord";

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any

/**
 * ExternalStore<T> with a promise interface.
 * @example
 * function fetchUser(userId: number): Promise<User> {
 *   return fetch(...).then(res => res.json())
 * }
 * const userStore = new ExternalStoreAsync(fetchUser);
 * userStore.get(1).then(user => ...)
 */
export class ExternalStoreAsync<
  P extends (...args: any[]) => Promise<any>,
  T = AsyncReturnType<P>
> extends ExternalStoreRecord<Record<string, AsyncReturnType<P>>> {
  declare serializeParams: (...args: Parameters<P>) => string;
  declare private promise: P;
  declare private call: Memoize<(...args: Parameters<P>) => Promise<T>>
  private paramsListeners: Record<string, (() => void)[]> = {};

  constructor(promise: P) {
    super({});
    this.promise = promise;
    this.call = memoize((...args: Parameters<P>) =>
      this.promise(...args).then(this.setValue.bind(this)));
  }

  subscribeParams(...args: Parameters<P>) {
    const key = JSON.stringify(args);
    return (listener: () => void) => {
      this.paramsListeners[key] = [...this.paramsListeners[key] ?? [], listener];
      return () => {
        this.paramsListeners[key] = this.paramsListeners[key].filter((l) => l !== listener);
      };
    };
  }

  getSnapshotParams(...args: Parameters<P>) {
    const key = this.serializeParams(...args);
    return () => this.value[key];
  }

  reset(...params: Parameters<P>) {
    super.reset();
    this.call.reset(...params);
  }
}
