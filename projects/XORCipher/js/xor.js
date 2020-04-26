const encryptForm = document.getElementById('encrypt');
encryptForm.addEventListener('submit', cipher);

const decryptForm = document.getElementById('decrypt');
decryptForm.addEventListener('submit', cipher);


function cipher(e){
    e.preventDefault();
    const type = e.srcElement.id === 'encrypt' ? 'encrypt' : 'decrypt';    
    const input = document.getElementById(`${type}-input`).value;
    const key = document.getElementById(`${type}-key`).value;
    const output = document.getElementById(`${type}-output`);
    const inputArr = input.split('');
    
    const result = inputArr.map((letter, index) => {
        const charCode = letter.charCodeAt(0) ^ key[index % key.length].charCodeAt(0);
        return String.fromCharCode(charCode);
    })

    output.innerHTML = result.join("");
}

