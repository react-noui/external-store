import { ExternalStoreArray } from "../ExternalStoreArray"

describe("ExternalStoreArray", () => {
	test("constructor", () => {
		const S = new ExternalStoreArray<string>([]);
		expect(S.value).toEqual([]);
	});
});
