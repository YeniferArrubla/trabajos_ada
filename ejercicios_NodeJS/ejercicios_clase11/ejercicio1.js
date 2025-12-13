// Ejercicio 1: Uso Básico de readline-sync
// Crea un script en Node.js que utilice el módulo readline-sync para
// solicitar al usuario que ingrese su nombre y edad. Luego, muestra un
// mensaje de saludo personalizado que incluya el nombre y la edad del
// usuario.

const rlSync = require('readline-sync');

const userName = rlSync.question('Escribe tu nombre: ');

const userAge = rlSync.questionInt('Escribe tu edad: ');

console.log(`Tu nombre es ${userName} y tu edad ${userAge}`);