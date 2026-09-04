function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 102, 153);

  fill(255, 0, 0);
  stroke(0,0,0);
  strokeWeight(3);

  rect(100,100,200,200);
  fill(255,20,255,100)
  rect(120,120,155,70)
  fill(255,255,255);
  strokeWeight(2)
  
  noFill();
  ellipse(150,160,40,40);
  ellipse(250,160,40,40);

  fill(0)
  ellipse(150,160,15,15);
  ellipse(250,160,15,15);

  strokeWeight(4)
  line(150,240,250,240);

  noStroke();
  fill(230,126,34);
  strokeWeight(1);
  triangle(200,180,185,210,215,210);
}
