function encriptar() {
    const $inputEncriptar = document.querySelector('#main-input').value.split('');
    localStorage.setItem('inputEncriptar', $inputEncriptar);
    window.location.href = '../pages/encriptar.html';
};

function desencriptar() {
    const $inputDesencriptar = document.querySelector('#main-input').value.split('');
    localStorage.setItem('inputDesencriptar', $inputDesencriptar);
    window.location.href = '../pages/desencriptar.html';
};
