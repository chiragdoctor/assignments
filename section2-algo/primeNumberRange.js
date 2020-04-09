// 6) Write a program to generate Prime Numbers less than N.

const isPrimeNo = (n) => {
    if(n <= 1)
        return false;

    for(let i = 2; i < n; i++) {
        if(n % i === 0)
            return false;
    }
    return true;
}
function primeNumberSequence(n) {
    const prime = [];
    for(let i = 2; i <= n; i++) {
        if(isPrimeNo(i))
            prime.push(i);
    }
    return prime.join(', ');
}

console.log('Prime Number Sequence  => ', primeNumberSequence(20));


// Generate ‘N’ Prime Numbers/in given range.

function primeNumberRange(start, end) {
    const prime = [];
    for(let i = start; i < end; i++) {
        if(isPrimeNo(i)) {
            prime.push(i)
        }
    }
    return prime.join(', ');
}

console.log('Generate Prime number range  => ', primeNumberRange(20, 50));