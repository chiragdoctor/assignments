// 34) Write a Program to add all Elements in Matrix

function sumOfArray(arr) {
    return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1)); 
}  

function addMatrixElements(mat) {
    let result = 0;
    for(let i = 0; i < mat.length; i++) {
        result += sumOfArray(mat[i]);
    }
    console.log(result);
}

const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
addMatrixElements(mat);