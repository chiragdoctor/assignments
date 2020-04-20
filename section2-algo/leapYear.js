// 13) Write a program to Check Whether the given year is a leap year or not
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function isLeapYear(year) {
    return year % 4 === 0 ? `Yes, ${year} is a leap year` : `No, ${year} is not a leap year`;
}

const options = {
    programs: {
        program: isLeapYear,
        questions: [],
        validation: validator.isNumber
    },
    question: 'Please enter a year: ',
    isStringQuestion: false
};

executor.executeSingleQuestion(options);

