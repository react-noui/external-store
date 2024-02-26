import { makeExternalStoreSet } from "../makeExternalStoreSet"

describe("makeExternalStoreSet", () => {
  test("factory", () => {
    expect(Array.from(makeExternalStoreSet().getValue())).toEqual([]);
    expect(Array.from(makeExternalStoreSet(new Set(["a", "b"])).getValue())).toEqual(["a", "b"]);
  });
});
