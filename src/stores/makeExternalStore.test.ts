import { act, renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock-jest';

import { makeExternalStore } from './makeExternalStore';
import { ExternalStore } from './ExternalStore';
import { ExternalStoreAsync } from './ExternalStoreAsync';

describe('makeExternalStore', () => {
  test('external store specifications', () => {
    class InputStore extends ExternalStore<string> {}

    const inputStore = makeExternalStore(InputStore, '');

    const { result } = renderHook(() => inputStore.useValue());

    expect(result.current).toEqual('');

    act(() => {
      inputStore.store.set('foobar');
    });

    expect(result.current).toEqual('foobar');

    act(() => {
      inputStore.reset();
    });

    expect(result.current).toEqual('');
  });

  test('external store async collection', async () => {
    type Todo = {
      id: number;
      title: string;
      userId: number;
      completed: boolean;
    };

    const MOCK_TODOS: Todo[] = [{ id: 1, title: 'foobar', userId: 1, completed: false }];
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/todos', MOCK_TODOS);

    const fetchTodos = (): Promise<Todo[]> =>
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json());
    
    class TodosStore extends ExternalStoreAsync<Todo[]> {
      promise = fetchTodos;
    }
    const todosStore = makeExternalStore(TodosStore);

    const { result } = renderHook(() => todosStore.useValue());
    expect(result.current).toBeUndefined();

    await act(async () => {
      await todosStore.store.get();
    });

    expect(result.current).toMatchObject(MOCK_TODOS);
  });
  
  test('external store async with parameters', async () => {    
    type User = { id: number; name: string; username: string; email: string };

    const MOCK_USER: User = { id: 1, name: 'joe', username: 'jojo', email: 'j@g.com' }
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users/1', MOCK_USER);

    const fetchUser = (userId: number) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => (res.json() as Promise<User>));

    class UserStore extends ExternalStoreAsync<User> {
      promise = fetchUser;
    }

    const userStore = makeExternalStore(UserStore);

    const { result } = renderHook(() => userStore.useValue());
    expect(result.current).toBeUndefined();

    await act(async () => {
      await userStore.store.get(1);
    });

    expect(result.current).toMatchObject(MOCK_USER);
  });
});
