// 25) Write a program to Convert Decimal to Binary

function binary(num) {
    let binary = '';
    let number = num;
    while (number > 0) {
        if(number % 2 === 0) {
            binary = Math.floor(number % 2) + binary
        } else {
            binary = Math.floor(number % 2) + binary
        }
        number = Math.floor(number / 2);
    }
    return binary;
}

console.log(binary(10));
console.log(binary(1024));

module.exports = binary; 