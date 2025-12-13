// Ejercicio 4: Validación de Contraseña
// Crea un script que solicite al usuario una contraseña y la valide. Si la
// contraseña es "secreto123", muestra un mensaje de acceso concedido.
// De lo contrario, muestra un mensaje de acceso denegado.

const rlSync = require('readline-sync');

let correctPassword = 'secreto123';

let userPassword = rlSync.question(
    'Introduce la contraseña: ', 
    { hideEchoBack: true }
);

if (userPassword === correctPassword) {
    console.log('Contraseña válida, acceso concedido')
} else {
    console.log('Acceso denegado. La contraseña no coincide');
};

