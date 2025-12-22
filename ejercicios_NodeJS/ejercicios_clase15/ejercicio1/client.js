const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('🔗 Conectado al servidor');
});

client.on('data', (data) => {
    console.log('UUID recibido desde el servidor:\n', data.toString());
    client.end();
});

client.on('end', () => {
    console.log('⛓️‍💥 Desconectado del servidor');
});