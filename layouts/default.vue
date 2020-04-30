<template>
  <div class="content">
    <Header :isScrolled="isScrolled" :isActive="isActive"/>
    <nuxt/>
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

import debounceEvent from '~/middleware'

export default {
  components: {
    Header,
    Social,
    Footer,
    Bg
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
<style>

</style>
