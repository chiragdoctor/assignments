// 16) Write a program check whether given character is an alphabet or not

function isAlphabet(ch) {
    if(ch.length > 1 ) return 'Just one alphabet';
    const charCode = ch.charCodeAt(0);

    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return 'Is an alphabet';
    }
    return 'Not an alphabet';
}

console.log(isAlphabet('!'));
console.log(isAlphabet('S'));