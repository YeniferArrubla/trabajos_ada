// Ejercicio 7: Calculadora simple
// Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a realizar: 
// suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

let uOperation = parseInt(prompt('Ingrese el número correspondiente a la operación que desea realizar: 1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir'));
let ansEje7 = '';

if(uOperation < 1 || uOperation > 4 ){
    ansEje7 = 'La opción ingresada no es válida';
} else {
    let uNum1 = parseInt(prompt('Ingrese el primer número: '));
    let uNum2 = parseInt(prompt('Ingrese el segundo número: '));
    switch (uOperation) {
        case 1:
            ansEje7 = `La suma entre ${uNum1} y ${uNum2} es ${uNum1 + uNum2}`;
            break;
        case 2:
            ansEje7 = `La resta entre ${uNum1} y ${uNum2} es ${uNum1 - uNum2}`;
            break;
        case 3:
            ansEje7 = `La multiplicación entre ${uNum1} y ${uNum2} es ${uNum1 * uNum2}`;
            break;
        case 4:
            ansEje7 = `La división entre ${uNum1} y ${uNum2} es ${uNum1 / uNum2}`;
            break;
    };
};
console.log(ansEje7);
