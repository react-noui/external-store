/**
 * @jest-environment jsdom
 */
require("@testing-library/jest-dom");

afterEach(() => {
  global.localStorage?.clear();
  global.sessionStorage?.clear();
});
