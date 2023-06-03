const searchInput = document.getElementById("search-input");
const weatherInfo = document.getElementById("contenedor");
const form = document.querySelector("form");
const API_KEY = "136a4aa891aaaaa1b922dfb385686304";

var usuario = document.getElementById("player");

// Eliminar el reproductor de video si existe
if (document.getElementById("player")) {
  usuario.remove();
}


/**
 * Evento que se dispara cuando se envía el formulario.
 * @param {Event} e - Evento de envío de formulario.
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /**
 * Elimina el contenido existente de los elementos, excepto el mapa.
 * @param {HTMLElement} elementsToPreserve - Elemento del mapa que se conservará.
 */
  const elementsToPreserve = document.getElementById("map");
  Array.from(weatherInfo.children).forEach((child) => {
    if (child !== elementsToPreserve) {
      child.remove();
    }
  });

    /**
   * Dato ingresado por el usuario.
   * @type {string}
   */
  const searchTerm = searchInput.value;

  
  // Realizar solicitud a la API de OpenWeatherMap
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${API_KEY}&lang=es`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        console.log(error);
      } else {

        /**
         * variables para obtener los datos del clima
         */
        const lat = data.coord.lat;
        const lng = data.coord.lon;
        const city = data.name;
        datosObtenidos = true;

        // clima obtenido
        const climaObtenido = data.weather[0].main;

        // Guardar los datos en el localStorage
        localStorage.setItem("clima", JSON.stringify(data));
        localStorage.setItem("ciudad", city);

        // Estructurar la card con los datos obtenidos
        estructuraCard(data);
        // Buscar el video correspondiente al clima obtenido
        buscarVideo(climaObtenido);
        // Inicializar el mapa con las coordenadas y ciudad obtenidas
        initMap(lat, lng, city);
      }
    });
});

/**
 * Función que se ejecuta cuando se ha cargado el contenido del DOM.
 * Consulta los datos guardados en el localStorage y realiza las acciones
 */
window.addEventListener("DOMContentLoaded", () => {
  // Obtener los datos guardados en el localStorage
  const climaGuardado = localStorage.getItem("clima");
  const ciudadGuardada = localStorage.getItem("ciudad");

  // consulta si hay datos guardados en el localStorage
  if (climaGuardado && ciudadGuardada) {
    /**
     * Convierte los datos del clima de formato JSON a objeto.
     * @type {object}
     */
    const clima = JSON.parse(climaGuardado);

    estructuraCard(clima);
    buscarVideo(clima.weather[0].main);
    datosObtenidos = true;
    let lat = clima.coord.lat;
    let lng = clima.coord.lon;





    // Esperar a que se cargue la biblioteca de Google Maps
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCnmH18Ljpswdc6KxaPaw8dEANzY52oIXc&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);





    // Llamar a la función initMap después de que se haya cargado la biblioteca de Google Maps
    script.addEventListener("load", () => {
      /**
       * Inicializa el mapa con las coordenadas y ciudad guardadas.
       * @param {number} lat - Latitud del lugar.
       * @param {number} lng - Longitud del lugar.
       * @param {string} ciudad - Nombre de la ciudad.
       */
      initMap(lat, lng, ciudadGuardada);
    });
  }
});
