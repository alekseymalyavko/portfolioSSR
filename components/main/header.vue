<template>
  <div class="header" :class="{'unpinned': isScrolled, 'active': !isActive}">
    <div class="container header__content">
      <nuxt-link to="/"><img class="header__logo" src="/images/logo.png" alt="" /></nuxt-link>

      <div class="header__menu__wrapper" :class="{'opened': isOpened}">
        <div class="header__btn" @click="toggleMenu()">
          <span class="header__btn__line"></span>
          <span class="header__btn__line"></span>
          <span class="header__btn__line"></span>
        </div>

        <ul class="header__menu" @click="e => navigateTo(e)">
          <li class="header__menu__item" v-for="(link, index) in content.nav" :key="index">
            <nuxt-link class="header__menu__link link" :to="{ path: '/', hash: link.link }">{{link.text}}</nuxt-link>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import debounceEvent from '~/utils'

export default {
  props: ['content'],
  data() {
    return {
      limitPosition: 400,
      isScrolled: false,
      isActive: true,
      lastPosition: 0,
      isOpened: false,
    }
  },
  watch: {
    isOpened(value) {
      value ? document.body.classList.add('hidden') : document.body.classList.remove('hidden');
    }
  },
  methods: {
    handleScroll: function() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.isScrolled = true;
      } 
      if (this.lastPosition > window.scrollY) {
        this.isScrolled = false;
      }
      if (window.scrollY < 40) {
        this.isActive = true
      } else {
        this.isActive = false
      }
      this.lastPosition = window.scrollY;
    },
    toggleMenu: function() {
      this.isOpened = !this.isOpened;
    },
    navigateTo: function(e) {
      if(e.target.classList.contains('link')) {
        this.isOpened = false;
      }
    }
  },
  mounted() {
    if (window.scrollY > 40) {
      this.isActive = false
    }

    window.addEventListener('scroll', debounceEvent(this.handleScroll, 100));
  },
  destroyed: function () {
    window.removeEventListener('scroll', debounceEvent(this.handleScroll, 100));
  },
}
</script>

<style lang="scss">
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 10px 0;
    z-index: 6;
    transform: translateY(0%);
    will-change: transform;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &.unpinned {
      transform: translateY(-100%);
    }
    &.active {
      height: 56px;
      background: var(--dark-blue);
      box-shadow: rgb(2, 12, 27) 0px 10px 30px -10px;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      display: block;
      width: 50px;
    }


    &__btn {
      cursor: pointer;
      display: none;
      z-index: 7;
      position: relative;
      padding: 10px 5px;

      &__line {
        display: block;
        height: 2px;
        width: 40px;
        margin-bottom: 6px;
        opacity: 1;
        background: var(--white);
        transition: opacity 0.3s, transform 0.3s;

        &:last-child {
          margin: 0;
        }
      }

      &:hover &__line {
        background: var(--active);
      }

    }

    &__menu {
      &__wrapper {
        display: flex;

        &.opened {
          .header__btn__line {
            transform: translateX(30px);
            opacity: 0;
          }
          .header__btn__line:first-child {
            opacity: 1;
            transform: rotate(45deg);
            transform-origin: 10px;
          }
          .header__btn__line:last-child {
            opacity: 1;
            transform: rotate(-45deg);
            transform-origin: 8px;
          }
        }
      }


      display: flex;
      &__item {
        margin-right: 30px;
        .link {
          text-transform: uppercase;
        }
        &:last-child {
          margin: 0;
        }
      }
    }

    @media screen and (max-width: 745px){
      &__menu {
        .opened & {
          transform: translateX(0vw);
          visibility: visible;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 75vw;
        min-width: 240px;
        padding: 50px;
        background: var(--dark);

        position: fixed;
        top: 0px;
        bottom: 0px;
        right: 0px;
        height: 100vh;
        z-index: 6;
        transform: translateX(100vw);
        visibility: hidden;
        transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

        &__item {
          margin: 30px !important;
        }
      }
      &__btn {
        display: block;
      }
    }
  }
</style>