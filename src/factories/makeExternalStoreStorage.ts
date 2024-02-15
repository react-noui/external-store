import { ExternalStoreStorage, SerializeUpDown } from "../stores/ExternalStoreStorage";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreStorage<T>(arg: Storage, key: string | Symbol, defaultValue: T, serialize?: SerializeUpDown<T>) {
  const store = new ExternalStoreStorage(arg, key, defaultValue, serialize);
  return syncExternalStore<typeof store, T | undefined>(store);
}

export function isStorageStoreArgs(args: any[]): args is Parameters<typeof makeExternalStoreStorage> {
  return (args.length > 0) && (args[0] instanceof Storage) && (typeof args[1] === "string")
}
