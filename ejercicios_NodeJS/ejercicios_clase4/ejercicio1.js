// Ejercicio 1: ¡Crea tu perfil digital!
// Consigna: Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
// 1. Crear un archivo llamado perfil.json.
// 2. Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
// 3. Usa el módulo fs para escribir este archivo desde Node.js.
// Pista: Utiliza JSON.stringify para convertir tu información en un formato que pueda guardarse en el archivo.

//Paso 1: Importar el módulo 'fs'
const fs = require('fs');
// Paso 2: Crear un objeto con la información del perfil
const perfil = {
    nombre: 'Jenn',
    edad: 38,
    ciudadFavorita: 'donde haya buena compañía'
};
// Paso 3: Escribir el archivo perfil.json
fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
    } else {
        console.log('Archivo perfil.json creado exitosamente.');
    }
});
