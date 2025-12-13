// Ejercicio 5: Adivina el Número
// Crea un juego en el que el usuario deba adivinar un número aleatorio
// entre 1 y 10. Usa readline-sync para recibir el intento del usuario y
// proporciona pistas (mayor o menor) hasta que adivine.

const rlSync = require('readline-sync');

// Número aleatorio entre 1 y 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let userGuess;

console.log('Adivina el número (entre 1 y 10)');

while (userGuess !== secretNumber) {
    userGuess = rlSync.questionInt('Ingresa tu número: ');

    if (userGuess < secretNumber) {
        console.log('El número secreto es MAYOR');
    }
    else if (userGuess > secretNumber) {
        console.log('El número secreto es MENOR');
    }
    else {
        console.log('¡Correcto! Adivinaste el número.');
    };
};
