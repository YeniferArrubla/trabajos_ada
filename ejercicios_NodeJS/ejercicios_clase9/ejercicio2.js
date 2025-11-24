// DESAFÍO 2: Cliente con Pausa y Reanudación de Datos
// Objetivo: Simular un cliente que pausa la recepción de datos por 5 segundos y luego la reanuda.
// El cliente debe: Conectarse al servidor y enviar un mensaje inicial. Escuchar el evento 'data' y mostrar los datos en consola. 
// Pausar la recepción de datos usando client.pause() a los 3 segundos. Reanudar la recepción de datos con client.resume() a los 8 segundos. 
// Finalizar la conexión tras 15 segundos.

const net = require('net'); //se importa el módulo net

const client = net.createConnection({ port: 5000}, () => { //se crea la conexión al servidor
    client.write('Hola, servidor');
    console.log('Conectado al servidor');
});

client.on('data', (data) => { //se reciben los datos del servidor y se muestran por consola de forma que se puedan leer.
    console.log('Datos recibidos del servidor: ', data.toString());
});

setTimeout(() => { 
    console.log('Pausando la recepción de datos');
    client.pause(); //se pausa la recepción de datos
}, 3000);

setTimeout(() => {
    console.log('Reanudando la recepción de datos');
    client.resume(); //se reanuda la recepción de datos
}, 8000);

setTimeout(() => {
    console.log('Finalizando conexión');
    client.end(); //se finaliza la conexión
}, 15000);
