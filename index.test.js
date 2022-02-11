const index = require('./src/index');

test('test jest is working', () => {
  expect(index.testingTest()).toBe(false);
});
