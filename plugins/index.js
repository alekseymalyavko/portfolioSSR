import Vue from "vue"
import VueWaypoint from "vue-waypoint"
import VueAgile from 'vue-agile'
import smoothscroll from 'smoothscroll-polyfill'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)
Vue.use(VueWaypoint)
Vue.use(VueAgile)
smoothscroll.polyfill();
  