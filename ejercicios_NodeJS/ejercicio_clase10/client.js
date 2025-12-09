// Parte 2: Crear el Cliente TCP
// 1.Descripción: Crea un cliente TCP en Node.js que se conecte al servidor en el puerto 5000. 
// El cliente debe permitir al usuario ingresar mensajes en la consola y enviar esos mensajes al servidor. 
// El cliente debe mostrar la respuesta del servidor en la consola.
// 2.Requisitos:
// El cliente debe conectarse al servidor en el puerto 5000 y en la dirección localhost.
// Debe permitir al usuario ingresar mensajes y enviarlos al servidor.
// Debe mostrar en la consola la respuesta del servidor.
// El cliente debe manejar la desconexión y mostrar un mensaje cuando se desconecta

const net = require('net');

const readline = require('readline-sync');

const client = net.createConnection({ port: 5000, host: 'localhost'});

client.on('connect', () => {
    console.log('En conexión!');
    sendLine();
});

client.on('data', (data) => {
    console.log('El servidor dice: ' + data.toString());
    sendLine();
});

client.on('error', (err) => {
    console.log(err.message);
});

function sendLine() {
    let line = readline.question('\nDigita algo para probar la conexión\t');

    if(line == "0") {
        client.end();
    } else {
        client.write(line);
    };
};
