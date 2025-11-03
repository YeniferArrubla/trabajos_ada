// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario.
// Pistas:
// • Usa un archivo JSON para guardar los productos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada producto debe tener un ID único que se pueda utilizar para actualizar su cantidad.

const fs = require('fs');

const jsonFile = 'stockList.json';

const args = process.argv.slice(2);
const command = args[0];
const name = args[1];
const number = parseInt(args[2]);

function loadStockList() {
    if(fs.existsSync(jsonFile)) {
        const data = fs.readFileSync(jsonFile, 'utf8');
        return JSON.parse(data);
    } else {
        return [];
    }
};

function saveStockList(stock) {
    fs.writeFileSync(jsonFile, JSON.stringify(stock, null, 2), 'utf8');
};


function addProduct (stock) {
    stock = loadStockList();
    const lastId = stock.length > 0 ? Math.max(...stock.map(produt => produt.id)) : 0;
    const newProduct = {
        id: lastId + 1,
        name: name,
        number: number
    };
    stock.push(newProduct);
    saveStockList(stock);
    console.log('Producto agregado al inventario: ', newProduct);
};

function listProducts() {
    stock = loadStockList();
    if(stock.length === 0) {
        console.log('No hay productos en la lista de inventario');
        return;
    }
    console.log('Los productos en la lista de inverio son: ');
    stock.forEach(item => {
        console.log(`ID del producto: ${item.id} | ${item.name} | Cantidad disponible: ${item.number}`);
    });
};

function editNumberOfProducts(id, newNumber) {
    stock = loadStockList();
    id = parseInt(id);

    const product = stock.find(p => p.id === id);

    if(!product) {
        console.log('El producto no fue encontrado');
        return;
    }

    product.number = parseInt(newNumber);
    saveStockList(stock);
    console.log(`Cantidad del producto ${product.name} fue actualizada a ${product.number}`)
};

switch (command) {
    case 'agregar':
        addProduct();
        break;
    case 'listar':
        listProducts();
        break;
    case 'actualizar':
        editNumberOfProducts(args[1], args[2]);
        break;
    default:
        console.log('Comando no reconocido. Usa: agregar, listar, actualizar');
};
