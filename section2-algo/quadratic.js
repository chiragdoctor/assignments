// 12) Write a program to find the roots of a quadratic equation
const executor = require('./lib/executor');
const validator = require('./lib/validators');

function sqrtRootOfQuadratic([a,b,c]) {
    const rootPart = Math.sqrt(b * b - 4 * a * c);
    const denom = 2 * a;

    const root1 = (-b + rootPart) / denom;
    const root2 = (-b - rootPart) / denom;

    return `Root1: ${root1} Root2: ${root2}`;
}

// sqrtRootOfQuadratic(1,4,4); // -2 -2

const options = {
    programs: {
        program: sqrtRootOfQuadratic,
        questions: [],
        validation: validator.isNumber
    },
    question: ['Please enter value of a: ', 'Please enter value of b: ', 'Please enter value of c: '],
    isStringQuestion: false
};

executor(options);
