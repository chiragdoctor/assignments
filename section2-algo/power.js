// 15) Write a program to find power of a number using recursion
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function findPower([base, exponent]) {
    if (exponent <= 1) {
        return base;
    }
    return base * findPower([base, exponent - 1]); 
}

const options = {
    programs: {
        program: findPower,
        questions: [],
        validation: validator.isNumber
    },
    question: ['Please enter base: ', 'Please enter exponent: '],
    isStringQuestion: false
};

executor.executeWithMultipleQuestions(options);