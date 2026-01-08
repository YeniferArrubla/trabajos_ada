// Ejercicio 6: Uso de unknown
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
// valores.

let surpriseValue: unknown = 7;

if (typeof surpriseValue === 'number') {
  console.log(`La variable es de tipo number y su valor es: ${surpriseValue}`);
} else {
  console.log('El tipo de la variable es desconocido');
}

surpriseValue = 'Cadena de texto';

if (typeof surpriseValue === 'string') {
  console.log(`La variable es de tipo string y su valor es: ${surpriseValue}`);
} else {
  console.log('El tipo de la variable es desconocido');
}
