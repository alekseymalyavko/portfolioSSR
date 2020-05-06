<template lang="html">
  <div class="service">
    <div class="service__icon">
      <i>ICON</i>
    </div>
    <div class="caption">
      {{title}}
    </div>
    <div class="text">
      {{descr}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'descr'],
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      border: 2px solid var(--green);
    }

    .caption {
      text-transform: uppercase;
      margin: 25px 0 10px;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
</style>