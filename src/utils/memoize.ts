type MemoKey<T extends (...args: any[]) => any> = (...args: Parameters<T>) => string | string;
export type Memoize<T extends (...args: any[]) => any> = ((...args: Parameters<T>) => ReturnType<T>) & {
  reset: (...args: Parameters<T>) => void;
}

const defaultMemoKey = (...args: any[]): string => args.join(' ; ');

/**
 * 
 * @param method Method that returns a promise.
 * @param memoKey Any function
 * @returns 
 */
export function memoize<
  T extends (...args: any[]) => any
>(
  method: T,
  memoKey: MemoKey<T> = defaultMemoKey,
) {
  const memos = new Map<string, ReturnType<T>>();
  return Object.assign(
    (...args: Parameters<T>) => {
      const key = memoKey(...args);
      if (memos.has(key)) return memos.get(key);
      return method(...args).then((value: ReturnType<T>) => {
        memos.set(key, value);
        return value;
      });
    }, {
    reset: (...args: Parameters<T>) => {
      const key = memoKey(...args);
      if (memos.has(key)) memos.delete(key);
    }
  });
}
