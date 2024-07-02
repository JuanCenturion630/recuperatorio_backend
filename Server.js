const Libro = require('./entidades/Libro');
const realizarPedido = require('./servicios/BibliotecaService');

const libro = new Libro("Los Dragones del Edén","Carl Sagan","Salamandra");
console.log(libro);

libro.edicion=1;

const lector = {
    nombre: "José",
    apellido: "Fernández"
}
libro.prestarLibro(lector);

libro.asignarDetalles("divulgación científica",35000);

realizarPedido("El Principito 2: Electric Boogalo");