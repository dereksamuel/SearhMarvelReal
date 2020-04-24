import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      oauth.getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.etag)
        })
        .catch((err) => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          console.log('Done!')
          setTimeout(() => {
            commit('loading/SET_LOADING', false, { root: true })
          }, 2000)
        })
    }
  }
}
