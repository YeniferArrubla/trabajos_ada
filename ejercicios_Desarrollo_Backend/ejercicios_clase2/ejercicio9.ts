// Ejercicio 9: Funciones con retorno void y manipulación de objetos
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y encendido (booleano). 
// Define una función encenderCoche que acepte el objeto coche y cambie el valor de encendido a true. 
// Muestra el estado del coche en la consola antes y después de llamar a la función.

type Coche = {
    marca: string,
    modelo: string,
    encendido: boolean
};

const coche: Coche = {
    marca: 'BYD',
    modelo: 'Sealion',
    encendido: true
}

function encenderCoche(coche: Coche): void {
    coche.encendido = false;
}

console.log('Antes:', coche);

encenderCoche(coche);

console.log('Después:', coche);