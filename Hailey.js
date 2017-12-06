drawAlltrees();
drawAllSnowmen();

//Draws finished tree
function drawTree() {
  drawTreeBark();
  turnRight(180);
  moveForward(10);
  turnRight(90);
  drawRightTreeBranch();
  turnRight(90);
  moveForward(15);
  turnLeft(90);
  drawLeftTreeBranch();
  turnLeft(90);
  moveForward(17);
  turnRight(90);
  drawRightTreeBranch();
  turnRight(90);
  moveForward(10);
  turnLeft(90);
  drawLeftTreeBranch();
  turnLeft(90);
  moveForward(23);
}
//draws the base of the tree
function drawTreeBark() {
  penUp();
  penColor(rgb(117,65,9));
  penWidth(10);
  penDown();
  moveForward(75);
}
//draws the right side of the tree  branches
function drawRightTreeBranch() {
  penColor(rgb(117,65,9));
  penDown();
  penWidth(4);
  turnRight(45);
  moveForward(40);
  turnRight(180);
  moveForward(10);
  turnLeft(90);
  moveForward(15);
  turnLeft(180);
  moveForward(15);
  turnLeft(90);
  moveForward(10);
  turnRight(90);
  moveForward(15);
  turnLeft(180);
  moveForward(15);
  turnRight(90);
  moveForward(20);
  turnLeft(45);
}
//draws the left side of the tree branches
function drawLeftTreeBranch() {
  penColor(rgb(117,65,9));
  penDown();
  penWidth(4);
  turnLeft(45);
  moveForward(40);
  turnRight(180);
  moveForward(10);
  turnLeft(90);
  moveForward(15);
  turnLeft(180);
  moveForward(15);
  turnLeft(90);
  moveForward(10);
  turnRight(90);
  moveForward(15);
  turnLeft(180);
  moveForward(15);
  turnRight(90);
  moveForward(20);
  turnRight(45);
}
//draws entier snowman top to bottom
function drawSnowman() {
  dot(24);
  penColor("black");
  penColor(rgb(222,255,222));
  dot(23);
  penUp();
  move(0, -35);
  drawSnowmanBody();
  penUp();
  move(0, -19);
  drawSnowmanFace();
  penUp();
  move(8, 20);
  penDown();
  drawSnowmanArm();
  penUp();
  move(-25, 0);
  penDown();
  drawSnowmanArm();
}
//The snowmans face: includes eyes, mouth, and nose
function drawSnowmanFace() {
  penDown();
  penColor("black");
  dot(14);
  penColor(rgb(222,255,222));
  dot(13);
  penUp();
  move(-5, -5);
  //the eyes of the snowman
  penDown();
  penColor("black");
  dot(1);
  penUp();
  move(10, 0);
  penDown();
  penColor("black");
  dot(1);
  penUp();
  move(-5, 5);
  penDown();
  //this is the mouth
  penColor(rgb(255,125,3));
  dot(1);
  penUp();
  move(-5, 3);
  penDown();
  //this is the mouth/smile
  penColor("black");
  penWidth(2);
  turnLeft(180);
  arcLeft(180, 5);
}
//Draws the snowmans torso and its buttons on it
function drawSnowmanBody() {
  penDown();
  penColor("black");
  dot(18);
  penColor(rgb(222,255,222));
  dot(17);
  turnLeft(180);
  //the top button starts
  penUp();
  move(0, -5);
  penDown();
  penColor("black");
  dot(1);
  drawSnowmanButton();
  drawSnowmanButton();
  turnLeft(180);
  penUp();
  move(0, -15);
  penDown();
}
//A simple way to add the buttons on the snowman
function drawSnowmanButton() {
  penUp();
  move(0, 6);
  penDown();
  dot(1);
}
//the function to add arms to the snowman
function drawSnowmanArm() {
  turnRight(60);
  penColor("black");
  penWidth(2);
  moveForward(25);
  turnRight(180);
  moveForward(7);
  turnRight(90);
  moveForward(7);
  turnRight(180);
  moveForward(14);
  turnRight(180);
  moveForward(7);
  turnLeft(90);
  moveForward(18);
}
//Draws all your trees with loop
function drawAlltrees() {
  for (var i = 0; i < 4; i++) {
    penUp();
    turnTo(0);
    moveTo(randomNumber(0,320 ),randomNumber(290,450 ));
    drawTree();
  }
}
//Draw All snowmen with loop
function drawAllSnowmen() {
  for (var i = 0; i < 3; i++) {
    penUp();
    turnTo(0);
    moveTo(randomNumber(0, 320), randomNumber(260, 450));
    drawSnowman();
  }
}
hide();
