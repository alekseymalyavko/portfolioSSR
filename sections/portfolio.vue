<template>
  <section class="portfolio">
    <h6 class="subtitle">my works</h6>
    <h2 class="title">PORTFOLIO</h2>

    <div class="portfolio__wrapper">
      
      <div class="portfolio__item" v-for="(progress, index) in [1,2,3,4,5,6]" :key="index">
        <Project/>
      </div>

    </div>
  </section>
</template>

<script>
import Project from '~/components/portfolio/project';

export default {
  components: {
    Project
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
      .project-item {
        .caption {
          margin: 5px 0;
        }
        .bold {
          font-weight: 300;
        }
        .text {
          margin-top: 5px;
          color: var(--white);
        }
      }
    }
    
    @media screen and (max-width: 719px) {
      &__item {
        width: 270px;
        height: 270px;
        padding: 25px;
      }
    }
  }
</style>

