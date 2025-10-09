//Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña.
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta.
// La contraseña correcta es "1234".

// let uPassword = prompt('Ingrese una contraseña: ');
// let confPassword;
// let access = '';

// do {
//     confPassword = prompt('Confirme su contraseña: ')
//     if(uPassword !== confPassword){
//         console.log('La contraseña ingresada no coincide');
//     } else{
//         access = 'Contraseña validada, bienvenido';
//         console.log(access);
//     }
// } while (uPassword !== confPassword);

//console.log(access)

//o de esta manera, es que no había comprendido muy bien el enunciado.

let password = '1234';
let uPassword = '';
let access = '';

do {
    uPassword = prompt('Ingrese su contraseña: ');
    if (password !== uPassword){
        access = 'Contraseña incorrecta, intente de nuevo';
        console.log(access);
    } else {
        access = 'Contraseña validada, bienvenido!'
    }
} while (password !== uPassword);

console.log(access);



