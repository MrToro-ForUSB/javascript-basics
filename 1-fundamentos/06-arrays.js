// ==> Arreglos
// Un arreglo es una colección de datos que se pueden ordenar y buscar.

var frutas = [];
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas); // Out: ["Manzana", "Platano", "Cereza", "Fresa"]
console.log(frutas.length);
// Length es una propiedad que nos permite saber cuantos elementos tiene el arreglo.



// ==> Acceso:
// Podemos acceder a un elemento de un arreglo con la siguiente sintaxis:
console.log(frutas[0]); // Out: "Manzana"



// ==> Métodos de manipulación de arreglos:

// .push();
// Agrega un elemento al final del arreglo.
var masFrutas = frutas.push("Uvas");
console.log(frutas);  // Out: ["Manzana", "Platano", "Cereza", "Fresa", "Uvas"]



// .pop();
// Elimina el último elemento del arreglo.
var utlimo = frutas.pop();
console.log(frutas); // Out: ["Manzana", "Platano", "Cereza", "Fresa"]



// unshift()
// Agrega un elemento al inicio del arreglo.
var nuevaLogitud = frutas.unshift("Uvas");
console.log(frutas); // Out: ["Uvas", "Manzana", "Platano", "Cereza", "Fresa"]



// shift()
// Elimina el primer elemento del arreglo.
var borrarFruta = frutas.shift();
console.log(frutas); // Out: ["Manzana", "Platano", "Cereza", "Fresa"]



// .indexOf();
// Busca el índice del elemento que se le pasa como parámetro.
var posicion = frutas.indexOf("Platano");
console.log(posicion); // Out: 1
