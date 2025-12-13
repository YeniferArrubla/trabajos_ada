// Ejercicio 8: Generador de Frases Aleatorias
// Crea un script que genere una frase aleatoria a partir de arrays
// predefinidos de sujetos, verbos y complementos. Usa readline-sync para
// preguntar al usuario cuántas frases desea generar.

const rlSync = require('readline-sync');

const subjects = ['El gato', 'Mi hermano', 'La profesora', 'Un robot', 'El perro'];
const verbs = ['come', 'salta', 'rompió', 'construyó', 'observa'];
const complements = [
    'una manzana',
    'el muro',
    'en el parque',
    'una computadora',
    'bajo la lluvia'
];

const numberOfSentences = rlSync.questionInt(
    '¿Cuántas frases deseas generar? '
);

for (let i = 0; i < numberOfSentences; i++) {
    const subject =
        subjects[Math.floor(Math.random() * subjects.length)];
    const verb =
        verbs[Math.floor(Math.random() * verbs.length)];
    const complement =
        complements[Math.floor(Math.random() * complements.length)];

    console.log(`${subject} ${verb} ${complement}.`);
}
