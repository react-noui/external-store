/**
 * @jest-environment jsdom
 */
import { act, renderHook } from "@testing-library/react-hooks";
import { ExternalStoreStorage } from "../../stores/ExternalStoreStorage";
import { makeExternalStoreStorage } from "../makeExternalStoreStorage"

class MemoryStorage implements Storage {
  value: Map<string | Symbol, string> = new Map();
  constructor(defaultValue: Map<string | Symbol, string> = new Map()) {
    this.value = defaultValue;
  }
  getItem(key: string | Symbol) {
    return this.value.get(key) ?? null;
  }
  setItem(key: string | Symbol, value: string) {
    this.value.set(key, value);
  }
  get length() {
    return this.value.size;
  }
  clear() {
    this.value = new Map();
  }
  key(index: number) {
    return this.value.get(`${index}`) ?? null;
  }
  removeItem(key: string | Symbol) {
    this.value.delete(key);
  }
}
const memoryStorage = new MemoryStorage();

describe("makeExternalStoreStorage", () => {
  beforeEach(() => {
    memoryStorage.clear();
    global.localStorage.clear();
    global.sessionStorage.clear();
  });
  
  test("factory", () => {
    expect(makeExternalStoreStorage(global.localStorage, "key", "").store).toBeInstanceOf(ExternalStoreStorage);
    expect(makeExternalStoreStorage(global.sessionStorage, "key", "").store).toBeInstanceOf(ExternalStoreStorage);
    expect(makeExternalStoreStorage(memoryStorage, "key", "").store).toBeInstanceOf(ExternalStoreStorage);
  });

  test("when storage exists", () => {
    memoryStorage.clear();
    memoryStorage.setItem("key", "FOOBAR");
    const S = makeExternalStoreStorage(memoryStorage, "key", "fasdf");
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual("FOOBAR");
  });

  test("fallback to provided initialValue if serialization down fails", () => {
    memoryStorage.clear();
    const consoleError = console.error;
    console.error = jest.fn();
    memoryStorage.setItem("key", "FOOBAR");
    const S = makeExternalStoreStorage<{ foo: string }>(memoryStorage, "key", { foo: "BAR" }, { up: JSON.stringify, down: JSON.parse });
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual({ foo: "BAR" });
    expect(console.error).toHaveBeenCalledTimes(1);
    console.error = consoleError;
  });

  test("fallback to provided initialValue if serialization down fails during use", () => {
    memoryStorage.clear();
    const consoleError = console.error;
    console.error = jest.fn();
    const event = new StorageEvent("storage", { key: "key", storageArea: global.localStorage });
    const S = makeExternalStoreStorage<{ foo: string }>(memoryStorage, "key", { foo: "BAR" }, { up: JSON.stringify, down: JSON.parse });
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual({ foo: "BAR" })
    act(() => {
      memoryStorage.setItem("key", "FOOBAR");
      // // Need to pretend we are on different pages. Dispatch our StorageEvent
      global.dispatchEvent(event);
    });
    expect(result.current).toEqual({ foo: "BAR" });
    console.error = consoleError;
  });

  test("listens for storage events", () => {
    memoryStorage.clear();
    const event = new StorageEvent("storage", { key: "key", storageArea: global.localStorage });
    const S = makeExternalStoreStorage(global.localStorage, "key", "");
    const { result } = renderHook(() => S.useValue());
    act(() => {
      global.localStorage.setItem("key", "FOOBAR");
      // Need to pretend we are on different pages. Dispatch our StorageEvent
      global.dispatchEvent(event);
    });
    expect(result.current).toEqual("FOOBAR");
  });

  test("can clear storage", () => {
    const S = makeExternalStoreStorage(global.localStorage, "key", "");
    const { result } = renderHook(() => S.useValue());
    act(() => {
      S.setValue(undefined as unknown as string);
    });
    expect(result.current).toBeUndefined();

    act(() => {
      S.setValue("FOOBAR");
    });

    act(() => {
      S.clear();
    });
    expect(result.current).toBeUndefined();
  });
});
