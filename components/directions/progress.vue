<template lang="html">
  <div class="progress">
    <div class="progress__wrapper">
      <div class="caption">
        {{title}}
      </div>
      <div class="text">
        {{progressIndicator}}%
      </div>
    </div>
    <div class="progress__indicator">
      <span :style="{width: progressIndicator + '%'}"></span>
    </div>
    <div class="text">
      {{descr}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['progress', 'title', 'descr'],
  data() {
    return {
      startCount: 0,
      stopCount: this.progress,
      progressIndicator: 0,
    }
  },
  mounted() {
    this.startCounter()
  },
  methods: {
    startCounter: function() {
      let duration = (Math.abs(this.startCount - this.stopCount) / 100) * 8000,
      intervalTime = duration / Math.abs(this.startCount - this.stopCount);

      let countDown = setInterval(() => {
        if (this.startCount === this.stopCount) {
          clearInterval(countDown);
        }
        this.progressIndicator = this.startCount;
        this.startCount > this.stopCount ? this.startCount-- : this.startCount++
      }, intervalTime / 2);
    }
  }
}
</script>
<style lang="scss">
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
        // transition: 0.4s;
      }
    }
  }
</style>