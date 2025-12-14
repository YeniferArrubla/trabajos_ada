const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({ port: 8081 }, () => {
    const path = readline.question('Ingresa una ruta a normalizar: ');
    client.write(path);
});

client.on('data', (data) => {
    console.log(data.toString());
});
