// DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
// Objetivo: Implementar un timeout que cierre la conexión si no recibe datos en 10 segundos.
// El cliente debe: Conectarse y enviar un mensaje inicial. Configurar un setTimeout() de 10 segundos para cerrar la conexión si no recibe datos. 
// Escuchar el evento 'data' y cancelar el timeout si recibe información. Si no recibe datos en 10 segundos, 
// usar client.destroy() y mostrar un mensaje en consola.

const net = require('net'); //se imprta el módulo net

const client = net.createConnection({ port: 5000}, () => { //se crea la conexión al servidor y envía mensaje
    console.log('Conectado al servidor');
    client.write('Hola, servidor!');
});

const timeOut = setTimeout(() => { //se crea una constante para establecer el tiempo de espera
    console.log('No se recibieron datos en diez segundos. Conexión finalizada.')
    client.destroy(); // destruye la conexión
}, 10000);

client.on('data', (data) => { //se escucha el evento data
    console.log('Datos recibidos: ', data.toString()); //si se reciben datos se muestran en consola
    clearTimeout(timeOut); //se cancela la destrucción de la conexión cuando se reciben datos
});

