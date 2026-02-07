alert("Hola y bienvenido a mi programa para saber tu signo sodiacal!");

let month = parseInt(prompt("Ingresa el número que representa el mes en el que naciste (1-12):"));
while (month < 1 || month > 12 || isNaN(month)) {
    month = parseInt(prompt("Respuesta invalida. Ingresa un número válido representativo para el mes (1-12):"));
}

let day = parseInt(prompt("Ingresa el día en que naciste (1-31):"));
while (day < 1 || day > 31 || isNaN(day)) {
    day = parseInt(prompt("Respuesta invalida. Ingresa un día válido (1-31):"));
}

switch (true) {
    case (month === 3 && day >= 21) || (month === 4 && day <= 19):
        alert("Tu signo es Aries!");
        break;
    case (month === 4 && day >= 20) || (month === 5 && day <= 20):
        alert("Tu signo es Tauro!");
        break;
    case (month === 5 && day >= 21) || (month === 6 && day <= 21):
        alert("Tu signo es Géminis!");
        break;
    case (month === 6 && day >= 22) || (month === 7 && day <= 22):
        alert("Tu signo es Cáncer!");
        break;
    case (month === 7 && day >= 23) || (month === 8 && day <= 22):
        alert("Tu signo es Leo!");
        break;
    case (month === 8 && day >= 23) || (month === 9 && day <= 22):
        alert("Tu signo es Virgo!");
        break;
    case (month === 9 && day >= 23) || (month === 10 && day <= 23):
        alert("Tu signo es Libra!");
        break
    case (month === 10 && day >= 24) || (month === 11 && day <= 21):
        alert("Tu signo es Escorpio!");
        break;
    case (month === 11 && day >= 22) || (month === 12 && day <= 21):
        alert("Tu signo es Sagitario!");
        break;
    case (month === 12 && day >= 22) || (month === 1 && day <= 19):
        alert("Tu signo es Capricornio!");
        break;
    case (month === 1 && day >= 20) || (month === 2 && day <= 18):
        alert("Tu signo es Acuario!");
        break;
    case (month === 2 && day >= 19) || (month === 3 && day <= 20):
        alert("Tu signo es Piscis!");
        break;
    default:
        alert("Error inesperado. Por favor intenta de nuevo.");
        break;
}

alert("Gracias por probar mi programa!");