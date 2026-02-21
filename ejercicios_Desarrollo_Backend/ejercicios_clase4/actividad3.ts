// Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva. Prueba la función con diferentes tipos de datos.

function identity<T>(value: T): T {
  return value;
}

const numberValue = identity(10);
const stringValue = identity("Hello");
const booleanValue = identity(true);

console.log(`Estos son los diferentes valores de misma función genérica:`)
console.log(`Con parámetro number: ${numberValue} `)
console.log(`Con parámetro string: ${stringValue} `)
console.log(`Con parámetro booleano: ${booleanValue}`)