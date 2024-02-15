import { ExternalStore } from "./ExternalStore";

export type TExternalStoreCustomEvent<TType = string, TDetail = unknown> = {
  type: TType;
  detail: TDetail;
};

export type TExternalStoreCustomEventMap<Events extends TExternalStoreCustomEvent<string, unknown>> = {
  [E in Events as E["type"]]: E;
}

export class ExternalStoreCustomEvent<
  T extends TExternalStoreCustomEvent,
  TMap = TExternalStoreCustomEventMap<T>,
> extends ExternalStore<
  Partial<Record<keyof TMap, TMap[keyof TMap]>>
> {
  #messageListeners: Partial<Record<keyof TMap, (() => void)[]>> = {};

  constructor(defaultValue: Partial<Record<keyof TMap, TMap[keyof TMap]>> = {}) {
    super(defaultValue);
    this.handleEvent = this.handleEvent.bind(this);
  }

  subscribeEvent(name: keyof TMap) {
    return (listener: () => void) => {
      const listeners = this.#messageListeners[name] ?? [];
      this.#messageListeners[name] = [...listeners, listener];
      return () => {
        const listeners = this.#messageListeners[name] ?? [];
        this.#messageListeners[name] = listeners.filter(l => l !== listener);
      }
    }
  }

  emitChangeEvent(name: keyof TMap) {
    (this.#messageListeners[name] ?? []).forEach((listen) => listen());
  }

  getSnapshotEvent(name: keyof TMap) {
    return () => this.value[name];
  }

  handleEvent(event: CustomEvent) {
    const eventType = event.type as keyof TMap;
    this.setValue({ [eventType]: event.detail, ...this.value });
  }
}
