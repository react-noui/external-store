import { useSyncExternalStore } from "react";
import { ExternalStore } from "./ExternalStore";

type MakeExternalStore<T, S extends typeof ExternalStore<T>> = {
  store: InstanceType<S>;
  reset: () => void;
  useValue: () => InstanceType<S>['value'];
};
/**
 * 
 * @param ExternalStore `typeof ExternalStore` you provide.
 * @example
 * class MyStore extends ExternalStore<{ result: string[]; limit: number; }> {}
 * const resultStore = makeExternalStore(MyStore);
 * function MyComponent() {
 *   const results = resultStore.useValue();
 *   return <>{result.map(...)}</>
 * }
 * // Or with a suspense approach...
 * function useResults() {
 *   const results = resultStore.useValue();
 *   if (!results) throw resultStore.get();
 *   return results;
 * }
 * function MyComponent() {
 *   return <Suspense fallback={<div>Loading…</div>}>
 *     <MyComponent />
 *   </Suspense>;
 * }
 * function MyComponent() {
 *   const results = useResults();
 *   return <>{result.map(...)}</>
 * }
 */
export function makeExternalStore<T extends unknown, S extends typeof ExternalStore<T>>(
  Store: S,
  initializer: T | undefined = undefined,
): MakeExternalStore<T, S> {
  const store = new Store(initializer);
  const reset = () => {
    store.set.bind(store)(initializer);
  };
  const useValue = () => useSyncExternalStore(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store),
  );
  return {
    store: store as InstanceType<S>,
    reset,
    useValue,
  }
}
