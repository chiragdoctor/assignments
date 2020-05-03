const fs = require('fs');

const fileNames = process.argv.splice(2);

fileNames.forEach(fileName => {
    fs.readFile(fileName, (err, data) => {
        if(err) {
            throw err;
        }
        const fileData = data.toString();
        const lines =  fileData.split('\n');
        const words =  fileData.split(' ');
        const chars = fileData.replace( /[\n]+/gm, "" ).split('');
        
        console.log(`The number of lines in ${fileName} are ${lines.length}`); 
        console.log(`The number of words in ${fileName} are ${words.length}`); 
        console.log(`The number of characters in ${fileName} are ${chars.length}`);
        console.log('\n'); 
    });
})


