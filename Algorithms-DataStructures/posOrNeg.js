// 14) Write a program to check whether a number is a positive number or negative number?
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function isPositive(num) {
    return num > 0 ? `${num} is Positive Number` : `${num} is Negative Number`;
}

const options = {
    programs: {
        program: isPositive,
        questions: [],
        validation: validator.isNumber
    },
    question: 'Please enter a number to check if it is Positive or Negative: ',
    isStringQuestion: false
};

executor.executeSingleQuestion(options);