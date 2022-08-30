<template>
<div class="contact__form">
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
</template>

<script>
import Spinner from '~/components/main/spinner'

export default {
  props: ['text'],
  components: {
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
  .contact__form {
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
      margin-top: 35px;
      min-height: 300px;

      .form, 
      .contact__info .text {
        max-width: none;
      }
    }
  }
</style>