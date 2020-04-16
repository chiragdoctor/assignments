// Write a Program to display transpose of a matrix

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

console.log(transpose([[1,3,4], [3,4,7]]));
console.log(transpose([[1,2,3], [4,5,6], [7,8,9]]));