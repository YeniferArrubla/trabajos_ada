// Ejercicio 2: Leer y Modificar un Archivo JSON
// Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos nuevamente.
// Instrucciones:
// Crea un archivo llamado data.json con el siguiente contenido:
// Crea un archivo llamado exercise2.js.
// Lee el archivo data.json, modifica el campo age a un nuevo valor, y guarda el archivo modificado.

const fs = require("fs");

fs.copyFile("data.json", "data.backup.json", (err) => {
    if (err) {
        console.log('Error al crear el backup file', err);
        return;
    }
    
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    const users = JSON.parse(data);

    users[0].age = 40;

    const updateJson = JSON.stringify(users, null, 4);

    fs.writeFile("data.json", updateJson, (err) => {
      if (err) {
        console.log("error al modificar el archivo", err);
        return;
      }

      console.log("Archivo data.json modificado correctamente");

      fs.readFile("data.json", "utf8", (err, fileContent) => {
        if (err) {
          console.log("Error al leer el archivo", err);
          return;
        }

        console.log(fileContent);
      })
    })
  })
})
