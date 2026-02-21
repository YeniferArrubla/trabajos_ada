// Actividad 4: Usar aserciones de tipo
// Declara una variable de tipo any y usa una aserción para tratarla como string, accediendo a la propiedad .length.

// let value: any = "Intentando con TypeScript";
// let length = (value as string).length;
// console.log(length);

// let value: any = "Backend"; //undefined porque la aserción no cambia el tipo, entonces no puedo usar un método de tipo número
// let length = (value as number).toFixed(2);
// console.log(length);

let input: any = "42";
let result = (input as number) + 8;
console.log(result); //428

let userInput: any = 999;
let length = (userInput as string).length;
console.log(length);