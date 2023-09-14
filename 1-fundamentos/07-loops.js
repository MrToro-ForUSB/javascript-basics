// ==> Ciclos
// los loops son una forma de repetir una accion una cantidad de veces determinada.
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
	console.log(`Hola, ${estudiante}`);
}



// ==> Ciclo for:
// Ejecuta las sentencias el número de veces que se le indique.
for (var i = 0; i < estudiantes.length; i++) {
	saludarEstudiante(estudiantes[i]);
}



// ==> Ciclo for each:
// Ejecuta las sentencias por cada elemento del arreglo.
for (var estudiante of estudiantes) {
	saludarEstudiante(estudiante);
}



// ==> Ciclo while
// Ejecuta las sentencias desde que la condición sea verdadera.
while (estudiantes.length > 0) {
	// Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
	var estudiante = estudiantes.shift(); // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
	saludarEstudiante(estudiante);
}
