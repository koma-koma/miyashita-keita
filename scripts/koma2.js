var rectSize;
var canvas;

var easingx = 0;
var easingy = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("koma");
  colorMode(HSB, 255);
  rectSize = 50;
  // colorMode(RGB, 255, 255, 255, 255);

  // blendMode(ALPHA);

}

function draw() {
  easingx = easingx + (mouseX - easingx)*0.03;
  easingy = easingy + (mouseY - easingy)*0.03;

  noStroke();
  fill(230, 0, 255);
  rect(0, 0, width, height);

  for (var y = 0; y <= height/rectSize + 1; y++) {
    for (var x = 0; x <= width/rectSize + 1; x++) {
      var zindex = dist(easingx, easingy, x*rectSize, y*rectSize);
      var maxdist = dist(0, 0, windowWidth, windowHeight);
      zindex = map(zindex, 0, maxdist, 80, 0);

      push();
      translate(0, 0, 0);
      fill(100+x*2, 64, 255, 100);
      rectMode(CENTER);
      rect(x*rectSize, y*rectSize, rectSize*(zindex/100), rectSize*(zindex/100));
     pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
