// 18) Write a program to find area and circumference of circle
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function circle(raduis) {
    const circumference = 2 * Math.PI * raduis;
    const area = Math.PI * raduis ** 2;
    return `Area is ${area} && Circumference is ${circumference}`; 
}

const options = {
    programs: {
        program: circle,
        questions: [],
        validation: validator.isNumber
    },
    question: 'Please enter raduis of circle: ',
    isStringQuestion: false
};

executor.executeSingleQuestion(options);