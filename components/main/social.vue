<template>
  <div class="social">
    <div class="social__content">
      <p class="social__text">Follow me</p>
      <ul class="social__icons ">
        <li>
          <i class="icon">o</i>
        </li>
        <li>
          <i class="icon">o</i>
        </li>
        <li>
          <i class="icon">o</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .social {
    position: fixed;
    bottom: 25px;
    right: 15px;
    z-index: 4;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    &__text {
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
        background: var(--white);
      }
    }

    &__icons {
      margin-top: 15px;
      
      li {
        margin-bottom: 15px;

        i {
          line-height: 1;
        }
      }
    }
  
  @media screen and (min-width: 1280px) {
    right: calc(100vw / 2 - 1280px / 2);
  }
}
</style>