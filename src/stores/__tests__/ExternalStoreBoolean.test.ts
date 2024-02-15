import { ExternalStoreBoolean } from "../ExternalStoreBoolean"

describe("ExternalStoreBoolean", () => {
	test("constructor", () => {
		const S = new ExternalStoreBoolean(false);
		expect(S.value).toEqual(false);
	});
});
