import fetchMock from 'fetch-mock-jest';
import { ExternalStoreAsync } from './ExternalStoreAsync'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// TEST DATA START
type User = { id: number; name: string; username: string; email: string };
type Todo = { id: number; title: string; completed: boolean; userId: number };

const MOCK_USER = { id: 1, name: 'foo', username: 'foobar', email: 'foo@bar.com' };
const MOCK_TODOS: Todo[] = [
  { id: 1, userId: 1, title: 'Todo 1', completed: false },
  { id: 2, userId: 1, title: 'Todo 2', completed: false },
];

const fetchUser = (userId: number): Promise<User> =>
  fetch(`${BASE_URL}/users/${userId}`)
    .then(res => res.json());

const fetchUserTodos = jest.fn((userId: number): Promise<Todo[]> =>
  fetch(`${BASE_URL}/users/${userId}/todos`)
    .then(res => res.json()));

class UserStore extends ExternalStoreAsync<User> {
  promise = fetchUser;
}
class UserTodosStore extends ExternalStoreAsync<Todo[]> {
  promise = fetchUserTodos;
}

describe('ExternalStoreFetch', () => {
  test('constructor with memoized get', async () => {    
    fetchMock.getOnce(BASE_URL + '/users/1', MOCK_USER);
    fetchMock.get(BASE_URL + '/users/1/todos', MOCK_TODOS);
    
    const userStore = new UserStore();
    const userTodosStore = new UserTodosStore([]);

    const user = await userStore.get(1);
    expect(user).toMatchObject({ id: 1 });

    const userTodos = await userTodosStore.get(1);
    expect(userTodos).toEqual(MOCK_TODOS);

    // Ensure n 'get' calls are only 'truly' made once.
    await userTodosStore.get(1);
    await userTodosStore.get(1);
    await userTodosStore.get(1);
    await userTodosStore.get(1);
    await userTodosStore.get(1);

    expect(fetchUserTodos).toHaveBeenCalledTimes(1);

    userTodosStore.reset(1);
    await userTodosStore.get(1);
    expect(fetchUserTodos).toHaveBeenCalledTimes(2);
  });
});