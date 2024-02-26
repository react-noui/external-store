import { makeExternalStoreNumber } from "../makeExternalStoreNumber"

describe("makeExternalStoreNumber", () => {
  test("factory", () => {
    expect(makeExternalStoreNumber().getValue()).toBe(0);
    expect(makeExternalStoreNumber(0).getValue()).toBe(0);
    expect(makeExternalStoreNumber(10).getValue()).toBe(10);
  });
});
