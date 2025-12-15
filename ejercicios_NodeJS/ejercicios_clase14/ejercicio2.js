// Ejercicio 2: Ordenar una Lista de Números
// Crea un script en Node.js que permita al usuario ingresar una lista de números separados por comas. 
// Ordena los números de menor a mayor y muestra la lista ordenada.

const readline = require('readline-sync');

const input = readline.question(
  'Ingrese los números a ordenar separados por coma: '
);

const numbersArray = input
  .split(',')             
  .map(num => Number(num)); 

numbersArray.sort((a, b) => a - b);

console.log('Los números ordenados son:', numbersArray);
