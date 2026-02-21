// Actividad 5: Usar aserciones dobles
// Crea una variable de tipo any y haz una conversión con aserciones dobles para convertirla en un number. Muestra el resultado.

let value: any = "25";
let result = (value as unknown as number) + 5; //incluso si se hace la doble aserción no se convierte a number, con el + se concatena
console.log(result); //255

//Para hacer una conversión real se debe 

let data: any = "25";
let result2 = Number(data) + 5;
console.log(result2);

// Otras opciones de conversiones
let value2: any = "25";
let result3 = +value2 + 5; //The +value converts it to a number.
console.log(result3); // 30

let value3: any = "25";
let result4 = parseInt(value3) + 5; //Si se quieren numeros enteros
console.log(result4); // 30