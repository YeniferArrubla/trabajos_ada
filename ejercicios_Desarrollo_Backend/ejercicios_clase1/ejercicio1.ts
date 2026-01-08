// Ejercicio 1: Declarar y asignar tipos primitivos
// Crea un programa en TypeScript donde se declaren variables para almacenar tu
// nombre, edad y si eres estudiante, utilizando los tipos de datos correctos.
// Luego, imprime esos valores en la consola.

let UserName: string = 'Yennifer';
let age: number = 39;
let isStudent: boolean = true
const studentStatus: string = isStudent ? 'sí' : 'no';

console.log(`Hola, mi nombre es ${UserName}. Tengo ${age}. Y ${studentStatus} soy estudiante`);