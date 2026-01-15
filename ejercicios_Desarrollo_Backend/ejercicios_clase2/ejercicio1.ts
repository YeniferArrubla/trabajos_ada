// Ejercicio 1: Declarar y usar funciones con tipos
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos parámetros, 
// ambos de tipo number, y retorne el producto de ambos números. Luego, muestra el resultado en consola llamando a la función.

function multiplicarNumeros(a: number, b: number): number {
    return a * b;
}

console.log(multiplicarNumeros(125, 5));

// with arrow function 

const multiplicarNumerosArrow = (a: number, b: number): number => a * b;

console.log(multiplicarNumerosArrow(15,3));

