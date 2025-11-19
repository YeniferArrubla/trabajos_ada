// Ejercicio 7: Cliente que destruye el socket al fallar
// Consigna
// Crea un cliente que:
// 1.Se conecte al servidor.
// 2.Si hay un error en la conexión, use client.destroy() y muestre " Conexión destruida".
// Pistas
// •client.destroy() libera los recursos del socket de inmediato.

const net = require('net');

const client = net.createConnection({ port: 5000, host: 'localhost'});

client.on('connect', () => {
    console.log('Conectado al servidor');
});

client.on('error', (err) => {
    console.log('Error en la conexión: ', err.message);
    client.destroy();
    console.log('Conexión destruida');
});