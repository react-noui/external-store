import { useCallback, useMemo, useSyncExternalStore } from "react";
import { ExternalStoreAsync } from "../stores/ExternalStoreAsync";
import { AsyncReturnType } from "../utils/memoize";

/**
 * 
 * @param promise Any promise that returns a value.
 * @param uniqueIdentifier 
 * @returns 
 */
export function makeExternalStoreAsync<
  P extends (...args: any[]) => Promise<any>
>(promise: P) {
  const store = new ExternalStoreAsync<P>(promise);
  const useSync = (...args: Parameters<P>) => {
    const subscribe = useCallback(store.subscribeParams(...args), [...args]);
    const getSnapshot = useCallback(() => store.getSnapshotParams(...args), [...args]);
    return useSyncExternalStore(subscribe, getSnapshot);
  };
  const useValue = (...args: Parameters<P>): AsyncReturnType<P> => {
    const value = useSync(...args);
    if (!value) {
      throw store.call(...args);
    }
    return value;
  }
  return {
    store,
    useValue,
    reset: store.reset,
  };
}
