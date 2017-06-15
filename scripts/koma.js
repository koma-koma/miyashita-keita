var k1, k2, o1, o2, m1, m2, a1, a2;
var canvas;

function setup(){
    //size(640, 480);に相当する
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    //この命令でhtml上にcanvasタグが挿入される．

    //Canvasのclassを指定する．
    canvas.parent("koma");

    frameRate(60);
    //colorMode(RGB, 255, 255, 255, 255);
    //smooth();

    if(windowWidth >= 700) {
        k1 = new Shape(0, -windowWidth*3/10, -10, -10, 0);
        k2 = new Shape(0, -windowWidth*3/10, 10, 10, 90);

        o1 = new Shape(3, -windowWidth/10+5, 5, 0, 0);
        o2 = new Shape(3, -windowWidth/10-5, -5, 5, 0);

        m1 = new Shape(0, windowWidth/10-10, 0, -5, 90);
        m2 = new Shape(0, windowWidth/10+10, 0, 10, 180);

        a1 = new Shape(1, windowWidth*3/10, 0, 0, 0);
        a2 = new Shape(2, windowWidth*3/10, 0, 15, 0);
    } else {
        k1 = new Shape(0, -windowWidth/6, -windowHeight/6-10, -10, 0);
        k2 = new Shape(0, -windowWidth/6, -windowHeight/6+10, 10, 90);

        o1 = new Shape(3, windowWidth/6, -windowHeight/6+5, 0, 0);
        o2 = new Shape(3, windowWidth/6, -windowHeight/6-5, 5, 0);

        m1 = new Shape(0, -windowWidth/6-10, windowHeight/6, -5, 90);
        m2 = new Shape(0, -windowWidth/6+10, windowHeight/6, 10, 180);

        a1 = new Shape(1, windowWidth/6, windowHeight/6, 0, 0);
        a2 = new Shape(2, windowWidth/6, windowHeight/6, 15, 0);
    }
}

function draw(){

    k1.update();
    k2.update();
    o1.update();
    o2.update();

    m1.update();
    m2.update();

    a1.update();
    a2.update();

    push();
    translate(0, 0);
    rotateX(radians(map(mouseY, 0, windowHeight, -30, 30)));
    rotateY(radians(map(mouseX, 0, windowWidth, -30, 30)));

    k1.drawMe();
    k2.drawMe();
    o1.drawMe();
    o2.drawMe();

    m1.drawMe();
    m2.drawMe();

    a1.drawMe();
    a2.drawMe();

    pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    if(windowWidth >= 700) {
        k1.setPos(-windowWidth*3/10, -10);
        k2.setPos(-windowWidth*3/10, 10);

        o1.setPos(-windowWidth/10+5, 5);
        o2.setPos(-windowWidth/10-5, -5);

        m1.setPos(windowWidth/10-10, 0);
        m2.setPos(windowWidth/10+10, 0);

        a1.setPos(windowWidth*3/10, 0);
        a2.setPos(windowWidth*3/10, 0);
    } else {
        k1.setPos(-windowWidth/6, -windowHeight/6-10);
        k2.setPos(-windowWidth/6, -windowHeight/6+10);

        o1.setPos(windowWidth/6, -windowHeight/6+5);
        o2.setPos(windowWidth/6, -windowHeight/6-5);

        m1.setPos(-windowWidth/6-10, windowHeight/6);
        m2.setPos(-windowWidth/6+10, windowHeight/6);

        a1.setPos(windowWidth/6, windowHeight/6);
        a2.setPos(windowWidth/6, windowHeight/6);
    }
}

function Shape(_shape, _x, _y, _z, _rot) {
    this.shape = _shape;
    this.size = windowWidth/15;

    this.x = _x;
    this.y = _y;
    this.z = _z;

    this.tx = _x;
    this.ty = _y;
    this.tz = _z;

    this.rot = _rot;
    this.rotx = 0;
    this.roty = 0;
    this.rotz = 0;

    this.pamp = 100;
    this.rotamp = 90;

    this.xnoise = random(10);
    this.ynoise = random(10);
    this.znoise = random(10);
    this.rotxnoise = random(10);
    this.rotynoise = random(10);
    this.rotznoise = random(10);

    this.noiseChange = 0.002;

    this.col = color(random(20)+50, random(20)+50, random(20)+50, 187);

    this.setPos = function(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    /*
    this.setTarget = function(_pamp, _rotamp, noiseChange) {
        this.pamp = this.pamp + (_pamp - this.pamp) * 0.1;
        this.rotamp = this.rotamp + (_rotamp - this.rotamp) * 0.1;
        this.noiseChange = this.noiseChange + (_noiseChange - this.noiseChange)*0.1;
    }
    */
    this.update = function() {
        this.size = windowWidth/15;

        this.dis = dist(0, 0, mouseX - windowWidth/2, mouseY - windowHeight/2);

        if(this.dis <= 100) {
            this.pamp = this.pamp + (windowWidth/20 - this.pamp) * 0.1;
            this.rotamp = this.rotamp + (30 - this.rotamp) * 0.1;
            this.noiseChange = this.noiseChange + (0.003 - this.noiseChange)*0.1;
        } else {
            this.pamp = this.pamp + ((windowWidth+windowHeight)/2 - this.pamp) * 0.1;
            this.rotamp = this.rotamp + (360 - this.rotamp) * 0.1;
            this.noiseChange = this.noiseChange + (0.004 - this.noiseChange)*0.1;
        }

        this.tx = this.x + (noise(this.xnoise)-0.5)*this.pamp;
        this.ty = this.y + (noise(this.ynoise)-0.5)*this.pamp;
        this.tz = this.z + (noise(this.znoise)-0.5)*this.pamp;

        this.rotx = (noise(this.rotxnoise)-0.5)*this.rotamp/4;
        this.roty = (noise(this.rotynoise)-0.5)*this.rotamp/4;
        this.rotz = this.rot + (noise(this.rotznoise)-0.5)*this.rotamp;

        this.xnoise += this.noiseChange;
        this.ynoise += this.noiseChange;
        this.znoise += this.noiseChange;

        this.rotxnoise += this.noiseChange;
        this.rotynoise += this.noiseChange;
        this.rotznoise += this.noiseChange;
    }

    this.drawMe = function() {
        push();

        translate(this.tx, this.ty, this.tz);
        rotateX(radians(this.rotx));
        rotateY(radians(this.roty));
        rotateZ(radians(this.rotz));

        noStroke();
        fill(this.col, 100);

        if (this.shape == 0) {
            triangle(-this.size, -this.size, this.size, -this.size, -this.size, this.size);
        } else if (this.shape == 1) {
            triangle(0, -this.size, this.size, this.size, -this.size, this.size);
        } else if (this.shape == 2) {
            triangle(0, -this.size, this.size, this.size, 0, this.size);
        } else if (this.shape == 3) {
            ellipse(0, 0, this.size*2, this.size*2);
        }
        pop();
    }

}
