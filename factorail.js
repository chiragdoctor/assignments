// Get factorial using iterative approach.

function getFactorialUsingIteration(n) {
    var result = 1;
    for(let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log('Using iterative method ==> ', getFactorialUsingIteration(4));
console.log('Using iterative method ==> ', getFactorialUsingIteration(10));


// Get factorial using recursive approach.

function getFactorialUsingRecursion(n) {
    if(n <= 1) 
        return 1;
    return n * getFactorialUsingRecursion(n-1);
}

console.log('Using recursion method ==> ', getFactorialUsingRecursion(4));
console.log('Using recursion method ==> ', getFactorialUsingRecursion(10));
