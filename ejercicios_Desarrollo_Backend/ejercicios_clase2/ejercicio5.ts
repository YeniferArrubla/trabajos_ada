// Ejercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad indefinida de números y devuelva su suma. 
// Luego, llama a la función con varios números y muestra el resultado en la consola.

function sumarTodos(...numeros:number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarTodos(15, 8, 7, 19, 20))

// Alternative without .reduce

// function sumarTodos(...numeros: number[]): number {
//   let total = 0;

//   for (const num of numeros) {
//     total += num;
//   }

//   return total;
// }
