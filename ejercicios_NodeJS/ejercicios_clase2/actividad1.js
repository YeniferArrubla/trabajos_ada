// Ejercicio 1: Creación y Manipulación de un Objeto JSON
// 1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada clase2.
// 2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
// 3.En este archivo, crea un objeto JSON que represente un libro. 
// El objeto debe tener las siguientes propiedades: titulo, autor, año, genero (puede ser un array de géneros).
// Instrucciones:
// A - Muestra en la consola el título y el autor del libro.
// B - Actualiza el año del libro a un valor más reciente.
// C - Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
// D - Muestra el objeto actualizado en la consola.

const libro = {
  titulo: "¿Es razonable creer en Dios?",
  autor: "Timothy Keller",
  anio: 2017,
  genero: ["Literatura cristiana", "Teología"]
};

console.log(`Título: ${libro.titulo}\nAutor: ${libro.autor}`); // A - Mostrar el título y autor en la consola

libro.anio = 2020; //B - Actualización del año
console.log(`Se ha actualizado el año del libro ${libro.titulo} al ${libro.anio}`);

libro.paginas = 304 // C - Agrego una nueva propiedad al objeto libros

console.log(libro); // D - Mostrar objeto actualizado

