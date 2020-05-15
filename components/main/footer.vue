<template>
  <footer class="footer">
    <div class="footer__icons__wrapper">
      <ul class="footer__icons">
        <li class="icon active">
          <InIcon/>
        </li>
        <li class="icon active">
          <GhIcon/>
        </li>
        <li class="icon active">
          <FbIcon/>
        </li>
      </ul>
    </div>
    <p class="footer__text text light">Designed & Built by Aleks Malyavko 👽</p>
  </footer>
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
  .footer {
    padding: 12px 0;
    background: var(--dark-blue);

    &__text {
      text-align: center;
      user-select: none;
      margin: 0;
    }

    &__icons {
      &__wrapper {
        display: none;
        justify-content: center;
        margin-bottom: 20px;
      }

      display: flex;

      .icon {
        margin: 0 13px;
      }
    }

    @media screen and (max-width: 745px){
      &__icons {
        &__wrapper {
          display: flex;
        }
      }
    }
  }
</style>