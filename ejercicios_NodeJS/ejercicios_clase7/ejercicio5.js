// Ejercicio 5: Servidor con Contador de Conexiones
// Consigna: Crea un servidor TCP que lleve un contador de cuántos clientes se han conectado. 
// Cada vez que un nuevo cliente se conecta, el servidor debe enviarle un mensaje indicando cuántos clientes se han conectado hasta ese momento. 
// Cuando un cliente se desconecta, el servidor debe reducir el contador.
// Requisitos:
// •Usa una variable global para mantener el contador de conexiones.
// •Usa el evento connection para incrementar el contador y enviar el mensaje al cliente.
// •Usa el evento close para reducir el contador cuando un cliente se desconecta.

const net = require('net');

const server = net.createServer();

let connectionNumber = 0;

server.on('connection', (socket) => {
    connectionNumber += 1;
    socket.write(`Eres el cliente ${connectionNumber} que se conecta`);

    socket.on('close', () => {
        connectionNumber -= 1;
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

