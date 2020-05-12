// 36) Write a Program to check if a given matrix is an identity matrix

function isIdentityMatrix(mat) {
    const rows = mat.length;
    for(let i = 0; i < rows; i++) {
        const cols = mat[i].length;
        if(mat[i][i] !== 1) {
            console.log(i, j, mat[i][j])
            return 'It is not an identity matrix';
        }
        for(let j = 0; j < cols; j++) {
            if( i !== j && mat[i][j] !== 0) {
                return 'It is not an identity matrix';
            }
        }    
    }
    return 'It is an identity matrix'; 
}

// 2x2 matrix
const mat1 = [
    [1,0],
    [0,1]
]

console.log(isIdentityMatrix(mat1));

// 4x4 matrix
const mat2 = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
]

console.log(isIdentityMatrix(mat2));

// Not identity matrix
const mat3 = [
    [1,0,0,1],
    [0,1,0,0],
    [0,0,1,0],
    [0,1,0,1],
]

console.log(isIdentityMatrix(mat3));
