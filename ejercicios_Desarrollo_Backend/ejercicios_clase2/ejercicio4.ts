// Ejercicio 4: Función que devuelve un objeto
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
// titulo (string), autor (string) y paginas (number). La función debe devolver un objeto con esas propiedades. 
// Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.

function crearLibro(titulo: string, autor: string, paginas: number) {
    let libro = {
        titulo,
        autor,
        paginas
    }

    return libro;

}

const libro1 = crearLibro('Keep going', 'Jenn', 39);
const libro2 = crearLibro('How to survive', 'Anne', 41);

console.log(libro1);
console.log(libro2);

// good TypeScript practice
// function crearLibro(
//   titulo: string,
//   autor: string,
//   paginas: number
// ): { titulo: string; autor: string; paginas: number } {
//   return { titulo, autor, paginas }; //Add an explicit return type
// }

