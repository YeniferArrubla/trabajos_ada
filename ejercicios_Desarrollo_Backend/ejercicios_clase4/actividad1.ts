// Actividad 1: Usar For...In para recorrer propiedades de un objeto
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) 
// y usa un bucle for...in para recorrer y mostrar cada propiedad y su valor.

type User = {
    nombre: string;
    edad: number;
    ciudad: string;
};

const user: User = {
    nombre: 'Elena',
    edad: 34,
    ciudad: 'San José'
}

for (const key in user) {
    console.log(`Propiedad del objeto: ${key} | Valor: ${user[key as keyof typeof user]}`);
}
