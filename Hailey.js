drawAllSnowmen();
drawAllTrees();

//Hailey Wrote this code
//Draws finished tree
function drawTree() {
  show();
  drawTreeBark();
  turnAround();
  drawLeftTreeBranch();
  drawRightTreeBranch();
  drawLeftTreeBranch();
  drawRightTreeBranch();
  drawLeftTreeBranch();
}
//Hailey Wrote this code
//draws the base of the tree
function drawTreeBark() {
  penUp();
  penColor(rgb(117,65,9));
  penWidth(7);
  penDown();
  moveForward(75);
}
//Hailey Wrote this code
//draws the basic foundation tree  branchs
function drawTreeBranch() {
  penColor(rgb(117,65,9));
  penDown();
  penWidth(4);
  turnRight(45);
  moveForward(40);
  turnAround();
  moveForward(7);
  drawSmallTreeBranchOne();
  moveForward(7);
  drawSmallTreeBranchTwo();
  moveForward(7);
  drawSmallTreeBranchOne();
  moveForward(20);
  turnRight(45);
}
//Hailey Wrote this code
//draws one side of the smaller tree branch
function drawSmallTreeBranchOne() {
  turnLeft(90);
  moveForward(10);
  turnAround();
  moveForward(10);
  turnLeft(90);
}
//Hailey Wrote this code
//draws the other side of the smaller tree branch
function drawSmallTreeBranchTwo() {
  turnRight(90);
  moveForward(10);
  turnAround();
  moveForward(10);
  turnRight(90);
}
//Hailey Wrote this code
function drawLeftTreeBranch() {
  turnRight(90);
  drawTreeBranch();
  moveForward(15);
}
//Hailey Wrote this code
function drawRightTreeBranch() {
  turnAround();
  drawTreeBranch();
  turnLeft(90);
  moveForward(15);
}
//Hailey Wrote this code
//draws entier snowman top to bottom
function drawSnowman() {
  drawSnowmanOutline(24, 23);
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
//Hailey Wrote this code
//The snowmans face: includes eyes, mouth, and nose
function drawSnowmanFace() {
  drawSnowmanOutline(14, 13);
  move(-5, -5);
  //the eyes of the snowman
  drawSnowmanEye();
  move(10, 0);
  drawSnowmanEye();
  move(-5, 5);
  drawSnowmanNose();
  move(-5, 3);
  drawSnowmanMouth();
}
//Hailey Wrote this code
function drawSnowmanOutline(size, sizetwo) {
  penDown();
  penColor("black");
  dot(size);
  penColor(rgb(222,255,222));
  dot(sizetwo);
  penUp();
}
//Hailey Wrote this code
function drawSnowmanEye() {
  penDown();
  penColor("black");
  dot(1);
  penUp();
}
//Hailey Wrote this code
function drawSnowmanNose() {
  penDown();
  penColor(rgb(255,125,3));
  dot(1);
  penUp();
}
//Hailey Wrote this code
function drawSnowmanMouth() {
  penDown();
  penColor("black");
  penWidth(2);
  turnAround();
  arcLeft(180, 5);
}
//Hailey Wrote this code
//Draws the snowmans torso and its buttons on it
function drawSnowmanBody() {
  drawSnowmanOutline(18, 17);
  turnAround();
  //the top button starts
  penUp();
  move(0, -5);
  penDown();
  penColor("black");
  dot(1);
  drawSnowmanButton();
  drawSnowmanButton();
  turnAround();
  penUp();
  move(0, -15);
  penDown();
}
//Hailey Wrote this code
//A simple way to add the buttons on the snowman
function drawSnowmanButton() {
  penUp();
  move(0, 6);
  penDown();
  dot(1);
}
//Hailey Wrote this code
//the function to add arms to the snowman
function drawSnowmanArm() {
  turnRight(60);
  penColor("black");
  penWidth(2);
  moveForward(25);
  turnAround();
  moveForward(7);
  drawSnowmanFingers();
  moveForward(18);
}
//Hailey Wrote this code
//draws the small extra things on the snowman. Its his "fingers"
function drawSnowmanFingers() {
  turnRight(90);
  moveForward(7);
  turnAround();
  moveForward(14);
  turnAround();
  moveForward(7);
  turnLeft(90);
}
//Hailey Wrote this code
function turnAround() {
  turnLeft(90);
  turnLeft(90);
}
//Hailey Wrote this code
//Draws all your trees with loop
function drawAllTrees() {
  for (var i = 0; i < 4; i++) {
    penUp();
    turnTo(0);
    moveTo(randomNumber(0,320 ),randomNumber(290,450 ));
    drawTree();
  }
}
//Hailey Wrote this code
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
