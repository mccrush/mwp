import { createStore } from 'vuex'
import routing from './modules/routing'
import admin from './modules/admin'
import user from './modules/user'
import message from './modules/message'
import realtime from './modules/realtime'
import database from './modules/database'
import projects from './modules/projects'

export default createStore({
  modules: {
    routing,
    admin,
    user,
    message,
    realtime,
    database,
    projects
  }
})
