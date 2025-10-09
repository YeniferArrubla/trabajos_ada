// Ejercicio 4: Ciclo For - Array
// Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
// 1. Crear un array para almacenar las notas.
// 2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
// 5. Imprime en consola las notas ingresadas usando el array notas.

let notasEstudiantes = 0;
let arrayNotas = []

for(let i = 1; i < 5 ; i++){
    notasEstudiantes = parseFloat(prompt(`Ingrese la nota del estudiante ${i}`));
    arrayNotas.push(notasEstudiantes);
}

console.log(arrayNotas);