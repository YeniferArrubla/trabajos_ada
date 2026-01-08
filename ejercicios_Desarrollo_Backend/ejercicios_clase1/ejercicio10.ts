// Ejercicio 10: Uso de objetos
// Declara un objeto en TypeScript con propiedades de tipo string, number y
// boolean. Accede a estas propiedades e imprímelas en la consola.

type User = {
    nickName: string;
    favoriteNumber: number;
    pet:boolean
};

let user: User = {
    nickName: 'Bruno',
    favoriteNumber: 3,
    pet:false
};

console.log(`El usuario es ${user.nickName}, su número favorito es ${user.favoriteNumber}. Y ${user.pet ? 'sí' : 'no'} tiene mascota.`)