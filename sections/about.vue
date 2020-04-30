<template>
  <section class="about" @mousemove="e => parralaxEl(e)">
    <h6 class="subtitle">who i am</h6>
    <h2 class="title">about me</h2>

    <div class="row">
      <div class="col-6 about__photo__wrapper" >
        <div class="about__photo">
          <div class="about__photo__square first" ref="firstSquare"></div>
          <div class="about__photo__square second" ref="secondSquare"></div>
          <div class="about__photo__image" ref="picture">
            <div class="about__photo__image__wrapper">
              <img class="" src="" alt="" />
            </div>
            <p class="about__photo__name">Aleks Malyavko</p>
          </div>
        </div>
      </div>
      
      <div class="col-6">
        <div class="about__text">
          <h3 class="about__text__heading heading">I'm Software Developer</h3>
          <p class="about__text__text text">Aasdasdasd asdasdasd asdasdasd asdasdasd adfsaf asdasdasd asdasdasd asdasdasd asdasdasd asdasda asdasdasd asdasdasd</p>
          <p class="about__text__text text">Aasdasdasd asdasdasd asdasdasd asdasdasd adfsaf asdasdasd asdasdasd</p>
          <ul class="about__text__list list">
            <li class="list__item">
              <span class="caption">Full Name:</span><span class="text">Aleks Malyavko</span>
            </li>
            <li class="list__item">
              <span class="caption">Full Name:</span><span class="text">Aleks Malyavko</span>
            </li>
            <li class="list__item">
              <span class="caption">Full Name:</span><span class="text">Aleks Malyavko</span>
            </li>
            <li class="list__item">
              <span class="caption">Full Name:</span><span class="text">Aleks Malyavko</span>
            </li>
          </ul>
          <div class="about__text__button button__container">
            <div class="button ">Downoload CV</div>
            <div class="button button_secondary">Contact me</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import debounceEvent from '~/middleware'

export default {
  components: {
    
  },
  methods: {
    parralaxEl: function(e) {
      debounceEvent(this.parallax(e, this.$refs.firstSquare, 1), 50);
      debounceEvent(this.parallax(e, this.$refs.secondSquare, 1.8), 50);
      debounceEvent(this.parallax(e, this.$refs.picture, 0.35), 50);
    },
    parallax: function (e, target, layer) {
      let layer_coeff = 14 / layer;
      let k1 = -2.5
      let k2 = 2
      let x =  Math.round(target.offsetWidth / k2 - (e.pageX - this.$el.offsetWidth / k1) / layer_coeff);
      let y = Math.round(target.offsetHeight / k2 - (e.pageY - this.$el.offsetHeight / k1) / layer_coeff);
      target.style.top = y +'px';
      target.style.left = x +'px';
    }
  }
}
</script>

<style lang="scss">
  .about {

    &__photo {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 400px;
      min-height: 300px;

      &__square {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid var(--green);
        width: 90%;
        height: 90%;
        z-index: 0;

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

        &__wrapper {
          width: 80px;
          height: 80px;
          border-radius: 100%;
          background: var(--green);
          margin-bottom: 10px;
        }
      }

      &__name {
        font-weight: 300;
        font-size: 1.3rem;
        letter-spacing: 0.5px;
      }
    }

    @media screen and (max-width: 720px) {
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
      }
    }
  }
</style>

