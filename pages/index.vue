<template>
  <main>
    <Hero :text="textInfo.hero"/>
    <About :text="textInfo.about" id="about"/>
    <Directions :text="textInfo.directions"/>
    <Services :text="textInfo.services"/>
    <Skills :text="textInfo.skills" id="skills"/>
    <Portfolio :text="textInfo.portfolio" id="portfolio"/>
    <Contacts :text="textInfo.contacts" id="contacts"/>
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

import textInfo from '~/assets/data.json';

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
  asyncData () {
    return {
      textInfo      
    }
  }
}
</script>

<style>

</style>

