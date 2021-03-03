<template>
  <div id="content">
    <Header :content="content.header"/>
    <nuxt class="main container"/>
    <ColorGenerator :currentHexColor="currentHexColor" @changeColor="changeColor"/>
    <Social :content="content.social" data-animate="animated fadeInUp delay-6" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }"/>
    <Footer :content="content.footer" />
    <Bg :currentRgbaColor="currentRgbaColor[1]"/>
  </div>
</template>
<script>
import Header from '~/components/main/header'
import Social from '~/components/main/social'
import Footer from '~/components/main/footer'
import Bg from '~/components/main/bg'
import ColorGenerator from '~/components/main/generator'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Social,
    Footer,
    Bg,
    ColorGenerator
  },
  computed: mapGetters({
    content: 'getData',
  }),
  data() {
    return {
      currentHexColor:  '#0ABC5C',
      currentRgbaColor:  ['rgba(10, 185, 95, 0.2)', '10, 185, 95'],
    }
  },
  watch: {
    currentHexColor: function (val) {
      document.documentElement.style.setProperty('--active', val);
    },
    currentRgbaColor: function (val) {
      document.documentElement.style.setProperty('--light-active', val[0]);
      document.documentElement.style.setProperty('--light-active', val[0]);
    }
  },
  mounted: function () {
    this.currentHexColor = localStorage.getItem('hexColor') ? localStorage.getItem('hexColor') : this.currentHexColor;
    this.currentRgbaColor = localStorage.getItem('rgbaColor') ? JSON.parse(localStorage.getItem('rgbaColor')) : this.currentRgbaColor;
  },
  methods: {
    changeColor: function(colors) {
      this.currentHexColor = colors[0];
      this.currentRgbaColor = colors[1];

      localStorage.setItem('hexColor', colors[0]);
      localStorage.setItem('rgbaColor', JSON.stringify(colors[1]));
    },
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
      min-width: 320px;
      width: 100%;
    }
  }
</style>
