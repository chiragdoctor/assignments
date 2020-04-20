// 16) Write a program check whether given character is an alphabet or not
const executor = require('./lib/executor');

function isAlphabet(ch) {
    if(ch.length > 1 ) return 'Just one alphabet';
    const charCode = ch.charCodeAt(0);

    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return `${ch} is an alphabet`;
    }
    return `${ch} is not an alphabet`;
}

const options = {
    programs: { 
        program: isAlphabet, 
        questions: [],
        validation: input => input.length >  1 && 'Just one alphabet'  
    },
    question: 'Please enter a character: ',
    isStringQuestion: true 
};

executor(options);