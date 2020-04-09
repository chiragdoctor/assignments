// Write a program to find remainder of two numbers without using modulus (%) operator

function remainder(num, divisor) {
    // Find the quotient 
    const q = Math.floor(num / divisor);

    // get the product of quotiant * number
    const product = q * divisor;

    // Substract num - product to get remainder
    const remainder = num - product; 
    return remainder;
}

console.log('Modulo  => ', remainder(27, 5));
console.log('Modulo  => ', remainder(30, 5));