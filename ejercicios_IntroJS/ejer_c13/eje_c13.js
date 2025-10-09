// Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
// Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. 
// La función debe devolver el área del triángulo. Pista: Usa la fórmula: A = (b * h) / 2

function triangleArea(a, b){    //Función declarada
    return (a * b) / 2
};
console.log(triangleArea(2, 8)) 

const triArea = function(a, b){ //Función expresada
    return (a * b) / 2
};
console.log(triArea(2, 8))

const aTri = (a, b) => (a * b) / 2; //Función flecha
console.log(aTri(2, 8))

// Ejercicio 2: Número mayor (función expresada) 
// Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.

const greaterThan = function(a, b){  
    if(a > b){
        return a;
    } else {
        return b;
    }
};
console.log(greaterThan(2, 5));

//or

const biggerThan = function(a, b){
    return (a > b ? a : b)
};
console.log(biggerThan(2, 5));

//or

const moreThan = (a, b) => a > b ? a : b;
console.log(moreThan(2, 5));

// Ejercicio 3: Mensaje global y local 
// Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global". 
// Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor 
// "Hola desde el scope local" y que imprima ambos mensajes.

let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje(){
    let saludoLocal = "Hola desde el scope local"
    return `${saludoGlobal} y ${saludoLocal}`;
};
console.log(mostrarMensaje());

// Ejercicio 4: Número par o impar 
// Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar
// Usa una variable local para guardar el resultado.

function esPar(a){
   return a % 2 ==! 0 ? `${a} es un número impar` : `${a} es un número par`;
}
console.log(esPar(1121));
console.log(esPar(998));

// Ejercicio 5: Concatenar nombres (función expresada)
// Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido)
// como parámetros y devuelva el nombre completo concatenado.

const concatenarNombres = (a, b) => `Bienvenid@ ${a} ${b}!`;
console.log(concatenarNombres('Jenn', 'Arrubla'));
console.log(concatenarNombres('Franco', 'Guevara'));

// Ejercicio 6: Convertir a minutos
// Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.

function convertirHorasAMinutos(a){
    return `${a} horas es igual a ${a * 60} minutos`;
}
console.log(convertirHorasAMinutos(2));
console.log(convertirHorasAMinutos(15));

// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada horaActual (puedes asignarle un valor fijo).
// Crea una función declarada llamada mostrarSaludo que imprima "Buenos días" si la hora es menor a 12, 
// "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.

let horaActual = 8;

function mostrarSaludo(a){
    if(a < 12){
        return `Buenos días!`;
    } else if (a >= 12 && a < 18){
        return `Buenas tardes!`;
    } else {
        return `Buenas noches!`
    }
};
console.log(mostrarSaludo(horaActual));
console.log(mostrarSaludo(15));
console.log(mostrarSaludo(20));

// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
// Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y 
// devuelva la temperatura en Fahrenheit. Fórmula: Fahrenheit = (Celcius * 9/5) +32

const convertirCelsiusAFahrenheit = (a) => `${a} grados Celcius es igual a ${(a * 9/5)+32} grados Fahrenheit`;
console.log(convertirCelsiusAFahrenheit(20));
console.log(convertirCelsiusAFahrenheit(28));

// Ejercicio 9: Contar hasta un número 
// Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números
// desde 1 hasta ese número.

function contarHasta(a){
    let num = [];
    for(let i = 1; i <= a ; i++){
        num.push(i);
    }
    return `Los número del 1 al ${a} son ${num.join(', ')}`;
}
console.log(contarHasta(5));
console.log(contarHasta(9));

// Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
// Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial. 
// Fórmula del factorial: n! = n * (n - 1) * (n - 2) * ... * 1 

const calcularFactorial = function(a){
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i
    }
    return `El factorial de ${a} es ${factorial}`
}
console.log(calcularFactorial(0));
console.log(calcularFactorial(5));
console.log(calcularFactorial(8));
