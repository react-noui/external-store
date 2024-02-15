import { ExternalStoreString } from "../stores/ExternalStoreString";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreString(arg: string = "") {
  const store = new ExternalStoreString(arg);
  return {
    ...syncExternalStore<typeof store, string>(store)
  };
}
