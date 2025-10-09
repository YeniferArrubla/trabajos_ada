// Ejercicio 4: Numero pares
// Escribí un programa que imprima los números pares del 0 al 100. 
// No es necesario pedirle al usuario, solo imprimir el resultado. Agreguen los números pares a un array.
// Pista: Usa un ciclo

let arrayNumerosPares = [];

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        arrayNumerosPares.push(i);
    }
}
console.log(arrayNumerosPares.join(', '));