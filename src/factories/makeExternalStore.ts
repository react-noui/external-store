import { ExternalStore } from "../stores/ExternalStore";
import { isRecord } from "../utils/isRecord";
import { syncExternalStore } from "./syncExternalStore";
import { makeExternalStoreBoolean } from "./makeExternalStoreBoolean";
import { makeExternalStoreNumber } from "./makeExternalStoreNumber";
import { makeExternalStoreRegExp } from "./makeExternalStoreRegExp";
import { makeExternalStoreRecord } from "./makeExternalStoreRecord";
import { makeExternalStoreArray } from "./makeExternalStoreArray";
import { makeExternalStoreMap } from "./makeExternalStoreMap";
import { makeExternalStoreSet } from "./makeExternalStoreSet";
import { makeExternalStoreString } from "./makeExternalStoreString";


export function makeExternalStore(arg: boolean): ReturnType<typeof makeExternalStoreBoolean>;
export function makeExternalStore(arg: number): ReturnType<typeof makeExternalStoreNumber>;
export function makeExternalStore(arg: string): ReturnType<typeof makeExternalStoreString>;
export function makeExternalStore<T extends Record<string, unknown>>(arg: T): ReturnType<typeof makeExternalStoreRecord<T>>;
export function makeExternalStore<T>(arg: T[]): ReturnType<typeof makeExternalStoreArray<T>>;
export function makeExternalStore<K, V>(arg: Map<K, V>): ReturnType<typeof makeExternalStoreMap<K, V>>;
export function makeExternalStore<T>(arg: Set<T>): ReturnType<typeof makeExternalStoreSet<T>>;
export function makeExternalStore(arg: RegExp): ReturnType<typeof makeExternalStoreRegExp>;
export function makeExternalStore<T>(args: T): ReturnType<typeof makeExternalStoreBasic<T>>;
export function makeExternalStore(...args: any[]) {
  const arg = args[0];
  if (args.length === 1 && typeof arg === "string") {
    return makeExternalStoreString(arg);
  }
  if (args.length === 1 && typeof arg === "boolean") {
    return makeExternalStoreBoolean(arg);
  }
  if (args.length === 1 && typeof arg === "number") {
    return makeExternalStoreNumber(arg);
  }
  if (args.length === 1 && arg instanceof RegExp) {
    return makeExternalStoreRegExp(arg);
  }
  if (args.length === 1 && Array.isArray(arg)) {
    return makeExternalStoreArray(arg);
  }
  if (args.length === 1 && arg instanceof Map) {
    return makeExternalStoreMap(arg);
  }
  if (args.length === 1 && arg instanceof Set) {
    return makeExternalStoreSet(arg);
  }
  if (isRecord(arg)) {
    return makeExternalStoreRecord(arg);
  }
  return makeExternalStoreBasic(arg);
}

function makeExternalStoreBasic<T>(arg: T) {
  const store = new ExternalStore<T>(arg);
  return syncExternalStore(store);
}
