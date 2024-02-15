/**
 * @constructor (initialValue?: T)
 */
export class ExternalStore<T> {
  declare value: T;
  declare initialValue: T;
  listeners: (() => void)[] = [];

  constructor(initialValue: T) {
    this.value = this.initialValue = initialValue;
  }

  subscribe(listener: () => void): () => void {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    }
  }

  getSnapshot(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
    this.emitChange();
  }

  reset() {
    this.setValue(this.initialValue);
  }

  emitChange(): void {
    this.listeners.forEach((listener) => listener());
  }
}
