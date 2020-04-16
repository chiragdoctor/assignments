// 21) Write a program to find the trace of given matrix

function matrixTrace(mat) {
    const len = mat.length;
    let result = 0;
    for(let i = 0; i < len; i++) {
        result += mat[i][i];
    }
    return result;
}

console.log(matrixTrace([[1,2,3],[4,5,6],[7,8,9]]))
console.log(matrixTrace([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));