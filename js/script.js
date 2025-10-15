let ipDispositivo = "";

document.getElementById("conectar").addEventListener("click", () => {
  ipDispositivo = document.getElementById("ip").value.trim();
  if (ipDispositivo) {
    document.getElementById("estado").textContent = `Conectado a ${ipDispositivo}`;
    actualizarDatos();
  } else {
    alert("Por favor ingrese la dirección IP del dispositivo.");
  }
});

document.getElementById("actualizar").addEventListener("click", actualizarDatos);

function actualizarDatos() {
  if (!ipDispositivo) {
    alert("Primero debe conectar una IP válida.");
    return;
  }

  fetch(`http://${ipDispositivo}/datos`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("temp").textContent = data.temperatura + " °C";
      document.getElementById("humedad").textContent = data.humedad + " %";
      document.getElementById("luz").textContent = data.luz + " Lux";
      document.getElementById("agua").textContent = data.agua + " %";
    })
    .catch(err => {
      console.error(err);
      document.getElementById("estado").textContent = "❌ Error al conectar con la maceta.";
    });
}
