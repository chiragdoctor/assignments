// 19) Write a program to add, subtract and multiple of given (NXN) Matrices

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

console.log(matrixOperation([[1,2,3], [4,5,6], [7,8,9]], [[1,2,3], [4,5,6], [7,8,9]], '+'));
console.log(matrixOperation([[1,2,3], [4,5,6], [7,8,9]], [[1,2,3], [4,5,6], [7,8,9]], '-'));
console.log(matrixOperation([[1,2,3], [4,5,6], [7,8,9]], [[1,2,3], [4,5,6], [7,8,9]], '*'));