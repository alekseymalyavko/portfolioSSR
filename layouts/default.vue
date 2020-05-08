<template>
  <div id="content">
    <Header :isScrolled="isScrolled" :isActive="isActive"/>
    <nuxt class="main container"/>
    <ColorGenerator/>
    <Social/>
    <Footer/>
    <Bg/>
  </div>
</template>
<script>
import Header from '~/components/main/header'
import Social from '~/components/main/social'
import Footer from '~/components/main/footer'
import Bg from '~/components/main/bg'
import ColorGenerator from '~/components/main/generator'

import debounceEvent from '~/middleware'

export default {
  components: {
    Header,
    Social,
    Footer,
    Bg,
    ColorGenerator
  },
  data() {
    return {
      limitPosition: 400,
      isScrolled: false,
      isActive: true,
      lastPosition: 0
    }
  },
  mounted: function () {
      window.addEventListener('scroll', debounceEvent(this.handleScroll, 100));
  },
  destroyed: function () {
      window.removeEventListener('scroll', debounceEvent(this.handleScroll, 100));
  },
  methods: {
    handleScroll: function() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.isScrolled = true;
      } 
      if (this.lastPosition > window.scrollY) {
        this.isScrolled = false;
      }
      if (window.scrollY < 40) {
        this.isActive = true
      } else {
        this.isActive = false
      }
      this.lastPosition = window.scrollY;
    }
  }
}
</script>
<style lang="scss">
  #__nuxt,
  #__layout,
  #content {
    height: 100%;
  }
  #content {
    z-index: 2;
    display: flex;
    flex-direction: column;

    .main {
      padding-top: 60px;
      flex: 1;
    }
  }
</style>
