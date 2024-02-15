import { ExternalStore } from "./ExternalStore";

export class ExternalStoreMap<K, V> extends ExternalStore<Map<K, V>> {
  set = (...args: Parameters<Map<K, V>["set"]>) => {
    const nextValue = new Map(this.value);
    nextValue.set(...args);
    this.setValue(nextValue);
  }

  clear = () => {
    const nextValue = new Map(this.value);
    nextValue.clear();
    this.setValue(nextValue);
  }

  delete = (...args: Parameters<Map<K, V>["delete"]>) => {
    const nextValue = new Map(this.value)
    nextValue.delete(...args);
    this.setValue(nextValue);
  }
}
