import { memoize } from './memoize';

describe('memoize', () => {
  test('only calls memoized method once per argument combination', async () => {
    const method = jest.fn((x: number) => Promise.resolve(x));
    const memoizedMethod = memoize(method);

    // Once to set the memo
    let value = await memoizedMethod(1);
    expect(method).toBeCalledTimes(1);
    expect(value).toEqual(1);

    // Once to return the memoized value
    value = await memoizedMethod(1);
    expect(method).toBeCalledTimes(1);
    expect(value).toEqual(1);
  });
});