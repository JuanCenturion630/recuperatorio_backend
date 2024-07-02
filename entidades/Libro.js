const color = require('colors');

class Libro {

    nombre;
    autor;
    editorial;
   
    constructor(nombre, autor, editorial) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
    }

    darDeAlta(nombreLibro){
        console.log(`El libro ${nombreLibro} fue dado de alta correctamente.`.green);
    }

    prestarLibro(lector) {
        const libro = {
            nombre: this.nombre,
            autor: this.autor,
            editorial: this.editorial
        }
        console.log(`El llbro ${libro.nombre} fue prestado a ${lector.nombre} ${lector.apellido}`.green, 
            '\n\nLibro:', libro, '\nLector:', lector);
    }

    asignarDetalles(genero, precio) {
        console.log("\nAsignando detalles...");
        setTimeout(() => {
            return console.log(`El libro ${this.nombre} es del género ${genero} con precio ${precio}.`.magenta);
        }, 4000);
    }
}

/* const lector = {
    nombre: "Juan",
    apellido: "Centurión"
}

const libro = new Libro("La Guerra de los Mundos","H. G. Wells", "Salamandra");
libro.prestarLibro(lector);
libro.asignarDetalles("ciencia ficción", 35000); */

module.exports = Libro;