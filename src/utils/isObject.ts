export const isObject = (value: any): value is Record<string, any> => (
  typeof value === 'object' &&
  !Array.isArray(value) &&
  value !== null
);
