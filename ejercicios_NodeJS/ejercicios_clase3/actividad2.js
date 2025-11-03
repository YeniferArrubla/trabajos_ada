// Actividad 2: Seguimiento de series de televisión
// Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
// 1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
// 2. Listar las series: Muestra todas las series registradas.
// 3. Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.
// Pistas:
// • Usa un archivo JSON para almacenar la información de las series.
// • Si el archivo no existe, comienza con un arreglo vacío.

// ¿Qué es fs.existsSync()?
// • El método fs.existsSync() es parte del módulo fs (file system) en Node.js. 
// Este método se usa para comprobar si un archivo o directorio existe en el sistema de archivos de manera sincrónica, lo
// que significa que el código se ejecuta y espera a que la operación se complete antes de continuar con el siguiente paso.
// • Sintaxis: fs.existsSync(path);

const fs = require('fs');

const args = process.argv.slice(2); 
const command = args[0]; 
const answer = args.slice(1).join(' ');

let series = [];

function readSeries () {
    if(fs.existsSync('series.json')) {
    const data = fs.readFileSync('series.json', 'utf8');
    return JSON.parse(data);
    } else {
        return [];
    }
};

function saveSerie(series) {
    fs.writeFileSync('series.json', JSON.stringify(series, null, 2), 'utf8');
};

function addSerie (name, seasons) {
    series = readSeries();
    series.push({ name, seasons });
    saveSerie(series);
    return `Serie "${name}" agregada a la lista correctamente.`
};

function listSeries () {
    series = readSeries();
    series.forEach((serie, index) => {
        console.log(`${index + 1}. Serie: ${serie.name} - Temporadas: ${serie.seasons}`)
    });
};

function updateSeasons (name, newSeasons) {
    series = readSeries();
    const serie = series.find(s => s.name.toLowerCase() === name.toLowerCase());
    if (serie) {
        serie.seasons = newSeasons;
        saveSerie(series);
        return `Temporadas de la serie "${name}" actualizadas a ${newSeasons}.`;
    } else {
        return `Serie no encontrada.`;
    }
};

//commands
switch (command) {
    case 'agregar':
        const [name, seasons] = answer.split(',');
        console.log(addSerie(name.trim(), parseInt(seasons.trim())));
        break;

    case 'listar':
        console.log(listSeries());
        break;

    case 'actualizar':
        const [nameToUpdate, newSeasons] = answer.split(',');
        console.log(updateSeasons(nameToUpdate.trim(), parseInt(newSeasons.trim())));
        break;

    default:
        console.log('Comando no reconocido. Recuerda usar "agregar", "listar" o "actualizar".');
};

