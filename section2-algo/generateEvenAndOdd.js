// 2) Write a program to Generate Even and Odd Number less than N.

function generateEvenAndOddNumbers(n) {
    let evens = [], odds = [];
    for(let i = 1; i < n; i++) {
        i % 2 === 0 ? evens.push(i) : odds.push(i);
    }

    console.log(evens.join(','));
    console.log(odds.join(','));
}

generateEvenAndOddNumbers(10);

// Generate ‘N’ Even and Odd Numbers

function generateNEvenAndOddNumbers(n) {
    let evens = [], odds = [];
    for(let i = 1; i<= n*2; i++) {
        i % 2 === 0 ? evens.push(i) : odds.push(i);
    }
    console.log(evens.join(','));
    console.log(odds.join(','));
}

generateNEvenAndOddNumbers(10);

