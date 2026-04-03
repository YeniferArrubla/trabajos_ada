// Ejercicio 2: Creación de Objetos y Atributos
// 1. Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.

class Book {
    public title: string;
    public author: string;
    public year: number;

    constructor(title:string, author:string, year: number){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const christianBooks = new Book('La Vida Centrada en el Evangelio', 'Robert H. Thune', 2009);
console.log(christianBooks)