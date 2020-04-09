// 10) Write a program to check whether given character is vowel or consonant

function isVowel(ch) {
    const vowels = 'aeiouAEIOU';
    return vowels.indexOf(ch) >= 0; 
}

console.log('Is it a vowel  => ', isVowel('f'));
console.log('Is it a vowel  => ', isVowel('a'));
console.log('Is it a vowel  => ', isVowel('E'));
console.log('Is it a vowel  => ', isVowel('B'));