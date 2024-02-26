import { ExternalStore } from "./ExternalStore";

export class ExternalStoreCustomEvent<T> extends ExternalStore<T> {
  declare eventType: string;
  declare autoListen: boolean;

  constructor(
    eventType: string,
    defaultValue: T,
    options?: { autoListen?: boolean }
  ) {
    super(defaultValue);
    this.eventType = eventType;
    this.handleEvent = this.handleEvent.bind(this);
    this.autoListen = Boolean(options?.autoListen);
    if (this.autoListen) {
      global.addEventListener(this.eventType as keyof WindowEventMap, this.handleEvent);
    }
  }

  subscribe(listener: () => void) {
    if (this.listeners.length === 0 && !this.autoListen) {
      global.addEventListener(this.eventType as keyof WindowEventMap, this.handleEvent);
    }
    const unmount = super.subscribe(listener);
    return () => {
      unmount();
      if (this.listeners.length === 0 && !this.autoListen) {
        global.removeEventListener(this.eventType as keyof WindowEventMap, this.handleEvent);
      }
    };
  }

  handleEvent(event: Event) {
    if (event.type === this.eventType) {
      if ((event as CustomEvent<T>).detail) {
        this.setValue((event as CustomEvent<T>).detail);
      }
    }
  }
}
