// 35) Write a Program to accept two matrices and check if they are equal

function matrixEqual(mat1, mat2) {
    for(let i = 0; i < mat1.length; i++) {
        for(let j = 0; j < mat1[i].length; j++) {
            if(mat1[i][j] !== mat2[i][j]) {
                return false;
            }
        }    
    }
    return true;
}

const mat1 = [
    [1,3,5],
    [2,2,2],
    [5,3,1]
]

const mat2 = [
    [1,2,5],
    [2,3,2],
    [5,3,8]
]

console.log(matrixEqual(mat1, mat1)); // true

console.log(matrixEqual(mat1, mat2)); // false