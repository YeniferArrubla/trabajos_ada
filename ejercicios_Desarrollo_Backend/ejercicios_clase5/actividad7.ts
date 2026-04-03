// Ejercicio 7: Modificadores de Acceso
// 1.Define una clase Coche con propiedades marca, modelo (públicas) y precio (privada).
// 2.Implementa un método para mostrar la información del coche que acceda a las propiedades públicas y no a la privada directamente.

class Car {
  constructor(
    public brand: string,
    public model: string,
    private price: number,
  ) {}

  carInformation() {
    return `El auto seleccionado es de marca ${this.brand} modelo ${this.model}`;
  }

  getPriceInfo(): string {
    return `El precio del auto es ${this.price}`;
  }

  modifyPrice(newPrice: number): string {
    if (newPrice > 0) {
      this.price = newPrice;
      return "El precio se ha actualizado correctamente";
    }
    return "Precio inválido";
  }
}

const car1 = new Car("BYD", "Dolphyn", 81);
console.log(car1.carInformation(), car1.getPriceInfo());
console.log(car1.modifyPrice(102));
console.log(car1.modifyPrice(-50));
console.log(car1.getPriceInfo());
