import { ExternalStoreString } from "../ExternalStoreString"

describe("ExternalStoreString", () => {
  test("constructor", () => {
    const S = new ExternalStoreString("");
    expect(S.value).toEqual("");
  });
});
