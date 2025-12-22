const net = require('net');

const client = net.createConnection({ port: 5000}, () => {
    console.log('Conectado al servidor');
});

client.on('data', (data) => {
    const jsonResponse = JSON.parse(data.toString());

    console.log('UUID recibido: ', jsonResponse.uuid);
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});