// 馃摬 XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // instanciamos xmlhttprequest.
const API = "https://api.escuelajs.co/api/v1"; // API donde vamos a traer los datos.

function fetchData(urlApi, callback) {
	// funci贸n donde generamos la conexi贸n, recibe la url de la api y un callback.
	let xhttp = new XMLHttpRequest(); // generamos una nueva instancia m谩s corta en xhttp.
	xhttp.open("GET", urlApi, true); // abrimos una conexi贸n con el m茅todo GET, urlApi y true para asincronismo.
	xhttp.onreadystatechange = function () {
		// cuando este cambio suceda, escuchamos el estado:
		if (xhttp.readyState === 4) {
			// comparamos el estado que sea igual a 4 (completado).
			if (xhttp.status === 200) {
				// comparamos el estatus sea igual a 200 (solicitud correcta).
				callback(null, JSON.parse(xhttp.responseText)); // retornamos callback null en error. Parse de datos.
			} else {
				// si lo anterior no ocurre:
				const error = new Error("Error" + urlApi); // generamos un nuevo error + urlApi.
				return callback(error, null); // retornamos callback con el error y null(para los datos).
			}
		}
	};
	xhttp.send(); // Enviamos el llamado o solitud.
}

// en el ejemplo se hacen varios llamados a modo de ejemplo:
fetchData(`${API}/products`, function (error1, data1) {
	// llamamos la funci贸n con argumentos de url y func an贸nima.
	if (error1) return console.error(error1); // si se genera error retornamos error, info en data 1.
	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		// volvemos a llamar a la funci贸n.
		if (error2) return console.error(error2); // retornamos error2 (si se produce) e info guardada en data2.
		fetchData(
			`${API}/categories/${data2.category.id}`,
			function (error3, data3) {
				// 3er llamado a la func.
				if (error3) return console.error(error3); // retorn. error3 (si se produce). Info guardada en data3.
				console.log(data1[0]); // mostramos los datos de la primer llamada (estudiar la api).
				console.log(data2.title); // mostramos los datos de la 2da llamada.
				console.log(data3.name); // 3er llamada.
			}
		);
	});
});

// 馃摣 M茅todos y propiedades:

// xmlhttp.open() 鈫? Prepara la petici贸n para ser enviada tomando tres par谩metros: pr贸tocolo, url, as铆ncrono (true).
// xmlhttp.readyState 鈫? Retorna el estado de la petici贸n.
// xmlhttp.onreadystatechange 鈫? Un eventHandler que es llamado cuando la propiedad readyState cambia.
// xmlhttp.status 鈫? Retorna el estado de la respuesta de la petici贸n. (200,400,500)
// xmlhttp.send() 鈫? Env铆a la petici贸n.

// 馃摢 Existen 5 estados en un llamado XMLHttpRequest:

// 0 鈫? Se ha inicializado.
// 1 鈫? Loading (cargando).
// 2 鈫? Se ha cargado.
// 3 鈫? Procesamiento si existe alguna descarga.
// 4 鈫? Completado.

// 馃摤 Caracter铆sticas del protocolo http:

// Verbos: Los verbos indican acciones que est谩n asociadas a peticiones y recursos, es decir, sirven para la manipulaci贸n de recursos cliente/servidor. Los Verbos http son:

// GET 鈫? Solicita un recurso.
// HEAD 鈫? Solicita un recurso pero sin retornar informaci贸n, la estructura de esta petici贸n es igual que get tanto en su headers como estatus. Es 煤til cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
// POST 鈫? Sirve para la creaci贸n de recursos en el servidor.
// PUT 鈫? Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga 煤til de la petici贸n.
// PATCH 鈫? Actualiza parcialmente un recurso.
// DELETE 鈫? Elimina un recurso.

// 馃摥 Los c贸digos de estados del servidor:

// El c贸digo de estado (status codes) sirve para describir el estado de la petici贸n hecha al servidor.

// 1xx 鈫? Indican que la petici贸n fue recibida por el servidor, pero est谩 siendo procesada por el servidor.
// 2xx 鈫? Indican que la petici贸n fue recibida, aceptada y procesada correctamente.
// 3xx 鈫? Indican que hay que tomar acciones adicionales para completar la solicitud.
// 4xx 鈫? Indican errores del lado del cliente que hizo mal una solicitud.
// 5xx 鈫? Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecuci贸n en el servidor.

// 馃摟 Los c贸digos m谩s comunes a la hora de interactuar con una API son:

// 200 鈫? OK 鈫? Indica que todo est谩 correcto.
// 201 鈫? Created 鈫? Todo est谩 correcto cuando se hizo una solicitud POST, el recurso se cre贸 y se guard贸 correctamente.
// 204 鈫? No Content 鈫? Indica que la solicitud se complet贸 correctamente pero no devolvi贸 informaci贸n. Este es com煤n cuando se hacen peticiones con el verbo DELETE.
// 400 鈫? Bad Request 鈫? Indica que algo est谩 mal en la petici贸n (no encontr贸 algo).
// 401 鈫? Unauthorized 鈫? Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
// 403 鈫? Forbidden 鈫? Indica que no tenemos acceso a ese recurso aunque se est茅 autenticado.
// 404 鈫? Not Found 鈫? Indica que no existe el recurso que se est谩 intentando acceder.
// 500 鈫? Internal Server Error 鈫? Indica que algo fall贸, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.
