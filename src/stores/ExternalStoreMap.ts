import { ExternalStore } from "./ExternalStore";

export class ExternalStoreMap<K, V> extends ExternalStore<Map<K, V>> {
  listenersGet = new Map<K, (() => void)[]>();

  set = (key: K, value: V) => {
    const nextValue = new Map(this.value);
    nextValue.set(key, value);
    this.setValue(nextValue);
    this.emitChangeGet(key);
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

  subscribeGet(key: K) {
    return (listener: () => void) => {
      const listeners = this.listenersGet.get(key) ?? [];
      this.listenersGet.set(key, [...listeners, listener]);
      return () => {
        const listeners = this.listenersGet.get(key) as (() => void)[];
        this.listenersGet.set(key, listeners.filter(l => l !== listener));
      };
    }
  }

  getSnapshotGet(key: K) {
    return () => this.value.get(key);
  }

  emitChangeGet(key: K) {
    (this.listenersGet.get(key) ?? []).forEach((listen) => listen());
  }
}
