const { add } = require('./index');

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
