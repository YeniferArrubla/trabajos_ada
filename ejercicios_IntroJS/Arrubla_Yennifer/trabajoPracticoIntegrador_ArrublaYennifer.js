// 1. Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
// id (número), título (string), autor (string), año (número), género (string), disponible (booleano).

let libros = [
  {
    id: 1,
    titulo: "Las Chicas de Alambre",
    autor: "Jon Boix",
    anio: 1999,
    genero: "Novela",
    disponible: true,
  },
  {
    id: 2,
    titulo: "Ensayo Sobre la Ceguera",
    autor: "José Saramago",
    anio: 1995,
    genero: "Novela",
    disponible: true,
  },
  {
    id: 3,
    titulo: "Aviador Santiago",
    autor: "Jairo Anibal Niño",
    anio: 1990,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 4,
    titulo: "Silence",
    autor: "Flor M. Salvador",
    anio: 2021,
    genero: "Ficción",
    disponible: true,
  },
  {
    id: 5,
    titulo: "Porque Él Me Ama",
    autor: "Elyse Fitzpatrick",
    anio: 2008,
    genero: "Literatura Cristiana",
    disponible: true,
  },
  {
    id: 6,
    titulo: "Haz Algo",
    autor: "Kevin Deyoung",
    anio: 2020,
    genero: "Literatura Cristiana",
    disponible: true,
  },
  {
    id: 7,
    titulo: "Crepúsculo",
    autor: "Stephanie Meyer",
    anio: 2005,
    genero: "Novela",
    disponible: true,
  },
  {
    id: 8,
    titulo: "Del Amor y Otros Demonios",
    autor: "Gabriel García Márquez",
    anio: 1994,
    genero: "Novela",
    disponible: true,
  },
  {
    id: 9,
    titulo: "Guerra de Palabras",
    autor: "Paul David Tripp",
    anio: 2017,
    genero: "Literatura Cristiana",
    disponible: true,
  },
  {
    id: 10,
    titulo: "El Progreso del Peregrino",
    autor: "John Bunyan",
    anio: 1678,
    genero: "Novela",
    disponible: true,
  },
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
// id (número), nombre (string), email (string), librosPrestados (array de ids de libros).

let usuarios = [
  {
    id: 1,
    nombre: "Isabel Fernández",
    email: "isa@email.com",
    librosPrestados: [],
  },
  {
    id: 2,
    nombre: "Juan Montoya",
    email: "juancho@email.com",
    librosPrestados: [],
  },
  {
    id: 3,
    nombre: "Sergio Martínez",
    email: "sergio@email.com",
    librosPrestados: [],
  },
  {
    id: 4,
    nombre: "Karol Paz",
    email: "karol@email.com",
    librosPrestados: [],
  },
  {
    id: 5,
    nombre: "Sara Molina",
    email: "sara@email.com",
    librosPrestados: [],
  },
];

// 2. Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero, disponible) que agregue un nuevo libro al array libros.

function agregarLibro({ id, titulo, autor, anio, genero, disponible }) {
  //los parámetros de la función son las propiedades del objeto libro
  let informaciónLibro = { id, titulo, autor, anio, genero, disponible }; //se crea una variable que contenga la información libro con sus
  // propiedades, como las propiedades y los parámetros a recibir tienen los mismos nombres se puede escribir una sola vez, en lugar de id: id
  libros.push(informaciónLibro); //se agrega el nuevo libro al array de libros
  return `
  Información del libro ingresado
  Id: ${informaciónLibro.id}
  Título: ${informaciónLibro.titulo}
  Autor: ${informaciónLibro.autor}
  Año publicación: ${informaciónLibro.anio}
  Género: ${informaciónLibro.genero}
  Disponible: ${informaciónLibro.disponible}`;
}
// console.log(
//   agregarLibro({
//     id: 11,
//     titulo: "María",
//     autor: "Jorge Isaacs",
//     anio: 1867,
//     genero: "Novela",
//     disponible: true,
//   })
// );
// console.log(libros);
//libro agregado al array libros para probar la función.

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de
// búsqueda lineal.

function buscarLibro(criterio, valor) {
  let resultadoBusquedaLibro = [];

  for (let libro of libros) {
    if (libro[criterio].toLowerCase() === valor.toLowerCase()) {
      //se crea un condicional que compare el array recorrido con los argumentos de la función. Para que el
      //criterio se pueda cambiar se agregan los [] con el criterio de busqueda dentro según el caso y se convierte en minúscula como validación
      resultadoBusquedaLibro.push(libro);
    }
  } //se cierra el bucle sin return ya que este corta el recorrido y se necesitan todos los resultados, en caso de que hayan varios.
  if (resultadoBusquedaLibro.length > 0) {
    //se crea otro condicional para que ver el resultado
    return resultadoBusquedaLibro
      .map(
        (resultado) => `La busqueda ha arrojado el libro: ${resultado.titulo}`
      )
      .join("\n");
  } else {
    return `La busqueda no ha arrojado resultados`;
  }
}
//console.log(buscarLibro("autor", "paul david tripp"));

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento
// burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

function ordenarLibros(criterio) {
  let librosOrdenados = [];
  if (criterio.toLowerCase() === "titulo" || criterio.toLocaleLowerCase() === "título") {
    //se crea un condicional que compare el criterio con la propiedad de cada libros del array Libros
    librosOrdenados = [...libros].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    //si la comparación es true, se clona el array original de libros para ordenarlo, se utiliza el método sort() con una callback donde
    // se indican los parametros a comparar, se usa .localeCompare() para que los ordene no importando los acentos, minúsculas o mayúsculas.
    return librosOrdenados.map((libro) => `${libro.titulo}`); //se da como resultado el array con los títulos de los libros ordenados alfabetica/.
  } else if (criterio.toLocaleLowerCase() === "año") {
    //si el criterio es el año, se usa el mismo método y como son números basta con el signo - para ordenarlos.
    librosOrdenados = [...libros].sort((a, b) => a.anio - b.anio);
    return librosOrdenados.map((libro) => `${libro.anio}, ${libro.titulo}`); //se da como resultado un array con el año y título del libro.
  }
};
//console.log(ordenarLibros('título'));
//console.log(ordenarLibros('año'));

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id) {
  for (const libro of libros) {
    if (libro.id === id) {
      //si al recorrer los libros el id es igual al ingresado
      let indice = libros.indexOf(libro); //se averigua el indice del libro
      let libroEliminado = libros.splice(indice, 1); //y se elimina con el método splice que dentro recibe el indice y la cantidad a eliminar
      return `Se ha eliminado el libro: ${libroEliminado[0].titulo}, del autor ${libroEliminado[0].autor}`;
    }
  }
  return `No se ha encontrado un libro con el id ${id}`;
}
//console.log(borrarLibro(15));
//console.log(libros);

