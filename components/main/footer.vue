<template>
  <footer class="footer">
    <div class="footer__icons__wrapper">
      <ul class="footer__icons">
        <li class="icon active">
          <a href="https://www.linkedin.com/in/aleks-malyavko-8b745b1ab/" target="_blank" rel="nofollow noopener noreferrer">
            <InIcon/>
          </a>
        </li>
        <li class="icon active">
          <a href="https://github.com/alekseymalyavko" target="_blank" rel="nofollow noopener noreferrer">
            <GhIcon/>
          </a>
        </li>
        <li class="icon active">
          <a href="https://t.me/aleksmalyavko" target="_blank" rel="nofollow noopener noreferrer">
            <TgIcon/>
          </a>
        </li>
      </ul>
    </div>
    <p class="footer__text text light">{{content.title}}</p>
  </footer>
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