// ==> Objetos
// Un objeto es una colección de datos.
// Y una propiedad es una asociación de una key y valores.
var miAuto = {
	marca: "Toyota",
	modelo: "Corolla",
	annio: 2020,
	detallesDelAuto: function () {
		return `Auto ${this.modelo} ${this.annio}`;
	},
};

let anio = miAuto.annio;
let modelo = miAuto.modelo;
let detalles  = miAuto.detallesDelAuto();
console.log(detalles);


// ===> Ejercicio
// Crearás un objeto calculadora, el cual contiene funciones para sumar, restar, multiplicar y dividir
