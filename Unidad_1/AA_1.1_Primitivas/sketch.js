function setup() {
  createCanvas(400, 400);
  
  background(0, 255, 0);
  
  fill(255, 0, 255);
  circle(200, 200, 25);

  fill(150, 150, 150);
  rect(150, 50, 100, 100);
  rect(125, 150, 150, 150);

  fill(255, 255, 255);
  circle(175, 80, 20);
  circle(225, 80, 20);

  stroke(0, 0, 255); // pinta la linea (azul)
  strokeWeight(10);  // hace la linea mas gruesa

  line(125, 180, 75, 230); // brazo izquierdo
  line(275, 180, 325, 230);// brazo derecho

  strokeWeight(1); // regresa el grosor al normal
  
  // SOLUCIÓN: Cambiamos noStroke() por stroke(0) para pintar los bordes de negro
  stroke(0); 

  fill(255, 255, 0); // color amarillo para la antena
  triangle(175, 50, 225, 50, 200, 10); // figura del triangulo

  fill(225, 0, 255); // color magenta
  circle(200, 225, 40);
}
  
function draw() {
  // Ahora estos círculos también se dibujarán con contorno negro
  circle(mouseX, mouseY, 40);
}
  

