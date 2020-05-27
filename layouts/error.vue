<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">{{content.error.notFound}}</h1>
    <h1 v-else>{{content.error.title}}</h1>
    <p>
      <nuxt-link to="/" class="link">{{content.error.goBack}}</nuxt-link>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: ['error'],
  computed: mapGetters({
    content: 'getData',
  }),
  data() {
    return {
      title: 'Error Page'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'description' }
      ]
    }
  },
}
</script>
<style lang="scss">
  .error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>

