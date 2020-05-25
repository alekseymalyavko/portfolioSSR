export const state = () => ({
  data: null
})

export const mutations = {
  setData (state, value) {
    state.data = value
  }
}

export const getters = {
  getData (state) {
    return state.data
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    const data = await fetch(`${process.env.baseUrl}/api/data`)
    .then(res => res.json())
    commit('setData', data);
  }
}
