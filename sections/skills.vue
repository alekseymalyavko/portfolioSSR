<template>
  <section class="skills">
    <h6 class="subtitle">my background</h6>
    <h2 class="title">Skills & Experience</h2>

    <div class="row">
      <div class="col-6">
        <h3 class="heading">My work Experience</h3>
        <p class="text">
          Aasdasdasd asdasdasd asdasdasd asdasdasd adfsaf asdasdasd asdasdasd asdasdasd asdasdasd asdasda asdasdasd asdasdasd
        </p>
        <p class="text">
          Aasdasdasd asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd adfsaf asdasdasd asdasdasd asdasdasd asdasdasd asdasda asdasdasd asdasdasd
        </p>
        <div class="button button_secondary">
          Look
        </div>
      </div>
      <div class="col-6">
        <div class="cube__wrapper" @mousedown="e => startEvent(e)" @mousemove="e => rotate(e)" @mouseup="e => finishEvent(e)">
          <div class="cube-container">
            <div class="cube" ref="cube">
              <div class="side front">
                <ul class="skills-list">
                  <li class="caption">HTML</li>
                  <li class="caption">CSS</li>
                  <li class="caption">SCSS</li>
                  <li class="caption">JS</li>
                </ul>
              </div>
              <div class="side back">
                <ul class="skills-list">
                  <li class="caption">VueJS</li>
                  <li class="caption">ReactJs</li>
                </ul>
              </div>
              <div class="side right">
                <ul class="skills-list">
                  <li class="caption">jQuery</li>
                  <li class="caption">ChartJS</li>
                </ul>
              </div>
              <div class="side left">
                <ul class="skills-list">
                  <li class="caption">WordPress</li>
                  <li class="caption">OpenCart</li>
                </ul>
              </div>
              <div class="side top">
                <ul class="skills-list">
                  <li class="caption">NodeJS</li>
                  <li class="caption">Express</li>
                  <li class="caption">NuxtJs</li>
                  <li class="caption">MongoDb</li>
                </ul>
              </div>
              <div class="side bottom">
                <ul class="skills-list">
                  <li class="caption">Webpack</li>
                  <li class="caption">Gulp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      cube: null,
      drag: false,
      x0: null,
      y0: null
    }
  },
  mounted() {
    this.cube = this.$refs.cube;
  },
  methods: {
    getEvent: function(event) {
      // return event.touches ? event.touches[0] : event;
      return event
    },
    startEvent: function(event) {
      let e = this.getEvent(event);
      this.drag = true;
      this.x0 = e.clientX;
      this.y0 = e.clientY;
    },
    finishEvent: function(event) {
      if(this.drag) {
        this.drag = false;
        this.x0 = this.y0 = null;
      }
    },
    rotate: function(event) {
      if(this.drag) {
        let e = this.getEvent(event), 
            x = e.clientX, 
            y = e.clientY, 
            dx = x - this.x0, 
            dy = y - this.y0, 
            d = Math.hypot(dx, dy);
        if(d) {                  
          this.cube.style.transform = `rotate3d(${+(-dy).toFixed(2)}, ${+(dx).toFixed(2)}, 0, ${+(0.4*d).toFixed(2)}deg) ${getComputedStyle(this.cube).transform.replace('none', '')}`
          this.x0 = x;
          this.y0 = y;
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .skills {
    .row {
      align-items: center;
    }

    &__content {
      display: flex;
      justify-content: space-between;
    }

    &__text {
      width: 50%;

    }

    .cube {
      animation: spin 20s infinite linear;
      height: 100%;
      width: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transform: rotateX(-20deg) rotateY(28deg);
      user-select: none;
      // transition: 0.35s;

      &:hover {
        animation-play-state:paused;

        .side {
          // backface-visibility: hidden;
        }
      }

      &__wrapper {
        padding: 80px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: grab;
      }

      &-container {
        height: 250px;
        width: 250px;
        position: relative;
        perspective: 600px;
        perspective-origin: 50% 50%;
        transition: .3s all ease;
      }

      .side {
        height: 100%;
        width: 100%;
        position: absolute;
        text-align: center;
        border: 1px solid var(--green);
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--light-blue);
        transition: 0.35s;

        // &:hover {
        //   background: var(--light-green);
        // }

        &.front {
          transform: translateZ(125px);
        }
        &.back {
          transform: rotateY(180deg) rotateX(0deg) translateZ(125px);
        }
        &.left {
          transform: rotateY(-90deg) translateZ(125px);
        }
        &.right {
          transform: rotateY(90deg) translateZ(125px);
        }
        &.top {
          transform: rotateX(90deg) translateZ(125px);
        }
        &.bottom {
          transform: rotateX(-90deg) rotateZ(-180deg) translateZ(125px);
        }
      }
      .skills-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        
        li {
          margin: 10px 0;
        }
      }

      @-webkit-keyframes spin {
        from {
          transform: rotateX(0) rotateY(0) rotateZ(0);
        }
        to {
          transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
      }
    }
  }

</style>

