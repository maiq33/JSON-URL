function setup() {
    loadJSON("https://api.wheretheiss.at/v1/satellites/25544", gotData);
  }

  function gotData(data){
    print(data);
  }
  
  function draw() {
    background(220);
  }