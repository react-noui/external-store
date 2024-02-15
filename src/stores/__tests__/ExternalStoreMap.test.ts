import { ExternalStoreMap } from "../ExternalStoreMap"

describe("ExternalStoreMap", () => {
	test("constructor", () => {
		const S = new ExternalStoreMap(new Map<string, string>());
		expect(Array.from(S.value)).toEqual([]);
	});
});
