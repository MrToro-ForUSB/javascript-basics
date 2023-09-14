// ==> Funciones
// Una función es un bloque de código que realiza una tarea específica.



// Crear una función consta de dos partes. Su declaración:
function luke() {
    console.log("Luke, yo soy tu padre...");
}

// Y su llamado:
luke();


// ==> Parámetros de función (entradas)
// Una función también puede declararse con parámetros. 
// Un parámetro es un valor que se pasa al declarar una función.
function saludar(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

saludar("Coquito");



// Podemos mandar cuantos parámetros deseemos.
function sumar(a, b) {
    console.log(a + b);
}

sumar(3, 4);
sumar(2, 9);



// ==> Retorno de una función (salidas)
// La sentencia return puede utilizarse para devolver el valor a una llamada de función.
// La sentencia return indica que la función ha finalizado. Cualquier código posterior a return no se ejecuta.
function multiplicar(a, b) {
    return a * b;
}

// Creamos las entradas de la función
let numero1 = 4;
let numero2 = 2;

// Llamamos la función y almacenamos el valor devuelto en una variable
let resultado = multiplicar(numero1, numero2);

// Mostramos el resultado
console.log(`${numero1} x ${numero2} = ${resultado}`);



// ====> Tipos de funciones

// ==> Funciones declarativas
// Una función declarativa establece el nombre de la funcion, unos procedimientos y son ejecutados
// cuando se llama la función.
function dameUnNumerito() {
	return 3;
}

let miNumerito = dameUnNumerito(); // Out: 3



// ==> Funciones de expresión:
// Son funciones que pueden ser almacenadas en variables y ser llamadas como funciones.
var hazmeUnaRestita = function (a, b) {
	return a - b;
};

var miResta = hazmeUnaRestita(1, 1); // Out: 0
console.log(miResta);


// Las funciones de expresión son una forma práctica de encapsular una funcion dentro de una variable y ser enviada a
// algún destino dentro del código.
