// Ejercicio 9: Comparaciones lógicas
// Declara dos variables booleanas y realiza una comparación lógica (como AND,
// OR). Imprime el resultado.

let workout: boolean = true;
let healthyFood: boolean = false;

const goodHealth = workout && healthyFood;
console.log(`El usuario se ejercita y come saludable? ${goodHealth}`);

const middleHealth = workout || healthyFood;
console.log(`El usuario se ejercita o come saludable? ${middleHealth}`);

