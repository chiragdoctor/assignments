// 1) Write a program to given input Check whether Even or odd.
const executor = require('./lib/executor');
const validator = require('./lib/validators');

var evenOrOdd = function(input) {
    return input % 2 === 0 ? `${input} is Even` : `${input} is Odd`;
}

const options = {
    programs: {
        program: evenOrOdd,
        questions: [],
        validation: validator.isNumber
    },
    question: 'Please enter a number: ',
    isStringQuestion: false
};

executor.executeSingleQuestion(options);