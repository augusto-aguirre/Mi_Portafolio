// script.js

// Función para cambiar el color de fondo del cuerpo
function cambiarColorFondo() {
    document.body.style.backgroundColor = getRandomColor();
}

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
