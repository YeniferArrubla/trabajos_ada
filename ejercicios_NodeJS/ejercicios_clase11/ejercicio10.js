// Ejercicio 10: Juego de Preguntas y Respuestas
// Crea un juego de preguntas y respuestas usando readline-sync. Define
// un conjunto de preguntas con sus respuestas correctas y lleva un conteo
// de las respuestas acertadas.

const rlSync = require('readline-sync');

const questions = [
    {
        question: '¿Cuál es la capital de Francia?',
        answer: 'París'
    },
    {
        question: '¿Cuánto es 2 + 2?',
        answer: '4'
    },
    {
        question: '¿En qué lenguaje estamos programando?',
        answer: 'javascript'
    }
];

let score = 0;

console.log('🎮 Juego de Preguntas y Respuestas\n');

for (let i = 0; i < questions.length; i++) {
    const userAnswer = rlSync
        .question(`${questions[i].question} `)
        .toLowerCase();

    if (userAnswer === questions[i].answer) {
        console.log('✅ Correcto!\n');
        score++;
    } else {
        console.log(`❌ Incorrecto. La respuesta correcta era: ${questions[i].answer}\n`);
    }
}

console.log(`Juego terminado. Aciertos: ${score} de ${questions.length}`);
