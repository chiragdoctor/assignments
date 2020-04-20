// 2) Write a program to Generate Even and Odd Number less than N.
const executor = require('./lib/executor');
const validators = require('./lib/validators');

function generateEvenAndOddNumbers(n) {
    let evens = [], odds = [];
    for(let i = 1; i < n; i++) {
        i % 2 === 0 ? evens.push(i) : odds.push(i);
    }
    return `Even: ${evens.join(',')}\nOdd: ${odds.join(',')}`; 
}

// generateEvenAndOddNumbers(10);

// Generate ‘N’ Even and Odd Numbers

function generateNEvenAndOddNumbers([n]) {
    let evens = [], odds = [];
    for(let i = 1; i<= n*2; i++) {
        i % 2 === 0 ? evens.push(i) : odds.push(i);
    }
    return `Even: ${evens.join(',')}\nOdd: ${odds.join(',')}`; 
}

const options = {
    choice: {
        choices: ['Generate Even and Odd numbers less then N', 'Generate ‘N’ Even and Odd Numbers'],
        question: 'Do you want to generate sequence or range? '
    },
    programs: [
        { 
            program: generateEvenAndOddNumbers, 
            questions: ['Please enter a number :'],
            validation: validators.isNumber, 
        },
        { 
            program: generateNEvenAndOddNumbers, 
            questions: ['Please enter a number: '],
            validation: validators.isNumber, 
        }
    ]
};

executor(options);
