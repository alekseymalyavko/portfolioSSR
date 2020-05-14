<template>
  <section class="contacts">
    <div data-animate="animate__animated animate__fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">get in touch</h6>
      <h2 class="title">Contacts</h2>
    </div>
    <!-- <p class="contacts__note text">
      Adasd asda sd asdasdasd asdasdasd asda sdasdasdasd aasdasd.
    </p> -->
    
    <div class="row">
      <div class="contacts__info col-6" data-animate="animate__animated animate__fadeInLeft delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <h3 class="contacts__info__heading heading">JUST SAY HELLO !</h3>
        <p class="text">The idea of the site is to purchasing big varietty of balloons in Canada. The idea of the site is to purchasing big varietty of balloons in Canada.</p>
        <ul class="contacts__info__list list without-dots">
          <li class="list__item ">
            <i class="icon"><PhoneIcon/></i> <a href="/"><span class="caption">Minsk, Belarus</span></a>
          </li>
          <li class="list__item ">
            <i class="icon"><MailIcon/></i> <a href="/"><span class="caption">Minsk, Belarus</span></a>
          </li>
          <li class="list__item ">
            <i class="icon"><LocationIcon/></i> <a href="/"><span class="caption">Minsk, Belarus</span></a>
          </li>
        </ul>
      </div>
      <div class="contacts__form col-6" data-animate="animate__animated animate__fadeInRight delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <form class="form">
          <div class="form__row">
            <div class="form__input__wrapper">
              <input class="input form__input" type="text" placeholder="" required @blur="e => isEmpty(e)"/>
              <label>Name</label>
            </div>
            <div class="form__input__wrapper">
              <input class="input form__input" type="text" placeholder="" required @blur="e => isEmpty(e)"/>
              <label>Subject</label>
            </div>
          </div>
          <div class="form__input__wrapper">
            <textarea class="input form__input" rows="6" placeholder="" required @blur="e => isEmpty(e)"/>
            <label>Your message</label>
          </div>
          <input class="button " type="submit" value="Send"/>
        </form>
      </div>
    </div>
    
  </section>
</template>

<script>
import { PhoneIcon, MailIcon, LocationIcon } from '~/components/icons/index'

export default {
  components: {
    PhoneIcon,
    MailIcon,
    LocationIcon
  },
  methods: {
    isEmpty: function(e) {
      
      if (e.target.value.length > 0) {
        e.target.parentNode.classList.add('active')
      } else {
        e.target.parentNode.classList.remove('active')
      }
    },
    onWaypoint({el, going}) {
      if (going === this.$waypointMap.GOING_IN) {
        let naming = el.getAttribute('data-animate').split(' ');
        el.classList.add(...naming)
      }
    }
  }
}
</script>

<style lang="scss">
  .contacts {
    padding-bottom: 120px;

    &__info {

      .list__item {
        padding-left: 15px;
        margin-bottom: 15px;
      }
      .text {
        margin-bottom: 25px;
        max-width: 450px;
      }
    }

    .form {
      max-width: 550px;

      &__input__wrapper {
        position: relative;
        margin-bottom: 10px;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #0ABC5C;
          background: var(--active);
          transition: 0.45s;
        }
        &.active:after {
          width: 100%;
        }
        label {
          position: absolute;
          top: 0;
          left: 10px;
          padding: 10px 0;
          pointer-events: none;
          transition: 0.25s;
          color: var(--white);
        }

        &.active .form__input + label,        
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
        font-size: 18px;
        padding: 10px;
        padding-top: 21px;
        background: var(--black);
        width: 100%;
        resize: none;
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

