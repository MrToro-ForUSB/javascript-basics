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



// ==> Función constructora (constructor):
// Es una función que se ejecuta cuando se crea un nuevo objeto.
function auto(marca, modelo, annio) {
	// Creas una función con los parametros que va a recibir,
	this.marca = marca;
	// y utilizamos el "this" para asignar valores a las propiedades del objeto.
	this.modelo = modelo;
	this.annio = annio;
	this.detallesDelAuto = function () {
		return `Auto ${this.modelo} ${this.annio}`;
	};
}

var newAuto = new auto("Tesla", "Model 3", 2020);
console.log(newAuto); // Out: { marca: "Tesla", modelo: "Model 3", annio: 2020 }
