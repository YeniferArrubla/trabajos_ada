// Ejercicio 6: Lista de Compras
// Crea un script que permita al usuario agregar elementos a una lista de
// compras. El usuario debe poder agregar tantos elementos como desee y
// luego ver la lista completa.

const rlSync = require('readline-sync');

const shoppingList = [];
let addMore = true;

console.log('🛒 Lista de compras');

while (addMore) {
    const item = rlSync.question('Agrega un producto: ');
    shoppingList.push(item);

    addMore = rlSync.keyInYN('¿Deseas agregar otro producto?');
}

console.log('Tu lista de compras:');

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
}
