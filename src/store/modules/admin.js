export default {
  state: {
    projectId: localStorage.getItem('projectId') || '',
    frameName: localStorage.getItem('frameName') || 'LinksMain',
  },
  mutations: {
    // removeCont(state, indexCont) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].contacts.splice(indexCont, 1)
    // },
    // addCont(state) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].contacts.unshift({ name: '', phone: '', email: '', comment: '' })
    // },
    // removePass(state, indexPass) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].passwords.splice(indexPass, 1)
    // },
    // addPass(state) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].passwords.unshift({ title: '', login: '', password: '', comment: '' })
    // },
    // removeProject(state, id) {
    //   state.projects = state.projects.filter(item => item.id !== id)
    // },
    setProjectId(state, id) {
      state.projectId = id
      localStorage.setItem('projectId', id)
    },
    setFrameName(state, frame) {
      state.frameName = frame
      localStorage.setItem('frameName', frame)
    },
    // getProjects(state, projects) {
    //   state.projects = projects
    // },
    // addProject(state, project) {
    //   state.projects.push(project)
    // },
    // changeLoading(state, value) {
    //   state.loading = value
    // },
  },

  getters: {
    projectId: state => state.projectId,
    frameName: state => state.frameName
  }
}