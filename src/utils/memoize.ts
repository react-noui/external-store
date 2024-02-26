export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any

type MemoKey<T extends (...args: any[]) => Promise<any>> = (...args: Parameters<T>) => string;

export type Memoize<T extends (...args: any[]) => Promise<any>> = ((...args: Parameters<T>) => Promise<AsyncReturnType<T>>) & {
  cache: {
    delete: (...args: Parameters<T>) => void;
    get: (...args: Parameters<T>) => AsyncReturnType<T> | undefined;
    isAwaiting: (...args: Parameters<T>) => boolean;
  };
}

const defaultMemoKey = (...args: any[]): string => args.join(' ; ');

/**
 * 
 * @param method Method that returns a promise.
 * @param memoKey Any function that returns a string.
 * @returns method with caches values.
 */
export function memoize<
  T extends (...args: any[]) => Promise<any>
>(
  method: T,
  memoKey: MemoKey<T> = defaultMemoKey,
): Memoize<T> {
  const memos = new Map<string, AsyncReturnType<T>>();
  const callers = new Map<string, Promise<any>>();
  const Memo = async (...args: Parameters<T>): Promise<AsyncReturnType<T>> => {
    const key = memoKey(...args);
    const result = memos.get(key);
    if (result) return Promise.resolve(result);
    const awaiting = callers.get(key);
    if (awaiting) return awaiting
    const ret = method(...args).then((value) => {
      memos.set(key, value);
      callers.delete(key);
      return value;
    });
    callers.set(key, ret);
    return ret;
  };
  Memo.cache = {
    delete: (...args: Parameters<T>) => {
      const key = memoKey(...args);
      if (memos.has(key)) memos.delete(key);
    },
    get: (...args: Parameters<T>) => {
      const key = memoKey(...args);
      return memos.get(key);
    },
    isAwaiting: (...args: Parameters<T>) => {
      const key = memoKey(...args);
      return callers.has(key);
    }
  };
  return Memo;
}
