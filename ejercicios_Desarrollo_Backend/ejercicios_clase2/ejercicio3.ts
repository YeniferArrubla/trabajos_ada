// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), 
// y energia (number). Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al final, muestra el estado del deportista en la consola.

let deportista = {
    nombre: 'Jenn',
    deporte: 'Natación',
    energia: 100,
};

let horasEntrenamiento = 5;

function entrenar(deportista: {nombre: string, deporte: string, energia: number}, horasEntrenamiento: number ): void {
    deportista.energia -= horasEntrenamiento * 5;
}

entrenar(deportista, horasEntrenamiento);
console.log(deportista);
console.log(`${deportista.nombre} ha entrenado por ${horasEntrenamiento} horas. Energía restante: ${deportista.energia}`);

// to study:

// function entrenar(
//   deportista: { nombre: string; deporte: string; energia: number }, // como se retorna al deportista ya no se usa void
//   horas: number
// ) {
//   deportista.energia -= horas * 5;
//   return deportista; 
// }

// const horas = 3;
// const deportistaActualizado = entrenar(deportista, horas);

// console.log(
//   `${deportistaActualizado.nombre} ha entrenado por ${horas} horas. Energía restante: ${deportistaActualizado.energia}`
// );
