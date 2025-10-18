// Ejercicio 4: Gestión de estudiantes
// En estudiantes.js:
// Crea un array de objetos que represente una lista de estudiantes.
// Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números).
// Exporta este array usando module.exports.

let estudiantes = [
  {
    nombre: "Aketzalli Yolatl",
    edad: 25,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5],
  },
  {
    nombre: "Suanti Katalina",
    edad: 22,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5],
  },
  {
    nombre: "Sofia Ruth",
    edad: 37,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5],
  },
  {
    nombre: "Jesica Noelia",
    edad: 38,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5],
  },
  {
    nombre: "Agustina",
    edad: 30,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5],
  },
  {
    nombre: "Yennifer",
    edad: 37,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5],
  },
];

module.exports = { estudiantes }; //exportación de array para ser utilizado en otros archivos
