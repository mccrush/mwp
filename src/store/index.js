import { createStore } from 'vuex'
import admin from './modules/admin'
import user from './modules/user'
import message from './modules/message'
import realtime from './modules/realtime'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin,
    user,
    message,
    realtime
  }
})
