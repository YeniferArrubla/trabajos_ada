// Ejercicio 6: La tabla de multiplicar
// Consigna: Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. 
// Usa un ciclo for.

let uNum = parseInt(prompt('Ingrese el número del cual requiera la tabla de multiplicar hasta el número 10: '));
let ansEje6 = '';

for(let i = 1; i <= 10 ; i++){
    ansEje6 += `${uNum} x ${i} = ${uNum * i}\n`;
}
console.log(ansEje6);