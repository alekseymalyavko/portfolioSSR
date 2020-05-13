<template>
  <div class="project">
    <div class="section__heading">
      <h6 class="subtitle">site</h6>
      <h2 class="title">METRICA</h2>
    </div>
    <div class="project__info">
      <div class="project__info__container row">
        <div class="project__info__item col-8">
          <span class="caption">Stack:</span>
          <span class="text">UX / UI / SEO / HTML / CSS / JS / jQuery</span>
        </div>
        <div class="project__info__item col-2">
          <span class="caption">URL:</span>
          <span class="text">metrica.by</span>
        </div>
        <div class="project__info__item col-2">
          <span class="caption">Codebase:</span>
          <span class="text">github</span>
        </div>
      </div>
      <div class="row">
        <div class="project__info__item descr col-8">
          <span class="caption">Description:</span>
          <span class="text">fsdfsdfsdef fsdfsd fsdfsdf fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef fsdfsdfsdef  </span>
        </div>
        <div class="project__info__item col-4">
          <img class="project__info__logo" src="/images/portfolio/metrica-0.png" alt=""/>
        </div>
      </div>
    </div>
    
    <div class="project__content browser">
      <div class="browser__actions">
				<span></span>
				<span></span>
				<span></span>
			</div>
      <div class="project__content__container slider">
        
        <no-ssr placeholder="Loading...">
            <div class="project__content__main">
              <agile ref="main" :options="options1" :as-nav-for="asNavFor1">
                <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">
                  <div class="project__content__image">
                    <img :src="slide"/>
                  </div>
                </div>
                <template slot="prevButton">❬</template>
                <template slot="nextButton">❭</template>
              </agile>
            </div>
            <div class="project__content__gallery">
              <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
                <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="slideTo(index)">
                  <div class="project__content__gallery__item">            
                    <img :src="slide"/>
                  </div>
                </div>
              </agile>
            </div>
        </no-ssr>

      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  components: {
    agile: VueAgile
  },
  validate({ params, query }) {
    // console.log(123, { params, query })
    return true // 
    // return false // 
  },
  data() {
    return {
      title: this.$route.params.project,
      asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
        navButtons: true,
			},
			options2: {
				dots: true,
				navButtons: false,
        slidesToShow: 3,
        infinite: false,
			},
			slides: [
        '/images/portfolio/metrica-1.png',
        '/images/portfolio/metrica-2.png',
        '/images/portfolio/metrica-0.png',
      ]
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'description' }
      ]
    }
  },
  methods: {
    slideTo: function(index) {
      this.$refs.thumbnails.goTo(index);
      this.$refs.main.goTo(index);
    }
  },
  mounted() {
    this.asNavFor2.push(this.$refs.main)
    this.asNavFor1.push(this.$refs.thumbnails)
    
  },
}
</script>

<style lang="scss">
  .agile--ssr .agile__slides > * {
      overflow: hidden;
      width: 0
  }
  .agile--ssr .agile__slides > *:first-child {
      width: 100%
  }
  .agile {
    position: relative;
    user-select: none;
  }
  .agile__dot button {
    border: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--white);
    margin-right: 6px;
    transition: 0.35s;

    &:hover {
      background: var(--active);
    }
  }
  .agile__dot--current button {
    background: var(--active);
  }
  .agile__nav-button {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;

    &--next {
      left: auto;
      right: 0;
    }

    border: none;
    background: none;
    font-size: 55px;
    padding: 10px;
    color: var(--active);
    opacity: 0.7;
    transition: 0.35s;

    &:hover {
      opacity: 1;
    }
  }


  .browser {
    padding: 10px;
    border-radius: 6px;
    background: var(--dark);

    &__actions {
      display: flex;
      margin-bottom: 10px;

      span {
        width: 15px;
        height: 15px;
        border-radius: 50%;

        &:not(:last-child) {
          margin-right: 5px;
        }
        &:nth-child(1) {
          background: #ff5552;
        }
        &:nth-child(2) {
          background: #ffbe4c;
        }
        &:nth-child(3) {
          background: #00cb57;
        }
      }
    }
  }

  .project {
    width: 100%;
    padding-bottom: 60px;

    .row {
      margin: 0;
    }

    &__info {
      
      &__item {
        padding: 15px 0;
        &.descr {
          max-width: 800px;
        }
      }

      .caption {
        color: var(--active);
      }
    }

    &__content {
      margin-top: 60px;

      &__image {
        min-height: 400px;
        height: 55vh;
        overflow-y: auto;
      }
      &__gallery {
        margin-top: 20px;

        &__item {
          height: 150px;
          overflow: hidden;
          border: 1px solid transparent;
          transition: 0.35s;
          &:hover,
          &:active {
            border: 1px solid var(--active);
          }
        }
        .agile__actions {
          padding-top: 10px;
        }
      }
    }

    @media screen and (max-width: 719px) {
      &__info {
        padding: 0 10px;

        &__container {
          display: block;
        }
      }
    }
  }
</style>