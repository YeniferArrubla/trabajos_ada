// Ejercicio 10: Cliente que detecta pérdida de conexión
// Consigna
// Crea un cliente que:
// 1.Si deja de recibir datos durante 10 segundos, muestre " No hay datos del servidor" y cierre la conexión.
// Pistas
// •Usa setTimeout() que se reinicie con cada mensaje recibido.
// •Si pasan 10 segundos sin mensajes, cierra con client.end().

const net = require('net');

const client = net.createConnection({ port: 5000, host: 'localhost' });

let inactivityTimer;

function resetTimer() {
    
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
    }

    inactivityTimer = setTimeout(() => {
        console.log('No hay datos del servidor');
        client.end();
    }, 10000);
}

client.on('connect', () => {
    console.log('Conectado al servidor');
    resetTimer();
});

client.on('data', (data) => {
    console.log('Mensaje del servidor:', data.toString());
    resetTimer();
});

client.on('end', () => {
    console.log('Conexión finalizada por el servidor');
});

client.on('close', () => {
    console.log('Conexión cerrada');
    clearTimeout(inactivityTimer);
});
