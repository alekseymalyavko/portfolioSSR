<template>
  <section class="about" @mousemove="e => parralaxEl(e)">
    <div data-animate="animated fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>
    
    <div class="row">
      <div class="col-6 about__photo__wrapper" ref="photoWrapper" data-animate="animated fadeInLeft delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <div class="about__photo">
          <div class="about__photo__square first" ref="firstSquare"></div>
          <div class="about__photo__square second" ref="secondSquare"></div>
          <div class="about__photo__image" ref="picture">
            <div class="about__photo__image__wrapper">
              <img src="/images/me1.jpg" :alt="`${text.image.text}`" loading="lazy"/>
            </div>
            <p class="about__photo__name">{{text.image.text}}</p>
          </div>
        </div>
      </div>
      
      <div class="col-6" data-animate="animated fadeInRight delay-6" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <div class="about__text">
          <h3 class="about__text__heading heading">{{text.title}}</h3>
          <p class="about__text__text text" v-for="(item, index) in text.descr" :key="index">
            {{item}}
          </p>
          <ul class="about__text__list list">
            <li class="list__item"  v-for="(item, index) in text.personal" :key="index">
              <span class="text">{{item.category}}:</span><span class="caption">{{item.value}}</span>
            </li>
          </ul>
          <div class="about__text__button button__container">
            <a href="/AleksMalyavko_CV.pdf" target="_blank" aria-label="resume" rel="nofollow noopener noreferrer">
              <div class="button ">{{text.btn[0].text}}</div>
            </a>
            <nuxt-link to="#contacts">
              <div class="button button_secondary">{{text.btn[1].text}}</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import debounceEvent from '~/utils'

export default {
  props: ['text'],
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    parralaxEl: function(e) {
      debounceEvent(this.parallax(e, this.$refs.firstSquare, 1), 100);
      debounceEvent(this.parallax(e, this.$refs.secondSquare, 1.5), 100);
      debounceEvent(this.parallax(e, this.$refs.picture, 0.35), 150);
    },
    parallax: function (e, target, layer) {
      const defaultX = 50;
      let layer_coeff = 16 / layer;
      let k1 = -2.5
      let k2 = 2
      let x =  Math.round(target.offsetWidth / k2 - (e.pageX - this.$el.offsetWidth / k1) / layer_coeff);
      let y = Math.round(target.offsetHeight / k2 - (e.pageY - this.$el.offsetHeight / k1) / layer_coeff);

      let cond = this.$refs.photoWrapper.getBoundingClientRect().right - x > target.getBoundingClientRect().right;
      if (cond) {
        target.style.top = y +'px';
        target.style.left = x +'px';
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
  .about {

    &__text {
      .list__item {
        align-items: baseline;
      }
    }

    &__photo {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 400px;
      min-height: 350px;

      &__square {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid var(--active);
        width: 90%;
        height: 90%;
        z-index: 0;
        transition: background 0.35s;

        &:hover {
          background: var(--light-active)
        }

        &.second {
          left: unset;
          top: unset;
          bottom: 0;
          right: 0;
        }
      }

      &__image {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 4;

        &__wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: var(--active);
          margin-bottom: 10px;
          overflow: hidden;
          transition: 0.35s ease-in-out;

          &:hover {
            transform: scale(1.2)
          }
        }
      }

      &__name {
        font-weight: 300;
        font-size: 1.3rem;
        letter-spacing: 0.5px;
      }
    }

    @media screen and (max-width: 745px) {
      &__photo {
        margin: 0 auto;
        &__square {
          top: 0 !important;
          left: 0 !important;
          &.second {
            top: unset !important;
            left: unset !important;
          }
        }
        &__image {
          position: static;
        }
      }
      &__text {
        margin-top: 25px;

        &__button {
          .button:last-child {
            margin-top: 0;
          }
        }
      }
    }
    @media screen and (max-width: 430px) {
      &__photo {
        width: 330px;
        height: 330px;
        min-height: unset;

      }
    }
    @media screen and (max-width: 360px) {
      &__photo {
        width: 290px;
        height: 290px;
      }
    }
  }
</style>

