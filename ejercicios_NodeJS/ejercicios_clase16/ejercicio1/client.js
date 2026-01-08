const net = require("net");
const rl = require("readline-sync");

const client = net.createConnection({ port: 5000, host: "localhost" }, () => {
  console.log("Conectado al servidor");

  const userChoice = rl.question(
    "Digite A para ingresar mensaje o B para ver los mensajes guardados:"
  );

  if (userChoice.toLowerCase() === "a") {
    const message = rl.question("Ingrese el mensaje: ");
    
    client.write(`Agregar|${message}`);

  } else if (userChoice.toLowerCase() === "b") {
    
    client.write(`Historial`);

  } else {
    console.log("Opción no válida. Ingrese: A para guardar mensaje, B para ver los mensajes");
  }
});

client.on("data", (data) => {
    console.log('Respuesta del servidor: ');
    console.log(data.toString());
    client.end();
});
