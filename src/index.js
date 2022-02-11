const testExport = require('./import-test');

function testingTest() {
  return false;
}

function importValueTest() {
  const test = testExport();
  console.log(test)
  return test;
}

importValueTest();

exports.testingTest = testingTest;
exports.importValueTest = importValueTest;
