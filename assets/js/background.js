import * as THREE from "three";

export default function init() {
  var scene,
    camera,
    renderer,
    container,
    HEIGHT,
    WIDTH,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    count,
    i,
    color,
    size,
    materials = [],
    mouseX = 0,
    mouseY = 0,
    windowHalfX,
    windowHalfY,
    cameraZ,
    fogHex,
    fogDensity,
    parameters = {},
    parameterCount,
    particles;

  function initBackground() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    fieldOfView = 75; //if you change this, shit gets weird
    aspectRatio = WIDTH / HEIGHT;
    nearPlane = 1;
    farPlane = 3000;

    cameraZ = farPlane / 3; // 1k
    fogHex = 0x000000; // black!!!
    fogDensity = 0.0007;

    camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    camera.position.z = cameraZ;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogHex, fogDensity);

    container = document.getElementById("irhhui");
    if (!container) {
      container = document.createElement("div");
      container.id = "background";
      document.body.appendChild(container);
    }

    const positions = [];
    count = 1000; // add more for lag

    for (i = 0; i < count; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      positions.push(x, y, z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    parameters = [
      [[1, 1, 0.5], 5],
      [[0.95, 1, 0.5], 4],
      [[0.9, 1, 0.5], 3],
      [[0.85, 1, 0.5], 2],
      [[0.8, 1, 0.5], 1],
    ];
    parameterCount = parameters.length;

    for (i = 0; i < parameterCount; i++) {
      color = parameters[i][0];
      size = parameters[i][1];

      materials[i] = new THREE.PointsMaterial({
        size: size,
      });

      particles = new THREE.Points(geometry, materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      scene.add(particles);
    }

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(WIDTH, HEIGHT); //should fullscreen everything

    container.appendChild(renderer.domElement); //go time

    // events
    window.addEventListener("resize", onWindowResize, false);
    document.addEventListener("mousemove", onDocumentMouseMove, false);
    document.addEventListener("touchstart", onDocumentTouchStart, false);
    document.addEventListener("touchmove", onDocumentTouchMove, false);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    var time = Date.now() * 0.00005;

    camera.position.x += (mouseX - camera.position.x) * 0.005;
    camera.position.y += (-mouseY - camera.position.y) * 0.005;

    camera.lookAt(scene.position);

    for (i = 0; i < scene.children.length; i++) {
      var object = scene.children[i];

      if (object instanceof THREE.Points) {
        object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      }
    }

    for (i = 0; i < materials.length; i++) {
      color = parameters[i][0];
      // eslint-disable-next-line no-unused-vars
      let h = ((360 * (color[0] + time)) % 360) / 360;
      //materials[i].color.setHSL(h, color[1], color[2]);
      //this sets a hue shift, looks kinda funny tho, but maybe for june
    }

    renderer.render(scene, camera);
  }

  function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
  }

  function onDocumentTouchStart(e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  initBackground();
  animate();

  return function cleanup() {
    window.removeEventListener("resize", onWindowResize);
    document.removeEventListener("mousemove", onDocumentMouseMove);
    document.removeEventListener("touchstart", onDocumentTouchStart);
    document.removeEventListener("touchmove", onDocumentTouchMove);
    if (renderer) {
      renderer.dispose();
    }
    if (scene) {
      scene.children.forEach((object) => {
        if (object instanceof THREE.Points) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    }
    if (container && container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };
}
