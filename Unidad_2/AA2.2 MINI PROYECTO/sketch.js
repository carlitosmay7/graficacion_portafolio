// ALTAR DIGITAL DE DÍA DE MUERTOS - INGENIERÍA EN SISTEMAS
let anguloGiro = 0;
// ↓ VARIABLE ÚNICA DE CONTROL ↓
// Controla velas, humo del copal y el brillo del carbón
let elementosEncendidos = true; 
let logoCarrera; // Variable para el logo

// setup() 
async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  // Cargamos la imagen aquí usando "await"
  logoCarrera = await loadImage('https://i.postimg.cc/CM8xBtyw/logoisc.jpg');
}

function draw() {
  background(18, 10, 28);
  anguloGiro += 2;

  dibujarLuna();
  dibujarPapelPicadoTecho();
  dibujarAltar();
  dibujarCruz();
  dibujarSahumadores();
  dibujarCalavera(width * 0.28, height * 0.62);
  dibujarPanes();
  dibujarFrutas();
  dibujarVeladoras();
  dibujarFlores();
  dibujarLuzCursor();

  // Dibuja el logo de la carrera en la esquina superior derecha
  // Verificamos que la imagen ya se haya cargado antes de dibujarla
  if (logoCarrera) {
    image(logoCarrera, width * 0.85, height * 0.15 , 100, 100);
  }

  // Textos guía inferiores
  fill(255, 220, 150, 180);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  text("Mueve el cursor para iluminar la escena", width / 2, height - 30);
  text("Haz CLIC para apagar o prender el altar", width / 2, height - 15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Al hacer clic, se apaga o prende todo
function mousePressed() {
  elementosEncendidos = !elementosEncendidos;
}

//FUNCIONES ESENCIALES 

function dibujarLuna() {
  push();
  noStroke();
  for (let r = 200; r > 0; r -= 20) {
    fill(255, 230, 150, map(r, 0, 200, 20, 0));
    ellipse(width / 2, height * 0.15, r * 1.6);
  }
  fill(255, 245, 210);
  ellipse(width / 2, height * 0.15, 60);
  pop();
}

function dibujarPapelPicadoTecho() {
  push();
  let cols = [color(240, 40, 110), color(255, 130, 0), color(0, 180, 240), color(160, 40, 200), color(255, 200, 0)];
  let w = width / 10;
  noStroke();
  for (let i = 0; i < 10; i++) {
    let x = i * w;
    fill(cols[i % cols.length]);
    rect(x, 0, w - 2, 45, 0, 0, 12, 12);
    fill(18, 10, 28);
    ellipse(x + w * 0.5, 20, 10, 10);
    ellipse(x + w * 0.3, 32, 6, 6);
    ellipse(x + w * 0.7, 32, 6, 6);
  }
  pop();
}

function dibujarAltar() {
  push();
  rectMode(CENTER);
  noStroke();
  fill(90, 20, 65);
  rect(width / 2, height * 0.88, width * 0.68, height * 0.16);
  faldonPapel(width / 2, height * 0.80, width * 0.68, 6, color(255, 130, 0), color(240, 40, 110));

  fill(140, 40, 40);
  rect(width / 2, height * 0.72, width * 0.52, height * 0.16);
  faldonPapel(width / 2, height * 0.64, width * 0.52, 5, color(0, 180, 240), color(255, 200, 0));

  fill(180, 80, 20);
  rect(width / 2, height * 0.56, width * 0.36, height * 0.16);
  faldonPapel(width / 2, height * 0.48, width * 0.36, 4, color(240, 40, 110), color(0, 180, 240));
  pop();
}

function faldonPapel(cx, y, anchoTotal, num, col1, col2) {
  push();
  let w = anchoTotal / num;
  let startX = cx - anchoTotal / 2;
  noStroke();
  for (let i = 0; i < num; i++) {
    let x = startX + i * w;
    fill(i % 2 === 0 ? col1 : col2);
    rect(x + w / 2, y + 12, w - 2, 24, 0, 0, 8, 8);
    fill(30, 15, 25, 200);
    ellipse(x + w / 2, y + 14, 7, 7);
    ellipse(x + w * 0.28, y + 20, 4, 4);
    ellipse(x + w * 0.72, y + 20, 4, 4);
  }
  pop();
}

function dibujarCruz() {
  push();
  translate(width / 2, height * 0.42);
  noStroke();
  fill(255, 180, 50, 30);
  ellipse(0, -10, 100, 120);
  fill(100, 50, 20);
  stroke(60, 30, 10);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -10, 22, 90, 4);
  rect(0, -25, 60, 20, 4);
  fill(230, 180, 50);
  noStroke();
  rect(0, -10, 8, 76, 2);
  rect(0, -25, 48, 8, 2);
  dibujarFlor(0, -25, 20);
  pop();
}

function dibujarSahumadores() {
  dibujarSahumador(width * 0.44, height * 0.46);
  dibujarSahumador(width * 0.56, height * 0.46);
}

function dibujarSahumador(x, y) {
  push();
  translate(x, y);

  // El humo solo se dibuja si el altar está encendido
  if (elementosEncendidos) {
    noStroke();
    for (let i = 0; i < 4; i++) {
      let oscilacion = sin(anguloGiro * 2 + x + (i * 45)) * 12;
      let alturaHumo = (anguloGiro * 0.5 + (i * 15)) % 60;
      fill(200, 210, 220, 120 - (alturaHumo * 2));
      ellipse(oscilacion, -10 - alturaHumo, 8 + (alturaHumo * 0.3), 8 + (alturaHumo * 0.3));
    }
  }

  // Tazón de barro
  noStroke();
  fill(130, 50, 20); 
  arc(0, 0, 28, 24, 0, 180);
  
  // Base del tazón
  fill(100, 40, 15);
  ellipse(0, 12, 16, 6);

  // Interior del cuenco
  fill(50, 20, 10);
  ellipse(0, 0, 28, 10);

  // Apariencia del carbón
  if (elementosEncendidos) {
    fill(255, 80, 0); // Carbón al rojo vivo
    ellipse(0, -1, 10, 5);
    fill(255, 200, 0, 150);
    ellipse(0, -2, 6, 3);
  } else {
    fill(30, 15, 15); // Carbón apagado (ceniza)
    ellipse(0, -1, 10, 5);
  }
  
  pop();
}

function dibujarPanes() {
  dibujarPan(width * 0.52, height * 0.64, 24);
  dibujarPan(width * 0.32, height * 0.80, 26);
  dibujarPan(width * 0.68, height * 0.80, 26);
}

function dibujarPan(x, y, tam) {
  push();
  translate(x, y);
  noStroke();
  fill(20, 10, 15, 90);
  ellipse(0, tam * 0.2, tam * 1.1, tam * 0.4);
  fill(195, 125, 60);
  stroke(130, 75, 30);
  strokeWeight(1.5);
  ellipse(0, 0, tam, tam * 0.75);
  stroke(225, 175, 115);
  strokeWeight(2.5);
  line(-tam * 0.35, -tam * 0.1, tam * 0.35, tam * 0.1);
  line(-tam * 0.35, tam * 0.1, tam * 0.35, -tam * 0.1);
  fill(215, 155, 95);
  noStroke();
  ellipse(0, -tam * 0.05, tam * 0.28, tam * 0.25);
  fill(255, 255, 240, 220);
  ellipse(-tam * 0.2, -tam * 0.15, 2, 2);
  ellipse(tam * 0.2, -tam * 0.15, 2, 2);
  ellipse(-tam * 0.15, tam * 0.15, 2, 2);
  ellipse(tam * 0.15, tam * 0.15, 2, 2);
  pop();
}

function dibujarFrutas() {
  dibujarNaranja(width * 0.35, height * 0.65, 16);
  dibujarManzana(width * 0.65, height * 0.65, 16);
  dibujarManzana(width * 0.26, height * 0.82, 18);
  dibujarNaranja(width * 0.74, height * 0.82, 18);
}

function dibujarNaranja(x, y, tam) {
  push();
  translate(x, y);
  noStroke();
  fill(15, 8, 20, 110);
  ellipse(2, 5, tam * 1.2, tam * 0.5);
  fill(255, 140, 0);
  ellipse(0, 0, tam, tam * 0.95);
  fill(50, 150, 50);
  ellipse(0, -tam/2, tam*0.4, tam*0.2);
  pop();
}

function dibujarManzana(x, y, tam) {
  push();
  translate(x, y);
  noStroke();
  fill(15, 8, 20, 110);
  ellipse(2, 5, tam * 1.2, tam * 0.5);
  fill(200, 30, 30);
  ellipse(0, 0, tam, tam);
  fill(100, 50, 20);
  rect(-1, -tam/2 - 2, 2, 5);
  pop();
}

function dibujarCalavera(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(10, 10, 15, 80);
  ellipse(0, 38, 35, 12);
  fill(250);
  stroke(40);
  strokeWeight(2);
  ellipse(0, 20, 30, 38);
  ellipse(0, -10, 38, 36);
  fill(240, 40, 110);
  ellipse(-8, -12, 11, 11);
  ellipse(8, -12, 11, 11);
  fill(10);
  ellipse(-8, -12, 6, 6);
  ellipse(8, -12, 6, 6);
  triangle(0, -4, -3, 0, 3, 0);
  stroke(30);
  strokeWeight(2);
  line(-7, 7, 7, 7);
  line(-4, 4, -4, 10);
  line(0, 4, 0, 10);
  line(4, 4, 4, 10);
  noStroke();
  fill(0, 180, 240);
  ellipse(0, -22, 6, 6);

  push();
  translate(14, 10);
  rotate(sin(anguloGiro * 4) * 20 - 25);
  stroke(250);
  strokeWeight(4);
  line(0, 0, 18, -12);
  push();
  translate(18, -12);
  rotate(sin(anguloGiro * 6) * 15);
  fill(250);
  noStroke();
  ellipse(0, 0, 7, 7);
  pop();
  pop();
  pop();
}

function dibujarVeladoras() {
  let coords = [
    [width * 0.38, height * 0.48], [width * 0.62, height * 0.48],
    [width * 0.42, height * 0.64], [width * 0.72, height * 0.64],
    [width * 0.20, height * 0.80], [width * 0.80, height * 0.80]
  ];
  for (let c of coords) dibujarVeladora(c[0], c[1]);
}

function dibujarVeladora(x, y) {
  push();
  translate(x, y);
  noStroke();
  
  if (elementosEncendidos) {
    fill(255, 160, 30, 25);
    ellipse(0, -15, 45, 45);
  }
  
  fill(255, 255, 250, 210);
  stroke(200, 200, 210);
  strokeWeight(1.5);
  rectMode(CENTER);
  rect(0, 0, 20, 32, 4);
  fill(245, 230, 170);
  rect(0, -8, 17, 6);
  stroke(50);
  strokeWeight(1);
  line(0, -11, 0, -16);

  if (elementosEncendidos) {
    push();
    translate(0, -18);
    scale(1 + sin(anguloGiro * 6 + x) * 0.18);
    noStroke();
    fill(255, 120, 0, 230);
    ellipse(0, 0, 11, 19);
    fill(255, 200, 0);
    ellipse(0, 1, 7, 13);
    fill(100, 180, 255);
    ellipse(0, 5, 3, 4);
    pop();
  }
  pop();
}

function dibujarFlores() {
  let pos = [
    [width * 0.35, height * 0.48, 26], [width * 0.65, height * 0.48, 26],
    [width * 0.48, height * 0.64, 24], [width * 0.58, height * 0.64, 24]
  ];
  for (let p of pos) dibujarFlor(p[0], p[1], p[2]);
  for (let i = -3; i <= 3; i++) {
    dibujarFlor(width / 2 + (i * 35), height * 0.80, 22);
  }
}

function dibujarFlor(x, y, tam) {
  push();
  translate(x, y);
  rotate(anguloGiro * 0.3);
  noStroke();
  fill(255, 120, 0);
  for (let a = 0; a < 360; a += 30) {
    ellipse(cos(a) * (tam * 0.3), sin(a) * (tam * 0.3), tam * 0.5, tam * 0.35);
  }
  fill(255, 190, 0);
  for (let a = 15; a < 375; a += 45) {
    ellipse(cos(a) * (tam * 0.18), sin(a) * (tam * 0.18), tam * 0.35, tam * 0.25);
  }
  fill(210, 80, 0);
  ellipse(0, 0, tam * 0.3);
  pop();
}

function dibujarLuzCursor() {
  push();
  noStroke();
  for (let r = 120; r > 0; r -= 20) {
    fill(255, 180, 60, map(r, 0, 120, 18, 0));
    ellipse(mouseX, mouseY, r * 2);
  }
  pop();
}
