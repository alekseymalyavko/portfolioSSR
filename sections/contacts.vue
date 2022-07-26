<template>
  <section class="contacts">
    <div data-animate="animated fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>
    
    <div class="row">
      <div class="contacts__info col-6" data-animate="animated fadeInLeft delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <h3 class="contacts__info__heading heading">{{text.title}}</h3>
        <p class="text">{{text.descr}}</p>
        <ul class="contacts__info__list list without-dots">
          <!-- <li class="list__item ">
            <i class="icon"><PhoneIcon/></i> <a :href="`tel:${text.contacts.tel}`"><span class="caption">{{text.contacts.tel}}</span></a>
          </li> -->
          <li class="list__item ">
            <i class="icon"><MailIcon/></i> <a :href="`mailto:${text.contacts.mail}`"><span class="caption">{{text.contacts.mail}}</span></a>
          </li>
          <li class="list__item ">
            <i class="icon"><LocationIcon/></i> <a href="https://goo.gl/maps/vkNhdqywazneYsPr9" target="_blank" rel="noopener"><span class="caption">{{text.contacts.location}}</span></a>
          </li>
        </ul>
      </div>
      <div class="contacts__form col-6" data-animate="animated fadeInRight delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <div class="contact__message" :class="{active: isSubmitted}">
          <h5>{{text.message.success}}</h5>
          <p class="text">{{text.message.success2}}</p>
        </div>
        <div class="contact__message" :class="{active: isError}">
          <h5>{{text.message.error}}</h5>
        </div>
        <form class="form" :class="{active: !isSubmitted && !isError}" ref="contactForm" @submit.prevent="sendMessage">
          <div class="form__row">
            <div class="form__input__wrapper">
              <input id="name" class="input form__input" type="text" placeholder="" v-model="name" required @blur="e => isEmpty(e)"/>
              <label for="name">{{text.form.name}}</label>
            </div>
            <div class="form__input__wrapper">
              <input id="email" class="input form__input" type="email" placeholder="" v-model="email" required @blur="e => isEmpty(e)"/>
              <label for="email">{{text.form.mail}}</label>
            </div>
          </div>
          <div class="form__input__wrapper">
            <textarea id="message" class="input form__input" rows="6" placeholder="" v-model="message" required @blur="e => isEmpty(e)"/>
            <label for="message">{{text.form.message}}</label>
          </div>
          <div class="form__btn__wrapper end">
            <div class="form__btn__wrapper">
              <input class="button" type="submit" :value="text.form.submit" :disabled="isSending"/> <Spinner v-if="isSending"/>
            </div>
            <recaptcha  class="recaptcha-field" @error="onError" @success="onSuccess" @expired="onExpired"/>
          </div>
          
        </form>
      </div>
    </div>
          
    
  </section>
</template>

<script>
import { PhoneIcon, MailIcon, LocationIcon } from '~/components/icons/index'
import Spinner from '~/components/main/spinner'

export default {
  props: ['text'],
  components: {
    PhoneIcon,
    MailIcon,
    LocationIcon,
    Spinner
  },
  data() {
    return {
      isSending: false,
      isError: false,
      isSubmitted: false,
      name: null,
      email: null,
      message: null
    }
  },
  methods: {
    async submitForm () {
      this.isSending = true;
      try {
        await this.$axios.$post('contact', {
          name: this.name,
          email: this.email,
          msg: this.message
        }).then((res) => {
          if(res.message) {
            this.isSubmitted = true;
            this.isSending = false;
          } else {
            this.isError = true;
          }
        })
      } catch (e) {
        this.isError = true;
        console.error(e)
      }
    },
    async sendMessage() {
      await this.submitRecaptcha();
      await this.submitForm();
    },
    async submitRecaptcha() {
      try {
        const token = await this.$recaptcha.getResponse();
        await this.$recaptcha.reset();
      } catch (e) {
        this.isError = true;
        console.error(e)
      }
    },
    onError(error) {
      console.log('Error happened:', error)
    },
    onSuccess(token) {
      console.log('Recaptcha success')
    },
    onExpired() {
      console.log('Expired')
    },
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
    &__info {
      .list__item {
        padding-left: 15px;
        margin-bottom: 15px;
        transition: margin 0.3s;

        &:hover {
          margin-left: 10px;
        }
      }
      .text {
        margin-bottom: 25px;
        max-width: 450px;
      }
    }

    .contact__message {
      height: 0;
      opacity: 0;
      visibility: hidden;
      text-align: center;
      transition: 0.5s;

      &.active {
        height: auto;
        opacity: 1;
        visibility: visible;
        transform: translateY(100%);
      }
    }

    .form {
      max-width: 550px;
      height: 0;
      opacity: 0;
      // visibility: hidden;
      transform: translateY(50px);
      transition: 0.5s;

      &.active {
        height: auto;
        opacity: 1;
        // visibility: visible;
        transform: translateY(0);
      }
      &__btn__wrapper {
        display: flex;
        align-items: center;
        margin-top: 10px;

        &.end {
          align-items: flex-start;
        }
      }
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
        display: flex;
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
        -webkit-appearance: none;
        margin-top: 0;
        margin-bottom: 0;
      }

      .recaptcha-field {
        margin-left: auto;
        
        .grecaptcha-badge {
          position: static !important;
        }
      }
    }

    @media screen and (max-width: 745px) {
      padding-bottom: 30px;

      &__form {
        margin-top: 35px;
        min-height: 300px;
      }

      .form, 
      &__info .text {
        max-width: none;
      }
    }
  }
</style>

