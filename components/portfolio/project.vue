<template lang="html">
  <div class="project-item">
    <span class="bold">
      app
    </span>
    <h6 class="caption">
      METRICA
    </h6>
    <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
    <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
    <nuxt-link to="/portfolio/metrica">
      <div class="button ">
        More
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['pre-title', 'title', 'descr'],
  data() {
    return {
      
    }
  },
  
  methods: {
    
  }
}
</script>
<style lang="scss">
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
</style>