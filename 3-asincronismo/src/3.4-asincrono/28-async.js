// Función async
// Async es una función que se ejecuta asíncronamente.

// La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.

// 🔏 La estructura se compone por las palabras reservadas async y await:

// La palabra async antes de la función, hace que la función devuelva una promesa.
// La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar.

const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true ? setTimeout(() => resolve("Hola Mundo"), 2000) : reject(new Error("Error"));
	});
};

const anotherFn = async () => {
	const something = await fnAsync();
	console.log(something);
	console.log("Hola a todos!!");
};

console.log("--Before--");
anotherFn();
console.log("--After--");