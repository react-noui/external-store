import { ExternalStoreRecord } from "../stores/ExternalStoreRecord";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreRecord<T extends Record<string, unknown>>(arg: T) {
  const store = new ExternalStoreRecord(arg);
  return {
    ...syncExternalStore<typeof store, T>(store),
    spread: store.spread,
    reset: store.reset,
  };
}
