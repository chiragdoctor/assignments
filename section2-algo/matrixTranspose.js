// Write a Program to display transpose of a matrix
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function transpose(mat) {
    let result = new Array(mat[0].length);
    for(let i = 0; i < result.length; i++) {
        result[i] = new Array(mat.length);
        for(let j = 0; j < result[i].length; j++) {
            result[i][j] = mat[j][i];
        }    
    }
    return result;
}

const options = {
    programs: { 
        program: transpose ,
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
    question: ['Please enter matrix size to find the transpose (NxN): '],
    isMatrixQuestion: true
};
executor(options);