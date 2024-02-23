import { ExternalStoreAsync } from "../ExternalStoreAsync"
import { makeResolver } from "../../utils/makeResolver.test.helper";
import fetchMockJest from "fetch-mock-jest";

type User = { id: number; username: string };

fetchMockJest.get("/users/1", { username: "foo", id: 1 });
fetchMockJest.get("/users/2", { username: "bar", id: 2 });

describe("ExternalStoreAsync", () => {
  test("constructor", async () => {
    const [P, resolve] = makeResolver();

    const getUser = jest.fn(
      (id: number) => fetch(`/users/${id}`)
        .then(res => res.json() as Promise<User>)
        .finally(resolve)
    );
    const S = new ExternalStoreAsync(getUser);

    await S.call(1);

    expect(S.getValue(1)).toMatchObject({ id: 1, username: "foo" });
    expect(S.getValue(2)).toBeUndefined();

    await S.call(2);

    expect(S.getValue(2)).toMatchObject({ id: 2, username: "bar" });

    S.reset(1);

    expect(S.getValue(1)).toBeUndefined();
  });
});
