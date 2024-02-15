import { ExternalStore } from "./ExternalStore";

export class ExternalStoreSet<T> extends ExternalStore<Set<T>> {
  get entries() { return this.value.entries; }
  get forEach() { return this.value.forEach; }
  get keys() { return this.value.keys; }
  get values() { return this.value.values; }
  get size() { return this.value.size; }

  add = (...args: T[]) => {
    const nextValue = new Set(this.value);
    args.forEach((arg) => {
      nextValue.add(arg);
    });
    this.setValue(nextValue);
  }

  clear = () => {
    const nextValue = new Set(this.value);
    nextValue.clear();
    this.setValue(nextValue);
  }

  delete = (...args: Parameters<Set<T>["delete"]>) => {
    const nextValue = new Set(this.value);
    nextValue.delete(...args);
    this.setValue(nextValue);
  }
}
