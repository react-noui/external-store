/**
 * @jest-environment jsdom
 */
import { ExternalStoreStorage } from "../ExternalStoreStorage"

describe("ExternalStoreStorage", () => {
	test("constructor", () => {
		const S = new ExternalStoreStorage(localStorage, "foo", "");
		expect(S.value).toEqual("");
	});
});
