import { db } from '@/firebase'

export default {
  state: {
    projects: [],
  },
  mutations: {
    addProject(state, project) {
      state.projects.push(project)
    }
  },
  actions: {},
  getters: {
    projects: state => state.projects
  }
}