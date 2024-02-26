import { ExternalStoreSet } from "../stores/ExternalStoreSet";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreSet<T>(arg: Set<T> = new Set()) {
  const store = new ExternalStoreSet<T>(arg);
  return {
    ...syncExternalStore(store),
    add: store.add,
    clear: store.clear,
    delete: store.delete,
  }
}
