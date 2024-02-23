import { useCallback, useSyncExternalStore } from "react";
import { ExternalStoreRecord } from "../stores/ExternalStoreRecord";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreRecord<T extends Record<string, unknown>>(arg: T) {
  const store = new ExternalStoreRecord(arg);
  const useEntry = (key: keyof T) => {
    const subscribe = useCallback(store.subscribeEntry(key), [key]);
    const getSnapshot = useCallback(store.getSnapshotEntry(key), [key]);
    return useSyncExternalStore(subscribe, getSnapshot);
  };
  return {
    ...syncExternalStore(store),
    useEntry,
    setEntry: store.setEntry,
    spread: store.spread,
    reset: store.reset,
  };
}
