import { ExternalStoreRegExp } from "../ExternalStoreRegExp"

describe("ExternalStoreRegExp", () => {
	test("constructor", () => {
		const S = new ExternalStoreRegExp(new RegExp(""));
		expect(S.value.source).toEqual("(?:)");
	});
});
