import { ExternalStoreWebSocket } from "../stores/ExternalStoreWebSocket";
import { syncExternalStore } from "./syncExternalStore";

export function makeExternalStoreWebSocket(
  url: string,
  defaultValue: string = "",
) {
  const store = new ExternalStoreWebSocket(url, defaultValue);
  const { useValue: _useValue, ...sync } = syncExternalStore(store);
  const useValue = () => {
    const value = _useValue();
    if (!store.socket || store.socket.readyState !== 1) throw store.openSocket();
    return value;
  };
  return {
    ...sync,
    useValue,
    send: store.send,
  };
}
