// Actividad 5: Re-exportación de Módulos
// Crea un módulo index.ts que re-exporte todas las funciones y constantes de los módulos mathUtils.ts y stringUtils.ts.
// En main.ts, importa todo desde index.ts y utiliza al menos una función de cada módulo, mostrando el resultado en la consola.

import { subtract, capitalize } from './index';

console.log(`Este es el resultado de la función subtract importada desde index.ts de la cual fue re-exportada:`, subtract(89,24));
console.log(`Este es el resultado de la función capitalize importada desde index.ts de la cual fue re-exportada:`, capitalize('augusto'));