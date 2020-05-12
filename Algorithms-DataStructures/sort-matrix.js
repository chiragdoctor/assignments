// 33) Write a program to sort the matrix rows and columns

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function sortMatrixRows(mat) {
  //row sorting
  for (let i = 0; i < mat.length; i++) {
    mat[i] = bubbleSort(mat[i]);
  }
  console.log(mat);
}


function sortMatrixCols(mat) {
  //col sorting
  let result = new Array(mat.length);
  for (let i = 0; i < mat.length; i++) {
    result[i] = new Array(mat[i].length);
    for (let j = 0; j < mat[i].length; j++) {
      result[i][j] = mat[j][i];
    }
    result[i] = bubbleSort(result[i]);
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      mat[j][i] = result[i][j];
    }
  }

  console.log(mat);

}

const mat = [
  [3, 2, 2],
  [2, 1, 3],
  [8, 6, 0]
]

sortMatrixRows(mat); // [ [ 2, 2, 3 ], [ 1, 2, 3 ], [ 0, 6, 8 ] ]
sortMatrixCols(mat); // [ [ 0, 2, 3 ], [ 1, 2, 3 ], [ 2, 6, 8 ] ]
