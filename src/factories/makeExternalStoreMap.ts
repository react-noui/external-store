import { useCallback, useSyncExternalStore } from "react";
import { ExternalStoreMap } from "../stores/ExternalStoreMap";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreMap<K, V>(arg: Map<K, V>) {
  const store = new ExternalStoreMap<K, V>(arg);
  const useGet = (key: K) => {
    const subscribe = useCallback(store.subscribeGet(key), [key]);
    const getSnapshot = useCallback(store.getSnapshotGet(key), [key]);
    return useSyncExternalStore(subscribe, getSnapshot);
  };
  return {
    ...syncExternalStore(store),
    useGet,
    set: store.set,
    clear: store.clear,
    delete: store.delete,
  };
}
