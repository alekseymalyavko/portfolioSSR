<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">Page not found 👽</h1>
    <h1 v-else>An error occurred</h1>
    <p>
      <nuxt-link to="/" class="link">Go to Main page</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  props: ['error'],
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

