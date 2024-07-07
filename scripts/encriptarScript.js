const $inputEncriptar = localStorage.getItem('inputEncriptar');
const $mensaje = document.querySelector('#aside-text');

console.log('encriptar');
console.log($inputEncriptar);


function encriptadora(fraseEncriptar) {

    const encriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    let output = [];
    for (const el of fraseEncriptar) {

        (el in encriptacion)
            ? output.push(encriptacion[el])
            : output.push(el);

    };
    const $output = output.join('');
    const mensaje = $output.split(',').join('');
    $mensaje.innerHTML = mensaje;
};

encriptadora($inputEncriptar);

const encriptar = () => {
    $mensaje.innerHTML = ''
    const $inputEncriptar = document.querySelector('#main-input').value.split('');
    encriptadora($inputEncriptar);
    document.querySelector('#main-input').value = '';
}

const desencriptar = () => {
    const $inputDesencriptar = document.querySelector('#main-input').value.split('');
    localStorage.setItem('inputDesencriptar', $inputDesencriptar);
    window.location.href = '../pages/desencriptar.html';
}

function copiar() {
    const textElement = document.getElementById('aside-text');
    const range = document.createRange();
    range.selectNodeContents(textElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    textElement.classList.add('highlight');
}
