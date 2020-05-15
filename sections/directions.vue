<template>
  <section class="directions">
    <h3 class="directions__heading heading" data-animate="animate__animated animate__fadeInUp" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      My work areas
    </h3>
    <div class="row">  

      <div class="col-4" v-for="(progress, index) in directions" :key="index">
        <Count  :progress="progress.progress"  :title="progress.title" :descr="progress.descr" :data-animate="`animate__animated animate__fadeInUp delay-${3*index}`" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }"/>
      </div>

    </div>
  </section>
</template>

<script>
import Count from '~/components/directions/progress'

export default {
  components: {
    Count
  },
  data() {
    return {
      directions: [
        {
          title: 'Web -development',
          descr: 'Creating web applications using front-end and back-end technologies',
          progress: 56
        },
        {
          title: 'Web -development',
          descr: 'Creating web applications',
          progress: 78
        },
        {
          title: 'Web -development',
          descr: 'Creating web applications using front-end',
          progress: 49
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

