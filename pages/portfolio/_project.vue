<template>
  <main>
    <section class="project">
      <div data-animate="animate__animated animate__fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <h6 class="subtitle">{{currentProject.type}}</h6>
        <h2 class="title">{{currentProject.title}}</h2>
      </div>
      <div class="project__info">
        <div class="project__info__container row" data-animate="animate__animated animate__fadeInLeft delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
          <div class="project__info__item col-10">
            <span class="text bold">Stack:</span>
            <span class="caption">{{currentProject.stack}}</span>
          </div>
          <div class="project__info__item resourses col-2">
            <div v-if="currentProject.link">
              <a :href="`http://${currentProject.link}`" class="link" target="_blank">            
                <LinkIcon/>
                <span class="caption">{{currentProject.link}}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row" data-animate="animate__animated animate__fadeInRight delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
          <div class="project__info__item descr col-8">
            <p class="text bold">Description:</p>
            <p class="text">
              {{currentProject.fullDescr}}
            </p>
          </div>
          <div class="project__info__item image col-4" v-if="currentProject.logo">
            <img :src="currentProject.logo" alt="project logo"/>
          </div>
        </div>
      </div>
      
      <div class="project__content browser" data-animate="animate__animated animate__fadeInUp delay-6" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0, 1] } }">
        <div class="browser__actions">
          <span></span><span></span><span></span>
        </div>
        <div class="project__content__container">
          
          <client-only placeholder="Loading...">
              <div class="project__content__main" style="width: 100%" v-if="currentProject.images.length">
                <agile ref="main" :options="options1">
                  <div class="slide" v-for="(slide, index) in currentProject.images" :key="index" :class="`slide--${index}`">
                    <div class="project__content__image">
                      <img :src="slide"/>
                    </div>
                  </div>
                  <template slot="prevButton">←</template>
                  <template slot="nextButton">→</template>
                </agile>
              </div>
          </client-only>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { LinkIcon } from '~/components/icons/index'
import { VueAgile } from 'vue-agile';
import projects from '~/assets/projects.json';

export default {
  components: {
    LinkIcon,
    agile: VueAgile
  },
  validate({ params, query }) {
    // console.log(123, { params, query })
    return true // 
    // return false // 
  },
  data() {
    return {
      title: `Project ${String(this.$route.params.project).toUpperCase()} | Aleks Malyavko`,
			options1: {
				dots: true,
        navButtons: true,
        infinite: false,
      },
      text: this.projects,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: `Project ${String(this.$route.params.project).toUpperCase()}, information about project, images links and stack which was used.` }
      ]
    }
  },
  methods: {
    onWaypoint({el, going}) {
      if (going === this.$waypointMap.GOING_IN) {
        let naming = el.getAttribute('data-animate').split(' ');
        el.classList.add(...naming)
      }
    }
  },
  asyncData ({route}) {
    const currentProject = projects.filter((item)=> item.title == route.params.project);
    return {
      currentProject: currentProject[0]
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
  .agile--ssr .agile__slides > * {
    overflow: hidden;
    width: 0;
  }
  .agile__slide {
    width: 100% !important;
  }
  .agile--ssr .agile__slides > *:first-child {
    width: 100%
  }
  .agile {
    position: relative;
    user-select: none;
  }
  .agile__dots {
    margin: 0 auto;
  }
  .agile__dot button {
    border: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--white);
    margin-right: 8px;
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
    bottom: -10px;
    right: 50px;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    font-size: 35px;
    color: var(--active);
    opacity: 0.7;
    transition: 0.35s;

    &--next {
      left: auto;
      right: 0;
    }
    &[disabled]{
      visibility: hidden;
      opacity: 0;
    }
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

    .row {
      margin: 0;
    }
    &__info {
      &__item {
        padding: 15px 0;
        
        &.resourses {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        svg {
          width: 25px;
          fill: var(--active);
        }
        & span:last-child {
          margin-left: 5px;
        }
        &.descr {
          max-width: 800px;
        }
      }

      .image {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
          max-width: 270px;
        }
      }
    }

    &__content {
      margin-top: 60px;
      
      .agile__actions {
        padding-top: 10px;
      }
      &__image {
        min-height: 400px;
        height: 75vh;
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

    @media screen and (max-width: 745px) {
      .browser {
        padding: 5px;
      }
      .agile__nav-button {
        position: static;
      }
      &__info {        
        &__item {
          padding: 12px 0;

          svg {
            width: 20px;
          }
        }
        &__container {
          display: block;
        }
      }
      &__content {
        &__image {
          height: 60vh;
        }
      }
    }
  }
</style>