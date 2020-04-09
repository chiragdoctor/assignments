// Get fibonacci series for n numbers using iterative approach.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function getFibonacciUsingIteration(result, n) {
    let i = 0;
    while(result.length < n) {
        result.push(result[result.length - 1] + result[result.length - 2]);             
    } 
    return result.join(', ');
}

console.log('Iterative approach ==> ', getFibonacciUsingIteration([0, 1], 8));


// Get fibonacci series for n numbers using recursive approach.

function getFibonacciUsingRecursion(result, n) {
    if (result.length >= n) {
        return result.join(', ');
    }
    result.push(result[result.length - 1] + result[result.length - 2]);
    return getFibonacciUsingRecursion(result, n);
}

console.log('Recursive approach ==> ', getFibonacciUsingRecursion([0,1], 8));

