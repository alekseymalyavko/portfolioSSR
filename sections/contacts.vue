<template>
  <section class="contacts">
    <h6 class="subtitle">get in touch</h6>
    <h2 class="title">Contacts</h2>
    
    <!-- <p class="contacts__note text">
      Adasd asda sd asdasdasd asdasdasd asda sdasdasdasd aasdasd.
    </p> -->
    
    <div class="row">
      <div class="contacts__info col-6">
        <h3 class="contacts__info__heading heading">JUST SAY HELLO !</h3>
        <p class="text">The idea of the site is to purchasing big varietty of balloons in Canada. The idea of the site is to purchasing big varietty of balloons in Canada.</p>
        <ul class="contacts__info__list list ">
          <li class="list__item ">
            <i class="icon">D</i> <a href="/"><span class="caption">Minsk, Belarus</span></a>
          </li>
          <li class="list__item ">
            <i class="icon">D</i> <a href="/"><span class="caption">Minsk, Belarus</span></a>
          </li>
          <li class="list__item ">
            <i class="icon">D</i> <a href="/"><span class="caption">Minsk, Belarus</span></a>
          </li>
        </ul>
      </div>
      <div class="contacts__form col-6">
        <form class="form">
          <div class="form__row">
            <div class="form__input__wrapper">
              <input class="input form__input" type="text" placeholder=""/>
              <label>Name</label>
            </div>
            <div class="form__input__wrapper">
              <input class="input form__input" type="text" placeholder=""/>
              <label>Subject</label>
            </div>
          </div>
          <div class="form__input__wrapper">
            <textarea class="input form__input" rows="5" placeholder=""/>
            <label>Your message</label>
          </div>
          <input class="button " type="submit" value="Send"/>
        </form>
      </div>
    </div>
    
  </section>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style lang="scss">
  .contacts {

    &__info {

      .list__item {
        padding-left: 15px;
        margin-bottom: 13px;
      }
      .text {
        margin-bottom: 25px;
        max-width: 450px;
      }
    }

    .form {
      max-width: 450px;

      &__input__wrapper {
        position: relative;

        label {
          position: absolute;
          top: 0;
          left: 10px;
          padding: 10px 0;
          pointer-events: none;
          transition: 0.25s;
          color: var(--white);
        }

        .form__input:active + label,
        .form__input:focus + label {
          color: var(--grey);
          transform: scale(0.7);
          transform-origin: left top;
          padding-top: 0;
        }
      }

      input:not([type="submit"]), 
      textarea {
        font-size: 16px;
        padding: 10px;
        padding-top: 20px;
        background: #323232;
        width: 100%;
        resize: none;
        margin-bottom: 10px;
        color: var(--white);
        border-radius: 2px;
      }
      
      &__row {
        display: flex;

        div {
          width: 100%;
        }
        div:first-child {
          margin-right: 10px;
        }
      }

      .button {
        margin-top: 10px;
      }
    }

    @media screen and (max-width: 720px) {
      &__form {
        margin-top: 35px;
      }

      .form, 
      &__info .text {
        max-width: none;
      }
    }
  }
</style>

