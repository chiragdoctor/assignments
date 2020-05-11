// 19) Write a program to add, subtract and multiple of given (NXN) Matrices
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function matrixOperation(mat1, mat2, operator) {
    const n = mat1.length;
    let result = [];

    let operation = {
        '+' : (num1, num2) => num1 + num2,
        '-' : (num1, num2) => num1 - num2,
        '*' : (num1, num2) => num1 * num2,
    }

    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            result.push(operation[operator](mat1[row][col], mat2[row][col]));
        }
    }
    return result;
}

const options = {
    programs: { 
        program: matrixOperation, 
        questions: (matrixSize) => {
            const [rows, cols] = matrixSize.split('x');
            let result = new Array(rows);
            for(let i = 0; i < rows; i++) {
                result[i] = new Array(cols);
                for(let j = 0; j < cols; j++) {
                    result[i][j] = `Please enter value for row ${i} and col ${j}: `;
                }
            }
            return result;
        },
        validation: validator.checkMatrixSize
    },
    question: ['Please select the operation (+/-/*): ', 'Please enter size of matrix 1 (NxN) : ', 'Please enter size of matrix 2 (NxN): '],
    isMatrixQuestion: true
};
executor.executeWithMatrix(options);
