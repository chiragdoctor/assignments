const fs = require('fs');
const readLineSync = require('readline-sync');

const fileName = readLineSync.question('Please enter the file name: ');

const key = readLineSync.question('Please enter the key: ');

function encypt(input){
    const inputArr = input.split('');
    
    const result = inputArr.map((letter, index) => {
        console.log(letter, key[index % key.length], index % key.length);
        const charCode = letter.charCodeAt(0) ^ key[index % key.length].charCodeAt(0);
        return String.fromCharCode(charCode);
    })

    return result.join("");
}

function decrypt(input){
    const inputArr = input.split('');
    
    const result = inputArr.map((letter, index) => {
        console.log(letter, key[index % key.length], index % key.length);
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
    fs.writeFile('encrypted.txt', ciphered, (err) => {
        if(err) {
            throw err;
        }

        console.log('File Created !!');
    })
});

