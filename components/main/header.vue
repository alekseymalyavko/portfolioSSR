<template>
  <div class="header">
    <img class="header__logo" src="/images/logo.png" alt="" />
    <ul class="header__menu">
      <li class="header__menu__item">
        <a href="javascript:void(0)" class="header__menu__link link">about me</a>
      </li>
      <li class="header__menu__item">
        <a href="javascript:void(0)" class="header__menu__link link">skills</a>
      </li>
      <li class="header__menu__item">
        <a href="javascript:void(0)" class="header__menu__link link">portfolio</a>
      </li>
      <li class="header__menu__item">
        <a href="javascript:void(0)" class="header__menu__link link">contacts</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    &__logo {
      display: block;
      width: 50px;
    }

    &__menu {
      display: flex;

      &__item {
        margin-right: 30px;

        &:last-child {
          margin: 0;
        }
      }

      &__link {
        text-transform: uppercase;
      }
    }
  }
</style>