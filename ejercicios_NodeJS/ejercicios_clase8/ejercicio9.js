// Ejercicio 9: Cliente que reconecta automáticamente
// Consigna
// Crea un cliente que:
// 1.Si la conexión falla, reintente conectarse cada 3 segundos hasta que tenga éxito.
// Pistas
// •Usa setTimeout() para intentar de nuevo tras 3 segundos.
// •Llama a net.createConnection() dentro del reintento.

const net = require('net');

function connectToServer() {

    const client = net.createConnection({ port: 5000, host: 'localhost' });

    client.on('connect', () => {
        console.log('Conectado al servidor');
    });

    client.on('error', () => {
        console.log('Error al conectar. Reintentando en 3 segundos...');
        setTimeout(connectToServer, 3000);
    });
}

connectToServer();