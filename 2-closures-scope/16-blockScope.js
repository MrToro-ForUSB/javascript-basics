// Block Scope:
// Las variables definidas dentro de un bloque de código, no pueden ser accedidas desde afuera
// del mismo.

function fruits() {
	if (true) {
		var fruit1 = "apple"; // function scope
		let fruit2 = "banana"; // block scope
		const fruit3 = "orange"; // block scope
	}

	console.log(fruit1); // Output: apple
	console.log(fruit2); // Output: reference error
	console.log(fruit3); // Output: reference error
}

fruits();
