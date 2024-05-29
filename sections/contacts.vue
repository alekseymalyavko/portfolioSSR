<template>
  <section class="contacts">
    <div data-animate="animated fadeInDown" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.25, 0.75] } }">
      <h6 class="subtitle">{{text.sectionSubtitle}}</h6>
      <h2 class="title">{{text.sectionTitle}}</h2>
    </div>
    
    <div class="row">
      <div class="contacts__info col-6" data-animate="animated fadeInUp delay-3" v-waypoint="{ active: true, callback: onWaypoint, options: { threshold: [0.45, 0.55] } }">
        <h3 class="contacts__info__heading heading">{{text.title}}</h3>
        <p class="text">{{text.descr}}</p>
        <ul class="contacts__info__list list without-dots">
          <li class="list__item ">
            <i class="icon"><MailIcon/></i> <a :href="`mailto:${text.contacts.mail}`"><span class="caption">{{text.contacts.mail}}</span></a>
          </li>
          <li class="list__item ">
            <i class="icon"><LocationIcon/></i> <a href="https://maps.app.goo.gl/dzL2BjeRXoU6PDXM7" target="_blank" rel="noopener"><span class="caption">{{text.contacts.location}}</span></a>
          </li>
        </ul>
      </div>
    </div>
          
    
  </section>
</template>

<script>
import { PhoneIcon, MailIcon, LocationIcon } from '~/components/icons/index'

export default {
  props: ['text'],
  components: {
    PhoneIcon,
    MailIcon,
    LocationIcon
  },
  methods: {
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
      margin: 0 auto;

      .list__item {
        padding-left: 15px;
        padding-bottom: 15px;
        transition: margin 0.3s;

        &:hover {
          margin-left: 10px;
        }
      }
      .text {
        margin-bottom: 25px;
      }
    }

    @media screen and (max-width: 745px) {
      padding-bottom: 30px;
    }
  }
</style>

