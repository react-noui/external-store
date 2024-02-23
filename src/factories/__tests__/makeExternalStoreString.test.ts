import { makeExternalStoreString } from "../makeExternalStoreString"

describe("makeExternalStoreString", () => {
  test("factory", () => {
    expect(makeExternalStoreString().getValue()).toBe("");
    expect(makeExternalStoreString("").getValue()).toBe("");
    expect(makeExternalStoreString("TEST").getValue()).toBe("TEST");
  });
});
