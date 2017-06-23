var rectSize;
var canvas;

var easingx = 0;
var easingy = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("koma");
  colorMode(HSB, 255);
  rectSize = 80;
  // colorMode(RGB, 255, 255, 255, 255);

  // blendMode(ALPHA);

}

function draw() {
  easingx = easingx + (mouseX - easingx)*0.05;
  easingy = easingy + (mouseY - easingy)*0.05;

  noStroke();
  fill(142, 12, 230, 255);
  rect(0, 0, width, height);

  var nrectx = width/rectSize+1;
  var nrecty = height/rectSize+1;

  for (var y = 0; y <= nrecty; y++) {
    for (var x = 0; x <= nrectx; x++) {
      var zindex = dist(easingx, easingy, x*rectSize, y*rectSize);
      var maxdist = dist(0, 0, windowWidth, windowHeight);
      zindex = map(zindex, 0, maxdist, 80, 0);

      push();
      translate(0, 0, 0);
      // fill(100+x*2, 64, 255, 100);
      // if (x == int((mouseX+rectSize/2)/rectSize) &&
      //     y == int((mouseY+rectSize/2)/rectSize)) {
      //   fill(84, 180, 160, 100);
      // } else {
      //   fill(0, 0, 255, 100);
      // }

      fill(0, 255*(zindex-60)/40, 200, 100);
      rectMode(CENTER);
      rect(x*rectSize, y*rectSize, rectSize*(zindex/100), rectSize*(zindex/100));
     pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
