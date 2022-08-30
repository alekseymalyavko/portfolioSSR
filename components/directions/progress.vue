<template lang="html">
  <div class="progress" v-waypoint="{ active: true, callback: onWaypoint }">
    <div class="progress__wrapper">
      <div class="caption">
        {{title}}
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
    },
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startCounter();
      }
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
      height: 7px;
      border: 1px solid var(--active);
      margin: 10px 0;
      position: relative;

      span {
        position: absolute;
        top: -1px;
        left: 0;
        height: calc(100% + 1px);
        width: 50%;
        background: var(--active);
        // transition: 0.4s;
      }
    }
  }
</style>