// 3. Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

function registrarUsuario(nombre, email) {
  let informacionNuevoUsuario = {
    id: usuarios.length + 1, //como se recibe por parámetros solo en nombre e email, se agregan las demás propiedades del objeto (usuario) dentro de este
    nombre,
    email,
    librosPrestados: [],
  };
  usuarios.push(informacionNuevoUsuario); //se envía la información del nuevo usuario al array original usuarios
  return `El usuario ${informacionNuevoUsuario.nombre} ha sido registrado con el email ${informacionNuevoUsuario.email}`
};
//console.log(registrarUsuario("Lana Lang", "lana@email.com"));

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.

function mostrarTodosLosUsuarios() {
  let nombresUsuarios = [];
  for (const usuario of usuarios) {
    //se recorre el array y se envía la propiedad nombre de cada usuario al array nombreUsuarios para mostrarlos.
    nombresUsuarios.push(usuario.nombre);
  }
  return nombresUsuarios.join(", ");
}
//console.log(mostrarTodosLosUsuarios());

// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) {
  for (const usuario of usuarios) {
    //se recorre el array de usuarios, si el email del usuario es igual al email recibido como argumento,
    // se muestra mensaje que se ha encontrado sino se informa que no se ha encontrado.
    if (usuario.email.toLowerCase() === email) {
      return `Se ha encontrado el usuario: ${usuario.nombre}, email: ${usuario.email} `;
    }
  }
  return `No se ha encontrado usuarios con el email ${email}`;
}
//console.log(buscarUsuario("lana@email.com"));

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
  for (const usuario of usuarios) {
    //se recorre el array usuarios, si el nombre del usuario e email con iguales a los recibidos como argumento,
    //se averigua el indice del usuario y se elimina con el método .splice(), que recibe el indice y la cantidad a eliminar.
    if (usuario.nombre === nombre && usuario.email === email) {
      let indice = usuarios.indexOf(usuario);
      let usuarioEliminado = usuarios.splice(indice, 1)[0]; //se usa la notación [0], para acceder al único objeto que se guardó en el array usuarioEliminado
      return `Se ha eliminado el usuario: ${usuarioEliminado.nombre}, con email ${usuarioEliminado.email}`;
    }
  }
  return `No se han encontrado coincidencias para eliminar usuario ${nombre}, email ${email}`;
}
//console.log(borrarUsuario("Lana", "lana@email.com"));

