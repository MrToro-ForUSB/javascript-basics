// Coerción
// Coerción es la capacidad de convertir un valor de un tipo a otro.

// Coerción implicita
// Es el proceso por el cual se predice el tipo de dato de un valor.
var a = 20;
var b = a + ""; // "20"
// En este caso, el valor de a es un número, pero el valor de b es un string.

// Otro ejemplo:
var a = [1, 2];
var b = [3, 4];

var c = a + b; // Resultado: "1,23,4"
// En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings,
// y luego se juntan.

// Coerción explicita
// Es el proceso por el cual convertiomos voluntariamente un valor de un tipo a otro.
var c = String(a); // De número a string.
var d = Number(c); // De string a número.
