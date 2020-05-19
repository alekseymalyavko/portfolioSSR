<template lang="html">
  <div class="service">
    <div class="service__icon">

      <DesignIcon v-if="icon === 'design'"/>
      <DevelopmentIcon v-if="icon === 'development'"/>
      <SeoIcon v-if="icon === 'seo'"/>
      <SupportIcon v-if="icon === 'support'"/>

      <svg class="svg-border">
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
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
import { SeoIcon, DesignIcon, DevelopmentIcon, SupportIcon  } from '~/components/icons/index'

export default {
  props: ['icon', 'title', 'descr'],
  components: {
    SeoIcon, DesignIcon, DevelopmentIcon, SupportIcon
  }
  
}
</script>
<style lang="scss">
  .service {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: 0.35s;

    &s__wrapper:hover {
      .service {
        top: -10px;
        
      .service__icon {
          .svg-border rect {
            stroke-dasharray: 0, 125;
            stroke-dashoffset: 25;
            transition: 1.15s cubic-bezier(0.19, 1, 0.22, 1);
          }
        }
      }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 135px;
      height: 135px;
      position: relative;
      // border: 2px solid var(--active);

      svg:not(.svg-border) {
        fill: var(--active);
        width: 60px;
        height: 60px;

        path {
          stroke-width: 2;
        }
      }
      .svg-border {
        position: absolute;
        left: 0;
        top: 0; 
        height: 100%;
        width: 100%;

        rect {
          stroke: var(--active);
          stroke-width: 3;
          stroke-dasharray: 400, 0;
          transition: stroke 0.35s;
          transition: stroke-dasharray 1s ease-in-out;
        }
      }
      
    }
    .caption {
      text-transform: uppercase;
      margin: 30px 0 10px;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
</style>