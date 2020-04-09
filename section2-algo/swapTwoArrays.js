// 9) Write a program for swapping of two arrays

function swapTwoArrays(arr1, arr2) {
    const arr1Len = arr1.length;
    arr1 = arr1.concat(...arr2);
    arr2 = arr1.splice(0, arr1Len);
    console.log(arr1, arr2);
} 

swapTwoArrays([1,2, 3, 5, 6], [4, 4, 5, 7]); // [ 4, 4, 5, 7 ] [ 1, 2, 3, 5, 6 ]

