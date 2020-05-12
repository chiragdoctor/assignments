// 50)Write An Algorithm using Javascript to Reverse Array Elements without using Built in Function, 
// ​with using temp array?

function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}

reverseArray(['one','two','three', 'four', 'seven', 'eight']);
reverseArray([10,9,8,7,6,5,4,3,2,1,0]);