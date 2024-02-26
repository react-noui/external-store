import { ExternalStoreArray } from "../../stores/ExternalStoreArray";
import { makeExternalStoreArray } from "../makeExternalStoreArray"

describe("makeExternalStoreArray", () => {
  test("factory", () => {
    expect(makeExternalStoreArray<string>([]).store).toBeInstanceOf(ExternalStoreArray);
  });
});
