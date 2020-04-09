// 3) Write a program to decide given N is Prime or not.

const isPrimeNumber = (n) => {
    if(typeof n !== 'number') 
        return 'Its not a number';
    if(n < 1)
    return 'Prime no can only be a positve number.';

    if(n <= 3) {
        return 'Yes, it\'s a prime number';
    } 
    for(let i = 2; i < n; i++) {
        if(n % i === 0)
            return 'No, it\'s not a prime no';
    }
    return 'Yes, it\'s a prime number';     
}

console.log('Is Prime No ==> ', isPrimeNumber('4'));
console.log('Is Prime No ==> ', isPrimeNumber(1));
console.log('Is Prime No ==> ', isPrimeNumber(4));
console.log('Is Prime No ==> ', isPrimeNumber(5));
console.log('Is Prime No ==> ', isPrimeNumber(25));
