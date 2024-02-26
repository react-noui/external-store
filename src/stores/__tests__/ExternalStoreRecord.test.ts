import { ExternalStoreRecord } from "../ExternalStoreRecord"

describe("ExternalStoreRecord", () => {
  test("constructor", () => {
    const S = new ExternalStoreRecord<{ foo: number, bar: string }>({
      foo: 0,
      bar: "",
    });
    expect(S.value).toMatchObject({
      foo: 0,
      bar: "",
    });
  });
});
