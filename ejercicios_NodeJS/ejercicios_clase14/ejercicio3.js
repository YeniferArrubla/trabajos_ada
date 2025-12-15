// Ejercicio 3: Cifrado y Descifrado Básico con crypto
// Crea un script en Node.js que permita al usuario ingresar un texto, luego lo cifre usando el algoritmo AES-256-CBC 
// y lo descifre para mostrar el resultado original. Usa el módulo crypto para el cifrado y descifrado.

const crypto = require('crypto');
const readline = require('readline-sync');

const text = readline.question('Ingrese un texto a cifrar: ');

const password = 'mySecretPassword';

// Generación de llave y IV
const key = crypto.scryptSync(password, 'salt', 32);
const iv = crypto.randomBytes(16);

//Cifrado
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(text, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Texto cifrado:', encrypted);

//Desencriptando
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Texto descifrado:', decrypted);