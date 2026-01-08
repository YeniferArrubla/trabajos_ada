// Ejercicio 4: Parámetros opcionales simulados
// Declara dos variables, una para almacenar un nombre y otra para almacenar una
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
// proporcionada". Si se asigna la edad, imprímela junto al nombre.

let userName: string = 'Augusto';
let age: number | undefined = undefined;

if (age === undefined) {
    console.log(`El nombre del usuario es ${userName}. El usuario no ha proporcionado la edad.`);
} else {
    console.log(`El nombre del usuario es ${userName} y su edad es ${age} años.`);
}

// otra opción con operador ternario

userName = 'Alex';
age = 32;

const message = age === undefined
? `El nombre del segundo usuario es ${userName}. Edad no proporcionada`
: `El nombre del segundo usuario es ${userName} y su edad es ${age} años.`;

console.log(message);
