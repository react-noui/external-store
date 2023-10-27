import { memoize } from './memoize';

describe('memoize', () => {
  test('only calls memoized method once per argument combination', async () => {
    const method = jest.fn((x: number) => Promise.resolve(x));
    const memoizedMethod = memoize(method);

    // Once to set the memo
    let value = await memoizedMethod(1);
    expect(method).toBeCalledTimes(1);
    expect(value).toEqual(1);

    // Call n times to receive the memoized value.
    value = await memoizedMethod(1);
    value = await memoizedMethod(1);
    value = await memoizedMethod(1);

    // Wrapped method only called once.
    expect(method).toHaveBeenCalledTimes(1);

    // Reset to receall method.
    memoizedMethod.reset(1);
    memoizedMethod(1);
    expect(method).toHaveBeenCalledTimes(2);
  });
});