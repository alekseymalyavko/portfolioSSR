<template>
	<canvas id="space" ref="space"></canvas>
</template>

<script>
export default {
  props: ['currentRgbaColor'],
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
    this.setupSpace();
  },
  methods: {
    setupSpace: function() {
      window.requestAnimFrame = (function(){  return  window.requestAnimationFrame})();
      this.canvas = this.$refs.space;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.bg = this.canvas.getContext("2d");
      this.focalLength = this.canvas.width;
      
      this.initializeStars();
      this.executeFrame();
    },
    setStars: function() {
      let media745px = window.matchMedia('screen and (max-width: 745px)');
      let media1450 = window.matchMedia('screen and (min-width: 1450px)');

      if (media745px.matches) {
        this.numStars = 800;
        this.starSize = 0.85;
        this.focalLength = this.canvas.width * 2;
      } else if (media1450.matches) {
        this.numStars = 1800;
        this.starSize = 1.25;
        this.focalLength = this.canvas.width * 0.75;
      } else {
        this.numStars = 1300;
        this.starSize = 1;
      }
    },
    initializeStars: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.centerX = this.canvas.width / 2;
      this.centerY = this.canvas.height / 2;

      this.setStars();

      this.stars = [];
      for(let i = 0; i < this.numStars; i++){
        let star = {
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          z: Math.random() * this.canvas.width * 2,
          o: '0.'+Math.floor(Math.random() * 99)
        };
        this.stars.push(star);
      }
    },
    drawStars: function() {
      let pixelX, pixelY, pixelRadius;
      let color = this.currentRgbaColor;
      let isBgCreative = this.$root.creativeBg || false;

      // if(this.canvas.width != window.innerWidth || this.canvas.height != window.innerHeight) {
      if(this.canvas.width != window.innerWidth) {
        this.initializeStars();
      }
      this.bg.fillStyle = 'rgba(0,10,20,0.3)';
      
      if(!isBgCreative) {
        this.bg.fillRect(0,0, this.canvas.width, this.canvas.height);
      }
      for(let i = 0; i < this.numStars; i++){
        let star = this.stars[i];
        
        pixelX = (star.x - this.centerX) * (this.focalLength / star.z);
        pixelX += this.centerX;
        pixelY = (star.y - this.centerY) * (this.focalLength / star.z);
        pixelY += this.centerY;
        pixelRadius = this.starSize * (this.focalLength / star.z) * 1.5;
        
        this.bg.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        this.bg.fillStyle = `rgba(${this.currentRgbaColor}, ${star.o})`;
      }
    },
    moveStars: function() {
      for(let i = 0; i < this.numStars; i++){
        let star = this.stars[i];
        star.z--;
        if(star.z <= 0){
          star.z = this.canvas.width * 2;
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