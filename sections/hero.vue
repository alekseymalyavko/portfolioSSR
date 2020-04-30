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
        <p class="caption">and i <span class="bold">love</span> to create.</p>
        <nuxt-link :to="{ path: '/', hash:'#portfolio'}">
          <div class="button ">
            Look Portfolio
          </div>
        </nuxt-link>
      </div>
      <div class="hero__icons">
        <div class="hero__icons__left">
          <svg xmlns="http://www.w3.org/2000/svg" width="134" height="199" viewBox="0 0 134 199" fill="none">
            <path d="M1 198.326L53.5654 1H80.8215L132.998 198.326H104.184L67.1934 53.5588L30.203 198.326H1Z" stroke="#0ABC5C"/>
          </svg>
        </div>
        <div class="hero__icons__right">
          <svg xmlns="http://www.w3.org/2000/svg" width="237" height="201" viewBox="0 0 237 201" fill="none">
            <path d="M1.27344 198.326L53.8388 1H81.0949L118 147L104.457 198.326L67.4669 53.5588L30.4764 198.326H1.27344Z" stroke="#0ABC5C"/>
            <path d="M104.07 198.326L156.635 1H183.891L236.067 198.326H207.253L170.263 53.5588L133.273 198.326H104.07Z" stroke="#0ABC5C"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
    
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

  &__text {
    margin: 12px 0;
  }

  &__icons {
    position: absolute;
    display: none;
  }
}

</style>

