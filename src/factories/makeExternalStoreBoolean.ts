import { ExternalStoreBoolean } from "../stores/ExternalStoreBoolean";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreBoolean(arg: boolean = false) {
  const store = new ExternalStoreBoolean(arg);
  return {
    ...syncExternalStore<typeof store, boolean>(store),
    setTrue: store.setTrue,
    setFalse: store.setFalse,
    toggle: store.toggle,
  };
}
