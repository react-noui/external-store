import { memoize } from '../utils/memoize';
import { ExternalStore } from './ExternalStore';

export class ExternalStoreFetch<T> extends ExternalStore<T> {
  declare BASE_URL: string;
  declare error?: Error;

  url(...params: any[]): string {
    return '';
  }

  get fetch(): (...args: Parameters<typeof this['url']>) => Promise<T> {
    return memoize(
      (...args: Parameters<typeof this['url']>) =>
        fetch(`${this.BASE_URL}${this.url(...args)}`)
          .then((res) => res.json())
          .then((t) => this.value = t)
          .catch((e: any) => this.error = e)
    );
  }
}

class TypicodeStore<T> extends ExternalStoreFetch<T> {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
}

type Todo = {};
type User = {};

class TodoStore extends TypicodeStore<Todo> {
  url() { return '/todos' }
}

class UserStore extends TypicodeStore<User> {
  url(userId: number) { return `/users/${userId}` }
}

const todoStore = new TodoStore();
todoStore.fetch();

const userStore = new UserStore();
userStore.fetch(1);
