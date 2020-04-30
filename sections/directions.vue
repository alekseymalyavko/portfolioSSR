<template>
  <section class="directions">
    <h3 class="directions__heading heading">My work areas</h3>

    <div class="row">  

      <div class="col-4">
        <div class="progress">
          <div class="progress__wrapper">
            <div class="caption">
              Web -development
            </div>
            <div class="text">
              78%
            </div>
          </div>
          <div class="progress__indicator">
            <span></span>
          </div>
          <div class="text">
            Creating web applications using front-end and back-end technologies
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="progress">
          <div class="progress__wrapper">
            <div class="caption">
              Web -development
            </div>
            <div class="text">
              78%
            </div>
          </div>
          <div class="progress__indicator">
            <span></span>
          </div>
          <div class="text">
            Creating web applications using front-end and back-end technologies
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="progress">
          <div class="progress__wrapper">
            <div class="caption">
              Web -development
            </div>
            <div class="text">
              78%
            </div>
          </div>
          <div class="progress__indicator">
            <span></span>
          </div>
          <div class="text">
            Creating web applications using front-end and back-end technologies
          </div>
        </div>
      </div>

    </div>
    <Count/>
  </section>
</template>

<script>
import Count from '~/components/directions/progress'

export default {
  components: {
    Count
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
  .directions {

    .progress {

      &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
      }

      .text {
        margin: 0;
      }

      &__indicator {
        height: 5px;
        border: 1px solid var(--green);
        margin: 10px 0;
        position: relative;

        span {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 50%;
          background: var(--green);
          transition: 0.4s;
        }
      }
    }
  }
</style>

