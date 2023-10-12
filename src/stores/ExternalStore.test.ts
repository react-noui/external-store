import { ExternalStore } from "./ExternalStore";

describe('ExternalStore<T>', () => {
  test('external store specifications', () => {
    const listener = jest.fn();

    class InputStore extends ExternalStore<string> {}
    const inputStore = new InputStore();
    expect(inputStore.value).toBeUndefined();

    // Subscribe
    inputStore.subscribe(listener);

    inputStore.set('foobar');
    expect(inputStore.value).toEqual('foobar');
    expect(listener).toHaveBeenCalledTimes(1);

    listener.mockClear();
    inputStore.set();
    expect(inputStore.value).toBeUndefined();
    expect(listener).toHaveBeenCalledTimes(1);

    listener.mockClear();
    inputStore.set('foobar');
    expect(inputStore.value).toEqual('foobar');
    expect(listener).toHaveBeenCalledTimes(1);

    listener.mockClear();
    inputStore.clear();
    expect(inputStore.value).toBeUndefined();
    expect(listener).toHaveBeenCalledTimes(1);
  });

  test('external store specifications with custom method and initializer', () => {
    class CounterStore extends ExternalStore<number> {
      add(value: number = 1) {
        this.set((this.value || 0) + value);
      }
    }

    const countOne = new CounterStore(10);
    const countTwo = new CounterStore();
    expect(countOne.value).toEqual(10);
    expect(countTwo.value).toBeUndefined();

    countOne.add();
    countTwo.add();
    expect(countOne.value).toEqual(11);
    expect(countTwo.value).toEqual(1);

    countOne.add(9);
    countTwo.add(9);
    expect(countOne.value).toEqual(20);
    expect(countTwo.value).toEqual(10);
  });

  test('external store spread specifications for custom complex objects', () => {
    type TodoForm = {
      id?: number;
      title: string;
      userId?: number;
      completed: boolean;
    };
    const todoForm = new ExternalStore<TodoForm>({
      title: 'New todo…',
      completed: false,
      userId: -1,
    });

    todoForm.spread({ title: 'Get dishwasher detergent' });

    expect(todoForm.value).toMatchObject({
      title: 'Get dishwasher detergent',
      completed: false,
    });

    // DANGER Undefined values are ignored.
    todoForm.clear();
    expect(todoForm.value).toBeUndefined();
    todoForm.spread({ title: 'Get dishwasher detergent' });
    expect(todoForm.value).toBeUndefined();
    todoForm.spread();
    expect(todoForm.value).toBeUndefined();

    // Non-object values get ignored.
    const numberStore = new ExternalStore<number>(0);
    numberStore.spread(100);
    expect(numberStore.value).toBe(0);    
  });

  test('external store reset specifications', () => {
    const numberStore = new ExternalStore<number>(0);
    numberStore.set(100);
    expect(numberStore.value).toBe(100);
    numberStore.reset();
    expect(numberStore.value).toBe(0);
  });

  test('external store clear specifications', () => {
    const numberStore = new ExternalStore<number>(0);
    numberStore.set(100);
    expect(numberStore.value).toBe(100);
    numberStore.clear();
    expect(numberStore.value).toBeUndefined();
  });
});
