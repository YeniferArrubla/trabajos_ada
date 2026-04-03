// Ejercicio 5: Interfaz
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un método presentarse().
// 2. Crea una clase llamada Persona que implemente esta interfaz y proporciona la implementación del método presentarse().

interface IPersona {
  nombre: string;
  edad: number;
  presentarse(): string;
}

class Persona implements IPersona {
    constructor(
        public nombre: string,
        public edad: number
    ) {}

    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`
    }
}


const persona1 = new Persona('Helena', 28);
console.log(persona1.presentarse());