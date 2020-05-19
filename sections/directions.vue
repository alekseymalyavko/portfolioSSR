<template>
  <section class="directions">
    <h3 class="directions__heading heading" data-animate="animate__animated animate__fadeInUp" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      {{text.title}}
    </h3>
    <div class="row">  

      <div class="col-4" v-for="(direction, index) in text.directions" :key="index">
        <Count  :progress="direction.procent"  :title="direction.title" :descr="direction.descr" :data-animate="`animate__animated animate__fadeInUp delay-${3*index}`" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }"/>
      </div>

    </div>
  </section>
</template>

<script>
import Count from '~/components/directions/progress'

export default {
  props: ['text'],
  components: {
    Count
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
