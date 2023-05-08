console.log('henlo');

// canvas
const canvas = document.querySelector('.webgl');
console.log(canvas);

// window size
const sizes = {
    x: window.innerWidth,
    y: window.innerHeight
}

// scene
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'pink' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.x / sizes.y);
camera.position.z = 3
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.x, sizes.y);
renderer.render(scene, camera);
