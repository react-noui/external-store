import { ExternalStoreStorage } from "../stores/ExternalStoreStorage";
import { SerializeUpDown } from "../utils/serializer";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreStorage<T>(
  arg: Storage,
  key: string | Symbol,
  defaultValue: T,
  serialize?: SerializeUpDown<T>
) {
  const store = new ExternalStoreStorage<T>(arg, key, defaultValue, serialize);
  return {
    ...syncExternalStore(store),
    clear: store.clear,
  };
}
