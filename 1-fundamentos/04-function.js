// Funciones
// Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que
// realiza una tarea o calcula un valor.

// Para que un procedimiento califique como función, debe tomar alguna entrada y devolver
// una salida.

// En JavaScript existen dos tipos de funciones — funciones declarativas y funciones de expresión.

// Funciones declarativas:
// Una función declarativa establece el nombre de la funcion, unos procedimientos y son ejecutados
// cuando se llama la función.

// Declaramos la función "dameUnNumerito"
function dameUnNumerito() {
	// Esta función devuelve un 3
	return 3;
}

// Llamamos la funcion 3 y almacenamos el número en una variable:
var miNumerito = dameUnNumerito(); // Out: 3

// Funciones de expresión:
// Son funciones que pueden ser almacenadas en variables y ser llamadas como funciones.

// Asignamos la función de expresión a la variable "hazmeUnaSumita".
var hazmeUnaSumita = function (a, b) {
	// Llamar la función "hazmeUnaSumita" devuelve la suma entre sus parametros "a" y "b".
	return a + b;
};

var miSuma = hazmeUnaSumita(1, 1); // Out: 2

// Las funciones de expresión son una forma práctica de encapsular una funcion dentro de una variable y ser enviada a
// algún destino dentro del código.
