penUp();
moveTo(10, 200);
penDown();
drawHouse();
drawAllHouses();
function drawAllHouses() {
  //makes three houses in a row vertically
  for (var i = 0; i < 4; i++) {
    penUp();
    move(80, 0);
    penDown();
    //sets random colors to outline house a different color
    drawHouse(randomNumber(0, 250), randomNumber(0, 250), randomNumber(0, 250));
  }
}
//draws one house
function drawHouse(red, green, blue) {
  drawStructure();
  drawRoof();
  drawDoor();
  drawWindowLeft();
  drawWindowRight();
  drawChimney(red, green, blue);
  turnTo(0);
}
//draws bottom part of the house
function drawStructure() {
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
}
//draws roof
function drawRoof() {
  //brown color
  penRGB(139, 69, 14, 1);
  penWidth(8);
  //the roof does not look symmetrical, I need to play around with the angles
  moveForward(50);
  turnRight(40);
  moveForward(50);
  turnRight(115);
  moveForward(40);
}
//draws curved door
function drawDoor(n) {
  //grey color
  penRGB(170, 170, 170, 1);
  penWidth(4);
  //starts where it ended after it drew the roof, so moves to where the door where will be located
  turnRight(24);
  moveForward(50);
  turnRight(90);
  moveForward(20);
  turnRight(90);
  //the curve on the door
  moveForward(15);
  arcLeft(180, 5);
  moveForward(15);
}
//draws window on the left side of the house
function drawWindowLeft() {
  penColor("black");
  penWidth(3);
  turnRight(90);
  //starts where it ended after it drew the door, so moves to where the left window will be located on the house
  moveForward(20);
  turnRight(90);
  moveForward(40);
  turnRight(90);
  //leaves space so akward line is avoided, making it seem like it is not connected to the side of the house by a line
  penUp();
  moveForward(5);
  penDown();
  //draws small window (square)
  moveForward(15);
  turnRight(90);
  moveForward(15);
  turnRight(90);
  moveForward(15);
  turnRight(90);
  moveForward(15);
  turnRight(90);
  //draws cross
  drawLeftWindowCross();
}

//draws window on the right side of the house
function drawWindowRight() {
  //starts where it ended after it drew the left window, so moves to where the right window will be located on the house
  moveForward(15);
  turnRight(90);
  moveForward(50);
  turnRight(90);
  moveForward(7);
  turnRight(90);
  //leaves space so akward line is avoided, making it seem like it is not connected to the side of the house by a line
  penUp();
  moveForward(5);
  penDown();
  //draws small window (square)
  drawRightWindoSquare();
  //draws cross
  drawRightWindowCross();
}
//creates small square as winodw on right side of the house
function drawRightWindoSquare() {
  moveForward(15);
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
}
//draws chimney on top of left side of roof
function drawChimney(red, green, blue) {
  //brown
  penRGB(139, 69, 14, 1);
  //starts where it ended after it drew the right window, so moves to where the chimney will be located on the house
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
  moveForward(50);
  turnRight(90);
  //reaches the left slanting side of the roof
  turnRight(40);
  moveForward(20);
  turnTo(0);
  //draws chimney
  moveForward(13);
  turnLeft(90);
  moveForward(6);
  turnLeft(90);
  moveForward(18);
  //starts where it ends after drawing the structure of the house so it draws over the structure of the house but with a different color
  turnRight(55);
  moveForward(6);
  turnTo(0);
  turnLeft(90);
  turnLeft(90);
  moveForward(55);
  turnTo(0);
  //random color is assigned so all houses are unique
  penRGB(red, green, blue, 1);
  penWidth(6.5);
  drawSquare();
}
//draws one side of a square
function drawSquareSideHouse() {
  moveForward(50);
  turnRight(90);
}
//draws a full 50 by 50 square aka the structure of the house
function drawSquare() {
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
}
//draws cross on left window
function drawLeftWindowCross() {
  moveForward(7.5);
  turnRight(90);
  moveForward(15);
  turnLeft(90);
  moveForward(7.5);
  turnLeft(90);
  moveForward(7.5);
  turnLeft(90);
  moveForward(15);
  penUp();
  moveForward(5);
  turnRight(90);
}
//draws cross on right window
function drawRightWindowCross() {
  moveForward(7.5);
  turnLeft(90);
  moveForward(15);
  turnRight(90);
  moveForward(7.5);
  turnRight(90);
  moveForward(7.5);
  turnRight(90);
  moveForward(15);
  penUp();
  moveForward(5);
  penDown();
}
//draws all snowflakes
drawAllSnowflakes();
function drawAllSnowflakes() {
  //draws 150 snowflakes
  for (var i = 0; i < 100; i++) {
    drawSnowflake();
  }
}
//draws one snowflake
function drawSnowflake() {
  penRGB(0, 128, 128, 0.5);
  penWidth(1);
  penUp();
  //moves snowflake randomily across the page, with a maximum of both x and y values available
  moveTo(randomNumber(0, 320), randomNumber(0, 450));
  penDown();
  //changes the angle that it turns to create diagnals and it is capabale of being different lengths
  snowflakeDesign(randomNumber(20, 80), randomNumber(1, 4));
}
//draws four sides of snowflakes with two different angles and two of the same angles 
function snowflakeDesign(angle, length) {
  //turtle draws horizontal snowflake line
  moveForward(length);
  turnAround();
  moveForward(length);
  moveForward(length);
  turnAround();
  moveForward(length);
  //turtle is in the middle of snowflake
  turnRight(angle);
  //draws one diagonal on snowflake
  snowflakeDiagnals(length);
  turnAround();
  moveForward(length);
  //position turtle in middle of snowflake
  turnTo(0);
  turnLeft(angle);
  //draws final diagonal on snowflake, mirror version of he first diagnal, but different angle
  snowflakeDiagnals(length);
  turnTo(0);
}
//turns the turtle around
function turnAround() {
  turnLeft(90);
  turnLeft(90);
}
//draws both diagonals of snowflake
function snowflakeDiagnals(length) {
  moveForward(length);
  turnAround();
  moveForward(length);
  moveForward(length);
  
}
