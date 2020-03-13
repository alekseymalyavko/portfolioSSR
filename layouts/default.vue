<template>
  <div class="container">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/main/header'
import Footer from '~/components/main/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
.container {
  /* min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
