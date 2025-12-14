// 1. Configuración del Servidor:
// Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8080).

// 2. Comando para Validar Rutas:
// El servidor debe recibir una ruta desde el cliente.
// Usa path.isAbsolute para verificar si la ruta es absoluta o relativa.

// 3. Responder al Cliente:
// Envía una respuesta al cliente indicando si la ruta es absoluta o relativa.

const net = require('net');
const path = require('path');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const ruta = data.toString().trim()
        
        const isAbsolute = path.isAbsolute(ruta);

        if (isAbsolute) {
            socket.write(`La ruta "${ruta}" es ABSOLUTA\n`);
        } else {
            socket.write(`La ruta "${ruta}" es RELATIVA\n`);
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});
