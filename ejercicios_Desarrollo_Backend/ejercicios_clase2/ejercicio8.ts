// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura ("circulo" o "rectangulo") y 
// luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). 
// La función debe retornar el área de la figura. Usa tipos específicos para cada caso.

type Circulo = {
  tipo: "circulo";
  radio: number;
};

type Rectangulo = {
  tipo: "rectangulo";
  largo: number;
  ancho: number;
};

type Figura = Circulo | Rectangulo;

function calcularArea(figura: Figura): number {
  if (figura.tipo === "circulo") {
    return Math.PI * figura.radio * figura.radio;
  } else {
    return figura.largo * figura.ancho;
  }
}

console.log(
  calcularArea({ tipo: "circulo", radio: 5 })
);

console.log(
  calcularArea({ tipo: "rectangulo", largo: 10, ancho: 4 })
);
