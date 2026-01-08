// Ejercicio 5: Datos nulos y diferenciados
// Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena,
// y luego cambia su valor a null. Imprime ambos estados en la consola, explicando
// el significado de null en TypeScript.

let firstName: string = 'Silvana';
let middleName: string | null = 'María';
let lastName: string = 'Espencer';

let fullName = 
    middleName === null
    ? `${firstName} ${lastName}`
    : `${firstName} ${middleName} ${lastName}`

console.log('El nombre del usuario es:', fullName);

middleName = null;

fullName = 
    middleName === null // El usuario no tiene segundo nombre (null significa ausencia intencional)
    ? `${firstName} ${lastName}`
    : `${firstName} ${middleName} ${lastName}`

console.log('El nombre del usuario es:', fullName);