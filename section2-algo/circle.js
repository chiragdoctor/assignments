// 18) Write a program to find area and circumference of circle

function circle(raduis) {
    const circumference = 2 * Math.PI * raduis;
    const area = Math.PI * raduis ** 2;
    return { area, circumference }; 
}

console.log(circle(5));