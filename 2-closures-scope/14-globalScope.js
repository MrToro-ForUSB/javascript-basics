// El scope
// Es el contexto actual de la ejecución — El contexto en el que las variables y las expresiones
// son "visibles" o pueden ser referenciados.

// Una función sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito,
// de modo que no se puede acceder a una variable definida exclusivamente dentro de la función
// desde fuera de la función o dentro de otras funciones.

// Existen diferentes tipos de scope:
// Scope global, Scope local, Scope de bloque, Scope de función, Scope de objeto, Scope de método

// Global scope:
// Se define como scope global cuando una variable se encuentra declarada en el ámbito global,
// fuera de una funcuón o un bloque. A estos también se les conoce como variables globales.

// Puedes acceder a estas variables desde cualquier parte del código.

var fruit = 'apple'; // Global

function bestFruit() {
	console.log(fruit); 
}

bestFruit(); // Out: apple
console.log(fruit); // Out: apple

// Podrá parecer una ventaja, pero es una mala práctica declarar variables en ámbitos globales.
// Una de las razones es la posibilidad de crear dos variables globales del mismo nombre sin
// notarlo.