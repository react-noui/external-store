import { act, renderHook } from "@testing-library/react-hooks";
import { makeExternalStoreCollection } from "../makeExternalStoreCollection"

type Todo = { text: string; completed: boolean; id: string };

describe("makeExternalStoreCollection", () => {
  test("factory", () => {
    const S = makeExternalStoreCollection<Todo>([], (todo) => todo.id);
    expect(S.getValue()).toEqual([]);
    const { result } = renderHook(() => S.useValue());
    expect(result.current).toEqual([]);

    act(() => {
      S.add({ text: "TEST", completed: false, id: "a1" });
      // Ignores adding the same ID.
      S.add({ text: "TEST", completed: false, id: "a1" });
    });

    expect(result.current.length).toEqual(1);

    act(() => {
      // Update existing item.
      S.update("a1", { text: "Something else" });
    });

    expect(result.current[0].text).toEqual("Something else");

    act(() => {
      // Remove existing item.
      S.remove("a1");
    });
    expect(result.current.length).toEqual(0);
  });
});
