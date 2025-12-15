// Ejercicio 1: Cálculo de Hash Simple
// Escribe un script en Node.js que use el módulo crypto para generar un hash SHA-256 de un texto ingresado por el usuario. 
// Muestra el hash en la consola.

const crypto = require('crypto');
const readline = require('readline-sync');

const userText = readline.question('Ingresa un texto para hash: ');

const hash = crypto
    .createHash('sha256')
    .update(userText)
    .digest('hex');

console.log('SHA-256 hash', hash);

