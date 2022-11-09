// Reasignación y redeclaración de variables
// Las variables en JavaScript pueden ser reasignadas y redeclaradas.

// Declaración de variables:
var fristName; // declarar / undefined

// Asignación de variables:
fristName = "Jane"; // asignar
console.log(fristName); // Output: Jane

// Declarar y asignar variables:
var lastName = "Doe"; // declarar y asignar

// Reasignación de variables:
lastName = "Ana"; // reasignar
console.log(lastName); // Output: Ana

// Redeclaración de variables:
var secondName = "Doe"; // declarar
var secondName = "Ana"; // redeclarar
console.log(secondName); // Output: Ana

// Variables let:
// Las variables let no pueden ser redeclaradas.
let fruit = "apple"; // declarar y asignar
fruit = "kiwi"; // reasignar
console.log(fruit); // Output: kiwi

let fruit = "banana"; // redeclarar
console.log(fruit); // Output: banana


// Variables const:
// Las variables const no pueden ser redeclaradas ni reasignadas.
const animal = "dog"; // declarar y asignar
animal = "cat"; // reasignar
const animal = "cat"; // redeclarar
console.log(animal); // Output: reference error

// Las variables const pueden ser manipuladas
const vehicles = []; // declarar y asignar
vehicles.push("🚗"); // asignar
console.log(vehicles); // Output: [ '🚗' ]

vehicles.pop(); // eliminar
console.log(vehicles); // Output: []