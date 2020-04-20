// 17)  Write a program to classify the triangle as equilateral, isosceles and scalene to the
//      given sides of triangle.

const executor = require('./lib/executor');
const validator = require('./lib/validators');


function triangles([s1, s2, s3]) {
    if(s1 == s2 && s2 == s3 && s3 == s1) {
        return 'Equilateral Traingle';
    } else if (s1 == s2 || s2 == s3 || s3 == s1) {
        return 'Isosceles Traingle';
    } else {
        return 'Scalene Traingle';
    }
}

const options = {
    programs: {
        program: triangles,
        questions: [],
        validation: validator.isNumber
    },
    question: ['Please enter a side 1: ', 'Please enter a side 2: ', 'Please enter a side 3: '],
    isStringQuestion: false
};

executor(options);