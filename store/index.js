import data from '~/assets/data.json'
import projects from '~/assets/projects.json'

export const state = () => ({
  data: null,
  projects: null
})

export const mutations = {
  setData (state, value) {
    state.data = value
  },
  setProjects (state, value) {
    state.projects = value
  }
}

export const getters = {
  getData (state) {
    return state.data
  },
  getProjects (state) {
    return state.projects
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    commit('setData', data)
    commit('setProjects', projects)
  }
}
