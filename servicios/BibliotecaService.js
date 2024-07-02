const color = require('colors');

const miInventarioLibros = [
    "El Principito", 
    "Harry Potter", 
    "El Señor de los Anillos"
];

/**
 * La función comprobarDisponibilidad recibe un parametro de entrada
 * que es el nombre a buscar en el inventario y determina si está en el 
 * inventario o no.
 * En caso de que el valor que busquemos se encuentre retorna un "resolve"
 * En caso de que el valor que busquemos no se encuentre retorna "reject"
 * @param nombreLibro Es el valor que vamos a buscar en el inventario
 */
function comprobarDisponibilidad(nombreLibro) {
    let disponible = miInventarioLibros.includes(nombreLibro);
    return new Promise((resolve, reject) => {
        console.log(`se está comprobando si el libro ${nombreLibro} está disponible...`.yellow);
        if (disponible) {
            resolve(`El libro: ${nombreLibro} está disponible en el inventario!`.green);
        } else {
            reject(`Pedido rechazado - el libro: ${nombreLibro} no se encontró en el inventario!`.red);
        }
    });
}

/**
 * 
 * @param {*} callback 
 * @returns 
 */
function gestionarPrestamo(callback) {
    return new Promise((resolve, reject) => {
        if(callback) { resolve(`Se gestionó el préstamo correctamente.`.green); }
        //else { reject(`Se produjo un error, no se gestionó el préstamo.`.red); }
    });
}

/**
 * 
 * @param {*} libro 
 */
function realizarPedido(libro){
    comprobarDisponibilidad(libro).then(disponibilidad => {
        console.log(disponibilidad);
        return gestionarPrestamo(disponibilidad);
    }).then(prestamo => { 
        console.log(prestamo);
    }).catch(error => {
        console.log(error);
    });
}

//realizarPedido("El Principito");

module.exports = realizarPedido;