function setup() {
  createCanvas(1000, 300);
  // Medir giros en grados (0 a 360) como indica el documento
  angleMode(DEGREES); 
}

function draw() {
  background(240); 
  // ETAPA 1: Pez Bebé 
  push();
  translate(100, 150); // Posicionamiento
  rotate(-15);         // Inclinación
  scale(0.8);          // Tamaño
  drawPez(255, 230, 180); 
  pop();               // Aislar el estado gráfico

  // ETAPA 2: Pez Niño 
  push();
  translate(280, 150);
  rotate(5);
  scale(1.1);
  drawPez(255, 170, 100); // Color naranja suave
  pop();
 
  // ETAPA 3: Pez Adolescente 
  push();
  translate(470, 150);
  rotate(-5);
  scale(1.4);
  drawPez(255, 120, 0); // Color naranja vibrante
  pop();

  // ETAPA 4: Pez Adulto 
  push();
  translate(670, 150);
  rotate(0);
  scale(1.7);
  drawPez(220, 40, 0); // Color rojo/naranja fuerte
  pop();

  // ETAPA 5: Pez Anciano 
  push();
  translate(870, 150);
  rotate(15); // Postura caída por la edad
  scale(1.5);
  drawPez(150, 150, 150); // Cambio de atributo: Color grisáceo por vejez
  pop();
}

function drawPez(r, g, b) {
  stroke(30);
  strokeWeight(3);

  // Se aplica el color recibido por parámetro para el atributo de vida
  fill(r, g, b); 
  
  // 1. Cola del pez
  triangle(-15, 0, -40, -20, -40, 20);
  
  // 2. Aleta superior
  triangle(-5, -15, 5, -30, 15, -15);
  
  // 3. Cuerpo del pez
  ellipse(0, 0, 55, 35); 

  // 4. Ojo 
  fill(255);
  ellipse(12, -5, 12, 12); // Cristalino del ojo
  fill(30);
  ellipse(14, -5, 5, 5);   // Pupila
}
