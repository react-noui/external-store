import fetchMockJest from "fetch-mock-jest";
import { makeExternalStoreAsync } from "../makeExternalStoreAsync";
import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import { makeResolver } from "../../utils/makeResolver.test.helper";

type Todo = { text: string; done: boolean; id: number };

const mockTodo = (id: number) : Todo => ({ text: "text", done: false, id });

describe("makeExternalStoreAsync", () => {  
  test("factory", async () => {
    fetchMockJest.get("www.todos.com/1", mockTodo(1));
    fetchMockJest.get("www.todos.com/2", mockTodo(2));

    const [P1, resolve1] = makeResolver();
    const [P2, resolve2] = makeResolver();

    const getTodo = jest.fn((id: number) =>
      fetch(`www.todos.com/${id}`)
        .then(res => res.json() as Promise<Todo>)
        .finally(() => id === 1 ? resolve1() : resolve2())
    );

    const S = makeExternalStoreAsync(getTodo);
    
    const { result: result1 } = renderHook(() => S.useValue(1), { wrapper: React.Suspense });
    const { result: result2 } = renderHook(() => S.useValue(2), { wrapper: React.Suspense });

    expect(getTodo).toHaveBeenCalledTimes(2);
    await act(async () => {
      await Promise.all([P1, P2])
    });

    expect(result1.current.id).toEqual(1);
    expect(result2.current.id).toEqual(2);

    await act(async () => {
      S.reset(1);
      await P1;
    });

    expect(getTodo).toHaveBeenCalledTimes(3);

    expect(result1.current.id).toEqual(1);
  });
});
