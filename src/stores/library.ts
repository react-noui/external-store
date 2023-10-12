import { ExternalStore } from "./ExternalStore";

export class StringStore extends ExternalStore<string> {}
export class NumberStore extends ExternalStore<number> {}
export class BooleanStore extends ExternalStore<boolean> {}
export class SymbolStore extends ExternalStore<Symbol> {}
export class BigIntStore extends ExternalStore<BigInt> {}

export class SetStore<T> extends ExternalStore<Set<T>> {}
export class MapStore<T> extends ExternalStore<Map<string | Symbol, T>> {}
export class ErrorStore<T extends Error> extends ExternalStore<T> {}
