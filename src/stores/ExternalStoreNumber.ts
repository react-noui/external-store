import { ExternalStore } from "./ExternalStore";

export class ExternalStoreNumber extends ExternalStore<number> {
  increment = (value: number = 1) => {
    this.setValue((this.value) + value);
  }

  decrement = (value: number = 1) => {
    this.increment(-value);
  }
}
