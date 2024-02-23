import { syncExternalStore } from "./syncExternalStore";
import { ExternalStoreCustomEvent } from "../stores/ExternalStoreCustomEvent";

export function makeExternalStoreCustomEvent<T>(...args: ConstructorParameters<typeof ExternalStoreCustomEvent<T>>) {
  const store = new ExternalStoreCustomEvent<T>(...args);
  return syncExternalStore(store);
}
