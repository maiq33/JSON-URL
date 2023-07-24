function setup() {
  createCanvas(1000, 1000);
  loadJSON("https://api.wheretheiss.at/v1/satellites/25544", gotData);
}

function gotData(data){
  background(0);
  for (let i = 0; i < data.velocity/100; i++) {
    fill(255);
    ellipse(random(width),random(height), 5, 5);
    
  }
}

