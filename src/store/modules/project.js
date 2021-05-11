import { db } from '@/firebase'

export default {
  state: {
    projects: [],
    projectId: localStorage.getItem('projectId') || '',
    frameName: localStorage.getItem('frameName') || 'Info',
    loading: false,
  },
  mutations: {
    removeProject(state, id) {
      state.projects = state.projects.filter(item => item.id !== id)
    },
    setProjectId(state, id) {
      state.projectId = id
      localStorage.setItem('projectId', id)
    },
    setFrameName(state, frame) {
      state.frameName = frame
      localStorage.setItem('frameName', frame)
    },
    getProjects(state, projects) {
      state.projects = projects
    },
    addProject(state, project) {
      state.projects.push(project)
    },
    changeLoading(state, value) {
      state.loading = value
    },
  },
  actions: {
    async removeProject({ commit }, id) {
      commit('changeLoading', true)
      const ref = db.collection('projects').doc(id)
      await ref.delete()
      commit('changeLoading', false)
    },
    async updateProject({ commit }, { id, field, value }) {
      //console.log('in upd:', id, field, value);
      commit('changeLoading', true)
      const ref = db.collection('projects').doc(id)
      await ref.update({ [field]: value })
      commit('changeLoading', false)
    },
    async getProjects({ commit }) {
      commit('changeLoading', true)
      let projects = []
      const ref = db.collection('projects')
      const snapshot = await ref.get()
      snapshot.forEach(doc => {
        projects.push(doc.data())
      })
      commit('getProjects', projects)
      commit('changeLoading', false)
    },
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
    projectId: state => state.projectId,
    frameName: state => state.frameName,
    loading: state => state.loading
  }
}