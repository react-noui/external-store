import { useCallback, useEffect, useSyncExternalStore } from "react";
import { ExternalStore } from "../stores/ExternalStore";

export function syncExternalStore<S extends ExternalStore<unknown>>(
  store: S
): {
  store: S;
  getValue: () => S["value"];
  setValue: (...args: Parameters<S["setValue"]>) => void;
  useValue: () => S["value"];
  useUpdates: (callback: (value: S["value"]) => void) => void;
} {
  const useValue = () => useSyncExternalStore<S["value"]>(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store),
  );
  const useUpdates = (callback: (value: S["value"]) => void) => {
    const handler = useCallback(() => callback(store.value), []);
    useEffect(() => {
      return store.subscribe(handler);
    }, [handler]);
  };
  return {
    store,
    setValue: store.setValue.bind(store),
    getValue: () => store.value,
    useValue,
    useUpdates,
  };
}
