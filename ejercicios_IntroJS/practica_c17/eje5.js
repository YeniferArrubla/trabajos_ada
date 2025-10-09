//Ejercicio 5: Números Naturales
// Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra que muestre lo mínimo que le falta para ser un número
// de 2 cifras; de lo contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras. 
// Considerar que el usuario ingresa números de hasta dos cifras.

let numeroUsuario = parseInt(prompt('Ingrese un número natural de hasta dos cifras: '));
let faltante = 0;

if(numeroUsuario < 10){
    faltante = 10 - numeroUsuario;
    console.log(`a ${numeroUsuario} le hace falta ${faltante} para ser de dos cifras`);
} else if(numeroUsuario < 100){
    faltante = 100 - numeroUsuario;
    console.log(`a ${numeroUsuario} le hace falta ${faltante} para ser de tres cifras`);
} else {
    console.log('Ingrese un número válido');
};