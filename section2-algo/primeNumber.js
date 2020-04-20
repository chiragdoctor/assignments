// 3) Write a program to decide given N is Prime or not.
const executor = require('./lib/executor');
const validators = require('./lib/validators');


const isPrimeNumber = (n) => {
    if(n < 1)
    return 'Prime no can only be a positve number.';

    if(n <= 3) {
        return 'Yes, it\'s a prime number';
    } 
    for(let i = 2; i < n; i++) {
        if(n % i === 0)
            return 'No, it\'s not a prime no';
    }
    return 'Yes, it\'s a prime number';     
};

const options = {
    programs: {
        program: isPrimeNumber,
        questions: [],
        validation: validators.isNumber
    },
    question: 'Please enter a number: ',
    isStringQuestion: false
};

executor(options);