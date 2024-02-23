import { SerializeUpDown, jsonSerializer, stringSerializer } from "../serializer";

describe("serializer", () => {
  test("serializers", () => {
    expect(stringSerializer.down(stringSerializer.up("foo"))).toEqual("foo");
    expect(jsonSerializer.down(jsonSerializer.up({ foo: "bar" }))).toEqual({ foo: "bar" });
  });

  test("custom serializer", () => {
    const mySerializer: SerializeUpDown<number[]> = {
      up: (values) => values.join(":"),
      down: (value) => value.split(":").map((v) => parseInt(v)),
    };
    expect(mySerializer.down(mySerializer.up([1, 2]))).toEqual([1, 2]);
  });
});
