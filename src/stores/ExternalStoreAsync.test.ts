import fetchMock from 'fetch-mock';
import { ExternalStoreAsync } from './ExternalStoreAsync'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// TEST DATA START
type User = { id: number; name: string; username: string; email: string };
type Todo = { id: number; title: string; completed: boolean; userId: number };

class UserStore extends ExternalStoreAsync<User> {
  promise = fetchUser;
}
class UserTodosStore extends ExternalStoreAsync<Todo[]> {
  promise = fetchUserTodos;
}

const fetchUser = (userId: number): Promise<User> =>
  fetch(`${BASE_URL}/users/${userId}`)
    .then(res => res.json());

const fetchUserTodos = (userId: number): Promise<Todo[]> =>
  fetch(`${BASE_URL}/users/${userId}/todos`)
    .then(res => res.json());

fetchMock.getOnce('https://jsonplaceholder.typicode.com/users/1', { id: 1 });
fetchMock.getOnce('https://jsonplaceholder.typicode.com/users/1/todos', []);

describe('ExternalStoreFetch', () => {
  test('constructor', async () => {
    const userStore = new UserStore();
    const userTodosStore = new UserTodosStore();

    const user = await userStore.get(1);
    expect(user).toMatchObject({ id: 1 });

    const userTodos = await userTodosStore.get(1);
    expect(userTodos).toEqual([]);
  });
});