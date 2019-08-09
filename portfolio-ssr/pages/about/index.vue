<template>
  <div>
    About Page
    <p> {{ title }} </p>
    <nuxt-link to="/">Main Page</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {
    // AppLogo
  },
  data () {
    console.log(1)
    return {
      title: 'Hello World!'
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  // head () {
  //   return {
  //     title: this.title,
  //     meta: [
  //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
  //       { hid: 'description', name: 'description', content: 'My custom description' }
  //     ]
  //   }
  // },
  asyncData (context) {
    console.log(2)
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    axios.get('lol.com')
    return { title: 'World' }
  },
}
</script>

<style>
</style>