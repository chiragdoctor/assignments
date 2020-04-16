// 17)  Write a program to classify the triangle as equilateral, isosceles and scalene to the
//      given sides of triangle.

function triangles(s1, s2, s3) {
    if(s1 == s2 && s2 == s3 && s3 == s1) {
        return 'Equilateral Traingle';
    } else if (s1 == s2 || s2 == s3 || s3 == s1) {
        return 'Isosceles Traingle';
    } else {
        return 'Scalene Traingle';
    }
}

console.log(triangles(3,3,5)); // Isosceles
console.log(triangles(3,3,3)); // Equilateral
console.log(triangles(3,4,5)); // Scalene