// Ejercicio 6: Iguales a 10 pero menores de 1000
// Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

let suma = 0;
let numSumados = 0;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        let matrizRecorrida = matriz[i][j];
        if(matrizRecorrida >= 10 && matrizRecorrida < 1000){
            suma += matrizRecorrida; 
            numSumados += matrizRecorrida + ',';
        }
    }
};
console.log(`Al recorrer la matriz y sumar los >=10 y <1000, el resultado es ${suma}, los números sumados son ${numSumados}`);