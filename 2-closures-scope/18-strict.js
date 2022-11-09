// Modo estrícto
// En JavaScript el modo estrícto es una característica que permite asegurar que las variables
// no se pueden redeclarar o reasignar.

"use strict";

pi = 3.14;
console.log(pi); // Output: reference error

function pi() {
  "use strict";
	return pi = 3.14;
}

console.log(pi()); // Output: 3.14
