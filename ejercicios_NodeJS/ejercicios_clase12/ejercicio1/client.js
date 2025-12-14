const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({ port: 8080 }, () => {
    const ruta = readline.question('Ingresa una ruta: ');
    client.write(ruta);
});

client.on('data', (data) => {
    console.log('Servidor dice:', data.toString());
    client.end();
});
