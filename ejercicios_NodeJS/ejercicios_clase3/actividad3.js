// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.
// Pistas:
// •Usa un archivo JSON para guardar las tareas.
// •Si el archivo no existe, comienza con un arreglo vacío.
// •Eliminar una tarea se puede hacer por su ID.

const fs = require('fs'); //se importa el modulo file system

const args = process.argv.slice(2); //se obtienen los argumentos de la linea de comandos
const command = args[0]; // se obtiene el primer argumento como comando
const answer = args.slice(1).join(' '); // se obtiene el resto de los argumentos como respuesta

const jsonFile = 'tasks.json'; // se nombra el archivo JSON para guardar las tareas

function loadTasks() { //funcion para cargar las tareas desde el archivo JSON
    if(fs.existsSync(jsonFile)){ //verifica si el archivo existe
        const data = fs.readFileSync(jsonFile, 'utf8'); // si existe, lee el contenido del archivo
        return JSON.parse(data); // lo parsea y lo retorna como un objeto javaScript
    } else {
        return []; // si no existe, retorna un arreglo vacio
    }
};

function saveTasks(tasks) { //funcion para guardar las tareas en el archivo JSON
    fs.writeFileSync(jsonFile, JSON.stringify(tasks, null, 2)); //convierte el objeto javaScript a JSON y lo escribe en el archivo JSON
};

function addTask(description) { //funcion para agregar una tarea
    const tasks = loadTasks(); //carga las tareas existentes
    const lastId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0; //obtiene el ultimo ID usado
    const newTask = { //crea un nuevo objeto tarea
        id: lastId + 1, //asigna el ID de acuerdo al ultimo ID usado
        description: description, //asigna la descripcion pasada como argumento (la tarea desde la linea de comandos)
        complete: false,//inicializa la tarea como incompleta
    };
    tasks.push(newTask); //agrega la nueva tarea al arreglo de tareas
    saveTasks(tasks); //guarda el arreglo actualizado en el archivo JSON
    console.log('Task added: ', newTask); //muestra en consola la tarea agregada
};

function listTasks() { //funcion para listar las tareas
    const tasks = loadTasks(); //carga las tareas existentes
    if(tasks.length === 0) { //verifica si hay tareas
        console.log('No tienes tareas pendientes'); //si no hay tareas, muestra un mensaje
    } else {
        console.log('Lista de tareas: '); //si hay tareas, muestra un encabezado
        tasks.forEach(task => { // da la vuelta por cada tarea y la muestra en consola
            const status = task.complete ? '[✓]' : '[✗]'; //muestra un check si la tarea esta completa o una equis si no lo esta
        console.log(`${task.id} ${task.description} - ${status}`) ;//muestra el ID, la descripcion y el estado de la tarea en la consola
        });
    }
};

function deleteTask(id) { //funcion para eliminar una tarea por su ID
    const tasks = loadTasks(); //carga las tareas existentes
    id = parseInt(id); //convierte el ID pasado como argumento a un numero entero
    const filteredTasks = tasks.filter(task => task.id !== id); //filtra las tareas para eliminar la que tiene el ID especificado
    if(filteredTasks.length === tasks.length) { //verifica si se elimino alguna tarea
        console.log(`No se encontró la tarea con ID ${id}`); //si no se elimino ninguna tarea, muestra un mensaje y retorna false
        return false;
    }
    saveTasks(filteredTasks); //guarda el arreglo actualizado en el archivo JSON
    console.log(`Tarea: ${id} eliminada`); //muestra en consola la tarea eliminada y retorna true si se elimino una tarea
    return true;

};

function completeTask(id) { //funcion para marcar una tarea como completada por su ID
    const tasks = loadTasks(); //carga las tareas existentes
    id = parseInt(id); //convierte el ID pasado como argumento a un numero entero
    const task = tasks.find(task => task.id === id); //busca la tarea con el ID especificado
    if(task) { //verifica si se encontro la tarea
        task.complete = true; //marca la tarea como completada
        saveTasks(tasks); //guarda el arreglo actualizado en el archivo JSON
        console.log(`Tarea completada: ${task.description}`); //muestra en consola la tarea completada
    } else {
        console.log(`No se encontró la tarea: ${task.description}`); //si no se encontro la tarea, muestra un mensaje
    }
};


switch (command) { //segun el comando pasado como argumento, ejecuta la funcion correspondiente
    case 'agregar':
        addTask(answer); //agrega una tarea con la descripcion pasada como argumento
        break;
    case 'listar':
        listTasks(); //lista las tareas
        break;
    case 'borrar':
        deleteTask(answer); //elimina una tarea con el ID pasado como argumento
        break;
    case 'completar':
        completeTask(answer); //marca una tarea como completada con el ID pasado como argumento
        break;
    default:
        console.log('No se ha reconocido el comando. Use: agregar, listar, completar o borrar');
        //si el comando no es reconocido, muestra un mensaje
};
