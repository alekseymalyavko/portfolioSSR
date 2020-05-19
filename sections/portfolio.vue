<template>
  <section class="portfolio">
    <div data-animate="animate__animated animate__fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>
    <div class="portfolio__wrapper">
      
      <div class="portfolio__item" v-for="(info, index) in text.projects" :key="index" :data-animate="`animate__animated animate__fadeInUp delay-${2*index}`" v-waypoint="{ active: true, callback: onWaypoint, options: undefined }">
        <Project :info="info"/>
      </div>

    </div>
  </section>
</template>

<script>
import Project from '~/components/portfolio/project';

export default {
  props: ['text'],
  components: {
    Project
  },
  methods: {
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
  .portfolio {

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    &__item {
      position: relative;
      top: 0;
      border: 1px solid var(--active);
      width: 360px;
      height: 360px;
      margin: 10px;
      display: flex;
      align-items: center;
      padding: 30px;
      transition: 0.35s ease-out;

      &:hover {
        top: -8px;
        background: var(--light-active)
      }
    }
    
    @media screen and (max-width: 370px) {
      &__item {
        width: 330px;
        height: 330px;
      }
    }
    @media screen and (max-width: 330px) {
      &__item {
        width: 270px;
        height: 270px;
        padding: 25px;
      }
    }
  }
</style>

