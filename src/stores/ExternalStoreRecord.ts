import { ExternalStore } from "./ExternalStore";

export class ExternalStoreRecord<T extends Record<string, unknown>> extends ExternalStore<T> {
  spread = (value: Partial<T>): void => {
    this.setValue({ ...this.value, ...value });
  }
}
