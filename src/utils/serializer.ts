
export type SerializeUpDown<T> = {
  up: (value: T) => string;
  down: (value: string) => T;
};

const identity = <T>(value: T) => value;

export const stringSerializer = {
  up: identity<string>,
  down: identity<string>,
};

export const jsonSerializer = {
  up: JSON.stringify,
  down: JSON.parse,
}
