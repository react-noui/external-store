import { ExternalStoreArray } from "./ExternalStoreArray";

export class ExternalStoreCollection<T extends Record<string, unknown>> extends ExternalStoreArray<T> {
  declare key: (value: T) => string | number;

  constructor(defaultValue: T[], uniqueIdentifier: (value: T) => string | number) {
    super(defaultValue);
    this.key = uniqueIdentifier;
  }

  update = (key: string, values: Partial<T>) => {
    const idx = this.indexOf(key);
    if (idx >= 0) {
      const nextValue = { ...this.value[idx], ...values };
      this.splice(idx, 1, nextValue);
      return nextValue;
    }
  }

  add = (value: T) => {
    if (this.indexOf(this.key(value)) === -1) {
      this.push(value);
    }
  }

  remove = (key: ReturnType<typeof this.key>) => {
    return this.splice(this.indexOf(key), 1);
  }

  indexOf = (key: ReturnType<typeof this.key>) => {
    for (let i = 0; i < this.value.length; i++) {
      const value = this.value[i];
      if (this.key(value) === key) return i;
    }
    return -1;
  }

  find = (key: ReturnType<typeof this.key>) => {
    return this.value.find((v) => this.key(v) === key);
  }

  has = (key: ReturnType<typeof this.key>) => this.indexOf(key) >= 0;
}