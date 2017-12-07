//Michelle wrote this code
drawRoad();
drawSky();

//Michelle wrote this code
function drawRoad() {
  drawPavement();
  drawroadDivider();
}

//Michelle wrote this code
function drawPavement() {
  penUp();
  penWidth(37);
//turtle is positioned in order to draw a pavement that extends from one end to another
  moveTo(0, 200);
  penDown();
  turnRight(90);
  moveForward(500);
}

//Michelle wrote this code
function drawroadDivider() {
  penUp();
  penColor("yellow");
  penWidth(4);
  penDown();
//turtle is positioned to draw a straight line
  moveTo(0, 200);
  turnTo(0);
  turnLeft(90);
  moveForward(10);
}

//Michelle wrote this code
function drawSky() {
  skyblueBackground();
  drawallClouds();
}

//Michelle wrote this code
function skyblueBackground() {
  penUp();
  penColor("skyblue");
//width of pen is increased so all the section of the sky is colored skyblue
  penWidth(193);
//turtle is aligned in a specific position in order to draw a straight line from one end of the screen to the other end
  moveTo(318, 90);
  penDown();
  moveForward(300);
}

//Michelle wrote this code
//this function draws all the clouds on the skyblue background
function drawallClouds() {
  for (var i = 0; i < 10; i++) {
    //the value ranges inputed in the two parameters below, determine the size of the endpoints and midpoints of the cloud
    //the radius of the two endpoints should always be smaller than the radius of the two midpoints
    drawCloud(randomNumber(7, 11), randomNumber(12, 16));
  }
}

//Michelle wrote this code
//the cloud is created with four dots
//a cloud contains two endpoints and two midpoints
function drawCloud(endpointsize, midpointsize) {
  penUp();
  penRGB(239, 244, 255, 0.9);
  penWidth(6);
//moves the turtle to a random locatiom in order to begin drawing a cloud
  moveTo(randomNumber(5, 286), randomNumber(32, 73));
  turnLeft(180);
  dot(endpointsize);
//parameter ¨endpointsize¨ defines the radius size for the endpoints
  positionDot();
  drawCloudMiddle(midpointsize);
//parameter ¨midpointsize¨ defines the radius size for the two dots midpoints
  dot(endpointsize);
  positionDot();
}

//Michelle wrote this code
function drawCloudMiddle(midpointsize){
  for (var i = 0; i < 2; i++) {
    dot(midpointsize);
    positionDot();
  }
}

//Michelle wrote this code
//this function positions each dot before they are drawn
function positionDot() {
  turnRight(45);
  move(14, 0);
}
