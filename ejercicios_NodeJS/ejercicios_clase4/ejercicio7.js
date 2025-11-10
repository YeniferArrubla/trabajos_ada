// Ejercicio 7: Encuentra tu meta perdida
// Consigna: Revisa tu lista de metas en el archivo metas.json. Busca si una meta específica, como “Viajar a Japón”, ya está incluida. 
// Si no, agrégala.
// Pista: Usa fs.readFile para leer el archivo y un método como find para buscar en la lista.

const fs = require('fs');

function findGoal(meta) {
  if (fs.existsSync('metas.json')) {
    fs.readFile('metas.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }
      let metas = JSON.parse(data);
      const foundGoal = metas.find(m => m === meta);
      if (foundGoal) {
        console.log(`La meta "${meta}" ya está en la lista.`);
      } else {
        metas.push(meta);
        fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
          if (err) {
            console.error('Error al guardar el archivo:', err);
            return;
          }
          console.log(`Se agregó la meta "${meta}" a la lista.`);
        });
      }
    });
  } else {
    const metas = [meta];
    fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
      if (err) {
        console.error('Error al crear el archivo:', err);
        return;
      }
      console.log(`No existía el archivo, se creó con la meta "${meta}".`);
    });
  }
}

findGoal('Viajar a Japón');
findGoal('Leer al menos una página del libro de turno');
