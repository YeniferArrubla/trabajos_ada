// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
// Luego, escribe un algoritmo para sumar todos los números en la matriz.

let matriz = [
    [2, 6, 7, 9, 1],
    [5, 8, 4, 11, 13],
    [25, 33, 7, 99, 4],
    [75, 57, 2, 18, 9]
];

let sumaMatriz = 0;
let verMatrizRecorrida = '';

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        let matrizRecorrida = matriz[i][j];
        verMatrizRecorrida += matrizRecorrida + ',';
        sumaMatriz += matrizRecorrida; 
    }
};
console.log(`Los números de la matriz son ${verMatrizRecorrida}, la suma de estos es ${sumaMatriz}`);
