// Ejercicio 3: Métodos en Objetos
// 1. Modifica el objeto del ejercicio anterior para que incluya un método llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.

class Book {
    constructor(
        public title: string,
        public author: string,
        public year: number
    ) {}

    description() {
        return `El libro ${this.title} fue escrito por ${this.author} en el año ${this.year}`;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const christianBook = new Book('La Vida Centrada en el Evangelio', 'Robert H. Thune', 2009);
console.log(christianBook.description());
console.log(`El libro ${christianBook.title} tiene ${christianBook.getAge()} años desde su publicación`)