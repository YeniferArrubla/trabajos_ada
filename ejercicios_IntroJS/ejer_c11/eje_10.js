// Ejercicio 10: Adivina el número
// Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
// Luego, pide al usuario que adivine el número hasta 3 intentos. 
// Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
// Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

let pcNum = Math.floor(Math.random() * 10) + 1;
let ansEje10 = '';

for(i = 1 ; i <= 3 ; i++){
    let uNum = parseInt(prompt(`Adivina el número entre 1 y 10, este es el intento ${i} de 3: `));

    if(uNum === pcNum){
        ansEje10 = `Adivinaste! el número era ${pcNum}`;
        break;
    }; 
};

if(ansEje10 === ''){
    ansEje10 = `Te quedaste sin intentos, el número era el ${pcNum}`;
    };

    console.log(ansEje10);
