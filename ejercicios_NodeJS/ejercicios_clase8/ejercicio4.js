// Ejercicio 4: Manejo de errores en la conexión
// Consigna
// Modifica el cliente para que:
// 1.Si ocurre un error (como un servidor no disponible), lo detecte y lo muestre con " Error: [mensaje]".
// 2.Si la conexión se cierra inesperadamente, muestre " Conexión cerrada inesperadamente".
// Pistas
// •Usa client.on('error', callback) para manejar errores.
// •Usa client.on('close', callback) para detectar cierres.

const net = require('net');

const client = net.createConnection({ port:5000, host: 'localhost'});

client.on('connect', () => {
    console.log('Conectado al servidor');
});

client.on('error', (err) => {
    console.log('Error: ', err.message);
});

client.on('close', () => {
    console.log('Conexión cerrada inesperadamente');
});