const net = require('net');
const readline = require('readline-sync');

const PORT = 4000;
const HOST = 'localhost';

const bookId = readline.question('Ingresa el id del libro: ');

const client = net.createConnection({ port: PORT, host: HOST }, () => {
    client.write(bookId);
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

