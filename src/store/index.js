import { createStore } from 'vuex'
import project from './modules/project'
import user from './modules/user'
import message from './modules/message'
import login from './modules/login'

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
    message,
    login
  }
})
