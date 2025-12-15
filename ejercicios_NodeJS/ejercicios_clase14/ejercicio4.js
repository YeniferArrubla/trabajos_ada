// Ejercicio 4: Hash de Contraseña con Sal
// Crea un script en Node.js que permita al usuario ingresar una contraseña y un "sal" (un valor aleatorio que se usa para añadir seguridad). 
// Luego, genera un hash de la contraseña combinada con el "sal" usando el algoritmo SHA-256. Muestra el hash generado.
const crypto = require('crypto');
const readline = require('readline-sync');

// Ask user for password and salt
const password = readline.question('Ingrese la contraseña: ', {
  hideEchoBack: true
});

const salt = readline.question('Ingrese el salt: ');

// Combine password and salt
const combined = password + salt;

// Create SHA-256 hash
const hash = crypto
  .createHash('sha256')
  .update(combined)
  .digest('hex');

// Show result
console.log('Hash generado:', hash);
