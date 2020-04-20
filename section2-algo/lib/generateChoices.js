const readLineSync = require('readline-sync');

function generateChoices({choices, question}) {
    return readLineSync.keyInSelect(choices, question);
}

module.exports = generateChoices;