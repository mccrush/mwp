import { db } from '@/firebase'

export default {
  state: {
    projects: [],
    projectId: localStorage.getItem('projectId') || '',
    frameName: localStorage.getItem('frameName') || 'Info',
    loading: false,
  },
  mutations: {
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
    async updateProject({ commit }, { id, field, value }) {
      console.log('in upd:', id, field, value);
      commit('changeLoading', true)
      const ref = db.collection('projects').doc(id)
      const res = await ref.update({ [field]: value })
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