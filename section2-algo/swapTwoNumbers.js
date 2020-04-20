/* 24)  Write An Algorithm using Javascript to swap two numbers using temporary variables,
        using arithmetic operators, using logical operators?(Swapping should be done using 5
    methods)
*/
const executor = require('./lib/executor');
const validators = require('./lib/validators');

// 1. 
function swapUsingTempVar([num1, num2]) {
    const temp = num2;
    num2 = num1;
    num1 = temp;
    return `Using temp variable:  ${num1} <==> ${num2}`;
}

// 2.
function swapUsingAddAndSub([num1, num2]) {
    num2 = num1 + num2;
    num1 = num2 - num1;
    num2 = num2 - num1;
    return `Using addition and substraction: ${num1} <==> ${num2}`;
}


// 3.
function swapUsingMulAndDiv([num1, num2]) {
    num2 = num1 * num2;
    num1 = num2 / num1;
    num2 = num2 / num1;
    return `Using multiply and divide: ${num1} ==> ${num2}`;
}

// 4.
function swapUsingXOR([num1, num2]) {
    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    return `Using XOR: ${num1} ==> ${num2}`;
}


// 5.
function swapUsingXNOR([num1, num2]) {
    num1 = ~(num1 ^ num2);
    num2 = ~(num1 ^ num2);
    num1 = ~(num1 ^ num2);
    return `Using XNOR: ${num1} ==> ${num2}`;
}

const options = {
    choice: {
        choices: ['Swap using Temp variable ', 'Swap using arithmatic operator(+&-) ', 'Swap using arithmatic operator(*&/) ', 'Swap using XOR ', 'Swap using XNOR '],
        question: 'Which method you want to use for swapping? '
    },
    programs: [
        { 
            program: swapUsingTempVar, 
            questions: ['Please enter a number 1: ', 'Please enter a number 2: '],
            validation: validators.isNumber, 
        },
        { 
            program: swapUsingAddAndSub, 
            questions: ['Please enter a number 1: ', 'Please enter a number 2: '],
            validation: validators.isNumber, 
        }
        ,
        { 
            program: swapUsingMulAndDiv, 
            questions: ['Please enter a number 1: ', 'Please enter a number 2: '],
            validation: validators.isNumber, 
        },
        { 
            program: swapUsingXOR, 
            questions: ['Please enter a number 1: ', 'Please enter a number 2: '],
            validation: validators.isNumber, 
        },
        { 
            program: swapUsingXNOR, 
            questions: ['Please enter a number 1: ', 'Please enter a number 2: '],
            validation: validators.isNumber, 
        }
    ]
};

executor.executeWithChoices(options);