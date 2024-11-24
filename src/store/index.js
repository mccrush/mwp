import { createStore } from 'vuex'
import auth from './modules/auth'
import routing from './modules/routing'
import message from './modules/message'
import projects from './modules/projects'

export default createStore({
  modules: {
    auth,
    routing,
    message,
    projects
  }
})
