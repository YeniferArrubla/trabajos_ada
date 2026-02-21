// Actividad 7: Aserciones y genéricos con funciones y objetos 
// Crea una función genérica llamada procesarObjeto que reciba un objeto genérico y: 
// 1. Use un bucle for...in para recorrer sus propiedades. 
// 2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a minúsculas. 
// 3. Si es un número (number), elévalo al cuadrado. 4. Si es un booleano, invierte su valor. 
// Usa aserciones de tipo para realizar las transformaciones.

function procesarObjeto<T>(obj: T): T {
  for (const key in obj) {
    const value = obj[key as keyof T];

    if (typeof value === "string") {
      obj[key as keyof T] =
        (value as string).toLowerCase() as T[keyof T];

    } else if (typeof value === "number") {
      obj[key as keyof T] =
        ((value as number) ** 2) as T[keyof T];

    } else if (typeof value === "boolean") {
      obj[key as keyof T] =
        (!(value as boolean)) as T[keyof T];
    }
  }

  return obj;
}

const persona = {
  nombre: "YENNIFER",
  edad: 5,
  activa: true
};

console.log(procesarObjeto(persona));