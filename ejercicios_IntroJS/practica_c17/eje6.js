//Ejercicio 6: Numero N
// Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado por teclado.

let numeroIngresado = parseInt(prompt('Ingrese un número natural para calcular la suma de los números hasta ese número: '));
let sumaNumeros = 0;

for(let i = 1; i <= numeroIngresado; i++){
    sumaNumeros += i;
}

console.log(`La suma del los números del 0 al ${numeroIngresado} es ${sumaNumeros}`);