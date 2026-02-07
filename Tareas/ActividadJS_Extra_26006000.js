let restart = 1;
const randomNum = () => Math.floor(Math.random() * 9) + 1;

function startGame() {
    alert("Bienvenido al juego, debes pensar en un número del 3 al 6. Luego yo pensaré en un número del 1 al 9 y deberás adivinar si tu número es mayor, menor o igual al mío.");

    const cpuNum = randomNum();
    let userNum = parseInt(prompt("Ingresa un número del 3 al 6:"));
    while (userNum < 3 || userNum > 6 || isNaN(userNum)) {
        userNum = parseInt(prompt("Número inválido. Ingresa un número del 3 al 6:"));
    }
    
    let userGuess = parseInt(prompt("Si piensas que tu número es mayor al mío, ingresa 1. Si piensas que es menor al mío, ingresa 2. Si piensas que es igual al mío, ingresa 3."));
    while (userGuess != 1 && userGuess != 2 && userGuess != 3 || isNaN(userGuess)) {
        userGuess = parseInt(prompt("Número inválido. Ingresa 1 para mayor, 2 para menor, 3 para igual:"));
    }

    switch (true) {
        case userGuess === 1:
            (userNum > cpuNum) ? alert(`Correcto!, tu número: ${userNum}, es mayor al mío: ${cpuNum}.`) 
            : alert(`Incorrecto!, tu número: ${userNum}, es menor o igual al mío: ${cpuNum}.`);
            break;
        case userGuess === 2:
            (userNum < cpuNum) ? alert(`Correcto!, tu número: ${userNum}, es menor al mío: ${cpuNum}.`) 
            : alert(`Incorrecto!, tu número: ${userNum}, es mayor o igual al mío: ${cpuNum}.`);
            break;
        case userGuess === 3:
            (userNum === cpuNum) ? alert(`Correcto!, ambos pensamos en el número: ${cpuNum}.`) 
            : alert(`Incorrecto!, tu número: ${userNum}, no es igual al mío: ${cpuNum}.`);
            break;
        default:
            alert("Error inesperado. Por favor intenta de nuevo.");
            break;
    }
}

while (restart === 1) {
    startGame();
    restart = parseInt(prompt("¿Quieres jugar de nuevo? Introduce 1 si deseas jugar de nuevo, 2 si deseas salir:"));
    while (restart !== 1 && restart !== 2 || isNaN(restart)) {
        restart = parseInt(prompt("Número inválido. Introduce 1 para jugar de nuevo, 2 para salir:"));
    }
}

if (restart === 2) {
    alert("Nombre del desarrollador: Josué Adiel Asaf Ovalle Marroquin, carné: 26006000 - Gracias por jugar!");
}