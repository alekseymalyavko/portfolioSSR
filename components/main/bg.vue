<template>
	<canvas id="space" ref="space"></canvas>
</template>

<script>
export default {
  mounted () {
    this.setupBg();
  },
  methods: {
    setupBg: function() {
      window.requestAnimFrame = (function(){  return  window.requestAnimationFrame})();
      let canvas = this.$refs.space;
      let c = canvas.getContext("2d");

      let numStars = 1500;
      let starSize = 1;
      let radius = '0.'+Math.floor(Math.random() * 9) + 1;
      let focalLength = canvas.width *2;
      let centerX, centerY;

      let stars = [], star;
      let i;

      setStars();
      initializeStars();

      function executeFrame() {
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
        let pixelX, pixelY, pixelRadius;
        
        // Resize to the screen
        if(canvas.width != window.innerWidth || canvas.height != window.innerHeight){
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          setStars();
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
          pixelRadius = starSize * (focalLength / star.z);
          
          c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
          c.fillStyle = "rgba(10, 188, 92, "+star.o+")";
          // rgb(10, 188, 92)
          //c.fill();
        }
      }

      function setStars() {
        let media720 = window.matchMedia('screen and (max-width: 720px)');
        let media1280 = window.matchMedia('screen and (min-width: 1280px)');

        if (media720.matches) {
          numStars = 900;
          starSize = 0.75;
        } else if (media1280.matches) {
          numStars = 2300;
          starSize = 2;
        }
      }
      executeFrame();
    }
  }
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