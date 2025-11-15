// Ejercicio 6: Servidor de Comandos
// Consigna: Crea un servidor TCP que permita a los clientes enviar comandos simples. 
// Dependiendo del comando recibido, el servidor debe realizar una acción específica:
// •Si el cliente envía "fecha", el servidor debe responder con la fecha y hora actual.
// •Si el cliente envía "ip", el servidor debe responder con la dirección IP del cliente.
// •Si el cliente envía "salir", el servidor debe cerrar la conexión.
// •Para cualquier otro comando, el servidor debe responder "Comando no reconocido".
// Requisitos:
// •Usa el evento data para recibir y procesar los comandos.
// •Usa el método socket.write() para enviar respuestas.
// •Usa el método socket.end() para cerrar la conexión cuando el cliente envíe "salir".

const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('cliente conectado');

    server.on('data', (data) => {
        let userCommand = data.toString().toLowerCase().trim();

        switch (userCommand) {
            case 'fecha':
                socket.write(`La fecha y hora actual es: ${new Date().toString()}`);
                break;
            case 'ip':
                socket.write(`Tu dirección ip es: ${socket.remoteAddress}`);
                break;
            case 'salir':
                socket.end('Conexión cerrada');
                break;
         default:
                socket.write('Comando no reconocido. Usa fecha, ip o salir');
                break;
        };
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});


server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});