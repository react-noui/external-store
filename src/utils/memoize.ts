type MemoKey<T extends (...args: any[]) => any> = (...args: Parameters<T>) => string | string;

const defaultMemoKey = (...args: any[]): string => args.join(' ; ');

/**
 * 
 * @param callback 
 * @param memoKey Any function
 * @returns 
 */
export function memoize<
  T extends (...args: any[]) => any
>(
  callback: T,
  memoKey: MemoKey<T> = defaultMemoKey,
): (...args: Parameters<T>) => ReturnType<T> extends Promise<infer U> ? Promise<U> : Promise<ReturnType<T>> {
  const memos = new Map<string, ReturnType<T>>()
  return (...args: Parameters<T>) => {
    const key = memoKey(...args);
    if (memos.has(key)) return memos.get(key);
    return callback(...args).then((value: ReturnType<T>) => {
      memos.set(key, value);
      return value;
    });
  }
}
