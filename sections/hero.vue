<template>
  <section class="hero" v-waypoint="{ active: true, callback: onWaypoint }">
    <div class="row">
      <div class="hero__content col-12 animated"  :class="{'animated fadeInLeft': isActive}">
        <h1 class="hero__title" v-html="text.title"></h1>
        <h5 class="hero__text light">{{text.skills}}</h5>
        <p class="caption">
          {{text.caption1}} 
          <span class="creative bold" :title="text.creativeTitle" @click="setCreativeBg">{{text.creative}}</span> 
          {{text.caption2}}
        </p>
        <nuxt-link :to="{ path: '/', hash:'#portfolio'}">
          <div class="button ">
            {{text.btn}}
          </div>
        </nuxt-link>
      </div>
      <div class="hero__icons" :class="{active: isActive, filled: fillIcons}">
        <div class="hero-icon left">
          <svg xmlns="http://www.w3.org/2000/svg" width="301" height="454" preserveAspectRatio="xMidYMid meet" viewBox="0 0 301 454" >
            <path d="M2 452L119.933 2H181.083L298.142 452H233.497L150.508 121.86L67.5181 452H2Z"/>
          </svg>
        </div>
        <div class="hero-icon right">
          <svg xmlns="http://www.w3.org/2000/svg" width="533" height="454" preserveAspectRatio="xMidYMid meet" viewBox="0 0 533 454" >
            <path d="M236.911 452L152.419 121.827L68.8665 451.877H2.9043L121.636 2H183.201L268.759 330.301"/>
            <path d="M237.362 451.134L354.391 2H414.992L531 451.134H466.936L384.691 121.629L302.447 451.134H237.362Z"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: ['text'],
  components: {

  },
  data() {
    return {
      fillIcons: false,
      isActive: false,
    }
  },
  mounted() {

  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        setTimeout(() => this.isActive = true, 700)
      }
    },
    setCreativeBg() {
      this.fillIcons = true;
      this.$root.creativeBg = true;
      setTimeout( () => {
        this.fillIcons = false;
        this.$root.creativeBg = false
      }, 1700)
    }
  }
}
</script>

<style lang="scss">
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 none;
		transform: scale(0.75);
	}

	60% {
    box-shadow: 0 0 3px 10px var(--light-active);
		transform: scale(1.1);
	}

	100% {
    box-shadow: 0 0 0 0 none;
		transform: scale(0.75);
	}
}
.hero {
  display: flex;
  align-items: center;
  height: calc(100vh - 60px);
  min-height: 500px;
  position: relative;
  // overflow: hidden;

  &__content {
    z-index: 1;
    text-shadow: 3px 3px 5px #0000009e;
  }
  &__text {
    margin: 12px 0;
  }

  .creative {
    user-select: none;
    cursor: pointer;
    display: inline-block;
    padding: 0 4px;
    border-radius: 1px;
    transform-origin: bottom;
    transition: 0.3s;
    box-shadow: 0 0 0 0 var(--light-active);
    animation: pulse 2.65s infinite linear;
  }
  .creative:hover {
    animation-play-state: paused;
  }

  &__icons {
    position: absolute;
    display: flex;
    width: 60%;
    max-width: 666px;
    right: 0;
    top: 50%;
    transform: translate(0%, -50%);
    z-index: 0;

    &.filled {
      .hero-icon svg {
        fill: var(--dark-blue);
      }  
    }
    .hero-icon {
      transition: 0.70s;
      opacity: 0;
      
      svg {
        fill: transparent;
        transition: 0.35s;
        max-width: 100%;

        path {
          stroke: var(--active);
          stroke-width: 3;
        }
        &:hover {
          fill: var(--light-active)
        }
      }
      &.left {
        margin-left: -25%;
        transform: translate(60%, 200%);
        z-index: 2;
      }
      &.right {
        transform: translate(0, -200%);
      }
    }
    
    &.active {
      .hero-icon {
        opacity: 1;
        &.left {
          transform: translate(60%, 0);
        }
        &.right {
          transform: translate(0, 0);
        }
      }
    }
  }
  

  @media screen and (max-width: 745px) {
    align-items: flex-end;
    padding-bottom: 12vh;

    &__icons {
      width: 80%;
      left: 50%;
      top: 25%;
      transform: translate(-50%, -50%);

      .hero-icon {
        svg {
          // width: 100%;
        }
        &.left {
          transform: translate(-80vw, 0);
        }
        &.right {
          transform: translate(80vw, 0);
        }
      }
      
      &.active {
        .hero-icon {
          &.left {
            transform: translate(60%, 0);
          }
          &.right {
            transform: translate(0, 0);
          }
        }
      }
    }
  }
  @media screen and (max-width: 330px) {
    padding-bottom: 30px;
  }
}

</style>

