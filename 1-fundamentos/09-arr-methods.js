var articulos = [
	{ nombre: "Bici", costo: 3000 },
	{ nombre: "TV", costo: 2500 },
	{ nombre: "Libro", costo: 320 },
	{ nombre: "Celular", costo: 10000 },
	{ nombre: "laptop", costo: 20000 },
	{ nombre: "teclado", costo: 500 },
	{ nombre: "audifonos", costo: 1700 },
];

// Metodos para recorrer arreglos

// Metodo Filter:
// Recibe una funcion que valida cada elemento del arreglo con una condición como filtro.

var articulosFiltrados = articulos.filter(function (articulo) {
	return articulo.costo <= 500;
});

console.log(articulosFiltrados); // Out: [{ nombre: "Libro", costo: 320 }, { nombre: "teclado", costo: 500 }]

// Metodo Map:
// Recibe una funcion que recibe un elemento del arreglo y devuelve un nuevo elemento.

var nombreArticulos = articulos.map(function (articulo) {
	return articulo.nombre;
});

console.log(nombreArticulos); // Out: ["Bici", "TV", "Libro", "Celular", "laptop", "teclado", "audifonos"]

// Metodo Find:
// Recibe una funcion que valida cada elemento del arreglo con una condición.

var encuentraArticulos = articulos.find(function (articulo) {
	return articulo.nombre === "laptop";
});

console.log(encuentraArticulos); // Out: { nombre: "laptop", costo: 20000 }

// Metodo forEach
// Itera cada uno de los elementos del arreglo y ejecuta la funcion para cada uno.

articulos.forEach(function (articulo) {
	console.log(articulo.nombre);
});

// Metodo Some
// Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la
// validación.

var articulosBaratos = articulos.some(function (articulo) {
	return articulo.costo <= 700;
});

console.log(articulosBaratos); // Out: true

// Metodo Every
// Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y
// al final nos regresa un true o un false.

var articulosBaratos = articulos.every(function (articulo) {
	return articulo.costo <= 700;
});

console.log(articulosBaratos); // Out: true

// Metodo Reduce
// Este método corre una función en cada elemento del array, para comenzar a sumar los costos de
// cada elemento.

var costoTotal = articulos.reduce(function (totalActual, articulo) {
	return articulo.costo + totalActual;
}, 0);
// El 0 es el valor inicial de la suma.

console.log(costoTotal); // Out: 24500

// Metodo Includes
// Este método valida si el elemento que se le pasa como parámetro está en el arreglo

var numeros = [1, 2, 3, 4, 5, 6];
var incluyeNumero = numeros.includes(2);
console.log(incluyeNumero); // Out: true
