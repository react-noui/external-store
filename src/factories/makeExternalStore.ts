import { ExternalStore } from "../stores/ExternalStore";
import { ExternalStoreString } from "../stores/ExternalStoreString";
import { isRecord } from "../utils/isRecord";
import { TExternalStoreCustomEvent } from "../stores/ExternalStoreCustomEvent";
import { syncExternalStore } from "./syncExternalStore";
import { makeExternalStoreBoolean } from "./makeExternalStoreBoolean";
import { makeExternalStoreNumber } from "./makeExternalStoreNumber";
import { makeExternalStoreRegExp } from "./makeExternalStoreRegExp";
import { makeExternalStoreRecord } from "./makeExternalStoreRecord";
import { makeExternalStoreArray } from "./makeExternalStoreArray";
import { makeExternalStoreCustomEvent } from "./makeExternalStoreCustomEvent";
import { makeExternalStoreMap } from "./makeExternalStoreMap";
import { makeExternalStoreSet } from "./makeExternalStoreSet";
import { isStorageStoreArgs, makeExternalStoreStorage } from "./makeExternalStoreStorage";
import { makeExternalStoreString } from "./makeExternalStoreString";


export function makeExternalStore(arg: boolean): ReturnType<typeof makeExternalStoreBoolean>;
export function makeExternalStore(arg: number): ReturnType<typeof makeExternalStoreNumber>;
export function makeExternalStore(arg: string): ReturnType<typeof makeExternalStoreString>;
export function makeExternalStore<T extends Record<string, unknown>>(arg: T): ReturnType<typeof makeExternalStoreRecord<T>>;
export function makeExternalStore<T>(arg: T[]): ReturnType<typeof makeExternalStoreArray<T>>;
export function makeExternalStore<K, V>(arg: Map<K, V>): ReturnType<typeof makeExternalStoreMap<K, V>>;
export function makeExternalStore<T>(arg: Set<T>): ReturnType<typeof makeExternalStoreSet<T>>;
export function makeExternalStore(arg: RegExp): ReturnType<typeof makeExternalStoreRegExp>;
export function makeExternalStore<T>(...args: Parameters<typeof makeExternalStoreStorage<T>>): ReturnType<typeof makeExternalStoreStorage<T>>;
export function makeExternalStore<T extends TExternalStoreCustomEvent>(...args: Parameters<typeof makeExternalStoreCustomEvent<T>>): ReturnType<typeof makeExternalStoreCustomEvent<T>>;
export function makeExternalStore(...args: any[]) {
  const arg = args[0];
  if (args.length === 1 && typeof arg === "string") {
    return makeExternalStoreString(arg);
  }
  if (typeof arg === "boolean") {
    return makeExternalStoreBoolean(arg);
  }
  if (typeof arg === "number") {
    return makeExternalStoreNumber(arg);
  }
  if (arg instanceof RegExp) {
    return makeExternalStoreRegExp(arg);
  }
  if (Array.isArray(arg)) {
    return makeExternalStoreArray(arg);
  }
  if (arg instanceof Map) {
    return makeExternalStoreMap(arg);
  }
  if (arg instanceof Set) {
    return makeExternalStoreSet(arg);
  }
  if (isRecord(arg)) {
    return makeExternalStoreRecord(arg);
  }
  if (isStorageStoreArgs(args)) {
    return makeExternalStoreStorage(...args);
  }
  return makeExternalStoreBasic(arg);
}

function makeExternalStoreBasic<T>(arg: T) {
  const store = new ExternalStore<T>(arg);
  return syncExternalStore<typeof store, T>(store);
}

// function makeExternalStoreString(arg: string = "") {
//   const store = new ExternalStoreString(arg);
//   return {
//     ...syncExternalStore<typeof store, string>(store)
//   };
// }

// type User = { id: number, username: string };
// async function fetchUser(id: number): Promise<User> {
//   return fetch(`/users/${id}`).then(res => res.json());
// }
// const S = new ExternalStoreAsync(fetchUser);
// const pStore = makeExternalStoreAsync(fetchUser);
// pStore.useValue(1);
// pStore.setValue({ id: 23, username: "foo" }, 1);

// const sStore = makeExternalStore("");
// sStore.setValue("TEST");
// const bStore = makeExternalStore(false);
// bStore.setTrue();
// bStore.setFalse();
// bStore.toggle();
// const nStore = makeExternalStore(1);
// nStore.increment(1);
// nStore.decrement(1);
// const arrStore = makeExternalStore(["a", "gi"]);

// // const rStore = makeExternalStore<{ foo: string, bar: number }>({ foo: "", bar: 0 });
// const lsStore = makeExternalStore(localStorage, "foo", "bar");
// lsStore.setValue("TEST");
// const mStore = makeExternalStore(new Map<"foo" | "bar", string>());
// mStore.delete("foo");
// mStore.clear();
// mStore.set("foo", "TEST");
// mStore.set("bar", "HEYOOO");
// const setStore = makeExternalStore(new Set<string>());
// setStore.add("foo", "bar", "baz");

// type MyEvents = { type: "foo", detail: string } | { type: "bar", detail: { id: number } };
// const ceStore = makeExternalStore();
// // const eventStore = makeExternalStoreCustomEvent<MyEvents>();
// // const data = eventStore.useEvent("bar");


// export const MyLoginForm = makeExternalStore<{ email: string, password: string }>({ email: "", password: "" });
// const formData = MyLoginForm.useValue();
// MyLoginForm.spread({ email: "foobar" });

// export const AppPropsSharedStuffAndBeans = makeExternalStore<{ foo: string, bar: number }>({ foo: "", bar: 0 });
// AppPropsSharedStuffAndBeans.spread({ foo: "a" });
// AppPropsSharedStuffAndBeans.spread({ bar: 1 });
// AppPropsSharedStuffAndBeans.setValue({ foo: "b", bar: 3 });
// const data = AppPropsSharedStuffAndBeans.useValue();

