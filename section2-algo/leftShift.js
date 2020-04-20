// 26) Write a program using Left Shift Operator (6<<i = 6*2^i) and Derive the General Formula
// const decimalToBinary = require("./decimalToBinary");
const executor = require('./lib/executor');
const validator = require('./lib/validators');
const conversion = require('./lib/conversion');

function leftShiftUsingFormula(num, bits) {
    return (num * (2**bits));
}

function leftShift([number, bits]) {
    // converting decimal to binary.
    let binary =  conversion.decimalToBinary(number);
    // padding 0's. 
    for(let i = 0; i < bits; i++) {
        binary += '0';
    }
    const usingLeftShift = conversion.binaryToDecimal(binary);
    const usingFormula = leftShiftUsingFormula(number, bits);
    return `Conversion using ${usingLeftShift} === ${usingFormula}`;    
}

const options = {
    programs: {
        program: leftShift,
        questions: [],
        validation: validator.isNumber
    },
    question: ['Please enter a number: ', 'Please enter how manys bits you want to shift: ']
};

executor.executeWithMultipleQuestions(options);