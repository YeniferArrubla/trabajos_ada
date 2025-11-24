// DESAFÍO 5: Cliente con Eventos y Control de Referencias
// Objetivo: Aplicar ref() y unref() para controlar la terminación del proceso de Node.js.
// El cliente debe: Conectarse y enviar un mensaje inicial. Escuchar los eventos 'data', 'end', 'close' y 'error'. 
// Llamar a client.unref() a los 10 segundos para permitir que el proceso termine. A los 15 segundos, 
// llamar a client.ref() para que el proceso se mantenga activo. Cerrar la conexión a los 20 segundos.

const net = require('net'); //se importa el módulo net

const client = net.createConnection({ port: 5000}, () => { //se crea la conexión al servidor y se envía mensaje
    console.log('Conectado al servidor');
    client.write('Hola, servidor!');
});

//Escuchar eventos

client.on('data', (data) => {
    console.log('Datos recibidos del servidor: ', data.toString());
});

client.on('end', () => {
    console.log('El servidor cerró la conexión');
});

client.on('close', () => {
    console.log('Socket cerrado');
});

client.on('error', (err) => {
    console.log('Error en la conexión: ', err.message);
});

//Control del proceso

setTimeout(() => {
    console.log('El proceso puede terminar sino hay más trabajo');
    client.unref();
}, 10000);

setTimeout(() => {
    console.log('El proceso se mantiene activo');
    client.ref();
}, 15000);

setTimeout(() => {
    console.log('Finalizando la conexión');
    client.end();
}, 20000);
