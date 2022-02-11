const testExport = require('./import-test')

function testingTest() {
  return false;
}

function importValueTest() {
    testExport();
}

importValueTest()

exports.testingTest = testingTest;
exports.importValueTest = importValueTest;
