// 42) Write a program to accept a matrix and determine whether it is a sparse matrix or not?. A sparse
// matrix is a matrix, which has more zero elements than nonzero elements.
function sparseMatrix(mat) {
    let zeroCount = 0;
    let total = 0;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 0) {
                zeroCount++;
            }
        }    
        total += mat[i].length;
    }
    return zeroCount > total / 2 ? console.log(true) : console.log(false);  
}

const mat = [
    [0,3,5],
    [2,2,2],
    [5,3,1]
]

sparseMatrix(mat);

const mat1 = [
    [0,3,0],
    [0,0,2],
    [0,3,0]
]

sparseMatrix(mat1);