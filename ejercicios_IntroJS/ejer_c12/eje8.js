// Ejercicio 8: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505


// function sumaRedDiagonal() {
//     let showRedDiagonalValue = 0;
//     let addRedRow = 0;
//     for (let i = 0; i < 10; i++) {
//         let redRowValue = 1 + i * 11; //fórmula tomada de la explicación
//         addRedRow += redRowValue; 
//         showRedDiagonalValue += redRowValue + ',';
//     };
//     return `La suma de los números que forman la diagonal roja ${showRedDiagonalValue} es ${addRedRow}`;
// };
// console.log(sumaRedDiagonal());


// function sumaGreenDiagonal(){
//     let showGreenDiagonalValue = 0;
//     let addGreenRow = 0;
//     for (let i = 0; i < 10; i++) {
//         let greenRowValue = 10 + i * 9; //fórmula tomada de la explicación
//         addGreenRow += greenRowValue;
//         showGreenDiagonalValue += greenRowValue + ',';
//     };
//     return `La suma de los números que forman la diagonal verde ${showGreenDiagonalValue} es ${addGreenRow}`;
// };
// console.log(sumaGreenDiagonal());

//UTILIZANDO ARRAY Y METODOS DEL ARRAY

function sumaRedDiagonal() {
    let redRow = [];
    
    for (let i = 0; i < 10; i++) {
        let redRowValue = 1 + i * 11;
        redRow.push(redRowValue);
    }
    let sumaRedRow = redRow.reduce((acum, val) => acum + val, 0);

    return `La suma de los números que forman la diagonal roja ${redRow} es ${sumaRedRow}`;
};
console.log(sumaRedDiagonal());


function sumaGreenDiagonal(){
    let greenRow = [];

    for (let i = 0; i < 10; i++) {
        let greenRowValue = 10 + i * 9;
        greenRow.push(greenRowValue);
    }
    let sumaGreenRow = greenRow.reduce((acum, val) => acum + val, 0);

    return `La suma de los números que forman la diagonal verde ${greenRow} es ${sumaGreenRow}`;
};
console.log(sumaGreenDiagonal());