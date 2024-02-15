import { useSyncExternalStore } from "react";
import { ExternalStore } from "../stores/ExternalStore";

export function syncExternalStore<S extends ExternalStore<T>, T>(store: S) {
  const useValue = () => useSyncExternalStore<T>(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store),
  );
  return {
    store,
    getValue: () => store.value,
    useValue,
  };
}
