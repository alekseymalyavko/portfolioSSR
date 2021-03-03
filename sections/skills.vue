<template>
  <section class="skills">
    <div data-animate="animated fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>
    
    <div class="row">
      <div class="col-6" data-animate="animated fadeInLeft delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <h3 class="heading">{{text.title}}</h3>
        <p class="text" v-for="(text, index) in text.descr" :key="index">
          {{text}}
        </p>
        <nuxt-link to="#contacts">
          <div class="button button_secondary">
            {{text.btn}}
          </div>
        </nuxt-link>
      </div>
      <div class="col-6" 
        v-touch:start="e => handleAnimation(false)"
        @mouseenter="handleAnimation(false)" 
        @mouseleave="handleAnimation(true)"  
        data-animate="animated fadeInRight delay-6" 
        v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <div class="cube__wrapper" 
          v-touch:start="e => startEvent(e)"
          v-touch:moving="e => rotate(e)"
          v-touch:end="e => finishEvent(e)"
          :class="{'touch-device': isTouch}"
          @mousedown="e => startEvent(e)" 
          @mousemove="e => rotate(e)" 
          @mouseup="e => finishEvent(e)">
          <div class="cube-container">
            <div class="cube" 
                 ref="cube"
                 @transitionend="setTransition"
                 :class="{'active-cube': isActive}" 
                 :style="{'transform': `${transform}`}">

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
      isActive: false,
      isTouch: false,
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
      if (event.touches) {
        this.isTouch = true
        return event.touches[0]
      } else {
        return event
      }
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
    setTransition: function (event) {
      if (event.currentTarget == event.srcElement) {
        this.isActive = !this.isActive;
      }
    },
    handleAnimation: function(isOut) {
      const curerntTransf = getComputedStyle(this.cube).transform;
      if(isOut) {
        this.cube.style.transform = '';
        this.cube.style.transition = '';
      } else {
        this.cube.style.transition = 'none'
        this.cube.style.transform = curerntTransf;
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
        this.isActive = true;
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
    // animation: spin 20s infinite linear;
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(28deg);
    user-select: none;

    transition: transform 20s linear;
    &.active-cube {
      transform: rotateX(380deg) rotateY(380deg);
    }


    &__wrapper {
      padding: 80px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: grab;

      &.touch-device {
        touch-action: pan-x;
      }
    }

    &-container {
      --cube-size: 260px;
      height: var(--cube-size);
      width: var(--cube-size);
      position: relative;
      perspective: 600px;
      perspective-origin: 50% 50%;
      transition: .3s all ease;
    }

    .side {
      --side-size: 130px;
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
        transform: translateZ(var(--side-size));
      }
      &:nth-child(2) {
        transform: rotateY(180deg) rotateX(0deg) translateZ(var(--side-size));
      }
      &:nth-child(3) {
        transform: rotateY(90deg) translateZ(var(--side-size));
      }
      &:nth-child(4) {
        transform: rotateY(-90deg) translateZ(var(--side-size));
      }
      &:nth-child(5) {
        transform: rotateX(90deg) translateZ(var(--side-size));
      }
      &:nth-child(6) {
        transform: rotateX(-90deg) rotateZ(-180deg) translateZ(var(--side-size));
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
    @media screen and (max-width: 745px) {
      &__wrapper {
        padding-top: 130px;
      }
    }
    @media screen and (max-width: 420px) {
      &-container {
        --cube-size: 230px;
      }
      .side {
        --side-size: 115px;
      }
    }
  }
}
</style>
