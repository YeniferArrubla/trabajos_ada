// Actividad 10: Consolidación de Módulos
// Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts, stringUtils.ts y user.ts.
// Asegúrate de que todas las funciones se puedan importar desde utils/index.ts.
// En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un solo flujo de trabajo,
// mostrando todos los resultados en la consola.

import {
    add, subtract, capitalize, reverse, createUser
} from './utils/index';

const num1 = 213;
const num2 = 45;

const sum = add(num1, num2);
const result = subtract(num1, num2);

console.log(`Este es el resultado de la suma de los dos números: ${sum}`);
console.log(`Este es el resultado de la resta de los dos números: ${result}`);

const word = 'sabaneta';

const capitalizeWord = capitalize(word);
const reverseWord = reverse(word);

console.log(`Esta es la palabra con la primera letra en mayúscula: ${capitalizeWord}`);
console.log(`Esta es la palabra escrita al revés: ${reverseWord}`);

const userName = 'Mariana';
const userAge = 28;

const user1 = createUser(userName, userAge);

console.log(`El usuario 1 creado es: Nombre: ${user1.name}, Edad: ${user1.age}`);
