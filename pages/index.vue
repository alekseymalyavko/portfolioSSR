<template>
  <main>
    <Hero :text="content.hero"/>
    <About :text="content.about" id="about"/>
    <Directions :text="content.directions"/>
    <Services :text="content.services"/>
    <Skills :text="content.skills" id="skills"/>
    <Portfolio :text="content.portfolio" id="portfolio"/>
    <Contacts :text="content.contacts" id="contacts"/>
  </main>
</template>

<script>
import Hero from '~/sections/hero'
import About from '~/sections/about'
import Directions from '~/sections/directions'
import Services from '~/sections/services'
import Skills from '~/sections/skills'
import Portfolio from '~/sections/portfolio'
import Contacts from '~/sections/contacts'

import { mapGetters } from 'vuex'
export default {
  components: {
    Hero,
    About,
    Directions,
    Services,
    Skills,
    Portfolio,
    Contacts
  },
  computed: mapGetters({
    content: 'getData',
  })
}
</script>

<style>

</style>

