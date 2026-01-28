// Actividad 6: Uso de Namespaces
// Crea un namespace llamado Geometry en un archivo geometry.ts que contenga las siguientes funciones:
// • areaOfCircle(radius: number): number: devuelve el área de un círculo.
// • areaOfSquare(side: number): number: devuelve el área de un cuadrado.
// Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar a las funciones y muestra los resultados en la consola.

import { Geometry } from "./geometry";

const circleArea = Geometry.areaOfCircle(6);
const squareArea = Geometry.areaOfSquare(7);

console.log(`El área del círculo de radio 6 es igual a: ${circleArea}`);
console.log(`El área del cuadrado de lado 7 es igual a: ${squareArea}`);
