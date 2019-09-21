const sum = require('./sum');

test('add a + b to equal ', () => {
  expect(sum(1, 2)).toBe(3);
});
test('add a + b to equal', () => {
    expect(sum(5,5)).toBe(12);
});