// Ejercicio 9: Sistema de Gestión de Vehículos
// 1.Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
// Vehiculo: Clase base con propiedades como marca, modelo y un método para mostrar información del vehículo.
// Coche: Clase que extiende Vehiculo e incluye una propiedad para tipoCombustible y un método para mostrar la información completa del coche.
// Motocicleta: Clase que extiende Vehiculo e incluye una propiedad para cilindrada y un método para mostrar la información completa de la motocicleta.

class Vehicle {
    constructor(
        public brand: string,
        public model: string
    ){}

    getInformation(): string {
        return `Este vehículo es de marca ${this.brand}, modelo ${this.model}`
    }
}

class Car extends Vehicle {
    constructor(
        brand: string,
        model: string,
        public fuelType: string
    ){
        super(brand,model)
    }

    getInformation(): string {
        return `${super.getInformation()}, usa ${this.fuelType} como combustible`
    }
}

class Motorcycle extends Vehicle {
    constructor(
        brand: string,
        model: string,
        public engineCapacity: number
    ){
        super(brand,model)
    }

    getInformation(): string {
        return `${super.getInformation()} su cilindraje es ${this.engineCapacity}`
    }
}

const vehicle1 = new Vehicle('BYD', 'Dolphine');
console.log(vehicle1.getInformation());
const car1 = new Car('Toyota', 'Corolla', 'gasolina');
console.log(car1.getInformation());
const motorcycle1 = new Motorcycle('BMW', 'Motorsport', 1000);
console.log(motorcycle1.getInformation());