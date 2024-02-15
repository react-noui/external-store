import { ExternalStoreMap } from "../stores/ExternalStoreMap";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreMap<K, V>(arg: Map<K, V>) {
  const store = new ExternalStoreMap<K, V>(arg);
  return {
    ...syncExternalStore<typeof store, Map<K, V>>(store),
    set: store.set,
    clear: store.clear,
    delete: store.delete,
  };
}
