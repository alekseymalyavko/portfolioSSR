import Vue from "vue"
import VueWaypoint from "vue-waypoint"

Vue.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  // bind: function (el, binding, vnode) {
  //   // Переключаем фокус на элемент
  //   // el.focus()
  //   console.log(0, el, binding, vnode)
  // },
  update: function (el, binding, vnode, oldVnode) {
    // Переключаем фокус на элемент
    // el.focus()
    console.log(1,el, binding, vnode, oldVnode)
  },
  componentUpdated: function (el, binding, vnode, oldVnode) {
    // Переключаем фокус на элемент
    // el.focus()
    console.log(2, el, binding, vnode, oldVnode)
  }
})
Vue.use(VueWaypoint)