// 21) Write a program to find the trace of given matrix
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function matrixTrace(mat) {
    const len = mat.length;
    let result = 0;
    for(let i = 0; i < len; i++) {
        result += mat[i][i];
    }
    return `Trace of matrix is ${result}`;
}

const options = {
    programs: { 
        program: matrixTrace,
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
        validation: validator.checkRowsAndCols
    },
    question: ['Please enter matrix size to find the trace (NxN): '],
    isMatrixQuestion: true
};
executor(options);