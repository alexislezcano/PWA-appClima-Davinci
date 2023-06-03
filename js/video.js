const climas = [
    { Clear: "0pBuVT8wOB4" },
    { Clouds: "r4z2JPABFPc" },
    { Cloudy: "r4z2JPABFPc" },
    { Drizzle: "WAH-cuq4_Ik" },
    { Haze: "mFmxAEtooPE" },
    { Mist: "mFmxAEtooPE" },
    { Rain: "ynLpZGegiJE" },
    { Snow: "ynw_ePMrAhU" },
    { Thunderstorm: "sC3IZSdpTGQ"},
    { Tornado: "dIBVcAZEjqc"},
    { Squall: "jcdGFYaT-qM"},
    { Ash: "T4zOLJm5dXE"},
    { Dust: "EAvUgtcE21Y"},
    { Sand: "EAvUgtcE21Y"},
    { Fog: "mFmxAEtooPE"},
    { Smoke: "mFmxAEtooPE"},
  ];



//Busca y reproduce un video relacionado con el clima obtenido. 

function buscarVideo(climaObtenido){
      
      let videoId = null;
      let climaEncontrado = climas.find(clima => Object.keys(clima)[0] === climaObtenido);
      if (climaEncontrado) {
        videoId = Object.values(climaEncontrado)[0];
      } else {
        console.log("No se encontró el clima deseado.");
      }
    const contenedorIframe = document.querySelector(".contenedor-iframe");      

      const iframe = document.createElement("iframe");
      iframe.id = "player";
      iframe.width = "300";
      iframe.height = "400";
      iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;

      contenedorIframe.appendChild(iframe);

}