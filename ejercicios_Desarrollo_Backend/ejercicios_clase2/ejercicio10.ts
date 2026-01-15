// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos libro, donde cada libro tiene las propiedades 
// titulo (string) y autor (string). La función debe recorrer el array y mostrar los detalles de cada libro en la consola.

type Libro = {
  titulo: string;
  autor: string;
};

const libros: Libro[] = [
  { titulo: "1984", autor: "George Orwell" },
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
];

function listarLibros(libros: Libro[]): void {
  for (const libro of libros) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
  }
}

listarLibros(libros);
