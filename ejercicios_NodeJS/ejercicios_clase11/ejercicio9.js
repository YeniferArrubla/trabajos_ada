// Ejercicio 9: Calculadora de IMC
// Crea un script que calcule el Índice de Masa Corporal (IMC) del usuario.
// Solicita su peso (en kg) y altura (en metros) usando readline-sync, y
// luego muestra el resultado.

const rlSync = require('readline-sync');

const weight = rlSync.questionFloat('Ingresa tu peso en kg: ');
const height = rlSync.questionFloat('Ingresa tu altura en metros: ');

const bmi = weight / (height * height);

console.log(`Tu Índice de Masa Corporal (IMC) es: ${bmi.toFixed(2)}`);
