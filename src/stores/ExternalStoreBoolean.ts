import { ExternalStore } from "./ExternalStore";

export class ExternalStoreBoolean extends ExternalStore<boolean> {
  toggle = () => {
    this.setValue(!this.value);
  }

  setTrue = () => {
    this.setValue(true);
  }

  setFalse = () => {
    this.setValue(false);
  }
}
