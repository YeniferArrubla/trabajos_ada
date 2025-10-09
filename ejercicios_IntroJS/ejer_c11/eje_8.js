// Ejercicio 8: Encuentra los múltiplos de un número
// Consigna: Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. 
// Utiliza un ciclo for para resolverlo.

let uNum = parseInt(prompt('Ingrese un número entero positivo para conocer sus múltiplos del 1 al 100: '));
let ansEje8 = '';

for (let i = 1 ; i <= 100 ; i++){
    if (i % uNum === 0){
        ansEje8 += `${i} es multiplo de ${uNum}\n`;
    }
};
console.log(ansEje8);
