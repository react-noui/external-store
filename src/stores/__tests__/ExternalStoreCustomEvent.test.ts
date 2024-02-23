/**
 * @jest-environment jsdom
 */
import { act } from "@testing-library/react-hooks";
import { ExternalStoreCustomEvent } from "../ExternalStoreCustomEvent"

const addEventListenerSpy = jest.spyOn(global, "addEventListener");
const removeEventListenerSpy = jest.spyOn(global, "removeEventListener");

describe("ExternalStoreCustomEvent", () => {
	afterEach(() => {
    addEventListenerSpy.mockClear();
    removeEventListenerSpy.mockClear();
  });

	test("constructor", () => {
		const listener = jest.fn();
		const S = new ExternalStoreCustomEvent("TEST", { foo: "" });
		const unsub = S.subscribe(listener);
		expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
		expect(S.value).toEqual({ foo: "" });
		const event = new CustomEvent("TEST", { detail: { foo: "CHANGED" } });
    act(() => {
      global.dispatchEvent(event);
    });
    expect(S.value).toEqual({ foo: "CHANGED" });
		act(() => {
			unsub();
		});
		expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
	});
});
