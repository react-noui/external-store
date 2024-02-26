import { ExternalStoreNumber } from "../stores/ExternalStoreNumber";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreNumber(arg: number = 0) {
  const store = new ExternalStoreNumber(arg);
  return {
    ...syncExternalStore(store),
    increment: store.increment,
    decrement: store.decrement,
  };
}
