const net = require('net');
const readline = require('readline-sync');

const PORT = 4002;
const HOST = 'localhost';

const movieTitle = readline.question('Ingresa el título de la película: ');

const client = net.createConnection({ port: PORT, host: HOST }, () => {
    client.write(movieTitle);
});

client.on('data', (data) => {
    const response = JSON.parse(data.toString());

    if (response.message) {
    console.log(response.message);
    }

    if (response.data) {
    console.log(response.data);
    }

    client.end();
});

client.on('end', () => {
    console.log('🔌 Conexión finalizada');
});