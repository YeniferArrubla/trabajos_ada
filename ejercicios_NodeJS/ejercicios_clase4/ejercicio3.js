// Ejercicio 3: ¡Actualiza tu estilo!
// Consigna: ¿Has cambiado tu estilo o actividad reciente? 
// ¡Es momento de actualizar tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios en el archivo perfil.json.
// Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo.

// Importar el módulo 'fs'
const fs = require('fs');

// Leer el archivo perfil.json
fs.readFile('perfil.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Actualizar el objeto perfil
    const perfil = JSON.parse(data);
    perfil.hobby = 'Escuchar audiolibros';

    // Escribir los cambios en el archivo perfil.json
    fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
        if (err) {
            console.error('Error al actualizar el archivo:', err);
        } else {
            console.log('Archivo perfil.json actualizado exitosamente.');
        }
    });
});
