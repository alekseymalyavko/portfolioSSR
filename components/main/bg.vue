<template>
	<canvas id="space" ref="space"></canvas>
</template>

<script>
export default {
  data() {
    return {
      numStars: null,
      starSize: null,
      canvas: null,
      bg: null,
      focalLength: null,
      centerX: null,
      centerY: null,
      stars: [],
      star: null,
    }
  },
  mounted () {
    // this.setupBg();
    this.setupSpace();
  },
  methods: {
    setupBg: function() {
      window.requestAnimFrame = (function(){  return  window.requestAnimationFrame})();
      let canvas = this.$refs.space;
      let bg = canvas.getContext("2d");

      let numStars = 1500;
      let starSize = 1;
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
        
        if(canvas.width != window.innerWidth || canvas.height != window.innerHeight){
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          setStars();
          initializeStars();
        }
        // // if(warp==0) {
          bg.fillStyle = "rgba(0,10,20,1)";
          bg.fillRect(0,0, canvas.width, canvas.height);
        // // }
        for(i = 0; i < numStars; i++){
          star = stars[i];
          
          pixelX = (star.x - centerX) * (focalLength / star.z);
          pixelX += centerX;
          pixelY = (star.y - centerY) * (focalLength / star.z);
          pixelY += centerY;
          pixelRadius = starSize * (focalLength / star.z);
          
          bg.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
          bg.fillStyle = "rgba(10, 188, 92, "+star.o+")";
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
    },
    setupSpace: function() {
      window.requestAnimFrame = (function(){  return  window.requestAnimationFrame})();
      this.canvas = this.$refs.space;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.bg = this.canvas.getContext("2d");
      this.focalLength = this.canvas.width * 0.65;
      
      this.setStars();
      this.initializeStars();
      this.executeFrame();
    },
    setStars: function() {
      let media720 = window.matchMedia('screen and (max-width: 720px)');
      let media1280 = window.matchMedia('screen and (min-width: 1280px)');

      if (media720.matches) {
        this.numStars = 900;
        this.starSize = 0.75;
      } else if (media1280.matches) {
        this.numStars = 2300;
        this.starSize = 1.25;
      } else {
        this.numStars = 1500;
        this.starSize = 1;
      }
    },
    initializeStars: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.centerX = this.canvas.width / 2;
      this.centerY = this.canvas.height / 2;

      this.stars = [];
      for(let i = 0; i < this.numStars; i++){
        let star = {
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          z: Math.random() * this.canvas.width,
          o: '0.'+Math.floor(Math.random() * 99) + 1
        };
        this.stars.push(star);
      }
      console.log(this.stars)
    },
    drawStars: function() {
      let pixelX, pixelY, pixelRadius;

      if(this.canvas.width != window.innerWidth || this.canvas.height != window.innerHeight) {
        this.setStars();
        this.initializeStars();
      }
      // // if(warp==0) {
        this.bg.fillStyle = "rgba(0,10,20,1)";
        this.bg.fillRect(0,0, this.canvas.width, this.canvas.height);
      // // }
      for(let i = 0; i < this.numStars; i++){
        let star = this.stars[i];
        
        pixelX = (star.x - this.centerX) * (this.focalLength / star.z);
        pixelX += this.centerX;
        pixelY = (star.y - this.centerY) * (this.focalLength / star.z);
        pixelY += this.centerY;
        pixelRadius = this.starSize * (this.focalLength / star.z);
        
        this.bg.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        this.bg.fillStyle = "rgba(10, 188, 92, "+star.o+")";
      }
    },
    moveStars: function() {
      for(let i = 0; i < this.numStars; i++){
        let star = this.stars[i];
        star.z--;
        if(star.z <= 0){
          star.z = this.canvas.width;
        }
      }
    },
    executeFrame: function() {
      requestAnimFrame(this.executeFrame);
      this.moveStars();
      this.drawStars();
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
    width: 100%;
    height: 100%;
    z-index: -1;
	}
</style>