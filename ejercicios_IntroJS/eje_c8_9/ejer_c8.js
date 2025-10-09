// Ejercicio 1: Calcula el doble de un número
// 1. Solicite al usuario que ingrese un número cualquiera.
// 2. Calcule el doble de ese número.
// 3. Muestre el resultado en la consola.

const prompt = require('prompt-sync')();

const askedNum = parseFloat(prompt('Ingrese cualquier número para conocer el doble de este: '));
let doubleAskedNum = askedNum * 2;
console.log(doubleAskedNum);

// Ejercicio 2: Verificar si un número es positivo, negativo o cero
// 1. Pida al usuario que ingrese un número.
// 2. Verifique si el número es positivo, negativo o igual a cero.
// 3. Muestre un mensaje indicando cuál es el caso.

const askNum2 = parseFloat(prompt('Ingrese un número para reconocer si es +, - o cero: '));
let resNum2 = '';
if (askNum2 < 0 ){
    resNum2 = 'Negativo';
} else if (askNum2 > 0 ){
    resNum2 = 'Positivo';
} else {
    resNum2 = 'Cero';
}
console.log(resNum2);

// Ejercicio 3: Suma de dos números ingresados por el usuario
// 1. Pida al usuario que ingrese dos números.
// 2. Sume ambos números.
// 3. Muestre el resultado de la suma.

const askNum3 = parseFloat(prompt('Ingrese el primer número a sumar: '));
const askNum4 = parseFloat(prompt('Ingrese el segundo número a sumar: '));
let resSumNum34 = askNum3 + askNum4;
console.log(`El resultado de la suma de ${askNum3} y ${askNum4} es `,resSumNum34);

// Ejercicio 4: Determinar si un número es par o impar
// 1. Solicite al usuario que ingrese un número entero.
// 2. Determine si el número es par o impar.
// 3. Muestre un mensaje indicando si el número es par o impar.

const askNum5 = parseFloat(prompt('Ingrese un número para determinar si es par o impar: '));
let OpAskNum5 = askNum5 % 2;

if (OpAskNum5 != 0 ){
    console.log(`El número ${askNum5} es impar`);
} else {
    console.log(`El número ${askNum5} es par`);
}

// Ejercicio 5: Saludo personalizado
// 1. Solicite al usuario que ingrese su nombre.
// 2. Muestre un saludo personalizado usando el nombre ingresado ideal para familiarizarse con la manipulación de cadenas de
// texto. 

const perGreeting = prompt('Ingrese su nickname: ');
let saludo = 'Hi';
let resEje5 = saludo + ' ' + perGreeting + ', keep going, every step in the right direction counts!';
console.log(resEje5);
