// 37) Write a Program to check the frequency(count) of odd numbers and even numbers in matrix

function frequencyCount(mat) {
    let oddCount = 0;
    let evenCount = 0;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }    
    }
    console.log(`Even Count: ${evenCount}  Odd Count: ${oddCount}`);
}

const mat = [
    [1,3,5],
    [2,2,2],
    [5,3,1]
]

frequencyCount(mat); // Even Count: 3  Odd Count: 6



