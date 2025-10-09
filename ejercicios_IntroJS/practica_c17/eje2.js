// Ejercicio 2: Verificar estado de vacunación
// Solicita al usuario el nombre de su mascota y si está vacunada. Usa una función flecha para verificar y mostrar su estado de vacunación.

let userPetName = prompt('Ingresa el nombre de la mascota: ');
let userPetVaccinated = prompt('¿Su mascota está vacunada?: ');

// const verifyVaccine = (a, b) => {
//     if(b === 'si'){
//         console.log(`${a} está vacunada`);
//     }else if(b === 'no'){
//         console.log(`${a} está pendiente por vacunar`);
//     } else {
//         console.log(`Ingrese una respuesta válida`)
//     }
// }
// const userAnswer2 = verifyVaccine(userPetName, userPetVaccinated);

//Opción 2

const verifyVaccine = (a, b) => {
    let respuestaProvisional = '';
    if(b === 'si'){
    respuestaProvisional = `${a} está vacunada`;
    }else if(b === 'no'){
    respuestaProvisional = `${a} está pendiente por vacunar`;
    } else {
    respuestaProvisional = `Ingrese una respuesta válida`
    }
    console.log(respuestaProvisional);
}
const userAnswer2 = verifyVaccine(userPetName, userPetVaccinated);
