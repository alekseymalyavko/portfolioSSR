<template>
  <section class="services">
    <div data-animate="animated fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>

    <div class="row">
      <div class="col-3 services__wrapper" v-for="(service, index) in text.services" :key="index">
        <Service :icon="service.icon" :title="service.title" :descr="service.descr" :data-animate="`animated fadeInUp delay-${3*index}`" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }"/>
      </div>
      
    </div>

    <p class="services__note text" data-animate="animated fadeInDown delay-12" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      {{text.sectionNote}}
    </p>
  </section>
</template>

<script>
import Service from '~/components/services/service'

export default {
  props: ['text'],
  components: {
    Service
  },
  data() {
    return {

    }
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
  .services {
    &__note {
      margin-top: 35px;
      text-align: center;
      font-style: italic;
    }
    &__wrapper {
      margin-bottom: 35px;
    }
  }
</style>

