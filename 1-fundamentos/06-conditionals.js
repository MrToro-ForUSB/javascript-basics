// Condicionales
// Los condicionales son una forma de decidir que hacer dependiendo de una condición.

// Condicional if
// Con el if validamos que la condición sea verdadera. Si la condición es verdadera, se ejecuta
// el código.
var esUsuario = true;
if (esUsuario) {
	console.log("Tiene acceso al contenido");
}

// Else: Una alternativa si la condición no es verdadera.
var esUsuario = false;
if (esUsuario) {
	console.log("Tiene acceso al contenido");
} else {
	console.log("Tienes que crear una cuenta para poder acceder al contenido");
}

// Ejemplo de cómo haríamos una validación de una edad.
var edad = 18;
var accion;

if (edad >= 18) {
	accion = "Puede votar";
} else {
	accion = "No puede votar";
}

console.log(accion); // Out: "Puede votar"

// Else if (else if): Si la condición no es verdadera, se ejecuta otra condición.
var edad = 18;
var accion;

if (edad === 18) {
	accion = "Puede votar, será su 1ra votación";
} else if (edad > 18) {
	accion = "Puede votar";
} else {
	// call back
	accion = "Aun no puede votar";
}

console.log(accion); // Out: "Puede votar, será su 1ra votación"

// Operadores ternarios
// Son una forma de escribir una condición en una sola línea de código.
condition ? true : false;

var numero = 1;
var resultado;

if (numero === 1) {
	resultado = "Sí son un 1";
} else {
	resultado = "No soy un 1";
}

// Traducido a ternario:
var numero = 1;
var resultado = numero === 1 ? "Sí son un 1" : "No soy un 1";

console.log(resultado); // Out: "Sí son un 1"
