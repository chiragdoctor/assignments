// 1) Write a program to given input Check whether Even or odd.
const readLineSync = require('readline-sync');

const executor = require('./executor');
const isNumber = (number) => !isNaN(number);

var evenOrOdd = function(input) {
    return input % 2 === 0 ? `${input} is Even` : `${input} is Odd`;
}

executor(evenOrOdd, isNumber);