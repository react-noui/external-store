import { act, renderHook } from "@testing-library/react-hooks";
import { ExternalStoreBoolean } from "../../stores/ExternalStoreBoolean";
import { ExternalStoreNumber } from "../../stores/ExternalStoreNumber";
import { ExternalStoreRecord } from "../../stores/ExternalStoreRecord";
import { ExternalStoreString } from "../../stores/ExternalStoreString";
import { makeExternalStore } from "../makeExternalStore";
import { ExternalStoreArray } from "../../stores/ExternalStoreArray";

describe("makeExternalStore", () => {
  test("makeExternalStore(boolean)", () => {
    const S = makeExternalStore(false);
    expect(S.store instanceof ExternalStoreBoolean).toBeTruthy();
    expect(S.getValue()).toEqual(false);
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual(false);
    act(() => {
      S.store.setValue(true);
    });
    expect(result.current).toEqual(true);
    act(() => {
      S.setFalse();
    });
    expect(result.current).toEqual(false);
    act(() => {
      S.setTrue();
    });
    expect(result.current).toEqual(true);
    act(() => {
      S.toggle();
    });
    expect(result.current).toEqual(false);
  });
  test("makeExternalStore(number)", () => {
    const S = makeExternalStore(0);
    expect(S.store instanceof ExternalStoreNumber).toBeTruthy();
    expect(S.getValue()).toEqual(0);
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual(0);
    act(() => {
      S.store.setValue(1);
    });
    expect(result.current).toEqual(1);
    act(() => {
      S.increment();
    });
    expect(result.current).toEqual(2);
    act(() => {
      S.increment(10);
    });
    expect(result.current).toEqual(12);
    act(() => {
      S.decrement();
    });
    expect(result.current).toEqual(11);
    act(() => {
      S.decrement(10);
    });
    expect(result.current).toEqual(1);
  });
  test("makeExternalStore(string)", () => {
    const S = makeExternalStore("");
    expect(S.store instanceof ExternalStoreString).toBeTruthy();
    expect(S.getValue()).toEqual("");
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual("");
    act(() => {
      S.store.setValue("TEST");
    });
    expect(result.current).toEqual("TEST");
  });
  test("makeExternalStore(Record)", () => {
    const S = makeExternalStore({ a: 0, b: "", c: false });
    expect(S.store instanceof ExternalStoreRecord).toBeTruthy();
    expect(S.getValue()).toMatchObject({ a: 0, b: "", c: false });
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toMatchObject({ a: 0, b: "", c: false });
    act(() => {
      S.store.setValue({ a: 1, b: "TEST", c: true });
    });
    expect(result.current).toMatchObject({ a: 1, b: "TEST", c: true });
    act(() => {
      S.spread({ a: 100 });
    });
    expect(result.current).toEqual({ a: 100, b: "TEST", c: true });
  });
  test("makeExternalStore(Array)", () => {
    const S = makeExternalStore(["a", "b"]);
    expect(S.store instanceof ExternalStoreArray).toBeTruthy();
    expect(S.getValue()).toEqual(["a", "b"]);
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual(["a", "b"]);
    act(() => {
      S.store.setValue(["c", "d"]);
    });
    expect(result.current).toEqual(["c", "d"]);
    act(() => {
      const pushLen = S.push("e");
      expect(pushLen).toEqual(3);
    });
    expect(result.current).toEqual(["c", "d", "e"]);
    act(() => {
      const popped = S.pop();
      expect(popped).toEqual("e");
    });
    expect(result.current).toEqual(["c", "d"]);
    act(() => {
      const shifted = S.shift();
      expect(shifted).toEqual("c");
    });
    expect(result.current).toEqual(["d"]);
    act(() => {
      const unshiftLen = S.unshift("!");
      expect(unshiftLen).toEqual(2);
    });
    expect(result.current).toEqual(["!", "d"]);
  });
  test("makeExternalStore(Map)", () => {
    const S = makeExternalStore(new Map<string, number>());
    expect(Array.from(S.getValue())).toMatchObject([]);
    const { result } = renderHook(() => S.useValue());
    expect(Array.from(result.current)).toMatchObject([]);
    act(() => {
      S.set("a", 1);
      S.set("b", 2)
    });
    expect(Array.from(result.current)).toMatchObject([["a", 1], ["b", 2]]);
    act(() => {
      S.delete("b");
    });
    expect(Array.from(result.current)).toMatchObject([["a", 1]]);
    act(() => {
      S.clear();
    });
    expect(Array.from(result.current)).toMatchObject([]);
  });
  test("makeExternalStore(Set)", () => {
    const S = makeExternalStore(new Set<number>());
    expect(Array.from(S.getValue())).toEqual([]);
    const { result } = renderHook(() => S.useValue());
    act(() => {
      S.store.add(1);
      S.store.add(2);
    });
    expect(Array.from(result.current)).toEqual([1, 2]);
    expect(Array.from(S.getValue())).toEqual([1, 2]);

    act(() => {
      S.store.delete(1);
    });
    expect(Array.from(result.current)).toEqual([2]);
    expect(Array.from(S.getValue())).toEqual([2]);

    act(() => {
      S.store.clear();
    });
    expect(Array.from(result.current)).toEqual([]);
    expect(Array.from(S.getValue())).toEqual([]);
  });
  test("makeExternalStore(Storage)", () => {
    expect(true).toEqual(true);
  });
  test("makeExternalStore<CustomEvent>()", () => {
    expect(true).toEqual(true);
  });
  test("makeExternalStore(Async)", () => {
    expect(true).toEqual(true);
  });
});
