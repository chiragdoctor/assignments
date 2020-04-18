// 2) Write a program to Generate Even and Odd Number less than N.
const readLineSync = require('readline-sync');
const executor = require('./executor');

const isNumber = (number) => !isNaN(number);


function generateEvenAndOddNumbers(n) {
    let evens = [], odds = [];
    for(let i = 1; i < n; i++) {
        i % 2 === 0 ? evens.push(i) : odds.push(i);
    }
    return `Even: ${evens.join(',')}\nOdd: ${odds.join(',')}`; 
}

// generateEvenAndOddNumbers(10);

// Generate ‘N’ Even and Odd Numbers

function generateNEvenAndOddNumbers(n) {
    let evens = [], odds = [];
    for(let i = 1; i<= n*2; i++) {
        i % 2 === 0 ? evens.push(i) : odds.push(i);
    }
    return `Even: ${evens.join(',')}\nOdd: ${odds.join(',')}`; 
}

// generateNEvenAndOddNumbers(10);

const choices = ['Generate Even and Odd numbers less then N', 'Generate ‘N’ Even and Odd Numbers'];

const index = readLineSync.keyInSelect(choices, 'Which sequence do you want to generate? ');

if(index === 0) {
    executor(generateEvenAndOddNumbers, isNumber);
} else if (index === 1) {
    executor(generateNEvenAndOddNumbers, isNumber);
} else {
    console.log('Program Existed');
}
