import { db } from '@/firebase'

export default {
  state: {
    projects: [],
    loading: false,
  },
  mutations: {
    addProject(state, project) {
      state.projects.push(project)
    },
    changeLoading(state, value) {
      state.loading = value
    },
  },
  actions: {
    async addProject({ commit }, project) {
      commit('changeLoading', true)
      const ref = db.collection('projects').doc(project.id)
      const res = await ref.set(project, { merge: true })
      commit('changeLoading', false)
      return true
    }
  },
  getters: {
    projects: state => state.projects,
    loading: state => state.loading
  }
}