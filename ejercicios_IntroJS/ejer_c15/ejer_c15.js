// Ejercicio 1: Añadir personajes a una lista
// Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. 
// Agrega los personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. Luego, muestra el array actualizado.

let videoGameCharacter = ['Link', 'Zelda'];
videoGameCharacter.push('Mario', 'Luigui');
console.log(videoGameCharacter.join(', '));

// Ejercicio 2: Eliminar al último invitado
// Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
// El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista.

let guest = ["Ana", "Juan", "Carlos", "Sofía"];
let guestWhoCanceled = guest.pop();
console.log(guest.join(', '));

// Ejercicio 3: Agregar y eliminar a la fila de mascotas
// Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. Llega un "Hámster" que debe ser atendido primero. 
// Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. 
// Finalmente, muestra la lista actualizada.

let pets = ["Perro", "Gato", "Conejo"];
pets.unshift('Hamster');
console.log(pets.join(', '));

// Ejercicio 4: Convertir una lista de palabras en una frase
// Tienes un array de palabras ["JavaScript", "es", "divertido"]. 
// Une todas las palabras en una sola frase, separadas por un espacio, y muestra el resultado.

let words = ["JavaScript", "es", "divertido"];
let phrase = words.join(' ');
console.log(phrase);

// Ejercicio 5: Buscar la posición de un elemento
// Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y muestra el índice del color "Azul" en la lista.

let colors = ["Rojo", "Verde", "Azul", "Amarillo"];
let indexOfBlue = colors.indexOf('Azul');
console.log(indexOfBlue);

// Ejercicio 6: Buscar la última posición de un elemento repetido
// Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7.

let numbers = [2, 5, 7, 2, 8, 7];
let repeatNumIndex = numbers.lastIndexOf(7);
console.log(repeatNumIndex);

// Ejercicio 7: Verificar si una lista contiene un elemento
// Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. 
// Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.

let fastFood = ["Pizza", "Hamburguesa", "Tacos"];
let todayMenu = fastFood.includes('Sushi') ? 'Sushi está en el menú' : 'Sushi no está en el menú';
console.log(todayMenu);

// Ejercicio 8: Extraer una parte de una frase
// Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte "gatos" utilizando el método adecuado.

let phrase2 = "Los gatos son geniales";
let wordPhrase2 = phrase2.slice(4, 9);
console.log(wordPhrase2);

// Ejercicio 9: Eliminar espacios innecesarios
// Tienes la siguiente cadena con espacios adicionales " Hola, mundo! "
// Elimina los espacios al inicio y al final y muestra la cadena resultante.

let phaseWithSpaces = " Hola, mundo! ";
let phraseWithoutSpaces = phaseWithSpaces.trim();
console.log(phraseWithoutSpaces);

// Ejercicio 10: Reemplazar una palabra en una frase
// Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por "verano" y muestra la frase actualizada.

let phrase3 = "Me gusta el invierno";
let phraseUpdated = phrase3.replace('invierno', 'verano');
console.log(phraseUpdated);

// Ejercicios Extra para seguir practicando:

// Gestión de inventario de una tienda
// Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// 1. Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
// 2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
// 3. Eliminar el primer producto del inventario.
// 4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

let stock = ["Laptop", "Teclado", "Mouse", "Monitor"];

//1
let newItem = stock.push('Impresora');
console.log(stock);

//2
let verifyItem = stock.includes('Tablet') ? 'Tablet está en el inventario' : 'Tablet no está en el inventario';
console.log(verifyItem);

//3
let withoutStock = stock.shift();
console.log(withoutStock);

//4
let updatedStock = stock.join(', ');
console.log(updatedStock);

// Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// 1. Dividir la oración en palabras individuales.
// 2. Clasificar las palabras en dos categorías: Cortas (menos de 5 letras). Largas (5 letras o más).
// 3. Mostrar ambas listas de palabras clasificadas.
// 4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

let phrase4 = "JavaScript es un lenguaje poderoso y versátil";

//1
let arrayPhrase4 = phrase4.split(' ');
console.log(arrayPhrase4);

//2
let listingShortWords = arrayPhrase4.filter((word) => word.length < 5);
let listingLongWords = arrayPhrase4.filter((word) => word.length >= 5);

//3
console.log(`Lista de palabras largas: ${listingLongWords.join(', ')}`);
console.log(`Lista de palabras cortas: ${listingShortWords.join(', ')}`);

// Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. 
// Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// 3. Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

let customers = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let servedCustomer = []

//2
customers.includes('VIP') ? console.log('Hay un cliente VIP') : console.log('No hay clientes VIP en lista');

//1
while(customers.length > 0){
    servedCustomer = customers.shift();
    console.log(`Atendiendo a ${servedCustomer}`);
}
console.log('No hay mas clientes en espera');

//3
console.log(`El total de clientes atendidos: ${servedCustomer.length}`);
