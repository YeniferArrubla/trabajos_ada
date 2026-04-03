// Ejercicio 1: Operaciones básicas con Arrays
// 1. Declara un array de números con los valores [5, 10, 15, 20, 25].
// 2. Imprime el tercer elemento del array.
// 3. Añade el número 30 al final del array.
// 4. Elimina el primer número del array.
// 5. Muestra por consola la longitud actual del array.

let numbers = [5, 10, 15, 20, 25];

console.log(`El tercer número del array es: ${numbers[2]}`);

numbers.push(30);
console.log(`Añadiendo el número 30 al array: `, numbers);

numbers.shift();
console.log(`Nuevo array removiendo el primer número`, numbers);

console.log(`La longitud del array de números es: ${numbers.length}`);