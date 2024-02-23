import { act, renderHook } from "@testing-library/react-hooks";
import fetchMockJest from "fetch-mock-jest";
import { useState } from "react";

import { syncExternalStore } from "../syncExternalStore"
import { ExternalStoreNumber } from "../../stores/ExternalStoreNumber";
import { makeResolver } from "../../utils/makeResolver.test.helper";

const IdStore = new ExternalStoreNumber(0);

fetchMockJest
  .get("/users/1", { id: 1, username: "foo" })
  .get("/users/2", { id: 2, username: "bar" });

describe("syncExternalStore", () => {
  test("factory", async () => {
    const [P, resolve] = makeResolver();

    const getUser = jest.fn(
      (id: number) => fetch(`/users/${id}`)
        .then((res) => res.json() as Promise<{ id: number, username: string }>)
        .finally(resolve)
    );
    const S = syncExternalStore(IdStore);
    const { result: resultUseValue } = renderHook(() => S.useValue());
    expect(resultUseValue.current).toEqual(0);

    const { result: resultUser } = renderHook(() => {
      const [user, setUser] = useState<{ id: number, username: string } | undefined>();
      S.useUpdates(async (id) => getUser(id).then(setUser));
      return user;
    });

    act(() => S.setValue(1));

    await act(() => P);

    expect(resultUser.current).toMatchObject({ id: 1, username: "foo" });

    expect(getUser).toHaveBeenCalledTimes(1);
    expect(getUser).toHaveBeenCalledWith(1);
    
    act(() => S.setValue(2));

    await act(() => P);

    expect(resultUser.current).toMatchObject({ id: 2, username: "bar" });

    expect(getUser).toHaveBeenCalledTimes(2);
    expect(getUser).toHaveBeenLastCalledWith(2);
  });
});
