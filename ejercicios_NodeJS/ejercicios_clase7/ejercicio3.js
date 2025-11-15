// Ejercicio 3: Servidor de Mensajes Personalizados
// Consigna: Crea un servidor TCP que permita a los clientes enviar mensajes. 
// El servidor debe responder con un mensaje personalizado dependiendo del contenido del mensaje recibido:
// •Si el cliente envía "Hola", el servidor debe responder "¡Bienvenido!".
// •Si el cliente envía "Adiós", el servidor debe responder "¡Hasta luego!" y cerrar la conexión.
// •Para cualquier otro mensaje, el servidor debe responder "Mensaje recibido: [mensaje del cliente]".
// Requisitos:
// •Usa el evento data para recibir y procesar los mensajes del cliente.
// •Usa el método socket.write() para enviar respuestas personalizadas.
// •Usa el método socket.end() para cerrar la conexión cuando el cliente envíe "Adiós".

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {

        const userData = data.toString().toLowerCase();

        if (userData === 'hola'){
            socket.write('¡Bienvenido!');
        } else if (userData === 'adiós'){
            socket.write('¡Hasta luego!');
            socket.end();
        } else {
            socket.write(`Mensaje recibido: ${answer3}`);
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
});