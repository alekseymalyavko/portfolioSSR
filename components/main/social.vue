<template>
  <div class="social">
    <div class="social__content">
      <p class="social__text text">Follow me</p>
      <ul class="social__icons ">
        <li class="icon">
          <InIcon/>
        </li>
        <li class="icon">
          <GhIcon/>
        </li>
        <li class="icon">
          <FbIcon/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { InIcon, GhIcon, FbIcon } from '~/components/icons/index'
export default {
  components: {
    InIcon,
    GhIcon,
    FbIcon
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
  @media screen and (max-width: 719px) {
    display: none;
  }
}
</style>