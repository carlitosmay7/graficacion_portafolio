function setup() {
  createCanvas(400, 400);
  
  background(0,255,0);
  fill(255,0,255);
  circle(200,200,25);

  fill(150,150,150);
  rect(150,50,100,100);
  rect(125,150,150,150);

  fill(255,255,255);
  circle(175,80,20);
  circle(225,80,20);

  stroke(0); // contorno negro brazos
  strokeWeight(16); // grosor contorno
  line(125,180,75,230); 
  line(275,180,325,230); 

  stroke(0,0,255);// pinta la linea
  strokeWeight(10);// hace la linea mas gruesa

  line(125,180,75,230); //brazo izquierdo
  line(275,180,325,230);//brazo derecho

  strokeWeight(1);//regresa el grosor al normal
  stroke(0); // borde negro para el triangulo y figuras
  //noStroke();//quita el borde de color para las siguientes figuras 

  fill(255,255,0);//color amarrillo para la antena
  triangle(175,50,225,50,200,10);//figura del triangulo

  fill(225,0,255);//color magenta
  circle(200,225,40);
  
}
  
  

function draw() {
  circle(mouseX,mouseY,40);

  
}
