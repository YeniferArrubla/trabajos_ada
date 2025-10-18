// Ejericicio 4: 
// En gestionEstudiantes.js:
// Importa el array desde estudiantes.js.
// Muestra en la consola los nombres de todos los estudiantes.
// Calcula y muestra el promedio de notas de un estudiante específico.
// Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON.

const { estudiantes } = require('./estudiantes'); //importación del array desde el archivo estudiantes.js

estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre); // mostrar en consola el nombre de todos los estudiantes
});

function promedioEstudiante(nombreEstudiante) { //se crea una función para poder calcular el promedio de un estudiante específico
    const estudiante = estudiantes.find(e => e.nombre.toLowerCase() === nombreEstudiante.toLowerCase()); //se busca el estudiante
    if (!estudiante) { // sino se encuentra se retorna el mensaje
        return `El estudiante ${nombreEstudiante} no se encuentra en el curso`;
    }
    const sumaNotas = estudiante.notas.reduce((a, b) => a + b, 0); //si se encuentra se realiza el calculo para el promedio
    const promedio = sumaNotas / estudiante.notas.length;
    return `El promedio de notas de ${estudiante.nombre} es de ${promedio}`; // se retorna el promedio de notas
};

console.log(promedioEstudiante("yennifer")); //mostrar en consola el promedio de un estudiante específico a través de la función

const nuevoEstudiante = { // se crea un nuevo estudiante
    nombre: "Isabel",
    edad: 33,
    curso: "Backend módulo 2",
    notas: [4, 5, 4, 5]
};

estudiantes.push(nuevoEstudiante); // se agrega el nuevo estudiante al array

let jsonString = JSON.stringify(estudiantes, null, 2); //se pasa el array de formato JS a JSON
console.log(jsonString); // se muestra en consola el array actualizado en formato JSON

