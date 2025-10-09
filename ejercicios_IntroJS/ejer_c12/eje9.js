// Ejercicio 9: Control de gastos.
// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
// Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
// a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos
// indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, 
// por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// ✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// ✔ Posibles matrices para comprobar los resultados.

let gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // Semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // Semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // Semana 4
];

function totalSemana(matriz, semana) {
  return matriz[semana - 1].reduce((a, b) => a + b, 0);
}
console.log("Total gastos semana 1:", totalSemana(gastos, 1));
console.log("Total gastos semana 2:", totalSemana(gastos, 2));
console.log("Total gastos semana 3:", totalSemana(gastos, 3));
console.log("Total gastos semana 4:", totalSemana(gastos, 4));

function totalDia(matriz, dia) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][dia - 1];
  }
  return suma;
}
console.log("Total dia 1:", totalDia(gastos, 1));
console.log("Total dia 2:", totalDia(gastos, 2));
console.log("Total día 3:", totalDia(gastos, 3));
console.log("Total día 4:", totalDia(gastos, 4));
console.log("Total día 5:", totalDia(gastos, 5));
console.log("Total día 6:", totalDia(gastos, 6));
console.log("Total día 7:", totalDia(gastos, 7));

function totalMes(matriz) {
  let total = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      total += matriz[i][j];
    }
  }
  return total;
}
console.log("Total del mes:", totalMes(gastos));

function semanaMasGastos(matriz) {
  let max = 0;
  let semana = 0;
  for (let i = 0; i < matriz.length; i++) {
    let suma = matriz[i].reduce((a, b) => a + b, 0);
    if (suma > max) {
      max = suma;
      semana = i + 1;
    }
  }
  return { semana, max };
}
function diaMasGastos(matriz) {
  let max = 0;
  let dia = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][j];
    }
    if (suma > max) {
      max = suma;
      dia = j + 1;
    }
  }
  return { dia, max };
}

console.log("Semana con más gastos:", semanaMasGastos(gastos));
console.log("Día con más gastos:", diaMasGastos(gastos));
