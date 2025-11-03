// Actividad 1: Registro de libros favoritos
// Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON. 
// Implementa las siguientes funciones:
// 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre.
// 2. Listar los libros: Muestra todos los libros registrados.
// Pistas:
// • Usa un archivo JSON para guardar los libros.
// • Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs');

let librosFavoritos = []; // se inicia con el array vacío

if(fs.existsSync('librosFavoritos.json')) { // con el condicional se pregunta si el archivo JSON librosFavoritos ya existe
    const data = fs.readFileSync('librosFavoritos.json', 'utf8'); // si existe se lee, sino se crea
    librosFavoritos = JSON.parse(data); // se convierte del archivo JSON a objeto de JS
    console.log('Los libros favoritos agregados previamente son:', librosFavoritos); //se muestran los libros que ya estan en el archivo JSON
} else { 
    console.log('No hay libros favoritos guardados se creará un archivo para guardarlos')
}

//1 - función para agregar libros favoritos archivo JSON
function agregarLibroFavorito(titulo) { 

    const evitarDuplicados = librosFavoritos.some(libro => libro.titulo === titulo); // para evitar que cada vez que se agrega un libro se 
    //dupliquen los que ya estaban, se usa el método .some()
    if (evitarDuplicados) { // si hay coincidencia (true) se retorna el mensaje
        return 'El libro ya se ha registrado como favorito';
    }

    librosFavoritos.push( { titulo}); // sino está, se envía el título agregado al array

    fs.writeFileSync('librosFavoritos.json', JSON.stringify(librosFavoritos, null, 2), 'utf8'); // se escribe y se convierte de objeto JS al
    // archivo JSON
    return 'Libro agregado correctamente' // muestra el libro agregado
}

console.log(agregarLibroFavorito('Las ideas tienen consecuencias'));
console.log(agregarLibroFavorito('¿Es razonable creer en Dios?'));
console.log(agregarLibroFavorito('Guerra de Palabras'));
console.log(agregarLibroFavorito('Las palabras importan'));

// 2 - Función para listar los libros favoritos

function listarLibrosFavoritos() {
  if (!fs.existsSync('librosFavoritos.json')) { // se verifica que el archivo exista
    return 'No hay libros registrados.';
  }

  const data = fs.readFileSync('librosFavoritos.json', 'utf8'); // se lee el archivo si existe
  const libros = JSON.parse(data); // se convierten los datos de formato JSON a objeto JS

  if (libros.length === 0) { // Sino hay elementos en el array, se muestra el mensaje
    return 'No hay libros en la lista de favoritos.';
  }

  console.log('Lista de libros favoritos:');
  libros.forEach((libro, index) => { // para listar los libros de una forma ordenada se agrega el número con el método de array .forEach
    console.log(`${index + 1}. ${libro.titulo}`);
  });
};

listarLibrosFavoritos(); // se inicia la función para listar los libros