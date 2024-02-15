import { ExternalStore } from "../ExternalStore";

describe('ExternalStore<T>', () => {
  test('external store specifications', () => {
    const listener = jest.fn();

    const store = new ExternalStore("");
    expect(store.value).toEqual("");
    
    store.subscribe(listener);

    store.setValue("TEST");

    expect(store.value).toEqual("TEST");
    expect(listener).toHaveBeenCalledTimes(1);

    listener.mockClear();
    store.setValue('');
    expect(store.value).toEqual("");
    expect(listener).toHaveBeenCalledTimes(1);
  });

  test('external store specifications with custom method and initializer', () => {
    class FooStore extends ExternalStore<{ foo: number, bar: number }> {
      addFoo(value: number) {
        this.setValue({
          ...this.value,
          foo: this.value.foo + value,
        });
      }
      addBar(value: number) {
        this.setValue({
          ...this.value,
          bar: this.value.bar + value,
        });
      }
    }

    const listener = jest.fn();

    const store = new FooStore({ foo: 0, bar: 100 });
    expect(store.value.foo).toEqual(0);
    expect(store.value.bar).toEqual(100);

    store.subscribe(listener);

    store.addFoo(1);
    store.addBar(100);

    expect(store.value.foo).toEqual(1);
    expect(store.value.bar).toEqual(200);
    expect(listener).toHaveBeenCalledTimes(2);
  });

  test('external store reset specifications', () => {
    const numberStore = new ExternalStore(0);
    numberStore.setValue(100);
    expect(numberStore.value).toBe(100);
    numberStore.reset();
    expect(numberStore.value).toBe(0);
  });
});
