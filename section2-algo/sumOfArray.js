// 8) Write a program to find the Sum of Array Elements.
const executor = require('./lib/executor');
const validator = require('./lib/validators');

var sumOfArray = function sumOfArray(arr) {
    return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1)); 
}  

const options = {
    programs: { 
        program: sumOfArray, 
        questions: (arrSize) => {
            let questions = [];
            for(let i = 1; i <= arrSize; i++) {
                questions.push(`Please enter number ${i}: `);
            }
            return questions;
        },
        validation: validator.isNumber, 
    },
    question: 'Please enter size of array: '
};

executor.executeSingleQuestion(options);
