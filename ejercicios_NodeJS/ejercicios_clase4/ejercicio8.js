// Ejercicio 8: Cuenta tus metas
// Consigna: ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu archivo metas.json y cuente cuántas metas tienes actualmente.
// Pista: Usa length para obtener la cantidad de elementos en la lista.

const fs = require('fs');

function countingGoals() {
    if(fs.existsSync('metas.json')){
        const data = fs.readFile('metas.json', 'utf8', (err, data) => {
            if(err) {
                console.log('Error al leer el archivo', err);
                return
            }
            let metas = JSON.parse(data);
            let numberOfGoals = metas.length;
            console.log(`Tienes ${numberOfGoals} metas en tu lista`)
        });
    } else {
        console.log('El archivo metas no existe')
    }
};

console.log(countingGoals());