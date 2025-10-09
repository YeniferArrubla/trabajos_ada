// Ejercicio 1: Crea un nuevo array con los cuadrados de los números
// Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es crear una nueva lista donde cada número 
// de la lista original se haya transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse en 4, el número 4 en 16,
// y así sucesivamente. Al final, imprime la nueva lista.

let listaNumeros = [2, 4, 6, 8];
let listaNumerosDoble = listaNumeros.map((numero) => numero * 2);
console.log(`El doble de ${listaNumeros.join(', ')} es ${listaNumerosDoble.join(', ')} respectivamente`); 

// Ejercicio 2: Filtra los números pares de una lista
// Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y guardar únicamente los números pares en una nueva lista. 
// Los números pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez que hayas creado la nueva lista, 
// muéstrala en la consola.

let listaNumeros2 = [1, 2, 3, 4, 5, 6];
let numerosParesDeLista2 = listaNumeros2.filter((numero) => numero % 2 === 0);
console.log(`De la lista de números ${listaNumeros2.join(', ')}, los números pares son ${numerosParesDeLista2.join(', ')}`);

// Ejercicio 3: Encuentra el primer número mayor a 10
// Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer número de la lista que sea mayor a 10. 
// Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición, no todos los números que lo hagan.

let listaNumeros3 = [5, 8, 12, 20, 3];
let numeroListaMayorA10 = listaNumeros3.find((numero) => numero > 10);
console.log(`De la lista de números ${listaNumeros3} el primer número mayor que 10 es ${numeroListaMayorA10}`);

// Ejercicio 4: Calcula la suma total de los números
// Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. 
// Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.

let listaNumeros4 = [1, 2, 3, 4];
let sumaListaNumeros4 = listaNumeros4.reduce((a, b) => a + b);
console.log(`La suma de la lista de números ${listaNumeros4.join(' + ')} es igual a ${sumaListaNumeros4}`);

// Ejercicio 5: Recorre una lista e imprime cada elemento
// Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer la lista y mostrar el nombre de cada fruta
// en la consola, una por una.

let frutas = ['manzana', 'banana', 'cereza'];
let verCadaFruta = frutas.forEach((fruta) => console.log(fruta));

// Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
// Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. Queremos transformarlas para que cada palabra
// tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

let listaPalabras = ['hola', 'mundo', 'javascript'];
let listaPalabrasConSufijoPrefijo = listaPalabras.map((palabra) => `¡${palabra}!`);
console.log(`Estas son las palabras con signo de exclamación ${listaPalabrasConSufijoPrefijo.join(', ')}`)

// Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
// Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los nombres que comiencen con la letra 'A'.
// Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.

let listaNombres = ['Ana', 'Luis', 'Andrea', 'María'];
let nombresEmpiezanConA = listaNombres.filter((nombre) => nombre[0] === 'A');
console.log(`De la lista de nombres ${listaNombres.join(', ')}. Los nombres que empiezan con "A" son ${nombresEmpiezanConA.join(', ')}`);

// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre 'Laura' está presente en la lista y,
// si lo está, deberías devolverlo.

let listaNombres2 = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let comprobarNombre = listaNombres2.includes('Laura') ? 'Laura se encuentra en la lista' : 'Laura no se encuentra en la lista';
console.log(comprobarNombre);

// Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
// Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos saber cuántas letras hay en total entre todas las 
// palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.

let listaPalabras2 = ['sol', 'luna', 'estrella'];
let totalCaracteres = listaPalabras2.reduce((acum, palabra) => acum + palabra.length, 0);
let totalCaracteres2 = listaPalabras2.join('').length;
console.log(totalCaracteres);
console.log(totalCaracteres2);

// Ejercicio 10: Construye una frase a partir de una lista de palabras
// Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una frase completa concatenando cada palabra en orden, 
// separadas por espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.

let listaPalabras3 = ['Me', 'gusta', 'aprender', 'JavaScript'];
let frase = listaPalabras3.join(' ');
console.log(frase);

