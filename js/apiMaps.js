
/**
 * Variable que indica si los datos han sido obtenidos.
 * @type {boolean}
 */
let datosObtenidos = false;


/**
 * Inicializa el mapa de Google con la ubicación proporcionada.
 * @param {number} lat - Latitud de la ubicación.
 * @param {number} lng - Longitud de la ubicación.
 * @param {string} city - Nombre de la ciudad.
 */
function initMap(lat, lng, city) {
  if (!datosObtenidos) {
    return;
  }
  const location = { lat, lng };
  console.log(location);
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 14,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  const infoWindow = new google.maps.InfoWindow({
    content: city,
  });
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });


}







   



