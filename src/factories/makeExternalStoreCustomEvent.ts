import { useSyncExternalStore } from "react";
import { syncExternalStore } from "./syncExternalStore";
import {
  ExternalStoreCustomEvent,
  TExternalStoreCustomEvent,
  TExternalStoreCustomEventMap
} from "../stores/ExternalStoreCustomEvent";

export function makeExternalStoreCustomEvent<
T extends TExternalStoreCustomEvent,
TMap = TExternalStoreCustomEventMap<T>,
>() {
const store = new ExternalStoreCustomEvent<T, TMap>();
const s = syncExternalStore<typeof store, Partial<Record<keyof TMap, TMap[keyof TMap]>>>(store);
const useEvent = (name: keyof TMap) => {
  s.useValue();
  return useSyncExternalStore(
    store.subscribeEvent(name).bind(store),
    store.getSnapshotEvent(name).bind(store),
  )
};
return {
  ...syncExternalStore(store),
  useEvent,
}
}
