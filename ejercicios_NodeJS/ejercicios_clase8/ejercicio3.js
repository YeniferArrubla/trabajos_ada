// Ejercicio 3: Pausar y reanudar la recepción de datos
// Consigna
// Crea un cliente TCP que:
// 1.Reciba mensajes continuamente del servidor.
// 2.Al recibir el primer mensaje, pause la recepción durante 3 segundos.
// 3.Luego de los 3 segundos, reanude la recepción y siga mostrando los mensajes.
// Pistas
// •Usa client.pause() y client.resume().
// •Un setTimeout() puede ayudarte a reanudar después de 3 segundos.

const net = require('net');

const client = net.createConnection({ port: 5000, host: 'localhost'});

client.on('connect', () => {
    console.log('Conectado al servidor');
});

let firstMessage = true;

client.on('data', (data) => {
    const informationReceived = data.toString();
    console.log('Mensaje recibido', informationReceived);

    if (firstMessage) {
        firstMessage = false;
        
        client.pause();
        console.log('Pausando la recepción de información por 3 segundos');

        setTimeout(() => {
            console.log('Reanudando recepción de información');
            client.resume();
        }, 3000);
    }
});
