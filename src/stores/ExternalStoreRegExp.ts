import { ExternalStore } from "./ExternalStore";

export class ExternalStoreRegExp extends ExternalStore<RegExp> {
  constructor(...args: ConstructorParameters<typeof RegExp>) {
    super(new RegExp(...args));
  }

  setValue(...args: ConstructorParameters<typeof RegExp>) {
    const nextValue = new RegExp(...args);
    super.setValue(nextValue);
  }
}
