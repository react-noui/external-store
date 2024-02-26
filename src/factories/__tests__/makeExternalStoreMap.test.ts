import { act, renderHook } from "@testing-library/react-hooks";
import { makeExternalStoreMap } from "../makeExternalStoreMap"

describe("makeExternalStoreMap", () => {
  test("factory", () => {
    const S = makeExternalStoreMap(new Map<string, number>());  
    const { result } = renderHook(() => S.useValue());
    act(() => {
      S.set("test", 1);
    });
    expect(result.current.get("test")).toEqual(1);
  });

  test("Store.useGet", () => {
    const S = makeExternalStoreMap(new Map<string, number>());  
    const { result } = renderHook(() => S.useGet("test"));
    expect(result.current).toBeUndefined();
    act(() => {
      S.set("test", 1);
    });
    expect(result.current).toEqual(1);
  });
});
