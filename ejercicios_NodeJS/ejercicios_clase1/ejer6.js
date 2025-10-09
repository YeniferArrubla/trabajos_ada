// Ejercicio 6: Calculadora de promedio 📊
// Escribe una función que reciba un array de números y devuelva el promedio.
// Consigna:
//  Usa un bucle for para sumar los números.
//  Divide la suma total entre la cantidad de elementos del array.

let calificaciones = [8, 9, 10, 7, 6];

function calcularPromedio(calificaciones) {
    let sumaCalificaciones = 0;
    for(let i = 0; i < calificaciones.length; i++){
        sumaCalificaciones += calificaciones[i];
    }
    let promedio = sumaCalificaciones / calificaciones.length;
    return promedio;
}

console.log(calcularPromedio(calificaciones)); //debe devolver 8