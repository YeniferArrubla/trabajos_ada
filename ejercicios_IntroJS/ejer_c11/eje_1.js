// Ejercicio 1: ¿Positivo, negativo o cero?
// Consigna:
// Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

let uNumber = prompt('Por favor ingresa un número entero, para determinar si es positivo o negativo: ');
let answer = '';

if(uNumber > 0){
    answer = `El número ${uNumber} es un número positivo`;
} else if(uNumber < 0){
    answer = `El número ${uNumber} es un número negativo`;
} else {
    answer = 'El número ingresado no es ni positivo ni negativo, es cero'
}
console.log(answer);

