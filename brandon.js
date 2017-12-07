
//Brandon wrote this code
function drawAllHouses() {
  //makes three houses in a row vertically, 80 units away from each other
  for (var i = 0; i < 4; i++) {
    penUp();
    move(80, 0);
    penDown();
    //sets random colors to outline house a different color
    drawHouse(randomNumber(0, 150), randomNumber(0, 250), randomNumber(0, 250));
  }
}
//Brandon wrote this code
//draws one house
function drawHouse(red, green, blue) {
  //revise each function to ONLY draw what it needs to draw (no extra lines)
  drawStructure();
  drawRoof();
  drawDoor();
  drawWindowLeft();
  drawWindowRight();
  drawChimney();
  colorHouse(red, green, blue);
  //faces the turtle upward, ready to draw next house
  turnTo(0);
}
//Brandon wrote this code
//draws bottom part of the house
function drawStructure() {
  //draws one side of the square, four times in a row
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
}
//Brandon wrote this code
function drawRoof() {
  //brown color
  penRGB(139, 69, 14, 1);
  penWidth(8);
  //the roof does not look symmetrical, I need to play around with the angles
  //draws roof itself
  moveForward(50);
  turnRight(40);
  moveForward(50);
  turnRight(115);
  moveForward(40);
}
//Brandon wrote this code
//draws curved door
function drawDoor() {
  //grey color
  penRGB(170, 170, 170, 1);
  penWidth(4);
  //starts where it ended after it drew the roof, so moves to where the door where will be located
  moveToDoorLocation();
  //the curve on the door
  moveForward(15);
  arcLeft(180, 5);
  moveForward(15);
}
//Brandon wrote this code
//starts where it ended after it drew the roof, so moves to where the door where will be located
function moveToDoorLocation() {
  penUp();
  turnRight(24);
  moveForward(50);
  turnRight(90);
  moveForward(20);
  turnRight(90);
  penDown();
}
//Brandon wrote this code
//draws window on the left side of the house
function drawWindowLeft() {
  penColor("black");
  penWidth(3);
  turnRight(90);
  //starts where it ended after it drew the door, so moves to where the left window will be located on the house
  moveToLeftWindow();
  //leaves space so akward line is avoided, making it seem like it is not connected to the side of the house by a line
  penUp();
  moveForward(5);
  penDown();
  //draws left window (square)
  drawLeftWindow();
  //draws cross inside the window
  drawLeftWindowCross();
}
//draws left window (square)
function drawLeftWindow() {
  moveForward(15);
  turnRight(90);
  moveForward(15);
  turnRight(90);
  moveForward(15);
  turnRight(90);
  moveForward(15);
  turnRight(90);
}
//starts where it ended after it drew the door, so moves to where the left window will be located on the house
function moveToLeftWindow() {
  moveForward(20);
  turnRight(90);
  moveForward(40);
  turnRight(90);
}
//Brandon wrote this code

//draws window on the right side of the house
function drawWindowRight() {
  //starts where it ended after it drew the left window, so moves to where the right window will be located on the house
  leftWindowToRightLocation();
  //leaves space so akward line is avoided, making it seem like it is not connected to the side of the house by a line
  penUp();
  moveForward(5);
  penDown();
  //draws small window (square)
  drawRightWindowSquare();
  //draws cross
  drawRightWindowCross();
}
//Brandon wrote this code
//starts where it ended after it drew the left window, so moves to where the right window will be located on the house
function leftWindowToRightLocation() {
  moveForward(15);
  turnRight(90);
  moveForward(50);
  turnRight(90);
  moveForward(7);
  turnRight(90);
}
//Brandon wrote this code
//creates small square as winodw on right side of the house
function drawRightWindowSquare() {
  moveForward(15);
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
}
//Brandon wrote this code
//draws chimney on top of left side of roof
function drawChimney() {
  //brown
  penRGB(139, 69, 14, 1);
  //starts where it ended after it drew the right window, so moves to where the chimney will be located on the house
  moveRightWindowToChimney();
  //reaches the left slanting side of the roof
  turnRight(40);
  moveForward(20);
  turnTo(0);
  //draws chimney
  drawChimneyCode();
  //starts where it ends after drawing the structure of the house so it draws over the structure of the house but with a different color
  turnRight(55);
  moveForward(6);
  turnTo(0);
  turnLeft(90);
  turnLeft(90);
  moveForward(55);
  turnTo(0);
}
//draws chimney itself, a small rectangle on top left of the roof
function drawChimneyCode() {
  moveForward(13);
  turnLeft(90);
  moveForward(6);
  turnLeft(90);
  moveForward(18);
}
//moves from location where it ended after drawing right window to the start of the chimney 
function moveRightWindowToChimney() {
  penUp();
  turnLeft(90);
  moveForward(15);
  turnLeft(90);
  moveForward(50);
  turnRight(90);
  penDown();
}
//Brandon wrote this code
function colorHouse(red, green, blue) {
  //random color is assigned so all houses are unique
  penRGB(red, green, blue, 1);
  penWidth(6.5);
  drawSquare();
}
//Brandon wrote this code
//draws one side of a square
function drawSquareSideHouse() {
  moveForward(50);
  turnRight(90);
}
//Brandon wrote this code
//draws a full 50 by 50 square aka the structure of the house
function drawSquare() {
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
  drawSquareSideHouse();
}
//Brandon wrote this code
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
//Brandon wrote this code
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
//Brandon wrote this code
//draws all snowflakes
drawAllSnowflakes();
function drawAllSnowflakes() {
  //draws 300 snowflakes
  for (var i = 0; i < 250; i++) {
    drawSnowflake();
  }
}
//Brandon wrote this code
//draws one snowflake
function drawSnowflake() {
  penRGB(0, 128, 128, 0.8);
  penWidth(1);
  penUp();
  //moves snowflake randomily across the page, with a maximum of both x and y values available
  moveTo(randomNumber(0, 320), randomNumber(0, 450));
  penDown();
  //changes the angle that it turns to create diagonals and it is capabale of being different lengths
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
  snowflakeDiagonals(length);
  turnAround();
  moveForward(length);
  //position turtle in middle of snowflake
  turnTo(0);
  turnLeft(angle);
  //draws final diagonal on snowflake, mirror version of he first diagonal, but different angle
  snowflakeDiagonals(length);
  turnTo(0);
}
//Brandon wrote this code
//draws both diagonals of snowflake
function snowflakeDiagonals(length) {
  moveForward(length);
  turnAround();
  moveForward(length);
  moveForward(length);
  
}
//Brandon wrote this code
//turns the turtle around
function turnAround() {
  turnLeft(90);
  turnLeft(90);
}
