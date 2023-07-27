var weather;

function setup() {
  createCanvas(400, 400);
  loadJSON("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c6cd1da1cbda63c234da764f27d3de93", gotData);
}

function gotData(data){
  //print(data)
  weather = data;
  }

function draw(){
  background(0);
  if (weather){
    ellipse()

  }
}

