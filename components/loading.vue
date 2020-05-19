<template>
  <div class="page-loader" v-if="loading">
    <p>Загрузка...</p>
    <p>Загрузка...</p>
    <p>Загрузка...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      console.log(12123)
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  display: center;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  font-size: 30px;
  z-index: 99999;
}
</style>