// Ejercicio 5: Encuentra los números pares entre dos valores
// Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
// El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. 
// Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, 
// el programa debe mostrar un mensaje indicando que los valores son inválidos.

let uNum1 = parseInt(prompt('Para conocer los números pares del segmento indica el número de inicio: '));
let uNum2 = parseInt(prompt('Para conocer los números pares del segmento indica el número de fin: '));
let ansEje5 = '';

if(uNum1 > uNum2){
    ansEje5 = `El número ${uNum1} es mayor que el número ${uNum2}, no es válido para el segmento`;
} else {
    for(let i = uNum1; i <= uNum2 ; i++){
        if(i % 2 == 0){
           ansEje5 += `${i} es un número par del segmento entre ${uNum1} y ${uNum2}\n`;
        }
    }
}
console.log(ansEje5);

