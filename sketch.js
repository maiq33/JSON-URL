var url = "https://api.wheretheiss.at/v1/satellites/25544"

function setup() {
  //cambio
  createCanvas(600, 400);
  loadJSON(url, gotData,);
}

function gotData(data){
  print(data);
  print(data.latitude);
}

function draw(){
  background(51);

  
}

