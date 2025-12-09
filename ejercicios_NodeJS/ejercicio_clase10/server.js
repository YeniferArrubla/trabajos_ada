// Parte 1: Crear el Servidor TCP
// 1.Descripción: Crea un servidor TCP en Node.js que escuche en el puerto 5000. 
// El servidor debe manejar múltiples conexiones de clientes y mostrar los mensajes recibidos en la consola. 
// Además, el servidor debe responder a cada mensaje con una confirmación que diga "Mensaje recibido".
// 2.Requisitos:
// El servidor debe escuchar en el puerto 5000.
// Debe manejar el evento connection para aceptar nuevas conexiones de clientes.
// Debe manejar el evento data para recibir y mostrar mensajes de los clientes.
// Debe manejar el evento close para saber cuándo un cliente se desconecta.
// Debe manejar el evento error para mostrar cualquier error que ocurra.
// El servidor debe responder a los mensajes de los clientes con "Mensaje recibido".

// Parte 2: Extención: permitir que el servidor envíe mensajes a todos los clientes conectados, 
// o maneja múltiples clientes en el servidor.

// Se importa el módulo net para crear la conexión
const net = require('net');

// Se importa el módulo readline-sync para las entradas del usuario
const readline = require('readline-sync');

// Se crea la conexión TCP al servidor 
const server = net.createServer();

let clients = []; // variable para almacenar las conexiones

server.on('connection', (socket) => {

    clients.push(socket); //agregando nueva conexión

    console.log('Nuevo cliente conectado', socket.remoteAddress + ':' + socket.remotePort);

    socket.on('data', (data) => {

        console.log(`Cliente dice: ${data}`);

        socket.write('Mensaje recibido!');

        for (let client of clients) {
            if (client !== socket) {
                client.write('Otro cliente dijo: ' + data.toString());
            }
        }
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
        clients = clients.filter(c => c !== socket);
    });

    socket.on('error', (err) => {
        console.log(err.message);
    });
});

server.listen(5000, () => {
    console.log('Servidor está escuchando en el puerto', server.address().port);
});