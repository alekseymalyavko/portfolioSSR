<template>
  <main>
    <Hero/>
    <About id="about"/>
    <Directions/>
    <Services/>
    <Skills id="skills"/>
    <Portfolio id="portfolio"/>
    <Contacts id="contacts"/>
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
}
</script>

<style>

</style>

