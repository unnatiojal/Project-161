AFRAME.registerComponent("bowling-balls", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var  ball = document.createElement("a-entity");
  
          ball.setAttribute("gltf-model", "./assets/bowling_ball/scene.gltf");
  
          ball.setAttribute("scale", { x: 0.03, y: 0.03,  z: 0.03});
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: -0.5,
            y: pos.y-1.2,
            z: -3.5,
          });
  
          var camera = document.querySelector("#camera").object3D;
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(ball);
        }
      });
    },
  });
  