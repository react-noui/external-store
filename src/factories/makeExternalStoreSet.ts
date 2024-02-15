import { ExternalStoreSet } from "../stores/ExternalStoreSet";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreSet<T>(arg: Set<T>) {
  const store = new ExternalStoreSet<T>(arg);
  return {
    ...syncExternalStore<typeof store, Set<T>>(store),
    add: store.add,
    clear: store.clear,
    delete: store.delete,
  }
}
