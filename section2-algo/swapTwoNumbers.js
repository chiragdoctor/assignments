/* 24)  Write An Algorithm using Javascript to swap two numbers using temporary variables,
        using arithmetic operators, using logical operators?(Swapping should be done using 5
    methods)
*/

// 1. 
function swapUsingTempVar(num1, num2) {
    const temp = num2;
    num2 = num1;
    num1 = temp;
    console.log('Using temp variable ==> ',num1, num2);
}

swapUsingTempVar(10, 8);

// 2.
function swapUsingAddAndSub(num1, num2) {
    num2 = num1 + num2;
    num1 = num2 - num1;
    num2 = num2 - num1;
    console.log('Using addition and substraction ==> ', num1, num2);
}

swapUsingAddAndSub(897, 9787);


// 3.
function swapUsingMulAndDiv(num1, num2) {
    num2 = num1 * num2;
    num1 = num2 / num1;
    num2 = num2 / num1;
    console.log('Using Multitply and divide ==> ', num1, num2);
}

swapUsingMulAndDiv(2, 7);

// 4.
function swapUsingXOR(num1, num2) {
    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    console.log('Using XOR ==> ',num1, num2);
}

swapUsingXOR(2, 15);

// 5.
function swapUsingXNOR(num1, num2) {
    num1 = ~(num1 ^ num2);
    num2 = ~(num1 ^ num2);
    num1 = ~(num1 ^ num2);
    console.log('Usng XNOR ==>', num1, num2);
}

swapUsingXNOR(12, 13);