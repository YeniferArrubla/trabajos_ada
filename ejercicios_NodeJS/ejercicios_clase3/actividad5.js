// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los contactos.
// • Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0];
const commandAnswer = args.slice(1).join(' ');

const jsonFile = 'contacts.json';

function loadContacts () {
    if(fs.existsSync(jsonFile)) {
        const data = fs.readFileSync(jsonFile, 'utf8');
        return JSON.parse(data);
    } else {
        return [];
    }
};

function saveContact (contacts) {
    fs.writeFileSync(jsonFile, JSON.stringify(contacts, null, 2), 'utf8');
};

function addContact (contactName, contactPhoneNumber, contactEmail) {
    contacts = loadContacts();
    const newContact = {
        contactName,
        contactPhoneNumber,
        contactEmail
    };
    contacts.push(newContact);
    saveContact(contacts);
    console.log(`Los datos de contacto de: ${contactName} han sido agregados`);
};

function listContacts() {
    const contacts = loadContacts();
    if(contacts.length === 0) {
        console.log('No hay datos de contactos')
    } else {
        console.log('Los datos de los contactos en lista son: ')
        contacts.forEach(contact => {
            console.log(`Nombre: ${contact.contactName} | Tel: ${contact.contactPhoneNumber} | Email: ${contact.contactEmail}`);
        });
    };
};

function deleteContact(contactName) {
    const contacts = loadContacts();
    const filtercontact = contacts.filter(
        contact => contact.contactName.toLowerCase() !== contactName.toLowerCase()
    )
    if(filtercontact.length === contacts.length){
        console.log(`No se ha encontrado datos de contacto con el nombre: ${contactName}`);
    } else {
        saveContact(filtercontact);
        console.log(`Los datos de contacto de ${contactName} han sido eliminados`);
    }
};

switch (command) {
    case 'agregar':
        const [contactName, contactPhoneNumber, contactEmail] = args.slice(1);
        if (!contactName || !contactPhoneNumber || !contactEmail) {
            console.log('Debes ingresar: Nombre telefono y email');
        } else {
        addContact(contactName, contactPhoneNumber, contactEmail);
        };
        break;
    case 'listar':
        listContacts();
        break;
    case 'borrar':
        if(!commandAnswer) {
            console.log('Debes ingresar el nombre del contacto a borrar');
        } else {
        deleteContact(commandAnswer);
        };
        break;
    default:
        console.log('Comando no reconocido. Use agregar, listar o borrar');
};
