import { ExternalStoreRegExp } from "../stores/ExternalStoreRegExp";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreRegExp(...args: ConstructorParameters<typeof RegExp>) {
  const store = new ExternalStoreRegExp(...args);
  return syncExternalStore(store);
}
