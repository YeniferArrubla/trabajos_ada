// Ejercicio 1: Servidor TCP con UUID v4
// Objetivo:
// Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.
// Pasos:
// 1. Servidor TCP (server.js):
// Importar los módulos net y uuid.
// Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.
// 2. Cliente TCP (client.js):
// Importar el módulo net.
// Conectar al servidor TCP, recibir el UUID y mostrarlo en la consola.

const net = require('net');
const { v4: uuidv4 } = require('uuid');

const server = net.createServer((socket) => {
    const clientID = uuidv4();

    console.log('Cliente conectado: ', clientID);

    socket.write(`Tu UUID es ${clientID}`);

    socket.on('end', () => {
        console.log('Cliente desconectado: ', clientID);
    });
});

server.listen(5000, () =>{
    console.log('Servidor TCP escuchando en el puerto 5000');
});
