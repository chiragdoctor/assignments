// 26) Write a program using Left Shift Operator (6<<i = 6*2^i) and Derive the General Formula
const decimalToBinary = require("./decimalToBinary");

function binaryToDecimal(binary) {
    let result = 0;
    let binArr = binary.split('');
    for(let i = 0; i < binArr.length; i++) {
        result += Number(binArr[i]) * 2 ** (binArr.length - i - 1); 
    }
    return result;
}

function leftShift(number, bits) {
    // converting decimal to binary.
    let binary =  decimalToBinary(number);
    // padding 0's. 
    for(let i = 0; i < bits; i++) {
        binary += '0';
    }
    return binaryToDecimal(binary);    
}

function leftShiftUsingFormula(num, bits) {
    return (num * (2**bits));
}

console.log(leftShift(6, 1), " === ", leftShiftUsingFormula(6,1));
console.log(leftShift(6, 2), " === ", leftShiftUsingFormula(6,2));
