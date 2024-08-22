const textArea = document.querySelector(".ingresa-texto");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()


for (let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo [i] [0], matrizCodigo [i] [1])
    }
}
        return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()


for (let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo [i] [1], matrizCodigo [i] [0])
    }
}
        return stringDesencriptada
}

// Función para copiar el texto del área de mensaje

function copyToClipboard() {
    var mensajeTextarea = document.querySelector(".mensaje");
    
    // Verifica que el mensaje no esté vacío
    if (mensajeTextarea.value) {
        navigator.clipboard.writeText(mensajeTextarea.value)
        mensajeTextarea.value = "";
}
}
// Añadir el evento al botón de copiar

document.querySelector(".copiar").addEventListener("click", copyToClipboard);
