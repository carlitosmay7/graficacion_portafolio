function setup() {
  // Lienzo vertical acorde a la imagen de la obra
  createCanvas(400,600);
 
}

function draw() {
  // cielo de fondo
  background(15,30,85); // Azul noche 

  // ondas de viento y espirales (Líneas y Elipses)
  noFill();
  
  strokeWeight(6);
  stroke(35, 70, 150); // Azul intermedio
  ellipse(180, 180, 240, 90);
  ellipse(220, 220, 200, 70);

  strokeWeight(4);
  stroke(70, 130, 210); // Azul claro
  ellipse(190, 175, 210, 70);
  ellipse(210, 225, 170, 50);

  strokeWeight(2);
  stroke(160, 200, 245); // Azul muy claro / blanco
  ellipse(200, 180, 140, 40);

  noStroke(); // Quita contornos para las figuras sólidas
  
  // primer borde del circulo más grande
  fill(240, 200, 80);
  ellipse(320, 90, 110, 110);

  fill(2500, 225, 110);
  ellipse(320, 90, 85, 85);

  fill(250, 245, 170); // Centro brillante
  ellipse(320, 90, 60, 60);

  // ESTRELLAS DEL CIELO
  
  // Estrella 1 (Izquierda superior)
  fill(230, 180, 60);
  ellipse(60, 60, 45, 45);
  fill(255, 240, 150);
  ellipse(60, 60, 25, 25);
  fill(255, 255, 255);
  ellipse(60, 60, 10, 10);

  // Estrella 2 (Centro arriba)
  fill(230, 180, 60);
  ellipse(190, 70, 35, 35);
  fill(255, 245, 170);
  ellipse(190, 70, 18, 18);

  // Estrella 3 (Arriba del ciprés)
  fill(230, 180, 60);
  ellipse(150, 130, 40, 40);
  fill(255, 255, 255);
  ellipse(150, 130, 15, 15);

  // Estrella 4 (Derecha centro)
  fill(230, 180, 60);
  ellipse(290, 210, 50, 50);
  fill(255, 240, 150);
  ellipse(290, 210, 25, 25);

  // Destellos pequeños repartidos por el cielo
  fill(255, 250, 200);
  ellipse(110, 100, 8, 8);
  ellipse(250, 110, 6, 6);
  ellipse(100, 220, 7, 7);
  ellipse(350, 170, 8, 8);

  // MONTAÑAS DEL FONDO
  fill(25, 45, 100);
  triangle(0, 360, 160, 270, 300, 360);
  triangle(120, 360, 280, 250, 400, 360);
  rect(0, 350, 400, 50);

  // pueblo y iglesia (Centro y Abajo)
  
  // Base oscura del pueblo
  fill(15, 25, 60);
  rect(120, 360, 280, 80);

  // Iglesia (Torre principal)
  fill(25, 35, 75);
  rect(230, 320, 18, 50); // Cuerpo de la torre
  triangle(230, 320, 248, 320, 239, 260); // Aguja alta

  // Casitas pequeñas (Rectángulos y Triángulos)
  fill(30, 45, 90);
  rect(160, 365, 30, 20);
  rect(200, 360, 25, 25);
  rect(265, 365, 35, 20);
  rect(315, 360, 40, 25);

  // Techos de las casitas
  fill(15, 20, 45);
  triangle(160, 365, 190, 365, 175, 355);
  triangle(200, 360, 225, 360, 212, 350);
  triangle(265, 365, 300, 365, 282, 355);
  triangle(315, 360, 355, 360, 335, 350);

  // Luces amarillas de las ventanas
  fill(255, 220, 100);
  rect(172, 372, 4, 6);
  rect(210, 368, 5, 5);
  rect(237, 335, 4, 8); // Ventana de la iglesia
  rect(280, 372, 5, 5);
  rect(330, 368, 6, 6);

  // PASTO Y COLINAS DEL PRIMER PLANO (Abajo)
  
  // Colina verde fuerte
  fill(35, 80, 50);
  ellipse(200, 530, 500, 240);

  fill(55, 120, 50);
  ellipse(150, 560, 420, 200);

  //vegetación (Líneas)
  stroke(100, 170, 40);
  strokeWeight(2);
  line(100, 470, 95, 450);
  line(110, 475, 115, 455);
  line(180, 490, 175, 465);
  line(220, 500, 225, 475);
  line(300, 520, 305, 495);
  line(340, 530, 335, 505);

  noStroke();
 
  // Silueta base oscura del árbol
  fill(12, 22, 18); // Verde-negro muy oscuro
  triangle(20, 600, 160, 600, 90, 150); // Triángulo principal hacia arriba

  // Hojas y forma orgánica usando elipses superpuestas
  ellipse(85, 310, 75, 170);
  ellipse(105, 250, 65, 150);
  ellipse(95, 190, 50, 120);
  ellipse(92, 160, 30, 70);

  // Toques de luz verde oscuro en el ciprés
  fill(25, 55, 40);
  ellipse(90, 330, 45, 120);
  ellipse(108, 270, 35, 90);
  ellipse(98, 210, 25, 60);

  fill(255, 255, 255);
 text("X: " + floor(mouseX) + "  Y: " + floor(mouseY), 20, 30);
}
