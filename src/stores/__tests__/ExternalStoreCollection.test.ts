import { ExternalStoreCollection } from "../ExternalStoreCollection"

type Todo = { text: string; completed: boolean; id: string };

describe("ExternalStoreCollection", () => {
	test("API", () => {
		const S = new ExternalStoreCollection<Todo>([], (todo) => todo.id);
		expect(S.value).toEqual([]);
    S.add({ text: "TEST", completed: false, id: "a1" });

    // Ignores adding the same ID.
    S.add({ text: "TEST", completed: false, id: "a1" });
    expect(S.value.length).toEqual(1);

    // Update existing item.
    S.update("a1", { text: "Something else" });
    expect(S.find("a1")?.id).toEqual("a1");
    expect(S.has("a1")).toBe(true);

    // Remove existing item.
    S.remove("a1");
    expect(S.value.length).toEqual(0);
    expect(S.has("a1")).toBe(false);
    expect(S.find("a1")).toBeUndefined();

    // Find returns undefined for bad key.
    expect(S.find("INTENTIONALLY_BAD")?.id).toBeUndefined();
	});
});
