# @react-noui/external-store

Simple external stores for your control flow.

## Installation

With yarn
```bash
yarn add @react-noui/external-store
```
With npm
```bash
npm install @react-noui/external-store
```

## Use

`ExternalStore<T>` can generically maintain whatever shape `<T>` you want to store in memory. I've seen a lot engineers struggle with where to store data when dealing within the presentation logic of `React` components. `ExternalStore<T>` is a solution to stuffing your presentation library with this unnecessary overhead.

### `function makeExternalStore<T, S>`

#### Arguments
|**name**|**type**|**required**|**description**|
|---|---|---|---|
|`Store`|`typeof ExternalStore<T>`|yes|Any class of type `ExternalStore<T>` where `T` is any generic type of value you intend to store.|
|`initialValue`|`T`|no|If not provided, the returned `store.value` will be `undefined`. If provided, the store's initial value will be set to the provided value.|

```typescript
function makeExternalStore<T, S extends typeof ExternalStore<T>>(
  Store: typeof ExternalStore<T>,
  initialValue?: T
): {
  store: S;
  reset: () => void;
  useValue: () => InstanceType<S>['value'],
}
```

### Example built-in stores
```typescript
import {
  BigIntStore,
  BooleanStore,
  NumberStore,
  StringStore,
  SymbolStore,
} from '@react-noui/external-store';

export const myBigIntStore = makeExternalStore(BigIntStore, 0n);
myBigIntStore.set(1n);

export const myBooleanStore = makeExternalStore(BooleanStore, false);
myBooleanStore.set(true);

export const myNumberStore = makeExternalStore(NumberStore, 0);
myNumberStore.set(1);

export const myStringStore = makeExternalStore(StringStore, '');
myStringStore.set('foobar');

export const mySymbolStore = makeExternalStore(SymbolStore, Symbol());
mySymbolStore.set(Symbol('foobar'));

// Custom enum store
enum Foo { bar = 'bar', baz = 'baz'};
export const myStore = makeExternalStore(ExternalStore<Foo>, Foo.bar);
```

### Example custom store `loginDataStore`

Consider a login form with `email` and `password` fields.

```typescript
// src/stores/loginDataStore.ts
import { makeExternalStore } from '@react-noui/external-store';

type LoginData = { email: string; password: string };

// Stores data related to login.
export const loginDataStore = makeExternalStore(
  ExternalStore<LoginData>
  { email: '', password: '' }
);
```

Now our `react` components can be `props`-free with the `loginDataStore`.

```typescript
// components/LoginEmail.tsx
import { loginDataStore } from 'stores/loginDataStore';

export function LoginEmail() {
  const { email } = loginDataStore.useValue();
  return <input
    value={email}
    onChange={(event) => {
      loginDataStore.spread({ email: event.target.value })
    }}
  />
}
```

### Example ASYNC stores

Async stores handle `async` data. The only difference is the `get` API.

```typescript
const fetchStuff = () => fetch('/stuff').then(res => res.json());
const myAsyncStore = new ExternalStoreAsync<Stuff>(fetchStuff);
myAsyncStore.get().then(console.log);
```


Using the JSON placeholder API, we can quickly grab some async HTTP data.

```tsx
// stores/todosStore.ts
type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};
const fetchTodo = (id: number): Promise<Todo> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json());

export const todosStore = makeExternalStoreAsync(fetchTodo);

// ...later in your components...
function TodoComponent({ id }: { id: number }) {
  const todo = todosStore.useValue(id); // Promise<Todo[]>
  // ...
}
```

Parameters are also supported when requests need them.

```tsx
// stores/userStore.ts
type User = {
  id: number;
  email: string;
};
const fetchUser = (id: number): Promise<User> =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json());

class UserStore extends ExternalStoreAsync<User> {
  promise = fetchUser;
}

export const userStore = makeExternalStore(UserStore);

// ...later when you want to make the request...
await userStore.store.get(1); // Promise<User>
```

### Example `react` hook with `react.Suspense` support

This library supports the `react.Suspense` feature by allowing asynchronous requests to be exposed by the custom store. You can freely `throw` your async store's `get` method to trigger the `Suspense.fallback` property.

```typescript
// hooks/useTodos.ts
import { todosStore } from 'stores/todosStore';

function useTodos(): Todo[] {
  const todos = todosStore.useValue();
  if (!todos) throw todosStore.store.get();
  return todos;
}
```

The hook `useTodos` can be used `n` times anywhere in the application BUT ONLY ONE REQUEST IS EVER MADE. **This means your control flow is not dependent on the request lifecycle!**

```tsx
// components/Todos.tsx
import { Suspense } from 'react';
import { useTodos } from 'hooks/useTodos';

function Todos() {
  return (
    <Suspense fallback={<div>Loading todos…</div>}>
      <TodosLazy />
    </Suspense>
  )
}

function TodosLazy() {
  const todos = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>)
      )}
    </ul>
  )
}
```

If your async method requires arguments, you get strong-types from the `get` method. For instance, the `userStore` requires an `id` to get the user.

```typescript
// hooks/useUser.ts

function useUser(id: number) {
  const user = userStore.useValue();
  if (!user) throw userStore.store.get(id);
  return user;
}
```
