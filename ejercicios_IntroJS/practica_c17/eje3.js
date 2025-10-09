// Ejercicio 3: Número secreto
// Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. 
// Si el número es correcto debe imprimir en la consola “Felicitaciones, ¡ese era!", 
// de lo contrario, debe imprimir "Lo siento, ¡intenta nuevamente!"

let userNumber = parseInt(prompt('Ingrese un número del 1 al 10: '));

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let ansEje3 = userNumber === randomNumber ?  'Felicitaciones, ¡ese era!' : 'Lo siento, ¡intenta nuevamente!';

console.log(ansEje3);