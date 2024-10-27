import { createStore } from 'vuex'
import auth from './modules/auth'
import database from './modules/database'
import routing from './modules/routing'
import frames from './modules/frames'
import message from './modules/message'
import projects from './modules/projects'

export default createStore({
  modules: {
    auth,
    database,
    routing,
    frames,
    message,
    projects
  }
})
