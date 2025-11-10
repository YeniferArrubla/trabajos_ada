// Ejercicio 9: Filtra tus metas completas
// Consigna: Supongamos que cada meta tiene un estado: “completa” o “pendiente”. Filtra las metas que ya completaste y muéstralas en la consola.
// Pista: Modifica las metas para que sean objetos con un atributo estado. Usa el método filter para obtener las completas.

const fs = require('fs');

function stateOfGoal() {
    if(fs.existsSync('metas.json')){
        const data = fs.readFile('metas.json', 'utf8', (err, data) => {
            if(err){
                console.log('Error al leer el archivo', err)
                return
            }
            let metas = JSON.parse(data);

            const updateGoals = metas.map(meta => {
                if (typeof meta === 'string') {
                    return { nombre: meta, estado: 'pendiente' };
                } else {
                    return meta;
                }
            });
            
            fs.writeFile('metas.json', JSON.stringify(updateGoals, null, 2), err => {
                if (err) {
                    console.log('Error al escribir el archivo:', err);
                    return;
                } 
                console.log('El archivo se ha actualizado correctamente.\n');

                const completeGoals = updateGoals.filter(meta => meta.estado === 'completada');

                console.log('Metas completadas:');
                if (completeGoals.length > 0) {
                    completeGoals.forEach(meta => console.log(`- ${meta.nombre}`));
                    
                } else {
                    console.log('No tienes metas completadas todavía');
                }
            });
        });
    } else {
        console.log('El archivo metas.json no existe');
    }
}

stateOfGoal();