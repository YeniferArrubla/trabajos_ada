// Ejercicio 5: Detectar cuando el servidor cierra la conexión
// Consigna
// Crea un cliente que:
// 1.Se conecte y envíe "¿Sigues ahí, servidor?".
// 2.Cuando el servidor cierre la conexión, muestre " Servidor cerró la conexión".
// Pistas
// •El evento 'end' se activa cuando el servidor finaliza la conexión.

const net = require('net');

const client = net.createConnection({ port: 5000, host: 'localhost'});

client.on('connect', () => {
    client.write('¿Sigues ahí, servidor?');
});

client.on('end', () => {
    console.log('Servidor cerró la conexión');
});
