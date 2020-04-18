// 3) Write a program to decide given N is Prime or not.
const readLineSync = require('readline-sync');
const executor = require('./executor');

const isNumber = (number) => !isNaN(number);


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
}

executor(isPrimeNumber, isNumber);