import { useSyncExternalStore } from "react";
import { ExternalStore } from "./ExternalStore";
import { ExternalStoreAsync } from "./ExternalStoreAsync";

type MakeExternalStore<S extends typeof ExternalStore<T>, T = unknown> = {
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
export function makeExternalStore<S extends typeof ExternalStore<T>, T>(
  Store: S,
  ...params: ConstructorParameters<S>
): MakeExternalStore<S, T> {
  const store = new Store(...params);
  const reset = () => {
    store.set.bind(store)(...params);
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
