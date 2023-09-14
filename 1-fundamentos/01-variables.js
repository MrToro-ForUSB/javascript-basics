// === Variables ===
// En programación, una variable es un contenedor (área de almacenamiento) para guardar datos. 
// Por ejemplo,

let num = 5;
// Aquí, num es una variable. Está almacenando 5.



var nombre = "Danielito";
console.log("Nombre: " + nombre); // Out: Nombre: Danielito
// Aquí reservamos un espacio en memoria para la variable "nombre" y se inicializa con la cadena de
// texto "Danielito":

// Después de haber sido inicializadas, la variables pueden ser reasignadas en cualquier
// momento de nuestro código.
nombre = "Frailejón";

// Nosotros podemos declarar una variable para reservar ese espacio en memoria sin necesidad de
// inicializarla (su valor por defecto será undefined):
let apellidos;

// Podremos inicializar esa variable en el momento que deseemos:
apellidos = "Hernesto Pérez";
// Una vez inicializamos la variable, el valor que toma pasa de "undefined" al valor que
// establecimos.



// En JavaScript tambien son muy utilizadas las constantes.
// Las constantes se declaran similar que las variables. 
const x = 5;
x = 10;  // Out: Error! constant cannot be changed.
console.log(x)
// Una constante no puede ser reasignada. Así que, si está seguro de que el valor de una
// variable no cambiará a lo largo del programa, se recomienda utilizar const.



// Aunque puedes nombrar las variables como quieras, es una buena práctica darles un nombre
// descriptivo. Si estás utilizando una variable para almacenar el número de manzanas, es mejor
// utilizar manzanas o númeroDeManzanas en lugar de x o n.

// En JavaScript, los nombres de las variables se escriben generalmente en camelCase si tiene
// varias palabras. Por ejemplo, firstName, annualSalary, etc.