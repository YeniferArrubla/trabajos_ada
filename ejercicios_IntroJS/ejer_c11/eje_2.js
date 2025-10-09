// Ejercicio 2: Semáforo inteligente
// Consigna: Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
// •Rojo: "Alto, no puedes avanzar."
// •Amarillo: "Precaución, prepárate para avanzar."
// •Verde: "Avanza con seguridad." Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde." Utiliza un switch para resolver este ejercicio.

let uColor = prompt('Ingresa un color del semáforo para conocer la indicación: ');
let ansEje2 = '';

switch (uColor) {
    case 'rojo':
        ansEje2 = "Alto, no puedes avanzar.";
        break;
    case 'amarillo': 
        ansEje2 = "Precaución, prepárate para avanzar.";
        break;
    case 'verde':
        ansEje2 = "Avanza con seguridad.";
        break;
    default:
        ansEje2 = `El color ${uColor} no es válido en el semáforo convencional, ingresa rojo, amarillo o verde`;
        break;
}
console.log(ansEje2);
