<template>
  <div class="generator" :class="{active: isActive}" @focusout="isActive = false" tabindex="0">
    <div class="generator__wrapper">
      <div class="generator__list" @click="e => this.chooseColor(e)">
        <div class="generator__list__item" style="background: #fe0000" data-color="#fe0000"></div>
        <div class="generator__list__item" style="background: #0ABC5C" data-color="#0ABC5C"></div>
        <div class="generator__list__item" style="background: #fee600" data-color="#fee600"></div>
        <div class="generator__list__item" style="background: #00bcf9" data-color="#00bcf9"></div>
      </div>
      <div class="generator__value text">
        {{currentHexColor}}
      </div>
      <div class="generator__button">
        <div class="button" @click="e => this.generateColor()">random</div>
      </div>
      <div class="generator__color" @click="e => this.toggleGenerator(e)">
        <WaterIcon/>
      </div>
    </div>
  </div>
</template>

<script>
import { WaterIcon } from '~/components/icons/index';

export default {
  props: ['currentHexColor'],
  components: {
    WaterIcon
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleGenerator: function() {
      this.isActive = !this.isActive;
    },
    generateColor: function() {
      const randomCharacters = "1234567890abcdef".split("");
      const randomColor = function () {
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += randomCharacters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      let currentColor = randomColor()
      this.changeColor([currentColor, this.convertToRgba(currentColor, 0.2)])

    },
    convertToRgba: function(hex, alpha = 1) {
      const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
      return [`rgba(${r},${g},${b},${alpha})`, `${r},${g},${b}`];
    },
    chooseColor: function(e) {
      const color = e.target.getAttribute('data-color');
      if (color) {
        this.changeColor([color, this.convertToRgba(color, 0.2)])
      }
    },
    changeColor: function(colors) {
      this.$emit('changeColor', colors)
    }
  }
}
</script>

<style lang="scss">
  @keyframes play {
    0% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(115%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .generator {
    position: fixed;
    right: 0;
    top: 80px;
    transform: translateX(100%);
    z-index: 5;
    transition: all 0.35s ease-in-out;

    animation: play 0.55s ease-in-out;
    animation-delay: 3s;
    animation-iteration-count: 3;
    
    &.active {
      transform: translateX(0);    
    }
    &__wrapper {      
      position: relative;
      text-align: center;
      width: 115px;
      border: 1px solid var(--active);
      background: var(--black);     
      box-shadow: #000a1485 2px 2px 20px 10px;
      transition: border 0.35s;

    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 15px;

      &__item {
        margin: 5px;
        width: 25px;
        height: 25px;
        background: var(--active);
        border: 1px solid transparent;
        border-radius: 2px;
        cursor: pointer;
        transition: 0.35s;

        &:hover {
          border: 1px solid var(--white);
        }
      }
    }
    &__value {
      background: #313131;
      padding: 5px 20px;
      color: white;
      margin: 0;
    }
    &__color {
      cursor: pointer;
      position: absolute;
      top: -1px;
      right: calc(100% + 1px);
      width: 70px;
      height: 70px;
      padding: 10px;
      border: 1px solid var(--active);
      background: var(--black);
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      border-right: none;
      box-shadow: #020c1b 0px 10px 30px -10px;
      transition: border 0.35s;

      svg {
        transition: fill 0.35s;
        fill: var(--active)
      }
    }
    &__button {
      margin: 12px 0 7px;

      .button {
        margin: 0;
        padding: 8px 13px;
        font-size: 16px;
      }
    }

    @media screen and (max-width: 745px) {
      &__wrapper {
        width: 100px;
      }
      &__list {
        padding: 10px;
      }
      &__color {
        width: 50px;
        height: 50px;
      }
      &__button {
        .button {
          padding: 7px 10px;
        }
      }
    }
  }
</style>