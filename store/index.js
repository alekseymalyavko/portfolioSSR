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
  async nuxtServerInit ({commit}) {
    const data = await fetch(`${process.env.baseUrl}/api/data`)
    .then(res => res.json())
    commit('setData', data);
    const projects = await fetch(`${process.env.baseUrl}/api/projects`)
    .then(res => res.json())
    commit('setProjects', projects);
  }
}
