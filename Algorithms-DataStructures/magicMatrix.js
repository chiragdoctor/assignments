// 40) Write a program to find ​given a matrix, check whether it’s magic square or not.
// (HINT:A Magic​ square is whose sum of elements diagonally,vertically,horizontally are equal)

function interchangeRowsAndCols(mat) {
    let result = new Array(mat.length);
    for (let i = 0; i < mat.length; i++) {
        result[i] = new Array(mat[i].length);
        for (let j = 0; j < result[i].length; j++) {
            result[i][j] = mat[j][i];
        }
    }

    return result;
}

function getRowSum(row) {
    return row.length === 0 ? 0 : row[0] + getRowSum(row.slice(1));
}

function checkMagicMatrix(mat) {
    let result = [];
    //Sum of all the rows
    for (let i = 0; i < mat.length; i++) {
        const row = getRowSum(mat[i])
        result.push(row);
    }

    //Sum of all the cols
    mat = interchangeRowsAndCols(mat);

    for (let i = 0; i < mat.length; i++) {
        const row = getRowSum(mat[i])
        result.push(row);
    }

    // diagonal 1
    let diag1 = 0;
    for (let i = 0; i < mat.length; i++) {
        diag1 += mat[i][i]
    }
    result.push(diag1);

    // diagonal 2
    let diag2 = 0;
    const len = mat.length;
    for (let i = 0; i < len; i++) {
        diag2 += mat[i][len - i - 1]
    }

    result.push(diag2);

    const res = result[0];
    let isValid = true;

    for (let i = 0; i < result.length; i++) {
        if (res !== result[i]) {
            return false;
        }
    }
    return isValid;
}

console.log(checkMagicMatrix([[2, 7, 6], [9, 5, 1], [4, 3, 8]]));