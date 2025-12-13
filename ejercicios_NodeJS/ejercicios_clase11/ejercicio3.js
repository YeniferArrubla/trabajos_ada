// Ejercicio 3: Calculadora Simple
// Crea un script en Node.js que utilice readline-sync para solicitar al
// usuario dos números y una operación (suma, resta, multiplicación o
// división). Luego, muestra el resultado de la operación seleccionada.

const rlSync = require('readline-sync');

const userNumber1 = rlSync.questionInt('Ingresa un número: ');
const userNumber2 = rlSync.questionInt('Ingresa otro número: ');

const mathOperation = [
    'Suma',
    'Resta',
    'Multiplicación',
    'División'
];

const userOperation = rlSync.keyInSelect(
    mathOperation, 'Elige la operación a realizar con los números dados; '
);

if (userOperation === -1) {
    console.log('Operación cancelada');
    process.exit();
};

switch (userOperation) {
    case 0:
        console.log(`${userNumber1} + ${userNumber2} = ${userNumber1 + userNumber2}`);
        break;
    case 1:
        console.log(`${userNumber1} - ${userNumber2} = ${userNumber1 - userNumber2}`);
        break;
    case 2:
        console.log(`${userNumber1} * ${userNumber2} = ${userNumber1 * userNumber2}`);
        break;
    case 3:
        console.log(`${userNumber1} / ${userNumber2} = ${userNumber1 / userNumber2}`);
        break;
};
