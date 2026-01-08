// Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos
// Consigna:
// Crea un servidor TCP que reciba mensajes de los clientes y los guarde en un archivo JSON. 
// Luego, permite a los clientes consultar todos los mensajes almacenados.
// Pasos:
//  Usa el módulo net para crear el servidor.
//  Usa fs para guardar los mensajes en un archivo mensajes.json.
//  Implementa un comando especial (ej: /historial) para que los clientes puedan consultar todos los mensajes.

const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {

    socket.on('data', (data) => {
        const receivedText = data.toString();
        const [command, message] = receivedText.split('|');
        const normalizedCommand = command.toLowerCase()

        if (normalizedCommand === 'agregar') {
            let messages = [];

            if (fs.existsSync('mensajes.json')) {
                const fileContent = fs.readFileSync('mensajes.json', 'utf8');
                messages = JSON.parse(fileContent);
            }

            messages.push(message);

            fs.writeFileSync('mensajes.json', JSON.stringify(messages, null, 2));

            socket.write('Mensaje guardado correctamente');
        }

        else if (normalizedCommand === 'historial') {
            if (fs.existsSync('mensajes.json')) {
                const fileContent = fs.readFileSync('mensajes.json', 'utf8');
                socket.write(`Mensajes guardados: ${fileContent}`);
            } else {
                socket.write('No hay mensajes guardados');
            }
        }

        else {
            socket.write('Comando no válido');
        }
    });
});

server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
})