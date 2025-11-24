// DESAFÍO 1: Cliente con Reconexión Automática
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
// El cliente debe: Conectarse al servidor en el puerto 5000. Enviar un mensaje inicial: "¡Hola, servidor!".
// Escuchar el evento 'close' y volver a conectarse tras 3 segundos. Escuchar y manejar 'error', mostrando el mensaje en consola.

const net = require('net'); //se importa el módulo net

function connectToServer() { //se crea una función para encapsular todo el proceso
    const client = net.createConnection({ port: 5000 }, () => {  //se crea la conexión al servidor
        console.log('Conectado al servidor');
        client.write('¡Hola, servidor!');
    });

    client.on('error', (err) => { // se escucha el evento error y se muestra en consola
        console.log('Error en la conexión: ', err.message);
    });

    client.on('close', () => { //se escucha el evento close que indica que el servidor cerró la conexión y se intenta la reconexión
        console.log('Conexión cerrada. Reintentando conexión en tres segundos.');
        setTimeout(connectToServer, 3000);
    });
  
};

connectToServer(); // se inicializa la función