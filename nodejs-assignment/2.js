const fs = require('fs');
const readLineSync = require('readline-sync');

const fileName = readLineSync.question('Please enter the file name: ');
const key = readLineSync.question('Please enter the key: ');

function cipher(input){
    const inputArr = input.split('');
    
    const result = inputArr.map((letter, index) => {
        const charCode = letter.charCodeAt(0) ^ key[index % key.length].charCodeAt(0);
        return String.fromCharCode(charCode);
    })

    return result.join("");
}

fs.readFile(fileName, (err, data) => {
    if(err) {
        throw err;
    }

    const fileData = data.toString();
    const ciphered = cipher(fileData);
    console.log(ciphered);
});

