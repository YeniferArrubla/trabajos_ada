// Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) y devolverá la información al cliente.
// Pasos a seguir:
// 1. Servidor TCP:
// El servidor debe escuchar en el puerto 4000.
// Debe recibir solicitudes del cliente que incluyan el ID de un libro.
// Utilizar el patrón MVC:
//  Modelo: Encargado de leer el archivo JSON (books.json) que contiene la lista de libros y buscar el libro por ID.
//  Vista: Encargada de formatear la respuesta que se enviará al cliente (en formato JSON).
//  Controlador: Encargado de recibir la solicitud del cliente, llamar al modelo para obtener los datos y luego pasar esos datos a la vista para formatear la respuesta.
// El servidor debe enviar la respuesta al cliente y cerrar la conexión.
// 2. Cliente TCP:
// El cliente debe conectarse al servidor y enviar un ID de libro.
// Debe recibir la respuesta del servidor y mostrarla en la consola.
// El cliente debe permitir al usuario ingresar el ID del libro que desea consultar.

const net = require('net');
const bookController = require('./controllers/bookController');

const PORT = 4000;

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
    const bookId = data.toString().trim();
    const response = bookController.handleBookRequest(bookId);

    socket.write(response);
    socket.end();
    });
});

server.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});