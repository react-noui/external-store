import { makeExternalStoreBoolean } from "../makeExternalStoreBoolean"

describe("makeExternalStoreBoolean", () => {
  test("factory", () => {
    expect(makeExternalStoreBoolean().getValue()).toBe(false);
    expect(makeExternalStoreBoolean(false).getValue()).toBe(false);
    expect(makeExternalStoreBoolean(true).getValue()).toBe(true);
  });
});
