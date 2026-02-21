// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y Aserciones
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de valores mixtos 
// (por ejemplo, number | string | boolean). Usando un bucle for...of, filtra solo los valores que sean cadenas de texto (string). 
// Utiliza aserciones de tipo para acceder a las propiedades específicas de string.

function filtrarElementos<T>(arr: T[]): string[] {
    const resultado: string[] = [];

    for (const elemento of arr) {
        if (typeof elemento === "string") {
            const texto = elemento as string;
            resultado.push(texto);
        }
    }
    return resultado;
}

const datos = [1, "hola", true, "backend", 42, false];
const soloStrings = filtrarElementos(datos);
console.log(soloStrings);