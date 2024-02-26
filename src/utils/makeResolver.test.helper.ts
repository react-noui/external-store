/**
 * Allows manual resolution of a promise for testing async business logic.
 * @returns [Promise, resolve];
 */
export const makeResolver = <T = void>(): [Promise<T>, (value: T) => void] => {
  const resolver = new TestResolver<T>();
  return [resolver.P, resolver.resolve];
};

class TestResolver<T = void> {
  declare P: Promise<T>;
  declare resolve: (value: T) => void;

  constructor() {
    this.reset();
  }

  reset = () => {
    this.P = new Promise<T>((res) => {
      this.resolve = res;
    }).finally(this.reset);
  };
}
