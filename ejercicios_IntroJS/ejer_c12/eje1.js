//Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

let uNum = parseInt(prompt('Sume números positivos, ingrese un número negativo para terminar: '));
let sumaUNum = 0;
let addedNum = '';

while (uNum > 0){
    sumaUNum += uNum;
    addedNum += uNum + ',';
    uNum = parseInt(prompt('Sume números positivos, ingrese un número negativo para terminar: '));
};

console.log(`La suma de ${addedNum} es ${sumaUNum}`);