const weatherAPI = {
  baseURL: "https://api.openweathermap.org/data/2.5/weather?",
  geoURL: "https://api.openweathermap.org/geo/1.0/direct?",
  key: "c6cd1da1cbda63c234da764f27d3de93",
  units: "metric"
};

let weather;

function setup() {
  createCanvas(400, 400);
  const button = select("#submit");
  button.mousePressed(selectCity);
}

const weatherAsk = (lat, lon) => {
  const url = `${weatherAPI.baseURL}lat=${lat}&lon=${lon}&appid=${weatherAPI.key}&units=${weatherAPI.units}`;
  loadJSON(url, gotData);
}

const selectCity = () => {
  const input = select("#cityInput");
  const city = input.value();
  const urlCity = `${weatherAPI.geoURL}q=${city}&limit=1&appid=${weatherAPI.key}`;

  loadJSON(urlCity, cityData => {
    if (cityData && cityData.length > 0) {
      const latCity = cityData[0].lat;
      const lonCity = cityData[0].lon;
      weatherAsk(latCity, lonCity);
    }
  });
}

const gotData = (data) => {
  print(data);
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;
    ellipse(50, 100, temp, temp);
    ellipse(200, 100, humidity, humidity);
  }
}


