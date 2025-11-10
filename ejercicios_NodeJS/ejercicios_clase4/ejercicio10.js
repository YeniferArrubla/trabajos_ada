// Ejercicio 10: ¡Haz un respaldo de tus metas!
// Consigna: Nunca está de más guardar una copia de seguridad. 
// Escribe un programa que copie el contenido de metas.json en un archivo llamado respaldo_metas.json.
// Pista: Usa el método fs.copyFile para copiar archivos de manera sencilla.

const fs = require('fs');

function backupMetasfile () {
    if (fs.existsSync('metas.json')) {
        fs.copyFile('metas.json', 'metas-backup.json', (err) => {
            if (err) {
                console.log('No se pudo realizar una copia de metas.json', err);
                return;
            } else {
                console.log('Se ha realizado la copia del archivo metas.json');
                return;
            };
        });
    } else {
        console.log('El archivo metas.json no existe');
        return;
    };
};

backupMetasfile();