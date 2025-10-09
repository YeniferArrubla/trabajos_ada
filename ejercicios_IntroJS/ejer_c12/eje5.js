// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
// Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
// (Pueden desglosar en pasos el código si eso les facilita su desarrollo)

let uNames = '';
let arrayNames = [];
let ansEje5 = '';

for(let i = 1; i <= 3 ; i++){
    uNames = prompt(`Ingrese el nombre ${i}`);
    arrayNames.push(uNames);
}

let verName = prompt('Tienes duda? Verifica si ingresaste el nombre: ');
if(arrayNames.includes(verName)){
    ansEje5 = `El nombre ${verName} sí está en la lista, los nombres ingresados son ${arrayNames}`;
} else{
    ansEje5 = `${verName} no se encuentra en la lista, los nombres ingresados son ${arrayNames}`;
};
console.log(ansEje5);
