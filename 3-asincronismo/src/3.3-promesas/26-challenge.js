// npm i node-fetch

// Fetch:
// Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas. La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
	return fetch(urlApi);
}

fetchData(`${API}/products`)
	.then((response) => response.json())
	.then((products) => {
		console.log(products);
		return fetchData(`${API}/products/${products[0].id}`);
	})
	.then((response) => response.json())
	.then((product) => {
		console.log(product);
		return fetchData(`${API}/categories/${product.category.id}`);
	})
	.then((response) => response.json())
	.then((category) => {
		console.log(category);
	})
  .catch((error) => console.error(error));
