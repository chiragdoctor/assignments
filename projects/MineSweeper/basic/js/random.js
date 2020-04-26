
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function genRandomNumbers() {
    let arr = [];
    while(arr.length < 100) {
        const ran = getRandomInt(1, 101);
         if(arr.indexOf(ran) == -1) {
            arr.push(ran)
         }
            
    }
    return arr;
}

const arr = genRandomNumbers();
createTable(arr);
createReset(arr);

function onReset(e) {
    document.body.innerHTML = '';
    const arr = genRandomNumbers();
    createTable(arr);
    createReset(arr);
} 