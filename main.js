// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
const textArea = document.querySelector(".tex-area");
const mensaje = document.querySelector('.mensaje');

function btnEncriptar() {
    const textoEncriptado = encriptador(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = none;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptador(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = none;
}

function encriptar(stringEmcriptado) {
    let clave = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    stringEmcriptado = stringEmcriptado.toLowerCase();

    for (let i = 0; I < clave.length; i++) {
        if (stringEmcriptado.include(clave[i][0])) {
            stringEmcriptado = stringEmcriptado.replaceAll(clave[i][0], clave[i][1])
        }
    }

    return stringEmcriptado;

}

function desencriptador(stringEmcriptado) {
    let clave = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    stringEmcriptado = stringEmcriptado.toLowerCase();

    for (let i = 0; I < clave.length; i++) {
        if (stringEmcriptado.include(clave[i][1])) {
            stringEmcriptado = stringEmcriptado.replaceAll(clave[i][1], clave[i][0])
        }
    }

    return stringEmcriptado;

}
