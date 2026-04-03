// Ejercicio 4: Clases y Objetos
// 1. Define una clase llamada Animal con propiedades nombre y tipo, y un método hacerSonido().
// 2. Crea una instancia de la clase Animal y llama al método.

class Animal {
    constructor(
        public name: string,
        public type: string
    ) {}

    hacerSonido() {
        const animalType = this.type.toLowerCase();

        if (animalType === 'perro') {
            return `El ${this.type} ladra`;
        } else if (animalType === 'gato') {
            return `El ${this.type} maulla`
        } else {
            return `No sabemos como se llama el sonido que emite el ${this.type}`
        }
    }
}

const animal1 = new Animal('Ward', 'perro');
console.log(animal1.hacerSonido());

const animal2 = new Animal('Dolfy', 'delfín');
console.log(animal2.hacerSonido());

