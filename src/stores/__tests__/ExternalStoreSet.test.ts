import { ExternalStoreSet } from "../ExternalStoreSet"

describe("ExternalStoreSet", () => {
  test("constructor", () => {
    const S = new ExternalStoreSet(new Set<string>());
    expect(Array.from(S.value)).toEqual([]);
  });
});
