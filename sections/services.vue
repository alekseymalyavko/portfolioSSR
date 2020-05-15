<template>
  <section class="services">
    <div data-animate="animate__animated animate__fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">what i do</h6>
      <h2 class="title">services</h2>
    </div>

    <div class="row">
      <div class="col-3" v-for="(service, index) in services" :key="index">
        <Service :title="service.title" :descr="service.descr" :data-animate="`animate__animated animate__fadeInUp delay-${3*index}`" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }"/>
      </div>
      
    </div>

    <p class="services__note text" data-animate="animate__animated animate__fadeInDown delay-12" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      Adasd asda sd asdasdasd asdasdasd asda sdasdasdasd aasdasd.
    </p>
  </section>
</template>

<script>
import Service from '~/components/services/service'

export default {
  components: {
    Service
  },
  data() {
    return {
      services: [
        {
          title: 'title asda',
          descr: 'aadasd asdasdasd asdasdasd asdasdasd '
        },
        {
          title: 'title asdaasd',
          descr: 'descr asdasd asdasd asd'
        },
        {
          title: 'title ads asdadxa',
          descr: 'descr asda dasdasda asdasdasd asdasd'
        },
        {
          title: 'title asdadsasd',
          descr: 'descr asd asdasdasd asdasd'
        }
      ]
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
      margin-top: 70px;
      text-align: center;
      font-style: italic;
    }
  }
</style>

