// Que es el hoisting?
// El hoisting es una técnica de que usa JavaScript que le permite a sus variables y funciones
// se declaren antes de su uso.

console.log(nameOfDog); // Output: undefined
var nameOfDog = "Fido";

// ¿No hemos obtenido lo esperado?, como la declaración de variables se procesa antes de ejecutar
// cualquier código, declarar una variable en cualquier parte del código es igual a declararla al
// inicio del mismo. Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable
// se eleva y pasa a declararse al comienzo de su contexto, en este caso la función que la contiene.

// El ejemplo anterior se entiende implícitamente como:
var nameOfDog;
console.log(nameOfDog); // Output: undefined
nameOfDog = "Fido";