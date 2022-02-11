const index = require('./src/index');

test('test jest is working', () => {
  expect(index.testingTest()).toBe(false);
});

test('test double import', () => {
  expect(index.importValueTest()).toBe('test from testExport');
});
