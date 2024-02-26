import { ExternalStore } from "./ExternalStore";

export class ExternalStoreSet<T> extends ExternalStore<Set<T>> {
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
