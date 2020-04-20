// 6) Write a program to generate Prime Numbers less than N.
const generateChoices = require('./lib/generateChoices');
const executor = require('./lib/executor');
const validators = require('./lib/validators');

const isPrimeNo = (n) => {
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function primeNumberSequence([n]) {
    const prime = [];
    for (let i = 2; i <= n; i++) {
        if (isPrimeNo(i))
            prime.push(i);
    }
    return prime.join(', ');
}

// Generate ‘N’ Prime Numbers/in given range.

function primeNumberRange([start, end]) {
    const prime = [];
    for (let i = start; i < end; i++) {
        if (isPrimeNo(i)) {
            prime.push(i)
        }
    }
    return prime.join(', ');
}

const options = {
    choice: {
        choices: ['Prime Number Sequence: ', 'Generate Prime number range: '],
        question: 'Do you want to generate sequence or range? '
    },
    programs: [
        { 
            program: primeNumberSequence, 
            questions: ['Please enter a number :'],
            validation: validators.isNumber, 
        },
        { 
            program: primeNumberRange, 
            questions: ['Please enter start number: ', 'Please enter end number: '],
            validation: validators.isNumber, 
        }
    ]
};

executor.executeWithChoices(options);
