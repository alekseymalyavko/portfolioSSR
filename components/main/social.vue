<template>
  <div class="social">
    <div class="social__content">
      <p class="social__text text">{{content.title}}</p>
      <ul class="social__icons ">
        <li class="icon">
          <a href="https://www.linkedin.com/in/aleks-malyavko-8b745b1ab/" target="_blank" rel="nofollow noopener noreferrer">
            <InIcon/>
          </a>
        </li>
        <li class="icon">
          <a href="https://github.com/alekseymalyavko" target="_blank" rel="nofollow noopener noreferrer">
            <GhIcon/>
          </a>
        </li>
        <li class="icon">
          <a href="https://t.me/aleksmalyavko" target="_blank" rel="nofollow noopener noreferrer">
            <TgIcon/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { InIcon, GhIcon, TgIcon } from '~/components/icons/index'
export default {
  props: ['content'],
  components: {
    InIcon,
    GhIcon,
    TgIcon
  }
}
</script>

<style lang="scss">
  .social {
    position: fixed;
    bottom: 25px;
    right: 15px;
    z-index: 4;
    transition: bottom 0.35s;

    &:hover {
      bottom: 30px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      user-select: none;
    }

    &__text {
      letter-spacing: 2.5px;
      text-transform: uppercase;
      writing-mode: vertical-rl;
      padding-bottom: 80px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 9px;
        width: 1px;
        height: 65px;
        background: var(--grey);
      }
    }

    &__icons {
      margin-top: 20px;
      
      li {
        margin-bottom: 15px;

        i {
          line-height: 1;
        }
      }
    }
  
  @media screen and (min-width: 1280px) {
    right: calc(95vw / 2 - 1280px / 2);
  }
  @media screen and (max-width: 745px) {
    display: none;
  }
}
</style>