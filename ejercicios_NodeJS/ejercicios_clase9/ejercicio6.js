// DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo de Fallos
// Objetivo: Crear un cliente TCP que intente reconectarse si la conexión se pierde, pero que abandone después de 5 intentos fallidos.
// El cliente debe: Intentar conectarse al servidor. Si se desconecta, volver a intentar cada 2 segundos. 
// Llevar un contador de intentos fallidos. Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de error. 
// Manejar adecuadamente los eventos 'error', 'close' y 'data'.
// PISTA: Usen un contador global de intentos y un setTimeout() para gestionar los reintentos.

const net = require('net');

let attempt = 0;
let maxAttempts = 5;

function connectToServer() {
    if(attempt >= maxAttempts) {
        console.log('No se pudo conectar al servidor despues de cinco intentos');
        return;
    }

    console.log(`Conexión cerrada. Intento ${attempt + 1} de ${maxAttempts}`);
    
    const client = net.createConnection({ port: 5000 }, () => {
        console.log('Conectado al servidor');
        client.write('Hola, servidor');
        attempt = 0;
    });

    client.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString())
    });

    client.on('error', (err) => {
        console.log('Error en la conexión: ', err.message);
        attempt++;
    });

    client.on('close', () => {
        console.log('Conexión cerrada.');
        if (attempt < maxAttempts) {
            console.log('Reintentando conexión en dos segundos.');
            setTimeout(connectToServer, 2000);
        }
    });
};

connectToServer();
