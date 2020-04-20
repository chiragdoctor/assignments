// Write a program to subtract two integers without using Minus (-) operator
const executor = require('./lib/executor');
const validators = require('./lib/validators');

function subtract([x , y]) {
     // Iterate till there 
    // is no carry 
    while (y != 0) 
    { 
        // borrow contains common  
        // set bits of y and unset 
        // bits of x 
        const borrow = (~x) & y; 
  
        // Subtraction of bits of x  
        // and y where at least one 
        // of the bits is not set 
        x = x ^ y; 
  
        // Borrow is shifted by one  
        // so that subtracting it from 
        // x gives the required sum 
        y = borrow << 1; 
    } 
    return `Subsctracton is ${x}`; 
}

const options = {
    programs: {
        program: subtract,
        questions: [],
        validation: validators.isNumber
    },
    question: ['Please enter number 1: ', 'Please enter number 2: '],
    isStringQuestion: false
};

executor.executeWithMultipleQuestions(options);