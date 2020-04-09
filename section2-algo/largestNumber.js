// 11) Write a program to find the largest number among three numbers

function largestNumber(a, b, c) {
   if(a > b && a > c) {
        return a;
   } else if (b > c && b > a) {
       return b;
   } else if (c > a && c > b) {
       return c;
   }
}

console.log(largestNumber(2, 8, 7));
console.log(largestNumber(9, 8, 7));
console.log(largestNumber(9, 8, 10));