// Ejercicios Extra para seguir practicando:

// Encuentra los nombres más cortos y transforma su formato
// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. 
// Queremos realizar varias tareas con esta lista:
// Primero, filtra los nombres que tengan menos de 5 letras.
// Luego, transforma los nombres resultantes para que estén en mayúsculas.
// Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante 
// unida por comas.
// Al final, imprime la frase en la consola.

//1
let nombresPersonas = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];
let nombresMenos5Letras = nombresPersonas.filter((nombre) => nombre.length < 5);
console.log(`Los nombres de la lista de menos de cinco letras son: ${nombresMenos5Letras.join(', ')}`);
//2
let nombresEnMayuscula = nombresMenos5Letras.map((nombre) => nombre.toLocaleUpperCase());
console.log(`Los nombres de los de la lista en mayúscula son: ${nombresEnMayuscula.join(', ')}`);
//3
let nombresSeleccionados = console.log(`De la lista de nombres ${nombresPersonas.join(', ')}. Los nombres seleccionados son: ${nombresEnMayuscula.join(', ')}`);

// Calcula el total de ventas de productos seleccionados Supón que tienes una lista de productos con sus precios en formato de objeto:
// Queremos:
// Seleccionar los productos cuyo precio sea mayor o igual a 50.
// Obtener solo los nombres de esos productos.
// Calcular el precio total sumando los precios de los productos seleccionados.
// Imprime el total y los nombres de los productos seleccionados en la consola.

const productos = [
{ nombre: 'Laptop',     precio: 1000 },
{ nombre: 'Mouse',      precio: 25   },
{ nombre: 'Teclado',    precio: 50   },
{ nombre: 'Monitor',    precio: 200  },
{ nombre: 'Audífonos',  precio: 75   }
];

//1
let productosPrecioMayorIgualA50 = productos.filter(producto => producto.precio >= 50);
console.log(productosPrecioMayorIgualA50);

//2
let nombreProductosPrecioMayorIgualA50 = productosPrecioMayorIgualA50.map((producto) => producto.nombre);
console.log(`Los productos son: ${nombreProductosPrecioMayorIgualA50.join(', ')}`);

//3
let totalPrecioProductosSeleccionados = productosPrecioMayorIgualA50.reduce((acum, producto) => acum + producto.precio, 0 );
console.log(`El total del precio de los productos con valor mayor o igual a 50 es: ${totalPrecioProductosSeleccionados}`);

// Encuentra la película más corta y analiza los títulos largos 
// Supón que tienes una lista de películas con su duración en minutos.
// Queremos:
// Encontrar la película más corta en duración.
// De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
// Crear una lista de los títulos largos en minúsculas.
// Imprime en la consola:
// El título de la película más corta.
// La lista de títulos largos en minúsculas.

const peliculas = [
{ titulo: 'El Señor de los Anillos', duracion: 200 },
{ titulo: 'Inception',               duracion: 148 },
{ titulo: 'Matrix',                  duracion: 136 },
{ titulo: 'Toy Story',               duracion: 81  },
{ titulo: 'Coco',                    duracion: 105 }
];

//1
let duracionPelis = peliculas.map((pelicula) => pelicula.duracion);
console.log(duracionPelis)
let peliMasCorta = Math.min(...duracionPelis);
console.log(peliMasCorta);
let nombrePeliMasCorta = peliculas.find(pelicula => pelicula.duracion === peliMasCorta);
console.log(`La película con la duración más corta es ${nombrePeliMasCorta.titulo}`);

//2
let titulosPeliculas = peliculas.map(pelicula => pelicula.titulo);
console.log(titulosPeliculas);

let titulosLargos = titulosPeliculas.filter(titulo => titulo.length > 10);
console.log(`La película con más de 10 caracteres en minuscula es: ${titulosLargos.map(titulo => titulo.toLowerCase())}`);

 