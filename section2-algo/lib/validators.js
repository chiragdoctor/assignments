const isNumber = (number) => !isNaN(number);

const checkMatrixSize = (mat1, mat2) => {
    const [mat1Rows, mat1Cols] = mat1.split('x');
    const [mat2Rows, mat2Cols] = mat2.split('x');
    console.log(mat1Rows == mat2Rows && mat1Cols == mat2Cols)
    return mat1Rows == mat2Rows && mat1Cols == mat2Cols;
};

const checkRowsAndCols = mat => {
    const [rows, cols] = mat.split('x');
    return rows == cols;
}

module.exports = {
    isNumber,
    checkMatrixSize,
    checkRowsAndCols
}