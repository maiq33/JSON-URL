var weather;
var url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c6cd1da1cbda63c234da764f27d3de93&units=metric";

function setup() {
  createCanvas(400, 400);
  loadJSON( url, gotData);
}

function gotData(data){
  print(data)
  weather = data;
  }

function draw(){
  background(0);
  if (weather){

    var temp = weather.main.temp;
    var humidity = weather.main.humidity

    ellipse(50, 100, temp, temp);
    ellipse(200, 100, humidity, humidity);

  }
}

