/**
 * Crea la estructura de la tarjeta de clima y la inserta en el contenedor.
 * @param {object} data - Los datos del clima.
 */
function estructuraCard(data) {
  const iframe = document.getElementById("player");
  const contenedorCard = document.querySelector(".contenedor-card");


  
  const weatherInfo = document.createElement("div");
  weatherInfo.classList.add("col-12" ,"col-md-5", "cards-columnas", "d-flex", "flex-wrap", "justify-content-around", "gap-md-0");
  
  
  const contenidoPrincipal = document.createElement("div");
  contenidoPrincipal.classList.add("col-6", "contenido-principal");
  
  const pais = document.createElement("p");
  pais.textContent = data.sys.country;
  
  const ciudad = document.createElement("h2");
  ciudad.textContent = data.name;
  
  const temperatura = document.createElement("h3");
  temperatura.textContent = data.main.temp + "°C";
  
  contenidoPrincipal.appendChild(pais);
  contenidoPrincipal.appendChild(ciudad);
  contenidoPrincipal.appendChild(temperatura);
  
  const contenedorIcono = document.createElement("div");
  contenedorIcono.classList.add("col-6", "d-flex", "ps-0", "align-items-center");
  
  const iconoClima = document.createElement("div");
  iconoClima.classList.add("icono-clima", "text-center");
  
  const icono = document.createElement("img");
  icono.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
  const descripcionIcono = document.createElement("p");
  descripcionIcono.classList.add("descripcion-icono", "pb-lg-3");
  descripcionIcono.textContent = data.weather[0].description;
  
  iconoClima.appendChild(icono);
  contenedorIcono.appendChild(iconoClima);
  contenedorIcono.appendChild(descripcionIcono);
  
  const contenedorTemperatura = document.createElement("div");
  contenedorTemperatura.classList.add("col-6", "d-flex", "gap-3", "text-center", "justify-content-center");
  
  const contenidoMax = document.createElement("div");
  const max = document.createElement("p");
  max.textContent = "Max";
  const temMax = document.createElement("p");
  temMax.textContent = data.main.temp_max;;
  
  const contenidoMin = document.createElement("div");
  const min = document.createElement("p");
  min.textContent = "Min";
  const temMin = document.createElement("p");
  temMin.textContent = data.main.temp_min;;
  
  contenidoMax.appendChild(max);
  contenidoMax.appendChild(temMax);
  contenidoMin.appendChild(min);
  contenidoMin.appendChild(temMin);
  
  contenedorTemperatura.appendChild(contenidoMax);
  contenedorTemperatura.appendChild(contenidoMin);
  
  const contenedorMasInfo = document.createElement("div");
  contenedorMasInfo.classList.add("col-6", "d-flex", "mas-info");
  
  const contenidoInfo = document.createElement("div");
  const viento = document.createElement("p");
  viento.textContent = "Viento: a 13 km/h";
  const humedad = document.createElement("p");
  humedad.textContent = "Humedad: 92%";
  const sensacion = document.createElement("p");
  sensacion.textContent = "Sensación T. 2°";
  const presion = document.createElement("p");
  presion.textContent = "Presión 993 hPa";
  
  contenidoInfo.appendChild(viento);
  contenidoInfo.appendChild(humedad);
  contenidoInfo.appendChild(sensacion);
  contenidoInfo.appendChild(presion);
  
  contenedorMasInfo.appendChild(contenidoInfo);
  
  weatherInfo.appendChild(contenidoPrincipal);
  weatherInfo.appendChild(contenedorIcono);
  weatherInfo.appendChild(contenedorTemperatura);
  weatherInfo.appendChild(contenedorMasInfo);
  
  const contenedorIframe = document.createElement("div");
  contenedorIframe.classList.add("col-12", "p-0", "col-md-7", "contenedor-iframe");



  const mapDiv = document.getElementById("map");
  mapDiv.classList.add("col-md-12", "mt-md-3");
  mapDiv.style.height = "400px";

contenedorCard.insertBefore(weatherInfo, mapDiv);
contenedorCard.insertBefore(contenedorIframe, mapDiv);
 
}