// 4. Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros
// prestados del usuario.

function prestarLibro(idLibro, idUsuario) {
  let libroAPrestar = libros.find((libro) => libro.id === idLibro); //Con el método .find() se busca el libro con el id recibido como argumento
  if (!libroAPrestar) {
    //se usa un condicional, sino se encuentra el libro se retorna el mensaje
    return `No existe un libro con id ${idLibro}`;
  }
  if (!libroAPrestar.disponible) {
    //si el id del libro se encuentra, con un condicional se verifica si el libro está disponible, a través de la propiedad disponible del objeto de libro
    return `El libro ${libroAPrestar.titulo} no está disponible`;
  }
  let encontarUsuario = usuarios.find((usuario) => usuario.id === idUsuario); //si el libro está disponible, se busca al usuario que quiere prestar el libro
  if (!encontarUsuario) {
    //si no se encuentra el id del usuario, se retorna el mensaje
    return `No existe un usuario con id ${idUsuario}`;
  }
  libroAPrestar.disponible = false; //si el usuario sí se encuentra, se cambia el disponible del objeto libro a false, esto lo marca como no disponible
  encontarUsuario.librosPrestados.push(libroAPrestar); //y se envía el libro (objeto) al array librosPrestados el cual es una propiedad del objeto usuario

  return `El libro ${libroAPrestar.titulo} fue prestado a ${encontarUsuario.nombre}`; //si todo está bien se retorna el mensaje de confirmación
}
//pruebas de la función
// console.log(prestarLibro(5, 2));
// console.log(libros.find((l) => l.id === 5));
// console.log(usuarios.find((u) => u.id === 2));

// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros
// prestados del usuario.

function devolverLibro(idLibro, idUsuario) {
  let libroADevolver = libros.find((libro) => libro.id === idLibro); //se busca el libro
  if (!libroADevolver) {
    //sino se encuentra se devuelve el mensaje
    return `No existe un libro con id ${idLibro}`;
  }
  let usuario = usuarios.find((usuario) => usuario.id === idUsuario); //se busca al usuario con el id
  if (!usuario) {
    //si el usuario no existe se devuelve el mensaje
    return `No existe un usuario con id ${idUsuario}`;
  }
  let indiceLibro = usuario.librosPrestados.findIndex(
    (libro) => libro.id === idLibro
  ); //se busca el indice del libro en el array librosPrestados del usuario
  if (indiceLibro === -1) {
    //sino se encuentra, se retorna el mensaje
    return `El usuario ${usuario.nombre} no tiene prestado el libro "${libroADevolver.titulo}"`;
  }
  libroADevolver.disponible = true; //se cambia la propiedad disponible del libro a verdadera, el libro vuelve a estar disponible
  usuario.librosPrestados.splice(indiceLibro, 1); //y se saca el libro del array librosPrestados del usuario

  return `El libro "${libroADevolver.titulo}" fue devuelto por ${usuario.nombre}`; //se retorna el mensaje de confirmación
}
// console.log(devolverLibro(5, 2));
// console.log(libros.find((l) => l.id === 5));
// console.log(usuarios.find((u) => u.id === 2));

// 5. Reportes
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar
// un reporte con la siguiente información: Cantidad total de libros, Cantidad de libros prestados, Cantidad de libros por género, Libro más antiguo y más nuevo.

