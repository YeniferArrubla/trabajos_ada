// Actividad 1: Modularización Básica
// Crea un módulo llamado mathUtils.ts que contenga las siguientes funciones:
// • add(a: number, b: number): number: devuelve la suma de a y b.
// • subtract(a: number, b: number): number: devuelve la resta de a y b.
// Luego, crea un archivo main.ts que importe mathUtils y utilice ambas funciones para mostrar el resultado en la consola.

export function add(a: number, b: number): number {
    return a + b;
}

export const subtract = (a: number, b: number): number => a - b; //arrow functions aren't commond in modules because the trace showing errors, 
// Named exports feel more “official”, Hoisting, Arrow functions do not have their own this. 

// Use arrow functions for: Callbacks, Small inline logic, Functional utilities,
// Use regular functions for: Exported functions, Services, Business logic, Utilities