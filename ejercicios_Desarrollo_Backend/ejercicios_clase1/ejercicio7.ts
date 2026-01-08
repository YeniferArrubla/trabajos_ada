// Ejercicio 7: Tipos literales
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
// TypeScript.

let day: 'Lunes' | 'Martes' | 'Miercoles';

day = 'Lunes';
console.log(day);

//day = 'viernes'; No permite ni siquiera la reasignación del valor
//console.log(day); En la consola aparece error:
// return new TSError(diagnosticText, diagnosticCodes, diagnostics);
//TSError: ⨯ Unable to compile TypeScript:
//ejercicio7.ts:11:1 - error TS2322: Type '"viernes"' is not assignable to type '"Lunes" | "Martes" | "Miercoles"'.
//11 day = 'viernes';
