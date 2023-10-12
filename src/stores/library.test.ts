import { ExternalStore } from './ExternalStore';
import * as library from './library'

describe('library', () => {
  test.each([
    {
      Store: 'BigIntStore',
      initialValue: 0n,
      value: 10n,
    },
    {
      Store: 'BooleanStore',
      initialValue: false,
      value: true,
    },
    {
      Store: 'ErrorStore',
      initialValue: new Error(),
      value: new Error('with a message'),
    },
    {
      Store: 'MapStore',
      initialValue: new Map(),
      value: new Map([['a', 1], ['b', 2]]),
    },
    {
      Store: 'NumberStore',
      initialValue: 0,
      value: 1,
    },
    {
      Store: 'SetStore',
      initialValue: new Set(),
      value: new Set([1,2,3]),
    },
    {
      Store: 'StringStore',
      initialValue: '',
      value: 'next value',
    },
    {
      Store: 'SymbolStore',
      initialValue: Symbol(),
      value: Symbol('not undefined'),
    },
  ])('should handle store type $Store', ({ Store, initialValue, value }) => {
    // @ts-ignore
    const store = new library[Store](initialValue) as ExternalStore<typeof value>;
    expect(store.value).toBe(initialValue);
    store.set(value);
  });
});
