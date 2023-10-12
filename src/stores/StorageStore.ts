import { ExternalStore } from './ExternalStore';

type SerializeUpDown<T> = {
  up: (value: T | undefined) => string;
  down: (value: string) => T;
};

function setStorage<T>(serializeUp: SerializeUpDown<T>['up']) {
  return (storage: Storage, key: string, value?: T) => {
    storage.setItem(key, serializeUp(value));
  }
}

function getStorage<T>(serializeDown: SerializeUpDown<T>['down']) {
  return (storage: Storage, key: string) => {
    const value = storage.getItem(key);
    if (value) {
      return serializeDown(value) as T;
    }
  }
}

const alreadyEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

export class StorageStore<T> extends ExternalStore<T> {
  declare readonly key: string;
  declare readonly storage: Storage;
  declare readonly serialize: SerializeUpDown<T>
  declare readonly setStorage: ReturnType<typeof setStorage<T>>;
  declare readonly getStorage: ReturnType<typeof getStorage<T>>;

  constructor(
    storage: Storage,
    key: string,
    initialValue?: T,
    serialize: SerializeUpDown<T> = {
      up: JSON.stringify,
      down: JSON.parse,
    },
  ) {
    const value = getStorage<T>(serialize.down)(storage, key);
    super(value || initialValue);
    this.storage = storage;
    this.key = key;
    this.setStorage = setStorage(serialize.up);
    this.getStorage = getStorage(serialize.down);
    // If initialValue was provided, make sure we update storage.
    if (!value && !alreadyEqual(value, initialValue)) {
      this.setStorage(this.storage, this.key, this.value);
    }
    // Ensure storage events are handled while bound to this.
    this.handleStorage = this.handleStorage.bind(this);
  }

  set(value: T | undefined = undefined): void {
    super.set(value);
    this.setStorage(this.storage, this.key, this.value);
  }

  clear() {
    super.clear();
    this.storage.removeItem(this.key);
  }

  subscribe(listener: () => void): () => void {
    this.listeners = [...this.listeners, listener];
    globalThis.addEventListener('storage', this.handleStorage);
    return () => {
      globalThis.removeEventListener('storage', this.handleStorage);
      this.listeners = this.listeners.filter((l) => l !== listener);
    }
  }

  /**
   * Event handler for `storage` events.
   * 
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
   * @param event StorageEvent
   */
  handleStorage(event: StorageEvent) {
    if (
      this.key === event.key &&
      this.storage === event.storageArea
    ) {
      this.value = this.getStorage(this.storage, this.key);
      this.emitChange();
    }
  }
}

export class LocalStorageStore<T> extends StorageStore<T> {
  constructor(key: string, initialValue?: T) {
    super(globalThis.localStorage, key, initialValue);
  }
}

export class SessionStorageStore<T> extends StorageStore<T> {
  constructor(key: string, initialValue?: T) {
    super(globalThis.sessionStorage, key, initialValue);
  }
}

type MyValue = { a: number, b: string };

const myStore = new StorageStore<MyValue>(localStorage, 'my_key', { a: 1, b: '' });
const myLocalStore = new LocalStorageStore<MyValue>('my_local_key', { a: 1, b: '' });
const mySessionStore = new SessionStorageStore<MyValue>('my_session_key', { a: 1, b: '' });
const simpleStringStore = new LocalStorageStore<string>('ss', '');
simpleStringStore.set('dfsafdsfasdfasdf');
simpleStringStore.clear()
