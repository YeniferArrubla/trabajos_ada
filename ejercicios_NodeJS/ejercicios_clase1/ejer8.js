// Ejercicio 8: Contador de letras 🎶
// Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena.
// Consigna:
//  Usa un bucle for y condicionales.
//  Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let texto = "Programar es divertido";

function contarLetras(texto, letra) {
    let numeroDeVecesLetra = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i].toLowerCase() === letra.toLowerCase()){
            numeroDeVecesLetra+= 1
        }
    }
    return numeroDeVecesLetra;
}

console.log(contarLetras(texto, "r")); //debe devolver 3