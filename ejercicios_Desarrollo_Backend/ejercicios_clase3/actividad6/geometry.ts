// Actividad 6: Uso de Namespaces
// Crea un namespace llamado Geometry en un archivo geometry.ts que contenga las siguientes funciones:
// •areaOfCircle(radius: number): number: devuelve el área de un círculo.
// •areaOfSquare(side: number): number: devuelve el área de un cuadrado.
// Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar a las funciones y muestra los resultados en la consola.

export namespace Geometry { //creates the namespace and allows other files to use it

    export function areaOfCircle(radius: number): number { //Each function inside must ALSO be exported
        return Math.PI * radius *  radius;
    }

    export function areaOfSquare(side: number): number {
        return side * side;
    }

}
//Namespaces group related code under a single name, but modern TypeScript prefers ES modules instead.