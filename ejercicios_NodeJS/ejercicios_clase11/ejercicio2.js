// Ejercicio 2: Menú Interactivo con readline-sync
// Crea un script de Node.js que muestre un menú de opciones usando
// readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
// ver un mensaje de bienvenida, generar un hash de un texto, o salir.

const rlSync = require('readline-sync');
const crypto = require('crypto'); 

const options = [
    'Ver mensaje bienvenida',
    'Generar un hash de texto',
    'Salir'
];

const userChoice = rlSync.keyInSelect(
    options, 
    'Elige una opción: ', 
    {cancel: 'Cancelar'}
);

if (userChoice === -1) {
    console.log('Operación cancelada');
    process.exit();
};

if (userChoice === 0) {
    console.log('¡Bienvenido! Gracias por entrar al programa')

} else if (userChoice === 1) {
    const text = rlSync.question('Escribe el texto: ');

    const hash = crypto.createHash('sha256').update(text).digest('hex');

    console.log('Tu hash es: ', hash);

} else if (userChoice === 2) {
    console.log('Hasta pronto....');
    process.exit();
}
