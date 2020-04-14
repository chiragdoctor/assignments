// 15) Write a program to find power of a number using recursion

function findPower(base, exponent) {
    if (exponent <= 1) {
        return base;
    }
    return base * findPower(base, exponent - 1); 
}

console.log(findPower(3, 5));