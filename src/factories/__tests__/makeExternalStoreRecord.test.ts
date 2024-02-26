import { act, renderHook } from "@testing-library/react-hooks";
import { makeExternalStoreRecord } from "../makeExternalStoreRecord"

describe("makeExternalStoreRecord", () => {
  test("factory", () => {
    const S = makeExternalStoreRecord({ test: 1 });
    expect(S.getValue()).toEqual({ test: 1 });
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toMatchObject({ test: 1 });
    act(() => {
      S.spread({ test: 2 });
    });
    expect(result.current).toMatchObject({ test: 2 });
  });

  test("store entries", () => {
    const S = makeExternalStoreRecord({ foo: 1, bar: "" });
    const { result: resultFoo } = renderHook(() => S.useEntry("foo"));
    const { result: resultBar } = renderHook(() => S.useEntry("bar"));
    act(() => {
      S.spread({ foo: 2 });
    });
    expect(resultFoo.current).toEqual(2);
    expect(resultBar.current).toEqual("");

    act(() => {
      S.setEntry("bar", "changed");
    });

    expect(resultFoo.current).toEqual(2);
    expect(resultBar.current).toEqual("changed");
  });

});
