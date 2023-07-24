let angle = 0;
let issVelocity = 0;
const earthRadius = 50;
let stars = [];

function setup() {
  createCanvas(400, 400);
  loadJSON("https://api.wheretheiss.at/v1/satellites/25544", gotData);

    // Generate star positions
    for (let i = 0; i < 100; i++) {
      let x = random(-width / 2, width / 2);
      let y = random(-height / 2, height / 2);
      stars.push({x: x, y: y}); // Save the star positions in the stars array
    }
  
}

function gotData(data) {
  issVelocity = data.velocity / (60 * 100); // ISS Velocity divided by 60 to get per second and then by 100
  print(issVelocity);
}

function draw() {
  background(0);
  translate(width / 2, height / 2); // Move the origin to the center

  // Draw stars
  fill(255); // White color for stars
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, 2, 2);
  }

  // Draw the Earth
  fill(0, 0, 255); // Blue color for earth
  ellipse(0, 0, earthRadius * 2, earthRadius * 2);

  // Calculate the new angle based on time passed and the ISS velocity
  // frameCount is the number of frames that have been drawn by p5.js
  // Therefore, frameCount / 60 gives us the number of seconds passed
  angle = (frameCount / 60) * issVelocity;

  // Draw the ISS rotating around the Earth
  push(); // Save the current transformation settings
  rotate(angle); // Rotate the canvas
  fill(255, 0, 0); // Red color for the ISS
  ellipse(earthRadius * 3, 0, 10, 10); // Draw the ISS in an orbit 3x the Earth's radius away
  pop(); // Restore the transformation settings
}


