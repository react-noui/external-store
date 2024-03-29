export const isRecord = (value: any): value is Record<string, unknown> => (
  typeof value === 'object' &&
  !Array.isArray(value) &&
  value !== null
);
