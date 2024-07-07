const $inputDesencriptar = localStorage.getItem('inputDesencriptar');
const $mensaje = document.querySelector('#aside-text');

function desencriptadora(fraseDesencriptar) {

    let encryptedText = fraseDesencriptar.split(',').join('');

    const decryptionMap = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = encryptedText;

    for (const [encrypted, decrypted] of Object.entries(decryptionMap)) {
        decryptedText = decryptedText.replaceAll(encrypted, decrypted);
    }
    $mensaje.innerHTML = decryptedText;
}

desencriptadora($inputDesencriptar);

const desencriptar = () => {
    $mensaje.innerHTML = ''
    const $inputDesencriptar = document.querySelector('#main-input').value.split('');
    desencriptadora($inputDesencriptar);
    document.querySelector('#main-input').value = '';
}

const encriptar = () => {
    const $inputEncriptar = document.querySelector('#main-input').value.split('');
    localStorage.setItem('inputEncriptar', $inputEncriptar);
    window.location.href = '../pages/encriptar.html';
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
