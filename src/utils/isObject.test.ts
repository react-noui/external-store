import { isObject } from './isObject'

class TestClass {};

describe('isObject', () => {
  test.each([
    {
      value: '',
      expected: false,
    },
    {
      value: false,
      expected: false,
    },
    {
      value: [],
      expected: false,
    },
    {
      value: new TestClass(),
      expected: true,
    },
    {
      value: {},
      expected: true,
    },
  ])('should handle $value', ({ value, expected }) => {
    expect(isObject(value)).toBe(expected);
  });
});