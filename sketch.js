// Variables para guardar información del clima
var weather;

// URLs base y parámetros para hacer las solicitudes a la API de OpenWeatherMap
var api = "https://api.openweathermap.org/data/2.5/weather?";
var lat = "lat=44.34";
var lon = "&lon=10.99";
var key = "&appid=c6cd1da1cbda63c234da764f27d3de93";
var units = "&units=metric";



// La función setup se ejecuta una vez al inicio
function setup() {
  // Crea un canvas de 400x400 pixeles
  createCanvas(400, 400);

  // Selecciona el botón con el ID "submit" y asigna el evento mousePressed a la función selectCity
  var button = select("#submit");
  button.mousePressed(selectCity);
  
}

// Función para solicitar información del clima basada en latitud y longitud
function weatherAsk(lat, lon){
  // Construye la URL completa con los parámetros de latitud, longitud, clave API y unidades
  var url = api + "lat=" + lat + "&lon=" + lon + "&appid=c6cd1da1cbda63c234da764f27d3de93" + units;
  // Solicita los datos en formato JSON y llama a la función gotData cuando se reciban
  loadJSON(url, gotData);
}

// Función llamada cuando se presiona el botón
function selectCity(){

  var apiCity = "https://api.openweathermap.org/geo/1.0/direct?";
  // Selecciona el valor ingresado en el input con ID "cityInput"
  var input = select("#cityInput"); 
  var city = input.value();
  var limit = "&limit=1";
  var keyCity = "&appid=c6cd1da1cbda63c234da764f27d3de93";

  // Construye la URL para obtener la latitud y longitud de la ciudad ingresada
  var urlCity = apiCity+"q="+city+limit+keyCity;

  // Solicita los datos de la ciudad
  loadJSON(urlCity, function(cityData) {
    // Si recibe datos de la ciudad, obtiene la latitud y longitud y luego llama a weatherAsk
    if (cityData && cityData.length > 0) {
      var latCity = cityData[0].lat;
      var lonCity = cityData[0].lon;
      weatherAsk(latCity, lonCity);
    }
  });
}


// Función que se ejecuta una vez que se reciben los datos del clima
function gotData(data){
  print(data) // Imprime los datos en la consola
  weather = data; // Asigna los datos a la variable weather
  }

function draw(){
  background(0); // Pone el fondo del canvas de color negro

  // Si hay datos en la variable weather
  if (weather){

     // Obtiene la temperatura y la humedad de los datos
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;

    // Dibuja dos elipses en el canvas basándose en la temperatura y humedad
    ellipse(50, 100, temp, temp); // El tamaño de la elipse es proporcional a la temperatura
    ellipse(200, 100, humidity, humidity);  // El tamaño de la elipse es proporcional a la humedad

  }
}