function generarReporteLibros() {
  let totalLibros = libros.length;
  //con la propiedad .length se devuelve la cantidad de elementos en.., en este caso del array libros, cada objeto es un libro
  let totalLibrosPrestados = libros.filter((libro) => !libro.disponible).length;
  //con el método .filter() se filtran los libros que no estan disponibles los cuales son los que estan prestados
  let generosDeLosLibros = libros.map((libro) => libro.genero);
  let librosPorGenero = {};
  for (const genero of generosDeLosLibros) {
    let cantidadLibrosPorGenero = libros.filter(
      (libro) => libro.genero === genero
    ).length;
    librosPorGenero[genero] = cantidadLibrosPorGenero;
  }
  let totalLibrosPorGenero = Object.entries(librosPorGenero)
    .map(([genero, cantidad]) => `${genero}: ${cantidad}`)
    .join(", ");
  //para conocer el total por genero, con el metodo .map() se traen los generos de cada libro quedan en un array, crea un objeto vacío, y se recorre el array de los generos,
  //se filtran los que tienen igual género y se conoce la cantidad con .length, se envía el genero y la cantidad al objeto vacío, para poderlos ver no como objeto
  //se usa el metodo Object.entries para que cree un array con arrays con cada genero y cantidad, luego como es un array se puede aplicar .map() y .join() para mostrarlos
  let libroMasAntiguo = libros.reduce((masAntiguo, libro) =>
    libro.anio < masAntiguo.anio ? libro : masAntiguo
  );
  let libroMasNuevo = libros.reduce((masNuevo, libro) =>
    libro.anio > masNuevo.anio ? libro : masNuevo
  );
  //para conocer el libro mas antiguo y mas nuevo se usa el metodo .reduce() el cual dentro del callback tiene un condicional dependiendo del dato a entregar
  return `
  Total de libros: ${totalLibros}
  Libros prestados: ${totalLibrosPrestados}
  Libros por género: ${totalLibrosPorGenero}
  Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.anio})
  Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.anio})
  `;
}
//console.log(generarReporteLibros());

// 6. Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una
// palabra (no títulos que contengan números ni otros caracteres).
// b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.

function librosConPalabrasEnTitulo() {
  let tituloDosMasPalabras = libros.filter(
    (libro) => libro.titulo.split(" ").length > 1
  );
  //se crea una variable en la cual se guardan los libros que se filtraron que en el titulo tienen más de una palabra, esto se hace con .split(),
  //que convierte el string en un array de palabras, y se condiciona a que la contidad sea mayor que uno
  let titulosFiltrados = tituloDosMasPalabras.map((libro) => libro.titulo);
  //se crea una variable que guarda el array de los titulos que se filtraron
  let titulosSoloLetras = titulosFiltrados.filter((titulo) =>
    /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(titulo)
  );
  //se crea la variable donde se guarda la verificación de que los titulos que se han filtrado solo contengan letras, no números, ni caracteres
  return titulosSoloLetras;
}
//console.log(librosConPalabrasEnTitulo());

// 7. Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// Promedio de años de publicación de los libros, Año de publicación más frecuente, Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas() {
  let sumaAnios = libros.reduce((suma, libro) => suma + libro.anio, 0);
  let promedioAñosPublicacion = Math.round(sumaAnios / libros.length);
  //para conocer el promedio de años de publicación se suman los años de publicación con .reduce() y se divide por la cantidad de elementos del
  //array libros, se redondea para que no traiga tantos decimales.
  let contadorAnios = {}; //se crea un objeto vacío,
  libros.forEach((libro) => {
    contadorAnios[libro.anio] = (contadorAnios[libro.anio] || 0) + 1;
  });
  //por cada libro cada clave - key- será un año, con el operador lógico OR se indica que si el valor exite se use sino se usa el 0
  let anioFrecuente = Object.entries(contadorAnios).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];
  // a[1] y b[1] son las cantidades, comparamos cuál es mayor, [0] al final es para devolver solo el año (clave)

  let anioMasAntiguo = Math.min(...libros.map((libro) => libro.anio));
  let anioMasNuevo = Math.max(...libros.map((libro) => libro.anio));
  let diferencia = anioMasNuevo - anioMasAntiguo;

  return `
  Promedio de años de publicación: ${promedioAñosPublicacion}
  Año de publicación más frecuente: ${anioFrecuente}
  Diferencia entre el más antiguo y el más nuevo: ${diferencia} años
  `;
}
//console.log(calcularEstadisticas());

