// DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado
// Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 20 segundos.
// El cliente debe: Conectarse y enviar un mensaje inicial.
// Enviar un mensaje "Mensaje automático" cada 5 segundos. Escuchar el evento 'data' y mostrar los datos recibidos. 
// Cerrar la conexión con client.end() tras 20 segundos.

const net = require('net'); //se importa el módulo net

const client = net.createConnection({ port: 5000}, () => { //se establece la conexión al servidor
    console.log('Conectado al servidor');
    client.write('Hola, servidor!') //se envía mensaje inicial
});

const automaticMessage = setInterval(() => { //se establece una constante con un intervalo para enviar el mensaje automático cada 5"
    console.log('Enviando mensaje automático');
    client.write('Mensaje automático');
}, 5000);

client.on('data', (data) => { //se escucha el evento data, el cual recibe los datos del servidor, se muestran por la consola.
    console.log('Datos recibidos', data.toString());
});

setTimeout(() => { // se establece un timeout para cerrar la conexión después de 20"
    console.log('Finalizando la conexión');
    clearInterval(automaticMessage); //se desactiva el envío automático de mensajes
    client.end(); // se cierra la conexión
}, 20000);