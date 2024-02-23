/**
 * @jest-environment jsdom
 */
import { act, renderHook } from "@testing-library/react-hooks";
import { makeExternalStoreCustomEvent } from "../makeExternalStoreCustomEvent"

const addEventListenerSpy = jest.spyOn(global, "addEventListener");
const removeEventListenerSpy = jest.spyOn(global, "removeEventListener");

describe("makeExternalStoreCustomEvent", () => {
  afterEach(() => {
    addEventListenerSpy.mockClear();
    removeEventListenerSpy.mockClear();
  });
  
  test("factory", () => {
    const S = makeExternalStoreCustomEvent("TEST", { foo: "" });
    expect(addEventListenerSpy).toHaveBeenCalledTimes(0);
    const { result, unmount } = renderHook(() => S.useValue());
    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(result.current).toEqual({ foo: "" });
    const event = new CustomEvent("TEST", { detail: { foo: "CHANGED" } });
    act(() => {
      global.dispatchEvent(event);
    });
    expect(result.current).toEqual({ foo: "CHANGED" });
    act(() => {
      unmount();
    });
    expect(removeEventListenerSpy).toHaveBeenCalled();
  });

  test("with options.autoListen", () => {
    const event = new CustomEvent("TEST", { detail: { foo: "CHANGED" } });
    const S = makeExternalStoreCustomEvent("TEST", { foo: "" });
    const SAuto = makeExternalStoreCustomEvent("TEST", { foo: "" }, { autoListen: true })
    act(() => {
      global.dispatchEvent(event);
    });
    // Render _after_ emitting the event.
    const { result } = renderHook(() => S.useValue());
    const { result: resultAuto } = renderHook(() => SAuto.useValue());
    expect(result.current).toEqual({ foo: "" });
    expect(resultAuto.current).toEqual({ foo: "CHANGED" });
  });
});
