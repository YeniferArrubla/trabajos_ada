const prompt = require('prompt-sync')();

/*Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.*/

let uNum1 = parseFloat(prompt('Ingrese un número: '));
let uNum2 = parseFloat(prompt('Ingrese otro número para determinar si es mayor, igual o menor que el anterior: '));

let ans = '';

if (uNum1 > uNum2){
    ans = `${uNum1} es mayor que ${uNum2}`;
} else if (uNum1 < uNum2){
    ans = `${uNum1} es menor que ${uNum2}`;
} else {
    ans = 'Los números son iguales';
}
console.log(ans);

/*Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.*/

const rango_minimo = 0;
const rango_maximo = 10;

let ans2 = '';

const uRango = parseFloat(prompt('Ingrese un número para saber si coincide con el rango: '));

if (uRango >= 0 && uRango <= 10){
    ans2 = `El número ${uRango} se encuentra en el rango propuesto`;
} else {
    ans2 = `El número ${uRango} no se encuentra en el rango propuesto`;
}
console.log(ans2);

/*Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.*/

let usCond1 = prompt('Responde true or false, ¿llueve? ');
let usCond2 = prompt('Responde true or false, ¿hace calor? ');

let ansEje3 = '';

if(usCond1 == usCond2){
    ansEje3 = 'llueve y hace calor o no llueve y no hace calor';
}else if(usCond1 || usCond2){
    ansEje3 = 'o llueve o hace calor';
}else {
    ansEje3 = 'El clima está loco y yo también con este ejercicio :)';
}
console.log(ansEje3);

/*Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.*/

let uName = prompt('Ingresa tu nombre...si te llamas igual que la programadora puedes ingresar: ');
let ansEje4 = '';

if(uName === 'Jenn'){
    ansEje4 = 'Hi Jenn, nos llamamos igual, bienvenida!';
} else{
    ansEje4 = `Hi ${uName}, no nos llamamos igual, sigue intentando!`;
}
console.log(ansEje4);


/*Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.*/

let uNumA = parseFloat(prompt('Por favor ingresa un número: '));
let uNumB = parseFloat(prompt('Ingresa un segundo número: '));
let uNumC = parseFloat(prompt('Ingresa un número final para ver cual es el mayor de los tres: '));

let ansEje5 = '';

if(uNumA > uNumB && uNumA > uNumC){
    ansEje5 = `El número mayor entre ${uNumA}, ${uNumB} y ${uNumC} es ${uNumA}`;
}else if(uNumB > uNumA && uNumB > uNumC){
    ansEje5 = `El número mayor entre ${uNumA}, ${uNumB} y ${uNumC} es ${uNumB}`;
}else{
    ansEje5 = `El número mayor entre ${uNumA}, ${uNumB} y ${uNumC} es ${uNumC}`;
}
console.log(ansEje5);

/*Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.*/

let uAge = parseFloat(prompt('Ingresa tu edad: '));
let ansEje6 = '';

if(uAge >= 18 ){
    ansEje6 = `Si tienes ${uAge} años, eres mayor de edad`;
} else {
    ansEje6 = `Si tienes ${uAge} años, no eres mayor de edad`;
}
console.log(ansEje6);

/*Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)*/

let uWeight = parseFloat(prompt('Ingresa tu peso en kilogramos para saber tu peso en libras: '));
let uWeightL = uWeight * 2.20462;
let ansEje7 = `Si pesas ${uWeight} kilos, entonces pesas ${uWeightL} libras`;
console.log(ansEje7);

/*Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)*/

let uLengthA = parseFloat(prompt('Para determinar el tipo de triángulo, ingresa la primera longitud: '));
let uLengthB = parseFloat(prompt('Ingresa la segunda longitud: '));
let uLengthC = parseFloat(prompt('Ingresa la última longitud: '));

let ansEje8 = '';

if(uLengthA == uLengthB && uLengthB == uLengthC){
    ansEje8 = 'De acuerdo con las medidas ingresadas es un triángulo equilatero';
}else if(uLengthA == uLengthB || uLengthA == uLengthC || uLengthB == uLengthC){
    ansEje8 = 'De acuerdo con las medidas ingresadas es un triángulo isóceles';
} else{
    ansEje8 = 'De acuerdo con las medidas ingresadas es un triángulo escaleno';
}
console.log(ansEje8);

/*Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.*/

const PI = 3.1416
let uRadio = parseFloat(prompt('Ingrese el valor del radio del círculo para determinar su area y perímetro: '));

let rArea = PI * (uRadio ** 2);
let rPeri = 2 * PI * uRadio;

let ansEje9 = `Si un círculo tiene ${uRadio} de radio, entonces su área es ${rArea} y su perímetro es ${rPeri}`;
console.log(ansEje9);

/*Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error.*/

let uNumWeek = prompt('Ingrese un número para conocer el día de la semana: ');
let ansEje10 = '';

if(uNumWeek == 1){
    ansEje10 = `El día ${uNumWeek} de la semana es el lunes`;
} else if(uNumWeek == 2 ){
    ansEje10 = `El día ${uNumWeek} de la semana es el martes`;
} else if(uNumWeek == 3 ){
    ansEje10 = `El día ${uNumWeek} de la semana es el miércoles`;
} else if(uNumWeek == 4){
    ansEje10 = `El día ${uNumWeek} de la semana es el jueves`;
} else if(uNumWeek == 5){
    ansEje10 = `El día ${uNumWeek} de la semana es el viernes`;
} else if(uNumWeek == 6){
    ansEje10 = `El día ${uNumWeek} de la semana es el sábado`;
} else if(uNumWeek == 7){
    ansEje10 = `El día ${uNumWeek} de la semana es el domingo`;
} else {
    ansEje10 = `El número ${uNumWeek} no es un día de la semana `;
}
console.log(ansEje10);