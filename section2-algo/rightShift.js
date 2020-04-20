// 27) Write a program using Right Shift Operator (6>>i = 6/2**i) and Derive the General Formula
const executor = require('./lib/executor');
const validator = require('./lib/validators');
const conversion = require('./lib/conversion');

function rightShiftUsingFormla(number,bits) {
    return Math.floor(number / (2**bits));
}

function rightShift([number, bits]) {
    // converting decimal to binary.
    let binary =  conversion.decimalToBinary(number);

    // remove bit's for right.
    binary = binary.slice(0, binary.length - bits);

    // padding 0's. 
    for(let i = 0; i < bits; i++) {
        binary = '0' + binary;
    }

    const usingRightShift = conversion.binaryToDecimal(binary);
    const usingFormula = rightShiftUsingFormla(number, bits);
    return `Conversion using ${usingRightShift} === ${usingFormula}`; 
}


const options = {
    programs: {
        program: rightShift,
        questions: [],
        validation: validator.isNumber
    },
    question: ['Please enter a number: ', 'Please enter how manys bits you want to shift: '],
    isStringQuestion: false
};

executor(options);