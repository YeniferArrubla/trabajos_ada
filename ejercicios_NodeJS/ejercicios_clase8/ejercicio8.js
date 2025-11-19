// Ejercicio 8: Cliente con unref/ref para control de procesos
// Consigna
// Crea un cliente que:
// 1.Use client.unref() para permitir que Node.js termine si no hay otras tareas.
// 2.Luego, después de 5 segundos, use client.ref() para evitar que el proceso termine.
// Pistas
// •unref() hace que el socket no impida que Node.js termine.
// •ref() lo vuelve a mantener activo.

const net = require('net');

const client = net.createConnection({ port: 5000, host: 'localhost'});

client.on('connect', () => {
    console.log('Conectado al servidor');

    client.unref();
    console.log('Node puede cerrar si no hay más tareas');

    setTimeout(() => {
        client.ref();
        console.log('El proceso se mantiene activo de nuevo');
    }, 5000);
});

