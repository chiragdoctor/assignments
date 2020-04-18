const readLineSync = require('readline-sync');

const getNumber = (question) => parseInt(readLineSync.question(question));
const questions = 'Please enter a number: ';

function executor(program, validator, question = questions) {
    let number;
    let repeat;
    do {
        number = getNumber(question);
        if(validator(number)) {
            const result = program(number);
            console.log(result);
            repeat = readLineSync.question('Do you want to enter another input (yes/no) ? ');
        } else {
            console.log('Please enter a valid number \n');
            number = getNumber(question);
        }
    } while(repeat === 'yes')
}

module.exports = executor;
