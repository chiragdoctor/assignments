function jonny(question) {
    switch (question) {
       case 'jonny jonny':
           console.log('yes papa');
           papa('yes papa');
           break;
        case 'eating sugar':
            console.log('no');
            papa('no')
            break;
        case 'telling lies':
            console.log('no papa');
            papa('no papa')
            break;
        case 'open your mouth': 
            console.log('HA HA HA !!!');            
            break;
        default:
            console.log('I am not listning to you.. LOL!!');    
    }
}

function papa(ans) {
    switch (ans) {
        case 'yes papa':
            console.log('eating sugar?');
            jonny('eating sugar');
            break;
        case 'no':
            console.log('telling lies ?');
            jonny('telling lies');
            break;
        case 'no papa':
            console.log('open your mouth ?');
            jonny('open your mouth');    
            break;
        default:
            console.log('jonny jonny'); 
            ans !== '' ? jonny(ans) : jonny('');
    } 
    
}

papa('jonny jonny'); // 'HA HA HA !!!'
papa('go to bed') // 'I am not listning to you.. LOL!!'