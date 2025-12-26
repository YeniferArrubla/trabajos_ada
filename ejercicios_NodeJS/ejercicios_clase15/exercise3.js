// Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus Propiedades
// Objetivo: Convertir una cadena JSON a un objeto y acceder a sus propiedades.
// Instrucciones:
//  Crea un archivo llamado exercise3.js.
//  Define una cadena JSON que represente a un libro (incluye campos como title, author, y year).
//  Convierte la cadena JSON a un objeto y muestra cada propiedad en la consola.

const jsonBook = `{
    "title": "Why now",
    "author":  "Jenn",
    "year":2025 
}`

const objectBook = JSON.parse(jsonBook);

console.log(`El título del libro es: ${objectBook.title}, el autor es ${objectBook.author} y el año: ${objectBook.year}`);