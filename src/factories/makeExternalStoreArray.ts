import { ExternalStoreArray } from "../stores/ExternalStoreArray";
import { syncExternalStore } from "./syncExternalStore";

/**
 * External store for use with a boolean value.
 * @param arg T[]
 * @example
 * ```typescript
 * const MyStrings = makeExternalStore<string>([]);
 * ```
 * 
 * ```tsx
 * const ItemsDisplay = () => (
 *   <div>{MyStrings.useValue().map((value) => (
 *     <div key={value}>{value}</div>
 *   ))}</div>
 * );
 * 
 * const handleAddItem = <T>(item: T) =>
 *   MyStrings.push(event.target.checked);
 * 
 * const AddItemButton = <T>({ item }: { item: T }) => (
 *   <input checked={MyStrings.useValue()} onChange={handleAddItem} />
 * );
 * ```
 */
export function makeExternalStoreArray<T>(arg: T[]) {
  const store = new ExternalStoreArray<T>(arg);
  return {
    ...syncExternalStore(store),
    push: store.push,
    pop: store.pop,
    shift: store.shift,
    unshift: store.unshift,
  };
}
