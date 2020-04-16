// 27) Write a program using Right Shift Operator (6>>i = 6/2**i) and Derive the General Formula
const binaryToDecimal = require('./leftShift');
const decimalToBinary = require("./decimalToBinary");

function rightShift(number, bits) {
    // converting decimal to binary.
    let binary =  decimalToBinary(number);

    // remove bit's for right.
    binary = binary.slice(0, binary.length - bits);

    // padding 0's. 
    for(let i = 0; i < bits; i++) {
        binary = '0' + binary;
    }
    
    return binaryToDecimal(binary);    
}

function rightShiftUsingFormla(number,bits) {
    return Math.floor(number / (2**bits));
}


console.log(rightShift(6,1), rightShiftUsingFormla(6,1));
console.log(rightShift(20,3), rightShiftUsingFormla(20,3));