// 8) Write a program to find the Sum of Array Elements.

var sumOfArray = function sumOfArray(arr) {
    return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1)); 
}  

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));