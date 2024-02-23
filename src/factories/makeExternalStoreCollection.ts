import { ExternalStoreCollection } from "../stores/ExternalStoreCollection";
import { syncExternalStore } from "./syncExternalStore";

/**
 * A collection is an Array of Records. Each record should contain a unique identifier,
 * defined by the `uniqueIdentifier` argument.
 * @param defaultValue Array of items to default the collection.
 * @param uniqueIdentifier Function that accepts one argument, a single item of the collection, and returns a unique value for that item.
 * @returns React-aware in-memory collection interface.
 * @example
 * type Todo = { text: string; done: boolean; id: string };
 * const Todos = makeExternalStoreCollection<Todo>([], (todo) => todo.id);
 * Todos.add({ text: "Add todo", done: false, id: "abc123" });
 * Todos.update("abc123", { done: true });
 */
export function makeExternalStoreCollection<T extends Record<string, unknown>>(
  defaultValue: T[],
  uniqueIdentifier: (value: T) => string | number
) {
  const store = new ExternalStoreCollection<T>(defaultValue, uniqueIdentifier);
  return {
    ...syncExternalStore(store),
    remove: store.remove,
    update: store.update,
    add: store.add,
  };
}
