import * as THREE from 'three';

// 1. Escena, Cámara y Renderizador (Lo básico)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10; // Alejamos la cámara

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#mi-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Buenas prácticas: actualizar al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 2. Luz (Para que la luna tenga sombras y volumen)
const luz = new THREE.DirectionalLight(0xffffff, 1.5);
luz.position.set(5, 3, 5); 
scene.add(luz);

// 3. Crear la Luna
const geometriaLuna = new THREE.SphereGeometry(2, 32, 32);
const materialLuna = new THREE.MeshStandardMaterial({ color: 0xcccccc }); 
const luna = new THREE.Mesh(geometriaLuna, materialLuna);
scene.add(luna);

// 4. Crear las Estrellas (Método para principiantes)
const geometriaEstrella = new THREE.SphereGeometry(0.05, 8, 8); 
const materialEstrella = new THREE.MeshBasicMaterial({ color: 0xffffff }); 

const grupoEstrellas = new THREE.Group(); 

// Bucle para crear 300 estrellas
for (let i = 0; i < 300; i++) {
    const estrella = new THREE.Mesh(geometriaEstrella, materialEstrella);
    
    // Posición aleatoria
    estrella.position.x = (Math.random() - 0.5) * 40;
    estrella.position.y = (Math.random() - 0.5) * 40;
    estrella.position.z = (Math.random() - 0.5) * 40;
    
    grupoEstrellas.add(estrella);
}

scene.add(grupoEstrellas);

// 5. Bucle de Animación
function animate() {
    requestAnimationFrame(animate);

    // Girar la luna
    luna.rotation.y += 0.005;

    // Girar todas las estrellas al mismo tiempo
    grupoEstrellas.rotation.y -= 0.002;
    grupoEstrellas.rotation.x -= 0.001;

    renderer.render(scene, camera);
}

animate();
