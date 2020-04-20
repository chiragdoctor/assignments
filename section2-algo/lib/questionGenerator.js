const readLineSync = require('readline-sync');

const getInfo = (questions) => questions.map((question) => parseInt(readLineSync.question(question)));
const singleQuestion = ['Please enter a number: '];
const repeatQuestion = () => readLineSync.question('Do you want to enter another input (yes/no) ? ');
const askAnyQuestion = (question) => parseInt(readLineSync.question(question));
const getSingleNumber = (question) => parseInt(readLineSync.question(question));
const getStringInput = (question) => readLineSync.question(question);

module.exports = {
    getInfo,
    singleQuestion,
    repeatQuestion,
    askAnyQuestion,
    getSingleNumber,
    getStringInput
}