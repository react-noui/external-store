import { memoize } from '../memoize';
import { makeResolver } from "../makeResolver.test.helper";

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
    memoizedMethod.cache.delete(1);
    memoizedMethod(1);
    expect(method).toHaveBeenCalledTimes(2);
  });

  test("returns the promise if it is still awaiting", async () => {
    const [P, resolve] = makeResolver<number>();
    const method = jest.fn((_arg: string) => P);
    const memoizedMethod = memoize(method);
    
    const value = memoizedMethod("foo");
    const value2 = memoizedMethod("foo");

    expect(memoizedMethod.cache.isAwaiting("foo")).toBeTruthy();
    expect(memoizedMethod.cache.get("foo")).toBeUndefined();
    
    resolve(1);
    await Promise.all([value, value2]);

    expect(value).resolves.toEqual(1);
    expect(value2).resolves.toEqual(1);

    expect(memoizedMethod.cache.isAwaiting("foo")).toBeFalsy();
    expect(memoizedMethod.cache.get("foo")).toEqual(1);
    expect(method).toHaveBeenCalledTimes(1);
  });
});
