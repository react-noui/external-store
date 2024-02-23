import { isRecord } from '../isRecord'

class TestClass {};

describe('isRecord', () => {
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
    expect(isRecord(value)).toBe(expected);
  });
});