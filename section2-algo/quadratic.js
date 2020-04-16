// 12) Write a program to find the roots of a quadratic equation

function sqrtRootOfQuadratic(a,b,c) {
    const rootPart = Math.sqrt(b * b - 4 * a * c);
    const denom = 2 * a;

    const root1 = (-b + rootPart) / denom;
    const root2 = (-b - rootPart) / denom;

    console.log(root1, root2);
}

sqrtRootOfQuadratic(1,4,4); // -2 -2