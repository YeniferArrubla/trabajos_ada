// Ejercicio 2: Conversión de Objetos JavaScript a JSON
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado actividad2.js.
// 2.Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: nombre, edad, curso, notas (un array de números).
// Instrucciones:
// • Convierte este objeto a una cadena JSON usando JSON.stringify().
// • Muestra la cadena JSON en la consola.
// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() y muestra el objeto en la consola.

let estudiante = {
    nombre: "Sofia Ruth Fisher",
    edad: 36,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5]
};

let formatoJSON = JSON.stringify(estudiante); //de objeto literal js a formato JSON
console.log(formatoJSON); //cadena JSON en consola

let formatoObjeto = JSON.parse(formatoJSON); // de formato JSON a objeto literal
console.log(formatoObjeto); // objeto literal en consola
