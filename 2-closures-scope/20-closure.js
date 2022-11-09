// Closures
// Las closures son funciones que se pueden llamar dentro de otra funcion.

function greeting() {
	let userName = "Óscar";

	function displayName() {
		return `Hola ${userName}`;
	}

	return displayName();
}

const g = greeting();
console.log(g); // Output: Hola Óscar

// Ejemplo moneyBox;
function moneyBox() {
	let total = 0;

	function count(coins) {
		total += coins;
    	console.log(`Total: $${total}`);
	}

	function reset() {
		total = 0;
    	console.log(`Total: $${total}`);
	}
  
  return { count, reset };
}

const { count, reset } = moneyBox();

count(10);
count(20);
count(20);
reset();