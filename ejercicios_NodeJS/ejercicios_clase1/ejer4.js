// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene.
// Consigna:
//  Usa un bucle for y condicionales.
//  Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = 'Hola mundo' //'Oh! acá hay murciélagos';

function contarVocales(texto) {
    let vocales = 'aáeéiíoóuú';
    let contador = 0;

    texto = texto.toLowerCase();

    for(let i = 0; i <= texto.length; i++) {
        if(vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales(texto));