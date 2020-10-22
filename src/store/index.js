// import Vue from 'vue'
// import Vuex from 'vuex'

import { createStore } from 'vuex'
import project from './modules/project'
import user from './modules/user'
import message from './modules/message'

//Vue.use(Vuex)

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    project,
    user,
    message
  }
})
