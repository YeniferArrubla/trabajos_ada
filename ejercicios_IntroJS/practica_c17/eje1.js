//Ejercicio 1: Conversor de monedas
// Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa una función flecha para convertir el monto a pesos.

let userValue = parseFloat(prompt('Ingresa el monto en dólares: '));
let userExchangeRate = parseFloat(prompt('Ingrese la tasa de cambio: '))

const exchangeRate = (a, b) => a * b;

let userAnswer = `${userValue} dólares son ${(exchangeRate(userValue, userExchangeRate))} pesos Argentinos`;
console.log(userAnswer);
