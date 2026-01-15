// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto empleado con las propiedades 
// nombre (string) y salario (number), y un número que represente el porcentaje de aumento. 
// La función debe aumentar el salario del empleado y devolver el nuevo salario. Muestra en la consola el resultado.

function aumentarSalario(
  empleado: { nombre: string; salario: number },
  porcentajeAumento: number
): number {
  empleado.salario += (empleado.salario * porcentajeAumento) / 100;
  return empleado.salario;
}

let empleado = { nombre: 'María', salario: 800 };
let aumento = 5;

console.log(aumentarSalario(empleado, aumento));
console.log(`Empleado: ${empleado.nombre}. Salario final con aumento: ${empleado.salario}`);
