import { createStore } from 'vuex'
import routing from './modules/routing'
import admin from './modules/admin'
import user from './modules/user'
import message from './modules/message'
import realtime from './modules/realtime'

export default createStore({
  modules: {
    routing,
    admin,
    user,
    message,
    realtime
  }
})
