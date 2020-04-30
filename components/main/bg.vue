<template>
  <!-- <canvas id="Canvas2D" width="600" height="300">Internet Explorer Not Supported :(</canvas> -->
	<canvas id="space"></canvas>
	<!-- <div></div> -->
</template>

<script>
export default {
  mounted () {
    setup();
  }
}
// function setup() {
// var fov = 500;

// var canvas = document.getElementById('Canvas2D');
// var c = canvas.getContext('2d');
// var SCREEN_WIDTH = 600; 
// var SCREEN_HEIGHT = 300; 
// var points = [];
// var HALF_WIDTH = SCREEN_WIDTH / 2; 
// var HALF_HEIGHT = SCREEN_HEIGHT / 2; 
// var numPoints = 1000; 

// function draw3Din2D(point3d) {  
// 	let x3d = point3d[0];
// 	let y3d = point3d[1]; 
// 	let z3d = point3d[2]; 
// 	var scale = fov/(fov+z3d); 
// 	var x2d = (x3d * scale) + HALF_WIDTH;	
// 	var y2d = (y3d * scale)  + HALF_HEIGHT;
	
// 	c.lineWidth= scale; 
// 	c.strokeStyle = "rgb(255,255,255)"; 	
// 	c.beginPath();
// 	c.moveTo(x2d,y2d); 
// 	c.lineTo(x2d+scale,y2d); 
// 	c.stroke(); 
// }

// function initPoints() {
// 	for (let i=0; i < numPoints; i++) {
// 		let point = [(Math.random()*400)-200, (Math.random()*400)-200 , (Math.random()*400)-200 ];
// 		points.push(point); 
// 	}
// }
// function render() {
// 	c.fillStyle="rgb(0,0,0)";
//   c.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);

// 	for (let i=0; i < numPoints; i++) {
// 		let point3d = points[i]; 
// 		let z3d = point3d[2]; 
// 		z3d-=4; 
// 		if(z3d<-fov) z3d +=400; 
// 		point3d[2] = z3d; 
// 		draw3Din2D(point3d); 
// 	}
// }
// initPoints();
// var loop = setInterval(
//   function() {
//     render();
//   }, 50);
// }
function setup() {
window.requestAnimFrame = (function(){  return  window.requestAnimationFrame})();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame(){
  
if(animate)
  requestAnimFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;
  
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  // if(warp==0) {
		c.fillStyle = "rgba(0,10,20,1)";
		c.fillRect(0,0, canvas.width, canvas.height);
	// }
  // c.fillStyle = "rgba(209, 255, 255, "+radius+")";
  for(i = 0; i < numStars; i++){
    star = stars[i];
    
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);
    
    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = "rgba(10, 188, 92, "+star.o+")";
    // rgb(10, 188, 92)
    //c.fill();
  }
}
executeFrame();
}


</script>

<style lang="scss">
  #space {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
	}
</style>