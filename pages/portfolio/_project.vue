<template>
  <div>
    <p> PROJECT {{title}}</p>
  </div>
</template>

<script>
export default {
  validate({ params, query }) {
    console.log(123, { params, query })
    return true // 
    // return false // 
  },
  data() {
    return {
      title: this.$route.params.project
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
    
  },
  mounted() {
    console.log(1, this.$route)
    console.log(2, this.$route.params.project)
  },
}
</script>

<style>
</style>