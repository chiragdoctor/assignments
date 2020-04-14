// 14) Write a program to check whether a number is a positive number or negative number?

function isPositive(num) {
    return num > 0 ? 'Positive Number' : 'Negative Number';
}

console.log(isPositive(-1));
console.log(isPositive(1));