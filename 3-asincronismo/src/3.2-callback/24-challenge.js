// 📲 XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // instanciamos xmlhttprequest.
const API = "https://api.escuelajs.co/api/v1"; // API donde vamos a traer los datos.

function fetchData(urlApi, callback) {
	// función donde generamos la conexión, recibe la url de la api y un callback.
	let xhttp = new XMLHttpRequest(); // generamos una nueva instancia más corta en xhttp.
	xhttp.open("GET", urlApi, true); // abrimos una conexión con el método GET, urlApi y true para asincronismo.
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
	// llamamos la función con argumentos de url y func anónima.
	if (error1) return console.error(error1); // si se genera error retornamos error, info en data 1.
	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		// volvemos a llamar a la función.
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

// 📫 Métodos y propiedades:

// xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
// xmlhttp.readyState → Retorna el estado de la petición.
// xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
// xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
// xmlhttp.send() → Envía la petición.

// 📪 Existen 5 estados en un llamado XMLHttpRequest:

// 0 → Se ha inicializado.
// 1 → Loading (cargando).
// 2 → Se ha cargado.
// 3 → Procesamiento si existe alguna descarga.
// 4 → Completado.

// 📬 Características del protocolo http:

// Verbos: Los verbos indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor. Los Verbos http son:

// GET → Solicita un recurso.
// HEAD → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
// POST → Sirve para la creación de recursos en el servidor.
// PUT → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
// PATCH → Actualiza parcialmente un recurso.
// DELETE → Elimina un recurso.

// 📭 Los códigos de estados del servidor:

// El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.

// 1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
// 2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
// 3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
// 4xx → Indican errores del lado del cliente que hizo mal una solicitud.
// 5xx → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

// 📧 Los códigos más comunes a la hora de interactuar con una API son:

// 200 → OK → Indica que todo está correcto.
// 201 → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
// 204 → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
// 400 → Bad Request → Indica que algo está mal en la petición (no encontró algo).
// 401 → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
// 403 → Forbidden → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
// 404 → Not Found → Indica que no existe el recurso que se está intentando acceder.
// 500 → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.
