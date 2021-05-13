import { db } from '@/firebase'

export default {
  state: {
    projects: [],
    projectId: localStorage.getItem('projectId') || '',
    frameName: localStorage.getItem('frameName') || 'Info',
    loading: false,
  },
  mutations: {
    removeCont(state, indexCont) {
      const id = state.projectId
      const index = state.projects.findIndex(item => item.id === id)
      state.projects[index].contacts.splice(indexCont, 1)
    },
    addCont(state) {
      const id = state.projectId
      const index = state.projects.findIndex(item => item.id === id)
      state.projects[index].contacts.unshift({ name: '', phone: '', email: '', comment: '' })
    },
    removePass(state, indexPass) {
      const id = state.projectId
      const index = state.projects.findIndex(item => item.id === id)
      state.projects[index].passwords.splice(indexPass, 1)
    },
    addPass(state) {
      const id = state.projectId
      const index = state.projects.findIndex(item => item.id === id)
      state.projects[index].passwords.unshift({ title: '', login: '', password: '', comment: '' })
    },
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
    async updatePass({ commit, state }) {
      commit('changeLoading', true)
      const id = state.projectId
      const index = state.projects.findIndex(item => item.id === id)
      const ref = db.collection('projects').doc(id)
      await ref.update({ passwords: state.projects[index].passwords })
      commit('changeLoading', false)
    },
    async updateCont({ commit, state }) {
      commit('changeLoading', true)
      const id = state.projectId
      const index = state.projects.findIndex(item => item.id === id)
      const ref = db.collection('projects').doc(id)
      await ref.update({ contacts: state.projects[index].contacts })
      commit('changeLoading', false)
    },
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