// 9) Write a program for swapping of two arrays
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function swapTwoArrays([arr1, arr2]) {
    const arr1Len = arr1.length;
    arr1 = arr1.concat(...arr2);
    arr2 = arr1.splice(0, arr1Len);
    return `[${arr1.join(',')}] <==> [${arr2.join(',')}]`;
} 

const options = {
    programs: { 
        program: swapTwoArrays, 
        questions: (arrSize) => {
            const size1 = arrSize[0];
            const size2 = arrSize[1];
            let questionsSet1 = [];
            let questionsSet2 = [];
            for(let i = 1; i <= size1; i++) {
                questionsSet1.push(`Please enter number ${i} for array 1: `);
            }
            for(let i = 1; i <= size2; i++) {
                questionsSet2.push(`Please enter number ${i} for array 2: `);
            }
            return [questionsSet1, questionsSet2];
        },
        validation: validator.isNumber, 
    },
    question: ['Please enter size of array 1: ', 'Please enter size of array 2: ']
};

executor(options);