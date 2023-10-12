import { isObject } from "../utils/isObject";

/**
 * @constructor (initialValue?: T)
 */
export class ExternalStore<T> {
  declare value: T | undefined;
  declare initialValue: T | undefined;
  listeners: (() => void)[] = [];

  constructor(initialValue: T | undefined = undefined) {
    this.value = this.initialValue = initialValue;
  }

  subscribe(listener: () => void): () => void {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    }
  }

  getSnapshot(): T | undefined {
    return this.value;
  }

  set(value: T | undefined = undefined): void {
    this.value = value;
    this.emitChange();
  }

  spread(value: Partial<T> | undefined = undefined): void {
    if (isObject(this.value) && isObject(value)) {
      this.set({ ...this.value, ...value });
    }
  }

  reset() {
    this.set(this.initialValue);
  }

  clear() {
    this.value = undefined;
    this.emitChange();
  }

  emitChange(): void {
    this.listeners.forEach((listener) => listener());
  }
}
