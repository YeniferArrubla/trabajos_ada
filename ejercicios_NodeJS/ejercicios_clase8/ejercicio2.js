// Ejercicio 2: Implementar un timeout en la conexión
// Consigna
// Modifica el cliente del Ejercicio 1 para que:
// 1.Si después de 5 segundos no ha recibido una respuesta, cierre la conexión.
// 2.Muestre " Tiempo de espera agotado" en la consola antes de cerrar.
// Pistas
// •Usa client.setTimeout() con 5000 milisegundos.
// •Cuando el timeout ocurra, usa client.end() para cerrar la conexión.

const net = require('net');

const client = net.createConnection({ port: 5000, host: 'localhost'});

client.on('connect', () => {
    console.log('Conectado al servidor');
    client.write('¡Hola!, servidor');
    client.setTimeout(5000);
});

client.on('timeout', () => {
    console.log('Tiempo de espera agotado');
    client.end();
});
