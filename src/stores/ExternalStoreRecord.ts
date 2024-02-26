import { ExternalStore } from "./ExternalStore";

export class ExternalStoreRecord<T extends Record<string, unknown>> extends ExternalStore<T> {
  listenersEntry = new Map<keyof T, (() => void)[]>();
  
  spread = (value: Partial<T>): void => {
    this.setValue({ ...this.value, ...value });
    Object.keys(value).forEach((key: keyof T) => {
      this.emitChangeEntry(key);
    });
  }

  setEntry = (key: keyof T, value: T[keyof T]) => {
    this.setValue({ ...this.value, [key]: value });
    this.emitChangeEntry(key);
  }

  subscribeEntry(key: keyof T) {
    return (listener: () => void) => {
      const listeners = this.listenersEntry.get(key) ?? [];
      this.listenersEntry.set(key, [...listeners, listener]);
      return () => {
        const listeners = this.listenersEntry.get(key) as (() => void)[];
        this.listenersEntry.set(key, listeners.filter(l => l !== listener));
      };
    }
  }

  getSnapshotEntry(key: keyof T) {
    return () => this.value[key];
  }

  emitChangeEntry(key: keyof T) {
    (this.listenersEntry.get(key) ?? []).forEach((listen) => listen());
  }
}
