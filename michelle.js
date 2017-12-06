//Michelle wrote this code
//these functions are called to draw every aspect of the road and every aspect of the sky 
drawRoad();
drawSky();

//Michelle wrote this code
//this function draws all the road 
function drawRoad() {
  drawPavement();
  drawroadDivider();
}

//Michelle wrote this code
// draws the black pavement of the road 
function drawPavement() {
  penUp();
  penWidth(37);
  moveTo(0, 200);
  penDown();
  turnRight(90);
  moveForward(500);
}

//Michelle wrote this code
//this function draws the yellow line that divides the road into two lanes
function drawroadDivider() {
  penUp();
  penColor("yellow");
  penWidth(4);
  penDown();
  moveTo(0, 200);
  turnTo(0);
  turnLeft(90);
  moveForward(10);
}

//Michelle wrote this code
//this function draws all the clouds and colors the background to create the sky 
function drawSky() {
  skyblueBackground();
  drawallClouds();
}

//Michelle wrote this code
//this function colors part of the background skyblue 
function skyblueBackground() {
  penUp();
  penColor("skyblue");
  penWidth(193);
  moveTo(318, 90);
  penDown();
  moveForward(300);
}

//Michelle wrote this code
//this function draws all the clouds on the skyblue background
function drawallClouds() {
  for (var i = 0; i < 10; i++) {
    drawCloud(randomNumber(7, 11), randomNumber(12, 16));
  }
}

//Michelle wrote this code
//this function draws one cloud
//the cloud is created with four dots
//this function includes parameters for the first/last dots of the cloud and for the two dots located in between the first/last points 
//parameter ¨endpointsize¨ defines the radius size for the fisrts/last dots
//parameter ¨midpointsize¨ defines the radius size for the two dots located between the first/last dots
//the fist/last dots should have a smaller radius size than the two dots located in the middle
function drawCloud(endpointsize, midpointsize) {
  penUp();
  penRGB(239, 244, 255, 0.9);
  penWidth(6);
  moveTo(randomNumber(5, 286), randomNumber(32, 73));
  turnLeft(180);
  dot(endpointsize);
  positionDot();
  for (var i = 0; i < 2; i++) {
    dot(midpointsize);
    positionDot();
  }
  dot(endpointsize);
  positionDot();
}

//Michelle wrote this code
//this function positions each dot before they are drawn
function positionDot() {
  turnRight(45);
  move(14, 0);
}
