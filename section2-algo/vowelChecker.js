// 10) Write a program to check whether given character is vowel or consonant
const executor = require('./lib/executor');

function isVowel(ch) {
    const vowels = 'aeiouAEIOU';
    return vowels.indexOf(ch) >= 0 ? `${ch} is vowel` : `${ch} is not vowel`; 
}

const options = {
    programs: { 
        program: isVowel, 
        questions: [],
        validation: () => true
    },
    question: 'Please enter a character: ',
    isStringQuestion: true 
};

executor(options);