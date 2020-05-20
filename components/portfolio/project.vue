<template lang="html">
  <div class="project-item">
    <span class="bold">
      {{info.type}}
    </span>
    <h6 class="caption">
      {{info.title}}
    </h6>
    <p class="light">{{info.stack}}</p>
    <p class="text">{{info.descr}}</p>
    <nuxt-link :to="`/portfolio${info.link}`">
      <div class="button ">
        More
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {
      
    }
  },
  
  methods: {
    
  }
}
</script>
<style lang="scss">
  .project-item {
    .caption {
      text-transform: uppercase; 
      margin: 5px 0;

      & + .light {
        margin: 5px 0;
      }
    }
    .text {
      margin-top: 5px;
      color: var(--white);
    }
    .button {
      margin-top: 13px;
    }
  }
</style>