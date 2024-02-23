import { SerializeUpDown } from '../utils/serializer';
import { ExternalStore } from './ExternalStore';

function setStorage<T>(serialize: SerializeUpDown<T>) {
  return (storage: Storage, key: string | Symbol, value: T) => {
    storage.setItem(String(key), serialize.up(value));
  }
}

function getStorage<T>(serialize: SerializeUpDown<T>, initialValue: T) {
  return (storage: Storage, key: string | Symbol) => {
    const value = storage.getItem(String(key));
    if (value) {
      try {
        return serialize.down(value) as T;
      } catch (_error) {
        console.error("OOPSIES", _error);
      }
    }
    return initialValue;
  }
}

function getStorageInit<T>(
  storage: Storage,
  key: string | Symbol,
  initialValue: T,
  serialize: SerializeUpDown<T>
) {
  const value = storage.getItem(String(key));
  if (value) {
    try {
      return serialize.down(value);
    } catch (error) {
      console.error("OOPSIES");
      return initialValue;
    }
  } else {
    storage.setItem(String(key), serialize.up(initialValue));
  }
  return initialValue;
}

// const alreadyEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

export class ExternalStoreStorage<T> extends ExternalStore<T | undefined> {
  declare readonly key: string | Symbol;
  declare readonly storage: Storage;
  declare readonly serialize: SerializeUpDown<T>
  declare readonly setStorage: ReturnType<typeof setStorage<T>>;
  declare readonly getStorage: ReturnType<typeof getStorage<T>>;

  constructor(
    storage: Storage,
    key: string | Symbol,
    initialValue: T,
    serialize: SerializeUpDown<T> = {
      up: x => `${x ?? ""}`,
      down: x => x as T,
    },
  ) {
    const value = getStorageInit(storage, key, initialValue, serialize);
    super(value);
    this.storage = storage;
    this.key = key;
    this.setStorage = setStorage(serialize).bind(this);
    this.getStorage = getStorage(serialize, initialValue).bind(this);

    // Ensure storage events are handled while bound to this.
    this.handleStorage = this.handleStorage.bind(this);
  }

  setValue(value: T) {
    super.setValue(value);
    this.setStorage(this.storage, this.key, this.value as T);
  }

  clear = () => {
    this.value = undefined;
    this.storage.removeItem(String(this.key));
    this.emitChange();
  }

  subscribe(listener: () => void): () => void {
    if (this.listeners.length === 0) {
      global.addEventListener("storage", this.handleStorage);
    }
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
      if (this.listeners.length === 0) {
        global.removeEventListener("storage", this.handleStorage);
      }
    }
  }

  /**
   * Event handler for `storage` events.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
   * @param event StorageEvent
   */
  handleStorage(event: StorageEvent) {
    if (this.key === event.key) {
      this.setValue(this.getStorage(this.storage, this.key));
    }
  }
}
