// Callback
// Los callbacks son funciones que se pasan como argumento a otras funciones.

function sum(num1, num2) {
	return num1 + num2;
}

function calculate(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(`Sum: ${calculate(2, 2, sum)}`);

// Otro ejemplo
function gretting(name) {
	console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, "Juan");
