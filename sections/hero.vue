<template>
  <section class="hero">
    <div class="row">
      <div class="hero__content col-12">
        <h1 class="hero__title">
          Hi, <br/> 
          I'm Aleks <br/>
          Software Developer
        </h1>
        <h5 class="hero__text light">ReactJS / VueJs / HTML5 / CSS3</h5>
        <p class="caption">and i <span class="creative bold" @click="isActive = !isActive">love</span> to create.</p>
        <nuxt-link :to="{ path: '/', hash:'#portfolio'}">
          <div class="button ">
            Look Portfolio
          </div>
        </nuxt-link>
      </div>
      <div class="hero__icons" :class="{active: isActive}">
        <div class="hero-icon left">
          <img class="" src="/images/icon-1-1.png" alt="" />
        </div>
        <div class="hero-icon right">
          <img class="" src="/images/icon-2-2.png" alt="" />
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
      isActive: false
    }
  }
}
</script>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  &__content {
    z-index: 1;
  }
  &__text {
    margin: 12px 0;
  }

  .creative {
    user-select: none;
    cursor: pointer;
    display: inline-block;
    transform-origin: bottom;
    transition: 0.3s;
  }
  .creative:hover {
    transform: scale(1.15)
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

    .hero-icon {
      transition: 0.47s;
      
      &.left {
        margin-left: -25%;
        transform: translate(60%, 200%);
      }
      &.right {
        transform: translate(0, -200%);
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
  

  @media screen and (max-width: 719px) {
    align-items: flex-end;
    padding-bottom: 90px;

    &__icons {
      width: 80%;
      left: 50%;
      top: 25%;
      transform: translate(-50%, -25%);

      .hero-icon {
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

