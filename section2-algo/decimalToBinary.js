// 25) Write a program to Convert Decimal to Binary
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function binary(num) {
    let binary = '';
    let number = num;
    while (number > 0) {
        if(number % 2 === 0) {
            binary = Math.floor(number % 2) + binary
        } else {
            binary = Math.floor(number % 2) + binary
        }
        number = Math.floor(number / 2);
    }
    return binary;
}

const options = {
    programs: {
        program: binary,
        questions: [],
        validation: validator.isNumber
    },
    question: 'Please enter a number to convert to bianry: ',
    isStringQuestion: false
};

executor(options);

