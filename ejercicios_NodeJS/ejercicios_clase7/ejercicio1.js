// Ejercicio 1: Servidor de Eco
// Consigna: Crea un servidor TCP que actúe como un servidor de eco. 
// Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente y devolverlos exactamente igual (hacer un "eco"). 
// Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos.
// Requisitos:
// •Usa el evento connection para detectar nuevas conexiones.
// •Usa el evento data para recibir datos del cliente.
// •Usa el método socket.write() para enviar los datos de vuelta al cliente.
// •Usa los eventos end y close para manejar la desconexión del cliente.

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('data', (data) => {
        console.log('El cliente envía; ', data.toString());
        socket.write(data);
    });

    socket.on('end', () => {
        console.log('El cliente se ha desconectado');
    });

    socket.on('close', () => {
        console.log('Conexión cerrada');
    });

});

server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
});
