import Vue from "vue"
import VueWaypoint from "vue-waypoint"
import VueAgile from 'vue-agile'

VueWaypoint.animate = function(e) {
  console.log(23213, e)
}
console.log(VueWaypoint)
Vue.use(VueWaypoint)
Vue.use(VueAgile)
