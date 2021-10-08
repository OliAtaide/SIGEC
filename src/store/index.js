import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    vinculos: [],
  },
  mutations: {
    setVinculos: (state, vinculos) => (state.vinculos = vinculos),
    setVinculo: (state, vinculo) => (state.vinculos.push(vinculo))
  },
  actions: {
    async getVinculos({ commit }) {
      const response = await axios
        .get("/vinculos");

      commit('setVinculos', response.data.data)
    },
  },
  modules: {
  }
})
