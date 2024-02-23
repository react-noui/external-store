/**
 * @jest-environment jsdom
 */
import { ExternalStoreStorage } from "../ExternalStoreStorage"

describe("ExternalStoreStorage", () => {
  test("constructor", () => {
    const S = new ExternalStoreStorage(localStorage, "foo", "");
    expect(S.value).toEqual("");
  });

  test("custom serializer", () => {
    const S = new ExternalStoreStorage(localStorage, "foo", ["A", "B"], {
      up: (arr) => arr?.join(":") ?? "",
      down: (value) => value.split(":"),
    });
    expect(S.value).toEqual(["A", "B"]);
  });
});
