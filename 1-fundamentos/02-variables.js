// Variables
// Las palabras clave en JavaScript son palabras reservadas. Cuando usas la palabra
// clave "var", le estás diciendo a JavaScript que vas a declarar una variable.

// Se reserva un espacio en memoria para la variable "nombre" y se inicializa con la cadena de
// texto "Danielito":
var nombre = "Danielito";
console.log(`Nombre: ${nombre}`); // Out: Nombre: Danielito

// Después de haber sido inicializadas, la variables pueden ser reasignadas en cualquier
// momento de nuestro código.
nombre = "Frailejón";

// Nosotros podemos declarar una variable para reservar ese espacio en memoria sin necesidad de
// inicializarla (su valor por defecto será undefined):
var apellidos;

// Podremos inicializar esa variable en el momento que deseemos:
apellidos = "Hernesto Pérez";
// Una vez inicializamos la variable, el valor que toma pasa de "undefined" al valor que
// establecimos.

var a; // Declaración de la variable
var b = 'b'; // Declaración de la variable y asignación de un valor
b = 'bebé'; // Reasignación de un nuevo valor
var a = 'a'; // Redeclaración de la variable
