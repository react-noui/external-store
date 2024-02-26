import { ExternalStoreRegExp } from "../../stores/ExternalStoreRegExp";
import { makeExternalStoreRegExp } from "../makeExternalStoreRegExp"

describe("makeExternalStoreRegExp", () => {
  test("factory", () => {
    expect(makeExternalStoreRegExp("").store).toBeInstanceOf(ExternalStoreRegExp);
  });
});
