var rectSize;
var nrectx
var nrecty

var canvas;

var easingx = 0;
var easingy = 0;

var array = [];
var noisex = [];
var noisey = [];
var startnoisex = 0;
var startnoisey = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("koma2");
  colorMode(HSB, 255);
  nrectx = 25;
  rectSize = width/(nrectx-1);
  nrecty = height/rectSize +1;

  for (var i = 0; i < nrectx*nrecty; i++) {
    array.push(Math.random()*255);
    noisex.push(Math.random() + i/100);
    noisey.push(i/100);
  }

  // colorMode(RGB, 255, 255, 255, 255);

  // blendMode(ALPHA);

}

function draw() {
  easingx = easingx + (mouseX - easingx)*0.05;
  easingy = easingy + (mouseY - easingy)*0.05;

  noStroke();
  fill(142, 12, 230, 255);
  rect(0, 0, width, height);

  for (var y = 0; y < nrecty; y++) {
    // noisey = startnoisey;

    for (var x = 0; x < nrectx; x++) {
      // noisex = startnoisex;

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

      fill(0, 255*(zindex-60)/40, array[x + y*nrectx], 100);
      // fill(0, 255*(zindex-60)/40, noise(noisex[x + y*nrectx], noisey[x + y*nrectx])*255, 100);

      rectMode(CENTER);
      var size = noise(noisex[x + y*nrectx], noisey[x + y*nrectx])*10;
      rect(x*rectSize, y*rectSize,
        rectSize*(zindex/100)+size,
        rectSize*(zindex/100)+size);
     pop();
     noisex[x + y*nrectx] += 0.01;
    }
  noisey[x + y*nrectx] += 0.01;

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rectSize = width/(nrectx-1);
  nrecty = height/rectSize +1;
}
