import { ExternalStoreNumber } from "../ExternalStoreNumber"

describe("ExternalStoreNumber", () => {
	test("constructor", () => {
		const S = new ExternalStoreNumber(0);
		expect(S.value).toEqual(0);
	});
});
