// Ejercicio 6: Cliente interactivo con la usuaria
// Consigna
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y enviarlos al servidor.
// •Después de cada mensaje, la usuaria puede escribir otro.
// •Si escribe "salir", el cliente se desconecta.
// Pistas
// •Usa readline para capturar texto de la usuaria.
// •Si el mensaje es "salir", cierra la conexión con client.end().

const net = require('net');
const client = net.createConnection({ port: 5000, host: 'localhost'});

const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});


client.on('connect', () => {
    console.log('Conectado al servidor');

    function askMessage() {

        rl.question('Mensaje para el servidor: ', (message) => {
            if (message.toLowerCase() === 'salir'){
             client.end();
                readline.close();
            } else {
                client.write(message);
                askMessage();
            };        
        });
    };
    askMessage();
});
