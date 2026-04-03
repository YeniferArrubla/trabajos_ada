// Ejercicio 6: Uso de this
// 1.Crea una clase llamada Mariposa con propiedades nombre y color, y un método volar() que use this 
// para referirse a las propiedades de la instancia.
// 2.Crea una instancia de la clase y llama al método.

class Mariposa {
    constructor(
        public nombre: string,
        public color: string
    ){}

    volar(){
        return `La mariposa ${this.nombre} de color ${this.color} está volando`
    }
}

const mariposa1 = new Mariposa('Monarca', 'naranja con negro');
console.log(mariposa1.volar());