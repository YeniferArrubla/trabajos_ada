const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({ port: 8082 }, () => {
    const filePath = readline.question('Ingresa la ruta: ');
    client.write(filePath);
});

client.on('data', (data) => {
    console.log(data.toString());
});
