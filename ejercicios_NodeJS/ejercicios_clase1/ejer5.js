// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las iniciales en mayúsculas.
// Consigna:
//  Usa el método split() para dividir el nombre.
//  Usa un bucle for y métodos de string.

let nombre = 'angel mateo arrubla';

function generarIniciales(nombre) {
    let nombreSeparado = nombre.split(' ');
    let inicialesDelNombre = '';

    for(let i = 0; i < nombreSeparado.length; i++) {
        let letraInicial = nombreSeparado[i][0];
        inicialesDelNombre += letraInicial.toUpperCase();
    }
    return inicialesDelNombre;
}

console.log(generarIniciales(nombre));