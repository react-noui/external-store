import { ExternalStore } from "./ExternalStore";

export class ExternalStoreArray<T> extends ExternalStore<T[]> {
  push = (...args: Parameters<Array<T>["push"]>) => {
    const nextValue = [...this.value];
    const ret = nextValue.push(...args);
    this.setValue(nextValue);
    return ret;
  };
  pop = () => {
    const nextValue = [...this.value];
    const ret = nextValue.pop();
    this.setValue(nextValue);
    return ret;
  };
  shift = () => {
    const nextValue = [...this.value];
    const ret = nextValue.shift();
    this.setValue(nextValue);
    return ret;
  };
  unshift = (...args: Parameters<Array<T>["unshift"]>) => {
    const nextValue = [...this.value];
    const ret = nextValue.unshift(...args);
    this.setValue(nextValue);
    return ret;
  };
  splice = (...args: Parameters<Array<T>["splice"]>) => {
    const nextValue = [...this.value];
    const ret = nextValue.splice(...args);
    this.setValue(nextValue);
    return ret;
  };
}
