// Ejercicio 2: Descubre tu perfil
// Consigna: Es hora de revisar tu perfil digital.
// Lee el archivo perfil.json que creaste en el ejercicio anterior y muestra la información en la consola para 
// asegurarte de que todo está correcto.
// Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el contenido del archivo como texto legible.

// Importar el módulo 'fs'
const fs = require('fs');
// Usamos el método readFile para leer el contenido de un archivo
fs.readFile('perfil.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    // Mostrar la información del perfil en la consola
    console.log('Contenido del archivo perfil.json:');
    console.log(data);
});