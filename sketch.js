// URL de la API para obtener la ubicación de la ISS (Estación Espacial Internacional).
var url = "https://api.wheretheiss.at/v1/satellites/25544";

// Variables para almacenar las coordenadas X e Y de la ISS en el canvas.
let issX = 0;
let issY = 0;

// Función setup se ejecuta una vez cuando el programa comienza.
function setup() {
  // Crea un canvas de 600x400 píxeles.
  createCanvas(600, 400);
  
  // Configura una función para preguntar la ubicación de la ISS cada 1000ms (1 segundo).
  setInterval(askISS, 1000);
}

// Función que consulta la ubicación actual de la ISS usando la API.
function askISS() {
  loadJSON(url, gotData);
}

// Función callback para manejar la respuesta de la API.
function gotData(data) {
  // Imprime todos los datos y solo la latitud en la consola para depuración.
  print(data);
  print(data.latitude);

  // Extrae latitud y longitud de los datos.
  var lat = data.latitude;
  var long = data.longitude;

  // Mapea las coordenadas de longitud y latitud a coordenadas X e Y en el canvas.
  issX = map(long, -180, 180, 0, width);
  issY = map(lat, 90, -90, 0, height);
}

// Función draw se ejecuta en un bucle, una y otra vez.
function draw() {
  // Establece el color de fondo del canvas a un gris oscuro.
  background(51);

  // Dibuja una elipse en las coordenadas X e Y de la ISS.
  ellipse(issX, issY, 25, 25);
}


