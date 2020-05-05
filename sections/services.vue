<template>
  <section class="services">
    <h6 class="subtitle">what i do</h6>
    <h2 class="title">services</h2>

    <div class="row">
      <div class="col-3" v-for="(service, index) in services" :key="index">
        <Service :title="service.title" :descr="service.descr"/>
      </div>
      
    </div>

    <p class="services__note text">
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

