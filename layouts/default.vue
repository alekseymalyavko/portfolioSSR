<template>
  <div id="content">
    <style>
      :root {
        --active: {{currentHexColor}};
        --light-active: {{currentRgbaColor[0]}};
      }
    </style>
    <Header :isScrolled="isScrolled" :isActive="isActive"/>
    <nuxt class="main container"/>
    <ColorGenerator :currentHexColor="currentHexColor" @changeColor="changeColor"/>
    <Social/>
    <Footer/>
    <Bg :currentRgbaColor="currentRgbaColor[1]"/>
  </div>
</template>
<script>
import Header from '~/components/main/header'
import Social from '~/components/main/social'
import Footer from '~/components/main/footer'
import Bg from '~/components/main/bg'
import ColorGenerator from '~/components/main/generator'
import debounceEvent from '~/middleware'
import 'animate.css';

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
      lastPosition: 0,
      currentHexColor:  '#0ABC5C',
      currentRgbaColor:  ['rgba(10, 185, 95, 0.2)', '10, 185, 95'],
    }
  },
  mounted: function () {
    this.currentHexColor = localStorage.getItem('hexColor') ? localStorage.getItem('hexColor') : this.currentHexColor;
    this.currentRgbaColor = localStorage.getItem('rgbaColor') ? JSON.parse(localStorage.getItem('rgbaColor')) : this.currentRgbaColor;

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
    },
    changeColor: function(colors) {
      this.currentHexColor = colors[0];
      this.currentRgbaColor = colors[1];

      localStorage.setItem('hexColor', colors[0]);
      localStorage.setItem('rgbaColor', JSON.stringify(colors[1]));
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
