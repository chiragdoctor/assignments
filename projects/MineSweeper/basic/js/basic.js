const container = document.getElementById('container');
let table = '';

function onCellClicked(e) {
    console.log(e.target.textContent);
    const item = parseInt(e.target.textContent);
    console.log('item', item)
    for(let i = 1; i <= 100; i++) {
        if(i % item === 0) {
            console.log(i);
            const cell = document.getElementById(`cell${i}`);
            cell.innerHTML = '<b>**</b>';
            cell.style.backgroundColor = 'brown';
            cell.style.color = 'white';
        }
    }
    
}

function createInlineButton(i) {
    let button = document.createElement('BUTTON');
    button.innerHTML = i;
    button.setAttribute('id', `cell${i}`);
    button.setAttribute('class', 'cell');
    button.addEventListener('click', onCellClicked);
    return button;
}

function createContainer() {
    let container = document.createElement('DIV');
    container.setAttribute('class', 'container');
    return container;
}

function createTable(arr) {
    let container;
    for(let i = 1; i <= 100; i++) {
        if(i == 1) {
            container = createContainer();
        }

        if((i-1) % 10 === 0) {
            container = createContainer();
        }
        let cell = arr && arr.length > 0 ? createInlineButton(arr[i-1]) : createInlineButton(i);
        container.appendChild(cell);
        document.body.appendChild(container);
    }
    
}

function createReset() {
    let button = document.createElement('BUTTON');
    button.setAttribute('class', 'reset-btn');
    button.textContent = 'Reset';
    button.addEventListener('click', onReset);
    document.body.appendChild(button);
}

function onReset(e) {
    document.body.innerHTML = '';
    createTable();
    createReset();
} 

