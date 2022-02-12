const index = require('./src/index');

describe('ship factory function', () => {
  const testShip = index.newShip(2);
  test('length property is set', () => {
    expect(testShip.length).toBe(2);
  });
});
