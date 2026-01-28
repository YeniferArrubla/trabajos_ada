// Actividad 2: Exportaciones Nombradas
// En el archivo stringUtils.ts, crea dos funciones:
// • capitalize(str: string): string: devuelve el string con la primera letra en mayúscula.
// • reverse(str: string): string: devuelve el string al revés.
// Exporta ambas funciones como exportaciones nombradas. Luego, en main.ts, importa las funciones y utilízalas con una cadena de texto,
// mostrando el resultado en la consola.

import { capitalize, reverse } from "./stringUtils";

const text = "yo hago yoga hoy"

console.log(capitalize(text));
console.log(reverse(text));
