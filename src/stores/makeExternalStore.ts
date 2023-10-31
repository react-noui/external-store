import { useSyncExternalStore } from "react";
import { ExternalStore } from "./ExternalStore";
import { ExternalStoreAsync } from "./ExternalStoreAsync";

// type MakeExternalStore<S extends typeof ExternalStore<T>, T = any> = 
// S extends typeof ExternalStoreAsync<T> ? {
//   readonly store: InstanceType<S>;
//   readonly reset: () => void;
//   readonly useValue: () => T | undefined;
// } : {
//   readonly store: InstanceType<S>;
//   readonly reset: () => void;
//   readonly useValue: () => T | undefined;
// };
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
export function makeExternalStore<
  S extends typeof ExternalStore<T> | typeof ExternalStoreAsync<T>,
  T
>(
    Store: S,
    ...params: ConstructorParameters<S>
) {
  const store = new Store(...params);
  const reset = () => {
    store.set.bind(store)(...params);
  };
  const useValue = () => useSyncExternalStore<T | undefined>(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store),
  );
  return {
    store: store as InstanceType<S>,
    reset,
    useValue: useValue as () => InstanceType<S>['value'],
  } as const;
}
