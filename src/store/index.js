import { createStore } from 'vuex'
import project from './modules/project'
import user from './modules/user'
import message from './modules/message'

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
