<template>
  <section class="directions">
    <h3 class="directions__heading heading">My work areas</h3>

    <div class="row">  

      <div class="col-4" v-for="(progress, index) in directions" :key="index">
        <Count  :progress="progress.progress"  :title="progress.title" :descr="progress.descr"/>
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
}
</script>

<style lang="scss">
  .directions {

  }
</style>

