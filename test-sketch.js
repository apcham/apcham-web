function setup() {
  createCanvas(500, 500);
  background(229, 151, 232);
}

function draw() {
  //declaration of variables
  var x = mouseX;
  var y = mouseY;
  var size = 50;

  //circle
  fill(146, 252, 229);
  stroke(6, 72, 204);
  ellipse(x, y, size, size);
}
