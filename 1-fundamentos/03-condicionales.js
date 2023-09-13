// ===== Condicionales ====
// Los condicionales son una forma de decidir que hacer dependiendo de una condición.

// ==> Condicional if: Con el if validamos que la condición sea verdadera. Si la condición es
// verdadera, se ejecuta el código.
var esUsuario = true;
if (esUsuario) {
	console.log("Tiene acceso al contenido");
}



// ==> Else: Una alternativa si la condición no es verdadera.
var esUsuario = false;
if (esUsuario) {
	console.log("Tiene acceso al contenido");
} else {
	console.log("Tienes que crear una cuenta para poder acceder al contenido");
}



// ==> Else if: Si la condición no es verdadera, se ejecuta otra condición.
let edad = 18;
let accion;

if (edad === 18) {
	accion = "Puede votar, será su 1ra votación";
} else if (edad > 18) {
	accion = "Puede votar";
} else {
	// call back
	accion = "Aun no puede votar";
}

console.log(accion); // Out: "Puede votar, será su 1ra votación"



// ==> Operadores ternarios: Son una forma de escribir una condición en una sola línea de código.
// condicion ? casoSiEsVerdadero : casoSiEsFalso;

// Por ejemplo, 
var frutitas = 10;
var resultado;

if (frutitas > 3) {
	resultado = "Tienes muchas frutitas";
} else {
	resultado = "Tienes pocas frutitas";
}



// Traducido a ternario:
var frutitas = 10;
var resultado = (frutitas > 3) ? "Tienes muchas frutitas" : "Tienes pocas frutitas";

console.log(resultado); // Out: "Sí, son un 1"



// ==> Ejercicio condicionales. Crea un condicional que compare dos números y diga
// quien de ellos es el mayor.
let numeroA = 10;
let numeroB = 12;

if (numeroA > numeroB) {
	console.log(`${numeroA} es mayor que ${numeroB}`);
} else if (numeroA < numeroB) {
	console.log(`${numeroB} es mayor que ${numeroA}`);
} else {
	console.log("Ambos numeros son igualitos");
}