// 8. Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas, Eliminar espacios en blanco al inicio y final de los nombres de autores, Formatear los emails de los
// usuarios a minúsculas.

function normalizarDatos() {
  //para hacer las conversiones se debe recorrer el array origial y asignarle a la propiedad el nuevo valor
  libros.forEach((libro) => {
    libro.titulo = libro.titulo.toLocaleUpperCase();
    libro.autor = libro.autor.trim();
  });
  usuarios.forEach((usuario) => {
    usuario.email = usuario.email.toLocaleLowerCase();
  });
  return "Los datos se han normalizado";
}
// console.log(normalizarDatos());
// console.log(libros);
// console.log(usuarios);

// 9. Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar
// la lógica.

function menuPrincipal() {
  let opcion;

  do {
    opcion = prompt(
      `Menú Principal
1. Agregar libro
2. Buscar libro
3. Ordenar libros
4. Borrar libro
5. Registrar usuario
6. Mostrar todos los usuarios
7. Buscar usuario
8. Borrar usuario
9. Prestar libro
10. Devolver libro
11. Generar reporte de libros
12. Libros con más de una palabra en el título
13. Calcular estadísticas
14. Normalizar datos
0. Salir

Ingrese una opción:`
    );

    switch (opcion) {
      case "1":
        let id = parseInt(prompt("Ingrese el id:"));
        let titulo = prompt("Ingrese el título:").trim();
        let autor = prompt("Ingrese el autor:").trim();
        let anio = parseInt(prompt("Ingrese el año de publicación:"));
        let genero = prompt("Ingrese el género:");
        let disponible = true;
        alert(agregarLibro({ id, titulo, autor, anio, genero, disponible }));
        break;

      case "2":
        let criterio = prompt("Buscar por titulo, o por autor, o por genero?").toLowerCase();
        let valor = prompt("Buscar a:").toLowerCase();
        alert(buscarLibro(criterio, valor));
        break;

      case "3":
        let criterioOrden = prompt("Ordenar por titulo o por año:").toLowerCase();
        alert(ordenarLibros(criterioOrden).join("\n"));
        break;

      case "4":
        let idLibroABorrar = parseInt(prompt("Ingrese id del libro a borrar:"));
        alert(borrarLibro(idLibroABorrar));
        break;

      case "5":
        let nombreUsuario = prompt("Ingrese nombre:").toLowerCase();
        let emailUsuario = prompt("Ingrese email:").toLowerCase();
        alert(registrarUsuario(nombreUsuario, emailUsuario));
        break;

      case "6":
        alert(mostrarTodosLosUsuarios());
        break;

      case "7":
        let emailBuscar = prompt("Ingrese email del usuario:");
        alert(buscarUsuario(emailBuscar));
        break;

      case "8":
        let nombreBorrar = prompt("Ingrese nombre del usuario:");
        let emailBorrar = prompt("Ingrese email del usuario:");
        alert(borrarUsuario(nombreBorrar, emailBorrar));
        break;

      case "9":
        let idLibroPrest = parseInt(prompt("Ingrese id del libro:"));
        let idUsuarioPrest = parseInt(prompt("Ingrese id del usuario:"));
        alert(prestarLibro(idLibroPrest, idUsuarioPrest));
        break;

      case "10":
        let idLibroDev = parseInt(prompt("Ingrese id del libro a devolver:"));
        let idUsuarioDev = parseInt(prompt("Ingrese id del usuario:"));
        alert(devolverLibro(idLibroDev, idUsuarioDev));
        break;

      case "11":
        alert(generarReporteLibros());
        break;

      case "12":
        alert(librosConPalabrasEnTitulo().join("\n"));
        break;

      case "13":
        alert(calcularEstadisticas());
        break;

      case "14":
        alert(normalizarDatos());
        break;

      case "0":
        alert("Saliendo del sistema...");
        break;

      default:
        alert("Opción no válida, ingrese el número de una de las opciones.");
    }
  } while (opcion !== "0");
}
menuPrincipal();