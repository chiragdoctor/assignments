// 11) Write a program to find the largest number among three numbers
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function largestNumber([a, b, c]) {
    let result = 0;
    if (a > b && a > c) {
        result = a;
    } else if (b > c && b > a) {
        result = b;
    } else if (c > a && c > b) {
        result = c;
    }
    return `Largest no is ${result}`;
}

const options = {
    programs: {
        program: largestNumber,
        questions: [],
        validation: validator.isNumber
    },
    question: ['Please enter a number 1: ', 'Please enter a number 2: ', 'Please enter a number 3: '],
    isStringQuestion: false
};

executor(options);