// Write a program to find remainder of two numbers without using modulus (%) operator
const executor = require('./lib/executor');
const validators = require('./lib/validators');

function remainder([num, divisor]) {
    // Find the quotient 
    const q = Math.floor(num / divisor);

    // get the product of quotiant * number
    const product = q * divisor;

    // Substract num - product to get remainder
    const remainder = num - product; 
    return `Remainder is ${remainder}`;
}

const options = {
    programs: {
        program: remainder,
        questions: [],
        validation: validators.isNumber
    },
    question: ['Please enter a number: ', 'Please enter a divisor: '],
    isStringQuestion: false
};

executor(options);