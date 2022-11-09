// Scope de función:
// Las funciones tienen un scope propio, es decir, un ámbito de ejecución.

var userName = "Daniel";

function greating() {
	console.log(`Hola ${userName}`); // Out: Hola Daniel

	if (userName === "Danielito") {
		console.log('¡Hola Danielitoooo!'); // Out: ¡Hola Danielitoooo!
	}
}

greating();
console.log(userName); // Out: ReferenceError