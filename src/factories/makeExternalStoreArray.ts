import { ExternalStoreArray } from "../stores/ExternalStoreArray";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreArray<T>(arg: T[]) {
  const store = new ExternalStoreArray<T>(arg);
  return {
    ...syncExternalStore<typeof store, T[]>(store),
    push: store.push,
    pop: store.pop,
    shift: store.shift,
    unshift: store.unshift,
  };
}
