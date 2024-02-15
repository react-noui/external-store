import { useSyncExternalStore } from "react";
import { AsyncReturnType, ExternalStoreAsync } from "../stores/ExternalStoreAsync";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreAsync<
P extends (...args: any[]) => Promise<any>,
T = AsyncReturnType<P>
>(promise: P) {
const store = new ExternalStoreAsync<P, T | undefined>(promise);
const { useValue: _useValue, ...sync } = syncExternalStore<typeof store, Record<string, T>>(store);
const useValue = (...args: Parameters<P>) => {
  _useValue();
  return useSyncExternalStore(
    store.subscribeParams(...args).bind(store),
    store.getSnapshotParams(...args).bind(store)
  );
};
const setValue = (value: AsyncReturnType<P>, ...args: Parameters<P>) => {
  const key = store.serializeParams(...args);
  store.spread({ [key]: value });
};
return {
  ...sync,
  useValue,
  setValue,
};
}
