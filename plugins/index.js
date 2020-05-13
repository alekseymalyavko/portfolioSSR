import Vue from "vue"
import VueWaypoint from "vue-waypoint"
import VueAgile from 'vue-agile'


class Animate {
  constructor (os) {
    this.os = os
  }

  activate (el, binding) {
    const mod = binding.modifiers
    const value = binding.value

    const animateClass = this.os.animateClass
    const activeClass = this.os.activeClass

    const { top, bottom } = el.getBoundingClientRect()
    const height = document.documentElement.clientHeight
    const inWindow = top < height && bottom > 0
    console.log(4444, top, height, bottom)
    el.classList.add(binding.value)

    if (inWindow) {
      el.classList.add(activeClass)
    } else if (mod.repeat) {
      el.classList.remove(activeClass)
    }
  }
}

const install = (Vue, os = { animateClass: 'animate__animated', activeClass: 'animate-active' }) => {
  let a = new Animate(os)

  Vue.directive('animate', {
    bind (el, binding) {
      el.classList.add(os.animateClass)
    },
    inserted (el, binding) {
      // a.activate(el, binding)
      window.addEventListener('scroll', function () {
        a.activate(el, binding)
      })
    }
  })
}
install(Vue)



Vue.use(VueWaypoint)
Vue.use(VueAgile)
