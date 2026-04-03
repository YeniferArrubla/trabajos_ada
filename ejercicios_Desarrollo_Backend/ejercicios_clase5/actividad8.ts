// Ejercicio 8: Integramos contenidos - Animales
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases Animal, Mascota, y MascotaExotica.
// La clase Animal debe tener propiedades como nombre y tipo.
// La clase Mascota debe extender Animal e incluir una propiedad para dueño.
// La clase MascotaExotica debe extender Animal e incluir una propiedad para habitat.
// 2.// Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.

import { convertToObject } from "typescript"

class Animal{
    constructor(
        public name: string,
        public type: string
    ) {}

    getInfo(): string {
        return `${this.name} es un ${this.type}`
    }

    eat(): string {
        return `${this.type} come a las 5pm`
    }
}

class Pet extends Animal{
    constructor(
        name: string,
        type: string,
        public owner: string
    ) {
        super(name, type)
    } 

    getInfo(): string {
        return `${this.name} es un ${this.type} y su dueño es ${this.owner}`
    }
}

class ExoticAnimal extends Animal{
    constructor(
        name: string,
        type: string,
        public habitat: string
    ) {
        super(name, type)
    }

    getInfo(): string {
        return `${this.name} es un animial exótico ${this.type} y vive en ${this.habitat}`
    }
}

const animal1 = new Animal('Firuse', 'gato');
console.log(animal1.getInfo());
const pet1 = new Pet('Ward', 'perro', 'Jack');
console.log(pet1.getInfo());
console.log(pet1.eat());
const exoticAnimal1 = new ExoticAnimal('Sepi', 'serpiente', 'selva');
console.log(exoticAnimal1.getInfo());