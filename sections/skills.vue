<template>
  <section class="skills">
    <div data-animate="animate__animated animate__fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>
    
    <div class="row">
      <div class="col-6" data-animate="animate__animated animate__fadeInLeft delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <h3 class="heading">{{text.title}}</h3>
        <p class="text" v-for="(text, index) in text.descr" :key="index">
          {{text}}
        </p>
        <div class="button button_secondary">
          {{text.btn}}
        </div>
      </div>
      <div class="col-6" @mouseenter="handleAnimation(false)" @mouseleave="handleAnimation(true)"  data-animate="animate__animated animate__fadeInRight delay-6" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <div class="cube__wrapper" @mousedown="e => startEvent(e)" @mousemove="e => rotate(e)" @mouseup="e => finishEvent(e)">
          <div class="cube-container">
            <div class="cube" ref="cube" :style="{'transform': `${transform}`}">

              <div class="side" v-for="(skill, index) in text.skills" :key="index">
                <ul class="skills-list">
                  <li class="caption" v-for="(item, index) in skill" :key="index">
                    {{item}}
                  </li>
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
  props: ['text'],
  data() {
    return {
      cube: null,
      drag: false,
      x0: null,
      y0: null,
      transform: null
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
    handleAnimation: function(isOut) {
      if(isOut) {
        this.cube.style.animation = 'spin 20s infinite linear'
      } else {
        this.cube.style.animation = 'none';
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
          this.transform = `rotate3d(${+(-dy).toFixed(2)}, ${+(dx).toFixed(2)}, 0, ${+(0.4*d).toFixed(2)}deg) ${getComputedStyle(this.cube).transform.replace('none', '')}`; 
          this.x0 = x;
          this.y0 = y;
        }
      }
    },
    onWaypoint({el, going}) {
      if (going === this.$waypointMap.GOING_IN) {
        let naming = el.getAttribute('data-animate').split(' ');
        el.classList.add(...naming)
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

    

    .cube {
      animation: spin 20s infinite linear;
      height: 100%;
      width: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transform: rotateX(-20deg) rotateY(28deg);
      user-select: none;
      // transition: 0.35s;

      &.paused {
        animation-play-state:paused;
        
        .side {
          backface-visibility: hidden;
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
        border: 1px solid var(--active);
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--light-blue);
        transition: 0.35s;
        
        &:nth-child(1) {
          transform: translateZ(125px);
        }
        &:nth-child(2) {
          transform: rotateY(180deg) rotateX(0deg) translateZ(125px);
        }
        &:nth-child(3) {
          transform: rotateY(90deg) translateZ(125px);
        }
        &:nth-child(4) {
          transform: rotateY(-90deg) translateZ(125px);
        }
        &:nth-child(5) {
          transform: rotateX(90deg) translateZ(125px);
        }
        &:nth-child(6) {
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

      @keyframes spin {
        from {
          transform: rotateX(0) rotateY(0);
        }
        to {
          transform: rotateX(360deg) rotateY(360deg);
        }
      }
    }
  }

</style>

