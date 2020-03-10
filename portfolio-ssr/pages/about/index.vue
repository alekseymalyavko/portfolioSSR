<template>
  <div>
    <p class="lol" v-on:click="lol"> {{ title }} </p>
    <nuxt-link to="/">Main Page</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'About Page'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'About description' }
      ]
    }
  },
  methods: {
    lol() {
      console.log(123)
    }
  }
}
</script>

<style>
</style>