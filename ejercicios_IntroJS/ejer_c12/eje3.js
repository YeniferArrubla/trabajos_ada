// Ejercicio 3: Ciclo For
// Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive). 
// Para esto, debes seguir los siguientes pasos:
// 1. Solicitar al usuario que ingrese un número X.
// 2. Inicializar una variable para contar los números impares.
// 3. Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
// 4. Dentro del ciclo, verificar si el número es impar.
// 5. Si el número es impar, incrementar el contador de números impares.
// 6. Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
// 7. Utiliza el operador módulo (%) para verificar si un número es impar.
// 8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir: 
// “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5”

let uNum = parseInt(prompt('Conozca los números impares desde el 0 hasta el número que elija: '));
let oddNum = 0;
let showOddds = '';

// for(let i = 0; i <= uNum; i++){
//     if(i % 2 !== 0){
//         oddNum++;
//         showOddds += i + ',';
//     }
// }
// console.log(`La cantidad de números impares entre 0 y ${uNum} es ${oddNum}, son: ${showOddds}`);

//sin el if

for(let i = 1; i <= uNum; i +=2){ //para que sume de dos en dos y no de uno en uno, así pasa solo por los impares
    oddNum++;                     
    showOddds += i + ',';
}
console.log(`La cantidad de números impares entre 0 y ${uNum} es ${oddNum}, son: ${showOddds}`);
