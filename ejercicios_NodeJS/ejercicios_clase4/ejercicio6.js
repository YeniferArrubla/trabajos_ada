// Ejercicio 6: Tu lista de metas
// Consigna: Es momento de planear tus metas. Crea un archivo llamado metas.json con una lista vacía al principio. 
// Luego, agrega metas como: “Aprender Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
// Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la lista.

// Importar módulo fs
const fs = require('fs');

function loadGoals (){
   if (fs.existsSync('metas.json')){
      const data = fs.readFileSync('metas.json', 'utf8');
      return JSON.parse(data);
   } else {
    return [];
   }
};

function saveGoals(metas) {
   fs.writeFileSync('metas.json', JSON.stringify(metas, null, 2));
};

let metas = loadGoals();
metas.push('Aprender Node.js');
metas.push('Disfrutar cada día');

saveGoals(metas);
console.log(metas);
