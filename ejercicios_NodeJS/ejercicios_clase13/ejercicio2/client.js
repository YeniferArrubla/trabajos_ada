const net = require('net');
const readline = require('readline-sync');

const PORT = 4001;
const HOST = 'localhost';

const hotelId = readline.question('Ingresa el id del hotel: ');

const client = net.createConnection({ port: PORT, host: HOST }, () => {
    client.write(hotelId);
});

client.on('data', (data) => {
    const response = JSON.parse(data.toString());

    if (response.message) {
        console.log(response.message);
    }

    if (response.data) {
        console.log('Habitaciones disponibles:', response.data.roomsAvailable);
    }

    client.end();
});

client.on('end', () => {
    console.log('🔌 Conexión finalizada');
});